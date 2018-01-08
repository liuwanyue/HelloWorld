<template>
    <div class="HomeMenu">
      <ul>
        <li><img src="../../assets/menu/2017070318293739.png" alt="水果特惠趴"><span>水果特惠趴</span></li>
        <li><img src="../../assets/menu/2017061523482984.png" alt="每日必抢"><span>每日必抢</span></li>
        <li><img src="../../assets/menu/2017070318325468.png" alt="新人专享"><span>新人专享</span></li>
        <li><img src="../../assets/menu/2017070411343064.png" alt="大转盘"><span>大转盘</span></li>
      </ul>
    </div>
</template>
<script>
    export default {
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
    .HomeMenu{
      width: 100%;
      height: 7rem;
      margin-top: 0;
      margin-bottom: 1.3rem;
      overflow: hidden;
      li{
        float: left;
        width: 25%;
        background-color: white;
        padding-top: .8rem;
        padding-bottom: .8rem;
        margin-top: .3rem;
        margin-bottom: .3rem;
        img{
          width: 100%;
        }
        span{
          display: block;
          text-align: center;
        }
      }
    }
</style>
