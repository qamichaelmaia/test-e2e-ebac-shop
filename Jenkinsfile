pipeline {
    agent any

    environment {
        CYPRESS_VERIFY_TIMEOUT = '60000' // Aumenta o tempo de verificação para 60 segundos
    }

    stages {
        stage('Conectar o Git') {
            steps {
                git branch: 'main', url: 'https://github.com/qamichaelmaia/test-e2e-ebac-shop'
            }
        }
        stage('Instalar Cypress') {
            steps {
                powershell 'npx cypress install'
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
        failure {
            echo 'A execução do pipeline falhou.'
        }
    }
}
