import VElTable from './gridTable/GridTable.vue'
import VElForm from './gridForm/GridForm.vue'
import VElTreeSelect from './treeSelect/TreeSelect.vue'
import VElValCascader from './valCascader/ValCascader.vue'

export default {
  install(Vue) {
    Vue.component('v-el-table',VElTable)
    Vue.component('v-el-form',VElForm)
    Vue.component('v-el-tree-select',VElTreeSelect)
    Vue.component('v-el-val-cascader',VElValCascader)
  }
}

export {
  VElTable, VElForm, VElTreeSelect, VElValCascader
}
