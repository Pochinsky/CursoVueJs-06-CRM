import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/CustomersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: {title: 'Listado de Clientes'}
    },
    {
      path: "/agregar-cliente",
      name: "add-customer",
      component: () => import('../views/AddCustomerView.vue'),
      props: {title: 'Agregar Cliente'}
    },
    {
      path: "/editar-cliente/:id",
      name: "edit-customer",
      component: () => import('../views/EditCustomerView.vue'),
      props: {title: 'Editar Cliente'}
    },
  ],
});

export default router;
