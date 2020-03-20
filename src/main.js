import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

/*Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
*/
Vue.filter("append-length", function(value) {
  let len = value.length;
  return `${value} (${len})`;
});

Vue.mixin({
  created() {
    console.log("Global Mixin - Created Hook");
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
