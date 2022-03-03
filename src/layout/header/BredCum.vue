<template>
  <el-breadcrumb separator="/" class="crums">
    <el-breadcrumb-item v-for="item in tabs">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import {useRoute,RouteLocationMatched} from 'vue-router'
import {ref,Ref,watch} from 'vue'

// 定义面包屑导航数据
const tabs:Ref<RouteLocationMatched[]> = ref([]);
const route=useRoute();
const getCurm=()=>{
  // 获取所有含有meta
  let mached=route.matched.filter(item=>item.meta && item.meta.title);
  // 判断是否是首页
  const first = mached[0];
  if(first.path !=='/dashboard'){
    mached = [{path:'/dashboard',meta:{title:'首页'}} as any].concat(mached)
  }
  // 面包屑导航数据
  tabs.value = mached;
}
getCurm();
watch(()=>route.path,()=>getCurm());
</script>

<style scoped lang="scss">
.crums{
  // float:left;
  padding-top:20px;
}
</style>