const { createClient } = require("@sanity/client");
const { configDotenv } = require("dotenv");

configDotenv();

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
};

module.exports = {
  client: createClient(config)
}