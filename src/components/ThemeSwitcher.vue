<script setup>
import { ref } from 'vue'
import { useGlobalStore } from '../stores/global-store'

const store = useGlobalStore()
const theme = ref(store.theme)
const toggleTheme = () => {
	store.toggleTheme()
	theme.value = store.theme
}
</script>

<template>
	<button :class="{ dark: theme === 'dark' }" @click="toggleTheme">
		Theme: {{ theme }}
	</button>
</template>

<style scoped>
button.dark {
	background: darkslategray;
	color: aliceblue;
}
</style>
