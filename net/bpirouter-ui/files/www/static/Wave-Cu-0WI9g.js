import{d as r,k as l,a as f,e as d,h as c,ag as v,t as m,o as p,af as u,r as o}from"./index-DPXSnRha.js";const{cubicBezierEaseInOut:t}=l;function w({duration:e=".2s",delay:i=".1s"}={}){return[r("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),r("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),r("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${t},
 max-width ${e} ${t} ${i},
 margin-left ${e} ${t} ${i},
 margin-right ${e} ${t} ${i};
 `),r("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${t} ${i},
 max-width ${e} ${t},
 margin-left ${e} ${t},
 margin-right ${e} ${t};
 `)]}const $=f("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),x=d({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){v("-base-wave",$,m(e,"clsPrefix"));const i=o(null),n=o(!1);let a=null;return p(()=>{a!==null&&window.clearTimeout(a)}),{active:n,selfRef:i,play(){a!==null&&(window.clearTimeout(a),n.value=!1,a=null),u(()=>{var s;(s=i.value)===null||s===void 0||s.offsetHeight,n.value=!0,a=window.setTimeout(()=>{n.value=!1,a=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});export{x as N,w as f};
