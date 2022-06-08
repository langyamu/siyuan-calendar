<script setup lang="ts">
import dayjs from 'dayjs';

defineProps<{
    date: Date;
}>();
</script>

<template>
    <div>{{ dayjs(date).format('DD') }}</div>
</template>

<style scoped></style>
