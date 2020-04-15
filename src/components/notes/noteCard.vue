<template>
  <div class="invitationContainer">
    <div class="cardInfo">
      <span class="topic">社畜的一天</span>
      <span class="author">
        作者|孤独自学
        <span class="date">2019/12/22</span>
      </span>
    </div>
    <div class="imgBox">
      <img src="../../assets/1.jpg" height="234px" alt />
      <div class="minImg">
        <div>
          <img src="../../assets/1.jpg" width="192px" alt />
        </div>
        <div>
          <img src="../../assets/1.jpg" width="192px" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.invitationContainer {
  display: flex;
  flex-direction: column;
  width: 560px;
  height: 304px;
  background-color: #ffffff;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 10px;
  border-radius: 5px;
}
.imgBox {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  display: flex;
}
.minImg {
  margin-left: 12px;
}
.minImg div {
  height: 112px;
  overflow: hidden;
}
.minImg div:nth-of-type(1){
    margin-bottom: 12px;
}
.cardInfo {
  display: flex;
  height: 48px;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-bottom: 5px;
}
.topic {
  font-size: 15px;
  font-weight: 550;
}
.author {
  margin-top: 6px;
  color: #999;
  font-size: 12px;
}
.date {
  margin-left: 5px;
}
</style>