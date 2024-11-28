# Practice: Microfrontend with Single SPA

This is a practice project on microfrontends using **Single SPA** as the orchestrator, in a real-world scenario each microfrontend and the root config should be stored in separate repositories to maintain modularity and independence. However, for educational purposes, all services are kept within the same repository.

### Technologies Used:

- **mf-header** uses **React 17**.
- **mf-news** and **mf-register** use **React 18**.
- The **root-config** is responsible for loading and displaying the microfrontends and is framework agnostic.

### Single SPA Inspector:

When running the project it is highly recommended to use the **Single SPA Inspector** browser extension to observe how the microfrontends behave and interact. A basic usage of the extension is demonstrated in the accompanying video.

### Browser Extensions:

- **For Firefox:**
  [Single SPA Inspector for Firefox](https://addons.mozilla.org/en-US/firefox/addon/single-spa-inspector/)

- **For Chrome:**
  [Single SPA Inspector for Chrome](https://chromewebstore.google.com/detail/single-spa-inspector/emldbibkihanfiaiaghebffnbahjcgcp?pli=1)

## Running the Project

This project contains multiple services that are used to build a larger application. The services include:

- `root-conf`
- `mf-header`
- `mf-news`
- `mf-register`

Each of these services can be run using Docker, either with Docker Compose or manually using node and npm.

The first step is to clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Desarrollo-DS3/microfrontend-spa-1.git
cd microfrontend-spa-1
```

### Running the Project with Docker Compose (Recommended)

1. Make sure you have Docker and Docker Compose installed on your system.

2. Once you're in the project directory, you can run the entire project with Docker Compose by executing the following command:

```bash
docker compose up --build
```

> [!NOTE]
>
> The command can be different depending on your operating system, if `docker compose up --build` doesn't work, try `docker-compose up --build` instead.

Docker Compose will automatically:

1. Build the images for each service defined in the docker-compose.yml file.
2. Start each service and expose the necessary ports.

After running the command, the services should be available at the following ports on your local machine:

3. **Access the services:**

Once all services are running, they should be available at the following URLs:

- `root-conf` at `http://localhost:9000`
- `mf-header` at `http://localhost:3001`
- `mf-news` at `http://localhost:3002`
- `mf-register` at `http://localhost:3003`

> [!NOTE]
>
> It's important to note that the root-conf service is a special service that serves as the entry point for the entire application, the other services are not developed to be accessed directly.

To stop the services, you can run:

```bash
docker compose down
```

### Running the Project Without Docker Compose

If you prefer to run the project without Docker Compose, you can manually start each service by following these steps:

1. **Install dependencies for each service:**

   - Navigate to the `rootConf` directory and install the dependencies:

     ```bash
     cd ./rootConf
     npm install
     ```

   - Navigate to the `mf-header` directory and install the dependencies:

     ```bash
     cd ../mf-header
     npm install
     ```

   - Navigate to the `mf-news` directory and install the dependencies:

     ```bash
     cd ../mf-news
     npm install
     ```

   - Navigate to the `mf-register` directory and install the dependencies:
     ```bash
     cd ../mf-register
     npm install
     ```

2. **Start each service:**

After installing the dependencies for each service, you can start them one by one, you should use 4 terminal windows to ensure that the services are running at the same time.

- In the first terminal window, navigate to the `rootConf` directory and start the service:

  ```bash
  cd ./rootConf
  npm start
  ```

- In the second terminal window, navigate to the `mf-header` directory and start the service:

  ```bash
  cd ./mf-header
  npm start
  ```

- In the third terminal window, navigate to the `mf-news` directory and start the service:

  ```bash
  cd ./mf-news
  npm start
  ```

- In the fourth terminal window, navigate to the `mf-register` directory and start the service:
  ```bash
  cd ./mf-register
  npm start
  ```

3. **Access the services:**

Once all services are running, they should be available at the following URLs:

- `root-conf` at `http://localhost:9000`
- `mf-header` at `http://localhost:3001`
- `mf-news` at `http://localhost:3002`
- `mf-register` at `http://localhost:3003`

> [!NOTE]
>
> It's important to note that the root-conf service is a special service that serves as the entry point for the entire application, the other services are not developed to be accessed directly.

4. **Stopping the services:**

To stop each service, you can simply stop the `npm start` process in each terminal window (Ctrl + C).

## Team Members (A-Z)

- Juan David Loaiza
- Juan Sebastian Muñoz
- Julián David Rendon
- John Freddy Belalcazar
- Nicolas Herrera
- Santiago Duque
- Samuel Galindo
