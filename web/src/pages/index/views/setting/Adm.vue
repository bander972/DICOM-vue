/**
 * 个人中心-管理员
 */
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
    
    <el-form-item label="用户名">
      <el-col span="10">  
        <el-input disabled v-model="form.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="医院名称"><el-col span="10">  
        <el-input disabled v-model="form.companyname"></el-input></el-col>
    </el-form-item>
    <el-form-item label="医院信息"><el-col span="10">  
        <el-input disabled v-model="form.companyinf"></el-input></el-col>
    </el-form-item>
    <el-form-item label="邀请码"><el-col span="12">  
        <el-input disabled v-model="form.companycode"></el-input></el-col>
    </el-form-item>
  <!-- <el-form-item>
    <el-button type="primary" @click="onMod">修改密码</el-button>
  </el-form-item> -->
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
            name: this.$store.state.uname,
            companyname:'',
            companyinf:'',
            companycode:''
        },
        userinf:{
          uname: '',
          utype: '',
        }
    }
  },
  created(){
      this.userinf.uname = this.$store.state.uname;
      this.userinf.utype = this.$store.state.utype;
      var that = this;
      this.$axios.post("http://localhost:8081/user/adminf",this.userinf).then(function(response){
        console.log(response);
        that.form.companyname = response.data[0].cname;
        that.form.companyinf = response.data[0].cinf;
        that.form.companycode = response.data[0].ccode;
        that.$store.commit('upcname',response.data[0].cname);
        that.$store.commit('upauth',"3");
    },)
  },
  methods: {
    onMod(){
      this.$router.push({path:'/admin/setting/AdmMod'})
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