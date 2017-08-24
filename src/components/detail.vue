<template>
  <div>

    <header-title :text="titleText"></header-title>
    <router-link class=" back-btn" to="/list">返回</router-link>
    <p class="text-primary">{{item.title}}</p>
    <p class="text-success">{{item.content}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  const HeaderTitle = require('./title.vue');
  export default {
    props: {
     item: Object,
      userInfo: Object
    },
    data: function () {
      return {
        titleText: '欢迎' + this.userInfo.username +'详情页面'
      }
    },
    components: {
      HeaderTitle
    }
  }
</script>
<style scoped>
  .back-btn{
    position: absolute;
    padding: 10px;
    background-color: #ddc1c1;
    color: #fff;
    top: 50px;
    left: 0px;
    border-radius: 3px;
  }
</style>
