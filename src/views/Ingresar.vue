<template>
  <div id="container" v-if="!logeado">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Usuario</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="username"
      />
    </div>
    <br />
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-primary" @click="getToken">
      Ingresar
    </button>
    <h2 class="text-danger m-5" v-if="respuesta">{{ respuesta }}</h2>
  </div>
  <div v-if="logeado" id="cerrar">
    <h2 class="text-primary">Bienvenido</h2>
    <button type="submit" class="btn btn-primary" @click="cerrarSesion">
      Cerrar sesión
    </button>
    <br>
  </div>


</template>

<script>
import dameToken from "../js/buscarToken";

export default {
  name: "Ingresar",
  emits: ['token'],
  data() {
    return {
      logeado: false,

      username: null,
      password: null,

      respuesta: null,
      token: null,
    };
  },

  methods: {
    async getToken() {
      this.respuesta = null;
      const body = {
        username: this.username,
        password: this.password,
      };
      const data = await dameToken(body);
      let response = data.toString();
      if (response.includes("403")) {
        this.respuesta = "Usuario/contraseña incorrecta o no existen";
      } else {
        this.token = response;
        this.logeado = true;
        this.emitir()
      }
    },
    cerrarSesion() {
      this.username = null,
      this.password = null,
      this.token = 'No Token'
      this.logeado = false;
      this.emitir()
    },
    emitir() {
      this.$emit('token', this.token)
      //console.log("EMITIDO DE INGRESO: " + this.token)
    }
  },
};
</script>

<style>
#container {
  width: 40%;
  margin: auto;
  justify-content: center;
  padding-top: 20px;
}

#cerrar {
  margin: 10px 10px;
}
</style>