<template>
  <div class="container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="观点">
        <el-input v-model="form.title" placeholder="请输入观点"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onAdd">新增</el-button>
      </el-form-item>
    </el-form>
    <table-com
      :table-data="tableData"
      :table-lable="tableLable"
      :table-option="tableOption"
      :istrue="true"
      @handleButton="handleButton"
    ></table-com>
    <div align="center" class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pagination.total"
        :page-size="pagination.pageSize"
        :current-page.sync="pagination.currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tableCom from "./../component/table.vue";
export default {
  components: {
    tableCom
  },
  data: function() {
    return {
      tableData: [
        {
          startDate: "2016-05-02 00:00:00",
          endDate: "2016-05-02 12:00:00",
          title: "上海市普陀区金沙江路 1518 弄"
        },
        {
          startDate: "2016-05-04 00:00:00",
          endDate: "2016-05-04 12:00:00",
          title: "上海市普陀区金沙江路 1517 弄"
        },
        {
          startDate: "2016-05-01 00:00:00",
          endDate: "2016-05-01 12:00:00",
          title: "上海市普陀区金沙江路 1519 弄"
        },
        {
          startDate: "2016-05-03 00:00:00",
          endDate: "2016-05-03 12:00:00",
          title: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableLable: [
        { lable: "观点", param: "title" },
        { lable: "开始时间", param: "startDate" },
        { lable: "结束时间", param: "endDate" }
      ],
      tableOption: {
        lable: "操作",
        options: [
          { lable: "编辑", type: "primary", methods: "edit" },
          { lable: "删除", type: "danger", methods: "delete" }
        ]
      },
      pagination: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      },
      form:{
        title:''
      }
    };
  },
  methods: {
    handleButton(val) {
      if (val.methods == "edit") {
        this.edit(val.row);
      } else if (val.methods == "delete") {
        this.delete(val.row);
      }
    },
    edit(param) {
      alert(param);
    },
    delete(param) {
      alert(param);
    },
    handleCurrentChange(val) {
      var self = this;
      self.currentPage = val;
    },
    onSearch(){
      alert('123');
    },
    onAdd(){
      alert('新增');
    }
  },
  mounted() {}
};
</script>
<style scoped>
.pagination{
  margin-top: 20px;
}
</style>
