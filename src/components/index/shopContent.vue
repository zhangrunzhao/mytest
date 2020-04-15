<template>
  <div class="shopContentContainer">
    <div v-for="(item,index) in shopCardData" :key="index">
      <shop-card
        :imgSrc="item.imgSrc"
        :goodName="item.goodName"
        :goodPrice="item.goodPrice"
        :goodStatus="item.goodStatus"
        @click.native="gotoDetail(item)"
      ></shop-card>
    </div>
    <pagination></pagination>
  </div>
</template>

<script>
import shopCard from "./shopCard";
import pagination from "./pagination";
import { ref, provide } from "@vue/composition-api";
export default {
  setup(props,ctx) {
    const listData = ref([2, 3, 4, 5, 6]);
    const shopCardData = ref([
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666141&di=4b9f53ab0fbabe3a4d3371cc81290a99&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-30%2F5a1fc36df11ac.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "1"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666140&di=a198f959318b22fa82195acc66d02358&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4ea69886845075580f9e8fa534b2275a9bef4980.jpg",
        goodName: "【现货】机甲少女-沉寂星空",
        goodPrice: "459元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "2"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=8d02b152d2f442329bc14ea64f728bac&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5993fc153d4c8.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "3"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=57130f83d26e554f7647859232b7cd97&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5877342ad842d.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "4"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666141&di=4b9f53ab0fbabe3a4d3371cc81290a99&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-30%2F5a1fc36df11ac.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "5"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666140&di=a198f959318b22fa82195acc66d02358&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4ea69886845075580f9e8fa534b2275a9bef4980.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "6"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=8d02b152d2f442329bc14ea64f728bac&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5993fc153d4c8.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "7"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=57130f83d26e554f7647859232b7cd97&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5877342ad842d.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "8"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666141&di=4b9f53ab0fbabe3a4d3371cc81290a99&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-30%2F5a1fc36df11ac.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "9"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098666140&di=a198f959318b22fa82195acc66d02358&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4ea69886845075580f9e8fa534b2275a9bef4980.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "10"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=8d02b152d2f442329bc14ea64f728bac&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5993fc153d4c8.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "11"
      },
      {
        imgSrc:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582098832191&di=57130f83d26e554f7647859232b7cd97&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5877342ad842d.jpg",
        goodName: "【现货】机甲少女-诺赛提亚",
        goodPrice: "239元",
        goodStatus: ["预售", "跨境购"],
        goodsId: "12"
      }
    ]);
    provide("listData", listData);
    return {
      listData,
      shopCardData
    };
  },
  methods: {
    gotoDetail(item) {
      this.$router.push("/index/detail")
    }
  },
  components: {
    shopCard,
    pagination
  }
};
</script>

<style>
.shopContentContainer {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>