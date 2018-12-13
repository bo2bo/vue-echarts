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
        <el-button type="success">我要提问</el-button>
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
          user: "王小虎",
          content: "发布"
        },
        {
          date: "2016-05-04",
          user: "王小虎",
          content: "发布"
        },
        {
          date: "2016-05-01",
          user: "王小虎",
          content: "发布"
        },
        {
          date: "2016-05-03",
          user: "王小虎",
          content: "未发布"
        }
      ],
      tableLable: [
        { lable: "用户名", param: "user" },
        { lable: "问题", param: "content" },
        { lable: "提问时间", param: "date" }
      ],
      tableOption: {
        lable: "操作",
        options: [
          { lable: "审核", type: "primary", methods: "edit" },
          { lable: "删除", type: "danger", methods: "delete" }
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
