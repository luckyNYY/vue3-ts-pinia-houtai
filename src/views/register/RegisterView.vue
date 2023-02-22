<template>
  <div class="register-container">
    <el-form
      :model="registerUser"
      :rules="rules"
      ref="formRef"
      class="register-form"
    >
      <el-form-item prop="name">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入用户名"
          v-model="registerUser.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="请输入邮箱"
          v-model="registerUser.email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-view"
          placeholder="请输入密码"
          type="password"
          v-model="registerUser.password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input
          prefix-icon="el-icon-view"
          placeholder="请确认密码"
          type="password"
          v-model="registerUser.password2"
        ></el-input>
      </el-form-item>
      <el-form-item label="选择身份">
        <el-select placeholder="请选择身份" v-model="registerUser.identity">
          <el-option label="管理员" value="admin"></el-option>
          <el-option label="员工" value="employee"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" class="register-btn"
          >注册</el-button
        >
        <span>已有账号？点击<router-link to="/login">登录</router-link></span>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElMessage, FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
const registerUser = reactive({
  name: '',
  email: '',
  password: '',
  password2: '',
  identity: ''
})

const validatePass2 = async (
  rule: unknown,
  value: unknown,
  callback: (arg0: Error | undefined) => void
) => {
  if (value !== registerUser.password) {
    callback(new Error('两次输入密码不一致!'))
  }
}

const rules = reactive({
  name: [
    {
      required: true,
      message: '用户名不能为空！',
      trigger: 'blur'
    },
    {
      min: 2,
      max: 20,
      message: '长度在2到20个字符内！'
    }
  ],
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
      min: 2,
      max: 20,
      message: '长度在2到20个字符内！',
      trigger: 'blur'
    }
  ],
  password2: [
    {
      required: true,
      trigger: 'blur',
      message: '确认密码不能为空！'
    },
    {
      min: 2,
      max: 20,
      message: '长度在2到20个字符内！',
      trigger: 'blur'
    },
    {
      validator: validatePass2,
      trigger: 'blur'
    }
  ]
})

const formRef = ref<FormInstance>()
const submitForm = async () => {
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单验证失败')
    throw err
  })
  console.log('正式登录请求')
}
</script>
<style lang="less" scoped>
.register-container {
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
.register-form {
  background: white;
  width: 300px;
  padding: 50px;
  margin: 50px;
}
.register-btn {
  width: 100%;
}
</style>
