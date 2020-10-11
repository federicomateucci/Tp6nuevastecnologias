import {createWebHistory, createRouter } from 'vue-router'

import HelloWorld from "../components/HelloWorld.vue";
import FormularioIngresoPersonas from "../components/FormularioIngresoPersonas";
import ListaPersonas from "../components/ListaPersonas"; // doble punto para salir de la carpeta e ingresar en la que queremos importar !!!

const routes = [
    { path:'/', name:'home', component: HelloWorld },
    { path:'/FormularioIngresoPersonas', name:'form', component: FormularioIngresoPersonas },
    { path:'/ListaPersonas', name:'list', component: ListaPersonas },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes

}
    )

    export default router