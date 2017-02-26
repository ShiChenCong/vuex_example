import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//访问状态对象
const state={
    count:0,
}

//触发状态，同步的
const mutations={
    jia(state,n){
        state.count++
    },
     jian(state){
        state.count--
    }
}

//计算属性
const getters={
    count:function (state) {
        return state.count ++
    }
}


const actions={
    jiaplus(context){
        context.commit('jia')
        setTimeout(()=>{
            console.log('yaojianl')
            // context.commit('jian')
        },3000)
        console.log('我先被执行了')
    },
    jianplus(context){
        context.commit('jian')
    }
}
const Modulea={
    state,
    mutations,
    getters,
    actions,
}

const Moduleb={
    state
}
export default new Vuex.Store({
    modules:{
        a:Modulea
    }
})
