<template>
  <div class="searchCardContainer">
      <input class="searchInput" type="text" placeholder="搜索一下吧">
      <div class="searchBtn">搜索</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.searchCardContainer{
    padding: 0 15px;
    margin-top: 16px;
    margin-bottom: 12px;
    background-color: #ffffff;
    height:48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 5px;
}
.searchInput{
    width: 280px;
    height: 28px;
    border: 1px solid #ffb432;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    text-align: center;
    font-size: 12px;
    position: relative;
    left: 16px;
    padding-right: 5px;
    z-index: 1;
}
.searchBtn{
    font-family: 雅黑;
    width: 64px;
    height: 30px;
    font-size: 12px;
    font-weight: 600;
    background-color: #ffb432;
    text-align: center;
    border-radius: 30px;
    line-height: 30px;
    color: #ffffff;
    z-index: 2;
}
</style>