<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="picHandlePreview"
    :on-remove="picHandleRemove"
    list-type="picture"
    :auto-upload="false"
    limit=1
    :on-exceed="picHandleOverLimit"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="picSubmitUpload">上传到服务器</el-button>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    picSubmitUpload() {
      this.$refs.upload.submit();
    },
    picHandleRemove(file, fileList) {
      console.log(file, fileList);
    },
    picHandlePreview(file) {
      console.log(file);
    },
    picHandleOverLimit(files, fileList) {
      alert("最多只能上传一张图片，请删除再上传。");
    }
  }
};
</script>