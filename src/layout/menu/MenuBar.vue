<template>
<div class="logo" v-if="!isCollapse">
  <img src="@/assets/logo.png">
  <span class="title">vue-0228</span>
</div>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px"> -->
    <!-- <el-radio-button :label="false">expand</el-radio-button> -->
    <!-- <el-radio-button :label="true">collapse</el-radio-button> -->
  <!-- </el-radio-group> -->
  <el-menu
    :default-active="activeIdex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router
  >
  <MenuItem :menuList='menuList'></MenuItem>  
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive, ref ,computed} from 'vue'
import MenuItem from './MenuItem.vue'
import {House} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
import {useStore} from '@/store/index'



// 当前路由
const route =useRoute();
//获取store
const store =useStore();
const activeIdex = computed(()=>{
  const {path} = route;
  return path;
})

// 目录列表
let menuList = reactive([
  {
    path:'/dashboard',
    component:'Layout',
    meta:{
      title:"首页",
      icon:"House",
      roles:["sys:manage"]
    },
    children:[]
  },
  {
    path:"/system",
    component:"Layout",
    alwaysShow:true,
    name:'system',
    meta:{
      title:"系统管理",
      icon:"Menu",
      roles:["sys:manage"],
      parentId:0,
    },
    children:[
      {
        path:"/department",
        component:"/system/department/department",
        alwaysShow:false,
        name:"department",
        meta:{
          title:"机构管理",
          icon:"FolderOpened",
          roles:["sys:dept"],
          parentId:17,
        },
      },
      {
        path:"/useList",
        component:"/system/UseList/UseList",
        alwaysShow:false,
        name:"useList",
        meta:{
          title:"用户管理",
          icon:"FolderOpened",
          roles:["sys:user"],
          parentId:17,
        },
      },
      {
        path:"/roleList",
        component:"/system/RoleList/RoleList",
        alwaysShow:false,
        name:"roleList",
        meta:{
          title:"角色管理",
          icon:"FolderOpened",
          roles:["sys:role"],
          parentId:17,
        },
      },
      {
        path:"/menuList",
        component:"/system/MenuList/MenuList",
        alwaysShow:false,
        name:"menuList",
        meta:{
          title:"目录管理",
          icon:"FolderOpened",
          roles:["sys:menu"],
          parentId:17,
        },
      },
    ],
  },
  {
    path:"/goods",
    component:"Layout",
    alwaysShow:true,
    name:"goods",
    meta:{
          title:"商品管理",
          icon:"FolderOpened",
          roles:["sys:goods"],
          parentId:0,
        },
      children:[
          {
            path:"/goodCategory",
            component:"/goods/goodCategory/goodCategoryList",
            alwaysShow:false,
            name:"goodCategory",
            meta:{
                  title:"商品分类",
                  icon:"FolderOpened",
                  roles:["sys:goodCategory"],
                  parentId:34,
                },
          },
          {
            path:"/goodList",
            component:"/goods/goodList/goodList",
            alwaysShow:false,
            name:"goodList",
            meta:{
                  title:"商品列表",
                  icon:"FolderOpened",
                  roles:["sys:goodList"],
                  // parentId:34,
                },
          }
        ],
  },
  {
    path:"/systenConfig",
    component:"Layout",
    alwaysShow:true,
    name:"systenConfig",
    meta:{
          title:"系统工具",
          icon:"FolderOpened",
          roles:["sys:systenConfig"],
          parentId:0,
          },
    children:[
       {
            path:"/document",
            component:"/system/config/systemDocument",
            alwaysShow:false,
            name:"document",
            meta:{
                  title:"接口文档",
                  icon:"FolderOpened",
                  roles:["sys:document"],
                  parentId:34,
                },
          }
    ]
  },
],
)

//是否展开
const isCollapse = computed(()=>{
  return store.getters['getCollapse']
})
const handleOpen = (key: string | number, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key:  string | number, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
@keyframes logoAnimation{
  0%{
    transform:scale(0);
  }
  50%{
    transform:scale(1);
  }
  100%{
    transform:scale(1);
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.logo{
  background-color:cornsilk;
  animation:logoAnimation 1s ease-out;
}
img{
  width: 32px;
  height: 32px;
  margin-right: 12px;
  padding-top: 10px;
  padding-left: 10px;
}
</style>