<template>
  <el-container>
    <HomeAside />
    <el-container class="header-and-main">
      <HomeHeader />
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import HomeAside from './HomeAside.vue'
import HomeHeader from './HomeHeader.vue'
</script>
<style lang="less" scoped>
.header-and-main {
  flex-direction: column;
}
</style>
