import IconLoading from '../icons/IconLoading.vue'

describe('IconLoading', () => {
  it('playground', () => {
    cy.mount(IconLoading, { props: { class: 'animate-spin' } })
  })

  it('renders properly & spinning', () => {
    cy.mount(IconLoading, { props: { class: 'animate-spin' } })
    cy.get('svg')
    .invoke('attr', 'style', 'background-color: black') // render black so we can see it
    .should('have.class', 'animate-spin')
  })
})
