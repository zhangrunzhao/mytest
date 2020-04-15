<template>
  <div class="userContainer">
    <div class="userBox">
      
        <router-link class="userIndexText" :to="{name: 'MyIndex'}"><div class="userIndex">
        我的主页</div></router-link>
      
      <div class="userListBox">
        <div class="userList">
          <div>我的发表</div>
          <span>我的帖子</span>
          <span>我的笔记</span>
          <span>我的回复</span>
        </div>
        <div class="userList">
          <div>收藏夹</div>
          <span>收藏的商品</span>
          <span>收藏的帖子</span>
        </div>
        <div class="userList">
          <div>个人设置</div>
          <router-link  class="userListItem" :to="{name: 'MyInfo'}">个人资料</router-link>
          <router-link  class="userListItem" :to="{name: 'MyPasswordSafe'}">密码安全</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.userContainer {
  margin: 0 auto;
  margin-top: 48px;
  max-width: 800px;
  display: flex;
}
.userContainer .userBox {
  user-select: none;
  width: 156px;
}
.userContainer .userIndexText {
  color: #fff;
}
.userContainer .userIndex {
  height: 39px;
  line-height: 39px;
  text-align: center;
  background-color: #a7abff;
  font-size: 15px;
}
.userContainer .userListBox {
  background-color: #ffffff;
  border: 1px solid rgb(224, 213, 213);
  box-sizing: border-box;
  font-size: 13px !important;
  padding: 0 16px;
}
.userContainer .userList {
  display: flex;
  flex-direction: column;
}
.userContainer .userList div {
  height: 32px;
  line-height: 32px;
  border-bottom: 1px solid rgb(224, 213, 213);
  box-sizing: border-box;
}
.userContainer .userList span {
  margin: 6px 0;
  color: #999;
}
.userContainer .userList span:hover{
  color:  #ff4d4d;
}
.userContainer .userListItem{
  margin: 6px 0;
  color: #999;
}
.userContainer .userListItem:hover{
  color:  #ff4d4d;
}
</style>