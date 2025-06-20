// utils/request.js
import envConfig, { SERVICE_CODE } from '@/config/env'
import { getToken } from './auth'
import { getTokenKey } from '@/config/env.js';
import useAuthStore from '@/store/auth';
// import store from '../store';
// import { getUniqueRequestId } from '@ideacome/foundation/utils/request.js';
// let func = getUniqueRequestId(16)

//默认参数
let config = {
  host: 'defaultHost',
  header: {
    'content-type': 'application/json',
  },
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  sslVerify: false, //是否验证ssl证书
  showToast: true // 请求出错是否展示提示
};

export const requestInfo = {
  isRequestLoading: false, // 是否正在请求，
  loadingPromise: Promise.resolve(), // promise 不是promise函数
}

/**
 * 不在同一个文件时，将promise 存储，方便控制请求时序
 * @param {Promise} promise
 */
export function setRequestPromiseFunction(promise) {
  requestInfo.loadingPromise = promise;
}

// 判断url是否完整
const isCompleteURL = (url) => {
  return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
};


/**
 *  请求拦截器
 * @param {*} options
 */
let Interceptor = (options) => {
  options = Object.assign({}, config, options);
  const baseURL = envConfig[options.host];
  options.url = isCompleteURL(options.url)
    ? options.url
    : baseURL + options.url;

  options.data = {
    ...options.data,
    // language: uni.getStorageSync('language') || 'zh-CN' //根据自身情况，是否后端需要多语言配置，不需要就删掉
  };

  // 根据请求host设置对应token
  options.header[getTokenKey(options.host)] = getToken(options.host);

  //如果传入loading为true,则显示loadding
  if (options.loading) {
    uni.showLoading({
      title: '加载中',
      mask: true,
    });
  }
  return options;
};

const jumpLogin = uni.navigateTo({
  url: '/pages/login/login',
});

/**
 * 响应器拦截器
 * @param {*} res
 */
let Responder = (res, options) => {
  const {
    data: { code },
  } = res;
  options = Object.assign({}, config, options);
  const authStore = useAuthStore();
  if (code === SERVICE_CODE.SUCCESS) {
    return Promise.resolve(res.data);
  } else if (code === SERVICE_CODE.PERMISSION_DENIED || code === SERVICE_CODE.PERMISSION_DENIED_MIDDLE_PLATFORM) {
    authStore.logout();
    jumpLogin();
    return Promise.reject({
      msg: '未登录',
    });
  } else {
    if (options.showToast) {
      uni.showToast({ title: res.data.msg || res.data.message || '网络错误！', icon: 'none' });
    }
    return Promise.reject(res.data);
  }
};

/**
 * 请求
 *
 * */
let request = async (options = {}) => {
  options = Interceptor(options);
  await requestInfo.loadingPromise;

  //发起请求
  return new Promise((resolve, reject) => {
    // 判断有无网络验证
    uni.getNetworkType({
      success(res) {
        if (res.networkType == 'none') {
          uni.showModal({
            title: '没有网络',
            content: '请检查您的网络',
            showCancel: false,
            success: (res) => {
              uni.hideLoading();
            },
          });
        } else {
          uni.request({
            ...options,
            success: (res) => {
              resolve(Responder(res, options));
            },
            fail: (err) => {
              const title = err.data ?
                err.data.errMsg || err.data.msg || err.data.message || '网络错误！' :
                err.errMsg || err.msg || err.message || '网络错误！';
              uni.showToast({
                title,
                icon: 'none',
              });
              reject(err);
            },
            complete: () => {
              uni.hideLoading();
            }
          });
        }
      },
    });
  });
};

export default {
  get({ url, data, loading = true, options = {} }) {
    options.url = url;
    options.data = data || {};
    options.data.t = Date.now();
    options.method = 'GET';
    options.loading = loading;
    return request(options);
  },
  post({ url, data, loading = true, options = {} }) {
    options.url = url;
    options.data = data;
    options.method = 'POST';
    options.loading = loading;
    return request(options);
  },
};
