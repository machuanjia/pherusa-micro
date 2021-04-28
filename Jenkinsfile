@Library('laiye') _

pipeline {
    environment {
        PROJECT = 'saas-knowledge'
    }
    agent any
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '30', numToKeepStr: '3')
    }
    stages {
         
        stage('process: paasfrontend base image') {
            when { tag "baseimg" }
            agent any
            stages {
                stage('Build paasfrontend base image') {
                    steps {
                        script {
                            frontend.build_base_image("${env.PROJECT}", "paasfrontend","${env.BRANCH_NAME}", "./docker/baseimg.Dockerfile")
                        }
                    }
                }
            }
        }
        
        stage('Build Docker Images') {
            failFast true
            parallel {
                
                stage('process: paasfrontend') {
                    when { tag "v*" }
                    agent any
                    stages {
                        stage('Build paasfrontend image') {
                            steps {
                                echo "paasfrontend"
                                script {
                                    frontend.build_image_by_docker("${env.PROJECT}", "paasfrontend","${env.BRANCH_NAME}", "./docker/Dockerfile")
                                }
                            }
                        }
                    }
                }
                stage('deploy paasfrontend to saas-test') {
                    agent any
                    when { branch "tes*" }
                    steps {
                        script {
                            frontend.saas_test_deploy("${env.PROJECT}", "paasfrontend", "./docker/Dockerfile")
                        }
                    }
                }
                
            }
        }
    }
}