<template>
  <div class="authorContainer">
    <div class="authorAva"></div>
    <div class="authorInfo">
      <div>
        <span class="authorName">守护阿尔托利亚</span>
        <span><img src="../../assets/更多.png" alt=""></span>
      </div>
      <div>
        <span>21小时前</span>
        <div>
          <span>评论:<span>2</span></span>
          <span>阅读:<span>1984</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.authorContainer {
  padding-top: 10px;
  padding-bottom: 16px;
  display: flex;
  font-size: 10px;
  color: #999;
}
.authorAva {
  width: 40px;
  height: 40px;
  background-color: #999;
  border-radius: 50%;
}
.authorInfo {
  flex: 1;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.authorInfo img{
    width: 20px;
}
.authorInfo div {
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.authorInfo div:nth-of-type(2) div{
    min-width: 100px;
    letter-spacing: 1px;
}
.authorInfo div:nth-of-type(2) div span{
    margin-left: 10px;
}
.authorInfo div:nth-of-type(2) div span span{
    margin-left: 5px;
}
.authorName{
    font-size: 14px;
    color: #101010;
    font-weight: bold;
}
</style>