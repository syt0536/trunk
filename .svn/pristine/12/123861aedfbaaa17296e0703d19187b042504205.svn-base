<template>
  <div>
    <div class="moleculeStuctureDe">
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
              style="width: 100%">
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
                label=""
                width="180">
                <!-- <template slot-scope="scope"> -->
                  <!-- <div id="jsme_container"  code="JME.class" name="JME"  archive='JME.jar' codebase='.' width='80' height='80'></div> -->
                  <!-- <el-image
                    style="width: 80px; height: 80px"
                    :src="scope.row.img"
                  ></el-image> -->
                <!-- </template> -->
              </el-table-column>
              <el-table-column
                label="">
                <template slot-scope="scope">
                  <div>
                    <strong>score</strong>
                    <br/>
                    <span>{{scope.row.sml}}</span>
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
              <el-table-column
                label="">
                <template slot-scope="scope">
                  <span>
                    {{scope.row.value3}}
                  </span>
                  <br/>
                  <span>
                    {{scope.row.value4}}
                  </span>
                </template>
              </el-table-column>

            </el-table>
            <el-pagination
              background
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="total">
            </el-pagination>
            <!-- <el-dialog
              title="3D分子结构图"
              :visible.sync="dialogVisible"
              width="40%"
              :before-close="handleClose">
              <div class="viewer_3Dmoljs center-block" id="viewer"  style="height: 360px; width: 100%; position: relative; border: 1px solid silver;"></div>  
              <textarea id="input-data" style="display: none"> 2244
  -OEChem-10051719263D

 21 21  0     0  0  0  0  0  0999 V2000
    1.2333    0.5540    0.7792 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6952   -2.7148   -0.7502 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.7958   -2.1843    0.8685 O   0  0  0  0  0  0  0  0  0  0  0  0
    1.7813    0.8105   -1.4821 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0857    0.6088    0.4403 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7927   -0.5515    0.1244 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7288    1.8464    0.4133 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.1426   -0.4741   -0.2184 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.0787    1.9238    0.0706 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.7855    0.7636   -0.2453 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1409   -1.8536    0.1477 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.1094    0.6715   -0.3113 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.5305    0.5996    0.1635 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1851    2.7545    0.6593 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.7247   -1.3605   -0.4564 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5797    2.8872    0.0506 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.8374    0.8238   -0.5090 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.7290    1.4184    0.8593 H   0  0  0  0  0  0  0  0  0  0  0  0
    4.2045    0.6969   -0.6924 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.7105   -0.3659    0.6426 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.2555   -3.5916   -0.7337 H   0  0  0  0  0  0  0  0  0  0  0  0
  1  5  1  0  0  0  0
  1 12  1  0  0  0  0
  2 11  1  0  0  0  0
  2 21  1  0  0  0  0
  3 11  2  0  0  0  0
  4 12  2  0  0  0  0
  5  6  1  0  0  0  0
  5  7  2  0  0  0  0
  6  8  2  0  0  0  0
  6 11  1  0  0  0  0
  7  9  1  0  0  0  0
  7 14  1  0  0  0  0
  8 10  1  0  0  0  0
  8 15  1  0  0  0  0
  9 10  2  0  0  0  0
  9 16  1  0  0  0  0
 10 17  1  0  0  0  0
 12 13  1  0  0  0  0
 13 18  1  0  0  0  0
 13 19  1  0  0  0  0
 13 20  1  0  0  0  0
M  END
&gt; &lt;DATABASE_ID&gt;
DB00945

&gt; &lt;DATABASE_NAME&gt;
drugbank

&gt; &lt;ORIGINAL_SOURCE&gt;
PUBCHEM

&gt; &lt;ORIGINAL_SOURCE_URL&gt;
https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/inchikey/BSYNRYMUTXBXSQ-UHFFFAOYSA-N/SDF?record_type=3d

&gt; &lt;SMILES&gt;
CC(=O)OC1=CC=CC=C1C(O)=O

&gt; &lt;INCHI_IDENTIFIER&gt;
InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12)

