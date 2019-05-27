import VElTable from './table/GridTable.vue'
import VElForm from './form/GridForm.vue'
import VElTreeSelect from './treeSelect/TreeSelect.vue'
import VElValCascader from './valCascader/ValCascader.vue'
import VElPagination from './pagination/Pagination.vue'

export default {
  install(Vue) {
    Vue.component('v-el-table',VElTable)
    Vue.component('v-el-form',VElForm)
    Vue.component('v-el-tree-select',VElTreeSelect)
    Vue.component('v-el-val-cascader',VElValCascader)
    Vue.component('v-el-pagination',VElPagination)
  }
}

export {
  VElTable, VElForm, VElTreeSelect, VElValCascader, VElPagination
}
