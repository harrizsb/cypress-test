import { defineStore } from "pinia"
import { type Ref, ref } from "vue"

export const useFilesStore = defineStore('files', () => {
    const fileList: Ref<Array<File>> = ref([])

    const setFileList = (files: Array<File> | FileList | null) => {
        if (files === null) {
            return
        } else if (files instanceof FileList) {
            for (let i = 0; i < files.length; i++) {
                fileList.value.push(files[i])
            }
        } else {
            fileList.value = files
        }
    }

    const resetFileList = () => {
        fileList.value = []
    }

    return { fileList, setFileList, resetFileList }
})