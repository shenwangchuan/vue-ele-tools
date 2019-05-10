<!--下拉树页面 -->
<template>
  <div class="SelectTree">
    <el-card shadow="never" header="tree-select">
      <el-form :model="form" inline size="small">
        <el-form-item label="单选">
          <tree-select v-model="form.val" :options="treeOption" filterable></tree-select>
        </el-form-item>
        <el-form-item label="多选">
          <tree-select v-model="form.vals" :options="treeOption" multiple filterable></tree-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="never" header="属性">
      <GridTable :data="tableData" :col-data="global_.attrTableCol" row-key="param"></GridTable>
    </el-card>
  </div>
</template>

<script type="es6">
  import TreeSelect from '@/components/treeSelect/TreeSelect.vue'
  import GridTable from '@/components/grigTable/GridTable.vue'
  export default {
    name: "SelectTree",
    components: {TreeSelect,GridTable},
    data() {
      return {
        form: {
          val:'',
          vals:[]
        },
        treeOption: [ //测试数据
          {
            label: '重庆',
            value: 'chongqing',
            children: [
              {
                label: '沙坪坝',
                value: 'shapingba',
              },{
                label: '九龙坡',
                value: 'jiulongpo',
              },{
                label: '璧山',
                value: 'bishan',
              }
            ]
          },
          {
            label: '四川',
            value: 'sichuan',
            children: [
              {
                label: '成都',
                value: 'chengdu',
                children: [
                  {
                    label: '金牛区',
                    value: 'jinniu',
                  },{
                    label: '成华区',
                    value: 'chenghua',
                  }
                ]
              },{
                label: '绵阳',
                value: 'mianyang',
              },{
                label: '达州',
                value: 'dazhou',
              },{
                label: '眉山',
                value: 'meishan',
              },{
                label: '自贡',
                value: 'zigong',
              }
            ]
          },
        ],

        tableData:[],
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        // 表格内容
        this.tableData = [
          {param:'v-model',description:'绑定值',type:'string/number/array',optional:'—',default:'—'},
          {param:'options',description:'选项数据',type:'array',optional:'—',default:'[]'},
          {param:'placeholder',description:'输入框占位符',type:'string',optional:'—',default:'请选择'},
          {param:'props',description:'树节点配置选项，具体看下表',type:'object',optional:'—',default:'—',children:[
              {param:'value',description:'指定节点实际值为节点对象的某个属性值',type:'string',optional:'—',default:'value'},
              {param:'label',description:'指定节点显示值为节点对象的某个属性值',type:'string',optional:'—',default:'label'},
              {param:'children',description:'指定子树为节点对象的某个属性值',type:'string',optional:'—',default:'children'},
            ]},
          {param:'multiple',description:'是否可多选',type:'boolean',optional:'—',default:'false'},
          {param:'filterable',description:'是否可搜索',type:'boolean',optional:'—',default:'false'},
          {param:'clearable',description:'是否可清空',type:'boolean',optional:'—',default:'true'},
          {param:'disabled',description:'是否禁用',type:'boolean',optional:'—',default:'false'},
          {param:'accordion',description:'是否每次只展开一个同级树节点',type:'boolean',optional:'—',default:'false'},
          {param:'check-strictly',description:'父子节点选择状态是否不互相关联',type:'boolean',optional:'—',default:'false'},
          {param:'size',description:'输入框尺寸',type:'string',optional:'medium/small/mini',default:'—'},
        ]
      }
    }
  }
</script>
