<template>
  <div class="fastContent">
      <ul>
        <li v-for="(item,index) in fastContentList">
          <div>
            <img :src="item.goodsPic"/>
            <div class="info">
            <span class="name">{{item.name.length>=8?item.name.slice(0,6)+'...':item.name}}</span>
            <span v-if="item.carefullyChosen">
                 <span class='carefullychose' >精选</span>
            </span>
              <span v-else>
                 <span class='carefullychoseNone' ></span>
            </span>
            <span class="unit">{{item.unit}}</span>
            <span class="hotprice">{{item.hotPrice}}</span>
            <span class="price">{{item.price}}</span>
            <div class="addgoods"><span class="jia">+</span></div>
            </div>
          </div>
        </li>
        <li class="navs-holder-content"></li>

      </ul>
    <!--</div>-->
  </div>
</template>
<script>
  import axios from 'axios';
    export default {
      props:['categoryid'],
      watch:{
        categoryid:{
          handler(){
            this.getGoodsList();
          }
        }
      },
        data() {
            return {
              fastContentList:[],
            }
        },
        created() {
        this.getGoodsList();
        },
        methods: {
          getGoodsList:function () {
            axios.get('/api/getgoodslist?categoryid='+this.categoryid).then((res)=>{
              if(res.data.goods){
                this.fastContentList = res.data.goods;
              }else {
                this.fastContentList = res.data;
              }
            })
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .fastContent {
    width: 74%;
    height: 100%;
    position: fixed;
    top:7.5rem;
    left: 26%;
    overflow-y: scroll;
    -webkit-appearance: inherit;
    ul {
      li {
        position: relative;
        float: left;
        width: 100%;
        height: 7rem;
        /*border-left: .5px solid lightgray;*/
        border-right: .5px solid lightgray;
        border-bottom: 1px solid #e0e0e0;
        padding-top: .5rem;
        padding-bottom: .5rem;
        img{
          display: inline-block;
          width: 6rem;
        }
        .info{
          display: inline-block;
          .name{
            display: block;
            /*padding-top: .5rem;*/
            padding-left: .3rem;
            font-size: .8rem;
          }
          .carefullychose{
            display: block;
            font-size: .8rem;
            width: 2rem;
            color: red;
            border: .1rem solid red;
            border-radius: 7px;
            margin-left: .3rem;
            margin-top: .4rem;
          }
          .carefullychoseNone{
            display: block;
            height: 1.6rem;
          }
          .unit{
            display: block;
            font-size: .7rem;
            color: gray;
            margin-top: .4rem;
            margin-bottom: .4rem;
            padding-left: .3rem;

          }
          .hotprice{
            font-size: .7rem;
            color: red;
            padding-left: .3rem;
          }
          .price{
            font-size: .7rem;
            color: gray;
            text-decoration: line-through;
          }
          .addgoods{
            position: absolute;
            right: .7rem;
            bottom: .8rem;
            width: 2rem;
            height: 2rem;
            border: 1px solid gray;
            border-radius: 50%;
            background: white;
            .jia{
              display: block;
              position: absolute;
              width: 1.2rem;
              height: 1.2rem;
              /*border: 1px solid red;*/
              font-size: 2rem;
              font-weight: 900;
              color: red;
              top: -.5rem;
              left: .2rem;
            }
        }
        }

      }
      .navs-holder-content{
        height: 15rem;
      }
    }
  }
</style>
