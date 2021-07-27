<template>
 <el-container class="layout-default">
  <el-header height="  "><MyHeader /></el-header>
  <el-main><router-view/></el-main>
  <el-footer height=" "><Footer /></el-footer>
</el-container>
</template>

<script>
import MyHeader from '../components/header'
import Footer from '../components/footer'
export default {
  components: {
    MyHeader,
    Footer
  }
}
</script>

<style lanr="less">
@import '~@/assets/css/public/layout.less';
</style>
