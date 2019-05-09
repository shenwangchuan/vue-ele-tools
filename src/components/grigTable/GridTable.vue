<!--带th的表格 -->
<template>
  <el-table :data="data" :row-key="rowKey">
    <template v-for="item in colData">
      <!--自定义列内容-->
      <el-table-column
        v-if="item.slot"
        :type="item.type"
        :fixed="item.fixed"
        :width="item.width"
        :align="item.align"
        :min-width="item.minWidth"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter">
        <template slot-scope="scope">
          <slot :name="item.prop" :data="scope.row"></slot>
        </template>
      </el-table-column>
      <!--正常显示列内容-->
      <el-table-column
        v-else
        :type="item.type"
        :fixed="item.fixed"
        :width="item.width"
        :align="item.align"
        :min-width="item.minWidth"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter"/>
    </template>
  </el-table>
</template>

<script type="es6">
  export default {
    name: "HeadTable",
    props: {
      colData: { //表头数据
        type: Array,
        default() {return []}
      },
      data: { //表格内容数据
        type: Array,
        default() {return []}
      },
      rowKey: {
        type: String
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .HeadTable {
  }
</style>
