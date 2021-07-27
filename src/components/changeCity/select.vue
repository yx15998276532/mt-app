<template>
   <div :class="['choose-wrap', disabled?'disabled':'']" @click="showWrapper" v-handle-click="documentClick" >
       <div class="choose">
           <span>{{ value }}</span>
           <i class="el-icon-caret-bottom"></i>
           <div :class="{'mt-content': true, 'active': showWrapperActive}">
               <p>{{ title }}</p>
               <div :class="['wrapper', className]">
                   <div class="col" v-for="(listData, index) in renderList" :key="index">
                       <span :class="{'mt-item': true, 'active': item.name == value}" @click="changValue(item)"
                       v-for="(item, index) in listData" :key="index">{{ item.name }}</span>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['showWrapperActive', 'title', 'value', 'list', 'className', 'disabled'],
  methods: {
    showWrapper (e) {
      e.stopPropagation()
      if (!this.disabled) {
        this.$emit('change_click', true)
      }
    },
    documentClick () {
      this.$emit('change_click', false)
      //   console.log('handleClick', 1009)
    },
    changValue (item) {
      this.$emit('change', item)
    }
  },
  computed: {
    renderList: function () {
      const col = Math.ceil(this.list.length / 12)
      const resultList = []
      for (var i = 0; i < col; i++) {
        const data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/css/changeCity/select.less';
</style>
