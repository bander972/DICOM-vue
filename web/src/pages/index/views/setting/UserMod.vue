/**
 * 修改信息-个人用户
 */
<template>

 <div>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="修改密码" prop="upassword"><el-col span="10"><el-input type="password" v-model="ruleForm.upassword" autocomplete="off" show-password></el-input></el-col>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkpass"><el-col span="10"><el-input type="password" v-model="ruleForm.checkpass" autocomplete="off" show-password></el-input></el-col>
  </el-form-item>
    <el-form-item label="输入邀请码绑定医院" prop="ccode"><el-col span="10"><el-input v-model="ruleForm.ccode" autocomplete="off"></el-input></el-col>
  </el-form-item>
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
        if (value !== this.ruleForm.upassword) {
          callback(new Error('两次输入密码不一致!'));
        }else {
          callback();
        }
      };
      return {
        ruleForm: {
            upassword:'',
            checkpass:'',
            ccode:'',
            uname:''
        },
        rules: {
        upassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
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
        that.$store.commit('logout', 'false')
        that.$router.push({ path: '/login' })
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