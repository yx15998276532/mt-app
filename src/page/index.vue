<template>
  <div class="page-index">
    <el-row>
       <el-col :span="5"><MyMenu /></el-col>
     </el-row>
     <el-row>
       <el-col :span="19"><Life /></el-col>
     </el-row>
      <el-row>
       <el-col :span="24"><Container :nav="recomment"/></el-col>
     </el-row>
      <el-row>
       <el-col :span="24"><Container :nav="istyle"/></el-col>
     </el-row>
  </div>
</template>

<script>
import Life from '../components/index/Life.vue'
import MyMenu from '../components/index/Menu.vue'
import Container from '../components/index/Container'
export default {
  components: {
    MyMenu,
    Life,
    Container
  },
  data () {
    return {
      istyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
          text: '全部',
          tab: 'all'
        }, {
          text: '约会聚餐',
          tab: 'food'
        }, {
          text: '丽人SPA',
          tab: 'sap'
        }, {
          text: '演出电影',
          tab: 'movie'
        }, {
          text: '品质出游',
          tab: 'traver'
        }]
      },
      recomment: {
        title: '推荐民宿',
        class: 'all',
        list: [{
          text: '天津',
          tab: 'tj'
        }, {
          text: '济南',
          tab: 'jn'
        }, {
          text: '大连',
          tab: 'dl'
        }]
      }
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/css/index/index.less';
</style>
