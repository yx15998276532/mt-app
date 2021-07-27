<template>
  <div class="page-login">
    <div class="login-header"><img src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
     alt="美团网" width="126" height="46">
    </div>
    <div class="login-panel">
        <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
         alt="美团网" width="480" height="370"></div>
        <div class="form">
          <h4></h4>
          <p><span>账号登录</span></p>
          <el-input v-model="userName" placeholder="手机号/用户名/邮箱"
           :class="{error: error && !userName}" prefix-icon="el-icon-user">
           </el-input>
          <el-input :class="{error: error && !password}" placeholder="请输入密码"
          v-model="password" show-password prefix-icon="el-icon-unlock">
          </el-input>
          <div class="foot"><a href="#">忘记密码？</a></div>
          <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
          <p class="reg">
            <span>还没有账号？</span>
            <router-link :to="{name: 'Registe'}">免费注册</router-link>
            </p>
          <div class="oauth-wrapper">
             <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
             <div class="oauth cf">
                <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
             </div>
          </div>
        </div>
    </div>
    <footer class="">
      <ul>
         <li><a href="#">关于美团</a></li>
         <li><a href="">加入我们</a></li>
         <li><a href="">商家入驻</a></li>
         <li><a href="">帮助中心</a></li>
         <li><a href="">美团手机版</a></li>
      </ul>
      <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },
  methods: {
    submit () {
      console.log(this.userName, this.password)
      if (!this.userName) {
        this.error = '请输入账号'
        return false
      }
      if (!this.password) {
        this.error = '请输入密码'
        return false
      }
      api.login({
        params: {
          userName: this.userName,
          password: this.password
        }
      }).then((res) => {
        console.log(res)
        if (res.data.status === 'success') {
          this.$router.push({ name: 'Index' })
          this.$store.commit('setUserName', this.userName)
        } else {
          this.error = res.data.msg
        }
      })
    }
  }
}

</script>

<style lang="less">
@import "~@/assets/css/login/index.less";
</style>
