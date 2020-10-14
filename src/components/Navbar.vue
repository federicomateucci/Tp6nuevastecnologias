<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link" href="#" color="white">HOME</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/FormularioIngresoPersonas">
              <a class="nav-link" href="#">Formulario de ingreso de personas</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ListaPersonas">
              <a class="nav-link" href="#">Ver Lista de Personas</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>


<script >
export default {
  name: "src-components-navbar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-navbar {
  background-color: rgb(44, 5, 5);
  color: antiquewhite;
}
</style>
