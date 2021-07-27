<template>
  <div class="m-hcity">
      <dl>
          <dt>{{ title }}</dt>
          <dd v-for="(item, index) in hotList" :key="index">{{ item }}</dd>
      </dl>
  </div>
</template>

<script>
export default {
  props: ['hotList', 'title']
}
</script>

<style lang="less">
@import '~@/assets/css/changeCity/hot.less';
</style>
