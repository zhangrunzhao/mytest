<template>
  <div class="loginContainer">
    <div class="loginTopic">个人账号登陆</div>
    <div class="formBox">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        size="small"
        class="demo-ruleForm"
      >
        <el-form-item label="会员名:" prop="pass">
          <el-input type="username" placeholder="请输入会员名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码:" prop="checkPass">
          <el-input
            type="password"
            placeholder="请输入登陆密码"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="submitBtn" @click="submitForm('ruleForm')">提交</div>
    <div class="moreChoose">
      <span>账号登录</span> |
      <span>密码找回</span> |
      <span>账号登录</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {UserLogin} from '@/api/userLogin'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {

      UserLogin(this.ruleForm);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.loginContainer {
  max-width: 650px;
  min-height: 500px;
  margin: 0 auto;
}
.loginContainer .el-input__inner:focus {
  border: 1px solid #ffb432;
}
.loginTopic {
  text-align: center;
  margin-top: 50px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 3px solid #a6d651;
}
.formBox {
  width: 360px;
  margin: 0 auto;
  padding-right: 50px;
  padding-top: 55px;
}
.submitBtn {
  height: 32px;
  max-width: 100px;
  background-color: #96cf32;
  text-align: center;
  line-height: 32px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 13px;
  margin: 0 auto;
  margin-top: 35px;
  user-select: none;
}
.submitBtn:hover {
  background-color: rgb(168, 230, 63);
}
.submitBtn:active {
  background-color: rgb(143, 175, 87);
}
.moreChoose {
  text-align: center;
  font-size: 13px;
  color: #999;
  margin-top: 25px;
}
</style>