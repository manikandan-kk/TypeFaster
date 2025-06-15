<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { RouterView, useRouter } from 'vue-router';
import { navigationRoutes }  from '@/routes'
  
  let tasks = ref([]);
  let navRoutes = ref([]);

  onBeforeMount(() => {
    const router = useRouter();
    navRoutes.value = navigationRoutes;
  });

  onMounted(() => {
  });
  
</script>

<template>
  <Navbar 
    :routes="navRoutes" 
    header="Type Faster"/>
  <RouterView />
</template>