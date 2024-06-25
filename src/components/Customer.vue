<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  customer: {
    type: Object,
  },
});

defineEmits(["update-state", "delete-customer"]);

const customerFullname = computed(
  () => props.customer.name + " " + props.customer.lastname
);

const customerState = computed(() => props.customer.state);
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ customerFullname }}</p>
      <p class="text-gray-500">{{ customer.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ customer.company }}</p>
      <p class="text-gray-600">{{ customer.position }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <button
        class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
        :class="[
          customerState
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800',
        ]"
        @click="
          $emit('update-state', { id: customer.id, state: customer.state })
        "
      >
        {{ customerState ? "Activo" : "Inactivo" }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink
        :to="{ name: 'edit-customer', params: { id: customer.id } }"
        class="text-indigo-600 hover:text-indigo-900 mr-5"
        >Editar</RouterLink
      >
      <button
        class="text-red-600 hover:text-red-900"
        @click="$emit('delete-customer', customer.id)"
      >
        Eliminar
      </button>
    </td>
  </tr>
</template>
