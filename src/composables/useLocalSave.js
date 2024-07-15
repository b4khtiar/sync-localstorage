import { ref, onMounted, watch } from 'vue'

export const useLocalSave = (initialValue, key) => {
    const itemValue = ref(initialValue)

    onMounted(() => {
        const localValue = window.localStorage.getItem(key)
        if (localValue) {
            itemValue.value = JSON.parse(localValue)
        }
        watch(itemValue, (value) => {
            window.localStorage.setItem(key, JSON.stringify(value))
        }, { deep: true })
    })
    return itemValue
}