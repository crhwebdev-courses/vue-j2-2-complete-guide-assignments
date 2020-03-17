<template>
  <li class="list-group-item">Server #{{ serverData.id }}</li>
</template>

<script>
export default {
  name: "Server",
  props: ["serverData"],
  methods: {
    updateServerDetails() {}
  }
};
</script>
