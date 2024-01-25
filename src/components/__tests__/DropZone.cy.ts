import { createPinia, setActivePinia } from 'pinia'
import DropZone from '../DropZone.vue'
import { useFilesStore } from '@/stores/files'

describe('DropZone', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('renders properly', () => {
        cy.mount(DropZone)
        cy.contains('Drag and drop your files here')
    })

    it('dragenter should change the border radius of the dropzone', () => {
        cy.mount(DropZone)
        cy.get('#dropzone').trigger('dragenter').should('have.class', 'border-gray-900 rounded-xl')
    })

    it('drageleave should change the border radius of the dropzone to default', () => {
        cy.mount(DropZone)
        cy.get('#dropzone').trigger('dragenter').should('have.class', 'border-gray-900 rounded-xl')
        cy.get('#dropzone').trigger('dragleave').should('not.have.class', 'border-gray-900 rounded-xl')
    })

    it('select file will show the file picker', () => {
        const fileStore = useFilesStore()
        cy.mount(DropZone)
        cy.get('input[type=file]').attachFile('image1.jpeg')
        cy.wrap(fileStore.fileList).should('have.length', 1)
    })
})
