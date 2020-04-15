<template>
  <div class="showGoodsContainer">
    <div class="showImgBox">
      <img
      height="480px"
      :src="goodsInfo[imgIndex]"
      alt
    />
    </div>
    
    <div class="minImgs">
      <div :style="imgIndex==index?{opacity:1}:{opacity:0.6}" class="onshow" @mouseover="showImg(index)" v-for="(item,index) in goodsInfo" :key="index">
        <img
          :src="item"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    let imgIndex = ref(0);
    const goodsInfo = ref(
      [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666140&di=a198f959318b22fa82195acc66d02358&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4ea69886845075580f9e8fa534b2275a9bef4980.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=8d02b152d2f442329bc14ea64f728bac&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5993fc153d4c8.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=57130f83d26e554f7647859232b7cd97&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5877342ad842d.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=8d02b152d2f442329bc14ea64f728bac&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5993fc153d4c8.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666140&di=a198f959318b22fa82195acc66d02358&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4ea69886845075580f9e8fa534b2275a9bef4980.jpg"
      ]
    );
    const showImg = (index)=>{
        imgIndex.value = index
    }
    return {
      goodsInfo,
      showImg,
      imgIndex
    };
  }
};
</script>

<style>
.showGoodsContainer {
  display: flex;
  align-items: center;
  height: 460px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
}
.showImgBox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 480px;
}
.showGoodsContainer img {
  z-index: 10;
}
.minImgs {
  position: absolute;
  z-index: 20;
  top: 380px;
  left: 255px;
  width: 305px;
  height: 80px;
  display: flex;
  padding: 20px;
  padding-top: 23px;
}
.minImgs div {
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-left: 10px;
  display: flex;
  align-items: center;
  background-color: rgba(9, 9, 9, 0.5);

}
.minImgs img {
  max-width: 50px;
}

</style>