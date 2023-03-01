import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useTokenStore = defineStore('mytoken', () => {
  // ref = state
  const tokenJson = ref('')
  // computed = getter
  const token = computed(() => {
    try {
      return tokenJson.value || window.localStorage.getItem('TokenInfo') || '{}'
    } catch (error) {
      ElMessage.error('检查token是否正确!')
      window.localStorage.setItem('TokenInfo', '')
      throw error
    }
  })
  // function = actions
  function saveToken(data: string) {
    tokenJson.value = data
  }

  // 向外暴露
  return { token, saveToken }
})
