import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

/*Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
*/
Vue.filter("appendLength", function(value) {
  let len = value.length;
  return `${value} (${len})`;
});

Vue.mixin({
  data() {
    return {
      text1: "Some Text",
      text2: "Verylongstringofcharacters"
    };
  },
  computed: {
    reverseText1() {
      return this.text1
        .split("")
        .reverse()
        .join("");
    },
    countText2() {
      let len = this.text2.length;
      return `${this.text2} (${len})`;
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
