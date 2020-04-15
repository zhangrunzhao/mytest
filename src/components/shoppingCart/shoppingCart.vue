<template>
  <div class="shoppingCartContainer">
    <div class="shoppingCartTopic">购物车</div>
    <div class="shoppingCartContent">
      <div class="shopCartCtnTop">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <span class="ctnGoodsInfo">商品信息</span>
        <span class="ctnGoodsPrice">单价</span>
        <span class="ctnGoodsNum">数量</span>
        <span class="ctnGoodsAllPrice">总额</span>
        <span class="ctnGoodsSele">选项</span>
      </div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <div class="shopctnContainer" v-for="city in cities" :key="city">
          <el-checkbox :label="city"></el-checkbox>
          <div class="shopCartctnCard">
            <div class="shopCartctnCardImg">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666141&di=4b9f53ab0fbabe3a4d3371cc81290a99&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-30%2F5a1fc36df11ac.jpg"
                alt
              />
            </div>
            <div class="ctnGoodsInfoText">你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</div>
            <div class="ctnGoodsPriceText">339元</div>
            <div class="ctnGoodsNumText"></div>
            <div class="ctnGoodsAllPriceText">33333元</div>
            <div class="ctnGoodsSeleText">删除</div>
          </div>
        </div>
      </el-checkbox-group>
      <div class="shopCartCtnBottom">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >全选</el-checkbox>
        <div class="delGoods">删除所选商品</div>
        <div class="haveChoose">
          已选
          <span>0</span>件
          <div class="allPrice">
            总计(不含运费) :
            <span>233元</span>
          </div>
        </div>

        <div class="buyBtn">结算</div>
      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style>
.shoppingCartContainer {
  min-width: 800px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
  color: #606266;
}
.shoppingCartTopic {
  padding: 20px 15px;
  color: #4f4f4f;
}
.shoppingCartContainer .el-checkbox__label {
  font-size: 13px !important;
}
.shoppingCartContent {
  font-size: 13px;
}
.shopCartCtnTop {
  height: 48px;
  background-color: #e8e8e8;
  margin-bottom: 16px;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  color: #ffb432 !important;
  background-color: #ffb432 !important;
  border-color: #ffb432 !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266 !important;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #ffb432 !important;
}
.shoppingCartContainer .el-checkbox__inner {
  border-color: #ffb432 !important;
}
.shopCartCtnTop,
.shopCartCtnBottom {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
}
.ctnGoodsInfo {
  margin-left: 104px;
}
.ctnGoodsPrice {
  margin-left: 216px;
}
.ctnGoodsNum {
  margin-left: 92px;
}
.ctnGoodsAllPrice {
  margin-left: 67px;
}
.ctnGoodsSele {
  margin-left: 72px;
}
.shopctnContainer {
  display: flex;
  padding: 20px 24px;
  height: 120px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-bottom: none;
  align-items: center;
}
.shopctnContainer:last-of-type {
  border-bottom: 1px solid #e8e8e8;
}
.shopctnContainer label span:nth-of-type(2) {
  display: none;
}
.shopCartctnCard {
  font-size: 13px;
  display: flex;
}
.shopCartctnCardImg {
  margin-left: 7px;
  width: 96px;
  height: 88px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(154, 157, 161, 0.5);
}
.shopCartctnCard img {
  width: 96px;
}
.ctnGoodsInfoText,
.ctnGoodsPriceText,
.ctnGoodsNumText,
.ctnGoodsAllPriceText,
.ctnGoodsSeleText {
  display: flex;
  align-items: center;
}
.ctnGoodsInfoText {
  padding: 18px;
  padding-right: 0px;
  width: 270px;

  box-sizing: border-box;
}
.ctnGoodsPriceText {
  justify-content: center;
  width: 80px;
}
.ctnGoodsNumText {
  width: 120px;
}
.ctnGoodsAllPriceText {
  justify-content: center;
  width: 100px;
}
.ctnGoodsSeleText {
  justify-content: flex-end;
  width: 62px;
}
.shopCartCtnBottom {
  height: 64px;
  background-color: #e8e8e8;
  margin-top: 16px;
}
.delGoods {
  margin-left: 20px;
}
.haveChoose {
  width: 400px;
  display: flex;
  align-items: center;
  margin-left: 125px;
  justify-content: flex-end;
}
.haveChoose span {
  font-size: 15px;
  padding: 0 3px;
  color: #ff0f0f;
}
.allPrice {
  display: flex;
  align-items: center;
  margin-left: 10px;
  text-align: center;
}
.allPrice span {
  color: #ff0f0f;
  font-size: 15px;
  font-weight: 600;
}
.buyBtn {
  margin-left: 10px;
  width: 80px;
  height: 32px;
  background-color: #ff0f0f;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
}
</style>