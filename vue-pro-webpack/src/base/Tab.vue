<template>
  <ul>
    <router-link to="/" exact tag="li" class="home_link" active-class="home_link_active ">
      <img src="../assets/routerlink/home_1.png" alt="" class="home_img1">
      <img src="../assets/routerlink/home.png" alt="" class="home_img animated rubberBand">
      <span>首页</span>
    </router-link>
    <router-link to="/fast" tag="li" class="fast_link" active-class="fast_link_active">
      <img src="../assets/routerlink/fast_1.png" alt="" class="fast_img1">
      <img src="../assets/routerlink/fast.png" alt="" class="fast_img animated rubberBand">
      <span>闪送超市</span>
    </router-link>

    <router-link to="/buycar" tag="li" class="cart_link" active-class="cart_link_active">
      <img src="../assets/routerlink/cart_1.png" alt="" class="cart_img1">
      <img src="../assets/routerlink/cart.png" alt="" class="cart_img animated rubberBand">
      <span>购物车</span>
    </router-link>

    <router-link to="/mine" tag="li" class="mine_link" active-class="mine_link_active">
      <img src="../assets/routerlink/mine_1.png" alt="" class="mine_img1">
      <img src="../assets/routerlink/mine.png" alt="" class="mine_img animated rubberBand">
      <span>我的</span>
    </router-link>
  </ul>
</template>
<script>
  import 'animate.css'

  export default {
    data() {
      return {
        flag: true,
      }
    },
    created() {
    },
    methods: {

    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  ul {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    bottom: 0;
    background: #F8F8FF;
    li {
      margin-top: .1rem;
      display: block;
      text-align: center;
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
      span {
        display: block;
        font-size: .14rem;
        color: #999;
      }
    }

    .home_link {
      .home_img {
        display: none;
      }
      .home_img1 {
        visibility: visible;
      }
    }
    .home_link_active {
      .home_img1 {
        display: none;
      }

      .home_img {
        visibility: visible;
        display: inline;

      }
    }

    .fast_link {
      .fast_img {
        display: none;
      }
      .fast_img1 {
        visibility: visible;
      }
    }
    .fast_link_active {
      .fast_img1 {
        display: none;
      }
      .fast_img {
        visibility: visible;
        display: inline;
      }
    }

    .cart_link {
      .cart_img {
        display: none;
      }
      .cart_img1 {
        visibility: visible;
      }
    }
    .cart_link_active {
      .cart_img1 {
        display: none;
      }
      .cart_img {
        visibility: visible;
        display: inline;
      }
    }

    .mine_link {
      .mine_img {
        display: none;
      }
      .mine_img1 {
        visibility: visible;
      }
    }
    .mine_link_active {
      .mine_img1 {
        display: none;
      }
      .mine_img {
        visibility: visible;
        display: inline;
      }
    }
  }
</style>
