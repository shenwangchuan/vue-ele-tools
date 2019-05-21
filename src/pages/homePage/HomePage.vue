<!--首页 -->
<template>
  <el-container class="HomePage">
    <el-header>
      <img src="./logo.png"/>
      自定义组件
    </el-header>
    <el-container>
      <!--导航栏-->
      <el-aside style="width: 200px">
        <el-menu :default-openeds="['1','2']" :default-active="$route.path" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-s-fold"></i>表单</template>
            <el-menu-item index="/SelectTree">下拉树</el-menu-item>
            <el-menu-item index="/dataForm">数据表单</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-s-fold"></i>表格</template>
            <el-menu-item index="/dataTable">数据表格</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-scrollbar style="height: 100%">
          <div class="content">
            <router-view/>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="es6">
  export default {
    name: "HomePage",
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .HomePage {
    width: 100%;
    height: 100%;
    .el-header {
      border-bottom: solid 1px #e6e6e6;
      font-size: 24px;
      color: #409eff;
      display: flex;
      align-items: center;
      +.el-container {
        height: calc(100% - 60px);
      }
    }
    .el-aside {
      border-right: solid 1px #e6e6e6;
      overflow-x: hidden;
      .el-menu {
        width: 100%;
        border: none;
      }
    }
    .el-main {
      padding: 0;
      .content {
        padding: 20px;
        /deep/ >div{
          >.el-card+.el-card {
            margin-top: 20px;
          }
          .el-card__body>p {
            padding-bottom: 10px;
            color: #606266;
            font-size: 14px;
          }
        }
      }
      .el-scrollbar /deep/ .el-scrollbar__wrap {
        overflow-x: auto;
      }
    }
  }
</style>
