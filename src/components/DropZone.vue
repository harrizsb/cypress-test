<script setup lang="ts">
import { useFilesStore } from '@/stores/files'
import { useDropZone, useFileDialog } from '@vueuse/core'
import { computed, ref } from 'vue';

const fileStore = useFilesStore()

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
    fileStore.setFileList(files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
    onDrop,
})

const { files, open, reset, onChange } = useFileDialog({
    directory: false
})

onChange((files: FileList | null) => {
    fileStore.setFileList(files)
    console.log(fileStore.fileList)
})

const onChangeNative = (event: CustomEvent) => {
    fileStore.setFileList(event?.target?.files)
    console.log(fileStore.fileList)
}

const onDropClass = computed(() => ({
    'border-gray-900': isOverDropZone.value,
    'rounded-xl': isOverDropZone.value,
    'border-gray-500': !isOverDropZone.value,
}))
</script>

<template>
    <div class="container mx-auto flex flex-col justify-center items-center h-screen border-dashed border-2"
        :class="onDropClass" ref="dropZoneRef" id="dropzone">
        <div class="w-full h-64  p-4 flex flex-col justify-center items-center text-center">
            <p class="text-gray-600">Drag and drop your files here or</p>
            <button type="button" class="text-gray-600 hover:text-gray-700 hover:underline" @click="open">
                Choose file
            </button>
            <input type="file" class="hidden" @change="onChangeNative"/>
        </div>
        <ul id="file-list" class="mt-4 text-gray-600 list-none"></ul>
    </div>
</template>