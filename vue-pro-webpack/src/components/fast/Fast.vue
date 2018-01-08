<template>

  <div>
    <Head></Head>
    <div class="content">
      <Menu v-on:categoryid="sendToContent"></Menu>
      <FastSelect></FastSelect>
      <FastContent :categoryid="categoryId"></FastContent>
    </div>
  </div>
</template>
<script>
  import Head from '../../base/Header.vue'
  import Menu from './menu.vue'
  import FastSelect from './FastSelect.vue'
  import FastContent from './FastContent.vue'

  export default {
    data() {
      return {
        categoryId:1000,
      }
    },
    created() {
    },
    methods: {
      sendToContent:function (str) {
        this.categoryId = str;
      }
    },
    computed: {},
    components: {
      Head,
      Menu,
      FastSelect,
      FastContent
    }
  }
</script>
<style scoped lang="less">
  p {
    color: pink;
  }
</style>
