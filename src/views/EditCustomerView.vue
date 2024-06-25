<script setup>
import { onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { FormKit } from "@formkit/vue";
import CustomerService from "../services/CustomerService";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

const router = useRouter();
const route = useRoute();

const { id } = route.params;
const formData = reactive({});

defineProps({
  title: {
    type: String,
  },
});

onMounted(() => {
  CustomerService.getCustomer(id)
    .then(({ data }) => {
      Object.assign(formData, data);
    })
    .catch((error) => console.log(error));
});

const handleSubmit = (data) => {
  CustomerService.updateCustomer(id, data)
    .then(() => router.push({ name: "home" }))
    .catch((error) => console.log(error));
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">Volver</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-10 px-6">
        <FormKit
          type="form"
          submit-label="Guardar Cambios"
          incomplete-message="No todos los campos se ingresaron correctamente"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Ej: Pedro"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
            v-model="formData.name"
          />
          <FormKit
            type="text"
            label="Apellido"
            name="lastname"
            placeholder="Ej: Gutierrez"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio',
            }"
            v-model="formData.lastname"
          />
          <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Ej: pedro.gutierrez@correo.com"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'Ingresa un email válido',
            }"
            v-model="formData.email"
          />
          <FormKit
            type="text"
            label="Teléfono"
            name="phone"
            placeholder="Ej: +56912345678"
            validation="?matches:/^(\+?56)?(\s?)(0?9)(\s?)[987654321]\d{7}$/"
            :validation-messages="{
              matches: 'Ingresa un formato de teléfono válido',
            }"
            v-model="formData.phone"
          />
          <FormKit
            type="text"
            label="Empresa"
            name="company"
            placeholder="Ej: Gutierrez Ltda"
            v-model="formData.company"
          />
          <FormKit
            type="text"
            label="Cargo"
            name="position"
            placeholder="Ej: Gerente General"
            v-model="formData.position"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
