import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

import { devDependencies, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      // the proper extensions will be added
      fileName: "index",
      formats: ["es", "cjs"],
      name: "ui-kit",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react/jsx-runtime",
        ...Object.keys(devDependencies),
        ...Object.keys(peerDependencies),
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { react: "React" },
      },
    },
  },
});
