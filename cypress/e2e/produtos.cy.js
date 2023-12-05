/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    ///Caso apareça erro de "estoque vazio" trocar produto:
    
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 12

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    
    });

    it('Confirmação de mensagem de erro - Usando Comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Green', 4)
        cy.get('.stock').should('contain', 'Fora de estoque')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Green', 2)
        cy.get('.woocommerce-message').should('contain', '× “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Hero Hoodie', 'M', 'Gray', 3)
        cy.get('.woocommerce-message').should('contain', ' × “Hero Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.addProdutos('Kratos Gym Pant', '34', 'Blue', 4)
        cy.get('.woocommerce-message').should('contain', ' × “Kratos Gym Pant” foram adicionados no seu carrinho.')

    });



});