<template>
   <template v-for="menu in menuList" :key='menu.path'>
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <!-- <i :class="menu.meta.icon && menu.meta.icon.includes('el-icon)" :class="menu.meta.ocon"></i> -->
        <!-- 动态组件绑定 -->
        <!-- 方式一 -->
        <!-- <component class="icons" :is="menu.meta.icon"/> -->
        <!-- 方式二 -->
        <Icon class="icons" :icon="menu.meta.icon"></Icon>
        <span>{{menu.meta.title}}</span>
      </template>
        <menu-item :menuList='menu.children'></menu-item>
    </el-sub-menu>
    <el-menu-item  v-else :index="menu.path">
      <!-- <i :class="menu.meta.icon"></i> -->
      <!-- <component class="icons" :is="menu.meta.icon"/> -->
      <Icon class="icons" :icon="menu.meta.icon"></Icon>
      <template #title><span>{{menu.meta.title}}</span></template>
    </el-menu-item>
   </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>

<style scoped>
.icons{
  width: 25px;
  height: 18px;
  /* font-size: 18px; */
  margin-right: 5px;
}
</style>

