<template>
  <div class="commentBoxContainer">
    <div class="commentTop">
      <span>评论</span>
      <div class="invitationStatus">
        <div>
          <img src="../../assets/点赞 (1).png" alt />
          <span>11</span>
        </div>
        <div>
          <img src="../../assets/点赞 (1).png" alt />
          <span>11</span>
        </div>
      </div>
    </div>
    <div class="commentArea">
        <textarea placeholder="我也来说几句...">
        </textarea>
        <img src="../../assets/发送-实色.png" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.commentBoxContainer{
    
    font-size: 12px;
    color: #999;
}
.commentTop{
    display: flex;
    user-select: none;
    justify-content: space-between;
}
.invitationStatus{
    
    display: flex;
}
.invitationStatus div{
    display: flex;
    align-items: center;
    font-size: 13px;
}
.invitationStatus img{
    width: 16px;
}
.invitationStatus span{
    padding: 0 6px;
}
.commentArea{
    position: relative;
}
.commentArea img {
    position: absolute;
    width: 24px;
    top: 60px;
    left: 95%;
}
.commentArea textarea{
    margin-top: 6px;
    width: 100%;
    resize: none;
    height: 80px;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: #F4F4F4;
    font-size: 12px;
    font-family: "微软雅黑";
    color: #999;
}
.commentArea textarea::placeholder{
    color: #999;
}
</style>