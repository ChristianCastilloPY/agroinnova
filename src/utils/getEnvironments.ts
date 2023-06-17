const { VITE_ASSET_URL } = import.meta.env;
let modeBuild = "";

export default function getEnvironment() {
  if (VITE_ASSET_URL.includes("master")) {
    modeBuild = "prd";
  } else {
    modeBuild = "stg";
  }
  return modeBuild;
}
