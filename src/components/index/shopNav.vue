<template>
  <div class="shopNavContainer">
    <div class="itemBox">
      <div
        class="shopNavItem"
        @click="change(index)"
        :class="navIndex==index?'onSelect':''"
        v-for="(item,index) in navItem"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="content">
      <span class="sort">分类：</span>

      <span class="contentItem" v-for="(item,index) in contentItem[navIndex]" :key="index">
        {{item}}
      </span>

    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const navItem = ref([
      "手办",
      "扭蛋潮玩",
      "模型",
      "周边",
      "演出",
      "服饰背包"
    ]);
    const contentItem = ref([
      ["比例手办", "Q版手办", "可动手办", "手办配件", "玩偶"],
      ["比例手办", "高达扭蛋", "萌物扭蛋", "手办配件", "玩偶"],
      ["比例手办", "Q版手办"],
      ["比例手办", "Q版手办", "可动手办", "手办配件", "玩偶"],
      ["比例手办", "Q版手办", "可动手办", "手办配件", "玩偶"],
      ["高达背包", "书包", "可动手办", "手办配件", "玩偶"]
    ]);
    const navIndex = ref(0);
    const change = index => {
      navIndex.value = index;
      console.log(navIndex.value);
    };
    return {
      navItem,
      navIndex,
      change,
      contentItem
    };
  }
};
</script>

<style>
.shopNavContainer {
  height: 100px;
  width: 100%;
  margin-top: 8px;
  background-color: #ffffff;
}
.itemBox {
  display: flex;
}
.shopNavItem {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ffb432;
  font-size: 0.9em;
  font-weight: 550;
}
.content {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #999999;
}
.onSelect {
  background-color: #ffb432;
  color: #ffffff;
}
.sort {
  letter-spacing: 1px;
  padding-left: 22px;
  padding-right: 15px;
}
.contentItem {
  margin-right: 40px;
}
</style>