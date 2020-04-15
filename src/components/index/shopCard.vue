<template>
  <div class="shopCardContainer">
      <div class="imgBox">
        <img :src="imgSrc" alt="">
      </div>
      <div class="shopDescribe">
        <div class="goodName">{{goodName}}</div>
        <span class="goodPrice">
            {{goodPrice}}
        </span>
        <div class="goodStatus">
            <span v-for="(item,index) in goodStatus" :key="index">{{item}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import {ref} from '@vue/composition-api'
export default {
    props:{
        goodName:String,
        imgSrc:String,
        goodPrice: String,
        goodStatus: Array
    }
}
</script>

<style>
.shopCardContainer{
    -webkit-user-select: none;
    width: 232px;
    height: 310px;
    background-color: #ffffff;
    padding: 7px;
    box-sizing: border-box;
    margin-bottom: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition-property: all;
    transition-duration: 0.4s;
}
.shopCardContainer:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, .04);
}
.imgBox{
    overflow: hidden;
}
.shopCardContainer img {
    max-height: 220px;
}
.shopDescribe{
    height: 75px;
    padding: 5px 0;
    padding-left: 3px;
    box-sizing: border-box;
}
.goodName{
    font-size: 14px;
    margin-bottom: 7px;
}
.goodPrice{
    font-size: 11px;
    margin-left: 8px;
    background-color: #FF732A;
    color: #ffffff;
    padding: 2px 3px;
    border-radius: 3px;
}
.goodStatus{
    font-size: 10px;
    margin-left: 8px;
    margin-top: 8px;
    color: #AEAEAE;
}
.goodStatus span {
    margin-right: 15px;
}
</style>