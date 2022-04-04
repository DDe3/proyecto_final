<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">Placa</th>
        <th scope="col">Modelo</th>
        <th scope="col">Marca</th>
        <th scope="col">Año</th>
        <th scope="col">Estado</th>
        <th scope="col">Valor por Dia</th>
      </tr>
    </thead>
    <tbody v-for="v in vehiculos" :key="v.placa">
      <tr>
        <th scope="row">{{v.placa}}</th>
        <td>{{v.modelo}}</td>
        <td>{{v.marca}}</td>
        <td>{{v.fechaFabricacion}}</td>
        <td>{{v.estado}}</td>
        <td>{{v.valorPorDia}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "VehiculoTable",
  props: {
    vehiculos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>