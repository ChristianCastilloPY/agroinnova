/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    // test: {
    //   globals: true,
    //   environment: "jsdom",
    //   setupFiles: ["./src/setupTests.ts"],
    // },
  };
  return config;
});
