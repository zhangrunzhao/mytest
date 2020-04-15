<template>
  <div class="navContainer">
    <div class="navBox">
      <div class="logo">
        <img src="../../assets/logo.png" />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="navBar"
        mode="horizontal"
        @select="handleSelect"
        text-color="#101010"
        active-text-color="#9C92F9"
      >
        <el-menu-item class="muItem" :class="activeIndex=='1'?'item':''" index="1">首页</el-menu-item>
        <el-menu-item class="muItem" :class="activeIndex=='2'?'item':''" index="2">基地</el-menu-item>
        <el-menu-item class="muItem" index="3" :class="activeIndex=='3'?'item':''">追番</el-menu-item>
        <el-menu-item class="muItem" index="4" :class="activeIndex=='4'?'item':''">笔记</el-menu-item>
      </el-menu>
      <div class="searchAndLog" disabled>
        <input class="search" type="text" placeholder="搜索一下吧" />
        <div class="el-icon-shopping-cart-2 shoppingCart" @click="handleSelect('5')"></div>
        <div class="loginAndRegister" v-if="!isLogin">
          <span @click="handleSelect('6')">登录</span>/<span @click="handleSelect('7')">注册</span>
        </div>
        <div class="loginAndRegister" v-else>
          <span @click="handleSelect('8')">我的</span> | <span @click="handleSelect('9')">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
  data() {
    return {
      isLogin: true,
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
      this.$emit("getNavIndex",key)
    }
  }
};
</script>

<style>
.navContainer {
  user-select: none;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 2px 0px 16px #cccccc;
}
.navBox {
  max-width: 950px;
  margin: 0 auto;
  display: flex;
}
.logo {
  display: flex;
  width: 100px;
}
.logo img {
  width: 70px;
  padding-left: 15px;
}
.el-menu-item {
  width: 62px !important;
  line-height: 50px !important;
  font-size: 13px !important;
  text-align: center !important;
  height: 50px !important;
  letter-spacing: 2px;
  padding: 0 17px !important;
  font-weight: 600;
}
.navBar {
  min-width: 450px;

  height: 50px !important;
}
.item {
  color: #ffffff !important;
  background-color: #9c92f9 !important;
}
.searchAndLog {
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  font-size: 15px;
}
.search {
  width: 220px;
  height: 25px;
  background-color: #f2f2f2;
  border-radius: 20px;
  color: #999;
  padding-left: 20px;
  font-size: 12px;
}
.shoppingCart{
    padding-right: 20px;
    padding-left: 8px;
    font-size: 30px;
}
.loginAndRegister{
    min-width: 100px;
}
.loginAndRegister span:hover{
  color: #9c92f9;
}

</style>