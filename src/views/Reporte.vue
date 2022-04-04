<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <button type="button" class="btn btn-dark" @click="handleNav(1)">
          Reservas
        </button>
        <button type="button" class="btn btn-dark" @click="handleNav(2)">
          Clientes VIP
        </button>
      </ul>
    </div>
  </nav>
  <ReservasReporte :auth="auth" v-if="reservas"/>
  <ClientesVIPReporte :auth="auth" v-if="vip"/>
</template>

<script>
import ReservasReporte from '../components/ReservasReporte.vue'
import ClientesVIPReporte from '../components/ClientesVIPReporte.vue'
export default {
  name: "Reporte",
  data() {
    return {
      reservas: false,
      vip: false,
      auth : false,
    };
  },
  components: {
    ReservasReporte,
    ClientesVIPReporte,
  },
  methods: {
    handleNav(num) {
      switch (num) {
        case 1:
          this.reservas = true;
          this.vip = false;
          break;
        case 2:
          this.reservas = false;
          this.vip = true;
          break;
      }
    },
  },
  created() {
    this.auth = this.$route.query.token
  }
};
</script>

<style>
</style>