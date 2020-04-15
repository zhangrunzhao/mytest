<template>
  <div class="baseContainer">
    <el-carousel class="el_carousel" :interval="7000" height="400px" arrow="always">
      <el-carousel-item v-for="item in imgData" :key="item">
        <img :src="item" style="width:100%" mode="widthFix" />
      </el-carousel-item>
    </el-carousel>
    <base-nav></base-nav>
    <div class="baseMainBox">
      <base-content></base-content>
      <div class="userAndModule">
        <base-user-card></base-user-card>
        <base-module topic="热门板块" :content=hotModuData></base-module>
        <base-module topic="其他板块" :content=otherModuData></base-module>
      </div>
    </div>
    
  </div>
</template>

<script>
import baseNav from '@/components/base/baseNav'
import baseContent from '@/components/base/baseContent'
import baseUserCard from '@/components/base/baseUserCard'
import baseModule from '@/components/base/baseModule'
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const imgData = ref([
      require("../../assets/1.jpg"),
      require("../../assets/2.jpg"),
      require("../../assets/3.jpg"),
      require("../../assets/4.jpg")
    ]);
    const hotModuData = ref(['COS','游戏','番剧'])
    const otherModuData = ref(['COS','游戏','番剧','宅舞','裸奔'])
    return {
      imgData,
      hotModuData,
      otherModuData
    };
  },
  components: {
    baseNav,
    baseContent,
    baseUserCard,
    baseModule
  }
};
</script>
    
<style>
.baseContainer {
  min-width: 800px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
  -webkit-user-select: none;
}
.el_carousel {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.baseMainBox{
  display: flex;
}
.userAndModule{
  flex: 1;
}
</style>