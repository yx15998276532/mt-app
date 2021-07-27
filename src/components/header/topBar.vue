<template>
  <div class="m-header-topbar m-header">
    <el-row type="flex" class="row-bg" justify="center">
       <el-col :span="10"><Geo /></el-col>
       <el-col :span="14"><Nav /></el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from './geo.vue'
import Nav from './nav.vue'
export default {
  components: {
    Geo,
    Nav
  }
}
</script>

<style lang="less">
@import '~@/assets/css/public/header/topbar.less';
</style>
