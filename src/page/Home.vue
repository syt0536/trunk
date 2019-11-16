<template>
  <div class="home">
    <Header></Header>
    <div class="banner">
      <div class="tip">
        This s a drug data search system.
      </div>
      <div class="searchBox">
        <el-input 
          :placeholder="content"  
          v-model.trim="searchinput" 
          :autofocus="true"
        >
          <el-button 
            slot="append"
            @keyup.enter="searchClick"
            @click="searchClick"
          >
            SEARCH
          </el-button>
        </el-input>
      </div>
      <div class="navMenu">
        <ul>
          <li 
            v-for="(item , k) in navMenuList" 
            @click="menuClick(k)" 
            :class="clickIndex ==  k ? 'active':''"
          >
            <i :class="item.icon"></i>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻轮播页面 -->
    <div class="carousel">
      <el-row>
        <el-col :span="8" v-for="(o, index) in 3" :key="index" class="carousel-item">
          <el-card :body-style="{ padding: '15px' }">
            新闻区域
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "Home",
    components:{
      Header
    },
    data() {
      return {
        searchinput:'',
        clickIndex:-1,
        content:'Please enter the search criteria',
        navMenuList:[{
          icon:'el-icon-edit',
          text:'CLINICAL'
        },{
          icon:'el-icon-edit',
          text:'STATISTICAL CHART'
        },{
          icon:'el-icon-edit',
          text:'MOLECULE STUCTURE'
        }]
      }
    },
    mounted() {
      
    },
    methods: {
      menuClick(k){
        this.clickIndex = k;
        if(k == 0 ){
          this.content='drug dinical information'
          return;
        }
        ;
        if(k == 1){
         this.content='statisticalChart information';
         return;
        }
        if(k == 2){
          this.$router.push('/moleculeStucture');
        }
      },
      searchClick(){
        if(this.clickIndex==-1){
          this.$router.push(`/searchResult/${this.searchinput}`)
        }
        if(this.clickIndex==0){
          this.$router.push(`/clinicalResult/${this.searchinput}`)
        }
       if(this.clickIndex==1){
          this.$router.push(`/statisticalChart/${this.searchinput}`)
          console.log(this.searchinput)
        }
        // this.$router.push(this.clickIndex == 0 ? '/clinicalResult':'/searchResult');
        console.log(this.searchinput)
      }

    }
  }
</script>

<style scoped lang="scss">
  .home{
    width:100%;
    .carousel{
      width:70%;
      margin:0 auto;
      background:#FBFBFB;
      padding:20px;
      margin-top:40px;
      .carousel-item{
        padding:10px;
        height:360px;
        overflow:hidden;
        .el-card{
          height:100%;
        }
      }
    }
    
    .banner{
      height:440px;
      overflow:hidden;
      background: #3DF2C5 100%;
      width:100%;
      min-width:1024px;
      padding:0px 10%;
      color:#fff;
      font-size:14px;
      text-align:center;
      .tip{
        font-size:36px;
        margin-top:120px;
        margin-bottom:35px;
      }
      .searchBox{
        min-width:700px;
        width:60%;
        margin:0 auto;
        border-color:#bbb;
        input{
          color:#000;
          font-size:16px;
        }
        button{
          background:#A1ECD9 100%;
          color:#fff;
          border-radius: initial;
        }
      }
      .navMenu{
          min-width: 700px;
          width: 60%;
          margin: 0 auto;
          margin-top:15px;
        ul{
          li{
            display:block;
            float:left;
            display:inline;
            width:120px;
            height:40px;
            overflow:hidden;
            background:#FFFFFF 100%;
            border-radius:100px;
            -webkit-border-radius:100px;
            color:#EC96DE;
            text-align:left;
            display:flex;
            justify-content: center;
            align-items: center;
            margin-right:20px;
            padding:0px 5px;
            i{
              width:24px;
              height:24px;
              font-size:24px;
            }
            span{
              display:block;
              font-size:12px;
              word-break: break-all;
              margin-left:2px;
            }
            &:hover,&.active{
              background:#A1ECD9;
              cursor:pointer;
              color:#fff;
            }
          }
        }
      }
    }
  }
</style>
