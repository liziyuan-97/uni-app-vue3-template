<script setup>
  import WeappTailwindcss from '@/components/WeappTailwindcss.vue'
  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()
  const a = computed(() => 1)
  const { count } = storeToRefs(store)
  const { increment } = store
  const buttonColors = [
    'tw-bg-[#000]',
    'tw-bg-[#111]',
    'tw-bg-[#222]',
    'tw-bg-[#333]',
    'tw-bg-[#444]',
    'tw-bg-[#555]',
    'tw-bg-[#666]',
    'tw-bg-[#777]',
    'tw-bg-[#888]',
    'tw-bg-[#999]',
    'tw-bg-[#aaa]',
    'tw-bg-[#bbb]',
    'tw-bg-[#ccc]',
    'tw-bg-[#ddd]',
    'tw-bg-[#eee]',
    'tw-bg-[#fff]',
  ]
  const title = ref('Hello')
  const themeRef = ref(uni.getSystemInfoSync().theme)
  const classArray = computed(() => [
    title.value ? 'tw-bg-[#aa00aa]' : undefined,
    {
      'tw-text-[#ffffffee]': Boolean(title),
    },
  ])
  const buttonClass = computed(() => {
    return buttonColors[count.value % buttonColors.length]
  })

  // #ifdef MP
  uni.onThemeChange(({ theme }) => {
    themeRef.value = theme
  })
  // #endif
  onBeforeUnmount(() => {
    // #ifdef MP
    uni.offThemeChange(() => {
      console.log('offThemeChange')
    })
  // #endif
  })

  onLoad(() => {
    console.log('欢迎使用 weapp-tailwindcss 模板')
  })

  function copy(data) {
    uni.setClipboardData({
      data,
    })
  }
</script>

<template>
  <view class="content">
    <WeappTailwindcss />
    <view class="my-3 w-full border-t border-solid border-gray-200" />
    <view class="text-gray-600/95 tw-font-bold tw-text-[28rpx] tw-text-[#cdcdcd]">
      写法示例Start!
    </view>
    <view class="mt-[13.14758px] flex flex-col items-center space-y-[20rpx]">
      <view
        class="flex h-16 w-32 items-center justify-center rounded-[20rpx] bg-[#389f2bb1] text-white after:content-['hover_here!']"
        hover-class="!bg-[gray] after:!content-['good_work!']"
      />
      <view class="text-neutral-400">
        group published 示例
      </view>
      <view
        class="group relative rounded bg-green-300 p-[60px] text-xs before:absolute before:left-1 before:top-1 before:content-['父元素']"
        hover-class="published"
      >
        <view class="rounded bg-pink-400 p-2 group-[.published]:bg-yellow-400">
          hover 父元素使得子元素背景变成黄色
        </view>
      </view>
      <view class="w-32 rounded-md bg-pink-500 py-2 text-center font-semibold text-white ring-4 ring-pink-300">
        Default Ring
      </view>
      <view>
        <button class="w-64 text-white" :class="buttonClass" @click="increment">
          click here to inc {{ count }}
        </button>
      </view>

      <view class="test">
        @apply 的用法，详见 `index.vue` 的 `style` 标签块
      </view>
      <view class="text-neutral-600 underline" @click="copy('https://weapp-tw.icebreaker.top/docs/icons')">
        Grid布局+ Icon 方案（点击复制链接）
      </view>
      <view
        class="tw-grid tw-w-[80vw] tw-grid-cols-3 tw-place-items-center tw-border tw-text-center [&>view]:tw-w-full [&>view]:tw-py-1 [&_text]:tw-text-[32px]"
      >
        <view :class="classArray">
          <text class="tw-i-svg-spinners-12-dots-scale-rotate" />
        </view>
        <view><text class="tw-i-svg-spinners-180-ring" /></view>
        <view :class="classArray">
          <text class="tw-i-svg-spinners-3-dots-bounce" />
        </view>
        <view>
          <text class="tw-i-svg-spinners-6-dots-rotate" />
        </view>
        <view :class="classArray">
          <text class="tw-i-svg-spinners-90-ring" />
        </view>
        <view>
          <text class="tw-i-svg-spinners-bars-fade" />
        </view>
        <view :class="classArray">
          <text class="tw-i-svg-spinners-blocks-scale" />
        </view>
        <view>
          <text class="tw-i-svg-spinners-clock" />
        </view>
        <view :class="classArray">
          <text class="tw-i-svg-spinners-tadpole" />
        </view>
      </view>
      <view>
        <view class="tw-mb-4 tw-text-neutral-400">
          样式的条件编译
          <text
            class="tw-text-sky-400 tw-underline"
            @click="
              copy(
                'https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro',
              )
            "
          >
            weapp-tailwindcss/css-macro
          </text>
        </view>
        <view class="ifdef-[MP-WEIXIN]:tw-bg-blue-500 ifndef-[MP-WEIXIN]:tw-bg-red-500">
          微信小程序为蓝色，不是微信小程序为红色
        </view>

        <view class="wx:tw-bg-blue-500 -wx:tw-bg-red-500">
          <view>自定义配置的方式进行样式条件编译</view>
          <view>相关配置见根目录下的tailwind.config.js</view>
        </view>

        <view class="apply-class-0">
          @apply 条件编译方式0
        </view>
        <view class="apply-class-1">
          @apply 条件编译方式1
        </view>
      </view>
      <view>
        <button class="btn">
          此样式定义详见 `App.vue` 的 `@layer` 部分
        </button>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  @apply tw-flex tw-flex-col tw-items-center tw-py-4;
}

.test {
  @apply tw-flex tw-text-center tw-h-[100px] tw-w-[222.222px] tw-items-center tw-justify-center tw-rounded-[40px] tw-bg-[#123456] tw-bg-opacity-[0.54] tw-text-[#ffffff] #{!important};
}

.apply-class-0 {
  // 依赖 weapp-tailwindcss/css-macro
  @apply ifdef-[MP-WEIXIN]:tw-bg-blue-500 ifndef-[MP-WEIXIN]:tw-bg-red-500;
}

.apply-class-1 {
  // 依赖 weapp-tailwindcss/css-macro
  // 这个需要在 tailwind.config.js 里进行自定义配置
  @apply wx:tw-bg-blue-500 -wx:tw-bg-red-500;
}
</style>
