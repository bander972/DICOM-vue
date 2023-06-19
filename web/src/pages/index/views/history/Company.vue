/**
 * 历史数据-分析历史
 */
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" clearable v-model="formInline.logname" label="DICOM文件名称" placeholder="输入文件名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" clearable v-model="formInline.uname" label="上传用户" placeholder="输入上传用户名"></el-input>
      </el-form-item>
      <el-form-item label="选择日期:">
        <div class="block">
        <el-date-picker
        clearable="false"
        v-model="formInline.s_time"
        type="datetimerange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
        </el-date-picker>
  </div></el-form-item>

      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table size="small" :data="listData" highlight-current-row v-loading="loading" border element-loading-text="拼命加载中" style="width: 100%;">
      <el-table-column align="center" type="index" width="60">
      </el-table-column>
      <el-table-column sortable prop="logid" label="文件编号" width="170" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="logname" label="文件名称" width="140" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="uptime" label="上传日期" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="logstate" label="处理状态" width="140" show-overflow-tooltip>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详细信息</el-button>
          <el-button size="mini" @click="toResult(scope.$index, scope.row)">查看结果</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <!-- <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination> -->
    <!-- 编辑界面 -->
    <el-dialog :title="title" :visible.sync="editFormVisible" width="50%" @click="closeDialog('editForm')">
      <el-form label-width="80px" :model="editForm" ref="editForm">
        <el-row>
          <el-col :span="10">
            <el-form-item label="文件编号">
              <el-input size="small" v-model="editForm.logid" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="文件名称">
              <el-input size="small" v-model="editForm.logname" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="上传用户">
              <el-input size="small" v-model="editForm.uname" auto-complete="off" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="医院名称">
              <el-input size="small" v-model="editForm.cname" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="目标地址">
              <el-input size="small" v-model="editForm.loglink" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="上传时间">
              <el-input size="small" v-model="editForm.uptime" auto-complete="off" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
        <el-form-item label="文件信息">
          <el-input size="small" type="textarea" v-model="editForm.loginf" auto-complete="off" disabled></el-input>
        </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
export default {
  data() {
    return {
        uptime:'',
        pickerOptions: {
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
      title: '详细信息',
      editForm: {
        id: '',
        name: '',
        uname: 1,
        partner: '',
        subMchId: '',
        appid: '',
        notifyUrl: '',
        signType: '',
        partnerKey: '',
        sellerUserId: '',
        certPath: '',
        certPassword: '',
        rsaKey: '',
        token: localStorage.getItem('logintoken')
      },
      formInline: {
        s_time:'',
        page: 1,
        limit: 10,
        logname: '',
        uname: '',
        uptime: '',
        uname: '',
        orderStatus: 0,
        token: localStorage.getItem('logintoken')
      },
      userparm: [], //搜索权限
      listData: [{
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
        }], //用户数据
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
    Pagination
  },
  /**
   * 数据发生改变
   */

  /**
   * 创建完毕
   */
  created() {
    // this.getdata(this.formInline)
    var that=this;
    this.$axios.post('http://localhost:8081/log/getCompany',{
      cname : this.$store.state.cname,
      logauth: this.$store.state.uauth,
      logname: this.formInline.logname,
      uname: this.formInline.uname,
      uptime: this.formInline.s_time[0],
       loginf:this.formInline.s_time[1]
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      this.listData=Response.data;
      //console.log(Response);
    })
  },

  /**
   * 里面的方法只有被调用才会执行
   */
  methods: {
    search(){
         let year = new Date().getFullYear();
        let month = new Date().getMonth() +1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        let end = year + '-' + month + '-' + day + ' ' + hour +':'+ minute +':'+ second;
      console.log(this.formInline.s_time);
       var that=this;
       var start;
       if(this.formInline.s_time==null){
        start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30000);
       }else{
        start = this.formInline.s_time[0];
       }
    this.$axios.post('http://localhost:8081/log/getCompany',{
      cname : this.$store.state.cname,
      logauth: this.$store.state.uauth,
      logname: this.formInline.logname,
      uname: this.formInline.uname,
      uptime: start,
      loginf: end
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      this.listData=Response.data;
      console.log(Response.data);
    })
    },
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
    //显示编辑界面
    handleEdit: function(index, row) {
      this.editFormVisible = true
      this.editForm = row
    },
    // 关闭编辑、增加弹出框
    closeDialog(formName) {
      this.editFormVisible = false
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
</style>

 
 

 