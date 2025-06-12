<script setup>
import {defineProps} from 'vue';

defineProps({
    label: {
        type: String,
        default: 'Loading...'
    },
    classProps: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div :class="['mx-auto p-3 rounded-2xl cursor-pointer', ...classProps]">
        {{ label }}
    </div>
</template>
