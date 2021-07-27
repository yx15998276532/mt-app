<template>
  <div class="page-changeCity">
      <el-row><Province /></el-row>
      <el-row><Hot :hotList="hotList" title="热门城市:"/></el-row>
      <el-row><Hot title="最近访问:" :hotList="rencentList" /></el-row>
      <el-row><Categroy /></el-row>
  </div>
</template>

<script>
import api from '@/api'
import Province from '../components/changeCity/province.vue'
import Hot from '../components/changeCity/hot.vue'
import Categroy from '../components/changeCity/categroy'
export default {
  components: {
    Province,
    Hot,
    Categroy
  },
  data () {
    return {
      hotList: [],
      rencentList: []
    }
  },
  created () {
    api.getHotCity().then(res => {
      this.hotList = res.data.data.map(item => item.name)
    })
    api.getRecentCity().then(res => {
      this.rencentList = res.data.data.map(item => item.name)
    })
  }
}
</script>

<style>

</style>
