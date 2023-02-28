<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router unique-opened :collapse="isCollapse">
        <!-- logo  -->
        <a href="/" class="logo">
          <img src="@/assets/logo.png" />
          <h1>后台管理</h1>
        </a>
        <!-- 首页工作台 -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Setting></Setting></el-icon><span>Echarts工作台</span>
          </template>
          <el-menu-item index="/subject">
            <el-icon><Edit></Edit></el-icon><span>课程管理</span>
          </el-menu-item>
          <el-menu-item index="/money">
            <el-icon><Edit></Edit></el-icon><span>资金管理</span>
          </el-menu-item>
          <el-menu-item index="/addresss">
            <el-icon><Edit></Edit></el-icon><span>地址管理</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 图片管理 -->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting></Setting></el-icon><span>图片管理</span>
          </template>
          <el-menu-item>
            <el-icon><Edit></Edit></el-icon><span>图表1</span>
          </el-menu-item>
          <el-menu-item>
            <el-icon><Edit></Edit></el-icon><span>图表2</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 用户管理 -->
        <el-menu-item index="/users">
          <el-icon><Setting></Setting></el-icon><span>用户管理</span>
        </el-menu-item>
        <!-- 视频管理 -->
        <el-menu-item index="/video">
          <el-icon><Setting></Setting></el-icon><span>视频管理</span>
        </el-menu-item>
        <!-- 设置 -->
        <el-menu-item index="/setting">
          <el-icon><Setting></Setting></el-icon><span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script lang="ts">
import { Edit, Setting } from '@element-plus/icons-vue'
import { isCollapse } from './collapse'
export default {
  setup() {
    return {
      isCollapse
    }
  },
  components: { Edit, Setting }
}
</script>
<style lang="less" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
}
.el-menu {
  background-color: #eee;
  border-right: none;
  width: 200px;
  &.el-menu--collapse {
    width: 60px;
    & h1 {
      display: none;
    }
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: black;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>
