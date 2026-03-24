import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserSite = owner && repository === `${owner}.github.io`;

const site =
  owner && repository
    ? `https://${owner}.github.io${isUserSite ? "" : `/${repository}`}`
    : "http://localhost:4321";

const base = isGithubActions && repository && !isUserSite ? `/${repository}/` : "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
});
