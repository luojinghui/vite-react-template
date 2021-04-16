import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/lib/${name}/style/index.less`,
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      image: "/src/source/image",
      // "@": path.resolve(path.__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {
          "@primary-color": "green",
        },
      },
    },
  },
});
