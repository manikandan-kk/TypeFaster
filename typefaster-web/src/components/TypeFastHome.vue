<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const startTypingTest = (a) => {
    router.push('/typing-test');
}

</script>

<template>
    <div class="line-height-1.5 text-center p-5">
        <p>Welcome to the Type Faster web application!</p>
        <p>This is a simple typing practice tool to help you improve your typing speed and accuracy.</p>
    </div>
    <div class="p-5">
        <button class="bg-yellow-500 p-3 rounded-lg mx-auto block" @click="startTypingTest(2)"> Start test </button> 
    </div>
</template>