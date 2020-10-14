<template>
  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2>Formulario Ingreso de Personas</h2>
      <hr />

      <form novalidate autocomplete="off" @submit.prevent="enviar()">
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            v-model="$v.f.nombre.$model"
          />
          <!-- CARTEL DE VALIDACIÓN -->
          <div
            v-if="$v.f.nombre.$error && $v.f.nombre.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.nombre.required.$invalid">
              Este campo es requerido
            </div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">
              El nombre a ingresar debe tener mas de 5 caracteres...
            </div>
            <div v-else-if="$v.f.nombre.maxLength.$invalid">
              El nombre a ingresar NO debe superar los 15 caracteres..
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            class="form-control"
            v-model="$v.f.edad.$model"
          />
          <!-- CARTEL DE VALIDACIÓN -->
          <div
            v-if="$v.f.edad.$error && $v.f.edad.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.edad.required.$invalid">
              Ingrese un numero, por favor...
            </div>
            <div v-else-if="$v.f.edad.between.$invalid">
              Ingrese una edad entre 18 y 120 por favor...
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            class="form-control"
            v-model="$v.f.email.$model"
          />
          <!-- CARTEL DE VALIDACIÓN -->
          <div
            v-if="$v.f.email.$error && $v.f.email.$dirty"
            class="alert alert-danger mt-1"
          >
            Ingrese un email valido por favor...
          </div>
        </div>

        <div class="form-group">
          <input
            type="submit"
            :disabled="
              !$v.f.edad.required.$invalid &&
              !$v.f.email.$dirty &&
              !$v.f.nombre.required.$invalid
            "
            class="btn btn-success mt-4"
            value= "enviar"
          />
        </div>
      </form>
    </div>
    <!-- <pre>{{ $v }}</pre>  -->
  </section>
</template>

<script>
import {
  required,
  minLength,
  email,
  between,
  maxLength,
} from "@vuelidate/validators";

export default {
  name: "src-components-formulario",
  props: [],
  mounted() {
    //this.getDatosForm()
    this.getDatosAxios();
  },
  data() {
    return {
      submitMsg:'Enviar',
      f: this.resetForm(),
      url: "https://5f833c646b97440016f4e4f5.mockapi.io/datos",
    };
  },
  validations: {
    f: {
      nombre: { required, minLength: minLength(5), maxLength: maxLength(15) },
      edad: { required, between: between(18, 120) },
      email: { required, email },
    },
  },
  methods: {
    /* Envio de datos del formulario al backend */
    async sendDatosAxios(datos) {
      this.axios
        .post(this.url, datos, { "content-type": "application/json" })
        .then((res) => console.log(res.data))
        .catch((err) => console.log("ERROR HTTP POST", err));
    },

    /* Pedido de datos almacenados en el backend */

    getDatosAxios() {
      this.axios(this.url)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("HTTP GET ERROR", err));
    },

    /* Submit del form */
    enviar() {
      let form = {
        nombre: this.$v.f.nombre.$model,
        edad: this.$v.f.edad.$model,
        email: this.$v.f.email.$model,
      };
      console.log(form);
      this.sendDatosAxios(form);
      this.f = this.resetForm(); // resetea data
      this.$v.$reset(); // restea estados
    },

    /* valor inicial de los campos de datos del formulario */
    resetForm() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },
  },
};
</script>

<style scoped lang="css">
.src-components-formulario {
}

.jumbotron {
  background-color: rgb(30, 30, 175);
  color: white;
}

hr {
  background-color: #ddd;
}
pre {
  color: rgb(8, 245, 20);
}
</style>
