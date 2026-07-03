# Dockerized Node.js Web Application on AWS EC2

## Project Overview

This project demonstrates how to containerize a Node.js web application using Docker and deploy it on an AWS EC2 Ubuntu instance.

The application was built using Node.js and Express.js, packaged into a Docker image, pushed to Docker Hub, and deployed on an AWS EC2 instance.

---

## Tech Stack

- Node.js
- Express.js
- Docker
- Docker Hub
- AWS EC2
- Ubuntu Linux
- Git
- GitHub

---

## Project Structure

```
docker-nodejs-aws-ec2-project/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

## Project Workflow

```
Node.js Application
        ↓
Dockerfile
        ↓
Docker Image
        ↓
Docker Container
        ↓
Docker Hub
        ↓
AWS EC2
        ↓
Docker Container on EC2
        ↓
Live Application
```

---

## Docker Commands

### Build Docker Image

```bash
docker build -t my-webapp .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 my-webapp
```

### Tag Docker Image

```bash
docker tag my-webapp tanvirastogi19/my-webapp
```

### Push Docker Image

```bash
docker push tanvirastogi19/my-webapp
```

---

## AWS EC2 Deployment

### Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

### Pull Docker Image

```bash
sudo docker pull tanvirastogi19/my-webapp
```

### Run Docker Container

```bash
sudo docker run -d -p 3000:3000 --name my-webapp-container tanvirastogi19/my-webapp
```

### Verify Running Container

```bash
sudo docker ps
```

---
## 📸 Project Screenshots

![Local Application](screenshots/local-app.png)

![AWS Deployment](screenshots/aws-deployment.png)
## Author

**Tanvi Rastogi**

GitHub: https://github.com/Tanvi1907