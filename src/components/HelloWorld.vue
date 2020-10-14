<template>
  <div class="hello">
    <header>
      <h1>{{ msg }}</h1>
      <p>Website de Registros de Personas en VUE CLI</p>
      <br />
    </header>
    <main>
      <h1>Federico Mateucci ORT 2C. Materia:NT2</h1>
    </main>
    <footer>
      Pie de pagina
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
