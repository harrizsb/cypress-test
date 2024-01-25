<script setup lang="ts">
import { useFilesStore } from '@/stores/files'

const fileStore = useFilesStore()

const removeFile = (file: File) => {
    const targetFile = fileStore.fileList.filter((val: File) => val.name !== file.name)
    fileStore.setFileList(targetFile)
}
</script>

<template>
    <ul id="file-list" class="container mx-auto flex flex-col items-center h-screen list-none mt-4 flex flex-wrap">
        <li v-for="file in fileStore.fileList" :key="file.name"
            class="flex items-center w-full py-4 px-3 rounded-md bg-gray-300 text-gray-600 hover:text-gray-800 my-2">
            <span class="mr-2">{{ file.name }}</span>
            <button type="button" class="ml-auto text-md text-red-500 hover:text-red-700"
                @click="removeFile(file)">Remove</button>
        </li>
    </ul>
</template>