pipeline{
    agent any
    
    stages{
        stage('Checkout'){
            steps{
                echo 'Checking source'
                
                checkout scm
            }
        }
        
        stage("Setting up Backend"){
            steps{
                dir('backend'){
                    bat 'npm install'
                }
            }
        }
        
        stage("Testing Backend"){
            steps{
                dir('backend'){
                    bat 'npm test'
                }
            }
        }
        
        stage("Setting up frontend"){
            steps{
                dir('frontend'){
                    bat 'npm install'
                }
            }
        }
        
        stage("Frontend Lint"){
            steps{
                dir('frontend'){
                    bat 'npm run lint'
                }
            }
        }
        
        stage("Building Frontend"){
            steps{
                dir('frontend'){
                    bat 'npm run build'
                }
            }
        }
        
        stage('Docker build'){
            steps{
                echo 'Building Application'
                echo 'Creating Images'
                
                bat 'docker compose build'
            }
        }
        
        stage('Deploying App'){
            steps{
                echo "Deploying Application"
                
                bat 'docker compose down'
                bat 'docker compose up -d'
            }
        }
        
        stage('Verify'){
            steps{
                echo 'Checking containers'
                
                bat 'docker compose ps'
            }
        }
    }
    
    post {
        success{
            echo
            echo 'Application deployed successfully'
            echo
        }
        
        failure{
            echo
            echo 'Something went wrong'
            echo
        }
    }
    
    
}