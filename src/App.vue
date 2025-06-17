<script setup>
  onLaunch(() => {
    console.log('App Launch')
  })
  onShow(() => {
    console.log('App Show')
  })
  onHide(() => {
    console.log('App Hide')
  })
</script>

<style lang="scss">
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';

/*  #ifdef  H5  */
svg {
  display: initial;
}

/*  #endif  */

@layer components {
  .raw-btn {
    // 注意 after: 后面不能加任何空格，有些格式化工具可能会在这里自动加一个空格
    @apply after:tw-border-none tw-inline-flex tw-items-center tw-gap-2 tw-rounded tw-text-sm tw-font-semibold tw-transition-all;
  }

  .btn {
    // 使用上面定义的 raw-btn
    @apply raw-btn tw-bg-gradient-to-r tw-from-[#9e58e9] tw-to-blue-500 tw-px-2 tw-py-1 tw-text-white;
  }
}
</style>
