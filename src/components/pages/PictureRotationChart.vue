<template>
  <div class="container">
    <el-form :inline="true">
      <el-form-item>
        <el-button type="success">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column
        label="日期"
        prop="date"
      ></el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <img :src="scope.row.address">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "../../../static/img/1.png"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "../../../static/img/2.png"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "../../../static/img/3.png"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "../../../static/img/4.png"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "../../../static/img/5.png"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>
img {
  width: 200px;
}
</style>
