<script setup lang="ts">
import { NCarousel } from 'naive-ui'
</script>

<template>
  <div class="introduce-div">
    <n-carousel
      direction="vertical"
      dot-placement="right"
      autoplay
      show-arrow
      style="width: 100%; height: 100%"
    >
      <img class="carousel-img" src="@/assets/images/1.jpg" />
      <img class="carousel-img" src="@/assets/images/2.jpg" />
      <img class="carousel-img" src="@/assets/images/3.jpg" />
    </n-carousel>
  </div>
</template>

<style scoped lang="less">
.introduce-div {
  width: 100%;
  height: 100%;

  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
