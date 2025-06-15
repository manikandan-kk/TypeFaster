<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { defineProps } from 'vue';
import NavButton from './NavButton.vue';

defineProps({
    routes: {
        type: Array,
        default: []
    },
    header: {
        type: String,
        default: ""
    }
});

const isActiveLink = (pathCheck) => {
    const route = useRoute();
    return route.path === pathCheck;
};

</script>

<template>
    <nav class="flex bg-green-800 p-3 w-full min-h-16 max-h-20 overflow-scroll justify-between items-center flex-wrap">
        <div class="flex justify-start items-center flex-wrap gap-6">
            <img src="../img/hand-typing.jpg" class="h-16 rounded-3xl">
            <p class="text-xl text-zinc-200"> {{ header }} </p>
        </div>
        <div class="flex justify-end items-center gap-4 flex-wrap">
            <div v-for="(route, index) in routes" :key="route">
                <RouterLink :to="route.path">
                    <NavButton 
                        :label="route.name" 
                        :classProps="['text-white', isActiveLink(route.path) ? 'bg-green-900' : 'bg-green-800 hover:bg-green-700']"
                    />
                </RouterLink>
            </div>
        </div>
    </nav>
</template>