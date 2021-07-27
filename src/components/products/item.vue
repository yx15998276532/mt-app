<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.image" alt="图片">
    </dt>
      <dd>
        <h3><router-link :to="{name:'productDeatil'}">{{ meta.title }}</router-link></h3>
        <p>
          <el-rate v-model=" meta.score" disabled ></el-rate>
            <span class>{{ meta.score }}分</span>
            <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
          </p>
          <p>
            <!-- <span class="s-item-tab">
             <span v-for="(v, index) in meta.tab" :key="v">{{ v + (index = meta.tab.length-1 ? '|':'') }}</span>
            </span> -->
            <span class="s-item-addr">{{ meta.address }}</span>
            <span>
                <a href="#"><i class="el-icon-position">查看地图</i></a>
            </span>
          </p>
          <p>
            <span class="s-item-price">
                人均￥{{ meta.avgPrice }}
            </span>
          </p>
          <ul class="deal-items">
              <li class="items" v-for="(item, index) in meta.dealItems.slice(0, 2)" :key="index">
              <p class="deal-title"> {{ item.title }} </p>
              <p>
                  <span class="deal-price">￥{{ item.price }}{{ item.priceType }}</span>
                  <span class="deal-old-price">门市价{{ item.counterPrice }}</span>
                  <span class="deal-sales">已售{{ item.saleNum }}</span>
              </p>
              </li>
          </ul>
      </dd>
  </dl>
</template>

<script>
export default {
  props: ['meta'],
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style>

</style>
