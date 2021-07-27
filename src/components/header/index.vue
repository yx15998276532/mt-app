<template>
  <div class="m-header">
      <el-row >
         <TopBar />
      </el-row>
      <el-row>
        <Search />
      </el-row>
  </div>
</template>

<script>
import Search from './search'
import TopBar from './topBar'
export default {
  components: {
    Search,
    TopBar
  }
}
</script>
<style lang="less">
@import '~@/assets/css/public/header/topbar.less';
</style>
