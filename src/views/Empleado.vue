<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <button type="submit" class="btn btn-dark" @click="handleNav(1)">
          Registrar Cliente
        </button>
        <button type="submit" class="btn btn-dark" @click="handleNav(2)">
          Buscar Cliente
        </button>
        <button type="submit" class="btn btn-dark" @click="handleNav(3)">
          Ingresar vehiculo
        </button>
        <button type="submit" class="btn btn-dark" @click="handleNav(4)">
          Buscar vehiculo
        </button>
        <button type="submit" class="btn btn-dark" @click="handleNav(5)">
          Retirar vehiculo
        </button>
        <button type="submit" class="btn btn-dark" @click="handleNav(6)">
          Retirar sin reserva
        </button>
      </ul>
    </div>
  </nav>

  <br />
  <div v-if="registroFlag">
    <Registrarse :tipo="E" />
  </div>
  <div v-if="buscarClienteFlag">
    <BuscarCliente :auth="token" />
  </div>
  <div v-if="ingresarVehiculoFlag">
    <IngresarVehiculo :auth="token" />
  </div>
  <div v-if="buscarVehiculoFlag">
    <BuscarVehiculo :auth="token" />
  </div>
  <div v-if="retirarVehiculoFlag">
    <RetirarVehiculo :auth="token" />
  </div>
  <div v-if="retirarSinReservaFlag">
    <RetirarSinReserva :auth="token" />
  </div>
</template>

<script>
import Ingresar from "../views/Ingresar.vue";
import Registrarse from "../views/Registrarse.vue";
import BuscarCliente from "../components/BuscarCliente.vue";
import IngresarVehiculo from "../components/IngresarVehiculo.vue";
import BuscarVehiculo from "../components/BuscarVehiculo.vue";
import RetirarVehiculo from "../components/RetirarVehiculo.vue";
import RetirarSinReserva from "../components/RetirarSinReserva.vue";
export default {
  name: "Empleado",
  components: {
    Ingresar,
    Registrarse,
    BuscarCliente,
    IngresarVehiculo,
    BuscarVehiculo,
    RetirarVehiculo,
    RetirarSinReserva,
  },
  data() {
    return {
      token: null,
      registroFlag: false,
      buscarClienteFlag: false,
      ingresarVehiculoFlag: false,
      buscarVehiculoFlag: false,
      retirarVehiculoFlag: false,
      retirarSinReservaFlag: false,
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
          this.registroFlag = true;
          this.buscarClienteFlag = false;
          this.ingresarVehiculoFlag = false;
          this.buscarVehiculoFlag = false;
          this.retirarVehiculoFlag = false;
          this.retirarSinReservaFlag = false;
          break;
        case 2:
          this.registroFlag = false;
          this.buscarClienteFlag = true;
          this.ingresarVehiculoFlag = false;
          this.buscarVehiculoFlag = false;
          this.retirarVehiculoFlag = false;
          this.retirarSinReservaFlag = false;
          break;
        case 3:
          this.registroFlag = false;
          this.buscarClienteFlag = false;
          this.ingresarVehiculoFlag = true;
          this.buscarVehiculoFlag = false;
          this.retirarVehiculoFlag = false;
          this.retirarSinReservaFlag = false;
          break;
        case 4:
          this.registroFlag = false;
          this.buscarClienteFlag = false;
          this.ingresarVehiculoFlag = false;
          this.buscarVehiculoFlag = true;
          this.retirarVehiculoFlag = false;
          this.retirarSinReservaFlag = false;
          break;
        case 5:
          this.registroFlag = false;
          this.buscarClienteFlag = false;
          this.ingresarVehiculoFlag = false;
          this.buscarVehiculoFlag = false;
          this.retirarVehiculoFlag = true;
          this.retirarSinReservaFlag = false;
          break;
        case 6:
          this.registroFlag = false;
          this.buscarClienteFlag = false;
          this.ingresarVehiculoFlag = false;
          this.buscarVehiculoFlag = false;
          this.retirarVehiculoFlag = false;
          this.retirarSinReservaFlag = true;
          break;
      }
    },
  },
  mounted() {
    this.token = this.$route.query.token;
  },
};
</script>

<style>
#navbuttons {
  display: flex;
  height: 50px;
  width: 100%;
  margin: auto;
}
button {
  margin: 5px 5px;
}
</style>