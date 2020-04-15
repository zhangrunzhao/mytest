<template>
  <div id="app">
    <nav-bar @getNavIndex="getNavIndex"></nav-bar>
    <router-view></router-view>
    <!-- <bottom></bottom> -->
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import navBar from "./components/navBar/navBar";
// import bottom from "./components/bottom/bottom";
export default {
  setup(props, ctx) {
    const navIndex = ref(1);
    const getNavIndex = value => {
      navIndex.value = value;
    };
    return {
      navIndex,
      getNavIndex
    };
  },
  watch: {
    navIndex(newVal, oldVal) {
      this.pushPage(newVal);
    }
  },
  methods: {
    pushPage(index) {
      if (index == 1) {
        this.$router.push("/index");
        console.log("你好");
      } else if (index == 2) {
        this.$router.push("/base");
      } else if (index == 4) {
        this.$router.push("/notes");
      } else if (index == 5) {
        this.$router.push("/shoppingCart");
      } else if (index == 6) {
        this.$router.push("/userLogin");
      } else if (index == 7) {
        this.$router.push("/userRegister");
      } else if (index== 8) {
        this.$router.push("/user");
      }
    }
  },
  components: {
    navBar
    // bottom
  }
};
</script>

<style>
body,
div,
ol,
ul,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
fieldset,
legend,
input {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}
input {
  outline-color: invert;
  outline-style: none;
  outline-width: 0px;
  border: none;
  border-style: none;
  text-shadow: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
  box-shadow: none;
}
img {
  -webkit-user-drag: none;
}
body {
  background-color: #fafafa;
  color: #101010;
}
</style>

