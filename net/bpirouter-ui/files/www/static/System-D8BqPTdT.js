import{d as Xe,h as _,b6 as Jt,A as b,b7 as Yt,b8 as et,b9 as Kt,M as Qt,U as Ht,V as Zt,ab as ea,T as kt,Q as ta,aR as aa,ar as na,f as ze,aD as sa,c,a as h,F as B,G as q,I as oa,J as bt,O as Tt,ac as mt,u as la,b as Vt,ba as ra,az as gt,o as ia,aG as da,e as ca,aH as ua,Y as pa,bb as fa,af as va,aC as yt,g as ue,at as Qe,Z as ba,N as ma,W as pe,X as Ze,bc as Rt,k as Gt,D as j,x as qe,v as u,m as f,p,bd as ga,q as t,be as ya,i as ha,l as Y,n as o,C as xa,y as re,B as D,E as X,a0 as $t,r as $,_ as Ve}from"./index-DNEJFYbL.js";import{u as wa,S as Ue}from"./SectionCard-D0St4IU0.js";import{_ as Ge,a as _a,b as Se,N as ht}from"./DrawerForm-Dnea3ts7.js";import{u as Ca,a as Pt,F as O}from"./FullScreenOverlay-CJgc5-m-.js";import{S as Et}from"./StatusDot-agR5gIiD.js";import{_ as ka}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Te}from"./createLucideIcon-DW604vJS.js";import{k as Sa,l as It,o as Ra,N as Re}from"./Select-BQT2jx5F.js";import{b as za,u as Wt,N as Q}from"./Input-0e5g600C.js";import"./ChevronRight-BGsKvZ6A.js";import"./index-5NN1E8il.js";import"./format-length-CRNz7Xta.js";const Ta=It(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[It("&::-webkit-scrollbar",{width:0,height:0})]),$a=Xe({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const a=b(null);function e(m){!(m.currentTarget.offsetWidth<m.currentTarget.scrollWidth)||m.deltaY===0||(m.currentTarget.scrollLeft+=m.deltaY+m.deltaX,m.preventDefault())}const d=Jt();return Ta.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Sa,ssr:d}),Object.assign({selfRef:a,handleWheel:e},{scrollTo(...m){var g;(g=a.value)===null||g===void 0||g.scrollTo(...m)}})},render(){return _("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Pa=/\s/;function Ea(a){for(var e=a.length;e--&&Pa.test(a.charAt(e)););return e}var Ia=/^\s+/;function Wa(a){return a&&a.slice(0,Ea(a)+1).replace(Ia,"")}var At=NaN,Aa=/^[-+]0x[0-9a-f]+$/i,La=/^0b[01]+$/i,Ba=/^0o[0-7]+$/i,Ua=parseInt;function Lt(a){if(typeof a=="number")return a;if(Yt(a))return At;if(et(a)){var e=typeof a.valueOf=="function"?a.valueOf():a;a=et(e)?e+"":e}if(typeof a!="string")return a===0?a:+a;a=Wa(a);var d=La.test(a);return d||Ba.test(a)?Ua(a.slice(2),d?2:8):Aa.test(a)?At:+a}var xt=function(){return Kt.Date.now()},Fa="Expected a function",Da=Math.max,Oa=Math.min;function ja(a,e,d){var R,m,g,C,w,z,W=0,P=!1,A=!1,H=!0;if(typeof a!="function")throw new TypeError(Fa);e=Lt(e)||0,et(d)&&(P=!!d.leading,A="maxWait"in d,g=A?Da(Lt(d.maxWait)||0,e):g,H="trailing"in d?!!d.trailing:H);function k(y){var I=R,fe=m;return R=m=void 0,W=y,C=a.apply(fe,I),C}function T(y){return W=y,w=setTimeout(M,e),P?k(y):C}function U(y){var I=y-z,fe=y-W,ve=e-I;return A?Oa(ve,g-fe):ve}function N(y){var I=y-z,fe=y-W;return z===void 0||I>=e||I<0||A&&fe>=g}function M(){var y=xt();if(N(y))return F(y);w=setTimeout(M,U(y))}function F(y){return w=void 0,H&&R?k(y):(R=m=void 0,C)}function ne(){w!==void 0&&clearTimeout(w),W=0,R=z=m=w=void 0}function ae(){return w===void 0?C:F(xt())}function S(){var y=xt(),I=N(y);if(R=arguments,m=this,z=y,I){if(w===void 0)return T(z);if(A)return clearTimeout(w),w=setTimeout(M,e),k(z)}return w===void 0&&(w=setTimeout(M,e)),C}return S.cancel=ne,S.flush=ae,S}var Na="Expected a function";function Ma(a,e,d){var R=!0,m=!0;if(typeof a!="function")throw new TypeError(Na);return et(d)&&(R="leading"in d?!!d.leading:R,m="trailing"in d?!!d.trailing:m),ja(a,e,{leading:R,maxWait:e,trailing:m})}const Ha=Xe({name:"Add",render(){return _("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),zt=Qt("n-tabs"),qt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Bt=Xe({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:qt,slots:Object,setup(a){const e=Ht(zt,null);return e||Zt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:e.paneStyleRef,class:e.paneClassRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){return _("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Va=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},sa(qt,["displayDirective"])),St=Xe({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Va,setup(a){const{mergedClsPrefixRef:e,valueRef:d,typeRef:R,closableRef:m,tabStyleRef:g,addTabStyleRef:C,tabClassRef:w,addTabClassRef:z,tabChangeIdRef:W,onBeforeLeaveRef:P,triggerRef:A,handleAdd:H,activateTab:k,handleClose:T}=Ht(zt);return{trigger:A,mergedClosable:ze(()=>{if(a.internalAddable)return!1;const{closable:U}=a;return U===void 0?m.value:U}),style:g,addStyle:C,tabClass:w,addTabClass:z,clsPrefix:e,value:d,type:R,handleClose(U){U.stopPropagation(),!a.disabled&&T(a.name)},activateTab(){if(a.disabled)return;if(a.internalAddable){H();return}const{name:U}=a,N=++W.id;if(U!==d.value){const{value:M}=P;M?Promise.resolve(M(a.name,d.value)).then(F=>{F&&W.id===N&&k(U)}):k(U)}}}},render(){const{internalAddable:a,clsPrefix:e,name:d,disabled:R,label:m,tab:g,value:C,mergedClosable:w,trigger:z,$slots:{default:W}}=this,P=m??g;return _("div",{class:`${e}-tabs-tab-wrapper`},this.internalLeftPadded?_("div",{class:`${e}-tabs-tab-pad`}):null,_("div",Object.assign({key:d,"data-name":d,"data-disabled":R?!0:void 0},ea({class:[`${e}-tabs-tab`,C===d&&`${e}-tabs-tab--active`,R&&`${e}-tabs-tab--disabled`,w&&`${e}-tabs-tab--closable`,a&&`${e}-tabs-tab--addable`,a?this.addTabClass:this.tabClass],onClick:z==="click"?this.activateTab:void 0,onMouseenter:z==="hover"?this.activateTab:void 0,style:a?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),_("span",{class:`${e}-tabs-tab__label`},a?_(kt,null,_("div",{class:`${e}-tabs-tab__height-placeholder`}," "),_(ta,{clsPrefix:e},{default:()=>_(Ha,null)})):W?W():typeof P=="object"?P:aa(P??d)),w&&this.type==="card"?_(na,{clsPrefix:e,class:`${e}-tabs-tab__close`,onClick:this.handleClose,disabled:R}):null))}}),Ga=c("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[h("segment-type",[c("tabs-rail",[B("&.transition-disabled",[c("tabs-capsule",`
 transition: none;
 `)])])]),h("top",[c("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),h("left",[c("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),h("left, right",`
 flex-direction: row;
 `,[c("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),c("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),h("right",`
 flex-direction: row-reverse;
 `,[c("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),c("tabs-bar",`
 left: 0;
 `)]),h("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[c("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),c("tabs-bar",`
 top: 0;
 `)]),c("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[c("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),c("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[c("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[h("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),h("flex",[c("tabs-nav",`
 width: 100%;
 position: relative;
 `,[c("tabs-wrapper",`
 width: 100%;
 `,[c("tabs-tab",`
 margin-right: 0;
 `)])])]),c("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[q("prefix, suffix",`
 display: flex;
 align-items: center;
 `),q("prefix","padding-right: 16px;"),q("suffix","padding-left: 16px;")]),h("top, bottom",[B(">",[c("tabs-nav",[c("tabs-nav-scroll-wrapper",[B("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),B("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),h("shadow-start",[B("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),h("shadow-end",[B("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),h("left, right",[c("tabs-nav-scroll-content",`
 flex-direction: column;
 `),B(">",[c("tabs-nav",[c("tabs-nav-scroll-wrapper",[B("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),h("shadow-start",[B("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),h("shadow-end",[B("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),c("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[c("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[B("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),B("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),c("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),c("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),c("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),c("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[h("disabled",{cursor:"not-allowed"}),q("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),q("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),c("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[B("&.transition-disabled",`
 transition: none;
 `),h("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),c("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),c("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[B("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),B("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),B("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),B("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),B("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),c("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),h("line-type, bar-type",[c("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[B("&:hover",{color:"var(--n-tab-text-color-hover)"}),h("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),h("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),c("tabs-nav",[h("line-type",[h("top",[q("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 bottom: -1px;
 `)]),h("left",[q("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 right: -1px;
 `)]),h("right",[q("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 left: -1px;
 `)]),h("bottom",[q("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-bar",`
 top: -1px;
 `)]),q("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-bar",`
 border-radius: 0;
 `)]),h("card-type",[q("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),c("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[h("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[q("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),oa("disabled",[B("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),h("closable","padding-right: 8px;"),h("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),h("disabled","color: var(--n-tab-text-color-disabled);")])]),h("left, right",`
 flex-direction: column; 
 `,[q("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),c("tabs-wrapper",`
 flex-direction: column;
 `),c("tabs-tab-wrapper",`
 flex-direction: column;
 `,[c("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),h("top",[h("card-type",[c("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),q("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[h("active",`
 border-bottom: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),h("left",[h("card-type",[c("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),q("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[h("active",`
 border-right: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),h("right",[h("card-type",[c("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),q("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[h("active",`
 border-left: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),h("bottom",[h("card-type",[c("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),q("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[h("active",`
 border-top: 1px solid #0000;
 `)]),c("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),c("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),wt=Ma,qa=Object.assign(Object.assign({},Vt.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Xa=Xe({name:"Tabs",props:qa,slots:Object,setup(a,{slots:e}){var d,R,m,g;const{mergedClsPrefixRef:C,inlineThemeDisabled:w,mergedComponentPropsRef:z}=la(a),W=Vt("Tabs","-tabs",Ga,ra,a,C),P=b(null),A=b(null),H=b(null),k=b(null),T=b(null),U=b(null),N=b(!0),M=b(!0),F=Wt(a,["labelSize","size"]),ne=ze(()=>{var l,r;if(F.value)return F.value;const v=(r=(l=z==null?void 0:z.value)===null||l===void 0?void 0:l.Tabs)===null||r===void 0?void 0:r.size;return v||"medium"}),ae=Wt(a,["activeName","value"]),S=b((R=(d=ae.value)!==null&&d!==void 0?d:a.defaultValue)!==null&&R!==void 0?R:e.default?(g=(m=bt(e.default())[0])===null||m===void 0?void 0:m.props)===null||g===void 0?void 0:g.name:null),y=za(ae,S),I={id:0},fe=ze(()=>{if(!(!a.justifyContent||a.type==="card"))return{display:"flex",justifyContent:a.justifyContent}});gt(y,()=>{I.id=0,Pe(),Ee()});function ve(){var l;const{value:r}=y;return r===null?null:(l=P.value)===null||l===void 0?void 0:l.querySelector(`[data-name="${r}"]`)}function $e(l){if(a.type==="card")return;const{value:r}=A;if(!r)return;const v=r.style.opacity==="0";if(l){const x=`${C.value}-tabs-bar--disabled`,{barWidth:L,placement:J}=a;if(l.dataset.disabled==="true"?r.classList.add(x):r.classList.remove(x),["top","bottom"].includes(J)){if(Z(["top","maxHeight","height"]),typeof L=="number"&&l.offsetWidth>=L){const K=Math.floor((l.offsetWidth-L)/2)+l.offsetLeft;r.style.left=`${K}px`,r.style.maxWidth=`${L}px`}else r.style.left=`${l.offsetLeft}px`,r.style.maxWidth=`${l.offsetWidth}px`;r.style.width="8192px",v&&(r.style.transition="none"),r.offsetWidth,v&&(r.style.transition="",r.style.opacity="1")}else{if(Z(["left","maxWidth","width"]),typeof L=="number"&&l.offsetHeight>=L){const K=Math.floor((l.offsetHeight-L)/2)+l.offsetTop;r.style.top=`${K}px`,r.style.maxHeight=`${L}px`}else r.style.top=`${l.offsetTop}px`,r.style.maxHeight=`${l.offsetHeight}px`;r.style.height="8192px",v&&(r.style.transition="none"),r.offsetHeight,v&&(r.style.transition="",r.style.opacity="1")}}}function Fe(){if(a.type==="card")return;const{value:l}=A;l&&(l.style.opacity="0")}function Z(l){const{value:r}=A;if(r)for(const v of l)r.style[v]=""}function Pe(){if(a.type==="card")return;const l=ve();l?$e(l):Fe()}function Ee(){var l;const r=(l=T.value)===null||l===void 0?void 0:l.$el;if(!r)return;const v=ve();if(!v)return;const{scrollLeft:x,offsetWidth:L}=r,{offsetLeft:J,offsetWidth:K}=v;x>J?r.scrollTo({top:0,left:J,behavior:"smooth"}):J+K>x+L&&r.scrollTo({top:0,left:J+K-L,behavior:"smooth"})}const be=b(null);let De=0,ie=null;function tt(l){const r=be.value;if(r){De=l.getBoundingClientRect().height;const v=`${De}px`,x=()=>{r.style.height=v,r.style.maxHeight=v};ie?(x(),ie(),ie=null):ie=x}}function Ie(l){const r=be.value;if(r){const v=l.getBoundingClientRect().height,x=()=>{document.body.offsetHeight,r.style.maxHeight=`${v}px`,r.style.height=`${Math.max(De,v)}px`};ie?(ie(),ie=null,x()):ie=x}}function de(){const l=be.value;if(l){l.style.maxHeight="",l.style.height="";const{paneWrapperStyle:r}=a;if(typeof r=="string")l.style.cssText=r;else if(r){const{maxHeight:v,height:x}=r;v!==void 0&&(l.style.maxHeight=v),x!==void 0&&(l.style.height=x)}}}const we={value:[]},Je=b("next");function We(l){const r=y.value;let v="next";for(const x of we.value){if(x===r)break;if(x===l){v="prev";break}}Je.value=v,at(l)}function at(l){const{onActiveNameChange:r,onUpdateValue:v,"onUpdate:value":x}=a;r&&Ze(r,l),v&&Ze(v,l),x&&Ze(x,l),S.value=l}function _e(l){const{onClose:r}=a;r&&Ze(r,l)}function Ae(){const{value:l}=A;if(!l)return;const r="transition-disabled";l.classList.add(r),Pe(),l.classList.remove(r)}const se=b(null);function V({transitionDisabled:l}){const r=P.value;if(!r)return;l&&r.classList.add("transition-disabled");const v=ve();v&&se.value&&(se.value.style.width=`${v.offsetWidth}px`,se.value.style.height=`${v.offsetHeight}px`,se.value.style.transform=`translateX(${v.offsetLeft-ua(getComputedStyle(r).paddingLeft)}px)`,l&&se.value.offsetWidth),l&&r.classList.remove("transition-disabled")}gt([y],()=>{a.type==="segment"&&yt(()=>{V({transitionDisabled:!1})})}),ia(()=>{a.type==="segment"&&V({transitionDisabled:!0})});let Ye=0;function nt(l){var r;if(l.contentRect.width===0&&l.contentRect.height===0||Ye===l.contentRect.width)return;Ye=l.contentRect.width;const{type:v}=a;if((v==="line"||v==="bar")&&Ae(),v!=="segment"){const{placement:x}=a;ye((x==="top"||x==="bottom"?(r=T.value)===null||r===void 0?void 0:r.$el:U.value)||null)}}const st=wt(nt,64);gt([()=>a.justifyContent,()=>a.size],()=>{yt(()=>{const{type:l}=a;(l==="line"||l==="bar")&&Ae()})});const ge=b(!1);function ot(l){var r;const{target:v,contentRect:{width:x,height:L}}=l,J=v.parentElement.parentElement.offsetWidth,K=v.parentElement.parentElement.offsetHeight,{placement:ce}=a;if(!ge.value)ce==="top"||ce==="bottom"?J<x&&(ge.value=!0):K<L&&(ge.value=!0);else{const{value:oe}=k;if(!oe)return;ce==="top"||ce==="bottom"?J-x>oe.$el.offsetWidth&&(ge.value=!1):K-L>oe.$el.offsetHeight&&(ge.value=!1)}ye(((r=T.value)===null||r===void 0?void 0:r.$el)||null)}const Ce=wt(ot,64);function Oe(){const{onAdd:l}=a;l&&l(),yt(()=>{const r=ve(),{value:v}=T;!r||!v||v.scrollTo({left:r.offsetLeft,top:0,behavior:"smooth"})})}function ye(l){if(!l)return;const{placement:r}=a;if(r==="top"||r==="bottom"){const{scrollLeft:v,scrollWidth:x,offsetWidth:L}=l;N.value=v<=0,M.value=v+L>=x}else{const{scrollTop:v,scrollHeight:x,offsetHeight:L}=l;N.value=v<=0,M.value=v+L>=x}}const G=wt(l=>{ye(l.target)},64);ma(zt,{triggerRef:pe(a,"trigger"),tabStyleRef:pe(a,"tabStyle"),tabClassRef:pe(a,"tabClass"),addTabStyleRef:pe(a,"addTabStyle"),addTabClassRef:pe(a,"addTabClass"),paneClassRef:pe(a,"paneClass"),paneStyleRef:pe(a,"paneStyle"),mergedClsPrefixRef:C,typeRef:pe(a,"type"),closableRef:pe(a,"closable"),valueRef:y,tabChangeIdRef:I,onBeforeLeaveRef:pe(a,"onBeforeLeave"),activateTab:We,handleClose:_e,handleAdd:Oe}),Ra(()=>{Pe(),Ee()}),da(()=>{const{value:l}=H;if(!l)return;const{value:r}=C,v=`${r}-tabs-nav-scroll-wrapper--shadow-start`,x=`${r}-tabs-nav-scroll-wrapper--shadow-end`;N.value?l.classList.remove(v):l.classList.add(v),M.value?l.classList.remove(x):l.classList.add(x)});const lt={syncBarPosition:()=>{Pe()}},rt=()=>{V({transitionDisabled:!0})},Ke=ze(()=>{const{value:l}=ne,{type:r}=a,v={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[r],x=`${l}${v}`,{self:{barColor:L,closeIconColor:J,closeIconColorHover:K,closeIconColorPressed:ce,tabColor:oe,tabBorderColor:it,paneTextColor:je,tabFontWeight:ee,tabBorderRadius:dt,tabFontWeightActive:ct,colorSegment:ut,fontWeightStrong:Ne,tabColorSegment:Le,closeSize:Me,closeIconSize:ke,closeColorHover:pt,closeColorPressed:ft,closeBorderRadius:Be,[ue("panePadding",l)]:xe,[ue("tabPadding",x)]:vt,[ue("tabPaddingVertical",x)]:i,[ue("tabGap",x)]:s,[ue("tabGap",`${x}Vertical`)]:n,[ue("tabTextColor",r)]:E,[ue("tabTextColorActive",r)]:te,[ue("tabTextColorHover",r)]:me,[ue("tabTextColorDisabled",r)]:le,[ue("tabFontSize",l)]:He},common:{cubicBezierEaseInOut:Xt}}=W.value;return{"--n-bezier":Xt,"--n-color-segment":ut,"--n-bar-color":L,"--n-tab-font-size":He,"--n-tab-text-color":E,"--n-tab-text-color-active":te,"--n-tab-text-color-disabled":le,"--n-tab-text-color-hover":me,"--n-pane-text-color":je,"--n-tab-border-color":it,"--n-tab-border-radius":dt,"--n-close-size":Me,"--n-close-icon-size":ke,"--n-close-color-hover":pt,"--n-close-color-pressed":ft,"--n-close-border-radius":Be,"--n-close-icon-color":J,"--n-close-icon-color-hover":K,"--n-close-icon-color-pressed":ce,"--n-tab-color":oe,"--n-tab-font-weight":ee,"--n-tab-font-weight-active":ct,"--n-tab-padding":vt,"--n-tab-padding-vertical":i,"--n-tab-gap":s,"--n-tab-gap-vertical":n,"--n-pane-padding-left":Qe(xe,"left"),"--n-pane-padding-right":Qe(xe,"right"),"--n-pane-padding-top":Qe(xe,"top"),"--n-pane-padding-bottom":Qe(xe,"bottom"),"--n-font-weight-strong":Ne,"--n-tab-color-segment":Le}}),he=w?ca("tabs",ze(()=>`${ne.value[0]}${a.type[0]}`),Ke,a):void 0;return Object.assign({mergedClsPrefix:C,mergedValue:y,renderedNames:new Set,segmentCapsuleElRef:se,tabsPaneWrapperRef:be,tabsElRef:P,barElRef:A,addTabInstRef:k,xScrollInstRef:T,scrollWrapperElRef:H,addTabFixed:ge,tabWrapperStyle:fe,handleNavResize:st,mergedSize:ne,handleScroll:G,handleTabsResize:Ce,cssVars:w?void 0:Ke,themeClass:he==null?void 0:he.themeClass,animationDirection:Je,renderNameListRef:we,yScrollElRef:U,handleSegmentResize:rt,onAnimationBeforeLeave:tt,onAnimationEnter:Ie,onAnimationAfterEnter:de,onRender:he==null?void 0:he.onRender},lt)},render(){const{mergedClsPrefix:a,type:e,placement:d,addTabFixed:R,addable:m,mergedSize:g,renderNameListRef:C,onRender:w,paneWrapperClass:z,paneWrapperStyle:W,$slots:{default:P,prefix:A,suffix:H}}=this;w==null||w();const k=P?bt(P()).filter(S=>S.type.__TAB_PANE__===!0):[],T=P?bt(P()).filter(S=>S.type.__TAB__===!0):[],U=!T.length,N=e==="card",M=e==="segment",F=!N&&!M&&this.justifyContent;C.value=[];const ne=()=>{const S=_("div",{style:this.tabWrapperStyle,class:`${a}-tabs-wrapper`},F?null:_("div",{class:`${a}-tabs-scroll-padding`,style:d==="top"||d==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),U?k.map((y,I)=>(C.value.push(y.props.name),_t(_(St,Object.assign({},y.props,{internalCreatedByPane:!0,internalLeftPadded:I!==0&&(!F||F==="center"||F==="start"||F==="end")}),y.children?{default:y.children.tab}:void 0)))):T.map((y,I)=>(C.value.push(y.props.name),_t(I!==0&&!F?Dt(y):y))),!R&&m&&N?Ft(m,(U?k.length:T.length)!==0):null,F?null:_("div",{class:`${a}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return _("div",{ref:"tabsElRef",class:`${a}-tabs-nav-scroll-content`},N&&m?_(mt,{onResize:this.handleTabsResize},{default:()=>S}):S,N?_("div",{class:`${a}-tabs-pad`}):null,N?null:_("div",{ref:"barElRef",class:`${a}-tabs-bar`}))},ae=M?"top":d;return _("div",{class:[`${a}-tabs`,this.themeClass,`${a}-tabs--${e}-type`,`${a}-tabs--${g}-size`,F&&`${a}-tabs--flex`,`${a}-tabs--${ae}`],style:this.cssVars},_("div",{class:[`${a}-tabs-nav--${e}-type`,`${a}-tabs-nav--${ae}`,`${a}-tabs-nav`]},Tt(A,S=>S&&_("div",{class:`${a}-tabs-nav__prefix`},S)),M?_(mt,{onResize:this.handleSegmentResize},{default:()=>_("div",{class:`${a}-tabs-rail`,ref:"tabsElRef"},_("div",{class:`${a}-tabs-capsule`,ref:"segmentCapsuleElRef"},_("div",{class:`${a}-tabs-wrapper`},_("div",{class:`${a}-tabs-tab`}))),U?k.map((S,y)=>(C.value.push(S.props.name),_(St,Object.assign({},S.props,{internalCreatedByPane:!0,internalLeftPadded:y!==0}),S.children?{default:S.children.tab}:void 0))):T.map((S,y)=>(C.value.push(S.props.name),y===0?S:Dt(S))))}):_(mt,{onResize:this.handleNavResize},{default:()=>_("div",{class:`${a}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(ae)?_($a,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:ne}):_("div",{class:`${a}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},ne()))}),R&&m&&N?Ft(m,!0):null,Tt(H,S=>S&&_("div",{class:`${a}-tabs-nav__suffix`},S))),U&&(this.animated&&(ae==="top"||ae==="bottom")?_("div",{ref:"tabsPaneWrapperRef",style:W,class:[`${a}-tabs-pane-wrapper`,z]},Ut(k,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ut(k,this.mergedValue,this.renderedNames)))}});function Ut(a,e,d,R,m,g,C){const w=[];return a.forEach(z=>{const{name:W,displayDirective:P,"display-directive":A}=z.props,H=T=>P===T||A===T,k=e===W;if(z.key!==void 0&&(z.key=W),k||H("show")||H("show:lazy")&&d.has(W)){d.has(W)||d.add(W);const T=!H("if");w.push(T?pa(z,[[ba,k]]):z)}}),C?_(fa,{name:`${C}-transition`,onBeforeLeave:R,onEnter:m,onAfterEnter:g},{default:()=>w}):w}function Ft(a,e){return _(St,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:e,disabled:typeof a=="object"&&a.disabled})}function Dt(a){const e=va(a);return e.props?e.props.internalLeftPadded=!0:e.props={internalLeftPadded:!0},e}function _t(a){return Array.isArray(a.dynamicProps)?a.dynamicProps.includes("internalLeftPadded")||a.dynamicProps.push("internalLeftPadded"):a.dynamicProps=["internalLeftPadded"],a}/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=Te("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=Te("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=Te("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=Te("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=Te("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=Te("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=Te("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);async function Qa(a,e){const d=new FormData;return d.append("firmware",a),new Promise((R,m)=>{const g=new XMLHttpRequest;g.open("POST","/api/firmware"),g.setRequestHeader("Authorization",`Bearer ${Rt()}`),g.upload.onprogress=C=>{C.lengthComputable&&e&&e(Math.round(C.loaded/C.total*100))},g.onload=()=>{g.status===200?R(JSON.parse(g.responseText)):m(new Error("Upload failed"))},g.onerror=()=>m(new Error("Network error")),g.send(d)})}function Za(){const a=document.createElement("a");a.href=`/api/backup?token=${Rt()}`,a.download="",a.click()}async function en(a){const e=new FormData;e.append("backup",a);const d=await fetch("/api/backup",{method:"POST",headers:{Authorization:`Bearer ${Rt()}`},body:e});if(!d.ok)throw new Error("Restore failed");return d.json()}const tn={style:{"line-height":"1.6"}},Mt={__name:"ConfirmDialog",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},type:{type:String,default:"warning"},confirmText:{type:String,default:""}},emits:["update:show","confirm","cancel"],setup(a,{emit:e}){const{t:d}=Gt(),R=a,m=e,g=ze({get:()=>R.show,set:C=>m("update:show",C)});return(C,w)=>(j(),qe(t(ya),{show:g.value,"onUpdate:show":w[0]||(w[0]=z=>g.value=z),preset:"dialog",title:a.title,type:a.type==="danger"?"error":"warning","positive-text":a.confirmText||t(d)("common.confirm"),"negative-text":t(d)("common.cancel"),onPositiveClick:w[1]||(w[1]=z=>C.$emit("confirm")),onNegativeClick:w[2]||(w[2]=z=>C.$emit("cancel"))},{default:u(()=>[f("p",tn,p(a.message),1),ga(C.$slots,"default")]),_:3},8,["show","title","type","positive-text","negative-text"]))}},an={class:"fade-in"},nn={key:0,class:"info-list"},sn={class:"info-row"},on={class:"info-label"},ln={class:"info-row"},rn={class:"info-label"},dn={class:"info-row"},cn={class:"info-label"},un={class:"info-row",style:{"margin-bottom":"12px"}},pn={class:"info-label"},fn={class:"mono"},vn={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},bn={class:"adv-desc"},mn={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"12px"}},gn={class:"adv-desc",style:{margin:"0"}},yn={class:"rule-main"},hn={class:"mono rule-detail"},xn={class:"rule-actions"},wn={key:0,class:"adv-desc"},_n={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"12px"}},Cn={class:"adv-desc",style:{margin:"0"}},kn={class:"rule-main"},Sn={class:"mono rule-detail"},Rn={class:"rule-actions"},zn={key:0,class:"adv-desc"},Tn={key:0,class:"adv-desc"},$n={class:"info-list"},Pn={class:"info-row"},En={class:"info-label"},In={key:0,class:"info-row"},Wn={class:"info-label"},An={key:1,class:"info-row"},Ln={class:"mono"},Bn={style:{display:"flex",gap:"8px","margin-top":"12px","flex-wrap":"wrap"}},Un={class:"info-list"},Fn={class:"info-row"},Dn={class:"info-label"},On={style:{display:"flex",gap:"8px","margin-top":"12px","flex-wrap":"wrap","align-items":"center"}},jn={key:0,style:{"margin-top":"12px"}},Nn={class:"diag-output"},Mn=["src"],Hn={class:"adv-desc"},Vn={class:"info-list",style:{"margin-bottom":"12px"}},Gn={key:0,class:"info-list",style:{"margin-bottom":"12px"}},qn={class:"info-row"},Xn={class:"info-label"},Jn={class:"mono"},Yn={class:"info-row"},Kn={class:"info-label"},Qn={style:{display:"flex",gap:"8px"}},Zn={style:{display:"flex",gap:"8px","margin-bottom":"12px","flex-wrap":"wrap"}},es={key:0,class:"diag-output"},ts={key:0,class:"diag-output"},as={class:"adv-desc"},ns={__name:"System",setup(a){const{t:e}=Gt(),d=Ca(),R=xa(),m=ha(),g=b(null),C=ze(()=>`http://${window.location.hostname||"192.168.8.1"}:8081`),w=[{label:"TCP",value:"tcp"},{label:"UDP",value:"udp"},{label:"TCP+UDP",value:"tcp udp"}],z=[{label:"wan",value:"wan"},{label:"lan",value:"lan"},{label:"*",value:"*"}],W=[{label:"ACCEPT",value:"ACCEPT"},{label:"DROP",value:"DROP"},{label:"REJECT",value:"REJECT"}],P=b([]),A=b([]),H=b({wireguard:!1,openvpn:!1}),k=b({client:{},server:{}}),T=b({});async function U(){try{g.value=await $("system.get_info")}catch{}}async function N(){var i;try{P.value=((i=await $("firewall.get_redirects"))==null?void 0:i.redirects)||[]}catch{}}async function M(){var i;try{A.value=((i=await $("firewall.get_rules"))==null?void 0:i.rules)||[]}catch{}}async function F(){try{H.value=await $("vpn.get_available")}catch{}try{k.value=await $("vpn.get_status")}catch{}}async function ne(){try{T.value=await $("ddns.get_status")||{}}catch{}}async function ae(){await Promise.allSettled([U(),N(),M(),F(),ne()]),T.value.service&&(ee.enabled=T.value.enabled,ee.service_name=T.value.service,ee.domain=T.value.domain)}wa(ae,3e4);const S=b(!1),y=b(!1),I=Ve({hostname:"",timezone:""});function fe(){var i,s;I.hostname=((i=g.value)==null?void 0:i.hostname)||"",I.timezone=((s=g.value)==null?void 0:s.timezone)||"",S.value=!0}async function ve(){y.value=!0;try{await $("system.set_general",{hostname:I.hostname,timezone:I.timezone}),S.value=!1,d.success(e("common.saved")),U()}catch(i){d.error(i.message)}finally{y.value=!1}}const $e=b(!1),Fe=b(!1),Z=Ve({current:"",password:"",confirm:""});async function Pe(){if(Z.password.length<8){d.error(e("system.password.tooShort"));return}if(Z.password!==Z.confirm){d.error(e("system.password.mismatch"));return}Fe.value=!0;try{const i=await $("system.set_password",{current:Z.current,password:Z.password});$e.value=!1,i!=null&&i.new_token?(m.setToken(i.new_token),d.success(e("system.password.changed"))):(m.logout(),d.success(e("system.password.changed")),R.push({name:"login"}))}catch(i){d.error(i.message)}finally{Fe.value=!1}}const Ee=b(!1),be=b(0);async function De(i){var n;const s=(n=i.target.files)==null?void 0:n[0];if(s){try{be.value=0,Ee.value=!0,await Qa(s,E=>{be.value=E}),await $("system.flash_firmware",{keep_settings:!0}),be.value=100}catch(E){Ee.value=!1,d.error(E.message)}i.target.value=""}}function ie(){Za()}async function tt(i){var n;const s=(n=i.target.files)==null?void 0:n[0];if(s){try{await en(s),d.success(e("common.saved"))}catch(E){d.error(E.message)}i.target.value=""}}const Ie=b(!1),de=b(0),we=b(!1);async function Je(){we.value=!1,Ie.value=!0,de.value=60;try{await $("system.reboot")}catch{}const i=setInterval(()=>{de.value--,de.value<=0&&(clearInterval(i),window.location.reload())},1e3)}const We=b(!1);async function at(){We.value=!1,Ie.value=!0,de.value=90;try{await $("system.factory_reset")}catch{}const i=setInterval(()=>{de.value--,de.value<=0&&(clearInterval(i),window.location.reload())},1e3)}const _e=b(!1),Ae=b(!1),se=b(-1),V=Ve({name:"",proto:"tcp",src_dport:"",dest_ip:"",dest_port:""});function Ye(){Object.assign(V,{name:"",proto:"tcp",src_dport:"",dest_ip:"",dest_port:""}),se.value=-1,_e.value=!0}function nt(i){Object.assign(V,{name:i.name,proto:i.proto,src_dport:i.src_dport,dest_ip:i.dest_ip,dest_port:i.dest_port}),se.value=i.index,_e.value=!0}async function st(){Ae.value=!0;try{se.value>=0?await $("firewall.set_redirect",{index:se.value,...V}):await $("firewall.add_redirect",V),_e.value=!1,d.success(e("common.saved")),N()}catch(i){d.error(i.message)}finally{Ae.value=!1}}async function ge(i,s){try{await $("firewall.set_redirect",{index:i.index,enabled:s}),N()}catch(n){d.error(n.message)}}async function ot(i){try{await $("firewall.del_redirect",{index:i}),N()}catch(s){d.error(s.message)}}const Ce=b(!1),Oe=b(!1),ye=b(-1),G=Ve({name:"",src:"wan",dest:"lan",proto:"tcp",dest_port:"",target:"DROP"});function lt(){Object.assign(G,{name:"",src:"wan",dest:"lan",proto:"tcp",dest_port:"",target:"DROP"}),ye.value=-1,Ce.value=!0}function rt(i){Object.assign(G,{name:i.name,src:i.src,dest:i.dest,proto:i.proto,dest_port:i.dest_port,target:i.target}),ye.value=i.index,Ce.value=!0}async function Ke(){Oe.value=!0;try{ye.value>=0?await $("firewall.set_rule",{index:ye.value,...G}):await $("firewall.add_rule",G),Ce.value=!1,d.success(e("common.saved")),M()}catch(i){d.error(i.message)}finally{Oe.value=!1}}async function he(i,s){try{await $("firewall.set_rule",{index:i.index,enabled:s}),M()}catch(n){d.error(n.message)}}async function l(i){try{await $("firewall.del_rule",{index:i}),M()}catch(s){d.error(s.message)}}async function r(){try{await $("vpn.client_start",{proto:H.value.wireguard?"wireguard":"openvpn"}),d.success(e("common.saved")),setTimeout(F,2e3)}catch(i){d.error(i.message)}}async function v(){try{await $("vpn.client_stop"),d.success(e("common.saved")),setTimeout(F,1e3)}catch(i){d.error(i.message)}}async function x(i){try{await $("vpn.server_set_config",{proto:"wireguard",enabled:i,port:51820}),d.success(e("common.saved")),setTimeout(F,3e3)}catch(s){d.error(s.message)}}async function L(i){var E;const s=(E=i.target.files)==null?void 0:E[0];if(!s)return;const n=new FileReader;n.onload=async()=>{const te=btoa(n.result),me=s.name.endsWith(".ovpn")?"openvpn":"wireguard";try{await $("vpn.client_set_config",{proto:me,config:te}),d.success(e("common.saved"))}catch(le){d.error(le.message)}},n.readAsBinaryString(s),i.target.value=""}const J=b(!1),K=b(!1),ce=b(""),oe=b(null);async function it(){K.value=!0;try{oe.value=await $("vpn.server_gen_peer",{name:ce.value||"peer"}),J.value=!1}catch(i){d.error(i.message)}finally{K.value=!1}}const je=b(!1),ee=Ve({enabled:!1,service_name:"",domain:"",password:""}),dt=[{label:"DuckDNS",value:"duckdns.org"},{label:"No-IP",value:"noip.com"},{label:"Dynu",value:"dynu.com"},{label:"Cloudflare",value:"cloudflare.com-v4"},{label:"FreeDNS",value:"freedns.afraid.org"}];async function ct(){je.value=!0;try{await $("ddns.set_config",ee),d.success(e("common.saved")),ne()}catch(i){d.error(i.message)}finally{je.value=!1}}async function ut(){try{await $("ddns.update_now"),d.success(e("common.saved"))}catch(i){d.error(i.message)}}const Ne=b("ping"),Le=b("8.8.8.8"),Me=b(!1),ke=b(""),pt=[{label:"Ping",value:"ping"},{label:"Traceroute",value:"traceroute"},{label:"DNS Lookup",value:"nslookup"}];async function ft(){if(Le.value){Me.value=!0,ke.value="";try{const i=await $("system.run_diagnostic",{tool:Ne.value,host:Le.value});ke.value=(i==null?void 0:i.output)||"(no output)"}catch(i){ke.value="Error: "+i.message}finally{Me.value=!1}}}const Be=b(""),xe=b(!1);async function vt(){xe.value=!0;try{const i=await $("system.get_log",{lines:50});Be.value=(i==null?void 0:i.log)||""}catch(i){Be.value="Error: "+i.message}finally{xe.value=!1}}return(i,s)=>(j(),Y("div",an,[o(Ue,{title:t(e)("system.general.title"),"action-label":t(e)("common.edit"),onAction:fe},{default:u(()=>[g.value?(j(),Y("div",nn,[f("div",sn,[f("span",on,p(t(e)("system.general.hostname")),1),f("span",null,p(g.value.hostname),1)]),f("div",ln,[f("span",rn,p(t(e)("system.general.timezone")),1),f("span",null,p(g.value.timezone),1)]),f("div",dn,[f("span",cn,p(t(e)("system.general.time")),1),f("span",null,p(g.value.localtime),1)])])):re("",!0)]),_:1},8,["title","action-label"]),o(Ue,{title:t(e)("system.password.title"),"action-label":t(e)("common.edit"),onAction:s[0]||(s[0]=n=>$e.value=!0)},{default:u(()=>[...s[38]||(s[38]=[f("span",{style:{"letter-spacing":"3px",color:"var(--text-muted)"}},"••••••••",-1)])]),_:1},8,["title","action-label"]),o(Ue,{title:t(e)("system.firmware.title")},{default:u(()=>{var n,E;return[f("div",un,[f("span",pn,p(t(e)("system.firmware.current")),1),f("span",fn,p((n=g.value)==null?void 0:n.firmware_version)+" ("+p((E=g.value)==null?void 0:E.openwrt_version)+")",1)]),o(t(D),{type:"primary",onClick:s[1]||(s[1]=te=>i.$refs.fwInput.click())},{default:u(()=>[o(t(Ct),{size:16,style:{"margin-right":"6px"}}),X(" "+p(t(e)("system.firmware.upload")),1)]),_:1}),f("input",{ref:"fwInput",type:"file",accept:".itb",style:{display:"none"},onChange:De},null,544)]}),_:1},8,["title"]),o(Ue,{title:t(e)("system.backup.title")},{default:u(()=>[f("div",vn,[o(t(D),{onClick:ie},{default:u(()=>[o(t(Ja),{size:16,style:{"margin-right":"6px"}}),X(" "+p(t(e)("system.backup.download")),1)]),_:1}),o(t(D),{onClick:s[2]||(s[2]=n=>i.$refs.restoreInput.click())},{default:u(()=>[o(t(Ct),{size:16,style:{"margin-right":"6px"}}),X(" "+p(t(e)("system.backup.restore")),1)]),_:1}),o(t(D),{type:"error",ghost:"",onClick:s[3]||(s[3]=n=>We.value=!0)},{default:u(()=>[X(p(t(e)("system.backup.factoryReset")),1)]),_:1})]),f("input",{ref:"restoreInput",type:"file",accept:".tar.gz,.gz",style:{display:"none"},onChange:tt},null,544)]),_:1},8,["title"]),o(Ue,{title:t(e)("system.reboot.title")},{default:u(()=>[o(t(D),{type:"warning",onClick:s[4]||(s[4]=n=>we.value=!0),loading:Ie.value},{default:u(()=>[o(t(Ka),{size:16,style:{"margin-right":"6px"}}),X(" "+p(t(e)("system.reboot.button")),1)]),_:1},8,["loading"])]),_:1},8,["title"]),o(Ue,{title:t(e)("system.advanced.title")},{default:u(()=>[f("p",bn,p(t(e)("system.advanced.description")),1),o(t(_a),null,{default:u(()=>[o(t(Se),{title:t(e)("system.advanced.portForward")+` (${P.value.length})`},{default:u(()=>[f("div",mn,[f("p",gn,p(t(e)("system.portForward.desc")),1),o(t(D),{size:"small",type:"primary",onClick:Ye},{default:u(()=>[o(t(jt),{size:14,style:{"margin-right":"4px"}}),X(p(t(e)("common.add")),1)]),_:1})]),(j(!0),Y(kt,null,$t(P.value,n=>{var E;return j(),Y("div",{key:n.index,class:"rule-item"},[f("div",yn,[o(t(ht),{value:n.enabled,size:"small","onUpdate:value":te=>ge(n,te)},null,8,["value","onUpdate:value"]),f("strong",null,p(n.name||"Rule "+n.index),1),f("span",hn,p((E=n.proto)==null?void 0:E.toUpperCase())+" "+p(n.src_dport)+" → "+p(n.dest_ip)+":"+p(n.dest_port),1)]),f("div",xn,[o(t(D),{text:"",size:"small",type:"primary",onClick:te=>nt(n)},{default:u(()=>[o(t(Ot),{size:14})]),_:1},8,["onClick"]),o(t(D),{text:"",size:"small",type:"error",onClick:te=>ot(n.index)},{default:u(()=>[o(t(Nt),{size:14})]),_:1},8,["onClick"])])])}),128)),P.value.length?re("",!0):(j(),Y("div",wn,p(t(e)("system.portForward.noRules")),1))]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.firewall")+` (${A.value.length})`},{default:u(()=>[f("div",_n,[f("p",Cn,p(t(e)("system.firewall.desc")),1),o(t(D),{size:"small",type:"primary",onClick:lt},{default:u(()=>[o(t(jt),{size:14,style:{"margin-right":"4px"}}),X(p(t(e)("common.add")),1)]),_:1})]),(j(!0),Y(kt,null,$t(A.value,n=>(j(),Y("div",{key:n.index,class:"rule-item"},[f("div",kn,[o(t(ht),{value:n.enabled,size:"small","onUpdate:value":E=>he(n,E)},null,8,["value","onUpdate:value"]),f("strong",null,p(n.name||"Rule "+n.index),1),f("span",Sn,p(n.src)+"→"+p(n.dest)+" "+p(n.proto)+" :"+p(n.dest_port)+" "+p(n.target),1)]),f("div",Rn,[o(t(D),{text:"",size:"small",type:"primary",onClick:E=>rt(n)},{default:u(()=>[o(t(Ot),{size:14})]),_:1},8,["onClick"]),o(t(D),{text:"",size:"small",type:"error",onClick:E=>l(n.index)},{default:u(()=>[o(t(Nt),{size:14})]),_:1},8,["onClick"])])]))),128)),A.value.length?re("",!0):(j(),Y("div",zn,p(t(e)("system.firewall.noRules")),1))]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.vpn")},{default:u(()=>[!H.value.wireguard&&!H.value.openvpn?(j(),Y("div",Tn,p(t(e)("system.vpn.notInstalled")),1)):(j(),qe(t(Xa),{key:1,type:"segment",size:"small",style:{"margin-bottom":"12px"}},{default:u(()=>[o(t(Bt),{name:t(e)("system.vpn.client")},{default:u(()=>{var n,E,te,me,le;return[f("div",$n,[f("div",Pn,[f("span",En,p(t(e)("system.vpn.status")),1),o(Et,{status:(n=k.value.client)!=null&&n.running?"online":"offline"},null,8,["status"]),f("span",null,p((E=k.value.client)!=null&&E.running?t(e)("system.vpn.connected"):t(e)("system.vpn.disconnected")),1)]),(te=k.value.client)!=null&&te.proto?(j(),Y("div",In,[f("span",Wn,p(t(e)("system.vpn.protocol")),1),f("span",null,p(k.value.client.proto),1)])):re("",!0),(me=k.value.client)!=null&&me.ip?(j(),Y("div",An,[s[39]||(s[39]=f("span",{class:"info-label"},"IP",-1)),f("span",Ln,p(k.value.client.ip),1)])):re("",!0)]),f("div",Bn,[o(t(D),{size:"small",onClick:s[5]||(s[5]=He=>i.$refs.vpnConfigInput.click())},{default:u(()=>[o(t(Ct),{size:14,style:{"margin-right":"4px"}}),X(" "+p(t(e)("system.vpn.uploadConfig")),1)]),_:1}),(le=k.value.client)!=null&&le.running?(j(),qe(t(D),{key:1,size:"small",type:"warning",onClick:v},{default:u(()=>[X(p(t(e)("system.vpn.disconnect")),1)]),_:1})):(j(),qe(t(D),{key:0,size:"small",type:"primary",onClick:r},{default:u(()=>[X(p(t(e)("system.vpn.connect")),1)]),_:1}))]),f("input",{ref:"vpnConfigInput",type:"file",accept:".conf,.ovpn",style:{display:"none"},onChange:L},null,544)]}),_:1},8,["name"]),o(t(Bt),{name:t(e)("system.vpn.server")},{default:u(()=>{var n,E,te,me;return[f("div",Un,[f("div",Fn,[f("span",Dn,p(t(e)("system.vpn.status")),1),o(Et,{status:(n=k.value.server)!=null&&n.running?"online":"offline"},null,8,["status"]),f("span",null,p((E=k.value.server)!=null&&E.running?t(e)("common.enabled"):t(e)("common.disabled")),1)])]),f("div",On,[o(t(D),{size:"small",type:(te=k.value.server)!=null&&te.running?"warning":"primary",onClick:s[6]||(s[6]=le=>{var He;return x(!((He=k.value.server)!=null&&He.running))})},{default:u(()=>{var le;return[X(p((le=k.value.server)!=null&&le.running?t(e)("common.disabled"):t(e)("system.vpn.serverEnable")),1)]}),_:1},8,["type"]),(me=k.value.server)!=null&&me.running?(j(),qe(t(D),{key:0,size:"small",onClick:s[7]||(s[7]=le=>J.value=!0)},{default:u(()=>[X(p(t(e)("system.vpn.genPeer")),1)]),_:1})):re("",!0)]),oe.value?(j(),Y("div",jn,[f("pre",Nn,p(oe.value.config),1),oe.value.qrcode?(j(),Y("img",{key:0,src:"data:image/png;base64,"+oe.value.qrcode,style:{"max-width":"200px","margin-top":"8px","border-radius":"8px"}},null,8,Mn)):re("",!0),f("p",Hn,p(t(e)("system.vpn.scanQR")),1)])):re("",!0)]}),_:1},8,["name"])]),_:1}))]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.ddns")},{default:u(()=>[f("div",Vn,[o(O,{label:t(e)("system.ddns.enabled")},{default:u(()=>[o(t(ht),{value:ee.enabled,"onUpdate:value":s[8]||(s[8]=n=>ee.enabled=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.ddns.service")},{default:u(()=>[o(t(Re),{value:ee.service_name,"onUpdate:value":s[9]||(s[9]=n=>ee.service_name=n),options:dt,size:"small"},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.ddns.domain")},{default:u(()=>[o(t(Q),{value:ee.domain,"onUpdate:value":s[10]||(s[10]=n=>ee.domain=n),size:"small"},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.ddns.token")},{default:u(()=>[o(t(Q),{value:ee.password,"onUpdate:value":s[11]||(s[11]=n=>ee.password=n),size:"small",type:"password","show-password-on":"click"},null,8,["value"])]),_:1},8,["label"])]),T.value.current_ip?(j(),Y("div",Gn,[f("div",qn,[f("span",Xn,p(t(e)("system.ddns.currentIP")),1),f("span",Jn,p(T.value.current_ip),1)]),f("div",Yn,[f("span",Kn,p(t(e)("system.ddns.lastUpdate")),1),f("span",null,p(T.value.last_update||"--"),1)])])):re("",!0),f("div",Qn,[o(t(D),{size:"small",type:"primary",loading:je.value,onClick:ct},{default:u(()=>[X(p(t(e)("common.save")),1)]),_:1},8,["loading"]),o(t(D),{size:"small",onClick:ut},{default:u(()=>[X(p(t(e)("system.ddns.updateNow")),1)]),_:1})])]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.diagnostics")},{default:u(()=>[f("div",Zn,[o(t(Re),{value:Ne.value,"onUpdate:value":s[12]||(s[12]=n=>Ne.value=n),options:pt,size:"small",style:{width:"140px"}},null,8,["value"]),o(t(Q),{value:Le.value,"onUpdate:value":s[13]||(s[13]=n=>Le.value=n),placeholder:t(e)("system.diagnostics.host"),size:"small",style:{flex:"1","min-width":"150px"}},null,8,["value","placeholder"]),o(t(D),{type:"primary",size:"small",loading:Me.value,onClick:ft},{default:u(()=>[X(p(t(e)("system.diagnostics.run")),1)]),_:1},8,["loading"])]),ke.value?(j(),Y("pre",es,p(ke.value),1)):re("",!0)]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.systemLog")},{default:u(()=>[o(t(D),{size:"small",onClick:vt,loading:xe.value,style:{"margin-bottom":"8px"}},{default:u(()=>[X(p(t(e)("common.retry")),1)]),_:1},8,["loading"]),Be.value?(j(),Y("pre",ts,p(Be.value),1)):re("",!0)]),_:1},8,["title"]),o(t(Se),{title:t(e)("system.advanced.luci")},{default:u(()=>[f("p",as,p(t(e)("system.advanced.luciDesc")),1),o(t(D),{tag:"a",href:C.value,target:"_blank"},{default:u(()=>[o(t(Ya),{size:16,style:{"margin-right":"6px"}}),X(" "+p(t(e)("system.advanced.openLuci")),1)]),_:1},8,["href"])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(Ge,{show:S.value,"onUpdate:show":s[16]||(s[16]=n=>S.value=n),title:t(e)("system.general.title"),saving:y.value,onSave:ve},{default:u(()=>[o(O,{label:t(e)("system.general.hostname")},{default:u(()=>[o(t(Q),{value:I.hostname,"onUpdate:value":s[14]||(s[14]=n=>I.hostname=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.general.timezone")},{default:u(()=>[o(t(Q),{value:I.timezone,"onUpdate:value":s[15]||(s[15]=n=>I.timezone=n)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),o(Ge,{show:$e.value,"onUpdate:show":s[20]||(s[20]=n=>$e.value=n),title:t(e)("system.password.title"),saving:Fe.value,onSave:Pe},{default:u(()=>[o(O,{label:t(e)("system.password.current")},{default:u(()=>[o(t(Q),{value:Z.current,"onUpdate:value":s[17]||(s[17]=n=>Z.current=n),type:"password","show-password-on":"click"},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.password.new")},{default:u(()=>[o(t(Q),{value:Z.password,"onUpdate:value":s[18]||(s[18]=n=>Z.password=n),type:"password","show-password-on":"click"},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.password.confirm")},{default:u(()=>[o(t(Q),{value:Z.confirm,"onUpdate:value":s[19]||(s[19]=n=>Z.confirm=n),type:"password","show-password-on":"click"},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),o(Ge,{show:_e.value,"onUpdate:show":s[26]||(s[26]=n=>_e.value=n),title:t(e)("system.advanced.portForward"),saving:Ae.value,onSave:st},{default:u(()=>[o(O,{label:t(e)("system.portForward.name")},{default:u(()=>[o(t(Q),{value:V.name,"onUpdate:value":s[21]||(s[21]=n=>V.name=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.portForward.protocol")},{default:u(()=>[o(t(Re),{value:V.proto,"onUpdate:value":s[22]||(s[22]=n=>V.proto=n),options:w},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.portForward.extPort")},{default:u(()=>[o(t(Q),{value:V.src_dport,"onUpdate:value":s[23]||(s[23]=n=>V.src_dport=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.portForward.intIP")},{default:u(()=>[o(t(Q),{value:V.dest_ip,"onUpdate:value":s[24]||(s[24]=n=>V.dest_ip=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.portForward.intPort")},{default:u(()=>[o(t(Q),{value:V.dest_port,"onUpdate:value":s[25]||(s[25]=n=>V.dest_port=n),placeholder:V.src_dport},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),o(Ge,{show:Ce.value,"onUpdate:show":s[33]||(s[33]=n=>Ce.value=n),title:t(e)("system.advanced.firewall"),saving:Oe.value,onSave:Ke},{default:u(()=>[o(O,{label:t(e)("system.firewall.name")},{default:u(()=>[o(t(Q),{value:G.name,"onUpdate:value":s[27]||(s[27]=n=>G.name=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.firewall.src")},{default:u(()=>[o(t(Re),{value:G.src,"onUpdate:value":s[28]||(s[28]=n=>G.src=n),options:z},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.firewall.dest")},{default:u(()=>[o(t(Re),{value:G.dest,"onUpdate:value":s[29]||(s[29]=n=>G.dest=n),options:z},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.firewall.protocol")},{default:u(()=>[o(t(Re),{value:G.proto,"onUpdate:value":s[30]||(s[30]=n=>G.proto=n),options:w},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.firewall.destPort")},{default:u(()=>[o(t(Q),{value:G.dest_port,"onUpdate:value":s[31]||(s[31]=n=>G.dest_port=n)},null,8,["value"])]),_:1},8,["label"]),o(O,{label:t(e)("system.firewall.action")},{default:u(()=>[o(t(Re),{value:G.target,"onUpdate:value":s[32]||(s[32]=n=>G.target=n),options:W},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),o(Ge,{show:J.value,"onUpdate:show":s[35]||(s[35]=n=>J.value=n),title:t(e)("system.vpn.genPeer"),saving:K.value,onSave:it,"save-label":t(e)("system.vpn.genPeer")},{default:u(()=>[o(O,{label:t(e)("system.vpn.peerName")},{default:u(()=>[o(t(Q),{value:ce.value,"onUpdate:value":s[34]||(s[34]=n=>ce.value=n),placeholder:"iPhone"},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving","save-label"]),o(Mt,{show:we.value,"onUpdate:show":s[36]||(s[36]=n=>we.value=n),title:t(e)("system.reboot.title"),message:t(e)("system.reboot.confirm"),"confirm-text":t(e)("system.reboot.button"),onConfirm:Je},null,8,["show","title","message","confirm-text"]),o(Mt,{show:We.value,"onUpdate:show":s[37]||(s[37]=n=>We.value=n),title:t(e)("system.backup.factoryReset"),message:t(e)("system.backup.resetConfirm"),type:"danger","confirm-text":t(e)("system.backup.factoryReset"),onConfirm:at},null,8,["show","title","message","confirm-text"]),o(Pt,{show:Ie.value,message:t(e)("system.reboot.rebooting",{seconds:de.value}),countdown:de.value},null,8,["show","message","countdown"]),o(Pt,{show:Ee.value,message:t(e)("system.firmware.flashing"),progress:be.value},null,8,["show","message","progress"])]))}},ms=ka(ns,[["__scopeId","data-v-b9367896"]]);export{ms as default};
