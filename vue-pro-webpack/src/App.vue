<template>
  <div>
    <router-view/>

    <Tab/>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  export default {
  name: 'app',
  components:{
    Tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{text-decoration: none}
  ul,li{
    list-style: none;
  }
  input,button{-webkit-appearance: none}
  html,body{
    font-size: 14px;width: 100%;height: 100%;overflow: hidden;
  }
.content{
  position: fixed;
  width: 100%;
  top:4.5rem;
  bottom: 4rem;
  overflow-y:scroll;
}

</style>
