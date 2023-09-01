import { createClient } from "next-sanity";

const projectId = "jvb6iw9l";
const dataset = "production";
const apiVersion = "2023-08-31";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
