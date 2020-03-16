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
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServerStatus from "./components/ServerStatus";
import ServerDetail from "./components/ServerDetail";
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
