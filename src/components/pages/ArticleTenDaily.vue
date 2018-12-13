<template>
  <div class="container">
    <el-form
      :inline="true"
      :model="form"
    >
      <el-form-item label="标题">
        <el-input
          v-model="form.title"
          placeholder="请输入标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input
          v-model="form.author"
          placeholder="请输入作者"
        ></el-input>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select
          v-model="form.state"
          placeholder="请选择发布状态"
        >
          <el-option
            label="未发布"
            value="false"
          ></el-option>
          <el-option
            label="已发布"
            value="true"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSearch"
        >查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="onAdd"
        >新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success">每日十条</el-button>
      </el-form-item>
    </el-form>
    <table-com
      :table-data="tableData"
      :table-lable="tableLable"
      :table-option="tableOption"
      :istrue="true"
      @handleButton="handleButton"
    ></table-com>
    <div
      align="center"
      class="pagination"
    >
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
    <!-- 新增对话框 -->
    <el-dialog
      title="添加文章"
      :visible.sync="addFormVisible"
      top="10vh"
    >
      <el-form :rules="addFormRules" :model="addForm">
        <el-form-item
          label="文章标题"
          label-width="120px"
          prop="infoTitle"
        >
          <el-input
            v-model="addForm.infoTitle"
            autoComplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="文章作者"
          label-width="120px"
          prop="author"
        >
          <el-input
            v-model="addForm.author"
            autoComplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          label-width="120px"
          prop="infoSummary"
        >
          <el-input
            v-model="addForm.infoSummary"
            :rows="3"
            type="textarea"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="文章标题图片"
          label-width="120px"
        >
          <el-upload
            ref="upload"
            action=""
            :auto-upload="false"
            :on-change="onChange"
            :show-file-list="false"
          >
            <el-button
              size="small"
              type="primary"
            >点击上传</el-button>
          </el-upload>
          <img
            style="width: 150px; height: 150px;"
            :src="addForm.imageUrl"
            alt=""
          >
        </el-form-item>
        <el-form-item
          label="文章内容"
          label-width="120px"
        >
          <el-button
            size="small"
            type="primary"
            @click="upLoaArticle"
          >点击上传</el-button>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addArticle"
        >确 定</el-button>
      </div>
    </el-dialog>
    <!-- 文章对话框 -->
    <el-dialog
      title="添加文章"
      :visible.sync="articleFormVisible"
    >
      <UEditor :config="config" ref="ueditor"></UEditor>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="articleFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="getArticleCon"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import tableCom from "./../component/table.vue";
import UEditor from "./../component/ueditor.vue";
import qs from "qs";
export default {
  components: {
    tableCom,
    UEditor
  },
  data: function() {
    return {
      url: {
        uploadImgUrl: this.GLOBAL.url + "util/uploadImg",
        addArticleUrl: this.GLOBAL.url + "news/save.do"
      },
      config: {
            autoHeightEnabled: false,
            autoFloatEnabled: true,
            initialContent:'请输入内容',
            autoClearinitialContent:true,
            initialFrameWidth: null,
            initialFrameHeight: 450,
            BaseUrl: '',
            UEDITOR_HOME_URL: 'static/ueditor/'
          },
      tableData: [
        {
          date: "2016-05-02",
          author: "王小虎",
          infoTitle: "上海市普陀区金沙江路 1518 弄",
          state: "发布"
        },
        {
          date: "2016-05-04",
          author: "王小虎",
          infoTitle: "上海市普陀区金沙江路 1517 弄",
          state: "发布"
        },
        {
          date: "2016-05-01",
          author: "王小虎",
          infoTitle: "上海市普陀区金沙江路 1519 弄",
          state: "发布"
        },
        {
          date: "2016-05-03",
          author: "王小虎",
          infoTitle: "上海市普陀区金沙江路 1516 弄",
          state: "未发布"
        }
      ],
      tableLable: [
        { lable: "标题", param: "infoTitle" },
        { lable: "摘要", param: "infoSummary" },
        { lable: "主题图片", param: "titleImg" },
        { lable: "内容", param: "infoContent" },
        { lable: "发布时间", param: "date" },
        { lable: "作者", param: "author", width: "50" },
        { lable: "状态", param: "state", width: "50" }
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
      // 搜索表单
      form: {
        title: "",
        author: "",
        state: ""
      },
      // 新增对话框
      addFormVisible: false,
      articleFormVisible: false,
      addForm: {
        infoTitle: "",
        infoSummary: "",
        titleImg: "",
        infoContent: "",
        author: "",
        imageUrl: "",
        infoType: "news_top_ten"
      },
      addFormRules:{
        infoTitle: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
        ],
        infoSummary: [
          { required: true, message: '请输入文章摘要', trigger: 'blur' },
          { min: 0, max: 150, message: '长度在 0 到 150 个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: "请输入作者", trigger: "blur" }
        ],
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
    onSearch() {
      alert("123");
    },
    onAdd() {
      var self = this;
      self.addFormVisible = true;
    },
    // 图片处理
    onChange(file, fileList) {
      let self = this,
        fd = new FormData();
      fd.append("imgFile", file.raw);
      self.$axios
        .post(self.url.uploadImgUrl, fd)
        .then(res => {
          if (res.data.success) {
            self.addForm.imageUrl = res.data.img_url;
            self.$message({
              message: "上传成功",
              type: "success"
            });
          } else {
            self.$message({
              message: "上传失败",
              type: "danger"
            });
          }
        })
        .catch(err => {
          console.log(err);
          console.log("上传图片出错了。。。");
        });
    },
    upLoaArticle() {
      var self = this;
      self.articleFormVisible = true;
    },
    getArticleCon() {
      var self = this;
      self.addForm.infoContent = self.$refs.ueditor.getUEContent();
      self.articleFormVisible = false;
    },
    addArticle(){
      let self = this;
      debugger;
      self.$axios
        .post(
          self.url.addArticleUrl,
          qs.stringify({
            infoTitle: self.addForm.infoTitle,
            infoSummary: self.addForm.infoSummary,
            infoContent:self.addForm.infoContent,
            infoType:self.addForm.infoType,
            author:self.addForm.author
          })
        )
        .then(function(res) {
          if (res.data.status == "200") {
            self.tableData = res.data.body;
            self.total = res.data.total;
          } else if (res.data.resultCode == "500") {
            alert("暂时没有数据！");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
      self.addFormVisible = false;
    }
  },
  mounted() {}
};
</script>
<style scoped>
.pagination {
  margin-top: 20px;
}
</style>
