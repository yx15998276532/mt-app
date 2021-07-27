<template>
  <div class="m-geo">
    <div class="position">
        <i class="el-icon-location" />
        <span>{{ $store.state.position.name }}</span>
        <router-link :to="{name: 'ChangeCity'}" class="changeCity">切换城市</router-link>
       [ <router-link to="" v-for="(item, index) in nearCity" :key="index" >{{ item.name }}</router-link> ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
        <router-link :to="{name: 'Login'}" class="login">立即登录</router-link>
        <router-link :to="{name: 'Register'}" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  created () {
    api.getCurPosition().then(res => {
      this.$store.dispatch('getPosition', res.data.data)
      this.nearCity = res.data.data.nearCity
    })
  },
  data () {
    return {
      nearCity: []
    }
  },
  watch: {
    '$store.state.position': function () {
      this.nearCity = this.$store.state.position.nearCity
    }
  }
}
</script>

<style>

</style>
