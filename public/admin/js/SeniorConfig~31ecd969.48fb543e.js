(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SeniorConfig~31ecd969"],{"019f3":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("4160"),n("b64b"),n("d3b7"),n("3ca3"),n("10d1"),n("159b"),n("ddb0");var i=n("53ca");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null===t||"object"!==Object(i["a"])(t))return t;if(e.get(t))return t;var n=Array.isArray(t)?[]:{};return e.set(t,n),Object.keys(t).forEach((function(i){n[i]=a(t[i],e)})),n}},"10d1":function(t,e,n){"use strict";var i,a=n("da84"),s=n("e2cc"),r=n("f183"),o=n("6d61"),u=n("acac"),l=n("861d"),c=n("69f3").enforce,d=n("7f9a"),m=!a.ActiveXObject&&"ActiveXObject"in a,p=Object.isExtensible,f=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},_=t.exports=o("WeakMap",f,u);if(d&&m){i=u.getConstructor(f,"WeakMap",!0),r.REQUIRED=!0;var b=_.prototype,g=b["delete"],h=b.has,v=b.get,y=b.set;s(b,{delete:function(t){if(l(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new i),g.call(this,t)||e.frozen["delete"](t)}return g.call(this,t)},has:function(t){if(l(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new i),h.call(this,t)||e.frozen.has(t)}return h.call(this,t)},get:function(t){if(l(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new i),h.call(this,t)?v.call(this,t):e.frozen.get(t)}return v.call(this,t)},set:function(t,e){if(l(t)&&!p(t)){var n=c(this);n.frozen||(n.frozen=new i),h.call(this,t)?y.call(this,t,e):n.frozen.set(t,e)}else y.call(this,t,e);return this}})}},2532:function(t,e,n){"use strict";var i=n("23e7"),a=n("5a34"),s=n("1d80"),r=n("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(s(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"45fc":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").some,s=n("a640"),r=n("ae40"),o=s("some"),u=r("some");i({target:"Array",proto:!0,forced:!o||!u},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").filter,s=n("1dde"),r=n("ae40"),o=s("filter"),u=r("filter");i({target:"Array",proto:!0,forced:!o||!u},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6f01":function(t,e,n){},"7ce4":function(t,e,n){"use strict";var i=n("6f01"),a=n.n(i);a.a},8418:function(t,e,n){"use strict";var i=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?a.f(t,r,s(0,n)):t[r]=n}},9911:function(t,e,n){"use strict";var i=n("23e7"),a=n("857a"),s=n("af03");i({target:"String",proto:!0,forced:s("link")},{link:function(t){return a(this,"a","href",t)}})},a434:function(t,e,n){"use strict";var i=n("23e7"),a=n("23cb"),s=n("a691"),r=n("50c4"),o=n("7b0b"),u=n("65f0"),l=n("8418"),c=n("1dde"),d=n("ae40"),m=c("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,_=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var n,i,c,d,m,p,h=o(this),v=r(h.length),y=a(t,v),x=arguments.length;if(0===x?n=i=0:1===x?(n=0,i=v-y):(n=x-2,i=_(f(s(e),0),v-y)),v+n-i>b)throw TypeError(g);for(c=u(h,i),d=0;d<i;d++)m=y+d,m in h&&l(c,d,h[m]);if(c.length=i,n<i){for(d=y;d<v-i;d++)m=d+i,p=d+n,m in h?h[p]=h[m]:delete h[p];for(d=v;d>v-i+n;d--)delete h[d-1]}else if(n>i)for(d=v-i;d>y;d--)m=d+i-1,p=d+n-1,m in h?h[p]=h[m]:delete h[p];for(d=0;d<n;d++)h[d+y]=arguments[d+2];return h.length=v-i+n,c}})},ab13:function(t,e,n){var i=n("b622"),a=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,"/./"[t](e)}catch(i){}}return!1}},acac:function(t,e,n){"use strict";var i=n("e2cc"),a=n("f183").getWeakData,s=n("825a"),r=n("861d"),o=n("19aa"),u=n("2266"),l=n("b727"),c=n("5135"),d=n("69f3"),m=d.set,p=d.getterFor,f=l.find,_=l.findIndex,b=0,g=function(t){return t.frozen||(t.frozen=new h)},h=function(){this.entries=[]},v=function(t,e){return f(t.entries,(function(t){return t[0]===e}))};h.prototype={get:function(t){var e=v(this,t);if(e)return e[1]},has:function(t){return!!v(this,t)},set:function(t,e){var n=v(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=_(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,l){var d=t((function(t,i){o(t,d,e),m(t,{type:e,id:b++,frozen:void 0}),void 0!=i&&u(i,t[l],t,n)})),f=p(e),_=function(t,e,n){var i=f(t),r=a(s(e),!0);return!0===r?g(i).set(e,n):r[i.id]=n,t};return i(d.prototype,{delete:function(t){var e=f(this);if(!r(t))return!1;var n=a(t);return!0===n?g(e)["delete"](t):n&&c(n,e.id)&&delete n[e.id]},has:function(t){var e=f(this);if(!r(t))return!1;var n=a(t);return!0===n?g(e).has(t):n&&c(n,e.id)}}),i(d.prototype,n?{get:function(t){var e=f(this);if(r(t)){var n=a(t);return!0===n?g(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return _(this,t,e)}}:{add:function(t){return _(this,t,!0)}}),d}}},b0e2:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h2",[t._v(t._s(t.$lang.advanced_configuration))]),n("el-divider"),!t.pageData.link.length&&t.pageLoading?n("div",{staticClass:"tac mb-20"},[n("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.data_loading)+"... ")]):t._e(),t.pageLoading?t._e():n("el-row",{staticClass:"mb-20"},[n("el-col",{staticClass:"tac",attrs:{xs:24,sm:24,lg:12}},[t._v(t._s(t.$lang.condition))]),n("el-col",{staticClass:"tac",attrs:{xs:24,sm:24,lg:12}},[t._v(t._s(t.$lang.result))])],1),t._l(t.pageData.link,(function(e,i){return n("el-row",{key:"relate"+i,staticClass:"mb-20 senior-config-election",attrs:{gutter:50}},[n("el-col",{attrs:{xs:24,sm:24,lg:12}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:10}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:t.$lang.please_choose},on:{change:function(n){return t.optionChange(e)}},model:{value:e.config_id,callback:function(n){t.$set(e,"config_id",n)},expression:"linkItem.config_id"}},t._l(t.pageData.options,(function(t,e){return n("el-option",{key:"option"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:4}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:t.$lang.please_choose},model:{value:e.relation,callback:function(n){t.$set(e,"relation",n)},expression:"linkItem.relation"}},[n("el-option",{attrs:{label:t.$lang.be_equal_to,value:"seq"}}),n("el-option",{attrs:{label:t.$lang.not_equal_to,value:"sneq"}})],1)],1),n("el-col",{attrs:{span:10}},[[4,7,9,11,14,15,16,17,18,19].includes(e.selectedOption.option_type)?n("div",t._l(e.selectedOption.sub_options,(function(e,i){return n("el-row",{key:"conslider"+i,attrs:{type:"flex",justify:"space-between"}},[n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.minInput,callback:function(n){t.$set(e,"minInput",n)},expression:"sliderItem.minInput"}}),n("el-slider",{staticClass:"quantity_box_slider",staticStyle:{width:"80%"},attrs:{range:"",min:e.qty_minimum,max:e.qty_maximum,disabled:e.qty_minimum===e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"slider")}},model:{value:e.option_value,callback:function(n){t.$set(e,"option_value",n)},expression:"sliderItem.option_value"}}),n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.maxInput,callback:function(n){t.$set(e,"maxInput",n)},expression:"sliderItem.maxInput"}})],1)})),1):n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",multiple:"",placeholder:t.$lang.please_choose},on:{change:function(n){return t.subChange(e)}},model:{value:e.selecetedSubIds,callback:function(n){t.$set(e,"selecetedSubIds",n)},expression:"linkItem.selecetedSubIds"}},t._l(e.selectedOption.sub_options,(function(t,e){return n("el-option",{key:"conselect"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1)])],1)],1),n("el-col",{attrs:{xs:22,sm:22,lg:10}},t._l(e.result,(function(i,a){return n("el-row",{key:"result"+a,staticClass:"mb-10",attrs:{gutter:10}},[n("el-col",{attrs:{span:9}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",placeholder:t.$lang.please_choose},on:{change:function(e){return t.optionChange(i)}},model:{value:i.config_id,callback:function(e){t.$set(i,"config_id",e)},expression:"resultItem.config_id"}},t._l(t.pageData.options,(function(t,e){return n("el-option",{key:"option"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:4}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:t.$lang.please_choose},model:{value:i.relation,callback:function(e){t.$set(i,"relation",e)},expression:"resultItem.relation"}},[n("el-option",{attrs:{label:t.$lang.be_equal_to,value:"seq"}}),[4,7,9,11,14,15,16,17,18,19].includes(i.selectedOption.option_type)?t._e():n("el-option",{attrs:{label:t.$lang.not_equal_to,value:"sneq"}})],1)],1),n("el-col",{attrs:{span:9}},[[4,7,9,11,14,15,16,17,18,19].includes(i.selectedOption.option_type)?n("div",t._l(i.selectedOption.sub_options,(function(e,i){return n("el-row",{key:"resslider"+i,attrs:{type:"flex",justify:"space-between"}},[n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.minInput,callback:function(n){t.$set(e,"minInput",n)},expression:"sliderItem.minInput"}}),n("el-slider",{staticClass:"quantity_box_slider",staticStyle:{width:"70%"},attrs:{range:"",min:e.qty_minimum,max:e.qty_maximum,disabled:e.qty_minimum===e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"slider")}},model:{value:e.option_value,callback:function(n){t.$set(e,"option_value",n)},expression:"sliderItem.option_value"}}),n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.maxInput,callback:function(n){t.$set(e,"maxInput",n)},expression:"sliderItem.maxInput"}})],1)})),1):n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",multiple:"",placeholder:t.$lang.please_choose},on:{change:function(e){return t.subChange(i)}},model:{value:i.selecetedSubIds,callback:function(e){t.$set(i,"selecetedSubIds",e)},expression:"resultItem.selecetedSubIds"}},t._l(i.selectedOption.sub_options,(function(t,e){return n("el-option",{key:"resselect"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1)]),n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[e.result.length>1&&(!i.id||e.result.filter((function(t){return t.id})).length>1)?n("span",[i.btnLoading?n("i",{staticClass:"el-icon-loading"}):n("i",{staticClass:"el-icon-minus cursor-pointer",on:{click:function(n){return t.resultRemove(e,i,a)}}})]):t._e(),a===e.result.length-1?n("span",[n("i",{staticClass:"el-icon-plus cursor-pointer",on:{click:function(n){return t.resultAdd(e,i)}}})]):t._e()])],1)})),1),n("el-col",{staticStyle:{"line-height":"35px"},attrs:{span:2}},[e.btnLoading?n("i",{staticClass:"el-icon-loading"}):n("i",{staticClass:"el-icon-remove opt-icon",on:{click:function(n){return t.linkRemove(e,i)}}})])],1)})),t.pageLoading?t._e():n("el-row",{staticClass:"mb-20 senior-config-election",attrs:{gutter:50}},[n("el-col",{attrs:{xs:24,sm:24,lg:12}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:10}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",clearable:"",placeholder:t.$lang.please_choose},on:{change:t.addoptionChange},model:{value:t.formData.new_cid,callback:function(e){t.$set(t.formData,"new_cid",e)},expression:"formData.new_cid"}},t._l(t.pageData.options,(function(t,e){return n("el-option",{key:"option"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:4}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",clearable:"",placeholder:t.$lang.please_choose},model:{value:t.formData.new_relation,callback:function(e){t.$set(t.formData,"new_relation",e)},expression:"formData.new_relation"}},[n("el-option",{attrs:{label:t.$lang.be_equal_to,value:"seq"}}),n("el-option",{attrs:{label:t.$lang.not_equal_to,value:"sneq"}})],1)],1),n("el-col",{attrs:{span:10}},[[4,7,9,11,14,15,16,17,18,19].includes(t.addselectedOption.option_type)?n("div",t._l(t.addselectedOption.sub_options,(function(e,i){return n("el-row",{key:"conslider"+i,attrs:{type:"flex",justify:"space-between"}},[n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.minInput,callback:function(n){t.$set(e,"minInput",n)},expression:"sliderItem.minInput"}}),n("el-slider",{staticClass:"quantity_box_slider",staticStyle:{width:"80%"},attrs:{range:"",min:e.qty_minimum,max:e.qty_maximum,disabled:e.qty_minimum===e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"slider")}},model:{value:e.option_value,callback:function(n){t.$set(e,"option_value",n)},expression:"sliderItem.option_value"}}),n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.maxInput,callback:function(n){t.$set(e,"maxInput",n)},expression:"sliderItem.maxInput"}})],1)})),1):n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",multiple:"",clearable:"",placeholder:t.$lang.please_choose},model:{value:t.addselecetedSubIds,callback:function(e){t.addselecetedSubIds=e},expression:"addselecetedSubIds"}},t._l(t.addselectedOption.sub_options,(function(t,e){return n("el-option",{key:"conselect"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1)])],1)],1),n("el-col",{attrs:{xs:22,sm:22,lg:10}},t._l(t.addLinksResult,(function(e,i){return n("el-row",{key:"addRes"+i,staticClass:"mb-10",attrs:{gutter:10}},[n("el-col",{attrs:{span:9}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",filterable:"",clearable:"",placeholder:t.$lang.please_choose},on:{change:function(n){return t.addresultoptionChange(e)}},model:{value:e.result_new_cid,callback:function(n){t.$set(e,"result_new_cid",n)},expression:"addResItem.result_new_cid"}},t._l(t.pageData.options,(function(t,e){return n("el-option",{key:"option"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1),n("el-col",{attrs:{span:4}},[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",clearable:"",placeholder:t.$lang.please_choose},model:{value:e.result_new_relation,callback:function(n){t.$set(e,"result_new_relation",n)},expression:"addResItem.result_new_relation"}},[n("el-option",{attrs:{label:t.$lang.be_equal_to,value:"seq"}}),[4,7,9,11,14,15,16,17,18,19].includes(e.resultaddselectedOption.option_type)?t._e():n("el-option",{attrs:{label:t.$lang.not_equal_to,value:"sneq"}})],1)],1),n("el-col",{attrs:{span:9}},[[4,7,9,11,14,15,16,17,18,19].includes(e.resultaddselectedOption.option_type)?n("div",t._l(e.resultaddselectedOption.sub_options,(function(e,i){return n("el-row",{key:"resslider"+i,attrs:{type:"flex",justify:"space-between"}},[n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.minInput,callback:function(n){t.$set(e,"minInput",n)},expression:"sliderItem.minInput"}}),n("el-slider",{staticClass:"quantity_box_slider",staticStyle:{width:"70%"},attrs:{range:"",min:e.qty_minimum,max:e.qty_maximum,disabled:e.qty_minimum===e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"slider")}},model:{value:e.option_value,callback:function(n){t.$set(e,"option_value",n)},expression:"sliderItem.option_value"}}),n("el-input-number",{attrs:{size:"small",min:e.qty_minimum,max:e.qty_maximum},on:{change:function(n){return t.sliderChange(e,"input")}},model:{value:e.maxInput,callback:function(n){t.$set(e,"maxInput",n)},expression:"sliderItem.maxInput"}})],1)})),1):n("div",[n("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",multiple:"",clearable:"",placeholder:t.$lang.please_choose},model:{value:e.resultaddselecetedSubIds,callback:function(n){t.$set(e,"resultaddselecetedSubIds",n)},expression:"addResItem.resultaddselecetedSubIds"}},t._l(e.resultaddselectedOption.sub_options,(function(t,e){return n("el-option",{key:"resselect"+e,attrs:{label:t.option_name,value:t.id}})})),1)],1)]),n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[t.addLinksResult.length>1?n("span",[n("i",{staticClass:"el-icon-minus cursor-pointer",on:{click:function(e){return t.addResItemRemove(i)}}})]):t._e(),i===t.addLinksResult.length-1?n("span",[n("i",{staticClass:"el-icon-plus cursor-pointer",on:{click:t.addResItemAdd}})]):t._e()])],1)})),1),n("el-col",{staticStyle:{"line-height":"35px"},attrs:{span:2}})],1),t.pageLoading?t._e():n("div",{staticClass:"tac mt-20"},[n("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.submit}},[t._v(t._s(t.$lang.submit))]),n("el-button",{attrs:{size:"small"},on:{click:t.cancel}},[t._v(t._s(t.$lang.cancel))])],1)],2)},a=[],s=(n("4de4"),n("4160"),n("caad"),n("45fc"),n("a434"),n("a9e3"),n("2532"),n("9911"),n("159b"),n("96cf"),n("1da1")),r=n("f421"),o=n("019f3"),u={metaInfo:{title:window.zjmf_cw_lang.advanced_configuration},data:function(){return{pid:this.$route.query.id,pageData:{link:[],options:[]},pageLoading:!1,btnLoading:!1,formData:{link:[],new_cid:"",new_relation:[],new_subid:[],result:[]},addselectedOption:{},addselecetedSubIds:[],addLinksResult:[{result_new_cid:"",result_new_relation:"",resultaddselectedOption:{},resultaddselecetedSubIds:[]}]}},methods:{getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.pageLoading=!0,e.next=3,Object(r["e"])({pid:t.pid});case 3:if(n=e.sent,i=n.data,t.pageLoading=!1,200===i.status){e.next=8;break}return e.abrupt("return",!1);case 8:t.pageData=i.data,(t.pageData.link||[]).forEach((function(e){for(var n in e.btnLoading=!1,e.selecetedSubIds=[],e.sub_id)e.selecetedSubIds.push(Number(n)),t.setSubValue(n,e);t.$set(e,"selectedOption",t.defatulOptionnSet(e)),(e.result||[]).forEach((function(e){for(var n in e.btnLoading=!1,e.selecetedSubIds=[],e.sub_id)e.selecetedSubIds.push(Number(n)),t.setSubValue(n,e);t.$set(e,"selectedOption",t.defatulOptionnSet(e))}))}));case 10:case"end":return e.stop()}}),e)})))()},setSubValue:function(t,e){var n=this;(this.pageData.options||[]).forEach((function(i){[4,7,9,11,14,15,16,17,18,19].includes(i.option_type)&&(i.sub_options||[]).forEach((function(i){Number(t)===i.id&&(n.$set(i,"option_value",[Number(e.sub_id[t].qty_minimum),Number(e.sub_id[t].qty_maximum)]),n.$set(i,"minInput",Number(e.sub_id[t].qty_minimum)),n.$set(i,"maxInput",Number(e.sub_id[t].qty_maximum)))}))}))},defatulOptionnSet:function(t){var e={};return(this.pageData.options||[]).forEach((function(n){t.config_id===n.id&&(e=Object(o["a"])(n))})),e},linkAdd:function(){this.pageData.link.push({config_id:this.pageData.options.length?this.pageData.options[0].id:0,id:void 0,relation:"seq",result:[{config_id:this.pageData.options.length?this.pageData.options[0].id:0,id:void 0,relation:"seq",sub_id:{},selectedOption:this.pageData.options.length?this.pageData.options[0]:[],selecetedSubIds:[]}],sub_id:{},selectedOption:this.pageData.options.length?this.pageData.options[0]:[],selecetedSubIds:[]})},linkRemove:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!t.id){i.next=11;break}return t.btnLoading=!0,n.$forceUpdate(),i.next=5,Object(r["j"])({id:t.id});case 5:a=i.sent,s=a.data,t.btnLoading=!1,200!==s.status?n.$message.error(s.msg):(n.$message.success(s.msg),n.getData()),i.next=12;break;case 11:n.pageData.link.splice(e,1);case 12:case"end":return i.stop()}}),i)})))()},optionChange:function(t){t.selecetedSubIds=[],(this.pageData.options||[]).forEach((function(e){if(t.config_id===e.id){var n=Object(o["a"])(e);e.sub_options[0]&&(n.sub_options[0].maxInput=e.sub_options[0].qty_maximum,n.sub_options[0].minInput=e.sub_options[0].qty_minimum,n.sub_options[0].option_value=[e.sub_options[0].qty_minimum,e.sub_options[0].qty_maximum]),t.selectedOption=n}}))},subChange:function(t){this.$forceUpdate();var e=[];for(var n in t.sub_id)e.push(n),t.selecetedSubIds.includes(n)||delete t.sub_id[n];(t.selecetedSubIds||[]).forEach((function(n){e.includes(n)||(t.sub_id[n]={qty_maximum:"0",qty_minimum:"0"})}))},resultAdd:function(t,e){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.result.push({config_id:void 0,id:void 0,relation:void 0,sub_id:{},selectedOption:{},selecetedSubIds:[]});case 1:case"end":return e.stop()}}),e)})))()},resultRemove:function(t,e,n){var i=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.id){a.next=11;break}return e.btnLoading=!0,i.$forceUpdate(),a.next=5,Object(r["n"])({id:e.id});case 5:s=a.sent,o=s.data,e.btnLoading=!1,200!==o.status?i.$message.error(o.msg):(i.getData(),i.$message.success(o.msg)),a.next=12;break;case 11:t.result.splice(n,1);case 12:case"end":return a.stop()}}),a)})))()},addoptionChange:function(){var t=this;this.addselecetedSubIds=[],(this.pageData.options||[]).forEach((function(e){if(t.formData.new_cid===e.id){var n=Object(o["a"])(e);e.sub_options[0].qty_maximum&&(n.sub_options[0].maxInput=e.sub_options[0].qty_maximum,n.sub_options[0].minInput=e.sub_options[0].qty_minimum,n.sub_options[0].option_value=[e.sub_options[0].qty_minimum,e.sub_options[0].qty_maximum]),t.addselectedOption=n}}))},addresultoptionChange:function(t){t.resultaddselecetedSubIds=[],(this.pageData.options||[]).forEach((function(e){if(t.result_new_cid===e.id){var n=Object(o["a"])(e);e.sub_options[0]&&(n.sub_options[0].maxInput=e.sub_options[0].qty_maximum,n.sub_options[0].minInput=e.sub_options[0].qty_minimum,n.sub_options[0].option_value=[e.sub_options[0].qty_maximum,e.sub_options[0].qty_minimum]),t.resultaddselectedOption=n}}))},addConditon:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={config_id:t.formData.new_cid,relation:t.formData.new_relation,sub_id:[],result:[]},[4,7,9,11,14,15,16,17,18,19].includes(t.addselectedOption.option_type)?(n.sub_id=[],(t.addselectedOption.sub_options||[]).forEach((function(e){n.sub_id[e.id]={},t.$set(n.sub_id[e.id],"qty_minimum",e.option_value[0]),t.$set(n.sub_id[e.id],"qty_maximum",e.option_value[1])}))):(n.sub_id=[],(t.addselecetedSubIds||[]).forEach((function(e){n.sub_id[e]={},t.$set(n.sub_id[e],"qty_minimum",0),t.$set(n.sub_id[e],"qty_maximum",0)}))),(t.addLinksResult||[]).forEach((function(e,i){n.result[i]={},t.$set(n.result[i],"config_id",e.result_new_cid),t.$set(n.result[i],"relation",e.result_new_relation),[4,7,9,11,14,15,16,17,18,19].includes(e.resultaddselectedOption.option_type)?(e.resultaddselectedOption.sub_options||[]).forEach((function(e){t.$set(n.result[i],"sub_id",{}),n.result[i].sub_id[e.id]={},t.$set(n.result[i].sub_id[e.id],"qty_minimum",e.option_value[0]),t.$set(n.result[i].sub_id[e.id],"qty_maximum",e.option_value[1])})):(e.resultaddselecetedSubIds||[]).forEach((function(e){t.$set(n.result[i],"sub_id",{}),n.result[i].sub_id[e]={},t.$set(n.result[i].sub_id[e],"qty_minimum",0),t.$set(n.result[i].sub_id[e],"qty_maximum",0)}))})),t.btnLoading=!0,e.next=6,Object(r["b"])(t.$qs.stringify(n));case 6:i=e.sent,a=i.data,t.btnLoading=!1,200!==a.status?t.$message.error(a.msg):(t.getData(),t.clearFormData(),t.$message.success(a.msg));case 10:case"end":return e.stop()}}),e)})))()},addResItemRemove:function(t){this.addLinksResult.splice(t,1),this.formData.result.splice(t,1)},addResItemAdd:function(){this.addLinksResult.push({result_new_cid:"",result_new_relation:"",resultaddselectedOption:{},resultaddselecetedSubIds:[]})},submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,a,s,o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in t.formData.link=[],(t.pageData.link||[]).forEach((function(e){if(e.id){if(t.formData.link[e.id]={},t.$set(t.formData.link[e.id],"config_id",e.config_id),t.$set(t.formData.link[e.id],"relation",e.relation),t.$set(t.formData.link[e.id],"sub_id",{}),[4,7,9,11,14,15,16,17,18,19].includes(e.selectedOption.option_type))(e.selectedOption.sub_options||[]).forEach((function(n){t.formData.link[e.id].sub_id[n.id]={},t.$set(t.formData.link[e.id].sub_id[n.id],"qty_minimum",n.option_value[0]),t.$set(t.formData.link[e.id].sub_id[n.id],"qty_maximum",n.option_value[1])}));else for(var n in e.sub_id)t.formData.link[e.id].sub_id[n]={},t.$set(t.formData.link[e.id].sub_id[n],"qty_minimum",0),t.$set(t.formData.link[e.id].sub_id[n],"qty_maximum",0);t.$set(t.formData.link[e.id],"result",{}),t.$set(t.formData.link[e.id],"new_result",{}),(e.result||[]).forEach((function(n,i){if(n.id)if(t.formData.link[e.id].result[n.id]={},t.$set(t.formData.link[e.id].result[n.id],"config_id",n.config_id),t.$set(t.formData.link[e.id].result[n.id],"relation",n.relation),t.$set(t.formData.link[e.id].result[n.id],"sub_id",{}),[4,7,9,11,14,15,16,17,18,19].includes(n.selectedOption.option_type))(n.selectedOption.sub_options||[]).forEach((function(i){t.formData.link[e.id].result[n.id].sub_id[i.id]={},t.$set(t.formData.link[e.id].result[n.id].sub_id[i.id],"qty_minimum",i.option_value[0]),t.$set(t.formData.link[e.id].result[n.id].sub_id[i.id],"qty_maximum",i.option_value[1])}));else for(var a in n.sub_id)t.formData.link[e.id].result[n.id].sub_id[a]={},t.$set(t.formData.link[e.id].result[n.id].sub_id[a],"qty_minimum",0),t.$set(t.formData.link[e.id].result[n.id].sub_id[a],"qty_maximum",0);else if(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length]={},t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length],"config_id",n.config_id),t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length],"relation",n.relation),t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length],"sub_id",{}),[4,7,9,11,14,15,16,17,18,19].includes(n.selectedOption.option_type))(n.selectedOption.sub_options||[]).forEach((function(n){t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[n.id]={},t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[n.id],"qty_minimum",n.option_value[0]),t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[n.id],"qty_maximum",n.option_value[1])}));else for(var s in n.sub_id)t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[s]={},t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[s],"qty_minimum",0),t.$set(t.formData.link[e.id].new_result[i-e.result.filter((function(t){return t.id})).length].sub_id[s],"qty_maximum",0)}))}})),[4,7,9,11,14,15,16,17,18,19].includes(t.addselectedOption.option_type)?(t.formData.new_subid=[],(t.addselectedOption.sub_options||[]).forEach((function(e){t.formData.new_subid[e.id]={},t.$set(t.formData.new_subid[e.id],"qty_minimum",e.option_value[0]),t.$set(t.formData.new_subid[e.id],"qty_maximum",e.option_value[1])}))):(t.formData.new_subid=[],(t.addselecetedSubIds||[]).forEach((function(e){t.formData.new_subid[e]={},t.$set(t.formData.new_subid[e],"qty_minimum",0),t.$set(t.formData.new_subid[e],"qty_maximum",0)}))),(t.addLinksResult||[]).forEach((function(e,n){t.formData.result[n]={},t.$set(t.formData.result[n],"new_cid",e.result_new_cid),t.$set(t.formData.result[n],"new_relation",e.result_new_relation),[4,7,9,11,14,15,16,17,18,19].includes(e.resultaddselectedOption.option_type)?(t.$set(t.formData.result[n],"new_subid",{}),(e.resultaddselectedOption.sub_options||[]).forEach((function(e){t.formData.result[n].new_subid[e.id]={},t.$set(t.formData.result[n].new_subid[e.id],"qty_minimum",e.option_value[0]),t.$set(t.formData.result[n].new_subid[e.id],"qty_maximum",e.option_value[1])}))):(t.$set(t.formData.result[n],"new_subid",{}),(e.resultaddselecetedSubIds||[]).forEach((function(e){t.formData.result[n].new_subid[e]={},t.$set(t.formData.result[n].new_subid[e],"qty_minimum",0),t.$set(t.formData.result[n].new_subid[e],"qty_maximum",0)})))})),n=!1,t.formData.link){for(a in t.formData.link[i].result)t.formData.link[i].result[a].config_id===t.formData.link[i].config_id&&(n=!0);if(t.formData.link[i].new_result)for(s in t.formData.link[i].new_result)t.formData.link[i].new_result[s].config_id===t.formData.link[i].config_id&&(n=!0)}if(o=t.formData.result.some((function(e){return e.new_cid===t.formData.new_cid})),!o||!t.formData.new_cid){e.next=11;break}t.$message.error(t.$lang.causal_configuration_item_tips_text),e.next=22;break;case 11:if(!n){e.next=15;break}t.$message.error(t.$lang.causal_configuration_item_tips_text),e.next=22;break;case 15:return t.btnLoading=!0,e.next=18,Object(r["d"])(t.$qs.stringify(t.formData));case 18:u=e.sent,l=u.data,t.btnLoading=!1,200!==l.status?t.$message.error(l.msg):(t.getData(),t.clearFormData(),t.$message.success(l.msg));case 22:case"end":return e.stop()}}),e)})))()},cancel:function(){this.$router.push({path:"/edit-product",query:{id:this.pid}})},clearFormData:function(){this.formData.new_cid="",this.formData.new_relation="",this.addselecetedSubIds=[],this.addselectedOption={},this.addLinksResult=[{result_new_cid:"",result_new_relation:"",resultaddselectedOption:{},resultaddselecetedSubIds:[]}]},sliderChange:function(t,e){if("input"===e){if(t.minInput>t.maxInput){var n=t.minInput;t.minInput=t.maxInput,t.maxInput=n}t.option_value=[t.minInput,t.maxInput]}else"slider"===e&&(t.minInput=t.option_value[0],t.maxInput=t.option_value[1])}},created:function(){this.getData()}},l=u,c=(n("7ce4"),n("2877")),d=Object(c["a"])(l,i,a,!1,null,"13c33111",null);e["default"]=d.exports},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),s=n("df75"),r=n("d039"),o=r((function(){s(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return s(a(t))}})},caad:function(t,e,n){"use strict";var i=n("23e7"),a=n("4d64").includes,s=n("44d2"),r=n("ae40"),o=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},f421:function(t,e,n){"use strict";n.d(e,"x",(function(){return a})),n.d(e,"w",(function(){return s})),n.d(e,"p",(function(){return r})),n.d(e,"l",(function(){return o})),n.d(e,"m",(function(){return u})),n.d(e,"s",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"t",(function(){return d})),n.d(e,"q",(function(){return m})),n.d(e,"h",(function(){return p})),n.d(e,"a",(function(){return f})),n.d(e,"k",(function(){return _})),n.d(e,"u",(function(){return b})),n.d(e,"F",(function(){return g})),n.d(e,"E",(function(){return h})),n.d(e,"z",(function(){return v})),n.d(e,"C",(function(){return y})),n.d(e,"y",(function(){return x})),n.d(e,"v",(function(){return k})),n.d(e,"A",(function(){return w})),n.d(e,"D",(function(){return $})),n.d(e,"o",(function(){return D})),n.d(e,"B",(function(){return q})),n.d(e,"i",(function(){return I})),n.d(e,"e",(function(){return O})),n.d(e,"d",(function(){return S})),n.d(e,"b",(function(){return j})),n.d(e,"j",(function(){return C})),n.d(e,"n",(function(){return z})),n.d(e,"r",(function(){return R})),n.d(e,"f",(function(){return E})),n.d(e,"g",(function(){return L}));var i=n("a27e");function a(t){return Object(i["a"])({url:"product_list_page",params:t})}function s(t){return Object(i["a"])({url:"edit_product_group_page",params:{id:t}})}function r(t){return Object(i["a"])({url:"save_product_group",method:"post",data:t})}function o(t){return Object(i["a"])({url:"del_product_group",params:{id:t}})}function u(t){return Object(i["a"])({url:"del_product",params:{id:t}})}function l(t){return Object(i["a"])({url:"add_product_page",params:t})}function c(t){return Object(i["a"])({url:"create_product",method:"post",data:t})}function d(t){return Object(i["a"])({url:"edit_product_page/".concat(t)})}function m(t){return Object(i["a"])({url:"edit_product",method:"post",data:t})}function p(t){return Object(i["a"])({url:"product_duplicate",method:"post",data:t})}function f(t){return Object(i["a"])({url:"product_downloadcats",method:"post",data:t})}function _(t){return Object(i["a"])({url:"product_del_custom",method:"post",data:t})}function b(t){return Object(i["a"])({url:"provision/".concat(t)})}function g(t){return Object(i["a"])({url:"update_productsort",method:"post",data:t})}function h(t){return Object(i["a"])({url:"update_groupsort",method:"post",data:t})}function v(t){return Object(i["a"])({url:"get_upstream_products",params:t})}function y(t){return Object(i["a"])({url:"product/sync_product_info",method:"post",data:t})}function x(t){return Object(i["a"])({url:"product/get_upstream_price",params:t})}function k(t){return Object(i["a"])({url:"product_selectcates",params:{productid:t}})}function w(t){return Object(i["a"])({url:"product_manage_downloads",method:"post",data:t})}function $(t){return Object(i["a"])({url:"update_firstgroupsort",method:"post",data:t})}function D(t){return Object(i["a"])({url:"edit_product_first_group_page",params:t})}function q(t){return Object(i["a"])({url:"save_product_first_group",method:"post",data:t})}function I(t){return Object(i["a"])({url:"del_product_first_group",params:t})}function O(t){return Object(i["a"])({url:"advanced_options/page",params:t})}function S(t){return Object(i["a"])({url:"advanced_options/create",method:"post",data:t})}function j(t){return Object(i["a"])({url:"advanced_options/addcondition",method:"post",data:t})}function C(t){return Object(i["a"])({url:"advanced_options/deletecondition",method:"delete",params:t})}function z(t){return Object(i["a"])({url:"advanced_options/deleteresult",method:"delete",params:t})}function R(t){return Object(i["a"])({url:"edit_stock",method:"post",data:t})}function E(){return Object(i["a"])({url:"options/config_options_check_os"})}function L(t){return Object(i["a"])({url:"options/config_options_check_os/".concat(t),method:"post"})}}}]);