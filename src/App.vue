<template>
  <div class="container">
    <Header></Header>

    <hr />

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Servers></Servers>
      </div>
      <div class="col-xs-12 col-sm-6">
        <ServerDetails></ServerDetails>
      </div>
    </div>

    <hr />

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Servers from "./components/Servers.vue";
import ServerDetails from "./components/ServerDetails.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Servers,
    ServerDetails
  }
};
</script>

<style></style>
