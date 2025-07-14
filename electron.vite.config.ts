import { resolve } from 'path'
import { defineConfig, defineViteConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { mergeConfig } from 'vite'
const appName = 'title'
const globalConfig = defineViteConfig({
  resolve: {
    alias: {
      "@renderer": resolve("src/renderer/src"),
      "@main": resolve("src/main"),
      "@preload": resolve("src/preload"),
    },
  },
  experimental: {
    enableNativePlugin: true
  },
  define: {
    __APP_NAME__: `'${appName}'`
  },
  build:{
    rollupOptions:{
      external: ['nodegit']
    }
  }
})
export default defineConfig({
  main: mergeConfig(globalConfig, {
    plugins: [externalizeDepsPlugin(), swcPlugin()],
  }),
  preload: mergeConfig(globalConfig, {
    plugins: [externalizeDepsPlugin()],
  }),
  renderer: mergeConfig(globalConfig, {
    plugins: [
      vue(),
      vueJsx(),
      Components({
        dts: true,
        resolvers: [
          NaiveUiResolver(),
        ]
      }),
      tailwindcss()
    ],
    css: {
      transformer: 'lightningcss'
    }
  }),
})
