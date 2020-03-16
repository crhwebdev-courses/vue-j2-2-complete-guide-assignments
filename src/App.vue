<template>
  <div class="container">
    <Header></Header>

    <hr />

    <ServerStatus></ServerStatus>

    <hr />

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ServerStatus from "./components/ServerStatus.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    ServerStatus
  }
};
</script>

<style></style>
