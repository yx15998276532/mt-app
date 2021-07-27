<template>
  <div>
      <span class="name">按省份选择:</span>
      <Select
        title="省份"
        :value= "province"
        :showWrapperActive= "provinceActive"
        :list="provinceList"
        @change_click="changeProvinceActive"
        @change="changeProvinceAct"
        className="province"
      />
      <Select
      title="城市"
      :value= 'city'
      :list= 'cityList'
      :showWrapperActive= "cityActive"
      @change_click="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
      />
      <span class="sousu">直接搜索:</span>
      <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入中文城市或拼音"
    :remote-method="remoteMethod"
    :loading="loading"
     >

    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item"
       >
    </el-option>
  </el-select>
  </div>
</template>

<script>
import Select from './select.vue'
import api from '@/api'
export default {
  components: {
    Select
  },
  data () {
    return {
      provinceActive: false,
      province: '省份',
      city: '城市',
      provinceList: [],
      cityList: ['沈阳', '大连', '长春', '哈尔滨'],
      cityActive: false,
      options: ['沈阳', '大连', '长春', '哈尔滨'],
      loading: false,
      searchWord: '',
      cityDisabled: true

    }
  },
  methods: {
    changeProvinceActive (e) {
      this.provinceActive = e
      if (e) {
        this.cityActive = false
      }
    },
    changeCityActive (e) {
      this.cityActive = e
      if (e) {
        this.provinceActive = false
      }
    },
    remoteMethod (query) {

    },
    changeCity (item) {
      console.log(item)
      this.city = item.name
      this.$store.dispatch('getPosition', item)
      this.$router.push({ name: 'Index' })
    },
    changeProvinceAct (item) {
    //   console.log(item)
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
    }
  },
  created () {
    api.getProvinceList().then(res => {
      console.log(res)
      this.provinceList = res.data.data.map(item => {
        // console.log(item.provinceName)
        item.name = item.provinceName
        return item
      })
    })
  }
}
</script>

<style lang="less">
@import '~@/assets/css/changeCity/iselect.less';
</style>
