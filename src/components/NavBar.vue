<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand">
      <img
        src="https://seniordiscounter.com/wp-content/uploads/2018/03/Budget-Rental-Car-logo.jpg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Not found"
      />
      Budget Rent A Car
    </a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in links" :key="link.id">
          <router-link
            class="nav-link"
            :to="this.obtenerUrl(link.id)"
            @click="visible = !visible"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    token: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      links: [
        {
          id: 1,
          name: "Inicio",
        },
        {
          id: 2,
          name: "Vehículos",
        },
        {
          id: 3,
          name: "Reservar",
        },
        {
          id: 4,
          name: "Empleado",
        },
        {
          id: 5,
          name: "Reportes",
        },
      ],
    };
  },
  methods: {
    /*
    obtenerToken() {
      let url = "?token=" + this.tokenAuth;
      console.log(url)
      return url;
    },
    */
    obtenerUrl(num) {
      switch (num) {
        case 1:
          return "/";
        case 2:
          return "/vehiculos" + "?token=" + this.token;
        case 3:
          return "/reservar" + "?token=" + this.token;
        case 4:
          return "/empleado" + "?token=" + this.token;
        case 5:
          return "/reportes" + "?token=" + this.token;
      }
    },
  },
};
</script>

<style>
</style>