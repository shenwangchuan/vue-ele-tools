<!--数据表格 -->
<template>
  <div class="dataTable">
    <el-card shadow="never" header="grid-table">
      <grid-table :data="tableData" :col-data="tableCol">
        <template slot="date" slot-scope="scope">
          <div><i class="el-icon-time"></i> {{scope.row.date}}</div>
        </template>
      </grid-table>
    </el-card>
    <el-card shadow="never" header="属性">
      <grid-table :data="attrTableData" :col-data="global_.attrTableCol" row-key="index"></grid-table>
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

        attrTableData:[]
      }
    },
    created() {
      this.initTestData()
      this.initData()
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
      initData() {
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
      }
    }
  }
</script>
