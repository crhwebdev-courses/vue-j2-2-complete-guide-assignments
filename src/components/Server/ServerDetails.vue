<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!details">Server Details are currently not updated</p>
    <p v-else>Server {{ details.id }}: {{ details.status }}</p>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  name: "ServerDetails",
  data: function() {
    return {
      details: null
    };
  },
  created() {
    eventBus.$on("serverDetailsUpdated", serverData => {
      this.details = serverData;
    });
  }
};
</script>

<style></style>
