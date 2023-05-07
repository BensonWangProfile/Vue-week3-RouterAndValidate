import{_ as v,e as _,f as g,g as w,l as y,s as k,o as I,c as x,a,w as m,u as s,z,b as l,d as t,F as n,n as i,E as c,t as C,h as E,p as S,i as L}from"./index-96ef7949.js";const r=d=>(S("data-v-a9fa4db2"),d=d(),L(),d),T={class:"container w-60"},W={for:"email",class:"form-label col-8"},q={for:"password",class:"form-label col-8"},B={for:"phone",class:"form-label col-8"},F={for:"shipping",class:"form-label col-8"},N=r(()=>l("option",{value:"店到店"},"店到店",-1)),P=r(()=>l("option",{value:"來店取"},"來店取",-1)),V=r(()=>l("option",{value:"宅配"},"宅配",-1)),M={for:"note",class:"form-label col-8"},O={class:"row gap-3"},$=["disabled"],j=["onClick"],D={__name:"LoginItem",setup(d){Object.keys(_).forEach(o=>{g(o,_[o])}),w({generateMessage:y({zh_TW:z}),validateOnInput:!0}),k("zh_TW");function u(o){return o?/^09\d{8}$/.test(o)?!0:"請輸入正確手機號碼":"請輸入手機號碼"}function f(o){return/^[\u4e00-\u9fa5]+$/.test(o)?!0:"請輸入中文"}return(o,p)=>(I(),x("div",T,[a(s(E),{class:"col border rounded-4 p-5"},{default:m(({errors:e,meta:b,resetForm:h})=>[l("label",W,[t("Eamil "),a(s(n),{name:"email",class:i(["form-control",{"":!e.email,"is-invalid":e.email}]),label:"信箱",type:"email",rules:"required|email"},null,8,["class"]),a(s(c),{name:"email",class:"invalid-feedback"})]),l("label",q,[t("Password "),a(s(n),{name:"password",class:i(["form-control",{"":!e.password,"is-invalid":e.password}]),label:"密碼",type:"password",rules:"required|min:6"},null,8,["class"]),a(s(c),{name:"password",class:"invalid-feedback"})]),l("label",B,[t("Phone "),a(s(n),{name:"phone",class:i(["form-control",{"":!e.phone,"is-invalid":e.phone}]),label:"手機",rules:u},null,8,["class"]),a(s(c),{name:"phone",class:"invalid-feedback"})]),l("label",F,[t("Shipping Way "),a(s(n),{name:"shipping",class:i(["form-control",{"":!e.shipping,"is-invalid":e.shipping}]),label:"取貨方式",as:"select",rules:"required"},{default:m(()=>[N,P,V]),_:2},1032,["class"]),a(s(c),{name:"shipping",class:"invalid-feedback"})]),l("label",M,[t("備註 "),a(s(n),{name:"note",class:i(["form-control",{"":!e.note,"is-invalid":e.note}]),label:"備註",as:"textarea",rules:f},null,8,["class"]),a(s(c),{name:"note",class:"invalid-feedback"})]),l("div",O,[l("button",{type:"submit",class:"btn btn-primary",disabled:!b.valid},"送出",8,$),l("button",{type:"button",class:"btn btn-primary",onClick:h},"重置",8,j)]),t(" "+C(e),1)]),_:1})]))}},A=v(D,[["__scopeId","data-v-a9fa4db2"]]);export{A as default};
