<template>
  <div class="m-istyle">
      <dl @mouseover="over" :class="nav.class">
          <dt>{{ nav.title }}</dt>
          <dd v-for="(item, index) in nav.list" :key="index" :data-type ="item.tab"
          :class="{active: kind == item.tab}">
              {{ item.text }}</dd>
      </dl>
      <ul class="ibody">
          <li v-for="(item, index) in resultsData[kind]" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody">
             <div class="title">{{ item.title }}</div>
             <!-- <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="el-icon-star-on"></span>
              <span class="sub-title">2280个评论</span> -->
              <div class="sub-title">{{ item.subTitle }}</div>
             <div class="price-info">
                 <span class="current-price-wrapper">
                     <span class="price-symbol numfont">￥</span>
                     <span class="current-price numfont">{{ item.price }}
                         <span style="font-size:10px">起</span></span>
                 </span>
             </div>
        </div>
    </el-card>
          </li>
      </ul>
  </div>
</template>

<script>
import api from '@/api'
export default {
  props: ['nav'],
  data () {
    return {
      kind: 'all',
      resultsData: {}
    //   list: [{
    //     title: '晓寿司(望京SOHO店)',
    //     image: 'https://p0.meituan.net/merchant/5cfc2788fbec889cbf14e6a680a99e3d82463.jpg@214w_120h_1e_1c',
    //     sub_title: '望京',
    //     price_info: {
    //       current_price: 18,
    //       old_price: 36
    //     },
    //     address: ''
    //   }, {
    //     title: '木北造型(上海沙龙店)',
    //     image: 'https://p1.meituan.net/dpmerchantpic/a9259c59e88e2a17633a26b695c95bc7105594.jpg@214w_120h_1e_1c',
    //     sub_title: '亦庄',
    //     price_info: {
    //       current_price: 58,
    //       old_price: 36
    //     },
    //     address: ''
    //   }]
    }
  },
  created () {
    api.getResultProducts().then(res => {
    //   console.log(res)
      this.resultsData = res.data.data
    })
  },
  methods: {
    over (e) {
      // console.log(e.target)
      const dom = e.target
      const tagName = dom.tagName.toLowerCase() // 字符串转换为小写
      //   console.log(tagName)
      if (tagName !== 'dd') {
        return false
      }
      // 获取data-type里的值
      this.kind = dom.getAttribute('data-type') // 字符串转换为大写
      // 动态获取数据  ajax请求
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/css/index/arstistic.less';
</style>
