pipeline {
    agent any

    stages {
        stage('Conectar o Git') {
            steps {
                git branch: 'main', url: 'https://github.com/EBAC-QE/testes-api-cy.git'
            }
        }
        stage('Instalar Dependências') {
            steps {
                powershell 'npm install'
            }
        }
        stage('Executar os Testes') {
            steps {
                powershell 'npm run cy:run'
            }
        }
    }
    post {
        success {
            echo 'Os testes foram executados com sucesso!'
            // Notificações ou ações adicionais
        }
        failure {
            echo 'A execução do pipeline falhou.'
            // Notificações ou ações adicionais
        }
    }
}
