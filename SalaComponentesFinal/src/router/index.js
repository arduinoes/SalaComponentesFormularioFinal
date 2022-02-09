import { createRouter, createWebHashHistory } from 'vue-router'
import Programacion from '../views/Programacion.vue'
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'Programacion',
    component: Programacion
  },
  {
    path: '/formulario',
    name: 'Formulario',
    meta: {requiresAuth: true},
    component: () => import('../views/Formulario.vue')
  },
  {
    path: '/sala',
    name: 'Sala',
    component: () => import('../views/Sala.vue')
  },
  {
    path: '/lista-obras',
    name: 'ListaObras',
    component: () => import('../views/ListaObras.vue')
  },
  {
    path: '/detalle-obra/:id',
    name: 'DetalleObra',
    props: true,
    component: () => import('../views/DetalleObra.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    const auth = getAuth();
    const usuario = auth.currentUser;
    console.log ('usuario desde router', usuario)
    if(!usuario){
      next({path: '/'})
    }else{
      next()
    }
  } else {
    next()
  }
})

export default router
