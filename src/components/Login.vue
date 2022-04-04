<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <button type="button" class="btn btn-secondary" v-if="token">Log Out</button>
        <li class="nav-item" v-for="link in links" :key="link.id">
          <router-link
            class="nav-link"
            :to="link.path"
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
  name: "Registro",

  data() {
    return {
      links: [
        {
          id: 1,
          name: "Registrarse",
          path: "/registrarse",
        },
        {
          id: 2,
          name: "Ingresar",
          path: "/ingresar",
        }
      ],
      usuario: null,
      token: null,
    };
  },
};
</script>

<style>
</style>