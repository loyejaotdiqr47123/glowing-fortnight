(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MunualResource~e74b0f58"],{7179:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sales"},[r("h5",{staticClass:"mt-0"},[e._v(" "+e._s(e.$lang.server_list_prompt)+" "),r("el-link",{attrs:{type:"primary",href:"https://bbs.idcsmart.com/forum.php?mod=viewthread&tid=354&fromuid=39",target:"blank"}},[e._v(e._s(e.$lang.help_document))])],1),r("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("div",[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-circle-plus-outline"},on:{click:e.toAddResource}},[e._v(" "+e._s(e.$lang.add_the_resource)+" ")]),r("el-button",{attrs:{size:"small"},on:{click:function(t){e.showSearchArea=!e.showSearchArea}}},[e._v(" "+e._s(e.showSearchArea?e.$lang.pack_up_the_search:e.$lang.advanced_search)+" ")])],1)],1),r("transition",{attrs:{name:"el-zoom-in-top"}},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearchArea,expression:"showSearchArea"}],ref:"elForm",staticClass:"unfold-search mt-10 mb-20",attrs:{inline:"",model:e.search,"label-width":"60px",size:"small"}},[r("el-form-item",{attrs:{label:e.$lang.lord_ip,prop:"in_ip"}},[r("el-input",{style:{width:"200px"},attrs:{placeholder:e.$lang.please_enter_lord_ip,clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchHandeClick(t)}},model:{value:e.search.in_ip,callback:function(t){e.$set(e.search,"in_ip",t)},expression:"search.in_ip"}})],1),r("el-form-item",{attrs:{label:e.$lang.supplier,prop:"pid"}},[r("el-select",{style:{width:"200px"},attrs:{placeholder:e.$lang.please_select_upstream,clearable:""},model:{value:e.search.pid,callback:function(t){e.$set(e.search,"pid",t)},expression:"search.pid"}},e._l(e.typeSelectOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.searchHandeClick}},[e._v(e._s(e.$lang.search))]),r("el-button",{attrs:{size:"mini"},on:{click:e.clearSearchHandleClick}},[e._v(e._s(e.$lang.empty))])],1)],1)],1),r("el-table",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:e.tableData},on:{"sort-change":e.sortChange}},[r("div",{attrs:{slot:"empty"},slot:"empty"},[!e.tableData.length&&e.tableLoading?r("span",[r("i",{staticClass:"el-icon-loading"}),e._v(" "+e._s(e.$lang.loading)+" ... ")]):e._e(),e.tableData.length||e.tableLoading?e._e():r("span",[e._v(e._s(e.$lang.no_data))])]),r("el-table-column",{attrs:{label:e.$lang.reload_crack,width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.button.includes("reinstall")||a.button.includes("crackPass")?r("el-popover",{directives:[{name:"show",rawName:"v-show",value:!a.result,expression:"!row.result"}],attrs:{placement:"right",width:"400",trigger:"hover"}},[r("el-row",["{}"===JSON.stringify(a.reinstallObj)?r("el-col",[e._v(e._s(e.$lang.click_to_check_progress))]):[r("el-col",{attrs:{span:24}},[e._v(" "+e._s(e.$lang.rate_of_progress)+"："+e._s(a.reinstallObj.progress?a.reinstallObj.progress+"%":"")+" ")]),r("el-col",{attrs:{span:24}},[e._v(e._s(e.$lang.operation)+"："+e._s(a.reinstallObj.info))]),r("el-col",{attrs:{span:24}},[e._v(e._s(a.reinstallObj.reinstall_msg))]),r("el-col",{attrs:{span:24}},[e._v(e._s(e.$lang.at_present)+"："+e._s(a.reinstallObj.step))]),r("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.cancelTask(a)}}},[e._v(" "+e._s(a.reinstallObj.cancel||e.$lang.cancel_reload_crack)+" ")])]],2),r("div",{staticStyle:{height:"100%",cursor:"pointer"},attrs:{slot:"reference"},on:{click:function(t){return e.getProgress(a)}},slot:"reference"},[r("el-progress",{attrs:{"show-text":!1,percentage:parseInt(a.reinstallObj.progress)||0,width:20}})],1)],1):e._e()]}}])}),r("el-table-column",{attrs:{prop:"power_status",label:e.$lang.power_supply,width:"50px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.loading?r("span",[r("i",{staticClass:"el-icon-loading"})]):e._e(),a.loading?e._e():r("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.refreshStatus(a)}}},["on"===a.power_status?r("span",[r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.starting_up,placement:"bottom"}},[r("svg",{staticClass:"icon",staticStyle:{width:"16px",height:"16px"},attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-kaiji"}})])])],1):"off"===a.power_status?r("span",[r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.shutdown,placement:"bottom"}},[r("svg",{staticClass:"icon",staticStyle:{width:"16px",height:"16px"},attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-guanji"}})])])],1):"error"===a.power_status?r("span",[r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.mistake,placement:"bottom"}},[r("svg",{staticClass:"icon",staticStyle:{width:"16px",height:"16px"},attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-cuowu"}})])])],1):r("span",[r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.unknown,placement:"bottom"}},[r("svg",{staticClass:"icon",staticStyle:{width:"16px",height:"16px"},attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-weizhi-copy"}})])])],1)])]}}])}),r("el-table-column",{attrs:{prop:"ip",label:"IP",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.ips?r("el-popover",{attrs:{placement:"right",trigger:"hover"}},[e._l(t.row.ip,(function(t,a){return r("div",{key:a,staticStyle:{display:"flex","justify-content":"center"}},[r("span",[e._v(e._s(t.ip))]),r("span",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.ip,expression:"item.ip"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"el-icon-copy-document copyIp"})])})),r("span",{attrs:{slot:"reference"},slot:"reference"},[t.row.names?r("el-link",{on:{click:function(r){return e.goProduct(t.row)}}},[e._v(" "+e._s(t.row.in_ip+"("+t.row.ipcount+")"))]):r("span",[e._v(e._s(t.row.in_ip+"("+t.row.ipcount+")"))])],1)],2):r("span",[t.row.ipcount>1?r("span",[e._v(e._s(t.row.in_ip+"("+t.row.ipcount+")"))]):r("span",[e._v(e._s(""+t.row.in_ip))])])]}}])}),r("el-table-column",{attrs:{prop:"pz",label:e.$lang.configuration}}),r("el-table-column",{attrs:{prop:"mark",label:e.$lang.remark}}),r("el-table-column",{attrs:{prop:"root",label:e.$lang.user_name_password},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("span",[e._v(" "+e._s(a.username)+" "+e._s(a.username?"/"+a.password.replace(/[^]/g,"*"):"-")+" ")])]}}])}),r("el-table-column",{attrs:{prop:"uname",label:e.$lang.supplier,width:"120"}}),r("el-table-column",{attrs:{prop:"total",label:e.$lang.cost,width:"100"}}),r("el-table-column",{attrs:{prop:"names",label:e.$lang.affiliated_customer_product,width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[a.name?(a.cname+a.name).toString().length<=20?r("el-link",{style:{color:a.domainstatus.color},on:{click:function(t){return e.goProduct(a)}}},[r("span",[e._v(" "+e._s(a.cname)+" "+e._s(a.name?"-"+a.name:"")+" ")])]):r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",placement:"bottom"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(a.cname)),r("br"),r("br"),e._v(e._s(a.name?""+a.name:""))]),r("el-link",{style:{color:a.domainstatus.color},on:{click:function(t){return e.goProduct(a)}}},[r("span",[e._v(" "+e._s((a.cname+(a.name?"-"+a.name:"")).substring(0,18))+"... ")])])],1):r("span",[e._v("-")])]}}])}),r("el-table-column",{attrs:{prop:"nextduedate",label:e.$lang.expire_date,sortable:"",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",disabled:!a.nextduedate&&!a.paid_time,effect:"light",placement:"bottom"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(" "+e._s(e.$lang.product_expiration_time)+":"+e._s(a.nextduedate?e.$moment(1e3*a.nextduedate).format("YYYY-MM-DD"):"-")+" ")]),r("span",{style:{color:a.nextColor}},[e._v(" "+e._s(a.paid_time?e.$moment(1e3*a.paid_time).format("YYYY-MM-DD"):"-")+" ")])])]}}])}),r("el-table-column",{attrs:{label:e.$lang.operation,width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._l(a.button,(function(t,n){return[r("el-tooltip",{key:n,staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e._f("realLabel")(t),placement:"bottom"}},["status"!==t?r("span",{staticClass:"mr-10 curp"},[r("i",{class:e._f("realClass")(t),on:{click:function(r){return e.operation(t,a)}}})]):e._e()])]})),r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.edit,placement:"bottom"}},[r("span",{staticClass:"mr-10 curp"},[r("i",{staticClass:"el-icon-edit changeOriginal blue",on:{click:function(t){return e.editResource(a)}}})])]),r("el-tooltip",{staticClass:"item",attrs:{transition:"el-zoom-in-top",effect:"light",content:e.$lang.delete,placement:"bottom"}},[r("span",{staticClass:"mr-10 curp"},[r("i",{staticClass:"el-icon-delete changeOriginal red",on:{click:function(t){return e.deleteResource(a)}}})])])]}}])})],1),r("el-pagination",{staticClass:"mt-10",attrs:{"current-page":e.search.page,"page-sizes":[10,15,20,25,50,100],"page-size":e.search.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.total},on:{"size-change":e.handleSizeChange,"current-change":e.currentChange}})],1)]),r("Reinstall",{ref:"reinstallDia",attrs:{visible:e.reinstallVis,title:e.$lang.reinstall_the_system},on:{"update:visible":function(t){e.reinstallVis=t},"reinstall-success":e.reinstallDcimSuc}}),r("Crackpass",{ref:"crackpassDia",attrs:{visible:e.crackPassVis,title:e.$lang.cracking_password},on:{"update:visible":function(t){e.crackPassVis=t},"crackpass-success":e.crackpassDcimSuc}})],1)},s=[],i=(r("99af"),r("caad"),r("b0c0"),r("a9e3"),r("ac1f"),r("2532"),r("841c"),r("1276"),r("96cf"),r("1da1")),c=r("4e25"),o=r("dc57"),u=r("0aab"),l=r("bd52"),p={components:{Reinstall:u["a"],Crackpass:l["a"]},metaInfo:{title:window.zjmf_cw_lang.manual_resources},data:function(){return{id:this.$route.query.id,tableLoading:!1,reinstallVis:!1,crackPassVis:!1,paymentOptions:[],typeSelectOption:[],statusSelectOption:[{id:1,name:"待审核"},{id:2,name:"通过"},{id:3,name:"拒绝"}],accessTypeSelectOptions:[{id:1,name:"余额"},{id:2,name:"仅记录"},{id:3,name:"流水支持"}],showSearchArea:!1,showSearchArea2:!1,search:{pid:void 0,in_ip:void 0,page:1,limit:Number(localStorage.getItem("limit"))||50,order:"id",sort:"desc",keyword:void 0},search2:{page:1,limit:Number(localStorage.getItem("limit"))||50,order:void 0,sort:"desc",name:void 0,phone:void 0,type:void 0},labelWidth:window.document.body.clientWidth>768?"155px":null,activeName:"grouping",toData:[],dialogVis:!1,withdrawDepositVis:!1,isEdit:!1,isAdd:!1,isReject:!1,isPass:!1,tableData:[],tableData02:[],pageInfo:{total:0},pageInfo2:{total:0},formData:{},withdrawDepositData:{id:void 0,status:void 0,type:void 0,payment:void 0,trans_id:void 0,reason:void 0},defaultProps:{label:"name",children:"children"},rules:{affiliate_renew_type:[{required:!0,message:"请选择二次续费比例比例类型",trigger:"change"}],affiliate_type:[{required:!0,message:"请选择推介计划比例类型",trigger:"change"}],affiliate_reorder_type:[{required:!0,message:"请选择二次订单比例类型",trigger:"change"}]},accessOrRjectRules:{type:[{required:!0,message:"请选择通过类型",trigger:"change"}],payment:[{required:!0,message:"请选择支付方式",trigger:"change"}],trans_id:[{required:!0,message:"请填写付款流水号",trigger:"blur"}],reason:[{required:!0,message:"请填写驳回原因",trigger:"blur"}]},pidsOptions:[],btnLoading:!1}},beforeCreate:function(){a=this},filters:{withdrawDepositDataFilter:function(e){return 1===e?"提现的金额将添加到推介人的余额中。":2===e?"在此列表中记录，不会有任何的操作。":3===e?"审核后系统将添加一笔交易流水。":void 0},realClass:function(e){return"on"===e?"iconfont icon-kaiji green":"off"===e?"iconfont icon-guanji red":"reboot"===e?"iconfont icon-zhongqi orange":"vnc"===e?"iconfont icon-kongzhitai1 purple":"reinstall"===e?"iconfont icon-zhongzhuang green":"crackPass"===e?"iconfont icon-zu red":void 0},realLabel:function(e){return"on"===e?a.$lang.starting_up:"off"===e?a.$lang.shutdown:"reboot"===e?a.$lang.restart:"vnc"===e?"VNC":"reinstall"===e?a.$lang.reinstall_the_system:"crackPass"===e?a.$lang.cracking_password:void 0}},methods:{cancelTask:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.$message.success(t.$lang.cancellation_request_made),a={id:e.id},r.next=4,Object(c["d"])(a);case 4:if(n=r.sent,s=n.data,200===s.status){r.next=9;break}return t.$message.error(s.msg),r.abrupt("return");case 9:e.result=null,t.$message.success(s.msg);case 11:case"end":return r.stop()}}),r)})))()},getProgress:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e.id},r.next=3,Object(c["q"])(a);case 3:if(n=r.sent,s=n.data,200===s.status){r.next=8;break}return t.$message.error(s.msg),r.abrupt("return",!1);case 8:if(e.reinstallObj=s.data,0!==s.data.length){r.next=12;break}return e.reinstallObj.progress=100,r.abrupt("return",!0);case 12:case"end":return r.stop()}}),r)})))()},goProduct:function(e){var t=e.hostid;this.$router.push({path:"/customer-view/product-innerpage",query:{hid:t,id:e.uid}})},operation:function(e,t){"dcim_client"===t.control_mode?this.dcimOperation(e,t):this.ipmiOperation(e,t)},dcimOperation:function(e,t){switch(e){case"on":this.onDcim(t.id);break;case"off":this.offDcim(t.id);break;case"reboot":this.rebootDcim(t.id);break;case"vnc":this.vncDcim(t.id);break;case"reinstall":this.reinstallDcim(t.id);break;case"crackPass":this.crackPassDcim(t.id);break;default:break}},ipmiOperation:function(e,t){switch(e){case"on":this.onIpmi(t.id);break;case"off":this.offIpmi(t.id);break;case"reboot":this.rebootIpmi(t.id);break;case"vnc":this.vncIpmi(t.id);break;default:break}},onIpmi:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_turn_on,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["w"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},onDcim:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_turn_on,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["g"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},offIpmi:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_turn_off,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["v"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},offDcim:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_turn_off,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["f"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},rebootIpmi:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_want_restart,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["x"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},rebootDcim:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_want_restart,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["h"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:t.$message.success(n.msg),t.getData();case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},vncIpmi:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_want_open_VNC,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["y"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:open(n.vnc_url);case 8:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},vncDcim:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm(t.$lang.sure_want_open_VNC,t.$lang.hint,{confirmButtonText:t.$lang.confirm,cancelButtonText:t.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["j"])(e);case 2:if(a=r.sent,n=a.data,200===n.status){r.next=7;break}return t.$message.error(n.msg),r.abrupt("return");case 7:s={password:n.data.password,url:n.data.url},t.vncDcim02(s);case 9:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()},vncDcim02:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:open("upper/dcim_client/vnc?password=".concat(e.password,"&url=").concat(e.url));case 1:case"end":return t.stop()}}),t)})))()},reinstallDcim:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$eventBus.$emit("reinstall",e),t.reinstallVis=!0;case 2:case"end":return r.stop()}}),r)})))()},reinstallDcimSuc:function(e){e&&(this.reinstallVis=!1,this.getData())},crackpassDcimSuc:function(e){e&&(this.crackPassVis=!1,this.getData())},crackPassDcim:function(e){this.$eventBus.$emit("crackPass",e),this.crackPassVis=!0},refreshStatus:function(e){"dcim_client"===e.control_mode?this.dcimRefreshRow(e):"ipmi"===e.control_mode&&this.refreshRow(e)},refreshRow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,Object(c["A"])(e.id);case 3:if(a=r.sent,n=a.data,200===n.status){r.next=10;break}return t.$message.error(n.msg),e.power_status=n.power_status?n.power_status:"",e.loading=!1,r.abrupt("return");case 10:e.power_status=n.power_status?n.power_status:"",e.loading=!1;case 12:case"end":return r.stop()}}),r)})))()},dcimRefreshRow:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,Object(c["i"])(e.id);case 3:if(a=r.sent,n=a.data,200===n.status){r.next=10;break}return t.$message.error(n.msg),e.power_status=n.power_status?n.power_status:"",e.loading=!1,r.abrupt("return");case 10:e.power_status=n.power_status?n.power_status:"",e.loading=!1;case 12:case"end":return r.stop()}}),r)})))()},onCopy:Object(o["b"])((function(e){this.$message({message:this.$lang.copy_IP_success,type:"success"})})),onError:Object(o["b"])((function(){this.$message({message:this.$lang.copy_IP_fail,type:"error"})})),toAdd:function(){this.$router.push({name:"upStreamEdit"})},toAddResource:function(){this.$route.query.id?this.$router.push({path:"addOrEdit-resource",query:{supplier:1,aid:this.$route.query.id}}):this.$router.push({name:"addOrEditResource"})},companyNameAndUserName:function(e){return e.companyname?"".concat(e.username,"(").concat(e.companyname,")"):e.username},changeTypeOption:function(e){3===e&&(this.paymentOptions=[],this.getpayType())},searchHandeClick:function(){this.getData(this.search)},searchHandeClick2:function(){this.getData2(this.search2)},editUpStream:function(e){var t=e.id;this.$router.push({path:"/upStream-edit",query:{id:t}})},editResource:function(e){var t=e.id;this.$route.query.id?this.$router.push({path:"/addOrEdit-resource",query:{supplier:1,aid:this.$route.query.id,id:t}}):this.$router.push({path:"/addOrEdit-resource",query:{id:t}})},deleteResourceManageData:function(e){var t=this;this.$confirm("此操作将永久删除该资源, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e.id},r.next=3,Object(c["k"])(a);case 3:if(n=r.sent,s=n.data,200===s.status){r.next=10;break}return t.$message.error(s.msg),r.abrupt("return",!1);case 10:t.$message.success(s.msg),t.getData(t.search);case 12:case"end":return r.stop()}}),r)})))).catch((function(){}))},deleteResource:function(e){var t=this;this.$confirm(this.$lang.action_permanent_delete_resource,this.$lang.hint,{confirmButtonText:this.$lang.confirm,cancelButtonText:this.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e.id},r.next=3,Object(c["k"])(a);case 3:if(n=r.sent,s=n.data,200===s.status){r.next=10;break}return t.$message.error(s.msg),r.abrupt("return",!1);case 10:t.$message.success(s.msg),t.getData(t.search);case 12:case"end":return r.stop()}}),r)})))).catch((function(){}))},deleteUpStream:function(e){var t=this;this.$confirm("此操作将永久删除该上游, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:e.id},r.next=3,Object(c["l"])(a);case 3:if(n=r.sent,s=n.data,200===s.status){r.next=10;break}return t.$message.error(s.msg),r.abrupt("return",!1);case 10:t.$message.success(s.msg),t.getData2(t.search2);case 12:case"end":return r.stop()}}),r)})))).catch((function(){}))},clearSearchHandleClick:function(){this.search.page=1,this.search.limit=50,this.search.in_ip=void 0,this.search.pid=void 0},clearSearchHandleClick2:function(){this.search2.page=1,this.search2.limit=50,this.search2.name=void 0,this.search2.phone=void 0,this.search2.sort="desc",this.showSearchArea2=!1,this.getData2(this.search2)},getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,s,i,o,u,l,p,d,m,h,g,f,b,w;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$urlUpdate(e.search,location.href,e.$route.query),e.tableLoading=!0,r=e.search,e.$route.query.id&&(r.api_id=e.$route.query.id),t.next=6,Object(c["r"])(r);case 6:if(a=t.sent,n=a.data,200!==n.status)e.$message.error(n.msg);else{for(s=0;s<n.data.length;s++)i=n.data[s],i.loading=!1,i.timer=null,i.result=null,o=Math.abs(e.$moment(1e3*i.nextduedate).diff(e.$moment(1e3*i.paid_time),"days")||0),i.nextColor=o>10&&0!==o?"red":"",(i.button.includes("reinstall")||i.button.includes("crackPass"))&&(i.reinstallObj={});for(e.typeSelectOption=n.apis,e.tableData=n.data,e.pageInfo.total=n.total,e.tableLoading=!1,u=0;u<n.data.length;u++)l=n.data[u],l.button.includes("reinstall")||l.button.includes("crackPass");for(p=0;p<n.data.length;p++)d=n.data[p],d.button.includes("reinstall")||d.button.includes("crackPass");if(e.$route.params.id){for(m=e.$route.params.type,h=e.$route.params.id,g=n.data,f={},b=0;b<g.length;b++)w=g[b],w.id===h&&(f=w);"ipmi"===m?e.refreshRow(f):"dcim_client"===m&&e.dcimRefreshRow(f)}}case 9:case"end":return t.stop()}}),t)})))()},getData2:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e||(t.search2.type="all"),r.next=3,Object(c["s"])(t.search2);case 3:if(a=r.sent,n=a.data,200===n.status){r.next=8;break}return n.msg&&t.$message.error(n.msg),r.abrupt("return");case 8:e||(t.typeSelectOption=n.data),t.tableData02=n.data,t.pageInfo2.total02=n.total;case 11:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.search.limit=e,t.getData(t.search);case 2:case"end":return r.stop()}}),r)})))()},handleSizeChange02:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.search2.limit=e,t.getData2();case 2:case"end":return r.stop()}}),r)})))()},currentChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.search.page=e,t.getData(t.search);case 2:case"end":return r.stop()}}),r)})))()},currentChange02:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.search2.page=e,t.getData2();case 2:case"end":return r.stop()}}),r)})))()},onOpen:function(){},onClose:function(){this.$refs.elForm.resetFields(),this.dialogVis=!1,this.isEdit=!1,this.isAdd=!1,this.pidsOptions=[]},close:function(){this.$emit("update:visible",!1),this.dialogVis=!1,this.isEdit=!1,this.isAdd=!1,this.pidsOptions=[]},onLadderOpen:function(){},onLadderClose:function(){this.$refs.elLadderForm.resetFields(),this.withdrawDepositVis=!1,this.withdrawDepositData={id:void 0,status:void 0,type:void 0,payment:void 0,trans_id:void 0,reason:void 0}},ladderclose:function(){this.$emit("update:visible",!1),this.withdrawDepositVis=!1,this.isReject=!1,this.isPass=!1},resetForm:function(){this.$refs.elForm.resetFields()},sortChange:function(e,t,r){this.search.order=e.prop,"ascending"===e.order?this.search.sort="asc":this.search.sort="desc",this.getData(this.search)},sortChange2:function(e,t,r){this.search2.order=e.prop,"ascending"===e.order?this.search2.sort="asc":this.search2.sort="desc",this.getData2(this.search2)}},created:function(){var e=location.href.split("searchObj")[1]?this.$arrangeUrl(encodeURI(location.href.split("searchObj")[1])):void 0;if(e)for(var t in JSON.parse(e))this.search[t]=JSON.parse(e)[t];this.$route.params.tabIndex&&2===this.$route.params.tabIndex&&(this.activeName="ladder"),this.getData(this.search)},beforeDestroy:function(){for(var e=0;e<this.tableData.length;e++){var t=this.tableData[e];t.button.includes("reinstall")||t.button.includes("crackPass")}}},d=p,m=(r("71d4"),r("2877")),h=Object(m["a"])(d,n,s,!1,null,"1c20a84a",null);t["default"]=h.exports},"71d4":function(e,t,r){"use strict";var a=r("a09d"),n=r.n(a);n.a},a09d:function(e,t,r){}}]);