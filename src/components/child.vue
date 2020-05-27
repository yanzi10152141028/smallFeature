<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="dataForm" ref="dataForm">
        <el-form-item label="活动名称" label-width="120" prop="name">
          <el-input v-model="dataForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["msg","id"],
  data() {
    return {
      dialogFormVisible: false,
      dataForm: {
        name: "",
      }
    };
  },
  created() {
    if(this.id){
    console.log(this.id)
    }
   
  },
  methods: {
    init() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].resetFields();
      })
    },
    edit(){
      this.dialogFormVisible = true;
      // this.dataForm = this.msg;
    }
  }
};
</script>

<style>
</style>