/**
 * 历史数据-分析历史
 */
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" clearable v-model="formInline.s_uname" label="用户名称" placeholder="输入用户名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--列表-->
    <el-table size="small" :data="listData" highlight-current-row style="width: 100%;">
      <el-table-column align="center" type="index" width="60">
      </el-table-column>
      <el-table-column sortable prop="uname" label="用户名" width="170" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="uemail" label="绑定邮箱" width="140" show-overflow-tooltip>
      </el-table-column>
      <el-table-column sortable prop="uauth" label="用户权限" width="160" show-overflow-tooltip>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">调整权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="editFormVisible" width="50%" @click="closeDialog('editForm')">
      <el-form label-width="120px" :model="editForm" ref="editForm">
        <el-row>
          <el-col :span="15">
            <el-form-item label="用户名">
              <el-input size="small" v-model="editForm.uname" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="绑定邮箱">
              <el-input size="small" v-model="editForm.uemail" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="创建日期">
              <el-input size="small" v-model="editForm.utime" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户类型">
              <el-input size="small" v-model="editForm.utype" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户权限">
              <el-select v-model="editForm.value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
              </el-select>
            </el-form-item>
            <el-form-item><el-button @click="onChange('editForm')">确定</el-button>
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
      editFormVisible: false,
        options:[{
          value: '1',
          label: '低'
        },{
          value: '2',
          label: '中'
        },{
          value: '3',
          label: '高'
        }],
        uptime:'',
      title: '修改权限',
      editForm: {
        id: '',
        name: '',
        uname: '',
        utime: '',
        uemail: '',
        utype: '',
        value:'',
        uauth:''
      },
      formInline: {
        s_uname:'',
        page: 1,
        limit: 10,
        logname: '',
        uname: '',
        utime: '',
        uemail: '',
      },
      userparm: [], //搜索权限
      listData: [], //用户数据
    }
  },
  // 注册组件
  components: {
    Pagination
  },

  created() {
    // this.getdata(this.formInline)
    var that=this;
    this.$axios.post('http://localhost:8081/user/getStaff',{
      cname : this.$store.state.cname,
      utype: "staff",
      uname: this.formInline.s_uname,
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
    onChange(formName){
      console.log(this.editForm.value);
      if(this.editForm.value==null){
        this.$message.error("请选择用户权限!");
      }else{
        this.$axios.post('http://localhost:8081/user/changeAuth',{
        uname : this.editForm.uname,
        uauth: this.editForm.value,
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      console.log(Response);
    })
        this.$message.success("修改成功！");
        this.editFormVisible = false;
        this.$refs[formName].resetFields();
            location.reload();
      }
    },
    search(){
          var that=this;
    this.$axios.post('http://localhost:8081/user/getStaff',{
      cname : this.$store.state.cname,
      utype: "staff",
      uname: this.formInline.s_uname,
    },{
          headers: {
            'Content-Type':'application/json'
          }
    }).then(Response=>{
      this.listData=Response.data;
      //console.log(Response);
    })
    },
    //显示编辑界面
    handleEdit: function(index, row) {
      // console.log(row.uauth)
      // this.editForm. = row.uauth
      this.editFormVisible = true
      this.editForm = row
    },
    // 关闭编辑、增加弹出框
    closeDialog(formName) {
      console.log(45);
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

 
 

 