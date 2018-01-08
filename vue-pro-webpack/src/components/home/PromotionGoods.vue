<template>
  <!--打折商品-->
    <div>
      <ul class="progoods">
        <li v-for="goods in promotionGoodsa">
          <img :src="goods" alt="">
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
      props:["promotionGoodsa"],
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
    .progoods{
      width: 100%;
      margin-top: .8rem;
      margin-bottom: .8rem;
      overflow: hidden;
      li{
        float: left;
        width: 33.333%;

        img{
          width: 100%;
        }
      }
    }
</style>
