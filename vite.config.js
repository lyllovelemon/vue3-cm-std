import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import {visualizer} from "rollup-plugin-visualizer/dist/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(),visualizer()]
})
