<template>
  <div>
    <Header :city='city'></Header>
    <Swiper :swiperList='swiperList'></Swiper>
    <Icon></Icon>
  </div>
</template>

<script type='text/javascript'>
import Header from './part/Header'
import Swiper from './part/Swiper'
import Icon from './part/Icon'

export default {
  data: function () {
    return {
      city: '',
      swiperList: [],
    }
  },
  components: {
    Header, Swiper, Icon
  },
  mounted () {
    let that = this
    this.axios.get("api/mock/data.json")
      .then((res) => {
        that.city = res.data.list[0].city
        that.swiperList = res.data.list[0].swiperList

      })
  }
}
</script>

<style scoped>
</style>