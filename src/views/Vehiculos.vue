<template>
  <h2 class="bg-black text-white text-center p-2">Encuentra el vehículo que buscas</h2>
  <VehiculoForm @busqueda="busqueda($event)" @borrar="borrar"/>
  <VehiculoTable :vehiculos="vehiculos" />
  
</template>

<script>
import VehiculoForm from "@/components/VehiculoForm.vue"
import VehiculoTable from "@/components/VehiculoTable.vue"
import buscarVehiculoPorMyM from "../js/buscarVehiculosPorMyM.js"

export default {
    name: "Vehiculos",
    components: {
        VehiculoForm,
        VehiculoTable
    },

    data() {
        return {
            vehiculos : null
        }
    },

    methods: {

      async busqueda({marca, modelo}) {
          this.vehiculos = await buscarVehiculoPorMyM(marca,modelo)
          console.log(this.vehiculos)
      },

      borrar() {
          this.vehiculos = null
      }
  }

}
</script>

<style>

</style>