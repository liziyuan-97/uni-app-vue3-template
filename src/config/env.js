// config/env.js
const env = {
  // 开发环境
  development: {
    defaultHost: 'http://dev.api.example.com',
  },
  // 测试环境
  test: {
    defaultHost: 'http://test.api.example.com',
  },
  // 生产环境
  production: {
    defaultHost: 'https://api.example.com',
  }
}

// 获取当前环境配置（默认为生产环境）
const currentEnv = process.env.NODE_ENV || 'production'

const TOKEN_KEY_MAP = {
  defaultHost: 'Token'
}

export const getTokenKey = key => TOKEN_KEY_MAP[key]

export const SERVICE_CODE = {
  'SUCCESS': 10000,
  'FAIL': 99999,
  'PERMISSION_DENIED': 50001,
  'PERMISSION_DENIED_MIDDLE_PLATFORM': 250001,
};
export default env[currentEnv]