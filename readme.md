# Chicks gold React with Vite and Typescript

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.13.0-brightgreen)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/vite-%5E5.0.0-blueviolet)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%5E18.2.0-61dafb)](https://react.dev/)

This is a basic starter template for building React applications with Vite and TypeScript.

## Prerequisites

### 1. Install Node.js

- **Recommended Version:** Node.js 22.13.0 (LTS)

- **Official Download:** [Node.js Website](https://nodejs.org/en/)

#### Using NVM (Node Version Manager):

```bash

nvm install 22.13.0

nvm use 22.13.0

```

#### Verify Installation:

```bash

node -v  # Should output v22.13.0 or higher

npm -v   # Verify npm version (bundled with Node.js)

```

This will show you the version of Node.js and npm previously installed (npm comes with the installation of Node.js).

---
<br></br>
# Getting started

1. Node.js Version:

    The Node.js version to run this React APP is 22.13.0 LTS.

    Install Dependencies:

    To install all dependencies for this project, run the following command:

    ```bash

    npm install

    ```

    or, if you use yarn

    ```bash

    yarn

    ```

2. Start the development server:

    To start the development server you can use the following commands:

    ```bash

    npm run dev

    ```

    or, if you use yar

    ```bash

    yarn dev

    ```

3. View application

    Open http://localhost:5173/ in your browser to see the application.

<br></br>
# Building for production

To build the application for production, run the following command:

```bash

npm run build

```

or, if you use yar

```bash

yarn build

```

This will create a dist directory with the optimized production build. As a last step, to execute the compiled file, the command must be used:

```bash

npm run preview

```

```bash

yarn preview

```

if you are in local, open http://localhost:4173/ in your browser to see the application.