<!--数据表单 -->
<template>
  <el-form class="GridForm" :model="form" inline :size="size" :disabled="disabled">
    <el-form-item v-for="item in data"
                  :key="item.name"
                  :label="item.label"
                  :label-width="item.labelWidth"
                  :prop="item.name"
                  :size="item.size"
                  :rules="item.rules"
    >
      <!--输入框-->
      <el-input v-if="item.type==='input'"
                :type="item.inputType"
                v-model="form[item.name]"
                :placeholder="item.placeholder"
                :readonly="item.readonly"
                :disabled="item.disabled"
                :clearable="item.clearable"
                :show-password="item.showPassword"
                :autosize="item.autosize"
                :minlength="item.minlength"
                :maxlength="item.maxlength"
                :rows="item.rows"
                :show-word-limit="item.showWordLimit"
      />
      <!--下拉框-->
      <el-select v-if="item.type==='select'"
                 v-model="form[item.name]"
                 :placeholder="item.placeholder">
        <el-option
          v-for="opt in item.options"
          :key="item.props ? opt[item.props.value] : opt[props.value]"
          :label="item.props ? opt[item.props.value] : opt[props.value]"
          :value="item.props ? opt[item.props.value] : opt[props.value]">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script type="es6">
  export default {
    name: "GridForm",
    props: {
      data: {
        type: Array,
        default() { return [] }
      },
      size: String,
      disabled: Boolean
    },
    data() {
      return {
        form: {},
        props:{
          value:'value',
          label:'label'
        }
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .GridForm {
  }
</style>
