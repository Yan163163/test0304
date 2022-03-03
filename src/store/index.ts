// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { ITabs } from './type/index'
export interface State {
  count: number,
  collapse:boolean,
  tabsList:Array<ITabs>,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    collapse:false,
    tabsList:[],
  },
  mutations:{
    setCount(state:State,count:number){
      state.count=count
    },
    // 设置collapse
    setCollapse:(state:State,collapse:boolean)=>{
      state.collapse=collapse;
    },
    addTabs:(state:State,tab:ITabs)=>{
      // 判断是否存在
      if(state.tabsList.some(item => item.path === tab.path)) return;
      state.tabsList.push(tab);
    }
  },
  getters:{
    getCount(state: State){
      return state.count;
    },
    // 获取collapse
    getCollapse(state: State){
      return state.collapse;
    },
    // 获取tab
    getTabs(state: State){
      return state.tabsList;
    },
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}