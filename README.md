# Job List App

A full-stack job listing application with **Spring Boot** (backend) and **React** (frontend), deployed using **Docker** and **Docker Compose**.

## Features

- **User Authentication** (JWT-based)
- **Job Listing Management**
- **Secure REST API** with Spring Boot
- **React Frontend**
- **PostgreSQL Database**
- **Dockerized Deployment**

## Project Structure

```
job-list-app/
│── backend/
│   ├── src/main/java/com/arvin/job_list/
│   │   ├── entities/        # Entity classes for DB models
│   │   ├── security/        # Security filters & JWT utilities
│   │   ├── services/        # Business logic for authentication & jobs
│   ├── src/main/resources/  # Configuration files (application.properties)
│   ├── Dockerfile           # Docker build file for backend
│   ├── pom.xml              # Maven dependencies
│── frontend/
│   ├── src/                 # React application source code
│   ├── public/              # Static assets
│   ├── package.json         # Node.js dependencies
│   ├── Dockerfile           # Docker build file for frontend
│── env/
│   ├── backend.env          # Environment variables for backend
│   ├── postgres.env         # Environment variables for PostgreSQL
│── docker-compose.yaml      # Docker Compose configuration
│── README.md                # Documentation
```

## Prerequisites

- **Docker** & **Docker Compose**
- **Java 17+** (for local backend development)
- **Node.js 16+** (for local frontend development)


## Architecture

### Component Diagram
![Component Diagram](./component-diagram.png)

### Deployment Diagram
![Deployment Diagram](./deployment-diagram.png)


## Setup & Installation

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/job-list-app.git
cd job-list-app
```

### 2. Setup Environment Variables

Create `.env` files based on the provided templates inside the `env/` directory.

```sh
cp env/backend.env.example env/backend.env
cp env/postgres.env.example env/postgres.env
```

### 3. Run with Docker Compose

```sh
docker-compose up --build
```

This will:
- Build and start the **backend**, **frontend**, and **PostgreSQL** containers.
- Expose services at:
  - Backend: `http://localhost:8080`
  - Frontend: `http://localhost:3000`
  - PostgreSQL: `localhost:5432`

### 4. Run Without Docker (Local Development)

#### Backend

```sh
cd backend
mvn spring-boot:run
```

#### Frontend

```sh
cd frontend
npm install
npm start
```

## API Endpoints

| Endpoint               | Method | Description                      |
|------------------------|--------|----------------------------------|
| `/api/auth/login`      | POST   | Authenticate user and return JWT |
| `/api/auth/register`   | POST   | Register new user               |
| `/api/jobs`           | GET    | Fetch job listings              |
| `/api/jobs/{id}`      | GET    | Get job details                 |
| `/api/jobs`           | POST   | Create new job listing          |

## Deployment

For production, modify the `.env` files and ensure all services are properly configured.

### 1. Adjust Environment Variables

- Edit the `.env` files inside the `env/` directory to set up the correct database credentials, backend URLs, and frontend configurations.
- Ensure that the backend and frontend are configured to connect to the **production PostgreSQL database**.

### 2. Start PostgreSQL

You need to run a PostgreSQL container separately. You can use the following command:

```sh
docker run -d \
  --name joblist-postgres \
  -e POSTGRES_USER=youruser \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=yourdatabase \
  -p 5432:5432 \
  postgres:latest
```

Alternatively, if using **Docker Compose**, ensure your `docker-compose.prod.yaml` includes the `postgres` service.

### 3. Start Backend & Frontend

Use the following command to bring up the **backend and frontend**:

```sh
docker-compose -f docker-compose.prod.yaml up --build
```
- The website will be served on **port 80**.

It will create

## Technologies Used

- **Backend:** Spring Boot, Spring Security, JWT, PostgreSQL
- **Frontend:** React, Redux, Bootstrap
- **Deployment:** Docker, Docker Compose, Nginx

