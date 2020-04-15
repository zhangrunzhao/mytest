<template>
  <div class="contentContainer">
    <div>Fate简介</div>
    <author></author>
    <main-content></main-content>
    <div class="commentBox">
      <commentBox></commentBox>
    </div>
  </div>
</template>

<script>
import author from "@/components/invitation/author";
import mainContent from "@/components/invitation/content";
import commentBox from "@/components/invitation/commentBox";

export default {
  components: {
    author,
    mainContent,
    commentBox
  }
};
</script>

<style scoped>
.contentContainer {
  margin-top: 24px;
}
.commentBox {
  margin-top: 10px;
}
</style>