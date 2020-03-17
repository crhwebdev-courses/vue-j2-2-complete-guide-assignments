<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <p>Selected Component: {{ selectedComponent }}</p>
        <app-blue>
          <h1>This the Blue Component</h1>
        </app-blue>
        <app-green>
          <h1>This the Green Component</h1>
        </app-green>
        <app-red>
          <h1>This the Red Component</h1>
        </app-red>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data: function() {
    return {
      selectedComponent: "appBlue"
    };
  }
};
</script>

<style></style>
