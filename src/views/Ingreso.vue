<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <button type="button" class="btn btn-dark" @click="handleNav(4)">
          Cerrar Panel
        </button>
        <button type="button" class="btn btn-dark" @click="handleNav(2)">
          Registrarse
        </button>
        <button type="button" class="btn btn-dark" @click="handleNav(1)">
          Ingresar
        </button>
      </ul>
    </div>
  </nav>

  <Registrarse v-if="registroFlag" />
  <Ingresar v-if="ingresoFlag" @token="emitir($event)" />
</template>

<script>
import Registrarse from "../views/Registrarse.vue";
import Ingresar from "../views/Ingresar.vue";
export default {
  name: "Ingreso",
  emits: ['token'],
  components: {
    Registrarse,
    Ingresar,
  },
  data() {
    return {
      ingresoFlag: false,
      registroFlag: false,
    };
  },
  methods: {
    handleNav(num) {
      switch (num) {
        case 1:
          this.ingresoFlag = true;
          this.registroFlag = false;
          break;
        case 2:
          this.ingresoFlag = false;
          this.registroFlag = true;
          break;
        case 3:
          // Cerrar sesión
          break;
        case 4:
          this.ingresoFlag = false;
          this.registroFlag = false;
          break;
      }
    },
    emitir(data) {
        this.$emit('token',data)
    }
  },
};
</script>

<style>
</style>