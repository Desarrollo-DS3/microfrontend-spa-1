import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// Datos de error UI
const layoutData = {
  errors: {
    headerError: "<h1>Error en la aplicación Header</h1>",
    newsError: "<h1>Error en la aplicación News</h1>",
    registerError: "<h1>Error en la aplicación Register</h1>",
  },
};

const routes = constructRoutes(microfrontendLayout, layoutData);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name).catch((error) => {
      console.error(`Error loading ${name}:`, error);
      // throw new Error(`Application ${name} failed to load`);
    });
  },
});

applications.forEach((app) => {
  try {
    registerApplication(app);
  } catch (error) {
    console.error(`Failed to register application: ${app.name}`, error);
  }
});

const layoutEngine = constructLayoutEngine({ routes, applications });
layoutEngine.activate();

// Iniciar single-spa
start();
