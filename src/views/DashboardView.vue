<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import DropZone from '@/components/DropZone.vue';
import FileList from '@/components/FileList.vue';
import { useLoginStore } from '@/stores/login';
import { useFilesStore } from '@/stores/files';

const loginStore = useLoginStore()
const fileStore = useFilesStore()
</script>

<template>
    <div class="bg-gray-200">
        <Navbar :username="loginStore.email" />

        <div class="py-4">
            <template v-if="fileStore.fileList.length > 0">
                <FileList></FileList>
            </template>

            <template v-else>
                <DropZone></DropZone>
            </template>
        </div>
    </div>
</template>