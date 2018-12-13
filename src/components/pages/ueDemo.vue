<template>
  <div class="container">
    <u-e ref="ue"></u-e>
    <el-button @click="getCon()">点击</el-button>
  </div>
</template>

<script>
import UE from "./../component/UE.vue";
export default {
  components: {
    UE
  },
  data: function() {
    return {

    };
  },
  computed: {

  },
  methods: {
    getCon(){
      var content = this.$refs.ue.getUEContent();
      debugger;
    }
  },
  mounted() {
    
  }
};
</script>
<style scoped>

</style>
