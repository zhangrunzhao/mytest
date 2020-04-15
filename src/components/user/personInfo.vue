<template>
  <div class="personInfoContainer">
    <div class="userInfoTopic">个人资料设置</div>
    <form action="user/personInfo">
      <div>
        <label for="username">用户名</label>
        <input type="text" name="username" class="perInfoName" id="username" placeholder="请输入用户名"/>
      </div>
      <div>
        <label>自我介绍</label>
        <textarea type="text" name="introduce"  class="perInfoIntroduce" id="introduce" placeholder="请输入自我介绍" />
      </div>
      <div>
        <label for="signName">个人签名</label>
        <textarea type="text" name="signName"  class="perInfoSign" id="signName" placeholder="请输入个人签名"  />
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" name="email" class="perInfoEmail" id="email" placeholder="请输入邮箱"  />
      </div>
      <div class="submitBtn">
        <input type="submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.personInfoContainer {
  flex: 1;
  background-color: #ffffff;
  border: 1px solid rgb(224, 213, 213);
  padding: 0 18px;
  font-size: 11px;
  color: rgb(128, 126, 126);
  padding-bottom: 18px;
}
.personInfoContainer form div{
  margin-top: 12px;
}
.userInfoTopic {
  height: 40px;
  border-bottom: 1px solid rgb(224, 213, 213);
  display: flex;
  padding-bottom: 4px;
  box-sizing: border-box;
  margin: 0 14px;
  font-size: 12px;
  align-items: flex-end;
  margin-bottom: 8px;
}
.personInfoContainer input,.personInfoContainer textarea {
  margin-left: 24px;
  color: #999;
   border: 1px solid rgb(224, 213, 213);
   padding: 6px;
  font-size: 11px;
}
.personInfoContainer textarea{
    width: 288px;
    resize: none;
    height: 64px;
}
.personInfoContainer label {
  width: 48px;
  text-align: right;
  margin-top: 6px;
    vertical-align: top;
  display: inline-block;
}
.perInfoName{
    width: 160px;
}

.personInfoContainer .submitBtn{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
}
.personInfoContainer .submitBtn input{
  width: 64px;
  height: 28px;
  margin-left: 0;
  color: #ffffff;
  border-radius: 5px;
  background-color:  #ff4d4d;
  user-select: none;
}
</style>