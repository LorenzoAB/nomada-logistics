<template>
  <main>
    <px-header></px-header>
    <router-view>
      
    </router-view>
    <px-footer></px-footer>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
