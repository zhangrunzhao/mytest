<template>
  <div class="detailViewContainer">
      <flow-path></flow-path>
      <shop-detail></shop-detail>
      <div class="recommendBox">
          <shop-recommend></shop-recommend>
          <goods-content></goods-content>
      </div>
      
  </div>
</template>

<script>
import shopRecommend from '@/components/index/detailView/shopRecommend'
import flowPath from '@/components/index/detailView/flowPath'
import shopDetail from '@/components/index/detailView/shopDetailView'
import goodsContent from '@/components/index/detailView/goodsContent'
export default {
  components:{
    flowPath,
    shopDetail,
    shopRecommend,
    goodsContent
  }
}
</script>

<style>
.detailViewContainer{
    width: 100%;
    -webkit-user-select: none;
    min-width: 800px;
  max-width: 950px;
  margin: 0 auto;
  margin-top: 15px;
}
.recommendBox{
  margin-top: 29px;
  display: flex;
  
}
</style>