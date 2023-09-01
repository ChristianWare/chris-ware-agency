import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "dagpxt1r",
  dataset: "production",
  title: "AgencyBlog",
  apiVersion: "2023-31-08",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
