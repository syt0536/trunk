<template>
  <div class="childBanner">
    <Header></Header>
    <div class="banner">
      <div class="searchBox">
        <el-input 
          placeholder=""  
          v-model.trim="searchinput" 
          :autofocus="true"
        >
          <el-select 
            v-model="select" 
            slot="prepend" 
            placeholder="请选择" 
            class="selectBox"
            v-if="show"
          >
            <el-option label="Clinical" value="Clinical"></el-option>
            <el-option label="Target" value="Target"></el-option>
            <el-option label="Indication" value="Indication"></el-option>
          </el-select>
          <el-button 
            slot="append"
            @keyup.enter="searchClick"
            @click="searchClick"
          >
            SEARCH
          <!-- <router-link to="/searchResult/12"></router-link> -->
          </el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "ChildBanner",
    components:{
      Header
    },
    props:{
      show:{
        type:Boolean,
        default: false
      }
    },
    data() {
      return {
        searchinput:'',
        select: 'Clinical',
        clickIndex:0,
      }
    },
    mounted() {
      
    },
    methods: {
      searchClick(){
        if(!this.select){
          this.$router.push({path:`/searchResult/${this.searchinput}`});
        }
        else {if(this.select=='Clinical'){
          this.$router.push({path:`/clinicalResult/${this.searchinput}`})
          console.log('1')
        }
        else{
          this.$router.push({path:`/searchResult/${this.searchinput}`})
          console.log('2')
        }}
      }
    }
  }
</script>

<style scoped lang="scss">
  .childBanner{
    width:100%;
    .banner{
      height:150px;
      overflow:hidden;
      background: #3DF2C5 100%;
      width:100%;
      min-width:1024px;
      padding:0px 10%;
      color:#fff;
      font-size:14px;
      text-align:center;
      .searchBox{
        min-width:700px;
        width:60%;
        margin:0 auto;
        margin-top:50px;
        border-color:#bbb;
        .selectBox{
          width:130px;
          background:#fff;
          border:none;
          height:38px;
        }
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
    }
  }
</style>
