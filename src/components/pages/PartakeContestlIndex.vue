<template>
  <div class="container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="指标名称">
        <el-input v-model="form.title" placeholder="请输入指标名称"></el-input>
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
          startDate: "2016-05-02",
          endDate: "2016-05-02",
          indexName: "EXP",
          firstMonth:"2018-12",
          max:10,
          min:-10
        },
        {
          startDate: "2016-05-04",
          endDate: "2016-05-04",
          indexName: "OPI",
          firstMonth:"2018-12",
          max:10,
          min:-10
        },
        {
          startDate: "2016-05-01",
          endDate: "2016-05-01",
          indexName: "GFP",
          firstMonth:"2018-12",
          max:10,
          min:-10
        },
        {
          startDate: "2016-05-03",
          endDate: "2016-05-03",
          indexName: "VA",
          firstMonth:"2018-12",
          max:10,
          min:-10
        }
      ],
      tableLable: [
        { lable: "指标名称", param: "indexName" },
        { lable: "开始时间", param: "startDate" },
        { lable: "结束时间", param: "endDate" },
        { lable: "预测的第一个月份", param: "firstMonth" },
        { lable: "最大值", param: "max" },
        { lable: "最小值", param: "min" }
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
