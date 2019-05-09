<!--数据表格 -->
<template>
  <div class="dataTable">
    <el-card shadow="never" header="属性 grid-table" style="margin-top: 20px">
      <grid-table :data="tableData" :col-data="global_.attrTableCol" row-key="param"></grid-table>
    </el-card>
  </div>
</template>

<script type="es6">
  import GridTable from '@/components/grigTable/GridTable.vue'
  export default {
    name: "dataTable",
    components: { GridTable },
    data() {
      return {
        tableData:[]
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        // 表格内容
        this.tableData = [
          {param:'data',description:'显示的数据',type:'array',optional:'—',default:'[]'},
          {param:'col-data',description:'表头数据',type:'array',optional:'—',default:'[]'},
          {param:'row-key',description:'行数据的 Key，属性数据必填',type:'string',optional:'—',default:''},
        ]
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .dataTable {
  }
</style>
