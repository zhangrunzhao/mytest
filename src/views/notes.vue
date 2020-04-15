<template>
  <div class="notesContainer">
    <div class="notesBanner">
      <img
        width="800px"
        src="http://img.zcool.cn/community/0125815960cf70a8012193a3621427.jpg@1280w_1l_2o_100sh.jpg"
        alt
      />
    </div>
    <div class="hotNotes">热门笔记</div>
    <div class="notesContent">
      <div>
        <noteCard></noteCard>
        <invitation-card></invitation-card>
        <invitation-card></invitation-card>
        <invitation-card></invitation-card>
      </div>
      <div class="noteModule">
        <baseUserCard></baseUserCard>
        <base-module topic="热门板块" :content="hotModuData"></base-module>
        <base-module topic="其他板块" :content="otherModuData"></base-module>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import invitationCard from "@/components/base/invitationCard";
import baseUserCard from "@/components/base/baseUserCard";
import baseModule from "@/components/base/baseModule";
import noteCard from '@/components/notes/noteCard';
export default {
  setup() {
    const hotModuData = ref(["COS", "游戏", "番剧"]);
    const otherModuData = ref(["COS", "游戏", "番剧", "宅舞", "裸奔"]);
    return {
      hotModuData,
      otherModuData
    };
  },
  components: {
    invitationCard,
    baseUserCard,
    baseModule,
    noteCard
  }
};
</script>

<style>
.notesContainer {
  margin: 0 auto;
  width: 800px;
  margin-top: 15px;
}
.notesBanner {
  height: 121px;
  overflow: hidden;
}
.hotNotes {
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  font-size: 13px;
}
.notesContent {
  display: flex;
}
.noteModule {
  flex: 1;
}
</style>