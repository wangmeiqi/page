<template>
  <div>
    <div class=" text-center ">
      <p class="bg-info ">{{text}}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      text: String
  }
  }
</script>
<style scoped>
  div p {
    margin: 40px auto;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    color: #fff;
  }
</style>
