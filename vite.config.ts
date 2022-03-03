import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //解决 Network: use `--host` to expose 问题
  server:{
    host:'0.0.0.0',
    port:8080,
    // open:true
  },
  //配置别名
  resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      }
    ]
  }
})
