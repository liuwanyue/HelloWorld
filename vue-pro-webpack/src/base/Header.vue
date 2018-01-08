<template>
    <div class="head">
      <div class="headName">
        <span class="headerName">马泉营 马泉营二区105</span>
      </div>
      <div class="headSearch">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索</span>
      </div>
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
  .head {
    position: fixed;
    width: 100%;
    height: 4.5rem;
    background-color: #ffd600;
    .headName{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-weight:700;
    }
    .headName:after{
      content: '▼';
      font-size: 1rem;
    }
    .headSearch{
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%,-50%);
      i{
        font-size: 1.5rem;
      }
      span{
        display: block;
      }
    }
    }



</style>
