<template>
  <div>
    <HomeContainer />
  </div>
</template>
<script lang="ts">
// import { Expand, Fold } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
import HomeContainer from '@/views/home/components/HomeContainer.vue'
export default defineComponent({
  components: {
    HomeContainer
  }
})
</script>
<style lang="less" scoped></style>
