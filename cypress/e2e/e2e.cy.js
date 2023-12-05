/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'
import {
    faker
} from '@faker-js/faker';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
        let nome = faker.name.firstName();
        let sobrenome = faker.name.lastName();
        let empresa = faker.company.bs();
        let pais = 'Brasil';
        let end1 = faker.address.streetName();
        let end2 = faker.address.buildingNumber();
        let cidade = faker.address.cityName();
        let estado = 'Santa Catarina';
        let zip = faker.address.zipCode('########');
        let fone = faker.phone.number('+55 ## ##### ####');
        let email = faker.internet.email(nome);

        beforeEach(() => {
            cy.visit('produtos/')
        });


        it('Seleciona Produto', () => {
            cy.get('[class="product-block grid"]').first().click()
        });

        it('Deve adicionar 4 produtos ao carrinho com command custom ', () => {
            cy.addProdutos('Beaumont Summit Kit', 'XL', 'Red', 2)
            cy.get('.woocommerce-message').should('contain', '× “Beaumont Summit Kit” foram adicionados no seu carrinho.')
            cy.get('#primary-menu > .menu-item-629 > a').click()
            
            cy.addProdutos('Abominable Hoodie', 'M', 'Green', 2)
            cy.get('.woocommerce-message').should('contain', '× “Abominable Hoodie” foram adicionados no seu carrinho.')
    
        });

        it('Deve preencher o cadastro de faturamento', () => {
            EnderecoPage.editarEnderecoFaturamento(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email)
    });

        it('Deve realizar os complementos do cadastro e finalizar a compra', () => {
            cy.get('#order_comments').click().type("Plataforma prática e com estilos variados.")
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
})