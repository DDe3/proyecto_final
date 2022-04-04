<template>
  <div id="container">
    <h2 class="text-primary">Reserva de Vehículo</h2>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Placa de Vehículo</span>
      <input
        type="text"
        class="form-control"
        placeholder="Placa"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="placa"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Numero de Tarjeta</span>
      <input
        type="number"
        class="form-control"
        placeholder="Tarjeta"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="tarjeta"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Cedula</span>
      <input
        type="text"
        class="form-control"
        placeholder="C.I"
        aria-label="Cedula"
        aria-describedby="basic-addon1"
        v-model="cedula"
      />
    </div>

    <div class="row justify-content-center">
      <label for="startDate">Desde</label>
      <input
        id="startDate"
        class="form-control"
        type="date"
        v-model="fechaInicio"
      />
      <span id="startDateSelected"></span>
    </div>
    <div class="row justify-content-center">
      <label for="startDate">Hasta</label>
      <input
        id="startDate"
        class="form-control"
        type="date"
        v-model="fechaFin"
      />
      <span id="startDateSelected"></span>
    </div>
    <br />
    <button type="submit" class="btn btn-primary" @click="reservar">
      Reservar
    </button>

    <br />
  </div>
  <h3 class="text-alert" v-if="respuesta">Su numero de reserva es:</h3>
  <h2 class="text-alert" v-if="respuesta">{{ respuesta }}</h2>
</template>

<script>
import reservarVehiculo from "../js/reservarVehiculo.js";
import retirarSinReserva from "../js/retirarSinReserva.js";
export default {
  name: "ReservarVehiculo",
  data() {
    return {
      placa: null,
      tarjeta: null,
      cedula: null,
      fechaInicio: null,
      fechaFin: null,

      respuesta: null,
    };
  },
  props: {
    auth: {
      type: String,
      required: true,
    },
    sinReserva: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    async reservar() {
      this.respuesta = null;
      const body = {
        placa: this.placa,
        cedula: this.cedula,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        numeroTarjeta: this.tarjeta,
      };

      if (this.sinReserva) {
        const data = await retirarSinReserva(body, this.auth);
        let res = data.toString();
        this.respuesta = res;
      } else {
        const data = await reservarVehiculo(body, this.auth);
        let res = data.toString();
        this.respuesta = res;      
      }
    },
  },
};
</script>

<style>
#container {
  margin: auto;
  width: 40%;
}
</style>