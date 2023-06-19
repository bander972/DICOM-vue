/**
 * 历史数据-分析历史
 */
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索影像名称：">
        <el-input size="small" v-model="formInline.s_logname" clearable placeholder="输入影像名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="onSearch">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table size="small" :data="listData" highlight-current-row v-loading="loading" border element-loading-text="拼命加载中" style="width: 100%;">
      <el-table-column align="center" type="index" width="60">
      </el-table-column>
      <el-table-column sortable prop="logid" label="文件编号" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="logname" label="文件名称" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="uptime" label="上传日期" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="logstate" label="处理状态" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="toResult(scope.$index, scope.row)">查看结果</el-button>
          <el-button size="mini"><a href="viewer.html">进入阅片</a></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value2:'',
        pickerOptions: {
          //选择日期
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: '预览',

      formInline: {
        s_logname:'',
        page: 1,
        limit: 10,
        logid: '',
        logname: '',
        uptime: '',
        s_uptime:'',
        loginf: 0,
        orderStatus: 0,
        token: localStorage.getItem('logintoken')
      },
      userparm: [], //搜索权限
      listData: [
        {
          logid:"1",
          logname:"ImageFileName0080.dcm",
          uptime:"2023-04-03",
          logstate:"处理完成"
        },
        {
          logid:"2",
          logname:"ImageFileName0081.dcm",
          uptime:"2023-04-04",
          logstate:"处理完成"
        },
        {
          logid:"3",
          logname:"ImageFileName0082.dcm",
          uptime:"2023-04-04",
          logstate:"处理完成"
        },
        {
          logid:"4",
          logname:"ImageFileName0083.dcm",
          uptime:"2023-04-12",
          logstate:"处理完成"
        },
        {
          logid:"5",
          logname:"ImageFileName0084.dcm",
          uptime:"2023-04-13",
          logstate:"处理完成"
        }
      ], //用户数据
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      }
    }
  },
  // 注册组件
  components: {
  },

  /**
   * 创建完毕
   */
  created() {
    // this.getdata(this.formInline)
    var that=this;
    var uname = this.$store.state.uname;
    this.$axios.post('http://localhost:8081/log/getHistory',{
      uname: uname,
      logname: this.formInline.s_logname,
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      that.listData=Response.data;
       console.log(Response);
    })
  },

  /**
   * 里面的方法只有被调用才会执行
   */
  methods: {
    toResult(i,item){
    // console.log(item.logid);
      var that = this;
      this.$store.commit('uplogid',item.logid);
      console.log(this.$store.state.logid);
      if(this.$store.state.utype=="idi"){
            that.$router.push({ path: '/result/Result' }); 
          }else if(this.$store.state.utype=="staff"){
            that.$router.push({ path: '/staff/result/Result' }); 
          }else{
            that.$router.push({ path: '/admin/result/Result' }); 
          }
    },
    // 分页插件事件
    callFather(parm) {
      this.formInline.page = parm.currentPage
      this.formInline.limit = parm.pageSize
      this.getdata(this.formInline)
    },
    // 搜索事件
    onSearch() { 
      var that=this;
    var uname = this.$store.state.uname;
    this.$axios.post('http://localhost:8081/log/getHistory',{
      uname: uname,
      logname: this.formInline.s_logname,
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      that.listData=Response.data;
       console.log(Response);
    })
    },
  }}
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
</style>

 
 

 