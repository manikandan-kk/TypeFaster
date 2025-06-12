<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { defineProps } from 'vue';
import NavButton from './NavButton.vue';

defineProps({
    routes: {
        type: Array,
        default: []
    }
});

const isActiveLink = (pathCheck) => {
    const route = useRoute();
    return route.path === pathCheck;
};

</script>

<template>
    <nav class="bg-gray-800 w-full p-3 min-h-16">
        <div class="flex flex-wrap h-full items-center justify-end gap-4">
            <div v-for="(route, index) in routes" :key="route" class="items-center">
                <RouterLink :to="route.path">
                    <NavButton 
                        :label="route.name" 
                        :classProps="['text-slate-300', isActiveLink(route.path) ? 'bg-gray-900' : 'bg-gray-800 hover:bg-gray-700']"
                    />
                </RouterLink>
            </div>
        </div>
    </nav>
</template>