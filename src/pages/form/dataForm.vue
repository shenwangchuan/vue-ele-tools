<!--表单 -->
<template>
  <div class="dataForm">
    <el-card shadow="never" header="grid-form 数据表单">
      <GridForm ref="gridForm" :model="form" :data="formData" size="small">
        <el-button @click="getFormVal">提交</el-button>
        <el-input-number slot="age" slot-scope="scope" v-model="scope.form.age" :min="0" :max="99"></el-input-number>
      </GridForm>
    </el-card>
    <el-card shadow="never" header="属性">
      <grid-table :data="tableData" :col-data="global_.attrTableCol" row-key="index"></grid-table>
    </el-card>
  </div>
</template>

<script type="es6">
  import GridForm from '@/components/gridForm/GridForm.vue'
  import GridTable from '@/components/gridTable/GridTable.vue'
  export default {
    name: "dataForm",
    components: { GridForm, GridTable },
    data() {
      return {
        form: {
          sex:1,
          age:12
        },
        formData:[],
        tableData:[]
      }
    },
    created() {
      const sexOptions = [
        {value:1,name:'男'},
        {value:2,name:'女'}
      ]
      this.formData = [
        {type:'input',name:'name',label:'姓名',rules:[{max:4,message:'姓名长度不能超过4'}] },
        {type:'select',name:'sex',label:'性别',options: sexOptions,props:{value:'value',label:'name'}},
        {type:'date',name:'birthday',label:'出生日期',dateType:'date' },
        {type:'slot',name:'age',label:'年龄'}
      ]
      this.initAttrTable()
    },
    methods: {
      initAttrTable() {
        const addIndex = (arr,pre)=>{
          const preIndex = pre ? pre+'-' : '';
          arr.forEach(value=>{
            value.index = preIndex + value.param
          })
        }

        const itemAttr = [
          {param:'type',description:'组件类型',type:'string',optional:'input/select/date/slot',default:'—'},
          {param:'name',description:'组件对应表单字段',type:'string',optional:'—',default:'—'},
          {param:'label',description:'组件显示标签',type:'string',optional:'—',default:'—'},
          {param:'labelWidth',description:'表单域标签的的宽度',type:'string',optional:'—',default:'—'},
          {param:'size',description:'组件尺寸',type:'string',optional:'medium / small / mini',default:'—'},
          {param:'rules',description:'表单字段验证规则',type:'array',optional:'—',default:'—'},
          {param:'placeholder',description:'组件占位符',type:'string',optional:'—',default:'—'},
        ]
        addIndex(itemAttr,'col')
        const attrTable = [
          {param:'data',description:'表单数据',type:'array',optional:'—',default:'[]',children:itemAttr},
          {param:'size',description:'用于控制该表单内组件的尺寸',type:'string',optional:'medium / small / mini',default:'—'},
          {param:'disabled',description:'是否禁用该表单内的所有组件',type:'boolean',optional:'—',default:'false'},
          {param:'btn-block',description:'表单按钮是否单独一行并居中',type:'boolean',optional:'—',default:'false'},
        ]
        addIndex(attrTable)
        this.tableData = attrTable
      },
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .dataForm {
  }
</style>
