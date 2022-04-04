<template>
  <h2 class="text-secondary">Buscar Cliente</h2>
  <div class="input-group mb-3" id="container">
        <span class="input-group-text" id="basic-addon1">Cédula</span>
        <input
          type="text"
          class="form-control"
          placeholder="C.I"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="cedula"
        />
      </div>
  <button type="submit" class="btn btn-primary" @click="buscarCliente">
    Buscar
  </button>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">Cedula</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Fecha de Nacimiento</th>
        <th scope="col">Genero</th>
        <th scope="col">Registro</th>
      </tr>
    </thead>
    <tbody v-if="cliente">
      <tr>
        <th scope="row">{{ cliente.cedula }}</th>
        <td>{{ cliente.nombre }}</td>
        <td>{{ cliente.apellido }}</td>
        <td>{{ cliente.fechaNacimiento }}</td>
        <td>{{ cliente.genero }}</td>
        <td>{{ cliente.registro }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import buscarCliente from "../js/buscarCliente.js";
export default {
  name: "BuscarCliente",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cedula: null,
      cliente: null,
      respuesta: null,
    };
  },
  methods: {
    async buscarCliente() {
      const response = await buscarCliente(this.cedula,this.auth);
      let res = response.toString();
      if (res.includes("403")) {
        this.respuesta = "Sesión cerrada, vuelva a logearse";
      } else if (res.includes("503") && res.includes("error")) {
        this.respuesta = "No existe ese usuario";
      } else {
        this.cliente = response;
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
table {
    margin-top: 20px;
}
</style>