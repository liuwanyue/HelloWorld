<template>
  <div class="fastSelect">
    <ul>
      <li class="allTypes">全部分类</li>
      <li class="multiSort">综合排序</li>
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
  .fastSelect {
    float: right;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 74%;
    left: 26%;
    border-bottom: 1px solid #e0e0e0;
z-index: 9;
    .allTypes {
      display: inline-block;
    }
    .allTypes:after {
      content: '∨';
    }
    .multiSort {
      display: inline-block;
    }
    .multiSort:after {
      content: '∨';

    }
  }
</style>
