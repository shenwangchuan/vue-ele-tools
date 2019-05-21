<!--数据表格 （自动生成表头）-->
<template>
  <el-table :data="data"
            :height="height"
            :maxHeight="maxHeight"
            :stripe="stripe"
            :border="border"
            :size="size"
            :fit="fit"
            :showHeader="showHeader"
            :highlightCurrentRow="highlightCurrentRow"
            :row-key="rowKey"
            @select="emitEvent('select',arguments)"
            @cell-click="emitEvent('cell-click',arguments)"
            @cell-dblclick="emitEvent('cell-dblclick',arguments)"
            @row-click="emitEvent('row-click',arguments)"
            @row-contextmenu="emitEvent('row-contextmenu',arguments)"
            @row-dblclick="emitEvent('row-dblclick',arguments)"
            @current-change="emitEvent('current-change',arguments)"
  >
    <template v-for="item in colData">
      <!--自定义列内容-->
      <el-table-column
        v-if="item.slot"
        :type="item.type"
        :fixed="item.fixed"
        :align="item.align ? item.align : align"
        :header-align="item.headerAlign ? item.headerAlign : headerAlign"
        :width="item.width"
        :min-width="item.minWidth"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter">
        <template slot-scope="scope">
          <slot :name="item.prop" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <!--正常显示列内容-->
      <el-table-column
        v-else
        :type="item.type"
        :fixed="item.fixed"
        :align="item.align ? item.align : align"
        :header-align="item.headerAlign ? item.headerAlign : headerAlign"
        :width="item.width"
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
      align: String,
      headerAlign: String,
      // ===================el-table自带属性↓======================
      data: { //表格内容数据
        type: Array,
        default() {return []}
      },
      height: [String, Number],
      maxHeight: [String, Number],
      stripe: Boolean,
      border: Boolean,
      size: String,
      fit: {
        type: Boolean,
        default: true
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      highlightCurrentRow: Boolean,
      rowKey: String,
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      // 表格事件
      emitEvent(eventName,param) {
        this.$emit(eventName,param)
      }
    }
  }
</script>
