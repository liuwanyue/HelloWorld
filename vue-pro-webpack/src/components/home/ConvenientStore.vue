<template>
  <div>
  <!--便利店-->
    <div class="store">
        <div class="storeImg">
          <img src="../../assets/convenientstore/ea_1.png" alt="">
        </div>
      <div class="storetype">
        <ul>
          <li>
            <img src="../../assets/convenientstore/ea_2.jpg" alt="">
          </li>
          <li>
            <img src="../../assets/convenientstore/ea_3.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="storetypeitem">
        <ul>
          <li>
            <img src="../../assets/convenientstore/ea_4.png" alt="">
            <span>休闲零食</span>
          </li>
          <li>
            <img src="../../assets/convenientstore/ea_5.png" alt="">
            <span>生活用品</span>
          </li>
          <li>
            <img src="../../assets/convenientstore/ea_6.png" alt="">
            <span>方便速食</span>
          </li>
          <li>
            <img src="../../assets/convenientstore/ea_7.png" alt="">
            <span>更多分类</span>
          </li>
        </ul>
      </div>
      <div class="storeothers">
        <ul>
          <li v-for="i in storeothers">
            <img :src="i" alt="">
          </li>
        </ul>
      </div>

    </div>
    <!--商品分类-->
    <div  v-for="goodsList in goodsAll" class="storecolumn">
      <!--分类名称-->
      <div class="nameH">
        <span class="name">{{goodsList.categoryName}}</span>
        <span class="more">更多  ></span>
      </div>
      <!--分类图片-->
      <div class="storecolumnimg">
        <img :src="goodsList.introImg"/>
      </div>
      <!--商品列表-->
      <div class="storecolumnlist">
        <ul>
          <li v-for="goods in goodsList.goods" >
            <div>
              <img :src="goods.goodsPic"/>
              <span class="name">{{goods.name.length>=8?goods.name.slice(0,6)+'...':goods.name}}</span>
              <span v-if="goods.carefullyChosen">
                 <span class='carefullychose' >精选</span>
              </span>
              <span class="unit">{{goods.unit}}</span>
              <span class="hotprice">{{goods.hotPrice}}</span>
              <span class="price">{{goods.price}}</span>
              <div class="addgoods"><span class="jia">+</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
    export default {
        data() {
            return {
              storeothers:[],
              goodsAll:[],
            }
        },
        created() {
          this.getStoreOthers();
          this.getGoodsList();
        },
        methods: {
          getStoreOthers(){
            axios.get('/api/storeothers').then((res)=>{
              this.storeothers = res.data;
            })
          },
          getGoodsList(){
            axios.get('/api/goodsList').then((res)=>{
              this.goodsAll = res.data;
            })
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
  .store{
    width: 100%;
    margin-top: .8rem;
    margin-bottom: .8rem;
    background-color: #ffffff;
    overflow: hidden;
    img{
      width: 100%;
    }
    .storetype{
      background-color: #ffffff;
      ul{
        li{
          float: left;
          width: 50%;
        }
      }
    }
    .storetypeitem{
      width: 100%;
      ul{
        li{
          float: left;
          width: 25%;
          height: auto;
          line-height: 2rem;
          span{
            margin-top: -.9rem;
            display: block;
            text-align: center;
          }
        }
      }
    }
    .storeothers{
      ul{
        li{
          float: left;
          width: 50%;
        }
      }
    }

  }
  .storecolumn{
    width: 100%;
    margin-bottom: 1.2rem;
    .nameH{
      width: 100%;
      height: 3.2rem;
      background-color: #ffff;
      .name{
        font-size: 1.1rem;
        color:#E80013;
        border-left: .7rem solid #E80013;
        padding-left: .5rem;
        font-weight: 700;
        line-height: 1.3rem;

        display: inline-block;
        margin: .95rem 0 0 1rem;

      }
      .more{
        float: right;
        font-size: .8rem;
        color: gray;
        line-height: 1rem;

        display: inline-block;
        margin: 1.1rem .5rem 0 0 ;

      }
    }
    .storecolumnimg{
      width: 100%;
      height: 6rem;
      overflow: hidden;
      img{
        width: 100%;
        display: block;
      }
    }
    .storecolumnlist{
      /*position: relative;*/
      width: 100%;
      overflow: hidden;
      height: 15.6rem;
      background-color: #ffff;
      padding-top: .5rem;
      li{
        position: relative;
        float: left;
        width: 33.17%;
        height: 15rem;
        /*border-left: .5px solid lightgray;*/
        border-right: .5px solid lightgray;
        img{
          display: block;
          width: 98%;
        }
        .name{
          display: block;
          padding-top: .5rem;
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
          bottom: .9rem;
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
  }

</style>
