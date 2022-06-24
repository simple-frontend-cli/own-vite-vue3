<script setup lang="ts"></script>

<template>
  <div class="main-layout-div">
    <!-- 头部 -->
    <header>
      <slot name="header"></slot>
    </header>
    <div class="main-content-div">
      <!-- 导航菜单 -->
      <nav>
        <slot name="nav"></slot>
      </nav>
      <body>
        <!-- 主体内容 -->
        <div class="content-div">
          <slot name="content"></slot>
        </div>
        <!-- 底部 -->
        <footer>技术支持:xxxx</footer>
      </body>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-layout-div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header {
    width: 100%;
    height: 5rem;
    background-color: #fff;
  }

  .main-content-div {
    display: flex;
    justify-content: space-between;
    flex: 1;
    overflow: hidden;

    > nav {
      width: auto;
      height: 100%;
      padding: 1.25rem 0;
      background-color: #fff;
    }

    > body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 1.25rem 1.25rem 0;
      width: 100%;
      overflow: hidden;

      .content-div {
        width: 100%;
        flex: 1;
        padding: 1.25rem;
        background-color: #fff;
        border-radius: 0.5rem;
        overflow: auto;
      }

      > footer {
        width: 100%;
        height: 1.875rem;
        text-align: center;
        line-height: 1.875rem;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
