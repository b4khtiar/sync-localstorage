<script setup>
import status from '@/components/Status.vue'
import confirm from '@/components/Confirm.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<ThemeSwitcher />
	<status />
	<confirm />
</template>

<style scoped>
.logo {
	height: 4em;
	padding: 1em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
