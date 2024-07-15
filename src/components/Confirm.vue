<template>
    <div class="confirm">
        <h1>{{ status }}</h1>
    </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global-store'
import { storeToRefs } from 'pinia'
const store = useGlobalStore()
const status = storeToRefs(store).isLoggedIn
</script>