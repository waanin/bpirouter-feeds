import{d as ke,h as v,bf as Ht,A as h,bg as Mt,bh as Be,bi as Vt,M as Xt,U as gt,V as Gt,ac as qt,T as et,Q as Jt,aX as Yt,ay as Kt,f as ye,aJ as Qt,c as l,a as p,F as E,G as H,I as Zt,J as Me,O as nt,ad as Ve,u as ea,b as ht,bj as ta,aF as Xe,o as aa,aM as na,e as sa,aN as oa,Y as ra,bk as la,ag as ia,aI as Ge,g as Q,az as We,Z as da,N as ca,W as Z,X as Le,k as ua,l as G,n as r,v as c,q as o,D as F,m,p as u,a1 as st,B as M,y as ee,E as J,x as Ae,r as W,_ as qe}from"./index-DDHWJPsH.js";import{u as pa,S as pe}from"./SectionCard-BMN6aThM.js";import{_ as Je}from"./DrawerForm-QfOkZexR.js";import{u as fa,F as V}from"./FieldGroup-ZzRW71E2.js";import{S as ot}from"./StatusDot-DB3pbg2D.js";import{_ as ba}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Ie}from"./createLucideIcon-Dt13Rkcn.js";import{k as va,l as rt,o as ma,N as fe}from"./Select-PPNNebsB.js";import{u as ga,N as te}from"./Input-DM4KpV5-.js";import{u as lt}from"./use-compitable-CrbzRSM6.js";import{U as ha}from"./upload-BKk1rlrt.js";import{N as Ye}from"./Switch-DT0gbj3c.js";import"./index-CaoLrzvz.js";import"./format-length-B-p6aW7q.js";import"./next-frame-once-C5Ksf8W7.js";const ya=rt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[rt("&::-webkit-scrollbar",{width:0,height:0})]),xa=ke({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const n=h(null);function s(b){!(b.currentTarget.offsetWidth<b.currentTarget.scrollWidth)||b.deltaY===0||(b.currentTarget.scrollLeft+=b.deltaY+b.deltaX,b.preventDefault())}const i=Ht();return ya.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:va,ssr:i}),Object.assign({selfRef:n,handleWheel:s},{scrollTo(...b){var T;(T=n.value)===null||T===void 0||T.scrollTo(...b)}})},render(){return v("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var wa=/\s/;function _a(n){for(var s=n.length;s--&&wa.test(n.charAt(s)););return s}var Ca=/^\s+/;function Sa(n){return n&&n.slice(0,_a(n)+1).replace(Ca,"")}var it=NaN,Ra=/^[-+]0x[0-9a-f]+$/i,za=/^0b[01]+$/i,ka=/^0o[0-7]+$/i,Ta=parseInt;function dt(n){if(typeof n=="number")return n;if(Mt(n))return it;if(Be(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Be(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Sa(n);var i=za.test(n);return i||ka.test(n)?Ta(n.slice(2),i?2:8):Ra.test(n)?it:+n}var Ke=function(){return Vt.Date.now()},Pa="Expected a function",$a=Math.max,Ea=Math.min;function Wa(n,s,i){var C,b,T,S,y,_,R=0,g=!1,z=!1,O=!0;if(typeof n!="function")throw new TypeError(Pa);s=dt(s)||0,Be(i)&&(g=!!i.leading,z="maxWait"in i,T=z?$a(dt(i.maxWait)||0,s):T,O="trailing"in i?!!i.trailing:O);function $(f){var D=C,ae=b;return C=b=void 0,R=f,S=n.apply(ae,D),S}function P(f){return R=f,y=setTimeout(A,s),g?$(f):S}function L(f){var D=f-_,ae=f-R,ne=s-D;return z?Ea(ne,T-ae):ne}function N(f){var D=f-_,ae=f-R;return _===void 0||D>=s||D<0||z&&ae>=T}function A(){var f=Ke();if(N(f))return j(f);y=setTimeout(A,L(f))}function j(f){return y=void 0,O&&C?$(f):(C=b=void 0,S)}function q(){y!==void 0&&clearTimeout(y),R=0,C=_=b=y=void 0}function k(){return y===void 0?S:j(Ke())}function w(){var f=Ke(),D=N(f);if(C=arguments,b=this,_=f,D){if(y===void 0)return P(_);if(z)return clearTimeout(y),y=setTimeout(A,s),$(_)}return y===void 0&&(y=setTimeout(A,s)),S}return w.cancel=q,w.flush=k,w}var La="Expected a function";function Aa(n,s,i){var C=!0,b=!0;if(typeof n!="function")throw new TypeError(La);return Be(i)&&(C="leading"in i?!!i.leading:C,b="trailing"in i?!!i.trailing:b),Wa(n,s,{leading:C,maxWait:s,trailing:b})}const Ba=ke({name:"Add",render(){return v("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),at=Xt("n-tabs"),yt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ct=ke({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:yt,slots:Object,setup(n){const s=gt(at,null);return s||Gt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:s.paneStyleRef,class:s.paneClassRef,mergedClsPrefix:s.mergedClsPrefixRef}},render(){return v("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ia=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Qt(yt,["displayDirective"])),tt=ke({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ia,setup(n){const{mergedClsPrefixRef:s,valueRef:i,typeRef:C,closableRef:b,tabStyleRef:T,addTabStyleRef:S,tabClassRef:y,addTabClassRef:_,tabChangeIdRef:R,onBeforeLeaveRef:g,triggerRef:z,handleAdd:O,activateTab:$,handleClose:P}=gt(at);return{trigger:z,mergedClosable:ye(()=>{if(n.internalAddable)return!1;const{closable:L}=n;return L===void 0?b.value:L}),style:T,addStyle:S,tabClass:y,addTabClass:_,clsPrefix:s,value:i,type:C,handleClose(L){L.stopPropagation(),!n.disabled&&P(n.name)},activateTab(){if(n.disabled)return;if(n.internalAddable){O();return}const{name:L}=n,N=++R.id;if(L!==i.value){const{value:A}=g;A?Promise.resolve(A(n.name,i.value)).then(j=>{j&&R.id===N&&$(L)}):$(L)}}}},render(){const{internalAddable:n,clsPrefix:s,name:i,disabled:C,label:b,tab:T,value:S,mergedClosable:y,trigger:_,$slots:{default:R}}=this,g=b??T;return v("div",{class:`${s}-tabs-tab-wrapper`},this.internalLeftPadded?v("div",{class:`${s}-tabs-tab-pad`}):null,v("div",Object.assign({key:i,"data-name":i,"data-disabled":C?!0:void 0},qt({class:[`${s}-tabs-tab`,S===i&&`${s}-tabs-tab--active`,C&&`${s}-tabs-tab--disabled`,y&&`${s}-tabs-tab--closable`,n&&`${s}-tabs-tab--addable`,n?this.addTabClass:this.tabClass],onClick:_==="click"?this.activateTab:void 0,onMouseenter:_==="hover"?this.activateTab:void 0,style:n?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),v("span",{class:`${s}-tabs-tab__label`},n?v(et,null,v("div",{class:`${s}-tabs-tab__height-placeholder`}," "),v(Jt,{clsPrefix:s},{default:()=>v(Ba,null)})):R?R():typeof g=="object"?g:Yt(g??i)),y&&this.type==="card"?v(Kt,{clsPrefix:s,class:`${s}-tabs-tab__close`,onClick:this.handleClose,disabled:C}):null))}}),ja=l("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[p("segment-type",[l("tabs-rail",[E("&.transition-disabled",[l("tabs-capsule",`
 transition: none;
 `)])])]),p("top",[l("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),p("left",[l("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),p("left, right",`
 flex-direction: row;
 `,[l("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),p("right",`
 flex-direction: row-reverse;
 `,[l("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),l("tabs-bar",`
 left: 0;
 `)]),p("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[l("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),l("tabs-bar",`
 top: 0;
 `)]),l("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[l("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),l("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[p("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),E("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),p("flex",[l("tabs-nav",`
 width: 100%;
 position: relative;
 `,[l("tabs-wrapper",`
 width: 100%;
 `,[l("tabs-tab",`
 margin-right: 0;
 `)])])]),l("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[H("prefix, suffix",`
 display: flex;
 align-items: center;
 `),H("prefix","padding-right: 16px;"),H("suffix","padding-left: 16px;")]),p("top, bottom",[E(">",[l("tabs-nav",[l("tabs-nav-scroll-wrapper",[E("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),E("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),p("shadow-start",[E("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),p("shadow-end",[E("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),p("left, right",[l("tabs-nav-scroll-content",`
 flex-direction: column;
 `),E(">",[l("tabs-nav",[l("tabs-nav-scroll-wrapper",[E("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),E("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),p("shadow-start",[E("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),p("shadow-end",[E("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),l("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[l("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[E("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),E("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),l("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),l("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),l("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),l("tabs-tab",`
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
 `,[p("disabled",{cursor:"not-allowed"}),H("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),H("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),l("tabs-bar",`
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
 `,[E("&.transition-disabled",`
 transition: none;
 `),p("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),l("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),l("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[E("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),E("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),E("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),E("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),E("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),l("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),p("line-type, bar-type",[l("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[E("&:hover",{color:"var(--n-tab-text-color-hover)"}),p("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),p("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),l("tabs-nav",[p("line-type",[p("top",[H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 bottom: -1px;
 `)]),p("left",[H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 right: -1px;
 `)]),p("right",[H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 left: -1px;
 `)]),p("bottom",[H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 top: -1px;
 `)]),H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-bar",`
 border-radius: 0;
 `)]),p("card-type",[H("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),l("tabs-tab",`
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
 `,[p("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[H("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Zt("disabled",[E("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),p("closable","padding-right: 8px;"),p("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),p("disabled","color: var(--n-tab-text-color-disabled);")])]),p("left, right",`
 flex-direction: column; 
 `,[H("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),l("tabs-wrapper",`
 flex-direction: column;
 `),l("tabs-tab-wrapper",`
 flex-direction: column;
 `,[l("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),p("top",[p("card-type",[l("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-bottom: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),p("left",[p("card-type",[l("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-right: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),p("right",[p("card-type",[l("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-left: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),p("bottom",[p("card-type",[l("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),H("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[p("active",`
 border-top: 1px solid #0000;
 `)]),l("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Qe=Aa,Oa=Object.assign(Object.assign({},ht.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ua=ke({name:"Tabs",props:Oa,slots:Object,setup(n,{slots:s}){var i,C,b,T;const{mergedClsPrefixRef:S,inlineThemeDisabled:y,mergedComponentPropsRef:_}=ea(n),R=ht("Tabs","-tabs",ja,ta,n,S),g=h(null),z=h(null),O=h(null),$=h(null),P=h(null),L=h(null),N=h(!0),A=h(!0),j=lt(n,["labelSize","size"]),q=ye(()=>{var t,e;if(j.value)return j.value;const a=(e=(t=_==null?void 0:_.value)===null||t===void 0?void 0:t.Tabs)===null||e===void 0?void 0:e.size;return a||"medium"}),k=lt(n,["activeName","value"]),w=h((C=(i=k.value)!==null&&i!==void 0?i:n.defaultValue)!==null&&C!==void 0?C:s.default?(T=(b=Me(s.default())[0])===null||b===void 0?void 0:b.props)===null||T===void 0?void 0:T.name:null),f=ga(k,w),D={id:0},ae=ye(()=>{if(!(!n.justifyContent||n.type==="card"))return{display:"flex",justifyContent:n.justifyContent}});Xe(f,()=>{D.id=0,B(),Te()});function ne(){var t;const{value:e}=f;return e===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${e}"]`)}function de(t){if(n.type==="card")return;const{value:e}=z;if(!e)return;const a=e.style.opacity==="0";if(t){const d=`${S.value}-tabs-bar--disabled`,{barWidth:x,placement:U}=n;if(t.dataset.disabled==="true"?e.classList.add(d):e.classList.remove(d),["top","bottom"].includes(U)){if(ce(["top","maxHeight","height"]),typeof x=="number"&&t.offsetWidth>=x){const I=Math.floor((t.offsetWidth-x)/2)+t.offsetLeft;e.style.left=`${I}px`,e.style.maxWidth=`${x}px`}else e.style.left=`${t.offsetLeft}px`,e.style.maxWidth=`${t.offsetWidth}px`;e.style.width="8192px",a&&(e.style.transition="none"),e.offsetWidth,a&&(e.style.transition="",e.style.opacity="1")}else{if(ce(["left","maxWidth","width"]),typeof x=="number"&&t.offsetHeight>=x){const I=Math.floor((t.offsetHeight-x)/2)+t.offsetTop;e.style.top=`${I}px`,e.style.maxHeight=`${x}px`}else e.style.top=`${t.offsetTop}px`,e.style.maxHeight=`${t.offsetHeight}px`;e.style.height="8192px",a&&(e.style.transition="none"),e.offsetHeight,a&&(e.style.transition="",e.style.opacity="1")}}}function xe(){if(n.type==="card")return;const{value:t}=z;t&&(t.style.opacity="0")}function ce(t){const{value:e}=z;if(e)for(const a of t)e.style[a]=""}function B(){if(n.type==="card")return;const t=ne();t?de(t):xe()}function Te(){var t;const e=(t=P.value)===null||t===void 0?void 0:t.$el;if(!e)return;const a=ne();if(!a)return;const{scrollLeft:d,offsetWidth:x}=e,{offsetLeft:U,offsetWidth:I}=a;d>U?e.scrollTo({top:0,left:U,behavior:"smooth"}):U+I>d+x&&e.scrollTo({top:0,left:U+I-x,behavior:"smooth"})}const be=h(null);let we=0,Y=null;function je(t){const e=be.value;if(e){we=t.getBoundingClientRect().height;const a=`${we}px`,d=()=>{e.style.height=a,e.style.maxHeight=a};Y?(d(),Y(),Y=null):Y=d}}function Oe(t){const e=be.value;if(e){const a=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,e.style.maxHeight=`${a}px`,e.style.height=`${Math.max(we,a)}px`};Y?(Y(),Y=null,d()):Y=d}}function Ue(){const t=be.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:e}=n;if(typeof e=="string")t.style.cssText=e;else if(e){const{maxHeight:a,height:d}=e;a!==void 0&&(t.style.maxHeight=a),d!==void 0&&(t.style.height=d)}}}const Pe={value:[]},$e=h("next");function ve(t){const e=f.value;let a="next";for(const d of Pe.value){if(d===e)break;if(d===t){a="prev";break}}$e.value=a,_e(t)}function _e(t){const{onActiveNameChange:e,onUpdateValue:a,"onUpdate:value":d}=n;e&&Le(e,t),a&&Le(a,t),d&&Le(d,t),w.value=t}function Ce(t){const{onClose:e}=n;e&&Le(e,t)}function oe(){const{value:t}=z;if(!t)return;const e="transition-disabled";t.classList.add(e),B(),t.classList.remove(e)}const re=h(null);function ue({transitionDisabled:t}){const e=g.value;if(!e)return;t&&e.classList.add("transition-disabled");const a=ne();a&&re.value&&(re.value.style.width=`${a.offsetWidth}px`,re.value.style.height=`${a.offsetHeight}px`,re.value.style.transform=`translateX(${a.offsetLeft-oa(getComputedStyle(e).paddingLeft)}px)`,t&&re.value.offsetWidth),t&&e.classList.remove("transition-disabled")}Xe([f],()=>{n.type==="segment"&&Ge(()=>{ue({transitionDisabled:!1})})}),aa(()=>{n.type==="segment"&&ue({transitionDisabled:!0})});let X=0;function Fe(t){var e;if(t.contentRect.width===0&&t.contentRect.height===0||X===t.contentRect.width)return;X=t.contentRect.width;const{type:a}=n;if((a==="line"||a==="bar")&&oe(),a!=="segment"){const{placement:d}=n;se((d==="top"||d==="bottom"?(e=P.value)===null||e===void 0?void 0:e.$el:L.value)||null)}}const Ne=Qe(Fe,64);Xe([()=>n.justifyContent,()=>n.size],()=>{Ge(()=>{const{type:t}=n;(t==="line"||t==="bar")&&oe()})});const le=h(!1);function Se(t){var e;const{target:a,contentRect:{width:d,height:x}}=t,U=a.parentElement.parentElement.offsetWidth,I=a.parentElement.parentElement.offsetHeight,{placement:K}=n;if(!le.value)K==="top"||K==="bottom"?U<d&&(le.value=!0):I<x&&(le.value=!0);else{const{value:ze}=$;if(!ze)return;K==="top"||K==="bottom"?U-d>ze.$el.offsetWidth&&(le.value=!1):I-x>ze.$el.offsetHeight&&(le.value=!1)}se(((e=P.value)===null||e===void 0?void 0:e.$el)||null)}const me=Qe(Se,64);function Re(){const{onAdd:t}=n;t&&t(),Ge(()=>{const e=ne(),{value:a}=P;!e||!a||a.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})})}function se(t){if(!t)return;const{placement:e}=n;if(e==="top"||e==="bottom"){const{scrollLeft:a,scrollWidth:d,offsetWidth:x}=t;N.value=a<=0,A.value=a+x>=d}else{const{scrollTop:a,scrollHeight:d,offsetHeight:x}=t;N.value=a<=0,A.value=a+x>=d}}const De=Qe(t=>{se(t.target)},64);ca(at,{triggerRef:Z(n,"trigger"),tabStyleRef:Z(n,"tabStyle"),tabClassRef:Z(n,"tabClass"),addTabStyleRef:Z(n,"addTabStyle"),addTabClassRef:Z(n,"addTabClass"),paneClassRef:Z(n,"paneClass"),paneStyleRef:Z(n,"paneStyle"),mergedClsPrefixRef:S,typeRef:Z(n,"type"),closableRef:Z(n,"closable"),valueRef:f,tabChangeIdRef:D,onBeforeLeaveRef:Z(n,"onBeforeLeave"),activateTab:ve,handleClose:Ce,handleAdd:Re}),ma(()=>{B(),Te()}),na(()=>{const{value:t}=O;if(!t)return;const{value:e}=S,a=`${e}-tabs-nav-scroll-wrapper--shadow-start`,d=`${e}-tabs-nav-scroll-wrapper--shadow-end`;N.value?t.classList.remove(a):t.classList.add(a),A.value?t.classList.remove(d):t.classList.add(d)});const He={syncBarPosition:()=>{B()}},ge=()=>{ue({transitionDisabled:!0})},he=ye(()=>{const{value:t}=q,{type:e}=n,a={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[e],d=`${t}${a}`,{self:{barColor:x,closeIconColor:U,closeIconColorHover:I,closeIconColorPressed:K,tabColor:ze,tabBorderColor:xt,paneTextColor:wt,tabFontWeight:_t,tabBorderRadius:Ct,tabFontWeightActive:St,colorSegment:Rt,fontWeightStrong:zt,tabColorSegment:kt,closeSize:Tt,closeIconSize:Pt,closeColorHover:$t,closeColorPressed:Et,closeBorderRadius:Wt,[Q("panePadding",t)]:Ee,[Q("tabPadding",d)]:Lt,[Q("tabPaddingVertical",d)]:At,[Q("tabGap",d)]:Bt,[Q("tabGap",`${d}Vertical`)]:It,[Q("tabTextColor",e)]:jt,[Q("tabTextColorActive",e)]:Ot,[Q("tabTextColorHover",e)]:Ut,[Q("tabTextColorDisabled",e)]:Ft,[Q("tabFontSize",t)]:Nt},common:{cubicBezierEaseInOut:Dt}}=R.value;return{"--n-bezier":Dt,"--n-color-segment":Rt,"--n-bar-color":x,"--n-tab-font-size":Nt,"--n-tab-text-color":jt,"--n-tab-text-color-active":Ot,"--n-tab-text-color-disabled":Ft,"--n-tab-text-color-hover":Ut,"--n-pane-text-color":wt,"--n-tab-border-color":xt,"--n-tab-border-radius":Ct,"--n-close-size":Tt,"--n-close-icon-size":Pt,"--n-close-color-hover":$t,"--n-close-color-pressed":Et,"--n-close-border-radius":Wt,"--n-close-icon-color":U,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":K,"--n-tab-color":ze,"--n-tab-font-weight":_t,"--n-tab-font-weight-active":St,"--n-tab-padding":Lt,"--n-tab-padding-vertical":At,"--n-tab-gap":Bt,"--n-tab-gap-vertical":It,"--n-pane-padding-left":We(Ee,"left"),"--n-pane-padding-right":We(Ee,"right"),"--n-pane-padding-top":We(Ee,"top"),"--n-pane-padding-bottom":We(Ee,"bottom"),"--n-font-weight-strong":zt,"--n-tab-color-segment":kt}}),ie=y?sa("tabs",ye(()=>`${q.value[0]}${n.type[0]}`),he,n):void 0;return Object.assign({mergedClsPrefix:S,mergedValue:f,renderedNames:new Set,segmentCapsuleElRef:re,tabsPaneWrapperRef:be,tabsElRef:g,barElRef:z,addTabInstRef:$,xScrollInstRef:P,scrollWrapperElRef:O,addTabFixed:le,tabWrapperStyle:ae,handleNavResize:Ne,mergedSize:q,handleScroll:De,handleTabsResize:me,cssVars:y?void 0:he,themeClass:ie==null?void 0:ie.themeClass,animationDirection:$e,renderNameListRef:Pe,yScrollElRef:L,handleSegmentResize:ge,onAnimationBeforeLeave:je,onAnimationEnter:Oe,onAnimationAfterEnter:Ue,onRender:ie==null?void 0:ie.onRender},He)},render(){const{mergedClsPrefix:n,type:s,placement:i,addTabFixed:C,addable:b,mergedSize:T,renderNameListRef:S,onRender:y,paneWrapperClass:_,paneWrapperStyle:R,$slots:{default:g,prefix:z,suffix:O}}=this;y==null||y();const $=g?Me(g()).filter(w=>w.type.__TAB_PANE__===!0):[],P=g?Me(g()).filter(w=>w.type.__TAB__===!0):[],L=!P.length,N=s==="card",A=s==="segment",j=!N&&!A&&this.justifyContent;S.value=[];const q=()=>{const w=v("div",{style:this.tabWrapperStyle,class:`${n}-tabs-wrapper`},j?null:v("div",{class:`${n}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),L?$.map((f,D)=>(S.value.push(f.props.name),Ze(v(tt,Object.assign({},f.props,{internalCreatedByPane:!0,internalLeftPadded:D!==0&&(!j||j==="center"||j==="start"||j==="end")}),f.children?{default:f.children.tab}:void 0)))):P.map((f,D)=>(S.value.push(f.props.name),Ze(D!==0&&!j?ft(f):f))),!C&&b&&N?pt(b,(L?$.length:P.length)!==0):null,j?null:v("div",{class:`${n}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return v("div",{ref:"tabsElRef",class:`${n}-tabs-nav-scroll-content`},N&&b?v(Ve,{onResize:this.handleTabsResize},{default:()=>w}):w,N?v("div",{class:`${n}-tabs-pad`}):null,N?null:v("div",{ref:"barElRef",class:`${n}-tabs-bar`}))},k=A?"top":i;return v("div",{class:[`${n}-tabs`,this.themeClass,`${n}-tabs--${s}-type`,`${n}-tabs--${T}-size`,j&&`${n}-tabs--flex`,`${n}-tabs--${k}`],style:this.cssVars},v("div",{class:[`${n}-tabs-nav--${s}-type`,`${n}-tabs-nav--${k}`,`${n}-tabs-nav`]},nt(z,w=>w&&v("div",{class:`${n}-tabs-nav__prefix`},w)),A?v(Ve,{onResize:this.handleSegmentResize},{default:()=>v("div",{class:`${n}-tabs-rail`,ref:"tabsElRef"},v("div",{class:`${n}-tabs-capsule`,ref:"segmentCapsuleElRef"},v("div",{class:`${n}-tabs-wrapper`},v("div",{class:`${n}-tabs-tab`}))),L?$.map((w,f)=>(S.value.push(w.props.name),v(tt,Object.assign({},w.props,{internalCreatedByPane:!0,internalLeftPadded:f!==0}),w.children?{default:w.children.tab}:void 0))):P.map((w,f)=>(S.value.push(w.props.name),f===0?w:ft(w))))}):v(Ve,{onResize:this.handleNavResize},{default:()=>v("div",{class:`${n}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?v(xa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:q}):v("div",{class:`${n}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},q()))}),C&&b&&N?pt(b,!0):null,nt(O,w=>w&&v("div",{class:`${n}-tabs-nav__suffix`},w))),L&&(this.animated&&(k==="top"||k==="bottom")?v("div",{ref:"tabsPaneWrapperRef",style:R,class:[`${n}-tabs-pane-wrapper`,_]},ut($,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ut($,this.mergedValue,this.renderedNames)))}});function ut(n,s,i,C,b,T,S){const y=[];return n.forEach(_=>{const{name:R,displayDirective:g,"display-directive":z}=_.props,O=P=>g===P||z===P,$=s===R;if(_.key!==void 0&&(_.key=R),$||O("show")||O("show:lazy")&&i.has(R)){i.has(R)||i.add(R);const P=!O("if");y.push(P?ra(_,[[da,$]]):_)}}),S?v(la,{name:`${S}-transition`,onBeforeLeave:C,onEnter:b,onAfterEnter:T},{default:()=>y}):y}function pt(n,s){return v(tt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:s,disabled:typeof n=="object"&&n.disabled})}function ft(n){const s=ia(n);return s.props?s.props.internalLeftPadded=!0:s.props={internalLeftPadded:!0},s}function Ze(n){return Array.isArray(n.dynamicProps)?n.dynamicProps.includes("internalLeftPadded")||n.dynamicProps.push("internalLeftPadded"):n.dynamicProps=["internalLeftPadded"],n}/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=Ie("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=Ie("PencilIcon",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=Ie("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=Ie("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Na={class:"fade-in"},Da={class:"adv-desc"},Ha={class:"rule-main"},Ma={class:"mono rule-detail"},Va={class:"rule-actions"},Xa={key:0,class:"adv-desc"},Ga={class:"adv-desc"},qa={class:"rule-main"},Ja={class:"mono rule-detail"},Ya={class:"rule-actions"},Ka={key:0,class:"adv-desc"},Qa={key:0,class:"adv-desc"},Za={class:"info-list"},en={class:"info-row"},tn={class:"info-label"},an={key:0,class:"info-row"},nn={class:"info-label"},sn={key:1,class:"info-row"},on={class:"mono"},rn={style:{display:"flex",gap:"8px","margin-top":"12px","flex-wrap":"wrap"}},ln={class:"info-list"},dn={class:"info-row"},cn={class:"info-label"},un={style:{display:"flex",gap:"8px","margin-top":"12px","flex-wrap":"wrap","align-items":"center"}},pn={key:0,style:{"margin-top":"12px"}},fn={class:"diag-output"},bn=["src"],vn={class:"adv-desc"},mn={class:"info-list",style:{"margin-bottom":"12px"}},gn={key:0,class:"info-list",style:{"margin-bottom":"12px"}},hn={class:"info-row"},yn={class:"info-label"},xn={class:"mono"},wn={class:"info-row"},_n={class:"info-label"},Cn={style:{display:"flex",gap:"8px"}},Sn={style:{display:"flex",gap:"8px","margin-bottom":"12px","flex-wrap":"wrap"}},Rn={key:0,class:"diag-output"},zn={key:0,class:"diag-output"},kn={class:"adv-desc"},Tn={__name:"Advanced",setup(n){const{t:s}=ua(),i=fa(),C=ye(()=>`http://${window.location.hostname||"192.168.8.1"}:8081`),b=[{label:"TCP",value:"tcp"},{label:"UDP",value:"udp"},{label:"TCP+UDP",value:"tcp udp"}],T=[{label:"wan",value:"wan"},{label:"lan",value:"lan"},{label:"*",value:"*"}],S=[{label:"ACCEPT",value:"ACCEPT"},{label:"DROP",value:"DROP"},{label:"REJECT",value:"REJECT"}],y=h([]),_=h([]),R=h({wireguard:!1,openvpn:!1}),g=h({client:{},server:{}}),z=h({});async function O(){var t;try{y.value=((t=await W("firewall.get_redirects"))==null?void 0:t.redirects)||[]}catch{}}async function $(){var t;try{_.value=((t=await W("firewall.get_rules"))==null?void 0:t.rules)||[]}catch{}}async function P(){try{R.value=await W("vpn.get_available")}catch{}try{g.value=await W("vpn.get_status")}catch{}}async function L(){try{z.value=await W("ddns.get_status")||{}}catch{}}async function N(){await Promise.allSettled([O(),$(),P(),L()]),z.value.service&&(X.enabled=z.value.enabled,X.service_name=z.value.service,X.domain=z.value.domain)}pa(N,3e4);const A=h(!1),j=h(!1),q=h(-1),k=qe({name:"",proto:"tcp",src_dport:"",dest_ip:"",dest_port:""});function w(){Object.assign(k,{name:"",proto:"tcp",src_dport:"",dest_ip:"",dest_port:""}),q.value=-1,A.value=!0}function f(t){Object.assign(k,{name:t.name,proto:t.proto,src_dport:t.src_dport,dest_ip:t.dest_ip,dest_port:t.dest_port}),q.value=t.index,A.value=!0}async function D(){j.value=!0;try{q.value>=0?await W("firewall.set_redirect",{index:q.value,...k}):await W("firewall.add_redirect",k),A.value=!1,i.success(s("common.saved")),O()}catch(t){i.error(t.message)}finally{j.value=!1}}async function ae(t,e){try{await W("firewall.set_redirect",{index:t.index,enabled:e}),O()}catch(a){i.error(a.message)}}async function ne(t){try{await W("firewall.del_redirect",{index:t}),O()}catch(e){i.error(e.message)}}const de=h(!1),xe=h(!1),ce=h(-1),B=qe({name:"",src:"wan",dest:"lan",proto:"tcp",dest_port:"",target:"DROP"});function Te(){Object.assign(B,{name:"",src:"wan",dest:"lan",proto:"tcp",dest_port:"",target:"DROP"}),ce.value=-1,de.value=!0}function be(t){Object.assign(B,{name:t.name,src:t.src,dest:t.dest,proto:t.proto,dest_port:t.dest_port,target:t.target}),ce.value=t.index,de.value=!0}async function we(){xe.value=!0;try{ce.value>=0?await W("firewall.set_rule",{index:ce.value,...B}):await W("firewall.add_rule",B),de.value=!1,i.success(s("common.saved")),$()}catch(t){i.error(t.message)}finally{xe.value=!1}}async function Y(t,e){try{await W("firewall.set_rule",{index:t.index,enabled:e}),$()}catch(a){i.error(a.message)}}async function je(t){try{await W("firewall.del_rule",{index:t}),$()}catch(e){i.error(e.message)}}async function Oe(){try{await W("vpn.client_start",{proto:R.value.wireguard?"wireguard":"openvpn"}),i.success(s("common.saved")),setTimeout(P,2e3)}catch(t){i.error(t.message)}}async function Ue(){try{await W("vpn.client_stop"),i.success(s("common.saved")),setTimeout(P,1e3)}catch(t){i.error(t.message)}}async function Pe(t){try{await W("vpn.server_set_config",{proto:"wireguard",enabled:t,port:51820}),i.success(s("common.saved")),setTimeout(P,3e3)}catch(e){i.error(e.message)}}async function $e(t){var d;const e=(d=t.target.files)==null?void 0:d[0];if(!e)return;const a=new FileReader;a.onload=async()=>{const x=btoa(a.result),U=e.name.endsWith(".ovpn")?"openvpn":"wireguard";try{await W("vpn.client_set_config",{proto:U,config:x}),i.success(s("common.saved"))}catch(I){i.error(I.message)}},a.readAsBinaryString(e),t.target.value=""}const ve=h(!1),_e=h(!1),Ce=h(""),oe=h(null);async function re(){_e.value=!0;try{oe.value=await W("vpn.server_gen_peer",{name:Ce.value||"peer"}),ve.value=!1}catch(t){i.error(t.message)}finally{_e.value=!1}}const ue=h(!1),X=qe({enabled:!1,service_name:"",domain:"",password:""}),Fe=[{label:"DuckDNS",value:"duckdns.org"},{label:"No-IP",value:"noip.com"},{label:"Dynu",value:"dynu.com"},{label:"Cloudflare",value:"cloudflare.com-v4"},{label:"FreeDNS",value:"freedns.afraid.org"}];async function Ne(){ue.value=!0;try{await W("ddns.set_config",X),i.success(s("common.saved")),L()}catch(t){i.error(t.message)}finally{ue.value=!1}}async function le(){try{await W("ddns.update_now"),i.success(s("common.saved"))}catch(t){i.error(t.message)}}const Se=h("ping"),me=h("8.8.8.8"),Re=h(!1),se=h(""),De=[{label:"Ping",value:"ping"},{label:"Traceroute",value:"traceroute"},{label:"DNS Lookup",value:"nslookup"}];async function He(){if(me.value){Re.value=!0,se.value="";try{const t=await W("system.run_diagnostic",{tool:Se.value,host:me.value});se.value=(t==null?void 0:t.output)||"(no output)"}catch(t){se.value="Error: "+t.message}finally{Re.value=!1}}}const ge=h(""),he=h(!1);async function ie(){he.value=!0;try{const t=await W("system.get_log",{lines:50});ge.value=(t==null?void 0:t.log)||""}catch(t){ge.value="Error: "+t.message}finally{he.value=!1}}return(t,e)=>(F(),G("div",Na,[r(pe,{title:o(s)("system.advanced.portForward")+` (${y.value.length})`},{action:c(()=>[r(o(M),{size:"small",type:"primary",onClick:w},{default:c(()=>[r(o(vt),{size:14,style:{"margin-right":"4px"}}),J(u(o(s)("common.add")),1)]),_:1})]),default:c(()=>[m("p",Da,u(o(s)("system.portForward.desc")),1),(F(!0),G(et,null,st(y.value,a=>{var d;return F(),G("div",{key:a.index,class:"rule-item"},[m("div",Ha,[r(o(Ye),{value:a.enabled,size:"small","onUpdate:value":x=>ae(a,x)},null,8,["value","onUpdate:value"]),m("strong",null,u(a.name||"Rule "+a.index),1),m("span",Ma,u((d=a.proto)==null?void 0:d.toUpperCase())+" "+u(a.src_dport)+" → "+u(a.dest_ip)+":"+u(a.dest_port),1)]),m("div",Va,[r(o(M),{text:"",size:"small",type:"primary",onClick:x=>f(a)},{default:c(()=>[r(o(bt),{size:14})]),_:1},8,["onClick"]),r(o(M),{text:"",size:"small",type:"error",onClick:x=>ne(a.index)},{default:c(()=>[r(o(mt),{size:14})]),_:1},8,["onClick"])])])}),128)),y.value.length?ee("",!0):(F(),G("div",Xa,u(o(s)("system.portForward.noRules")),1))]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.firewall")+` (${_.value.length})`},{action:c(()=>[r(o(M),{size:"small",type:"primary",onClick:Te},{default:c(()=>[r(o(vt),{size:14,style:{"margin-right":"4px"}}),J(u(o(s)("common.add")),1)]),_:1})]),default:c(()=>[m("p",Ga,u(o(s)("system.firewall.desc")),1),(F(!0),G(et,null,st(_.value,a=>(F(),G("div",{key:a.index,class:"rule-item"},[m("div",qa,[r(o(Ye),{value:a.enabled,size:"small","onUpdate:value":d=>Y(a,d)},null,8,["value","onUpdate:value"]),m("strong",null,u(a.name||"Rule "+a.index),1),m("span",Ja,u(a.src)+"→"+u(a.dest)+" "+u(a.proto)+" :"+u(a.dest_port)+" "+u(a.target),1)]),m("div",Ya,[r(o(M),{text:"",size:"small",type:"primary",onClick:d=>be(a)},{default:c(()=>[r(o(bt),{size:14})]),_:1},8,["onClick"]),r(o(M),{text:"",size:"small",type:"error",onClick:d=>je(a.index)},{default:c(()=>[r(o(mt),{size:14})]),_:1},8,["onClick"])])]))),128)),_.value.length?ee("",!0):(F(),G("div",Ka,u(o(s)("system.firewall.noRules")),1))]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.vpn")},{default:c(()=>[!R.value.wireguard&&!R.value.openvpn?(F(),G("div",Qa,u(o(s)("system.vpn.notInstalled")),1)):(F(),Ae(o(Ua),{key:1,type:"segment",size:"small",style:{"margin-bottom":"12px"}},{default:c(()=>[r(o(ct),{name:o(s)("system.vpn.client")},{default:c(()=>{var a,d,x,U,I;return[m("div",Za,[m("div",en,[m("span",tn,u(o(s)("system.vpn.status")),1),r(ot,{status:(a=g.value.client)!=null&&a.running?"online":"offline"},null,8,["status"]),m("span",null,u((d=g.value.client)!=null&&d.running?o(s)("system.vpn.connected"):o(s)("system.vpn.disconnected")),1)]),(x=g.value.client)!=null&&x.proto?(F(),G("div",an,[m("span",nn,u(o(s)("system.vpn.protocol")),1),m("span",null,u(g.value.client.proto),1)])):ee("",!0),(U=g.value.client)!=null&&U.ip?(F(),G("div",sn,[e[24]||(e[24]=m("span",{class:"info-label"},"IP",-1)),m("span",on,u(g.value.client.ip),1)])):ee("",!0)]),m("div",rn,[r(o(M),{size:"small",onClick:e[0]||(e[0]=K=>t.$refs.vpnConfigInput.click())},{default:c(()=>[r(o(ha),{size:14,style:{"margin-right":"4px"}}),J(" "+u(o(s)("system.vpn.uploadConfig")),1)]),_:1}),(I=g.value.client)!=null&&I.running?(F(),Ae(o(M),{key:1,size:"small",type:"warning",onClick:Ue},{default:c(()=>[J(u(o(s)("system.vpn.disconnect")),1)]),_:1})):(F(),Ae(o(M),{key:0,size:"small",type:"primary",onClick:Oe},{default:c(()=>[J(u(o(s)("system.vpn.connect")),1)]),_:1}))]),m("input",{ref:"vpnConfigInput",type:"file",accept:".conf,.ovpn",style:{display:"none"},onChange:$e},null,544)]}),_:1},8,["name"]),r(o(ct),{name:o(s)("system.vpn.server")},{default:c(()=>{var a,d,x,U;return[m("div",ln,[m("div",dn,[m("span",cn,u(o(s)("system.vpn.status")),1),r(ot,{status:(a=g.value.server)!=null&&a.running?"online":"offline"},null,8,["status"]),m("span",null,u((d=g.value.server)!=null&&d.running?o(s)("common.enabled"):o(s)("common.disabled")),1)])]),m("div",un,[r(o(M),{size:"small",type:(x=g.value.server)!=null&&x.running?"warning":"primary",onClick:e[1]||(e[1]=I=>{var K;return Pe(!((K=g.value.server)!=null&&K.running))})},{default:c(()=>{var I;return[J(u((I=g.value.server)!=null&&I.running?o(s)("common.disabled"):o(s)("system.vpn.serverEnable")),1)]}),_:1},8,["type"]),(U=g.value.server)!=null&&U.running?(F(),Ae(o(M),{key:0,size:"small",onClick:e[2]||(e[2]=I=>ve.value=!0)},{default:c(()=>[J(u(o(s)("system.vpn.genPeer")),1)]),_:1})):ee("",!0)]),oe.value?(F(),G("div",pn,[m("pre",fn,u(oe.value.config),1),oe.value.qrcode?(F(),G("img",{key:0,src:"data:image/png;base64,"+oe.value.qrcode,style:{"max-width":"200px","margin-top":"8px","border-radius":"8px"}},null,8,bn)):ee("",!0),m("p",vn,u(o(s)("system.vpn.scanQR")),1)])):ee("",!0)]}),_:1},8,["name"])]),_:1}))]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.ddns")},{default:c(()=>[m("div",mn,[r(V,{label:o(s)("system.ddns.enabled")},{default:c(()=>[r(o(Ye),{value:X.enabled,"onUpdate:value":e[3]||(e[3]=a=>X.enabled=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.ddns.service")},{default:c(()=>[r(o(fe),{value:X.service_name,"onUpdate:value":e[4]||(e[4]=a=>X.service_name=a),options:Fe,size:"small"},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.ddns.domain")},{default:c(()=>[r(o(te),{value:X.domain,"onUpdate:value":e[5]||(e[5]=a=>X.domain=a),size:"small"},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.ddns.token")},{default:c(()=>[r(o(te),{value:X.password,"onUpdate:value":e[6]||(e[6]=a=>X.password=a),size:"small",type:"password","show-password-on":"click"},null,8,["value"])]),_:1},8,["label"])]),z.value.current_ip?(F(),G("div",gn,[m("div",hn,[m("span",yn,u(o(s)("system.ddns.currentIP")),1),m("span",xn,u(z.value.current_ip),1)]),m("div",wn,[m("span",_n,u(o(s)("system.ddns.lastUpdate")),1),m("span",null,u(z.value.last_update||"--"),1)])])):ee("",!0),m("div",Cn,[r(o(M),{size:"small",type:"primary",loading:ue.value,onClick:Ne},{default:c(()=>[J(u(o(s)("common.save")),1)]),_:1},8,["loading"]),r(o(M),{size:"small",onClick:le},{default:c(()=>[J(u(o(s)("system.ddns.updateNow")),1)]),_:1})])]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.diagnostics")},{default:c(()=>[m("div",Sn,[r(o(fe),{value:Se.value,"onUpdate:value":e[7]||(e[7]=a=>Se.value=a),options:De,size:"small",style:{width:"140px"}},null,8,["value"]),r(o(te),{value:me.value,"onUpdate:value":e[8]||(e[8]=a=>me.value=a),placeholder:o(s)("system.diagnostics.host"),size:"small",style:{flex:"1","min-width":"150px"}},null,8,["value","placeholder"]),r(o(M),{type:"primary",size:"small",loading:Re.value,onClick:He},{default:c(()=>[J(u(o(s)("system.diagnostics.run")),1)]),_:1},8,["loading"])]),se.value?(F(),G("pre",Rn,u(se.value),1)):ee("",!0)]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.systemLog")},{default:c(()=>[r(o(M),{size:"small",onClick:ie,loading:he.value,style:{"margin-bottom":"8px"}},{default:c(()=>[J(u(o(s)("common.retry")),1)]),_:1},8,["loading"]),ge.value?(F(),G("pre",zn,u(ge.value),1)):ee("",!0)]),_:1},8,["title"]),r(pe,{title:o(s)("system.advanced.luci")},{default:c(()=>[m("p",kn,u(o(s)("system.advanced.luciDesc")),1),r(o(M),{tag:"a",href:C.value,target:"_blank"},{default:c(()=>[r(o(Fa),{size:16,style:{"margin-right":"6px"}}),J(" "+u(o(s)("system.advanced.openLuci")),1)]),_:1},8,["href"])]),_:1},8,["title"]),r(Je,{show:A.value,"onUpdate:show":e[14]||(e[14]=a=>A.value=a),title:o(s)("system.advanced.portForward"),saving:j.value,onSave:D},{default:c(()=>[r(V,{label:o(s)("system.portForward.name")},{default:c(()=>[r(o(te),{value:k.name,"onUpdate:value":e[9]||(e[9]=a=>k.name=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.portForward.protocol")},{default:c(()=>[r(o(fe),{value:k.proto,"onUpdate:value":e[10]||(e[10]=a=>k.proto=a),options:b},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.portForward.extPort")},{default:c(()=>[r(o(te),{value:k.src_dport,"onUpdate:value":e[11]||(e[11]=a=>k.src_dport=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.portForward.intIP")},{default:c(()=>[r(o(te),{value:k.dest_ip,"onUpdate:value":e[12]||(e[12]=a=>k.dest_ip=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.portForward.intPort")},{default:c(()=>[r(o(te),{value:k.dest_port,"onUpdate:value":e[13]||(e[13]=a=>k.dest_port=a),placeholder:k.src_dport},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),r(Je,{show:de.value,"onUpdate:show":e[21]||(e[21]=a=>de.value=a),title:o(s)("system.advanced.firewall"),saving:xe.value,onSave:we},{default:c(()=>[r(V,{label:o(s)("system.firewall.name")},{default:c(()=>[r(o(te),{value:B.name,"onUpdate:value":e[15]||(e[15]=a=>B.name=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.firewall.src")},{default:c(()=>[r(o(fe),{value:B.src,"onUpdate:value":e[16]||(e[16]=a=>B.src=a),options:T},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.firewall.dest")},{default:c(()=>[r(o(fe),{value:B.dest,"onUpdate:value":e[17]||(e[17]=a=>B.dest=a),options:T},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.firewall.protocol")},{default:c(()=>[r(o(fe),{value:B.proto,"onUpdate:value":e[18]||(e[18]=a=>B.proto=a),options:b},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.firewall.destPort")},{default:c(()=>[r(o(te),{value:B.dest_port,"onUpdate:value":e[19]||(e[19]=a=>B.dest_port=a)},null,8,["value"])]),_:1},8,["label"]),r(V,{label:o(s)("system.firewall.action")},{default:c(()=>[r(o(fe),{value:B.target,"onUpdate:value":e[20]||(e[20]=a=>B.target=a),options:S},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving"]),r(Je,{show:ve.value,"onUpdate:show":e[23]||(e[23]=a=>ve.value=a),title:o(s)("system.vpn.genPeer"),saving:_e.value,onSave:re,"save-label":o(s)("system.vpn.genPeer")},{default:c(()=>[r(V,{label:o(s)("system.vpn.peerName")},{default:c(()=>[r(o(te),{value:Ce.value,"onUpdate:value":e[22]||(e[22]=a=>Ce.value=a),placeholder:"iPhone"},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["show","title","saving","save-label"])]))}},Mn=ba(Tn,[["__scopeId","data-v-47dfa4fa"]]);export{Mn as default};
