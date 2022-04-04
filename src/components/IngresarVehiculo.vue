<template>
  <h2 class="text-primary">Ingresar vehiculo</h2>
  <div id="container">
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
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Modelo</span>
      <input
        type="text"
        class="form-control"
        placeholder="Modelo"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="modelo"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Marca</span>
      <input
        type="text"
        class="form-control"
        placeholder="Marca"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="marca"
      />
    </div>
    <div class="row justify-content-center p-2">
      <label for="startDate">Fecha de Fabricación</label>
      <input
        id="startDate"
        class="form-control"
        type="date"
        v-model="fechaFabricacion"
      />
      <span id="startDateSelected"></span>
    </div>
    <br />

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        >País de Fabricación</span
      >
      <input
        type="text"
        class="form-control"
        placeholder="País..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="paisFabricacion"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Cilindraje</span>
      <input
        type="numer"
        class="form-control"
        placeholder="Cilindraje"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="cilindraje"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Precio</span>
      <input
        type="number"
        class="form-control"
        placeholder="Precio del auto"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="precio"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Valor por día</span>
      <input
        type="number"
        class="form-control"
        placeholder="Valor por dia"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="valorDia"
      />
    </div>
    <div class="input-group mb-3">
      <select
        class="form-select"
        id="inputGroupSelect02"
        @change="handleChange($event)"
      >
        <option selected value="1">Disponible</option>
        <option value="2">No disponible</option>
      </select>
      <label class="input-group-text" for="inputGroupSelect02"
        >Estado del vehículo</label
      >
    </div>

    <button type="submit" class="btn btn-primary" @click="postVehiculo">
      Ingresar vehículo
    </button>

    <h2 class="text-info bg-dark m-5" v-if="respuesta">{{ respuesta }}</h2>
  </div>
</template>

<script>
import insertarVehiculo from "../js/insertarVehiculo.js";
export default {
  name: "IngresarVehículo",
  props: {
    auth: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      placa: null,
      modelo: null,
      marca: null,
      fechaFabricacion: null,
      paisFabricacion: null,
      cilindraje: null,
      precio: null,
      valorDia: null,
      estado: null,

      respuesta: null,
    };
  },
  methods: {
    handleChange(e) {
      var name = e.target.options[e.target.options.selectedIndex].text;
      this.estado = name;
    },
    async postVehiculo() {
      const body = {
        placa: this.placa,
        modelo: this.modelo,
        marca: this.marca,
        fechaFabricacion: this.fechaFabricacion,
        paisFabricacion: this.paisFabricacion,
        cilindraje: this.cilindraje,
        precio: this.precio,
        valorDia: this.valorDia,
        estado: this.estado,
      };
      const data = await insertarVehiculo(body, this.auth);
      const res = data.toString();
      console.log(res)
      if (res.includes("403")) {
        this.respuesta = "Sesión expirada, ingrese de nuevo";
      } else if (res.includes("exito")) {
        this.respuesta = res;
      } else {
        this.respuesta = "Error insertando vehiculo, esta placa ya existe";
      }
    },
  },
};
</script>

<style>
#container {
  margin: auto;
  padding: 20px 0px;
}
</style>