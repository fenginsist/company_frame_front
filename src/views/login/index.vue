<script setup name="LOGIN">

</script>

<script>
export default {
  name: 'LOGIN',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        dialogVisible: false
      }
    }
  },
  methods: {
    handleLogin(){
      console.log('11111');
    },
    handleTry(){
      console.log('3333');
    }
  }
}
</script>

<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on" :model="loginForm" ref="loginForm">
        <div style="text-align: center">
          <!-- <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon> -->
        </div>
        <h2 class="login-title color-main">乒乓球比赛管理系统</h2>
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名">
            <span > <!--slot="prefix"-->
              <!-- <svg-icon icon-class="user" class="color-main"></svg-icon> -->
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" @keyup.enter="handleLogin" v-model="loginForm.password"
            autoComplete="on" placeholder="请输入密码">
            <span><!--slot="prefix"-->
              <!-- <svg-icon icon-class="password" class="color-main"></svg-icon> -->
            </span>
            <span @click="showPwd"><!--slot="prefix"-->
              <!-- <svg-icon icon-class="eye" class="color-main"></svg-icon> -->
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" @click="handleLogin">
            登录
          </el-button>
          <el-button style="width: 45%" type="primary" @click.native.prevent="handleTry">
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
  .login-form-layout {
    /* position: absolute; */
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
    text-align: center;
  }

  .login-title {
    text-align: center;
    padding-bottom: 10px;
  }
</style>
