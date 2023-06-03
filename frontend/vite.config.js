import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: ['src/store', 'src/api'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components', 'src/views',]
    })
  ],
  
  // server:{
  //   port:8080,
  //   host:'0.0.0.0'
  // },
})