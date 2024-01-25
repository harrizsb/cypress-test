<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    username: string
}>()


</script>


<template>
    <nav class="bg-gray-800 text-white flex justify-between px-4 py-2">
        <a href="#" class="font-bold">My Website</a>
        <ul class="hidden sm:flex space-x-4">
            <li><span>{{ username }}</span></li>
        </ul>
    </nav>
</template>