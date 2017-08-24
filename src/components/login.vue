<template>
  <div>
    <header-title v-bind:text="titleText"></header-title>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入用密码" v-model="password">
      </div>
      <!-- Generated markup by the plugin -->
      <p class="text-warning" v-show="isWarning">{{warningMsg}}</p>
      <button type="submit" class="btn btn-default" @click.prevent="loginClick">登录</button>
    </form>
  </div>


</template>
<script type="text/ecmascript-6" >
  const HeaderTitle = require('./title.vue');
  export default {
    props: [],
    data: function () {
      return {
        titleText: '请登录',
        username: '',
        password: '',
        warningMsg: '',
        isWarning: false
      };
    },
    methods: {
      loginClick() {
        if(!this.username) {
          this.warningMsg = '请输入用户名';
          this.isWarning = true;
        } else if (!this.password) {
          this.warningMsg = '请输入用密码';
          this.isWarning = true;
        } else {
          this.isWarning = false;
          this.$emit('userlogin',{
            username: this.username,
            password: this.password
          });

        }

      }

    },
    components: {
      HeaderTitle
    }
  }
</script>
<style></style>
