/// <reference types="cypress" />

const nome = 'Ana Maria'
const idade = 30
const email = 'ana.maria@teste.com'

describe('Cadastro de Usuários', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Deve cadastrar um novo usuário e exibi-lo na lista', () => {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="Idade"]').clear().type(idade.toString())
    cy.get('input[placeholder="Email"]').clear().type(email)

    cy.contains('Cadastrar').click()

    cy.contains(email)
      .closest('.card')
      .should('contain.text', nome)
      .and('contain.text', idade.toString())
      .and('contain.text', email)
  })

  it('Deve deletar o usuário cadastrado', () => {
    cy.contains(email)
      .closest('.card')
      .within(() => {
        cy.get('button').click()
      })


    cy.contains(email).should('not.exist')
  })
  it('Deve exibir erro se idade for negativa', () => {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="Idade"]').clear().type('-5')
    cy.get('input[placeholder="Email"]').clear().type(email)
  
    cy.contains('Cadastrar').click()
  
    cy.contains('Idade é obrigatória').should('be.visible') // ou qualquer mensagem que você exiba
  })
  it('Deve exibir erro se campos estiverem vazios', () => {
    cy.contains('Cadastrar').click()
  
    cy.contains('Nome é obrigatório').should('be.visible')
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Idade é obrigatória').should('be.visible')
  })
})
