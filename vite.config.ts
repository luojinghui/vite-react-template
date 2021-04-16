import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      image: "/src/source/image",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "green",
        },
      },
      scss: {
        // additionalData: `@import "./src/style/var";`,
      },
    },
  },
});
