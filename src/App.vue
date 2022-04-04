<template>
  <div id="inicio" v-if="true">
    <Ingreso @token="saveToken($event)"/>
  </div>

  <div>
    <NavBar :token="token"/>
    <router-view />
  </div>
</template>

<script>
import Ingreso from "../src/views/Ingreso.vue";
import NavBar from "./components/NavBar.vue"

export default {
  components: {
    Ingreso,
    NavBar,
  },
  data() {
    return {
      token: null,
    }
  },
  methods: {
    saveToken(data) {
      this.token = data
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div.b {
  position: absolute;
  right: 0;
}

#inicio {
  margin: auto;
}
</style>
