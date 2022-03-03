<template>
 <el-tabs
    v-model="activeTab"
    @tab-click='cliclBtn'
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import {ref,computed,watch,onMounted} from 'vue'
import {useStore} from '@/store'
import {useRoute,useRouter} from 'vue-router'
import {ITabs} from '@/store/type/index'

const store = useStore()
const route=useRoute()
const router=useRouter()
// 获取tabs
const tabsList = computed(()=>{
  return store.getters['getTabs']
})

// 当前激活的选项卡跟当前激活路由一样
const activeTab = ref('');
const setActiveTab = () =>{
  activeTab.value = route.path
}
// 添加选项卡
const addTab = () =>{
  // 从当前路由获取
  const {path,meta} = route;
  // 通过vuex设置
  const tab:ITabs={
    path:path,
    title:meta.title as string
  }
  store.commit('addTabs',tab)
}

// 删除选项卡
const removeTab = (targetName:string) =>{
  if(targetName==='/dashboard')return;
  // 选项卡数据列表
  const tabs = tabsList.value
  // 当前激活选项卡
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab:ITabs, index:number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
// 重新设置当前激活的选项卡
  activeTab.value = activeName
  // 重新设置选项卡数据
  store.state.tabsList = tabs.filter((tab:ITabs) => tab.path !== targetName)
  //跳转路由
  router.push({path:activeName})
}


// 监听路由的变化使选项卡改变
watch(()=>route.path,()=>{
  // 设置激活选项卡
  setActiveTab();
  // 把当前路由添加到选项卡
  addTab();
})
//刷新后选项卡不消失
// const beforeRefresh =()=>{
//   window.addEventListener('beforeunload',()=>{
//     sessionStorage.setItem('tabsView',Json.stringify(tabsList.value))
//   })
//   let tabSesson= sessionStorage.getItem("tabsView");
//   if(tabSesson){
//     let oldTabs=JSON.parse(tabSesson);
//     if(oldTabs.length>0){
//       store.state.tabsList =oldTabs;
//     }
//   }
// }
onMounted(() => {
  // beforeRefresh();
  // 设置激活选项卡
  setActiveTab();
  // 把当前路由添加到选项卡
  addTab();
})
// 选项卡点击事件
const cliclBtn=(tab:any)=>{
  const {props}=tab;
  // 路由跳转
  router.push({path:props.name})
}
</script>
<style scoped lang="scss">
</style>