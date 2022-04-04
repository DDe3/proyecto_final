<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <button type="submit" class="btn btn-dark" @click="handleNav(1)">
          Reservar Vehículo
        </button>
      </ul>
    </div>
  </nav>

  <ReservarVehiculo :auth="auth" :sinReserva="false" v-if="reservarFlag" />
</template>

<script>
import Ingresar from "../views/Ingresar.vue";
import ReservarVehiculo from "../components/ReservarVehiculo.vue";
export default {
  name: "Reservar",
  components: {
    Ingresar,
    ReservarVehiculo,
  },
  data() {
    return {
      auth: null,
      reservarFlag: false,
    };
  },
  methods: {
    logearse(data) {
      this.handleNav(1);
      this.token = data;
    },
    handleNav(num) {
      switch (num) {
        case 1:
          this.reservarFlag = true;
          break;
      }
    },
  },
  mounted() {
    this.auth = this.$route.query.token;
  },
};
</script>

<style>
#navbuttons {
  display: flex;
  height: 50px;
  align-items: center;
}
button {
  margin: 0px 5px;
}
</style>