<template>
  <div class="userIndexContainer">
    <div class="userAvaAndNameBox">
      <div class="userIndexAva">
        <img
          width="80px"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582461674633&di=c8f296a35c6f116e30831497bf8664dd&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu%2Ffiles%2F2012%2F0510%2Fd2e10cb3ac49dc63d013cb63ab6ca7cd.jpg"
          alt
        />
      </div>
      <div>
        <span>用户1</span>
        <span>(UID15302892768)</span>
      </div>
    </div>
    <div class="userIndexTopic">个人资料</div>
    <div class="userMainInfo">
      <div>
        <div>自我介绍:</div>
        <span>无</span>
      </div>
      <div>
        <div>个人签名:</div>
        <span>一个普通人</span>
      </div>
      <div>
        <div>邮箱:</div>
        <span>zhangrunzhao1@outlook.com</span>
      </div>
    </div>
    <div class="userIndexTopic">浏览历史</div>
    <div class="userIndexHistory">
      <span>
        商品<i class="el-icon-caret-bottom"></i>
      </span>
      <span>
        帖子<i class="el-icon-caret-bottom"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.userIndexContainer {
  flex: 1;
  background-color: #ffffff;
  border: 1px solid rgb(224, 213, 213);
  padding: 16px;
}
.userAvaAndNameBox {
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(224, 213, 213);
  display: flex;
}
.userIndexAva {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 24px;
}
.userIndexAva img {
  border-radius: 50%;
}
.userAvaAndNameBox div:nth-of-type(2) {
  padding-top: 10px;
}
.userAvaAndNameBox span:nth-of-type(1) {
  font-size: 14px;
  font-weight: bold;
  color: #a7abff;
}
.userAvaAndNameBox span:nth-of-type(2) {
  margin-left: 15px;
  font-size: 10px;
  color: #b8b8b8;
}
.userIndexTopic {
  height: 48px;
  border-bottom: 1px solid rgb(224, 213, 213);
  display: flex;
  padding-bottom: 8px;
  color: rgb(128, 126, 126);
  box-sizing: border-box;
  font-size: 13px;
  padding-left: 10px;
  align-items: flex-end;
  margin-bottom: 8px;
}
.userMainInfo {
  font-size: 11px;
}
.userMainInfo div {
  margin-bottom: 16px;
  display: flex;
}
.userMainInfo div div {
  color: #999;
  width: 55px;
  display: flex;
  justify-content: flex-end;
}
.userMainInfo div span {
  color: rgb(128, 126, 126);
  margin-left: 5px;
}
.userIndexHistory {
    user-select: none;
  font-size: 12px;
  color: rgb(128, 126, 126);
}
.userIndexHistory span {
   margin-left: 10px;
   color:  #ff4d4d;
}
</style>