/**
 * 提交日志-输入地址
 */
<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
    
    <!-- <el-form-item>
        <el-radio v-model="form.radio" label="1">输入网址</el-radio>
        <el-radio v-model="form.radio" label="2">输入数据库地址</el-radio>
    </el-form-item> -->
    <el-form-item label="目标地址："><el-col span="10">  
        <el-input v-model="form.loglink" placeholder="请输入地址"></el-input></el-col>
    </el-form-item>
    <el-form-item label="DICOM文件名称："><el-col span="10">  
        <el-input v-model="form.logname" placeholder="请输入文件名称"></el-input></el-col>
    </el-form-item>
    <el-form-item label="文件描述：">
        <el-col span="10">  
        <el-input
          type="textarea"
          v-model="form.loginf"
          maxlength="30"
          placeholder="请输入描述"
          show-word-limit>
          </el-input></el-col>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { deptList, deptSave, deptDelete } from '../../api/userMG'
import Pagination from '../../components/Pagination'
export default {
  data() {
    return {
        form: {
          loginf:'',
          logname:'',
          uname:'',
          cname:'',
          logauth:'',
          uptime:'',
          loglink:'',
          radio: '1'
        },
    }
  },
  methods: {
    onSubmit(){
              if(this.form.logname==''||this.form.loginf==''||this.form.loglink==''){
          this.$message.error("请输入日志名称和描述！");
        }else{
      var that = this;
        this.form.uname = this.$store.state.uname;
        this.form.cname = this.$store.state.cname;
        this.form.logauth = this.$store.state.uauth;
        let year = new Date().getFullYear();
        let month = new Date().getMonth() +1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let second = new Date().getSeconds();
        let time = year + '-' + month + '-' + day + ' ' + hour +':'+ minute +':'+ second;
        this.form.uptime = time;
        console.log(this.form);
         this.$axios.post("http://localhost:8081/user/upload/address",this.form).then(function(response){
          console.log(response);
          that.form.loginf = '';
          that.form.logname = '';
          that.form.loglink = '';
          that.$message.success("上传成功！请在近期上传界面查看处理状态。");
        })}
    }
  }
}
</script>

<style scoped>
.user-search {
  margin-top: 30px;
}
.userRole {
  width: 100%;
}
</style>