<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';
import { faker } from '@faker-js/faker';
import Timer from 'easytimer.js';

defineProps({
});

const timer = new Timer();
let totalSeconds = ref(60);
let pendingSeconds = ref(60);
let started = ref(false);
let typedDescription = ref("");
let typingDescription = ref("");
let keyStroked = ref(0);

const minuteConversion = () => {
    let timerValue = pendingSeconds.value;
    const minutes = Math.floor(timerValue / 60);
    const seconds = timerValue % 60;
    return seconds < 10 ?
        `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
}

const isCompleted = () => {
    return pendingSeconds.value == 0;
}

const keyPress = (e) => {
    let keyPressed = e.key;
    let ascii = keyPressed.charCodeAt(0);
    console.log(!isCompleted());
    if (!isCompleted() && keyPressed.length == 1 && ((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90) || keyPressed == ' ' || keyPressed == '.')) {
        if (!started.value) {
            started.value = true;
            timer.start({ countdown: true, startValues: { seconds: pendingSeconds.value } });
            timer.addEventListener('secondsUpdated', () => {
                pendingSeconds.value = timer.getTimeValues().seconds;
            });
        }
        keyStroked.value = keyStroked.value + 1;
        if (keyPressed === typingDescription.value.charAt(0)) {
            typedDescription.value = typedDescription.value.concat(keyPressed);
            typingDescription.value = typingDescription.value.substring(1);
        }
    }
}

const computeAccuracy = () => {
    let accuracy = typedDescription.value.length / keyStroked.value * 100;
    let accuracyRoundOff = Math.round(accuracy * 100) / 100;
    return accuracyRoundOff = accuracyRoundOff || 0.00;
}

const computeRPM = () => {
    let typedCount = typedDescription.value.length;
    let typedSeconds = totalSeconds.value - pendingSeconds.value;
    let characterRatePerSecond = typedCount / typedSeconds;
    let cpmRoundOff = Math.round(characterRatePerSecond * 60 * 100) / 100;
    return cpmRoundOff = cpmRoundOff | 0.00;
}

onMounted(() => {
    const generatedText = faker.lorem.paragraph(10);
    typingDescription.value = generatedText;
    window.addEventListener('keydown', keyPress);
});

</script>


<template>
    <div class="flex justify-between items-center bg-gray-200 flex-wrap h-10 overflow-scroll">
        <div class="flex justify-start gap-4 flex-wrap">
            <p> Key Stroked: {{ keyStroked }} </p>
            <p> Key Typed: {{ typedDescription.length }} </p>
            <p> Accuracy: {{ computeAccuracy() }} </p>
            <p> RPM: {{ computeRPM() }} </p>
        </div>
        <div class="flex justify-end items-center">
            <p>Time Left: {{ minuteConversion() }}</p>
        </div>
    </div>
    <br />
    <div class="w-1/2 mx-auto bg-slate-100 h-[calc(100vh-9rem)] overflow-scroll rounded-lg">
        <p class="text-3xl leading-10">
            <span class="bg-green-700 text-white">{{ typedDescription }}</span>
            <span>{{ typingDescription }}</span>
        </p>
    </div>
</template>