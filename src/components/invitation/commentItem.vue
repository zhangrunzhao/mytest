<template>
  <div class="commentItemContainer">
    <div class="commentAuthorAva"></div>
    <div class="commentItemContent">
      <div class="authorInfo">
        <span class="authorName">守护阿尔托利亚</span>
        <span>
          <img src="../../assets/更多.png" alt />
        </span>
      </div>
      <div>
        <span>21小时前</span>
        <div>举报</div>
      </div>
      <div class="commentContent">强烈安利啊啊啊啊啊!!!强烈安利啊啊啊啊啊!!!强烈安利啊啊啊啊啊!!!强烈安利啊啊啊啊啊!!!强烈安利啊啊啊啊啊!!!</div>
      <div v-for="(item,index) in test" :key="index">
            <feedbackItem :data="item"></feedbackItem>
            <!-- {{item}} -->
      </div>
    </div>
  </div>
</template>

<script>
import feedbackItem from '@/components/invitation/feedbackItem'
import {ref} from '@vue/composition-api'
export default {
  setup(props){
      const test = ref(props.data.feedback)
      const up = ()=>{
        console.log(test.value.length)
        test.value.push("你好骚啊")
        test.value.splice(0,1);
      }
      return {
        test,
        up
      }
  },
  components:{
    feedbackItem
  },
  props:{
    data:{
      type:Object
    }
  }
};
</script>

<style scoped>
.commentItemContainer {
  width: 100%;
  padding-top: 5px;
  display: flex;
}
.commentAuthorAva {
  width: 40px;
  height: 40px;
  background-color: #999;
  border-radius: 50%;
}
.commentItemContent {
  display: flex;
  flex: 1;
  padding-left: 5px;
  flex-direction: column;
  border-bottom: 1px solid rgb(221, 215, 215);
}
.authorInfo {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.authorInfo img {
  width: 20px;
}
.authorInfo div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.authorName {
  font-family: 微软雅黑;
  font-size: 14px;
  font-weight: bold;
  color: #101010;
}
.commentItemContent div:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: 10px;
  color: #999;
  padding-top: 5px;
}
.commentItemContent div:nth-of-type(2) div {
  /* height: 27px;
  width: 67px; */
  height: 24px;
  width: 60px;
  border: 1px solid rgba(78, 190, 235, 0.2);
  position: absolute;
  font-size: 12px;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  right: 0;
  top: -5px;
  border-radius: 3px;
}
.commentContent {
  padding-top: 10px;
  font-size: 14px;
  max-width: 480px;
}
</style>