import { defineStore } from "pinia";
import { ref, watch, onMounted } from "vue";

export const useGlobalStore = defineStore("global", () => {
    const isLoggedIn = ref(false)

    onMounted(() => {
        const localIsLoggedIn = window.localStorage.getItem('isLoggedIn')
        if (localIsLoggedIn) {
            isLoggedIn.value = JSON.parse(localIsLoggedIn)
        }
    })
    watch(isLoggedIn, (value) => {
        window.localStorage.setItem('isLoggedIn', JSON.stringify(value))
    })
    const login = () => {
        isLoggedIn.value = true
    }

    const logout = () => { 
        isLoggedIn.value = false
    }
    return { isLoggedIn, login, logout }
});