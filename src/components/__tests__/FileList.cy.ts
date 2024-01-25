import { createPinia, setActivePinia } from 'pinia'
import FileList from '../FileList.vue'
import { useFilesStore } from '@/stores/files'

describe('FileList', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
        
    })

    it('render empty list properly', () => {
        cy.mount(FileList)
        cy.get('li').should('not.exist')
    })

    it('render list properly', () => {
        const fileStore = useFilesStore()
        fileStore.setFileList([new File([''], 'test.txt')])
        cy.mount(FileList)
        cy.contains('test.txt')
    })
})
