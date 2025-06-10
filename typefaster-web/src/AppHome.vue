<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { RouterView, useRouter } from 'vue-router';
import { landingPageRouter }  from '@/routes'
  
  let tasks = ref([]);
  let landingPageRoutes = ref([]);

  onBeforeMount(() => {
    const router = useRouter();
    landingPageRoutes.value = router.getRoutes();
  });

  onMounted(() => {
    
  });
</script>

<template>
  <Navbar :routes="landingPageRoutes" />
  <RouterView />
</template>