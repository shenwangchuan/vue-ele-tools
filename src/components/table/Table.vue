<!--数据表格 （自动生成表头）-->
<template>
  <el-table class="v-el-table" :data="data"
            :height="height"
            :maxHeight="maxHeight"
            :stripe="stripe"
            :border="border"
            :size="size"
            :fit="fit"
            :showHeader="showHeader"
            :highlightCurrentRow="highlightCurrentRow"
            :row-key="rowKey"
            :showSummary="showSummary"
            :sumText="sumText"
            :summaryMethod="summaryMethod"
            :rowClassName="rowClassName"
            :rowStyle="rowStyle"
            :cellClassName="cellClassName"
            :cellStyle="cellStyle"
            :headerRowClassName="headerRowClassName"
            :headerRowStyle="headerRowStyle"
            :headerCellClassName="headerCellClassName"
            :headerCellStyle="headerCellStyle"
            :currentRowKey="currentRowKey"
            :emptyText="emptyText"
            :expandRowKeys="expandRowKeys"
            :defaultExpandAll="defaultExpandAll"
            :defaultSort="defaultSort"
            :tooltipEffect="tooltipEffect"
            :spanMethod="spanMethod"
            :selectOnIndeterminate="selectOnIndeterminate"
            :indent="indent"
            :treeProps="treeProps"
            :lazy="lazy"
            :load="load"
            @select="emitEvent('select',arguments)"
            @select-all="emitEvent('select-all',arguments)"
            @selection-change="emitEvent('selection-change',arguments)"
            @cell-mouse-enter="emitEvent('cell-mouse-enter',arguments)"
            @cell-mouse-leave="emitEvent('cell-mouse-leave',arguments)"
            @cell-click="emitEvent('cell-click',arguments)"
            @cell-dblclick="emitEvent('cell-dblclick',arguments)"
            @row-click="emitEvent('row-click',arguments)"
            @row-contextmenu="emitEvent('row-contextmenu',arguments)"
            @row-dblclick="emitEvent('row-dblclick',arguments)"
            @header-click="emitEvent('header-click',arguments)"
            @header-contextmenu="emitEvent('header-contextmenu',arguments)"
            @sort-change="emitEvent('sort-change',arguments)"
            @filter-change="emitEvent('filter-change',arguments)"
            @current-change="emitEvent('current-change',arguments)"
            @header-dragend="emitEvent('header-dragend',arguments)"
            @expand-change="emitEvent('expand-change',arguments)"
  >
    <template v-for="item in colData">
      <!--自定义列内容-->
      <el-table-column
        v-if="item.slot"
        :type="item.type"
        :index="item.index"
        :column-key="item.columnKey"
        :fixed="item.fixed"
        :align="item.align ? item.align : align"
        :header-align="item.headerAlign ? item.headerAlign : headerAlign"
        :width="item.width"
        :min-width="item.minWidth"
        :class-name="item.className"
        :label-class-name="item.labelClassName"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter"
        :render-header="item.renderHeader"
        :sortable="item.sortable"
        :sort-method="item.sortMethod"
        :sort-by="item.sortBy"
        :sort-orders="item.sortOrders"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflowTooltip"
        :selectable="item.selectable"
        :reserve-selection="item.reserveSelection"
        :filters="item.filters"
        :filter-placement="item.filterPlacement"
        :filter-multiple="item.filterMultiple"
        :filter-method="item.filterMethod"
        :filtered-value="item.filteredValue"
      >
        <template slot-scope="scope">
          <slot :name="item.prop" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <!--正常显示列内容-->
      <el-table-column
        v-else
        :type="item.type"
        :index="item.index"
        :column-key="item.columnKey"
        :fixed="item.fixed"
        :align="item.align ? item.align : align"
        :header-align="item.headerAlign ? item.headerAlign : headerAlign"
        :width="item.width"
        :min-width="item.minWidth"
        :class-name="item.className"
        :label-class-name="item.labelClassName"
        :label="item.label"
        :prop="item.prop"
        :formatter="item.formatter"
        :render-header="item.renderHeader"
        :sortable="item.sortable"
        :sort-method="item.sortMethod"
        :sort-by="item.sortBy"
        :sort-orders="item.sortOrders"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflowTooltip"
        :selectable="item.selectable"
        :reserve-selection="item.reserveSelection"
        :filters="item.filters"
        :filter-placement="item.filterPlacement"
        :filter-multiple="item.filterMultiple"
        :filter-method="item.filterMethod"
        :filtered-value="item.filteredValue"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script type="es6">
  export default {
    name: "v-el-table",
    props: {
      colData: { //表头数据
        type: Array,
        default() {
          return []
        }
      },
      align: String,
      headerAlign: String,
      // ===================el-table自带属性↓======================
      data: Array,
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
      rowKey: [String, Function],
      showSummary: Boolean,
      sumText: String,
      summaryMethod: Function,
      rowClassName: [String, Function],
      rowStyle: [Object, Function],
      cellClassName: [String, Function],
      cellStyle: [Object, Function],
      headerRowClassName: [String, Function],
      headerRowStyle: [Object, Function],
      headerCellClassName: [String, Function],
      headerCellStyle: [Object, Function],
      currentRowKey: [String, Number],
      emptyText: String,
      expandRowKeys: Array,
      defaultExpandAll: Boolean,
      defaultSort: Object,
      tooltipEffect: String,
      spanMethod: Function,
      selectOnIndeterminate: {
        type: Boolean,
        default: true
      },
      indent: Number,
      treeProps: {
        type: Object,
        default() {
          return {
            hasChildren: 'hasChildren',
            children: 'children'
          };
        }
      },
      lazy: Boolean,
      load: Function
    },
    data() {
      return {}
    },
    methods: {
      // 表格事件
      emitEvent(eventName, param) {
        this.$emit(eventName, param)
      }
    }
  }
</script>
