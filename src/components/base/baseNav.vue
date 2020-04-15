<template>
  <div class="baseNavContainer">
    <nav-topic :topics="['基地','推荐']"></nav-topic>
    <div class="baseNavContent">
      <span
        :class="navItemIndex==index?'select':''"
        v-for="(item,index) in navItems"
        @click="change(index)"
        :key="index"
      >{{item}}</span>
      <span @mouseover="show = true" @mouseout="show = false" class="love">
        爱好
        <i class="el-icon-caret-bottom"></i>
        <transition name="fade">
          <div v-show="show" @mouseover="show = true" @mouseout="show = false">
            <span>宅舞</span>
            <span>唱歌</span>
            <span>插画</span>
            <span>原画</span>
            <span>素描</span>
            <span>乐器</span>
            <span>其他</span>
            <span></span>
          </div>
        </transition>
      </span>
    </div>
  </div>
</template>

<script>
import navTopic from '../topicNav'
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const show = ref(false);
    const navItemIndex = ref(0);
    const navItems = ref([
      "推荐",
      "圈子",
      "热门",
      "COS",
      "游戏",
      "番剧",
      "音乐",
      "漫展",
      "绘画"
    ]);
    const change = index => {
      navItemIndex.value = index;
    };
    return {
      navItemIndex,
      navItems,
      change,
      show
    };
  },
  components:{
    navTopic
  }
};
</script>

<style>
.baseNavContainer {
  height: 88px;
  padding: 16px 0;
  box-sizing: border-box;
}

.baseNavContent {
  position: relative;
  display: flex;
  margin-top: 13px;
  font-size: 13px;
  padding-left: 16px;
}

.baseNavContent span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 22px;
  color: #7f7f7f;
}

.baseNavContent span i {
  color: #333333;
}
.select {
  font-size: 15px;
  color: #333333 !important;
  font-weight: 550;
  box-sizing: border-box;
  border-bottom: 3px solid #ff4d4d;
}
.love {
  position: relative;
  height: 30px;
}
.love div {
  font-size: 10px;
  position: absolute;
  width: 144px;
  left: -21px;
  top: 30px;
  height: 56px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4px 0;
  box-sizing: border-box;
}
.love div span {
  width: 25%;
  margin: 0;
}
.love div::before {
  content: "";
  position: absolute;
  top: -13px;
  left: 30px;
  width: 0;
  height: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-bottom-width: 8px;
  border-bottom-color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>