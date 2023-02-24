<template>
  <div class="login-container">
    <el-form
      :model="loginUser"
      :rules="rules"
      ref="formRef"
      class="login-form"
      label-width="auto"
      label-position="left"
    >
      <h3>后台登录</h3>
      <el-form-item prop="email" label="用户名：">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入邮箱"
          v-model="loginUser.email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码：" show-password>
        <el-input
          prefix-icon="el-icon-view"
          placeholder="请输入密码"
          type="password"
          v-model="loginUser.password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="yanzhengma" label="验证码：">
        <el-input placeholder="请输入内容" props="yanzhengma">
          <template v-slot:append>验证码</template>
        </el-input>
      </el-form-item>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
        class="login-slider"
        >滑动验证码</el-progress
      >
      <el-form-item>
        <el-button type="primary" @click="submitForm()" class="login-btn"
          >登录</el-button
        >
      </el-form-item>
      <span>忘记密码？| </span>
      <span><router-link to="/register">注册</router-link></span>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
const loginUser = reactive({
  email: '',
  password: '',
  seccode: '',
  yanzhengma: ''
})
// 表单规则
const rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空！'
    },
    {
      min: 6,
      max: 20,
      message: '长度在6到20个字符内！',
      trigger: 'blur'
    }
  ]
})
const formRef = ref<FormInstance>()
// 登陆请求处理
const submitForm = async () => {
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单验证失败')
    throw err
  })
  console.log('正式登录请求')
}
</script>
<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // 背景渐变
  background: linear-gradient(
    60deg,
    rgba(84, 53, 183, 1) 0%,
    rgba(0, 193, 174, 1)
  );
  background-size: 100% 100%;
}
.login-form {
  background: white;
  width: 300px;
  padding: 10px 50px 50px 50px;
  margin: 50px;
  border-radius: 20px;
}

.login-slider {
  margin: 15px 0;
}

.login-btn {
  width: 100%;
}
</style>
