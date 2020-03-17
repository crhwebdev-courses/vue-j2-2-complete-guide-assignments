<template>
  <li class="list-group-item" @click="updateServerDetails">
    Server #{{ serverData.id }}
  </li>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  name: "Server",
  props: ["serverData"],
  methods: {
    updateServerDetails() {
      eventBus.$emit("serverDetailsUpdated", this.serverData);
    }
  }
};
</script>
