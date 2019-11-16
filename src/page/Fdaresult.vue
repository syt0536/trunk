<template>
  <div>
    <div class="Fdaresult">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
		  <div class="childTip">美国FDA药品专利数据库(U.S. FDA Drugs Patent Database)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="专利号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="专利到期日"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="申请号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="产品号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="商品名"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="活性成分"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="剂型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物质专利"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="产品专利">
      </el-table-column>
    </el-table>
    </div>
      </div>
  </div> 
  </div>
</template>

<script>
 import ChildBanner from '@/components/ChildBanner'
  export default {
    name: "Fdaresult",
    components:{
      ChildBanner
    },
    data() {
      return {
      }
    },
    mounted() {
      
    }
  }
</script>

<style scoped lang="scss">
 .width70{
    width: 85%;
    margin: 0 auto;
  }
    .childTip{
    color:#101010;
    font-size:14px;
    margin-top:50px;
  }
    .tableBox{
    margin-top:20px;
  }
</style>