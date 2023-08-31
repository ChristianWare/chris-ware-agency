import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "myqn30w0",
  dataset: "production",
  title: "Chris Ware Agency Blog",
  apiVersion: "2023-08-31",
  basePath: "/admin",
  plugins: [deskTool],
});

export default config;
