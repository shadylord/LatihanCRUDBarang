(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],s[i]&&d.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3a02":function(t,e,a){},"43f2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=a("1dce"),n=a.n(s),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"container mt-5 mb-5"},[a("router-view")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand",attrs:{tag:"a",to:"/"}},[t._v("Latihan CRUD")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/","exact-active-class":"active"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/items","exact-active-class":"active"}},[t._v("Items")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/items/add","exact-active-class":"active"}},[t._v("Add Item")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/about","exact-active-class":"active"}},[t._v("About")])],1)])])],1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u={},m=u,d=a("2877"),p=Object(d["a"])(m,c,l,!1,null,"3f5f6734",null),v=p.exports,b={components:{Navbar:v}},h=b,f=Object(d["a"])(h,i,o,!1,null,"2c7f37ec",null),g=f.exports,_=a("8c4f"),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Home")]),a("hr"),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis, tempore, vel aperiam earum error explicabo excepturi aspernatur reiciendis est odit sunt vero iure quis esse id laboriosam dolorem aliquam.")]),a("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, repellat. Autem ducimus voluptate facilis molestias iusto laborum beatae dolore, architecto tempore nostrum accusamus dolorum nulla nam, magnam saepe tenetur animi?")])])}],k={components:{}},O=k,x=(a("f9e6"),Object(d["a"])(O,y,C,!1,null,"3dc609f2",null)),j=x.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("About")]),r("hr"),r("div",{staticClass:"card mb-5"},[r("img",{staticClass:"card-img-top",attrs:{src:a("ec7b"),alt:"Author"}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v("About Author")]),r("p",{staticClass:"card-text mt-4 ml-4 mb-4 quote"},[r("em",[t._v("I rock, I roll, I bloom, I grow!")])]),r("p",{staticClass:"card-text float-right"},[r("small",{staticClass:"text-muted"},[t._v("Rizky Ramadhan 2019")])])])]),r("h5",[t._v("Lorem ipsum dolor sit amet")]),r("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius molestiae laboriosam assumenda facilis nam, ducimus provident dolore cupiditate corrupti quia mollitia debitis ullam nobis aperiam quisquam atque libero asperiores!")]),r("p",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aut impedit nam rem consequatur, quasi eveniet hic in aliquid, molestiae omnis vitae fuga doloribus consequuntur a recusandae iste? Molestias, laudantium!")]),r("p",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis aut impedit nam rem consequatur, quasi eveniet hic in aliquid, molestiae omnis vitae fuga doloribus consequuntur a recusandae iste? Molestias, laudantium!")])])}],I=a("bc3a"),q=a.n(I),P={data:function(){return{imageUrl:""}}},E=P,D=(a("dec6"),Object(d["a"])(E,$,w,!1,null,"4ec3f2c7",null)),B=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Items")]),a("hr"),a("Items")],1)},S=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.success?a("div",{staticClass:"alert alert-dismissible alert-success"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v("×")]),a("strong",[t._v("Sukses!")]),t._v(" Data berhasil dihapus.\n    ")]):t._e(),t.items.length>0?a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.items,function(e,r){return a("Item",{key:e.id,attrs:{item:e,itemIndex:r},on:{deleteItemChildMethod:t.deleteItem}})}),1)]):a("div",[a("p",[t._v(t._s(t.loading))])])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("No.")]),a("th",{attrs:{scope:"col"}},[t._v("Nama")]),a("th",{attrs:{scope:"col"}},[t._v("Harga")]),a("th",{attrs:{scope:"col"}},[t._v("Edit")]),a("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(t.itemIndex+1))]),a("td",[t._v(t._s(t.item.nama))]),a("td",[t._v(t._s(t.item.harga))]),a("td",[a("button",{staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:t.updateItem}},[t._v("Update")])]),a("td",[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.deleteItem}},[t._v("Delete")])])])},H=[],L={props:["item","itemIndex"],methods:{updateItem:function(){this.$router.push("/items/update/".concat(this.item.id))},deleteItem:function(){var t=this;q.a.delete("https://shady-barang-backend.herokuapp.com/api/barang/delete/".concat(this.item.id)).then(function(e){t.$emit("deleteItemChildMethod",t.itemIndex)}).catch(function(t){return console.log(t)})}}},U=L,R=Object(d["a"])(U,T,H,!1,null,"7437e5e0",null),J=R.exports,z=a("5118"),F={data:function(){return{loading:"Loading ...",items:[],success:!1}},mounted:function(){var t=this;q.a.get("https://shady-barang-backend.herokuapp.com/api/barang").then(function(e){t.items=e.data,0===t.items.length&&(t.loading="There is no data yet.")}).catch(function(t){return console.log(t)})},methods:{deleteItem:function(t){var e=this;this.items.splice(t,1),this.success=!0,Object(z["setTimeout"])(function(){return e.success=!1},3e3)}},components:{Item:J}},G=F,K=Object(d["a"])(G,M,A,!1,null,"32d280ae",null),Q=K.exports,V={components:{Items:Q}},W=V,X=Object(d["a"])(W,N,S,!1,null,"5e32b317",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Add an Item")]),a("hr"),a("CreateItem")],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-6 col-md-8"},[this.success?a("div",{staticClass:"alert alert-dismissible alert-success mb-5"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v("×")]),a("strong",[t._v("Sukses!")]),t._v(" Data berhasil ditambahkan. Anda akan dialihkan secara otomatis dalam 3 detik.\n    ")]):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBarang(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"namaBarang"}},[t._v("Nama Barang")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.nama,expression:"item.nama"}],staticClass:"form-control",attrs:{type:"text",id:"namaBarang",placeholder:"Masukkan nama barang"},domProps:{value:t.item.nama},on:{input:function(e){e.target.composing||t.$set(t.item,"nama",e.target.value)}}}),t.submitted?a("div",[t.$v.item.nama.required?t._e():a("small",{staticClass:"form-text text-danger",attrs:{id:"errorName"}},[t._v("Nama tidak boleh kosong!")])]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"hargaBarang"}},[t._v("Harga Barang")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.harga,expression:"item.harga"}],staticClass:"form-control",attrs:{type:"number",id:"hargaBarang",placeholder:"Masukkan harga barang"},domProps:{value:t.item.harga},on:{input:function(e){e.target.composing||t.$set(t.item,"harga",e.target.value)}}}),t.submitted?a("div",[t.$v.item.harga.required?t._e():a("small",{staticClass:"form-text text-danger",attrs:{id:"errorHarga"}},[t._v("Harga tidak boleh kosong!")])]):t._e()]),a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Add")])])])])},at=[],rt=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),st=a("b5ae");function nt(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function it(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?nt(a,!0).forEach(function(e){Object(rt["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):nt(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var ot={data:function(){return{item:{nama:"",harga:""},submitted:!1,success:!1}},validations:{item:{nama:{required:st["required"]},harga:{required:st["required"]}}},methods:{addBarang:function(){var t=this;this.submitted=!0,this.$v.$touch(),this.$v.$invalid||q.a.post("https://shady-barang-backend.herokuapp.com/api/barang/add",it({},this.item)).then(function(e){t.success=!0,Object(z["setTimeout"])(function(){t.$router.push("/items")},3e3)}).catch(function(t){return console.log(t)})}}},ct=ot,lt=Object(d["a"])(ct,et,at,!1,null,"50a90ab0",null),ut=lt.exports,mt={components:{CreateItem:ut}},dt=mt,pt=Object(d["a"])(dt,Z,tt,!1,null,"80f8a4bc",null),vt=pt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Update Item")]),a("hr"),a("UpdateItem")],1)},ht=[],ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-6 col-md-8"},[this.success?a("div",{staticClass:"alert alert-dismissible alert-success mb-5"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v("×")]),a("strong",[t._v("Sukses!")]),t._v(" Data berhasil diupdate. Anda akan dialihkan secara otomatis dalam 3 detik.\n    ")]):t._e(),""!==t.item.nama?a("form",{on:{submit:function(e){return e.preventDefault(),t.updateItem(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"namaBarang"}},[t._v("Nama Barang")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.nama,expression:"item.nama"}],staticClass:"form-control",attrs:{type:"text",id:"namaBarang",placeholder:"Masukkan nama barang"},domProps:{value:t.item.nama},on:{input:function(e){e.target.composing||t.$set(t.item,"nama",e.target.value)}}}),t.submitted?a("div",[t.$v.item.nama.required?t._e():a("small",{staticClass:"form-text text-danger",attrs:{id:"errorName"}},[t._v("Nama tidak boleh kosong!")])]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"hargaBarang"}},[t._v("Harga Barang")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.harga,expression:"item.harga"}],staticClass:"form-control",attrs:{type:"number",id:"hargaBarang",placeholder:"Masukkan harga barang"},domProps:{value:t.item.harga},on:{input:function(e){e.target.composing||t.$set(t.item,"harga",e.target.value)}}}),t.submitted?a("div",[t.$v.item.harga.required?t._e():a("small",{staticClass:"form-text text-danger",attrs:{id:"errorHarga"}},[t._v("Harga tidak boleh kosong!")])]):t._e()]),a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Update")])]):a("div",[a("p",[t._v(t._s(t.loading))])])])])},gt=[];function _t(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function yt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_t(a,!0).forEach(function(e){Object(rt["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_t(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var Ct={data:function(){return{loading:"Loading ...",item:{nama:"",harga:""},submitted:!1,success:!1}},validations:{item:{nama:{required:st["required"]},harga:{required:st["required"]}}},mounted:function(){var t=this;q.a.get("https://shady-barang-backend.herokuapp.com/api/barang/".concat(this.$route.params.id)).then(function(e){t.item=e.data}).catch(function(t){return console.log(t)})},methods:{updateItem:function(){var t=this;this.submitted=!0,this.$v.$touch(),this.$v.$invalid||q.a.patch("https://shady-barang-backend.herokuapp.com/api/barang/update/".concat(this.item.id),yt({},this.item)).then(function(e){t.success=!0,Object(z["setTimeout"])(function(){t.$router.push("/items")},3e3)}).catch(function(t){return console.log(t)})}}},kt=Ct,Ot=Object(d["a"])(kt,ft,gt,!1,null,"36deacae",null),xt=Ot.exports,jt={components:{UpdateItem:xt}},$t=jt,wt=Object(d["a"])($t,bt,ht,!1,null,null,null),It=wt.exports;r["a"].use(_["a"]);var qt=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:B},{path:"/items",name:"items",component:Y},{path:"/items/add",name:"create-item",component:vt},{path:"/items/update/:id",name:"update-item",component:It}]});a("8598");r["a"].use(n.a),r["a"].config.productionTip=!1,new r["a"]({router:qt,render:function(t){return t(g)}}).$mount("#app")},dec6:function(t,e,a){"use strict";var r=a("43f2"),s=a.n(r);s.a},ec7b:function(t,e,a){t.exports=a.p+"img/blooms.69b238f6.jpg"},f9e6:function(t,e,a){"use strict";var r=a("3a02"),s=a.n(r);s.a}});
//# sourceMappingURL=app.d50e31e4.js.map