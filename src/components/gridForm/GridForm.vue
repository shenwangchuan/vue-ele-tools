<!--数据表单 -->
<template>
  <el-form class="GridForm" :model="form" inline :size="size" :disabled="disabled">
    <el-form-item
      v-for="item in data"
      :key="item.name"
      :label="item.label"
      :label-width="item.labelWidth"
      :prop="item.name"
      :size="item.size"
      :rules="item.rules"
    >
      <!--输入框-->
      <el-input
        v-if="item.type==='input'"
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
      <el-select
        v-if="item.type==='select'"
        v-model="form[item.name]"
        :multiple="item.multiple"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :filterable="item.filterable"
        :allow-create="item.allowCreate"
        :collapse-tags="item.collapseTags"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="opt in item.options"
          :key="item.props ? opt[item.props.value] : opt[props.value]"
          :label="item.props ? opt[item.props.label] : opt[props.label]"
          :value="item.props ? opt[item.props.value] : opt[props.value]"
        ></el-option>
      </el-select>
      <!--日期框-->
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="form[item.name]"
        :type="item.dateType"
        :readonly="item.readonly"
        :disabled="item.disabled"
        :value-format="item.valueFormat"
        :placeholder="item.placeholder"
      ></el-date-picker>
      <!-- 级联选择器 -->
      <el-cascader
        v-if="item.type === 'cascader'"
        :options="item.options"
        :props="item.props"
        v-model="form[item.name]"
        :placeholder="item.placeholder"
      ></el-cascader>
      <!--值为String的级联选择器-->
      <ValCascader
        v-if="item.type === 'valCascader'"
        :options="item.options"
        :props="item.props"
        v-model="form[item.name]"
        :placeholder="item.placeholder"
      ></ValCascader>
      <!--下拉树-->
      <TreeSelect
        v-if="item.type === 'treeSelect'"
        v-model="form[item.name]"
        :options="item.options"
        :props="item.props"
        :placeholder="item.placeholder"
        :multiple="item.multiple"
        :filterable="item.filterable"
        :clearable="item.clearable"
        :disabled="item.disabled"
        :accordion="item.accordion"
        :check-strictly="item.checkStrictly"
      ></TreeSelect>
      <!--插槽-->
      <template v-if="item.type === 'slot'">
        <slot :name="item.name" :item="item" :form="form"></slot>
      </template>
    </el-form-item>

    <el-form-item :class="{'btns-block': btnBlock}">
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script type="es6">
  import ValCascader from '@/components/valCascader/ValCascader.vue'
  import TreeSelect from '@/components/treeSelect/TreeSelect.vue'
export default {
  name: "GridForm",
  components: {ValCascader,TreeSelect},
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    size: String,
    disabled: Boolean,
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    btnBlock: Boolean
  },
  data() {
    return {
      props: {
        //下拉框字段对应关系
        value: "value",
        label: "label"
      }
    };
  },
  created() {},
  computed: {
    form() {
      return this.model;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss" type="text/scss">
.GridForm {
  .btns-block {
    display: block;
    text-align: center;
  }
}
</style>
