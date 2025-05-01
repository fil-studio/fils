import { createClient } from "@sanity/client";
import { configDotenv } from "dotenv";

configDotenv();

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
};

export const sanityClient = createClient(config);
