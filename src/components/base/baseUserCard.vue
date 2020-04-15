<template>
  <div class="UserCardContainer">
      <div class="userAvaBox">
          <div class="userBox">
            <div class="userAva"></div>
             <span>登录</span>
          </div>
          
      </div>
      <div class="userInfo">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.UserCardContainer{
    background-color: #ffffff;
    height: 192px;
    flex: 1;
    margin-left: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.userAvaBox{
    height: 112px;
    border-bottom: 1px solid rgb(223, 215, 215);
    box-sizing: border-box;
    padding: 10px;
}
.UserCardContainer .userBox{
    display: flex;
    align-items: center;
}
.UserCardContainer .userBox span {
    margin-left: 15px;
    color: #FF8C8C;
    font-weight: 600;
    font-size: 15px;
}
.userAva{
    width: 48px;
    height: 48px;
    background-color: #F4F4F4;
    border-radius: 50%;
}
</style>