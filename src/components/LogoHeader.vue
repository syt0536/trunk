<template>
  <div class="loginHeader">
    <img src="@/assets/logo.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "LogoHeader",
    components:{
    },
    data() {
      return {
      }
    },
    mounted() {
      
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .loginHeader{
    width:100%;
    background:#fff;
    min-width:1024px;
    padding:15px 10%;
    img{
      display:block;
      height:30px;
    }
  }
</style>
