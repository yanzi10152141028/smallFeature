<template>
  <div>
      我是父组件
      <button @click="showChild">添加</button>
      <button @click="edit">编辑</button>
      <input v-model="oldVal" />
      <div>旧属性：{{oldVal}}</div>
      <div>新属性：{{newVal}}</div>
      <router-link to='child/1' replace>replace跳转,没有history</router-link>
      <router-link to="helloworld" tag="li">渲染li标签</router-link>
      <router-link to='child/helloworld' append> append, a跳转b</router-link>
      <!-- <router-link active-class="active" to="child">导航一</router-link>
      <router-link to="parent" exact-active-class="active" event="mouseover">导航二</router-link> -->
      <router-link to='/cache'>跳转至缓存页面</router-link>
      <child-component :msg="parentVal" ref="childShow"  ></child-component>
  </div>
</template>

<script>
import childComponent from './child'
export default {
    components:{childComponent},
    data(){
        return{
            parentVal:{},
            childDialogShow:false,
            val:'',
            oldVal:'aaa',
        }
    },
    computed:{
        newVal:{
            get(){
                return this.oldVal.toUpperCase();
            },
            set(val){
              this.oldVal = val;
              console.log(val);
            }
        }
    },
    methods:{
        showChild(){
            //修改computed从而调用set
            this.newVal = "ooo";
            this.childDialogShow = true;
           this.$nextTick(() => {
               this.$refs.childShow.init();
           })
        },
        edit(){
          var obj = {};
          Object.assign(this.parentVal,obj || {});
          console.log(this.parentVal)
            this.$refs.childShow.edit(); 
        }
    }

}
</script>

<style>
 .active{
     color: red;
 }
</style>