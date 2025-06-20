import { getTokenKey } from '@/config/env'

// 根据请求的host获取token
export function getToken(host = 'defaultHost') {
  return uni.getStorageSync(getTokenKey[host]);
};

// 根据请求的host缓存token
export function setToken(token, host = 'defaultHost') {
  return uni.setStorageSync(getTokenKey[host], token);
};

// 根据请求的host移除token缓存
export function removeToken(host = 'defaultHost') {
  return uni.removeStorageSync(getTokenKey[host]);
};

// 获取用户信息缓存
export function getUserInfo() {
  const userInfo = uni.getStorageSync(userInfoName);
  try {
    return JSON.parse(userInfo);
  } catch (e) {
    return null;
  }
};

export function setUserInfo(userInfo) {
  return uni.setStorageSync(userInfoName, userInfo);
};

export function removeUserInfo() {
  return uni.removeStorageSync(userInfoName);
};


