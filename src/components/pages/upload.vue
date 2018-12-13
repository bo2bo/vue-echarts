<template>
  <div class="container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="高频名称">
        <el-input v-model="form.title" placeholder="请输入高频名称"></el-input>
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
          name: "2016-05-02",
          describe: "2016-05-02",
          indexName: "EXP"
        },
        {
          name: "2016-05-04",
          describe: "2016-05-04",
          indexName: "OPI"
        },
        {
          name: "2016-05-01",
          describe: "2016-05-01",
          indexName: "GFP"
        },
        {
          name: "2016-05-03",
          describe: "2016-05-03",
          indexName: "VA"
        }
      ],
      tableLable: [
        { lable: "名称", param: "name" },
        { lable: "描述", param: "describe" },
        { lable: "指标名称", param: "indexName" }
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
