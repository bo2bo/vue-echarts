<template>
  <div class="industry">
    <div id="chart-abs-r" class="chart-abs-r"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0,
      url: "http://area.tjresearch.com:8082/newArea//api/opiData/getOpiData",
      chartType: "bar",
      dataTypeName: "_abs_r",
      treeData: [],
      colorData: [
        {
          startColor: [236, 251, 239],
          endColor: [69, 218, 95],
          colorSplit: [],
          pId: 400,
          cCount: 0,
          indus: [],
          classCode: "OPI_C"
        },
        {
          startColor: [229, 243, 255],
          endColor: [0, 138, 255],
          colorSplit: [],
          pId: 500,
          cCount: 0,
          indus: [],
          classCode: "OPI_R"
        },
        {
          startColor: [254, 234, 234],
          endColor: [243, 49, 49],
          colorSplit: [],
          pId: 600,
          cCount: 0,
          indus: [],
          classCode: "OPI_E"
        },
        {
          startColor: [250, 238, 253],
          endColor: [207, 93, 232],
          colorSplit: [],
          pId: 700,
          cCount: 0,
          indus: [],
          classCode: "OPI_M"
        },
        {
          startColor: [255, 252, 0],
          endColor: [255, 252, 0],
          colorSplit: [],
          pId: 800,
          cCount: 0,
          indus: [],
          classCode: "OPI_A"
        },
        {
          startColor: [0, 216, 255],
          endColor: [0, 216, 255],
          colorSplit: [],
          pId: 900,
          cCount: 0,
          indus: [],
          classCode: "OPI_B"
        },
        {
          startColor: [142, 143, 150],
          endColor: [255, 255, 255],
          colorSplit: [],
          pId: 1000,
          cCount: 0,
          indus: [],
          classCode: "OPI_O"
        }
      ]
    };
  },
  computed: {
    // 计算属性的 getter
    getTreeData: function() {
      var _this = this;
      _this.$axios
        .get("/static/json/treeData.json", {
          params: {
            ID: 12345
          }
        })
        .then(function(response) {
          this.treeData = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  methods: {
    chart: function(params) {
      debugger;
      var _this = this;
      var chart = _this.$echarts.init(document.getElementById("chart-abs-r"));
    }
  },
  mounted() {
    Vue.getTreeData;
    this.chart();
  }
};
</script>
<style scoped>
#chart-abs-r {
  width: 600px;
  height: 400px;
  background-color: aquamarine;
}
</style>
