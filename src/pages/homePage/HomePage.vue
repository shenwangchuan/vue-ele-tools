<!--首页 -->
<template>
  <el-container class="HomePage">
    <!--导航栏-->
    <el-aside style="width: 200px">
      <el-menu :default-openeds="['1']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>表单</template>
          <el-menu-item index="/SelectTree">下拉树</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
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
    .el-aside {
      border-right: solid 1px #e6e6e6;
      .el-menu {
        border: none;
      }
    }
  }
</style>
