<!--级联选择器（值不为路径） -->
<template>
  <el-cascader
    class="ValCascader"
    v-model="cascaderVal"
    :placeholder="placeholder"
    :options="options"
    expand-trigger="hover"
    :show-all-levels="false"
    :change-on-select="changeOnSelect"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
  ></el-cascader>
</template>

<script type="es6">
  export default {
    name: "v-el-val-cascader",
    props: {
      value: String,
      placeholder: String,
      options: {
        type: Array,
        default() { return [] }
      },
      props: {
        type: Object,
        default() {
          return {
            value: 'value',
            label: 'label',
            children: 'children',
            disabled: 'disabled',
          }
        }
      },
      changeOnSelect: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: true
      },
      filterable: {
        type: Boolean,
      },
    },
    data() {
      return {}
    },
    created() {
    },
    computed: {
      cascaderVal: {
        get() {
          let path = []
          if (this.value) {
            const prop = {
              code: this.props.value,
              name: this.props.label,
              children: this.props.children,
            }
            path = this.getPath(this.value,this.options,prop)
          }
          return path
        },
        set(val) {
          this.$emit('input',val[val.length - 1])
        }
      }
    },
    methods: {
      /**
       * 根据节点查找节点路径
       * @param code 节点code值
       * @param tree 树
       * @param prop 字段对应关系
       * @returns {*} 返回的路径
       */
      getPath(code,tree,prop) {
        // 默认字段对应关系
        const defaultProp = {
          code: 'code',
          name: 'name',
          children: 'children'
        };
        const props = Object.assign(defaultProp,prop);
        //定义变量保存当前结果路径
        let temppath = [];
        try {
          const findPath = node=>{
            temppath.push(node[props.code]);
            //找到符合条件的节点，通过throw终止掉递归
            if (node[props.code] === code) {
              throw (temppath);
            } else {
              const children = node[props.children];
              if (children && children.length > 0) {
                for (let i = 0; i < children.length; i++) {
                  findPath(children[i]);
                }
                //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
                temppath.pop();
              } else {
                //找到叶子节点时，删除路径当中的该叶子节点
                temppath.pop();
              }
            }
          };
          if (Array.isArray(tree)) {
            if (tree.length>0) {
              tree.forEach(value=>{
                findPath(value)
              })
            }
          } else {
            findPath(tree)
          }
        }
        catch (path) {
          return path;
        }
      },
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .ValCascader {
  }
</style>
