<template>
  <div class="form-group">
    <label for="exampleInputEmail1">Marca</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Ingresa una marca"
      v-model="marca"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Modelo</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Ingresa un modelo"
      v-model="modelo"
    />
  </div>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      type="submit"
      class="btn btn-primary"
      @click="$emit('busqueda', { marca: this.marca, modelo: this.modelo })"
    >
      Buscar
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      @click="$emit('borrar', null)"
    >
      Borrar
    </button>
  </div>
</template>

<script>
export default {
  name: "VehiculoForm",
  emits: ["busqueda", "borrar"],
  data() {
    return {
      marca: null,
      modelo: null,
    };
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>