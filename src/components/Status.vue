<script setup>
import { ref, computed } from 'vue'
import { useGlobalStore } from '@/stores/global-store'
import { storeToRefs } from 'pinia'

const store = useGlobalStore()
const LoggedIn = storeToRefs(store).isLoggedIn
const theme = storeToRefs(store).theme
const action = computed(() => {
	return LoggedIn.value ? 'Logout' : 'Login'
})
const name = computed(() => {
	return LoggedIn.value ? 'User' : 'Guest'
})

const login = () => {
	store.login()
}
const logout = () => {
	store.logout()
}
</script>
<template>
	<div class="status" :class="{ bordered: LoggedIn, dark: theme === 'dark' }">
		<h1>Hello, {{ name }}</h1>
		<p>Click on the button to {{ action }}</p>

		<button v-if="!LoggedIn" @click="login">Login</button>
		<button v-else @click="logout">Logout</button>

		<p class="hint">
			Try refreshing the page. And your status will persist. This login state
			use session storage, so it will reset when you close the tab or window.
			theme switch use localstorage so it never expire once it set.
		</p>
	</div>
</template>

<style scoped>
.status {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
	padding: 2rem;
	max-width: 32rem;
	margin: 2rem auto;
	border-radius: 1rem;
	background-color: #fff;
	border: 1px solid #fff;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

h1 {
	margin: 0;
}

.hint {
	color: #888;
	font-size: small;
}

.bordered {
	border-color: #747bff;
}

.dark {
	background-color: darkslategray;
	color: aliceblue;

	button {
		background-color: tomato;
		color: #000;
	}

	.hint {
		color: lightgrey;
	}
}

.dark.bordered {
	border-color: darkslategray;
}
</style>