&gt; &lt;INCHI_KEY&gt;
BSYNRYMUTXBXSQ-UHFFFAOYSA-N

&gt; &lt;FORMULA&gt;
C9H8O4

&gt; &lt;MOLECULAR_WEIGHT&gt;
180.1574

&gt; &lt;EXACT_MASS&gt;
180.042258744

&gt; &lt;JCHEM_ACCEPTOR_COUNT&gt;
3

&gt; &lt;JCHEM_AVERAGE_POLARIZABILITY&gt;
17.095252032618916

&gt; &lt;JCHEM_BIOAVAILABILITY&gt;
1

&gt; &lt;JCHEM_DONOR_COUNT&gt;
1

&gt; &lt;JCHEM_FORMAL_CHARGE&gt;
0

&gt; &lt;JCHEM_GHOSE_FILTER&gt;
1

&gt; &lt;JCHEM_IUPAC&gt;
2-(acetyloxy)benzoic acid

&gt; &lt;ALOGPS_LOGP&gt;
1.43

&gt; &lt;JCHEM_LOGP&gt;
1.238089698333333

&gt; &lt;ALOGPS_LOGS&gt;
-2.09

&gt; &lt;JCHEM_MDDR_LIKE_RULE&gt;
0

&gt; &lt;JCHEM_NUMBER_OF_RINGS&gt;
1

&gt; &lt;JCHEM_PHYSIOLOGICAL_CHARGE&gt;
-1

&gt; &lt;JCHEM_PKA_STRONGEST_ACIDIC&gt;
3.4147992082888363

&gt; &lt;JCHEM_PKA_STRONGEST_BASIC&gt;
-7.144798751338897

&gt; &lt;JCHEM_POLAR_SURFACE_AREA&gt;
63.6

&gt; &lt;JCHEM_REFRACTIVITY&gt;
44.4466

&gt; &lt;JCHEM_ROTATABLE_BOND_COUNT&gt;
3

&gt; &lt;JCHEM_RULE_OF_FIVE&gt;
1

&gt; &lt;ALOGPS_SOLUBILITY&gt;
1.46e+00 g/l

&gt; &lt;JCHEM_TRADITIONAL_IUPAC&gt;
aspirin

&gt; &lt;JCHEM_VEBER_RULE&gt;
0

$$$$
</textarea>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="downLoad">下载</el-button>
              </span>
            </el-dialog> -->
         </div>
      </div>
    </div>

  </div>

</template>

<script>
  import ChildBanner from '@/components/ChildBanner'
  export default {
    name: "MoleculeStuctureDe",
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
          value4: 'Mono mass: 180.042258744',
          tags:['approved']
        }]
      }
    },
    mounted() {
      this.id2=this.$route.query.id,
      this.id1=this.$route.query.id2,
    this.getData(this.id2,this.id1)
      // this.jsmeOnLoad()
    },
    methods: {
      getData(sea,si){this.$axios.get(`http://192.168.1.138:9002/Structuresimilarity/?pk1='${sea}'&pk2=${si}`,
      {}).then(res=>{this.data=res.data
        console.log(this.data)})},
        
      rowClick(row, event, column) {
        console.log(row.name)
         this.$router.push({path:`/detail/${row.name}`})
        this.dialogVisible = true
        this.$nextTick(() => {
          this.draw()
        })
      },
      handleClose(done) {
        done();
      },
      downLoad(){
        console.log('download')
      },
      // jsmeOnLoad() {
      //   this.jsmeApplet = new JSApplet.JSME("jsme_container", "80px", "80px", {
      //      "options" : "depict,nozoom,noshowdraganddropsymbolindepictmode"
      //   });
      //   document.JME = this.jsmeApplet;
      // },
      draw(){
        var viewer = $3Dmol.createViewer("viewer");
        viewer.setBackgroundColor(0xffffff);
        var rec = viewer.addModelsAsFrames($('#input-data').val(), "sdf");
        rec.setStyle({stick:{radius:0.1},sphere:{scale:0.2}});
        viewer.render();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped lang="scss">
.moleculeStuctureDe{
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
