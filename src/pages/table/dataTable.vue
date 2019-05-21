<!--数据表格 -->
<template>
  <div class="dataTable">
    <el-card shadow="never" header="grid-table">
      <p>根据提供的数据快速生成表格，相对于element ui 的el-table组件，需传入表头数据数组，支持自定义和格式化列内容</p>
      <grid-table :data="tableData" :col-data="tableCol">
        <template slot="date" slot-scope="scope">
          <div><i class="el-icon-time"></i> {{scope.row.date}}</div>
        </template>
      </grid-table>
    </el-card>
    <el-card shadow="never" header="属性">
      <grid-table :data="attrTableData" :col-data="global_.attrTableCol" row-key="index"></grid-table>
    </el-card>
    <el-card shadow="never" header="事件">
      <grid-table :data="eventTableData" :col-data="global_.eventTableCol"></grid-table>
    </el-card>
  </div>
</template>

<script type="es6">
  import GridTable from '@/components/gridTable/GridTable.vue'
  export default {
    name: "dataTable",
    components: { GridTable },
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
        tableCol:[],

        attrTableData:[],//属性
        eventTableData:[], //事件
      }
    },
    created() {
      this.initTestData()
      this.initAttrTable()
      this.initEventTable()
    },
    methods: {
      formatterName(row, column, cellValue, index) {
        return cellValue+index
      },
      initTestData() {
        this.tableCol = [
          {type:'index',label: '#'},
          {type:'selection'},
          {label: '日期', prop:'date',slot: true},
          {label: '姓名', prop:'name',formatter: this.formatterName},
          {label: '地址', prop:'address'},
        ]
      },
      initAttrTable() {
        const addIndex = (arr,pre)=>{
          const preIndex = pre ? pre+'-' : '';
          arr.forEach(value=>{
            value.index = preIndex + value.param
          })
        }
        const colAttr = [
          {param:'type',description:'对应列的类型',type:'string',optional:'selection/index/expand',default:'—'},
          {param:'label',description:'显示的标题',type:'string',optional:'—',default:'—'},
          {param:'prop',description:'对应列内容的字段名',type:'string',optional:'—',default:'—'},
          {param:'width',description:'对应列的宽度',type:'string',optional:'—',default:'—'},
          {param:'min-width',description:'对应列的最小宽度',type:'string',optional:'—',default:'—'},
          {param:'fixed',description:'列是否固定在左侧或者右侧，true 表示固定在左侧',type:'string, boolean',optional:'true, left, right',default:'—'},
          {param:'align',description:'对齐方式',type:'string',optional:'left/center/right',default:'left'},
          {param:'header-align',description:'表头对齐方式，若不设置该项，则使用表格的对齐方式',type:'string',optional:'left/center/right',default:'—'},
          {param:'formatter',description:'用来格式化内容',type:'Function(row, column, cellValue, index)',optional:'—',default:'—'},
          {param:'slot',description:'该列是否以插槽形式自定义显示内容，为true则以该列prop字段的值为插槽名定义显示内容',type:'boolean',optional:'—',default:'false'},
        ]
        addIndex(colAttr,'col')
        // 属性表格内容
       const attrTable = [
          {param:'col-data',description:'表头数据',type:'array',optional:'—',default:'[]',children:colAttr},
          {param:'align',description:'对齐方式',type:'string',optional:'left/center/right',default:'left'},
          {param:'header-align',description:'表头对齐方式，若不设置该项，则使用表格的对齐方式',type:'string',optional:'left/center/right',default:'—'},
          {param:'data',description:'显示的数据',type:'array',optional:'—',default:'[]'},
          {param:'height',description:'Table 的高度，默认为自动高度',type:'string/number',optional:'—',default:'—'},
          {param:'max-height',description:'Table 的最大高度',type:'string/number',optional:'—',default:'—'},
          {param:'stripe',description:'是否为斑马纹 table',type:'boolean',optional:'—',default:'false'},
          {param:'border',description:'是否带有纵向边框',type:'boolean',optional:'—',default:'false'},
          {param:'size',description:'Table 的尺寸',type:'string',optional:'medium / small / mini',default:'—'},
          {param:'fit',description:'列的宽度是否自撑开',type:'boolean',optional:'—',default:'true'},
          {param:'show-header',description:'是否显示表头',type:'boolean',optional:'—',default:'true'},
          {param:'highlight-current-row',description:'是否要高亮当前行',type:'boolean',optional:'—',default:'false'},
          {param:'row-key',description:'行数据的 Key，树形数据必填',type:'string',optional:'—',default:'—'},
        ]
        addIndex(attrTable)
        this.attrTableData = attrTable
      },
      initEventTable() {
        this.eventTableData = [
          {name:'select',description:'当用户手动勾选数据行的 Checkbox 时触发的事件',param:'selection, row'},
          {name:'cell-click',description:'当某个单元格被点击时会触发该事件',param:'row, column, cell, event'},
          {name:'cell-dblclick',description:'当某个单元格被双击时会触发该事件',param:'row, column, cell, event'},
          {name:'row-click',description:'当某一行被点击时会触发该事件',param:'row, column, event'},
          {name:'row-contextmenu',description:'当某一行被鼠标右键点击时会触发该事件',param:'row, column, event'},
          {name:'row-dblclick',description:'当某一行被双击时会触发该事件',param:'row, column, event'},
          {name:'current-change',description:'当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',param:'currentRow, oldCurrentRow'},
        ]
      }
    }
  }
</script>
