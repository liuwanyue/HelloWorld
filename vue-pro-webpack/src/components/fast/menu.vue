<template>
  <div>
    <div class="fastMenu">
      <ul class="menu">
        <li :data-categoryid="1000">热销·新品</li>
        <li :data-categoryid="1001">优选水果</li>
        <li :data-categoryid="1003">卤味熟食</li>
        <li :data-categoryid="1002">牛奶面包</li>
        <li :data-categoryid="1005">热饮</li>
        <!--<li :data-categoryid="1006">进口食品</li>-->
        <li :data-categoryid="1007">冰激凌</li>
        <li :data-categoryid="1004">饮料酒水</li>
        <li :data-categoryid="1008">休闲零食</li>
        <li :data-categoryid="1009">方便速食</li>
        <li :data-categoryid="1010">粮油调味</li>
        <li :data-categoryid="1011">肉蛋时蔬</li>
        <li :data-categoryid="1012">生活用品</li>
        <li :data-categoryid="1013">跑腿代购</li>
      </ul>
      <span class="navs-holder-menu"></span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuIndex:1000,
      }
    },
    created() {
    },
    watch:{
      menuIndex:{
        handler(){
          this.$emit('categoryid',this.menuIndex);
        }
      }
    },
    mounted(){
      this.$nextTick(()=>{
       var ulFa = document.getElementsByClassName('menu')[0];
       var lis = ulFa.getElementsByTagName('li');
       var $this = this;
        for (var i = 0; i < lis.length; i++) {
          var categoryid = lis[i].dataset.categoryid;
          (function (i,$this) {
            lis[i].onclick=function () {
                changeTab(i);
                $this.sendCategoryId(lis[i].dataset.categoryid);
            }
          })(i,$this);
        }

        function changeTab(index) {
          for (var i = 0; i < lis.length; i++) {
            lis[i].className=null;
          }
          lis[index].className='selected';
        }
      });
    },
    methods: {
      sendCategoryId:function (str) {
        this.menuIndex = str;
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .fastMenu {
    /*height: 32.1rem;*/
    height: 100%;
    /*position: absolute;*/
    position: fixed;
    overflow-y: scroll;
    width: 24%;
    padding-bottom: 7rem;
    ul {
      li {
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;
        color: #6d6d6d;

        background-color: whitesmoke;
        border-left: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        overflow-y: scroll;
        }
      .selected:before{
        content: '';
        position: absolute;
        width: .4rem;
        height: 3.5rem;
        margin-top: 0.5rem;
        left: 0;
        /*top: 44.5%;*/
        -webkit-transform: translateY(-50%);
        border-left: .5rem solid;
        border-color: #ffd600;
      }
    }
    .navs-holder-menu{
      display: block;
      height: 8.5rem;
    }
  }

</style>
