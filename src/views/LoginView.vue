<script lang="ts" setup>
import IconLoading from '@/components/icons/IconLoading.vue'
import { useLoginStore } from '@/stores/login'
import { useBaseStore } from '@/stores/base'
import router from '@/router';

const loginStore = useLoginStore()

const baseStore = useBaseStore()

const performLogin = () => {
    baseStore.setLoading()

    setTimeout(() => {
        loginStore.login()

        if (loginStore.isLogin) {
            router.replace({ name: 'Dashboard' })
        }

        baseStore.setLoading()
    }, 3000) // Simulate a delay request
}
</script>

<template>
    <div class="bg-gray-200">

        <div class="container mx-auto flex justify-center items-center h-screen">
            <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-6 text-center">Welcome!</h2>
                <p class="text-sm font-mono mb-2">
                    Please use <span class="italic font-bold">user@user.com</span> for email and
                    <span class="italic font-bold">123456</span> for password.
                </p>
                <form v-on:submit.prevent="performLogin">
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="loginStore.email">
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="password" id="password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            v-model="loginStore.password">
                    </div>
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
                        <template v-if="baseStore.isLoading">
                            <IconLoading class="animate-spin" />
                        </template>
                        <template v-else>Login</template>
                    </button>
                </form>
            </div>
        </div>

    </div>
</template>

<style scoped></style>