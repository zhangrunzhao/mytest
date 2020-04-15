<template>
  <div class="registerContainer">
    <div class="registerTopic">个人账号注册</div>
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
        <el-form-item label="会员名:" prop="username">
          <el-input type="username" placeholder="请输入会员名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码:" prop="password">
          <el-input
            type="password"
            placeholder="设置您的登陆密码"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码确认:" prop="checkPass">
          <el-input
            type="password"
            placeholder="请确认登陆密码"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码:" prop="phoneNum">
          <el-input
            placeholder="设置您的登陆密码"
            v-model="ruleForm.phoneNum"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码:">
          <verify @isReady="isReady"></verify>
        </el-form-item>
      </el-form>
    </div>
    <div class="moreChoose">
      <el-checkbox @change="isChecked=!isChecked"></el-checkbox>
      <span class="moreChooseText">
        创建网站账号的同时，我同意遵守:<el-link type="danger" :underline="false">《xxx服务条款》</el-link>及<el-link type="danger" :underline="false">《隐私声明》</el-link>
      </span>
    </div>
    <div class="submitBtn registerBtn" @click="submitForm('ruleForm')">确认注册</div>
  </div>
</template>

<script>
import verify from "@/components/register/verify";
import {Userregister} from '@/api/userRegister'
export default {
  components: {
    verify
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if(value.length<6 || value.length>12) {
        callback(new Error("输入长度不能小于6位大于12位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value.length<6 || value.length>20) {
        callback(new Error("输入长度不能小于6位大于20位"));
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
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    var validatePhoneNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error("输入手机号码格式不对"));
      } else {
        callback();
      }
    };
    return {
      isChecked:false,
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        phoneNum: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phoneNum: [{ validator: validatePhoneNum, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid && this.isChecked && this.isOk) {
          Userregister(this.ruleForm,this)

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    isReady(isOk){
      this.isOk = isOk;
    }
  }
};
</script>

<style>
.registerContainer {
  max-width: 650px;
  min-height: 500px;
  margin: 0 auto;
}
.registerContainer .el-input__inner:focus {
  border: 1px solid #ffb432;
}
.registerTopic {
  text-align: center;
  margin-top: 50px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 3px solid #ff4d4d;
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
.registerBtn{
  background-color: #FF4D4D !important;
}

.registerBtn:hover {
  background-color: #ec6767 !important;
}
.registerBtn:active {
  background-color: rgb(172, 77, 54) !important;
}
.moreChoose {

  text-align: center;
  font-size: 13px;
  color: #999;
  width: 240px;
  margin-top: 25px;
  margin: 0 auto;
}
.moreChooseText{
  margin-left: 5px;
}
.registerContainer .el-link {
  font-size: 13px !important;
  line-height: 13px;
  padding-bottom: 3px;
}
</style>