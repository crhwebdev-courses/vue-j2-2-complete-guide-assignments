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
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="headline">This is the {{ color }} Component</h1>
            <p slot="content">This is where the content text would go.</p>
          </component>
        </keep-alive>
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
  },
  computed: {
    color: function() {
      switch (this.selectedComponent) {
        case "appBlue":
          return "Blue";
        case "appGreen":
          return "Green";
        case "appRed":
          return "Red";
        default:
          return "Error";
      }
    }
  }
};
</script>

<style></style>
