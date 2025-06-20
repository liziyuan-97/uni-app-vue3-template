import { defineStore } from 'pinia'
import { removeToken, setToken } from '@/utils/auth'

export const useCounterStore = defineStore('auth', {
  state: () => ({
    userInfo: null
  }),
  actions: {
    login() {
      console.log(1);
    },
    // 退出登录
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          removeToken()
          this.userInfo = null;
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})
