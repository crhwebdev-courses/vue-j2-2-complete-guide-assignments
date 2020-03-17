<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!details">Server Details are currently not updated</p>
    <p v-else>Server details are updated</p>
  </div>
</template>

<script>
export default {
  name: "ServerDetails",
  data: function() {
    return {
      details: null
    };
  }
};
</script>

<style></style>
