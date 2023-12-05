class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email) {
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').clear().type(end1)
        cy.get('#billing_address_2').clear().type(end2)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(zip)
        cy.get('#billing_phone').clear().type(fone)
        cy.get('#billing_email').clear().type(email)
    }

    editarEnderecoEntrega(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep) {
        //elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()

        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').click().type(pais + '{enter}')
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
        cy.get('#shipping_postcode').clear().type(cep)
        
        cy.get('.button').click()
    }

}

export default new EnderecoPage()