<template>
  <div class="page-product">
    <el-row class="m-crumbs">
       <Crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
                <el-row >
                    <Categroy />
                </el-row>
                <el-row>
                    <List />
                </el-row>
            </el-col>
      <el-col :span="5">
         map + fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '../components/products/crumbs.vue'
import Categroy from '../components/products/Categroy.vue'
import List from '../components/products/List.vue'
export default {
  components: {
    Crumbs,
    Categroy,
    List
  }
}
</script>

<style lang="less">
@import '~@/assets/css/products/index.less';
</style>
