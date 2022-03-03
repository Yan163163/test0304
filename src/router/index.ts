import Layout from "@/layout/index.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'/dashboard',
        component:()=>import('@/layout/dashboard/Index.vue'),
        name: "dashboard",
        meta:{
          title:'首页',
          icon:'#icondashboard',
        }
      }
    ]
  },
  {
    path:"/system",
    component:Layout,
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
        component:()=>import('@/views/system/department/department.vue'),
        name:"department",
        meta:{
          title:"机构管理",
          icon:"FolderOpened",
          roles:["sys:dept"],
          // parentId:17,
        },
      },
      {
        path:"/useList",
        component:()=>import('@/views/system/User/useList.vue'),
        name:"useList",
        meta:{
          title:"用户管理",
          icon:"FolderOpened",
          roles:["sys:user"],
          // parentId:17,
        },
      },
      {
        path:"/roleList",
        component:()=>import('@/views/system/Role/roleList.vue'),
        name:"roleList",
        meta:{
          title:"角色管理",
          icon:"FolderOpened",
          roles:["sys:role"],
          // parentId:17,
        },
      },
      {
        path:"/menuList",
        component:()=>import('@/views/system/Mune/menuList.vue'),
        name:"menuList",
        meta:{
          title:"权限管理",
          icon:"FolderOpened",
          roles:["sys:menu"],
          // parentId:17,
        },
      },
    ],
  },
  {
    path:"/goods",
    component:Layout,
    // alwaysShow:true,
    name:"goods",
    meta:{
          title:"商品管理",
          icon:"FolderOpened",
          roles:["sys:goods"],
          // parentId:0,
        },
      children:[
          {
            path:"/goodCategory",
            component:()=>import('@/views/goods/goodCategory/goodCategoryList.vue'),
            name:"goodCategory",
            meta:{
                  title:"商品分类",
                  icon:"FolderOpened",
                  roles:["sys:goodCategory"],
                  // parentId:34,
                },
          },
          {
            path:"/goodList",
            component:()=>import('@/views/goods/goodList/goodList.vue'),
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
    component:Layout,
    // alwaysShow:true,
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
            component:()=>import('@/views/system/config/systemDocument.vue'),
            // alwaysShow:false,
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
];

//创建
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
