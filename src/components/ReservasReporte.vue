<template>
  <h2 class="text-secondary">Reporte de Reservas</h2>
  <div id="fechas"></div>
  <table class="table table-dark table-striped">
    <tbody>
      <tr>
        <th scope="row">
          <div class="row justify-content-center">
            <label for="startDate">Fecha Inicio</label>
            <input
              id="startDate"
              class="form-control"
              type="date"
              v-model="fechaInicio"
            />
            <span id="startDateSelected"></span>
          </div>
        </th>
        <td>
          <div class="row justify-content-center">
            <label for="startDate">Fecha Fin</label>
            <input
              id="startDate"
              class="form-control"
              type="date"
              v-model="fechaFin"
            />
            <span id="startDateSelected"></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-dark" @click="buscarReservas">
    Generar Reporte
  </button>
  <button type="button" class="btn btn-dark" @click="limpiar">Limpiar</button>


  <table class="table table-dark table-striped" v-if="reservas">
    <thead>
      <tr>
        <th scope="col">Numero</th>
        <th scope="col">Fecha Inicio</th>
        <th scope="col">Fecha Fin</th>
        <th scope="col">Total Costo</th>
        <th scope="col">Estado</th>
        <th scope="col">Nombre Cliente</th>
        <th scope="col">Cedula Cliente</th>
        <th scope="col">Placa Vehiculo</th>
        <th scope="col">Marca Vehiculo</th>
        <th scope="col">Modelo Vehiculo</th>
      </tr>
    </thead>
    <tbody v-for="r in reservas" :key="r.id">
      <tr>
        <th scope="row">{{ r.numero }}</th>
        <td>{{ r.fechaInicio }}</td>
        <td>{{ r.fechaFin }}</td>
        <td>{{ r.valorTotalAPagar }}</td>
        <td>{{ r.estado }}</td>
        <td>{{ r.nombreCliente }}</td>
        <td>{{ r.cedulaCliente }}</td>
        <td>{{ r.placaVehiculo }}</td>
        <td>{{ r.marcaVehiculo }}</td>
        <td>{{ r.modeloVehiculo }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import buscarReservas from "../js/reporteReservas.js";

export default {
  name: "ReservasReporte",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fechaInicio: null,
      fechaFin: null,
      reservas: [],
    };
  },
  methods: {
    async buscarReservas() {
      const data = await buscarReservas(
        this.fechaInicio,
        this.fechaFin,
        this.auth
      );
      this.reservas = data;
      console.log(this.reservas);
    },
    limpiar() {
      this.reservas = [];
    },
  },
};
</script>

<style>
#fechas {
  margin: auto;
  width: 60%;
  display: flex;
}
input {
  margin: 20px;
}

table {
  margin-top: 20px;
}
button {
    margin: 5px;
}
</style>