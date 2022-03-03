<template>
  <el-container class="layout">
      <el-aside width="auto" class="aside">
          <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header class="header"><Header/></el-header>
        <el-main class="main">
          <Tabs></Tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Header from './header/Header.vue'
import MenuBar from './menu/MenuBar.vue'
import Tabs from './tabs/Tabs.vue'

// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>

<style lang="scss" scoped>
.layout{
  height: 100%;
}
.aside{
  // background-color:aqua;
}
.header{
  // background-color:beige;
}
.main{
  // background-color:#cde6c7;
  padding-top:0px;
}
</style>
