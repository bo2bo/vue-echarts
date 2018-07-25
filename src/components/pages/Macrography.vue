<template>
  <div class="macrography">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="预测" name="forecast">
        <div id="line-chart-forecast">
          预测
        </div>
      </el-tab-pane>
      <el-tab-pane label="历史" name="history">
        <div id="line-chart-history">
          历史
        </div>
      </el-tab-pane>
      <el-tab-pane label="结构" name="struct">
        <div id="stack-chart-struct">
          结构
        </div>
      </el-tab-pane>
      <el-tab-pane label="GFP" name="GFP">
        <div id="stack-chart-GFP">
          GFP
        </div>
      </el-tab-pane>
      <el-tab-pane label="OPI" name="OPI">
        <div id="stack-chart-OPI">
          OPI
        </div>
      </el-tab-pane>
      <el-tab-pane label="EXP" name="EXP">
        <div id="stack-chart-EXP">
          EXP
        </div>
      </el-tab-pane>
      <el-tab-pane label="动能" name="energy">
        <div id="stack-chart-energy">
          动能
        </div>
      </el-tab-pane>
      <el-tab-pane label="排名" name="rank">
        <div id="bar-chart-rank">
          排名
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeName: "OPI"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {}
};
</script>