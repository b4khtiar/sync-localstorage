<script setup>
import { ref, onMounted } from 'vue'
import { useGlobalStore } from '../stores/global-store'

const store = useGlobalStore()
const theme = ref(store.theme)
const toggleTheme = () => {
	store.toggleTheme()
	theme.value = store.theme
}
onMounted(() => {
	theme.value = store.theme
})
</script>

<template>
	<button :class="{ dark: theme === 'dark' }" @click="toggleTheme">
		Theme: {{ theme }}
	</button>
</template>

<style scoped>
button {
	background-color: aliceblue;
	border: 1px solid #535bf2;
	color: #535bf2;
}
button.dark {
	background: darkslategray;
	color: aliceblue;
	border-color: transparent;
}
</style>
