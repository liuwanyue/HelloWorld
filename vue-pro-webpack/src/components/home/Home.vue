<template>
    <div>
      <Head></Head>
      <content class="content">
        <Swiper :swiperSlides="sliders"></Swiper>
        <HomeMenu></HomeMenu>
        <PromotionGoods :promotionGoodsa="promotionGoods"></PromotionGoods>
        <ConvenientStore></ConvenientStore>
      </content>
    </div>
</template>
<script>
  import Head from '../../base/Header.vue'
  import Swiper from '../../base/Swiper.vue'
  import HomeMenu from './HomeMenu.vue'
  import PromotionGoods from './PromotionGoods.vue'
  import ConvenientStore from './ConvenientStore.vue'
  import axios from 'axios'
    export default {
        data() {
            return {
              sliders:[],
              promotionGoods:[],
            }
        },
        created() {
          this.getSliders();
          this.getPromotionGoods();
        },
        methods: {
          getSliders(){
            axios.get('/api/sliders').then((res)=> {
              this.sliders = res.data;
            })
          },
          //活动商品
          getPromotionGoods(){
            axios.get('/api/promationgoods').then((res)=>{
              console.log(res.data);
              this.promotionGoods = res.data;
            })
          }

        },
        computed: {},
        components: {
          Head,
          Swiper,
          HomeMenu,
          PromotionGoods,
          ConvenientStore,
        }
    }
</script>
<style scoped lang="less">
.content{
  background-color: #e0e0e0;

}
</style>
