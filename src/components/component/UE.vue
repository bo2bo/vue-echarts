<template>
  <div class="UE">
    <div id="editor" style="width:100%;height:120px;">
    </div>
  </div>
</template>
<script>
export default {
  name: "ue",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    // 实例化editor编辑器
    this.editor = window.UE.getEditor("editor");
    window.UE.Editor.prototype._bkGetActionUrl = window.UE.Editor.prototype.getActionUrl;
    window.UE.Editor.prototype.getActionUrl = function(action) {
        console.log(action);
        if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
            return 'http://192.168.1.20:8101/util/newsImgUpload.do';//此处写自定义的图片上传路径
        } else if (action == 'uploadvideo') {
            return 'http://a.b.com/video.php';
        } else {
            return this._bkGetActionUrl.call(this, action);
        }
    }
    //设置编辑器默认内容
    this.editor.addListener("ready", () => {
      this.editor.setContent(this.value);
    });
  },
  methods: {
    //获取编辑器中的内容
    getUEContent() {
      return this.editor.getContent();
    }
  },
  destroyed() {
    // 将editor进行销毁
    this.editor.destroy();
  }
};
</script>