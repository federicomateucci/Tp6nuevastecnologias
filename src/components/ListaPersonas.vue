<template >
  <section class="src-components-lista-personas">
    <div v-if="this.personas.length > 0">
      <div
        class="media alert alert-warning"
        v-for="(persona, index) in this.personas"
        :key="index"
      >
        <div class="media-body ml-3">
          <h5>
            <u>ID: {{ persona.id }}</u>
          </h5>
          <br />
          <p>Nombre: {{ persona.nombre }}</p>
          <p>
            Edad: <i>{{ persona.edad }}</i>
          </p>
          <p>
            Email: <i>{{ persona.email }}</i>
          </p>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-danger mt-1">
      No se encuentran PERSONAS INGRESADAS
    </div>
  </section>
</template>

<script >
export default {
  name: "src-components-lista-personas",
  props: [],
  mounted() {
    this.getPersonasAxios();
  },
  data() {
    return {
      personas: [],
    };
  },
  methods: {
    getPersonasAxios() {
      let url = "https://5f833c646b97440016f4e4f5.mockapi.io/datos";
      this.axios(url)
        .then((res) => {
          console.log(res.data);
          this.personas = res.data;
        })
        .catch((err) => console.log("HTTP GET ERROR", err));
    },
    alerta() {
      if (this.personas.length > -1 && this.personas.length < 1) {
        alert("NO SE ENCUENTRAN DATOS");
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-lista-personas {
}
</style>
