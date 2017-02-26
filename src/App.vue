<template>
  <div id="app">
    <!--<h1>Hello Vuex</h1>-->
    <!--<p>{{$store.state.count}} - {{count}}</p>-->
    <p>{{$store.state.a.count}}</p>
    <!--<p>{{todoss}}</p>-->
    <!--<p>{{count}}</p>-->
    <!--<button @click='$store.commit("jia",{a:10})'>+</button>-->
    <button @click='jiaplus'>+</button>
    <button @click='scc'>-</button>
  </div>
</template>

<script>
import { mapState,mapMutations ,mapActions} from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  /* computed:{
      count(){
          return this.$store.state.count
      },
      todos(){
          return this.$store.getters.todoss
      }
      }
 computed:mapState({
      count:state=>state.count+2
  })*/
  //如果计算属性的名称与state里的属性的名称相同时，可以直接传一个字符串数组
  /*computed:{
       ...mapGetters(['counts'])
  },
  /*
  methods:mapMutations([
      'jia',
      'jian'
  ])*/
    methods:{
        ...mapMutations(['jia','jian']),
        ...mapActions(['jiaplus']),
        scc(){
            console.log('通过dispatch触发')
            this.$store.dispatch('jianplus')
        }
    }
}
</script>

<style>

</style>
