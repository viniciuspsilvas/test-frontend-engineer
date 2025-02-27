# PrimeGents - eCommerce Platform

This project is a modern web application built with **Next.js**, leveraging a powerful stack of libraries and tools to deliver a seamless developer and user experience. Below is an overview of the project's architecture, the libraries used, and the reasoning behind the choices.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [How It Works](#how-it-works)
   - [GraphQL Server Setup](#graphql-server-setup)
   - [TypeScript and GraphQL Codegen](#typescript-and-graphql-codegen)
   - [Data Fetching with React Query](#data-fetching-with-react-query)
   - [Animations with Framer Motion](#animations-with-framer-motion)
   - [Styling with TailwindCSS](#styling-with-tailwindcss)
5. [Running the Project](#running-the-project)
6. [Challenges and Obstacles](#challenges-and-obstacles)
7. [Future Improvements](#future-improvements)
8. [Live Demo](#live-demo)

---

## Overview

This project is a full-stack application built with **Next.js**, combining a GraphQL API with a modern React frontend. The goal was to create a scalable, maintainable, and performant application while leveraging the best tools available in the ecosystem. The project includes features like type-safe GraphQL APIs, efficient data fetching, smooth animations, and responsive styling.

As part of the development process, I used **AI tools** to generate copy, images, and even some code snippets. Additionally, I utilized online tools to create the color schema for the project, ensuring a cohesive and visually appealing design.

---

## Features

- **GraphQL API**: A fully typed GraphQL server integrated into the Next.js application.
- **TypeScript**: End-to-end type safety for both the backend and frontend.
- **Efficient Data Fetching**: React Query for managing server state, caching, and loading states.
- **Animations**: Smooth and performant animations powered by Framer Motion.
- **Responsive Design**: A consistent and responsive UI built with TailwindCSS.
- **Global State Management**: Lightweight state management using Zustand.
- **AI-Generated Content**: Copy, images, and code snippets were generated using AI tools to speed up development.

---

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, Framer Motion, Zustand, React Query.
- **Backend**: GraphQL Yoga, TypeGraphQL.
- **Development Tools**: TypeScript, GraphQL Codegen, ESLint.
- **AI Tools**: ChatGPT, DeepSeek, DeepAI, Github Copilot - Used for generating copy, images, and code snippets.
- **Color Schema**: Created using online tools for a cohesive design.

---

## How It Works

### GraphQL Server Setup

The backend is powered by **GraphQL Yoga**, a modern and flexible GraphQL server library. It was chosen for its simplicity and seamless integration with Next.js. The GraphQL server is defined using a `graphql/schema.ts` file, which outlines the types, queries, and mutations. Resolvers handle the logic for each operation, ensuring a clean separation of concerns.

### TypeScript and GraphQL Codegen

To ensure type safety and improve developer productivity, the project uses **TypeScript** across the stack. **GraphQL Codegen** is used to automatically generate TypeScript types from the GraphQL schema. This eliminates manual type definitions and ensures consistency between the backend and frontend. The generated types are used in React components and API calls, reducing errors and improving development speed.

### Data Fetching with React Query

For data fetching, the project uses **React Query** (TanStack Query). This library was chosen for its powerful caching, background updates, and built-in loading state management. React Query simplifies data fetching and ensures that the application remains performant and responsive, even with complex data requirements.

### Animations with Framer Motion

To enhance the user experience, **Framer Motion** was integrated into the project. This library provides a simple yet powerful API for creating smooth animations and transitions. It was chosen for its performance and ease of use, allowing for polished interactions without compromising on speed.

### Styling with TailwindCSS

The project uses **TailwindCSS** for styling, ensuring a consistent and responsive design system. TailwindCSS was chosen for its utility-first approach, which allows for rapid development and easy customization. The theme configuration in `tailwind.config.ts` ensures a cohesive design language across the application.

---

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/viniciuspsilvas/test-frontend-engineer
   cd test-frontend-engineer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Generate TypeScript types (if you modify the GraphQL schema):
   ```bash
   npm run generate
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Challenges and Obstacles

During the development of this project, I encountered a few challenges:

1. **GraphQL and TypeScript Configuration**:
   - Setting up GraphQL Yoga and ensuring type safety with TypeScript was initially challenging. It required careful configuration of the schema, resolvers, and codegen to ensure everything worked seamlessly.

2. **Deployment on Vercel**:
   - The default setup suggested by GraphQL Yoga is not fully compatible with Vercel. I had to make adjustments to the server configuration to ensure a smooth deployment.

3. **Non-Functional Menu Links**:
   - Some menu links in the application do not work as intended. This is because the primary focus of the project, as required by the task description, was to demonstrate the product pages. Additional pages were not a priority for this iteration.

---

## Future Improvements

While the project is functional and well-structured, there are several areas for improvement:

1. **Testing**:
   - Add unit tests for components, integration tests for the GraphQL API, and end-to-end tests for critical user flows.

2. **Dark Mode**:
   - Implement a dark mode feature using TailwindCSS’s dark mode utilities and Zustand for theme management.

3. **Authentication and Security**:
   - Add JWT-based authentication to secure the application. This would involve:
     - Creating a login/signup flow.
     - Generating and validating JWTs on the server.
     - Protecting sensitive routes and GraphQL resolvers.

4. **SEO Optimization**:
   - While basic SEO was implemented, there is significant room for improvement. Meta tags, structured data, and performance optimizations can be added to enhance search engine visibility.

5. **Performance Optimization**:
   - Optimize the application for performance by implementing code splitting, lazy loading, and optimizing GraphQL queries.

---

## Live Demo

You can view the live demo of the project here:  
[test-frontend-engineer-rho.vercel.app](https://test-frontend-engineer-rho.vercel.app)

