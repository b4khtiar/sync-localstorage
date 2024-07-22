<template>
	<div class="confirm" :class="{ dark: theme === 'dark' }">
		<h3>Logged in: {{ status }}</h3>
	</div>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global-store'
import { storeToRefs } from 'pinia'
const store = useGlobalStore()
const status = storeToRefs(store).isLoggedIn
const theme = storeToRefs(store).theme
</script>

<style scoped>
.confirm {
	color: #000;
}

.dark {
	background: darkslategray;
	color: aliceblue;
}
</style>
