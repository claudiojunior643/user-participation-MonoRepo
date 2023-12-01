# User Registration with Company Quotas Project

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-18.17.1-green" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vue-3.3.4-brightgreen" alt="Vue">
  <img src="https://img.shields.io/badge/SASS-1.67.0-pink" alt="SASS">
  <img src="https://img.shields.io/badge/Yarn-1.22.19-ff69b4" alt="Yarn">
</div>

Welcome to the User Registration with Company Quotas project. This is a full-stack project that includes a backend
developed in Node.js with TypeScript and a frontend built with Vue 3, using the Composition API, TypeScript, SASS, and
unit testing.

## Table of Contents 📋

- [Technologies](#technologies-)
- [Initial Setup](#initial-setup-)
    - [Clone the Repository](#1-clone-the-repository-)
- [Project Structure](#project-structure-)
- [How to Run the Project](#how-to-run-the-project-)
    - [Development Mode](#development-mode-)
    - [Production Mode](#2-production-mode-)
- [Unit Testing](#unit-testing-)

## Technologies 🛠️

This project makes use of the following technologies:

- **Backend:**
    - Node.js
    - TypeScript
    - Express.js
    - Database (e.g., MongoDB, PostgreSQL, etc.)
    - Unit Testing (jest, mocha, etc.)

- **Frontend:**
    - Vue 3
    - Composition API
    - TypeScript
    - SASS (for styles)
    - Vue Router (for navigation)
    - Vue CLI (for development)

### Initial Setup 🏁

- Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- Install the Yarn package manager if you haven't already. You can find it at [yarnpkg.com](https://yarnpkg.com/).

#### 1. Clone the Repository 📁

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/severiano-flavio/user-participation.git
```

### Project Structure 🏗️

This is a monorepo project that utilizes Yarn Workspaces for managing dependencies. The project structure is organized
as follows:

- **Root Directory (project)**
    - `package.json` (Parent Package File)
    - `packages/`
        - `client/` (Frontend)
        - `server/` (Backend)
        - `eslint-config/` (Global ESLint Configuration)

## How to Run the Project 🚀

You can run the project in both development and production modes. Here's how:

### Development Mode 🛠️

To run the project in development mode, follow these steps:

#### 1. Development mode 🛢️

In root folder, execute the commands bellow:

```bash
yarn install
yarn dev
```

The frontend application will be available at http://localhost:3000 and the backend will be available
at http://localhost:3001.

#### 2. Production Mode 🚢

To run the project in production mode, you can use Docker. Here are the commands and Dockerfile:

##### 2.1. Build Docker Image

Build the Docker image using the provided Dockerfile. In the project's root directory, run:

```bash
docker build -t user-participation .
```

##### 2.2 Run Docker Container

Once the image is built, run a Docker container:

```bash
docker run -p 3000:3000 -p 3001:3001 user-participation
```

This will start the project in production mode. The frontend application will be available at http://localhost:3000, and
the backend will be available at http://localhost:3001.

### Unit Testing 🧪

You can run unit tests for the project using the following command:

```bash
yarn test
```