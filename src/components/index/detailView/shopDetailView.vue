<template>
  <div class="shopDetailViewContainer">
    <show-goods></show-goods>
    <div class="detailContent">
      <div class="goodsName">路人女主的养成方法File 集换式徽章</div>
      <div class="priceBox">
        <div>
          价格:
          <span>84元</span>
        </div>
        <div>
          定金:
          <span>50元</span>
        </div>
      </div>
      <div class="goodsDetailStatus">
        <div class="detailStatus">状态
            
        </div>
        <div class="detailClassify">
            <span>分类</span>
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
        </div>
        <div class="detailNum">数量</div>
      </div>

      <div class="buyBtnBox">
        <div class="buyNow">立即购买
        </div>
        <div class="addBuyCart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import showGoods from './showGoods'
export default {
    components:{
        showGoods
    }
};
</script>

<style>
.shopDetailViewContainer {
  height: 480px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
}
.detailContent {
  max-width: 331px;
  padding-left: 25px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}
.goodsName {
  padding: 30px 0;
  padding-left: 25px;
  font-size: 12px;
  font-weight: bolder;
}
.priceBox {
  height: 80px;
  width: 304px;
  background-color: #ffffed;
  display: flex;
  padding: 5px 24px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
}
.priceBox div {
  height: 50%;
  display: flex;
  font-size: 11px;
  color: #999;
  align-items: center;
}
.priceBox span {
  margin-left: 30px;
  font-size: 15px;
  color: #f75805;
  font-weight: bold;
}
.goodsDetailStatus{
    padding-left: 26px;
    font-size: 11px;
    color: #999;
    margin: 35px 0;
    width: 90%;
}
.detailStatus,.detailClassify,.detailNum{
    min-height: 25px;
    flex: 1;
}
 /* .detailStatus{

} */
.detailClassify{
    display: flex;

} 
.detailClassify span {
    min-width: 24px;
}
.detailClassify div {
display: flex;
flex-wrap: wrap;
margin-left: 30px;
}
.detailClassify div span {
    min-width: 48px;
    padding: 0 20px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    box-sizing: border-box;
    height: 16px;
    border: 1px solid black;
}
/* .detailNum{
    
} */
.buyBtnBox{
    margin-top: 20px;
    display: flex;
}
.buyNow,.addBuyCart{
    margin-left: 20px;
    font-size: 12px;
    letter-spacing: 1px;
}
.buyNow{
    border: 1px solid #FF5801;
    color: #FF5801;
    width: 80px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    border-radius: 8px;
    box-sizing: border-box;
}
.addBuyCart{

    background-color: #FF5801;
    width: 80px;
    height: 31px;
    color: #fff;
    line-height: 31px;
    text-align: center;
    border-radius: 8px;
}
</style>