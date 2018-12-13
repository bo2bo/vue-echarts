<template>
  <div class="container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" placeholder="请输入作者"></el-input>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select v-model="form.state" placeholder="请选择发布状态">
          <el-option label="未发布" value="false"></el-option>
          <el-option label="已发布" value="true"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onAdd">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success">热点好文</el-button>
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
          date: "2016-05-02",
          author: "王小虎",
          title: "上海市普陀区金沙江路 1518 弄",
          state: "发布"
        },
        {
          date: "2016-05-04",
          author: "王小虎",
          title: "上海市普陀区金沙江路 1517 弄",
          state: "发布"
        },
        {
          date: "2016-05-01",
          author: "王小虎",
          title: "上海市普陀区金沙江路 1519 弄",
          state: "发布"
        },
        {
          date: "2016-05-03",
          author: "王小虎",
          title: "上海市普陀区金沙江路 1516 弄",
          state: "未发布"
        }
      ],
      tableLable: [
        { lable: "标题", param: "title" },
        { lable: "发布时间", param: "date" },
        { lable: "作者", param: "author" },
        { lable: "状态", param: "state" }
      ],
      tableOption: {
        lable: "操作",
        options: [
          { lable: "编辑", type: "primary", methods: "edit" },
          { lable: "删除", type: "danger", methods: "delete" },
          { lable: "彻底删除", type: "danger", methods: "allDelete" }
        ]
      },
      pagination: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      },
      form:{
        title:'',
        author: '',
        state: ''
      }
    };
  },
  methods: {
    handleButton(val) {
      if (val.methods == "edit") {
        this.edit(val.row);
      } else if (val.methods == "delete") {
        this.delete(val.row);
      } else if (val.methods == "allDelete") {
        this.allDelete(val.row);
      }
    },
    edit(param) {
      alert(param);
    },
    delete(param) {
      alert(param);
    },
    allDelete(param) {
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