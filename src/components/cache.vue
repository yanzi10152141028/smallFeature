<template>
<div>
    我是缓存页面
    <router-link to='/child'>进入下一个页面</router-link>
</div>
</template>

<script>
export default {
  name:'Cache',//用于缓存
  data() {
      return{
          isFirstEnter:false
      }
  },
  mounted() {
      this.isFirstEnter = true;
  },
  beforeRouteEnter(to,from,next){
      if(to.path == '/cache' && from.path== '/child'){
        to.meta.isBack = true;
      }
      next();
  },
  activated(){
      if(!this.$route.meta.isBack || this.isFirstEnter){
        this.getData();
      }
      this.$route.meta.isBack = false;
      this.isFirstEnter = false;
  },
  methods: {
    getData() {
      this.$http
        .get("http://47.103.31.146:8002/api-admin/business/product/list")
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>