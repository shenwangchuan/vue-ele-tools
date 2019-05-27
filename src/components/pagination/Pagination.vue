<!--分页 -->
<template>
  <el-pagination class="Pagination"
    :background="background"
    :current-page.sync="currentPage"
    :page-size.sync="pageSize"
    :layout="layout"
    :page-sizes="pageSizes"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"/>
</template>

<script type="es6">
  export default {
    name: "v-el-pagination",
    props: {
      total: {
        required: true,
        type: Number
      },
      page: {
        type: Number,
        default: 1
      },
      limit: {
        type: Number,
        default: 20
      },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper'
      },
      background: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentPage: {
        get() {
          return this.page
        },
        set(val) {
          this.$emit('update:page', val)
        }
      },
      pageSize: {
        get() {
          return this.limit
        },
        set(val) {
          this.$emit('update:limit', val)
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('pagination', { page: this.currentPage, limit: val })
      },
      handleCurrentChange(val) {
        this.$emit('pagination', { page: val, limit: this.pageSize })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .Pagination {
    text-align: center;
    padding: 5px 10px;
  }
</style>
