<template>
  <div class="form-group box">
    <h3>Full Name</h3>
    <label for="">First Name</label>
    <input
      class="form-control"
      type="text"
      id="first-name"
      :value="firstName"
      @input="nameChanged(true, $event)"
    />
    <label for="">Last Name</label>
    <input
      class="form-control"
      type="text"
      id="last-name"
      :value="lastName"
      @input="nameChanged(false, $event)"
    />
  </div>
</template>

<script>
export default {
  name: "FullName",
  props: ["value"],
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  },
  methods: {
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = `${event.target.value} ${this.lastName}`;
      } else {
        name = `${this.firstName} ${event.target.value}`;
      }
      this.value = name;
      this.$emit("input", name);
    }
  }
};
</script>

<style scoped>
.box {
  border: 2px solid black;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}
</style>
