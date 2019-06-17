<!--数据表格 -->
<template>
  <div class="dataTable">
    <el-card shadow="never" header="v-el-table">
      <p>根据提供的数据快速生成表格，相对于element ui 的el-table组件，需传入表头数据数组，支持自定义和格式化列内容</p>
      <v-el-table :data="tableData" border :col-data="tableCol">
        <template slot="date" slot-scope="scope">
          <i class="el-icon-time"></i> {{scope.row.date}}
        </template>
      </v-el-table>
    </el-card>
    <el-card shadow="never" header="属性">
      <p>列举自定义属性，其他属性参照el-table</p>
      <v-el-table :data="attrTableData" :col-data="global_.attrTableCol" row-key="index"></v-el-table>
    </el-card>
    <el-card shadow="never" header="事件">
      <p>参照el-table事件</p>
    </el-card>
  </div>
</template>

<script type="es6">
  import {VElTable} from '@/components/index'

  export default {
    name: "dataTable",
    components: {VElTable},
    data() {
      return {
        // 测试数据
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        tableCol: [],

        attrTableData: [],//属性
      }
    },
    created() {
      this.initTestData()
      this.initAttrTable()
    },
    methods: {
      formatterName(row, column, cellValue, index) {
        return cellValue + index
      },
      initTestData() {
        this.tableCol = [
          {type: 'index', label: '#'},
          {type: 'selection'},
          {label: '日期', prop: 'date', slot: true},
          {label: '姓名', prop: 'name', formatter: this.formatterName},
          {label: '地址', prop: 'address'},
        ]
      },
      initAttrTable() {
        const addIndex = (arr, pre) => {
          const preIndex = pre ? pre + '-' : '';
          arr.forEach(value => {
            value.index = preIndex + value.param
          })
        }
        const colAttr = [
          {
            param: 'slot',
            description: '该列是否以插槽形式自定义显示内容，为true则以该列prop字段的值为插槽名定义显示内容',
            type: 'boolean',
            optional: '—',
            default: 'false'
          },
          {param: '—', description: '其他列属性参照el-table-column', type: '—', optional: '—', default: '—'},
        ]
        addIndex(colAttr, 'col')
        // 属性表格内容
        const attrTable = [
          {param: 'col-data', description: '表头数据', type: 'array', optional: '—', default: '[]', children: colAttr},
          {param: 'align', description: '对齐方式', type: 'string', optional: 'left/center/right', default: 'left'},
          {
            param: 'header-align',
            description: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
            type: 'string',
            optional: 'left/center/right',
            default: '—'
          },
        ]
        addIndex(attrTable)
        this.attrTableData = attrTable
      },
    }
  }
</script>
