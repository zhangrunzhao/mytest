<template>
  <div class="baseModuleContainer">
      <div class="moduleTopic">
        {{topic}}
      </div>
      <div class="moduleContent">
          <span  v-for="(item,index) in contents" :key="index">{{item}}</span>
      </div>
  </div>
</template>

<script>
import {props, ref} from '@vue/composition-api'
export default {
    setup(props) {
        let contents = ref(props.content);
        if(props.content.length %3 == 2){
            let arr = props.content;
            arr.push("");
            contents = ref(arr)
        }
        return {
            contents
        }
    },
    props:{
        topic: String,
        content: Array
    }
}
</script>

<style>
.baseModuleContainer{
    margin-left: 16px;
    flex: 1;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    margin-top: 12px;
}
.moduleTopic{
    padding-left: 15px;
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: #333333;
    border-bottom: 1px solid rgb(223, 215, 215);
}
.moduleContent{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.moduleContent span {
    width: 30%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #999;
}
</style>