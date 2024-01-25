import { defineStore } from "pinia"
import { type Ref, ref } from "vue"

export const useBaseStore = defineStore('base', () => {
    const isLoading: Ref<Boolean> = ref(false)

    const setLoading = () => {
        isLoading.value = !isLoading.value
    }

    return { isLoading, setLoading }
})