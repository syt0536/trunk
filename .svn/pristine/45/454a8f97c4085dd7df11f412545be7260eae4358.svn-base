<template>
  <div>
    <div class="statisticalChart">
      <ChildBanner></ChildBanner>
      <!-- 图形搜索页面 -->
      <div v-if="!show" class="childTip">Showing chart</div>
      <div v-if="!show" class="charts" id="myChart" :style="{ height: '400px'}" ></div>
      <div v-if="!show" class="charts" id="myChart1" :style="{ height: '400px'}" ></div>
      
      <!-- <div v-if="show" class="width70">
        <a class="returnChart" @click="returnChart">return chart</a>
        <Childtable :data="tableData" :total="total"></Childtable>
      </div> -->
    </div>
  </div>
</template>

<script>
  import ChildBanner from '@/components/ChildBanner'
  import Childtable from '@/components/Childtable'
  export default {
    name: "StatisticalChart",
    components:{
      ChildBanner,
      Childtable
    },
    data() {
      return {
        searchinput:'',
        show: false,
        data: [],
        data0: [],
        total:50,
        data1:{
          xaxis:[],
          datas:[]
        },
        data2:{
          xaxis:[],
          datas:[],
        }
      }
    },
    mounted() {
      this.searchinput=this.$route.params.id;
      this.getdata(this.searchinput);
      this.getdata2(this.searchinput);
    },
    methods: {
      getdata(sea){this.$axios.get(`http://192.168.1.138:9002/TargetDistribution/?pk=${sea}`,{
    }).then(res=>{this.data=res.data;
        console.log(this.data),
        console.log(res)
        for(const key in this.data){
          this.data1.xaxis.push(this.data[key][0]);
          this.data1.datas.push(this.data[key][1]);          
        }
          let myChart = this.$echarts.init(document.getElementById('myChart'));
              myChart.setOption({
                "title": {
                  "text": "靶点分布",
                  "subtext": `与${this.searchinput}相关的药物个数`,
                  x: "4%",
                  textStyle: {
                    color: '#000',
                    fontSize: '18'
                  },
                  subtextStyle: {
                    color: '#90979c',
                    fontSize: '12',
                  },
                  },
                color: ['#3398DB'],
                tooltip: {        trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }},
                grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
                },
                xAxis: {
                  data: this.data1.xaxis,
                  type : 'category',
                  axisTick: {
                    alignWithLabel: true
                },
                  name:'靶点名称',
                },
                yAxis: {
                type : 'value'
                },
                series: [{
                  name: '药物个数',
                  type: 'bar',
                  data: this.data1.datas,
                }]
        });
        // const _this = this;
        // myChart.on('click', function (params) {
        //     if (params.componentType === 'series') {
        //       _this.show = true;
        //     }
        // });
        }
        
        )
        
        },  
    getdata2(sea){this.$axios.get(`http://192.168.1.138:9002/PhaseDistribution/?pk=${sea}`,{
    }).then(res=>{this.data0=res.data;
        console.log(this.data2),
        console.log(res)
        for(const key in this.data0){
          this.data2.xaxis.push(this.data0[key][0]);
          this.data2.datas.push(this.data0[key][1]);          
        }
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
            myChart1.setOption({
                "title": {
                  "text": "药物临床分布",
                  "subtext": `与${this.searchinput}相关的药物个数`,
                  x: "4%",
                  textStyle: {
                    color: '#000',
                    fontSize: '18'
                  },
                  subtextStyle: {
                    color: '#90979c',
                    fontSize: '12',
                  },
                },
                tooltip: {},
                xAxis: {
                  data: this.data2.xaxis,
                  type : 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLabel: {
                    interval:0 
                  },
                  name:'临床阶段',
                },
                yAxis: {},
                series: [{
                  name: '药物个数',
                  type: 'bar',
                  data: this.data2.datas
                }]
            });
         const _this = this;
         myChart1.on('click', function (params) {
            if (params.componentType === 'series') {
              // _this.show = true;
              _this.$router.push({path:`/clinicalResult/${_this.searchinput}`})
            }
        });
      })
    },
  }
}
</script>

<style scoped lang="scss">
.statisticalChart{
  position:relative;
  .childTip{
    color:#101010;
    font-size:14px;
    width: 70%;
    margin: 0 auto;
    margin-top:50px;
  }
  .width70{
    width: 70%;
    margin: 0 auto;
  }
  .returnChart{
    position: absolute;
    right: 15%;
    color: #3DF2C5 ;
    text-decoration: underline;
    cursor:pointer;
  }
}
.charts{
  width: 70%;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  margin-top:20px;
  border-bottom:1px solid #dcdcdc;
}
</style>
