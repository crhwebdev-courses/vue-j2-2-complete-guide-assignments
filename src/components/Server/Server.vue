<template>
  <li class="list-group-item" @click="updateServerDetails">
    Server #{{ serverData.id }}
  </li>
</template>

<script>
export default {
  name: "Server",
  props: ["serverData"],
  methods: {
    updateServerDetails() {
      this.$emit("serverDetailsUpdated", this.serverData);
      console.log("clicked server", this.serverData.id);
    }
  }
};
</script>
