<template>
  <div class="commentHistoryContainer">
    <div class="commentHistoryAllNum">2评论</div>
    <div class="commentItems">
      <div v-for="(item,index) in commentItems" :key="index">
        <commentItem :data="item"></commentItem>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import commentItem from "@/components/invitation/commentItem";
export default {
  setup() {
    const commentItems = ref([
      {
        id: 0,
        feedback: [
          {
            author: "金闪闪",
            content: "确实好看",
            date: "21小时前"
          },
          {
            author: "金闪闪",
            content: "你好骚啊",
            date: "21小时前"
          },
          {
            author: "金闪闪",
            content: "润钊真帅",
            date: "21小时前"
          }
        ]
      },
      {
        id: 1
      },
      {
        id: 2,
        feedback: [
          {
            author: "金闪闪",
            content: "我不干了",
            date: "21小时前"
          },
          {
            author: "金闪闪",
            content: "辣眼睛",
            date: "21小时前"
          },
          {
            author: "金闪闪",
            content: "润钊真帅",
            date: "21小时前"
          }
        ]
      }
    ]);
    // const myfun = (item) =>{
    //     item.feedback.splice(0,1)
    // }
    // const myfun2 = (item) =>{
    //     item.feedback.push("你好骚啊")
    // }
    return {
      commentItems
      // myfun
      // myfun2
    };
  },
  components: {
    commentItem
  }
};
</script>

<style scoped>
.commentHistoryContainer {
  max-width: 560px;
  padding: 24px 16px;
  background-color: #ffffff;
}
.commentHistoryAllNum {
  font-size: 12px;
  color: #999;
}
.commentItems {
  padding-top: 19px;
  padding-bottom: 5px;
}
</style>