<!--下拉树页面 -->
<template>
  <div class="SelectTree">
    <el-form :model="form" inline size="small">
      <el-form-item label="单选">
        <tree-select v-model="form.val" :options="treeOption" filterable></tree-select>
      </el-form-item>
      <el-form-item label="多选">
        <tree-select v-model="form.vals" :options="treeOption" multiple filterable></tree-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="es6">
  import TreeSelect from '@/components/treeSelect/TreeSelect.vue'
  export default {
    name: "SelectTree",
    components: {TreeSelect},
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
        ]
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .SelectTree {
  }
</style>
