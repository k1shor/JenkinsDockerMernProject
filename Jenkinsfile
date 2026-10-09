pipeline{

    agent any

    stages{

        stage('Checkout'){
            steps{
                echo "Checking out project code"

                checkout scm
            }

        }

        stage('Backend Installation'){
            steps{
                dir('backend'){
                    bat 'npm install'
                }
            }
        }

        stage('Backend Test'){
            steps{
                dir('backend'){
                    bat 'npm test'
                }
            }
        }
        
        stage('Frontend '){
            steps{
                dir('frontend'){
                    bat 'npm run lint'
                }
            }
        }

        stage('Building Frontend'){
            steps{
                dir('frontend'){
                    bat 'npm run build'
                }
            }
        }

        stage('Docker build'){
            steps{
                echo "Building docker image"
                bat 'docker compose build'
            }
        }

        stage('Diploy'){
            steps{
                echo "Deploying docker image"
                bat 'docker compose up -d'
            }
        }

        stage('Verify'){
            steps{
                echo "Verifying deployment"
                bat 'docker compose ps'
            }
        }
    }

    post {
        success {
            echo 'Application Deployed successfully.'
        }
        failure{
            echo 'Failed to Deploy'
        }
    }
    
}