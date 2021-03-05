<template>
  <header>
    <div class='header-left'>
      <img src='~@/assets/icon/left.png'
           style="width: 0.5rem" />
    </div>
    <div class='header-search'>
      <img src='~@/assets/icon/search.png'
           style="width:0.4rem" />
      商家
    </div>
    <div class='header-right'>
      {{city}}
      <img src='~@/assets/icon/down.png'
           style="width: 0.38rem" />
    </div>
  </header>
</template>

<script>
export default {
  props: ['city'],
  data () {
    return {
      date: {}
    }
  },
}
</script>

<style scoped lang='stylus'>
@import '~css/val.styl'
header
  display flex
  justify-content center
  align-items center
  height 1.33333333rem
  background $headerbgColor
.header-left
  text-align center
  width 1rem
.header-search
  width 7.173333333rem
  background #fff
  border-radius 0.1rem
  color #333
  font-size 0.4rem
  padding 0.1rem 0.1rem
.header-right
  width 1.68rem
  font-size 0.38rem
  color #fff
  text-align center
</style>