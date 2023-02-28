<template>
  <el-header>
    <!-- 图标 -->
    <el-icon @click="isCollapse = !isCollapse"
      ><Expand v-show="isCollapse" /> <Fold v-show="!isCollapse"
    /></el-icon>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="32">touxiang</el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户姓名</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { isCollapse } from './collapse'

export default {
  setup() {
    return {
      isCollapse
    }
  },
  components: { Expand, Fold }
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #eee;
  .el-icon {
    margin-right: 15px;
  }
}
.el-dropdown {
  margin-left: auto;
}
</style>
