<template>
  <h2 class="text-primary">Retirar Vehiculo</h2>
  <div class="input-group mb-3" id="container">
    <span class="input-group-text" id="basic-addon1">Código de reserva</span>
    <input
      type="text"
      class="form-control"
      placeholder="Código..."
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="codigo"
    />
  </div>

  <table class="table table-dark table-striped" v-if="reserva">
    <thead>
      <tr>
        <th scope="col">Placa</th>
        <th scope="col">Modelo</th>
        <th scope="col">Estado</th>
        <th scope="col">Fecha</th>
        <th scope="col">Cedula</th>
      </tr>
    </thead>
    <tbody v-if="reserva">
      <tr>
        <th scope="row">{{ reserva.placa }}</th>
        <td>{{ reserva.modelo }}</td>
        <td>{{ reserva.estado }}</td>
        <td>{{ reserva.fecha }}</td>
        <td>{{ reserva.cedula }}</td>
      </tr>
    </tbody>
  </table>

  <button type="submit" class="btn btn-primary" @click="buscar">Buscar</button>
  <button
    type="submit"
    class="btn btn-primary"
    @click="retirar"
    v-if="consulta"
  >
    Retirar
  </button>

  <h3 class="text-info bg-dark m-5" v-if="bienFlag">{{ respuesta }}</h3>
  <h2 class="text-danger bg-dark m-5" v-if="errorFlag">
    {{ respuesta }}
  </h2>
</template>

<script>
import retirarVehiculo from "../js/retirarVehiculo.js";
import buscarReserva from "../js/buscarReserva.js";
export default {
  name: "RetirarVehiculo",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      codigo: null,
      reserva: null,

      consulta: false,
      bienFlag: false,
      errorFlag: false,

      respuesta: null,
    };
  },
  methods: {
    async buscar() {
      this.bienFlag = false;
      this.errorFlag = false;
      const data = await buscarReserva(this.codigo, this.auth);
      this.reserva = data;
      this.consulta = true;
    },
    async retirar() {
      this.reserva = null;
      const data = await retirarVehiculo(this.codigo, this.auth);
      console.log(data)
      let res = data.toString();
      if (res.includes("403")) {
        this.respuesta = "Sesión expirada, ingrese de nuevo";
      } else {
        if (res.includes("500")) {
          this.respuesta = "No se encontró ninguna reservación con ese número";
        }
        if (res.includes("retirado")) {
          this.bienFlag = true;
          this.respuesta = res;
        } else {
          this.errorFlag = true;
          this.respuesta = res;
        }
        this.consulta = false;
      }
    },
  },
};
</script>

<style>
#container {
  width: 40%;
  margin: auto;
  justify-content: center;
  padding-top: 50px;
}
</style>