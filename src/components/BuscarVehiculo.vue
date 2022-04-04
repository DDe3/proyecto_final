<template>
  <h2 class="text-primary">Buscar Vehiculo</h2>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Placa</span>
    <input
      type="text"
      class="form-control"
      placeholder="Placa"
      aria-label="Username"
      aria-describedby="basic-addon1"
      v-model="placa"
    />
  </div>
  <button type="submit" class="btn btn-primary" @click="buscarVehiculo">
    Buscar
  </button>
  <button type="submit" class="btn btn-primary" @click="borrar">
    Borrar
  </button>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">Placa</th>
        <th scope="col">Modelo</th>
        <th scope="col">Marca</th>
        <th scope="col">Año</th>
        <th scope="col">Pais de fabricación</th>
        <th scope="col">Cilindraje</th>
        <th scope="col">Precio</th>
        <th scope="col">Valor por Dia</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody v-if="vehiculo">
      <tr>
        <th scope="row">{{vehiculo.placa}}</th>
        <td>{{vehiculo.modelo}}</td>
        <td>{{vehiculo.marca}}</td>
        <td>{{vehiculo.fechaFabricacion}}</td>
        <td>{{vehiculo.paisFabricacion}}</td>
        <td>{{vehiculo.cilindraje}}</td>
        <td>{{vehiculo.precio}}</td>
        <td>{{vehiculo.valorDia}}</td>
        <td>{{vehiculo.estado}}</td>
      </tr>
    </tbody>
  </table>



</template>

<script>
import buscarVehiculoPorPlaca from '../js/buscarVehiculoPorPlaca.js'
export default {
  name: "BuscarVehiculo",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
      return {
          placa: null,
          vehiculo: null,
          respuesta: null,
      }
  },
  methods: {
      async buscarVehiculo() {
          const data = await buscarVehiculoPorPlaca(this.placa, this.auth)
          this.vehiculo = data
          console.log(data)
      },
      borrar() {
          this.vehiculo = null
      }
  }


};
</script>

<style>

</style>