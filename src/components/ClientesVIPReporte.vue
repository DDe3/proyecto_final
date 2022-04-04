<template>
  <h2 class="text-secondary">Clientes VIP</h2>
  <button type="button" class="btn btn-dark" @click="buscarClientesVIP">
    Generar Reporte
  </button>
  <button type="button" class="btn btn-dark" @click="limpiar">Limpiar</button>

  <table class="table table-dark table-striped" v-if="clientes">
    <thead>
      <tr>
        <th scope="col">Cedula</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Valor IVA</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody v-for="c in clientes" :key="c.id">
      <tr>
        <th scope="row">{{ c.cedula }}</th>
        <td>{{ c.nombre }}</td>
        <td>{{ c.apellido }}</td>
        <td>{{ c.valorIVA }}</td>
        <td>{{ c.valorTotal }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import buscarClientesVIP from '../js/buscarClienteVIP.js'
export default {
  name: "ClientesVIPReporte",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clientes: [],
    };
  },
  methods: {
    async buscarClientesVIP() {
        const data = await buscarClientesVIP(this.auth)
        this.clientes = data
    },
    limpiar() {
      this.clientes = [];
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>