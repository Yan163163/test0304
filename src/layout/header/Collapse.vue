<template>
<el-icon @click="changeIcon" class="icons">
  <component :is="status ? Fold : Expand" />
</el-icon>
</template>

<script setup lang="ts">
import {Fold,Expand} from '@element-plus/icons';
import {ref,computed} from 'vue'
import {useStore} from '@/store/index'

const store =useStore();


const status= computed(()=>{
  return store.getters['getCollapse']
})
// 图标切换
const changeIcon = () =>{
  // status.value = !status.value
  store.commit('setCollapse',!status.value)
}
</script>

<style scoped lang="scss">
.icons{
  // display:flex;
  float:left;
  align-items:center;
  font-size:20px;
  color:#303133;
  padding-top:18px;
  cursor:pointer;
  margin-right:15px
}
</style>