(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddHelp~31ecd969"],{"4de4":function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").filter,i=a("1dde"),s=a("ae40"),l=i("filter"),o=s("filter");r({target:"Array",proto:!0,forced:!l||!o},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5112:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addNew"},[a("h2",[e._v(e._s(e.id?e.$lang.edit_help:e.$lang.add_help))]),a("el-divider"),a("el-row",{staticClass:"topform_wrap"},[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,"label-width":e.labelWidth}},[a("el-form-item",{attrs:{label:e.$lang.help_title,prop:"title"}},[a("el-input",{style:{width:"260px"},attrs:{size:"small",placeholder:e.$lang.enter_help_title,clearable:""},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{label:e.$lang.classify,prop:"parent_id"}},[a("el-select",{style:{width:"260px"},attrs:{size:"small",placeholder:e.$lang.please_choose,clearable:""},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}},e._l(e.parent_idOptions[0].list,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.id,disabled:e.disabled}})})),1)],1),a("el-form-item",{attrs:{label:e.$lang.whether_to_hide,prop:"hidden",required:""}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.formData.hidden,callback:function(t){e.$set(e.formData,"hidden",t)},expression:"formData.hidden"}})],1),a("el-form-item",{attrs:{label:e.$lang.date_selection,prop:"push_time"}},[a("el-date-picker",{style:{width:"260px"},attrs:{size:"small","value-format":"timestamp",placeholder:e.$lang.select_date_selection,clearable:"",type:"datetime"},model:{value:e.formData.push_time,callback:function(t){e.$set(e.formData,"push_time",t)},expression:"formData.push_time"}})],1),a("el-form-item",{attrs:{label:e.$lang.tag,prop:""}},[a("el-input",{style:{width:"260px"},attrs:{size:"small",placeholder:e.$lang.multi_tag,clearable:""},model:{value:e.formData.label,callback:function(t){e.$set(e.formData,"label",t)},expression:"formData.label"}})],1),a("el-form-item",{attrs:{label:e.$lang.describe,prop:""}},[a("el-input",{style:{width:"260px"},attrs:{size:"small",placeholder:e.$lang.enter_help_describe,clearable:""},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),a("el-form-item",{attrs:{label:e.$lang.contents_article,prop:"push_time"}},[a("tinymce-editor",{ref:"myQuillEditor",staticStyle:{width:"90%"},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1)],1)],1),a("div",{staticClass:"bottomOperationAdd"},[a("el-button",{attrs:{size:"small",type:"primary",loading:e.btnLoading},on:{click:e.submitForm}},[e._v(e._s(e.$lang.submit))]),a("el-button",{attrs:{size:"small"},on:{click:e.goBack}},[e._v(e._s(e.$lang.get_back))]),a("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v(e._s(e.$lang.reset))])],1)],1)},n=[],i=(a("a4d3"),a("e01a"),a("4de4"),a("a9e3"),a("96cf"),a("1da1")),s=a("94ca2"),l={metaInfo:{title:window.zjmf_cw_lang.edit_help},data:function(){return{id:Number(this.$route.query.id),formData:{id:void 0,title:void 0,parent_id:void 0,hidden:!1,push_time:Date.parse(new Date),content:"",label:"",description:""},rules:{title:[{required:!0,message:this.$lang.enter_help_title,trigger:"blur"}],parent_id:[{required:!0,message:this.$lang.select_classify_id,trigger:"change"}],push_time:[{required:!0,message:this.$lang.select_date_selection,trigger:"change"}]},parent_idOptions:[{list:[]}],labelWidth:window.document.body.clientWidth>768?"80px":null,btnLoading:!1}},methods:{submitForm:function(){var e=this;this.id?this.id&&this.$refs.elForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",!1);case 2:return e.formData.id=e.id,e.btnLoading=!0,t.next=6,Object(s["b"])(e.formData);case 6:r=t.sent,n=r.data,200!==n.status?e.$message.error(n.msg):(e.$message.success(n.msg),e.$router.push({name:"helpList"})),e.btnLoading=!1;case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.elForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",!1);case 2:return e.btnLoading=!0,t.next=5,Object(s["b"])(e.formData);case 5:r=t.sent,n=r.data,200!==n.status?e.$message.error(n.msg):(e.$message.success(n.msg),e.$router.push({name:"helpList"})),e.btnLoading=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(){this.$refs.elForm.resetFields(),this.formData.content=""},goBack:function(){this.$router.go(-1)},getCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["g"])();case 2:a=t.sent,r=a.data,200!==r.status?e.$message.error(r.msg):e.parent_idOptions=r.data.filter((function(e){return 2===e.id}));case 5:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return t.next=3,Object(s["f"])(e.id);case 3:a=t.sent,r=a.data,200!==r.status?e.$message.error(r.msg):(e.formData.title=r.data.title,e.formData.parent_id=r.data.parent_id,e.formData.push_time=1e3*r.data.push_time,e.formData.content=e.HTMLDecode(r.data.content),e.formData.hidden=r.data.hidden,e.formData.label=r.data.label,e.formData.description=r.data.description);case 6:case"end":return t.stop()}}),t)})))()},HTMLDecode:function(e){var t=document.createElement("div");t.innerHTML=e;var a=t.innerText||t.textContent;return t=null,a}},created:function(){var e=this;this.getCategory(),setTimeout((function(){e.getData()}),500)}},o=l,c=a("2877"),u=Object(c["a"])(o,r,n,!1,null,null,null);t["default"]=u.exports},"94ca2":function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"h",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return m}));var r=a("a27e");function n(e,t,a,n,i){return Object(r["a"])({url:"news/list",params:{page:e,limit:t,parent_id:a,orderby:n,sorting:i}})}function i(e){return Object(r["a"])({url:"news/catspage",params:e})}function s(e){return Object(r["a"])({url:"news/catelist",params:e})}function l(e){return Object(r["a"])({url:"news/editcat",method:"post",data:e})}function o(e){return Object(r["a"])({url:"news/cat",method:"delete",params:{id:e}})}function c(e){return Object(r["a"])({url:"news/editcontent",method:"post",data:e})}function u(e){return Object(r["a"])({url:"news/content",params:{id:e}})}function d(e){return Object(r["a"])({url:"news/content",method:"delete",params:{id:e}})}function m(e){return Object(r["a"])({url:"news/checkalias",method:"get",params:e})}}}]);