<template>
  <el-table
    :data="tableData"
    empty-text="暂无数据"
    :border="true"
  >
    <el-table-column
      type="selection"
      width="50"
      :istrue="istrue"
      align="center"
    >
    </el-table-column>
    <el-table-column
      v-for="(item,index) in tableLable"
      :key="index"
      :label="item.lable"
      :prop="item.param"
      :fixed="item.fixed"
      :min-width="item.width"
      sortable
    ></el-table-column>
    <el-table-column
      :fixed="tableOption.fixed"
      :label="tableOption.lable"
    >
      <template slot-scope="scope">
        <el-button
          v-for="(item, index) in tableOption.options"
          :key="index"
          :type="item.type"
          size="mini"
          @click="handleButton(item.methods,scope.row)"
        >{{item.lable}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => {}
    },
    tableLable: {
      type: Array,
      default: () => {}
    },
    tableOption: {
      type: Object,
      default: () => {}
    },
    istrue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleButton(methods, row) {
      this.$emit("handleButton", { methods: methods, row: row });
    }
  },
  mounted() {}
};
</script>