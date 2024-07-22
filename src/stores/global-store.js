import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'

export const useGlobalStore = defineStore('global', () => {
	const isLoggedIn = ref(false)
	const theme = ref('light')

	onMounted(() => {
		// auth status use session storage
		const localIsLoggedIn = sessionStorage.getItem('isLoggedIn')
		if (localIsLoggedIn) {
			isLoggedIn.value = JSON.parse(localIsLoggedIn)
		}
		// theme can savely use local storage
		const localTheme = window.localStorage.getItem('theme')
		if (localTheme) {
			theme.value = JSON.parse(localTheme)
		}
	})
	watch(isLoggedIn, value => {
		sessionStorage.setItem('isLoggedIn', JSON.stringify(value))
	})
	watch(theme, value => {
		window.localStorage.setItem('theme', JSON.stringify(value))
	})

	const login = () => {
		isLoggedIn.value = true
	}
	const logout = () => {
		isLoggedIn.value = false
	}

	const toggleTheme = () => {
		theme.value = theme.value === 'light' ? 'dark' : 'light'
	}
	return { isLoggedIn, theme, toggleTheme, login, logout }
})
