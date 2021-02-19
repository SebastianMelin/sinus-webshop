<template>
  <div id="app">
    <Navbar />

    <div class="viewwindow">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
};
</script>

<style lang="scss">
body {
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.viewwindow {
  width: 80vw;
}
</style>
