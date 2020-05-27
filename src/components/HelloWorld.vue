<template>
 <div>
   <h1>{{msg}}</h1>
   <input/>
   <button @click="calculate">点击提交</button>
   <p>{{total}}</p>
 </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count:0
    }
  },
  computed:{
     total:function(){
       var totalNum = this.count;
        return totalNum;
     }
  },
  methods:{
    calculate(){
      if(this.count<10){
         this.count ++ ;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
div{
  h1{
    color: red;
  }
  
}

</style>


