<template>
  <br />
  <h2 class="text-secondary">Registro de Clientes</h2>
  <div id="container">
    <!--   /////////////// REGISTRO CUENTA ////////////////////////////     -->
    <div id="izquierda">
      <h2 class="text-primary">Cuenta</h2>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Username</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="username"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Contraseña</span>
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          aria-label="Password"
          aria-describedby="basic-addon1"
          v-model="password"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"
          >Confirmar contraseña</span
        >
        <input
          type="password"
          class="form-control"
          placeholder="Contraseña"
          aria-label="Password"
          aria-describedby="basic-addon1"
          v-model="confirmPassword"
        />
      </div>
      <p class="text-danger" v-if="confirm">Las contraseñas deben coincidir</p>
    </div>

    <!--   /////////////// REGISTRO CLIENTE ////////////////////////////     -->
    <div id="derecha">
      <h2 class="text-primary">Datos de Usuario</h2>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Nombre</span>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="nombre"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Apellido</span>
        <input
          type="text"
          class="form-control"
          placeholder="Apellido"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="apellido"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Cedula</span>
        <input
          type="text"
          class="form-control"
          placeholder="C.I"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="cedula"
        />
      </div>

      <div class="row justify-content-center">
        <label for="startDate">Fecha de Nacimiento</label>
        <input
          id="startDate"
          class="form-control"
          type="date"
          v-model="fecha"
        />
        <span id="startDateSelected"></span>
      </div>
      <br />
      <div class="input-group mb-3">
        <select
          class="form-select"
          id="inputGroupSelect02"
          @change="handleChange($event)"
        >
          <option selected>Escoger...</option>
          <option value="1">Hombre</option>
          <option value="2">Mujer</option>
        </select>
        <label class="input-group-text" for="inputGroupSelect02">Genero</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click="registrarUsuario">
      Registrar
    </button>
    <br />
    <h2 class="text-info bg-dark m-5" v-if="respuesta">{{ respuesta }}</h2>
  </div>
</template>

<script>
import registrarUsuario from "../js/registrarUsuario.js";

export default {
  name: "Registrarse",
  props: {
    tipo: {
      type: String,
    },
  },
  data() {
    return {
      confirm: false,

      username: null,
      password: null,
      confirmPassword: null,

      nombre: null,
      apellido: null,
      cedula: null,
      genero: null,
      fecha: null,

      respuesta: null,
      token: null,
    };
  },
  methods: {
    handleChange(e) {
      let value = e.target.value;
      if (value > 1) {
        this.genero = "M";
      } else {
        this.genero = "H";
      }
    },
    async registrarUsuario() {
      this.respuesta = null;
      this.confirm = null;
      if (
        (this.username == null ||
          this.password == null ||
          this.confirmPassword == null ||
          this.nombre == null ||
          this.apellido == null ||
          this.cedula == null ||
          this.genero == null,
        this.fecha == null)
      ) {
        this.respuesta = "Debe ingresar todos los campos";
      } else {
        if (this.password == this.confirmPassword) {
          this.confirm = false;
          let reg = "C";
          if (this.tipo != null) {
            reg = this.tipo;
          }
          const body = {
            cedula: this.cedula,
            nombre: this.nombre,
            apellido: this.apellido,
            fechaNacimiento: this.fecha,
            genero: this.genero,
            registro: reg,
            username: this.username,
            password: this.password,
          };
          const data = await registrarUsuario(body);
          let response = data.toString();
          if (response.includes("403")) {
            this.respuesta = "Necesita estar registrado";
          } else if (response.includes("500")) {
            this.respuesta = "Cliente con esa cédula/nombre de usuario ya registrado!";
          } else {
            this.respuesta = response;
          }
          console.log(response)
        } else {
          this.confirm = true;
        }
      }
    },
  },
};
</script>

<style>
#container {
  margin: 10px 10px;
  padding: 20px 0px;
}
</style>