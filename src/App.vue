<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <p v-myon:click="{ stuff, otherStuff }">
          Click Me!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// Note: for some reason, custom directives will not take a function any more...
// therefore, we pass an object with a list of functions that all get exectuted
export default {
  directives: {
    myon: {
      bind: function(el, binding, vnode) {
        const fns = binding.value;
        const eventType = binding.arg;
        el.addEventListener(eventType, e => {
          Object.values(fns).forEach(fn => {
            if (typeof fn === "function") {
              fn(e);
            }
          });
          //   for (let prop in fns) {
          //     let fn = fns[prop];
          //     if (fns.hasOwnProperty(prop) && typeof fn === "function") {
          //       fn(e);
          //     }
          //   }
        });
      }
    }
  },
  methods: {
    stuff(e) {
      console.log("stuff");
    },
    otherStuff(e) {
      console.log("other stuff is running now");
    }
  }
};
</script>

<style></style>
