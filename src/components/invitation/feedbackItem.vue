<template>
  <div class="feedbackItemContainer">
      <div class="feedbackItemAuthor">{{data.author}}：{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}{{data.content}}</div>
      <div>{{data.date}}<span>回复</span></div>
  </div>
</template>

<script>
export default {
props:{
    data:{
        type:Object
    }
}
}
</script>

<style>
.feedbackItemContainer{
    padding: 8px;
    background-color: #f1f1f1;
}
.feedbackItemAuthor{
    font-size: 13px;
    color: rgb(73, 67, 67);
}
.feedbackItemContainer div:nth-of-type(2){
    font-size: 9px;
    color:#999;
}
.feedbackItemContainer div:nth-of-type(2) span{
    margin-left: 8px;
}
</style>