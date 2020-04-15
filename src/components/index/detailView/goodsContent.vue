<template>
  <div class="goodsContentContainer">
      <div class="goodsContentNav">
          <span :class="navIndex==0?'goodsNavOnchoose':''" @click="navIndex=0">商品详情</span>
          <span :class="navIndex==1?'goodsNavOnchoose':''" @click="navIndex=1">评论</span>
          <span></span>
      </div>
      <div class="goodsNavItemContent">
          内容区
      </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
    setup() {
        let navIndex = ref(0);
        return {
            navIndex
        }
    }
}
</script>

<style>
.goodsContentContainer{
    margin-left: 8px;
    width: 752px;
    background-color: #FFF;
}
.goodsContentNav{
    display: flex;
    height: 48px;
    font-size: 14px;
    box-sizing: border-box;
}
.goodsContentNav span {
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top:  1px solid rgb(218, 206, 206);
    border-bottom:  1px solid rgb(218, 206, 206);
    
}
.goodsContentNav span:nth-of-type(1){
    border-left: 1px solid rgb(218, 206, 206);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.goodsContentNav span:nth-of-type(2){
    border-left: 1px solid rgb(218, 206, 206);
    border-right: 1px solid rgb(218, 206, 206);
    box-sizing: border-box;
}
.goodsContentNav span:nth-of-type(3){
    flex: 1;
    border-right: 1px solid rgb(218, 206, 206);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.goodsNavOnchoose{
    font-weight: bold;
    background-color: #FFB432;
    color: #FFF;
    border-color: #FFB432;
}
</style>