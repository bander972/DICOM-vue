/**
 * 修改信息-个人用户
 */
<template>

 <div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="修改密码" prop="password"><el-col span="10"><el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password></el-input></el-col>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkpass"><el-col span="10"><el-input type="password" v-model="ruleForm.checkpass" autocomplete="off" show-password></el-input></el-col>
  </el-form-item>
    <!-- <el-form-item label="修改企业信息" type="textarea" prop="cinf"><el-col span="10">
      <el-input
          type="textarea"
          v-model="cinf"
          maxlength="30"
          placeholder="企业信息"
          show-word-limit></el-input></el-col>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确认修改</el-button>
    <el-button type="primary" @click="goBack">返回</el-button>
  </el-form-item>
</el-form>


  </div>
</template>
<script>
import { deptList, deptSave, deptDelete } from '../../api/userMG'
import Pagination from '../../components/Pagination'
  export default {
    data() {
    var validatePass = (rule, value, callback) => {
        if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        }else {
          callback();
        }
      };
      return {
        ruleForm: {
            password:'',
            checkpass:'',
            ccode:'',
            uname:''
        },
        rules: {
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        checkpass: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur'}
        ],
        }
      };
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      onSubmit(){
        var that = this;
        this.ruleForm.uname = this.$store.state.uname;
        this.$axios.post("http://localhost:8081/user/changeinf",this.ruleForm).then(function(response){
        that.$message.success(response.data);
        console.log(response);
    },)

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