<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
        <img :src="slide" class="slideImage">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    props:{
      swiperSlides:{type:Array}
    },
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop:true,
          autoplay: {
            disableOnInteraction: false, //解决touch后不能自动播放问题
          },
          delay:1000,
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
            allowtouchMove:true,
          },

        },
      }
    },
    mounted() {
        swiper.stop
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style>
  .slideImage{
    width: 100%;
  }
</style>
