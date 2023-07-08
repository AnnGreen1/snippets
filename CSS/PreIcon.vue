<template>
  <div class="preicon">
    <div class="note">
      <span class="icon"></span>
      <p>This is a note.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.preicon {
  width: 100px;
  height: 100px;

  .note {
    position: relative;
    padding-left: 20px; /* 为了给图标留出空间 */
  }

  .note .icon::before {
    content: ""; /* 必须要有 content 属性 */
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-image: url("@/assets/logo.png"); /* 替换为你的图标路径 */
    background-size: cover;
  }

  /* 可以根据需要设置图标的样式 */
}
</style>
