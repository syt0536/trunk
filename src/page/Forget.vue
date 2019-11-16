<template>
  <div>
    <div class="forget">
      <LogoHeader></LogoHeader>
      <div class="registerForm">
        <el-input class="input" placeholder="请输入旧密码" v-model="formLabelAlign.oldpassword" show-password></el-input>
        <el-input class="input" placeholder="请输入新密码" v-model="formLabelAlign.newpassword" show-password></el-input>
        <el-input class="input" placeholder="再次输入密码" v-model="formLabelAlign.newpasswordre" show-password></el-input>
        <el-button class="button" type="primary" @click="onSubmit">确认</el-button>
        <el-button class="button marginLeft0"  @click="onCancel">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import LogoHeader from '@/components/LogoHeader'
  export default {
    name: "Forget",
    components:{
      LogoHeader
    },
    data() {
      return {
        formLabelAlign:{
          oldpassword:'',
          newpassword:'',
          newpasswordre:''
        }
      }
    },
    mounted() {
      
    },
    methods: {
      onSubmit() {
        if(!this.formLabelAlign.oldpassword || !this.formLabelAlign.newpassword || !this.formLabelAlign.newpasswordre){
          this.$message.error('不能为空！');
          return;        
        }
        if(this.formLabelAlign.newpassword !== this.formLabelAlign.newpasswordre){
          this.$message.error('两次密码输入不一致');  
          return;      
        }
        this.$router.push('/login');
      },
      onCancel(){
        this.$router.push('/home');
      }
    }
  }
</script>

<style scoped lang="scss">
.forget{
  height: 100%;
  width:100%;
  position:absolute;
  background:#3DF2C5;
  .registerForm{
    width:30%;
    margin:0 auto;
    margin-top:100px;
    .input{
      margin-top:20px;
      border:none;
      input{
        color:red;
      }
    }

    .marginLeft0{
      margin-left:0px;
    }

    .button{
      width:100%;
      background:#fff;
      color:#3DF2C5;
      margin-top:25px;
      border:none;
      font-size:14px;
    }
  }
}
</style>
