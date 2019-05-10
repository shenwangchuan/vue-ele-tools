<!--表单 -->
<template>
  <div class="dataForm">

  </div>
</template>

<script type="es6">
  export default {
    name: "dataForm",
    data() {
      return {
        formData:[]
      }
    },
    created() {
      this.formData = [
        {type:'input',name:'name',label:'姓名',value:'1' }
      ]
    },
    methods: {}
  }
</script>

<style scoped lang="scss" type="text/scss">
  .dataForm {
  }
</style>
