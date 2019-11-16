<template>
  <div>
    <div class="login">
      <LogoHeader></LogoHeader>
      <div class="loginContent">
        <div class="loginLeft">
          <img src="@/assets/login_img.png" alt="">
        </div>
        <div class="loginRight">
            <el-avatar :size="80" :src="circleUrl"></el-avatar>
            <el-input class="input" placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
            <el-input class="input" placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
            <el-button class="button" type="primary" @click="onSubmit">登陆</el-button>
            <div class="tip" @click="onRegister">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LogoHeader from '@/components/LogoHeader'
  export default {
    name: "Login",
    components:{
      LogoHeader
    },
    data() {
      return {
        formLabelAlign:{
          username:'',
          password:''
        },
        circleUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    mounted() {
      
    },
    methods: {
      onSubmit() {
        if(!this.formLabelAlign.username || !this.formLabelAlign.password){
          this.$message.error('不能为空！');
          return;        
        }
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
        localStorage.setItem('user', this.formLabelAlign.username);
        this.$router.push('/home');
      },
      onRegister() {
        this.$router.push('/register');
      }
    }
  }
</script>

<style scoped lang="scss">
.login{
  background:#3DF2C5;
  .loginContent{
    width:73%;
    margin:0 auto;
    padding:100px 10% 100px 10%;
    display:flex;
    justify-content: space-between;
    .loginLeft{
      img{
        display:block;
        width:80%;
      }
    }
    .loginRight{
      background:#A1ECD9;
      padding:20px;
      width:360px;
      border-radius:10px;
      -weikit-border-radius:10px;
      text-align:center;
      padding-bottom:50px;
      .tip{
        font-size:14px;
        color:#F6F4F4;
        float:right;
        display:inlint;
        margin-top:10px;
      }
      .input{
        margin-top:20px;
        border:none;
      }
      .button{
        width:100%;
        background:#3DF2C5;
        color:#fff;
        margin-top:25px;
        border:none;
      }
      
    }
  }
}
</style>
