<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { defineProps } from 'vue';

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
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-96" src="@/img/building.jpg" alt="Modern building architecture">
            </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
        </div>
    </div>
    <nav class="bg-green-800 w-full h-20 p-3">
        <div class="flex h-full bg-red-800">
            <div v-for="(route, index) in routes" :key="route" class="flex-1 bg-yellow-800 max-h-14">
                <RouterLink
                    :to="route.path"
                    :class="[
                    'hover:bg-red-50',
                    'hover:rounded-sm',
                    'text-yellow-800',
                    'bg-red-100',
                    'block',
                    'p-3',
                    'max-h-14',
                    'overflow-scroll'
                    ]">
                    <p class='max-h-14 p-2'>{{ route.name }}
                    HhhhhHh hhhHhhhhHhh hhHhhhhHh hhhH hhhh HhhhhHh hhhHhhhhH hhhhHhhhh</p>
                </RouterLink>
            </div>
        </div>
    </nav>
    <div class="h-40 bg-red-500">
        Hello everyone
        <div class="bg-yellow-900">
            Brown
            <div class="bg-green-900 h-full">
                Green
            </div>
        </div>
    </div>
    <div class="md:w-64 w-32 bg-yellow-800">
        <div class="md:w-96 w-48 bg-red-800 md:bg-purple-900">
            hhhhHh hhhHhhhhHhh hhHhhhhHh hhhH hhhh HhhhhHh hhhHhhhhH hhhhHhhhh hhhhHh hhhHhhhhHhh hhHhhhhHh hhhH hhhh HhhhhHh hhhHhhhhH hhhhHhhhh
        </div>
        <div class="md:max-w-80 max-w-40 bg-green-800">
            hhhhHh hhhHhhhhHhh hhHhhhhHh hhhH hhhh HhhhhHh hhhHhhhhH hhhhHhhhh hhhhHh hhhHhhhhHhh hhHhhhhHh hhhH hhhh HhhhhHh hhhHhhhhH hhhhHhhhh
        </div>
    </div>
</template>