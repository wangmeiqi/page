<template>
  <div>
    <header-title v-bind:text="titleText"></header-title>
    <div class="list-group" v-for="(item,index) in list" >
      <a href="#" @click.prevent="itemClick(index)"  class="list-group-item">
        <h4 class="list-group-item-heading">{{item.title}}</h4>
        <p class="list-group-item-text">{{item.content.slice(0,20) + '..'}}</p>
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  const HeaderTitle = require('./title.vue');
  export default {
    props: {
      userInfo: Object,
      list: Array,
    },
    data: function () {
      return {
        titleText: '欢迎' + this.userInfo.username +'列表页面'
      }
    },
    methods:{
      itemClick: function (index) {
        this.$emit('itemclick',index);
      }
    },
    components: {
      HeaderTitle
    }
  }
</script>
<style></style>
