webpackJsonp([0],{"++vu":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"dataTable",components:{GridTable:e("7CEt").a},data:function(){return{tableData:[]}},created:function(){this.initData()},methods:{initData:function(){this.tableData=[{param:"data",description:"显示的数据",type:"array",optional:"—",default:"[]"},{param:"col-data",description:"表头数据",type:"array",optional:"—",default:"[]"},{param:"row-key",description:"行数据的 Key，属性数据必填",type:"string",optional:"—",default:""}]}}},n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dataTable"},[a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{shadow:"never",header:"属性 grid-table"}},[a("grid-table",{attrs:{data:this.tableData,"col-data":this.global_.attrTableCol,"row-key":"param"}})],1)],1)},staticRenderFns:[]};var i=e("VU/8")(r,n,!1,function(t){e("22J1")},"data-v-b3f190ae",null);a.default=i.exports},"22J1":function(t,a){},"32vi":function(t,a){},"7CEt":function(t,a,e){"use strict";var r={name:"HeadTable",props:{colData:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},rowKey:{type:String}},data:function(){return{}},created:function(){},methods:{}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-table",{attrs:{data:t.data,"row-key":t.rowKey}},[t._l(t.colData,function(a){return[a.slot?e("el-table-column",{attrs:{type:a.type,fixed:a.fixed,width:a.width,align:a.align,"min-width":a.minWidth,label:a.label,prop:a.prop,formatter:a.formatter},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t(a.prop,null,{data:e.row})]}}],null,!0)}):e("el-table-column",{attrs:{type:a.type,fixed:a.fixed,width:a.width,align:a.align,"min-width":a.minWidth,label:a.label,prop:a.prop,formatter:a.formatter}})]})],2)},staticRenderFns:[]};var i=e("VU/8")(r,n,!1,function(t){e("32vi")},"data-v-c93eb26a",null);a.a=i.exports}});
//# sourceMappingURL=0.b4c35e1e28051bbbc850.js.map