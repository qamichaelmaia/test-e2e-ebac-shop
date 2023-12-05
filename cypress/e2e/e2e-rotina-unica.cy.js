/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/CadastroEntrega'
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
    it('Seleciona Produto', () => {
        cy.adicionarProdutos('XL', 'Blue', 3)
        cy.adicionarProdutos('L', 'Green', 4)
        cy.adicionarProdutos('M', 'Red', 1)
        cy.contains('Ver carrinho').first().click()
        cy.contains('Concluir compra').first().click()
        EnderecoPage.editarEndFat(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email)
        cy.get('#order_comments').click().type("Plataforma prática e com estilos variados.")
        cy.get('#terms').click({ force: true })
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })
})