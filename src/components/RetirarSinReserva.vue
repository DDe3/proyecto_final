<template>
  <ReservarVehiculo :auth="auth" :sinReserva="true"/>
</template>

<script>
import ReservarVehiculo from "../components/ReservarVehiculo.vue";

export default {
  name: "RetirarSinReserva",
  components: {
    ReservarVehiculo,
  },
   props: {
    auth: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>