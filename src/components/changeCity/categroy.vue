<template>
  <div class="categroy">
      <dl class="m-categroy">
          <dt>按拼音字母选择:</dt>
          <dd v-for="(item, index) in list" :key="index">
              <a :href="'#city-' + item">{{ item }}</a>
              </dd>
      </dl>
      <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'#city-' + index">
          <dt>{{ index }}</dt>
          <dd><span v-for="city in item" :key="city.id" @click="changeCity(city)">{{ city.name }}</span></dd>
      </dl>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      list: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      cityGroup: []
    }
  },
  methods: {
    changeCity (city) {
      console.log('item', city)
      this.$store.dispatch('getPosition', city)
      this.$router.push({ name: 'Index' })
    }
  },
  created () {
    api.getCityList().then(res => {
    //   console.log(res.data.data)
    //  console.log(this.cityGroup)
      var obj = {}
      res.data.data.forEach(element => {
        // console.log(element)
        if (!obj[element.firstChar.toUpperCase()]) {
          obj[element.firstChar.toUpperCase()] = []
        }
        obj[element.firstChar.toUpperCase()].push(element)
      })
      this.cityGroup = obj
    })
  }
}
</script>

<style lang="less">
@import '~@/assets/css/changeCity/categroy.less';
</style>
