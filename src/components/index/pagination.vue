<template>
  <div class="paginationContainer">
    <div><i class="el-icon-arrow-left el-icon--left"></i>上页</div>
 
    <ul class="paginationItem">
        <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
     <div>下页<i class="el-icon-arrow-right el-icon--right"></i></div>
  </div>
</template>

<script>
import {inject} from "@vue/composition-api"
export default {
   setup(){
        const listData = inject("listData")
        return {
            listData
        }
    }
    
};
</script>

<style>
.paginationContainer{
    font-weight: 600;
    -webkit-user-select: none;
    align-items: center;
    margin:  0 auto;
    display: flex;
}
.paginationContainer div {
    margin: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    padding: 0;
    background-color: #ffffff;
box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 64px;
    border-radius: 20px;
    height: 32px;
}
.paginationContainer div:hover{
    background-color: #FFC375;
    opacity: 0.5;
}
.paginationContainer div:active{
    background-color: #FFC375;
    opacity: 1;
}


.paginationItem{
    display: flex;
}
.paginationItem li {
    margin: 8px;
    font-size: 12px;
    background-color: #ffffff;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 50%;
}
.paginationContainer li:hover{
    background-color: #FFC375;
}
</style>
