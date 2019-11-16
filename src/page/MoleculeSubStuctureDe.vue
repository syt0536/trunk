<template>
  <div>
    <div class="moleculeSubStuctureDe">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面详情 -->
      <div class="width70">
         <div class="childTip">Show the top {{data.length}} compounds with the highest similarity</div>
            <!-- <div id="jsme_container" molString="C1CCCCCC1" code="JME.class" name="JME"  archive='JME.jar' codebase='.' width='80' height='80'></div> -->
         <!-- <div>{{this.$route.query.id1}}</div> -->
         <div class="tableBox">
           <el-table
              :data="data"
              :show-header="false"
              row-key="name"
              @row-click="rowClick"
              stripe
              style="width: 100%"
              >
              <el-table-column
                label=""
                width="180">
                <template slot-scope="scope">
                  <el-tag
                    effect="plain">
                    {{scope.row.name}}
                  </el-tag>
                  <!-- <span style="margin-top:10px;display:block;">{{scope.row.sml}}</span> -->
                </template>
              </el-table-column>
              <!-- {{ scope.row.address }}< -->
              <el-table-column
                label="">
                <template slot-scope="scope">
                    <strong>smiles</strong>
                    <br/>
                    <div style="height:50px;" >
                   <happy-scroll color="rgba(0,0,0,0.5)" size="5" hide-horizontal>
                  <div>
                    <span>{{scope.row.smiles}}</span>
                                    </div>
                                    </happy-scroll>
                                                      </div>
                  <div>
                    <el-tag
                      v-for="(item, index) in scope.row.tags"
                      type="success"
                      :key="scope.row.id + index"
                      style="margin-right:10px;"
                    >
                      {{ item }}
                    </el-tag>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              background
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="total">
            </el-pagination>

         </div>
      </div>
    </div>

  </div>


</template>

<script>
  import ChildBanner from '@/components/ChildBanner'
  export default {
    name: "MoleculeSubStuctureDe",
    components:{
      ChildBanner
    },
    data() {
      return {
        jsmeApplet:'',
        data:[],
        id2:'',
        id1:'',
        dialogVisible: false,
        total:50,
        tableData: [{
          id:1,
          name: 'DB00945',
          img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          edition: 'Score: 1.0',
          value1: 'Acetylsalicylic acid',
          value2:'50-78-2',
          value3: 'C9H8O4',
          value4: 'Mono mass: 180.042258744',
          tags:['approved', 'vet_approved']
        }, {
          id:2,
          name: 'DB00445',
          img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          edition: 'Score: 1.0',
          value1: 'Acetylsalicylic acid',
          value2:'50-78-2',
          value3: 'C9H8O4',
          value4: 'Mono mass: 180.042258744',
          tags:['approved', 'bbb']
        },{
          id:3,
          name: 'DB00915',
          img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          edition: 'Score: 2.0',
          value1: 'Acetylsalicylic acid',
          value2:'50-78-2',
          value3: 'C9H8O4',
          value4: 'Mono mass: 180.0422587445555555555555555555555555555555555555555555555555555555555555180.0422587445555555555555555555555555555555555555555555555555555555555555180.0422587445555555555555555555555555555555555555555555555555555555555555180.0422587445555555555555555555555555555555555555555555555555555555555555180.0422587445555555555555555555555555555555555555555555555555555555555555',
          tags:['approved']
        }]
      }
    },
    mounted() {
      this.id1=this.$route.params.id,
      this.getData(this.id1)

    },
    methods: {
      getData(sea){this.$axios.get(`http://192.168.1.138:9000/Substructuresimilarity/?pk='${sea}'`,
      {}).then(res=>{this.data=res.data
        console.log(res)})},       
      rowClick(row, event, column) {
        console.log(row.name)
         this.$router.push({path:`/detail/${row.name}`})
        this.dialogVisible = true
        this.$nextTick(() => {
          this.draw()
        })
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped lang="scss">
.moleculeSubStuctureDe{
  .childTip{
    color:#101010;
    font-size:16px;
    margin-top:50px;
  }
  .width70{
    width: 70%;
    margin: 0 auto;
  }
  .tableBox{
    margin-top:20px;
  }
}
</style>