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
  props: ['swiperList'],
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
}
</script>
<style scoped lang="stylus">
.swiper img
  width 10rem
.swiper >>> .swiper-pagination-bullet-active
  background orange
</style>