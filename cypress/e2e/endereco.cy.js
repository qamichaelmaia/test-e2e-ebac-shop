/// <reference types="cypress" />
import enderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {

        //cadastro de endereço
        enderecoPage.editarEnderecoFaturamento('Michael', 'Maia','Quality Assurance', 'Brasil','Rio Branco', '450', 'Jacobina', 'Bahia', '44700000', '7199999999', 'maia@ebactest.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    }); 

    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {

        //cadastro de endereço
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,

            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
        
    }); 
});