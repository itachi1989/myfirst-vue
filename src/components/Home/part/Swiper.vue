<template>
  <div class='swiper'>
    <swiper :options="swiperOptions">
      <swiper-slide v-for='(item,index) in swiperList'
                    :key="index">
        <img :src="item.url" />
      </swiper-slide>

      <div class='swiper-pagination'
           slot='pagination'></div>
    </swiper>
  </div>
</template>

<script type='text/javascript'>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper'
Swiper2.use([Navigation, Pagination, EffectFade, Autoplay])

export default {
  data () {
    return {
      swiperOptions: {
        autoplay: {
          disableOnInteraction: false,
          delay: 1000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },

      },
      swiperList: []
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {

  },
  directives: {
    swiper: directive
  },
  mounted () {
    let that = this
    let url = '/api/mock/data.json';
    this.axios.get(url)
      .then(res => {
        that.swiperList = res.data.list[0].swiperList
        console.log(res)
      })
      .catch(error => {

      })
  }

}
</script>
<style scoped lang="stylus">
.swiper img
  width 10rem
.swiper >>> .swiper-pagination-bullet-active
  background orange
</style>