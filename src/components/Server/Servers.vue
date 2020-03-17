<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server v-for="server in servers" :serverData="server"></Server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
export default {
  name: "Servers",
  data: function() {
    return {
      servers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    };
  },
  components: {
    Server
  }
};
</script>

<style></style>
