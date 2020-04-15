<template>
  <div class="baseNavTopic">
    <template>
      <div v-for="(item,index) in items" :key="index">
        <span :class="(index+1==items.length)?'theLast':''">{{item}}</span>
        <i class="el-icon-arrow-right" v-if="!(index+1==items.length)"></i>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup(props) {
    const items = ref(props.topics);
    return {
      items
    };
  },
  props: {
    topics: {
      type: Array
    }
  }
};
</script>

<style>
.baseNavTopic {
  font-size: 12px;
  padding-left: 2px;
  display: flex;
  color: #7f7f7f;
}
.theLast {
  color: #9c92f9;
}
</style>