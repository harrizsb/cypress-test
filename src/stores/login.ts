import { defineStore } from "pinia"
import { type Ref, ref } from "vue"

export const useLoginStore = defineStore('login', () => {
    const email: Ref<string> = ref('')
    const password: Ref<string> = ref('')
    const isLogin: Ref<Boolean> = ref(false)
    const login = () => {
        if (email.value === 'user@user.com' && password.value === '123456') {
            isLogin.value = true
        } else {
            alert('Your password or email is wrong')
            isLogin.value = false
        }
    }
    return { email, password, isLogin, login }
})