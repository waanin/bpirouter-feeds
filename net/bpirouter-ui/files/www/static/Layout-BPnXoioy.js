import{e as O,h as d,O as eo,P as oo,Q as to,R as we,c as J,a as u,b as P,u as ne,f as U,s as le,m as b,r as H,p as Y,l as s,d as S,S as He,i as D,t as re,U as Z,V as ro,W,X as ve,Y as no,Z as lo,_ as io,$ as Se,n as ao,a0 as co,q as so,a1 as uo,F as Re,C as L,E,M as vo,I as mo,a2 as ho,a3 as fo,J as ae,B as F,z as G,y as po,G as Pe,L as oe,H as ce,N as go}from"./index-DPXSnRha.js";import{S as Be,u as Oe,c as M,V as bo,a as xo}from"./Scrollbar-CZQ7j8JC.js";import{C as Co,N as yo,k as se,a as zo,V as Io,c as de}from"./Dropdown-DUDd0Q1V.js";import{f as ue}from"./format-length-B-p6aW7q.js";import{u as me,k as pe}from"./get-Dw8vSe5f.js";import{B as Ne}from"./Button-BERhLT5j.js";import{N as wo}from"./Tag-CZQ_QBiY.js";import{N as Te}from"./text-CFEgkAMv.js";import"./utils-Bhs2YIuv.js";import"./flatten-DMy8cLVD.js";import"./fade-in-scale-up.cssr-Czm_2hDQ.js";import"./is-browser-DqcmxZSF.js";import"./Wave-Cu-0WI9g.js";const So=O({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Ro(e){const{baseColor:t,textColor2:r,bodyColor:i,cardColor:a,dividerColor:l,actionColor:v,scrollbarColor:h,scrollbarColorHover:c,invertedColor:g}=e;return{textColor:r,textColorInverted:"#FFF",color:i,colorEmbedded:v,headerColor:a,headerColorInverted:g,footerColor:v,footerColorInverted:g,headerBorderColor:l,headerBorderColorInverted:g,footerBorderColor:l,footerBorderColorInverted:g,siderBorderColor:l,siderBorderColorInverted:g,siderColor:a,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:we(i,h),siderToggleBarColorHover:we(i,c),__invertScrollbar:"true"}}const ge=eo({name:"Layout",common:to,peers:{Scrollbar:oo},self:Ro}),$e=J("n-layout-sider"),be={type:String,default:"static"},Po=u("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[u("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),No={embedded:Boolean,position:be,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ee=J("n-layout");function Me(e){return O({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},U.props),No),setup(t){const r=H(null),i=H(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=ne(t),v=U("Layout","-layout",Po,ge,t,a);function h(x,z){if(t.nativeScrollbar){const{value:N}=r;N&&(z===void 0?N.scrollTo(x):N.scrollTo(x,z))}else{const{value:N}=i;N&&N.scrollTo(x,z)}}Y(Ee,t);let c=0,g=0;const _=x=>{var z;const N=x.target;c=N.scrollLeft,g=N.scrollTop,(z=t.onScroll)===null||z===void 0||z.call(t,x)};Oe(()=>{if(t.nativeScrollbar){const x=r.value;x&&(x.scrollTop=g,x.scrollLeft=c)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:h},R=b(()=>{const{common:{cubicBezierEaseInOut:x},self:z}=v.value;return{"--n-bezier":x,"--n-color":t.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),C=l?le("layout",b(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:A,mergedTheme:v,handleNativeElScroll:_,cssVars:l?void 0:R,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},f)},render(){var t;const{mergedClsPrefix:r,hasSider:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=i?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return d("div",{class:l,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):d(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Ae=Me(!1),To=Me(!0),Ao=u("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[P("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),P("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ko={position:be,inverted:Boolean,bordered:{type:Boolean,default:!1}},_o=O({name:"LayoutHeader",props:Object.assign(Object.assign({},U.props),ko),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ne(e),i=U("Layout","-layout-header",Ao,ge,e,t),a=b(()=>{const{common:{cubicBezierEaseInOut:v},self:h}=i.value,c={"--n-bezier":v};return e.inverted?(c["--n-color"]=h.headerColorInverted,c["--n-text-color"]=h.textColorInverted,c["--n-border-color"]=h.headerBorderColorInverted):(c["--n-color"]=h.headerColor,c["--n-text-color"]=h.textColor,c["--n-border-color"]=h.headerBorderColor),c}),l=r?le("layout-header",b(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ho=u("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[P("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[P("bordered",[s("border",`
 right: 0;
 `)])]),P("right-placement",`
 justify-content: flex-start;
 `,[P("bordered",[s("border",`
 left: 0;
 `)]),P("collapsed",[u("layout-toggle-button",[u("base-icon",`
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",[S("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),u("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u("base-icon",`
 transform: rotate(0);
 `)]),u("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[S("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),P("collapsed",[u("layout-toggle-bar",[S("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),u("layout-toggle-button",[u("base-icon",`
 transform: rotate(0);
 `)])]),u("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[u("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),S("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),S("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),P("show-content",[u("layout-sider-scroll-container",{opacity:1})]),P("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Bo=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Oo=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(He,{clsPrefix:e},{default:()=>d(Co,null)}))}}),$o={position:be,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Eo=O({name:"LayoutSider",props:Object.assign(Object.assign({},U.props),$o),setup(e){const t=D(Ee),r=H(null),i=H(null),a=H(e.defaultCollapsed),l=me(re(e,"collapsed"),a),v=b(()=>ue(l.value?e.collapsedWidth:e.width)),h=b(()=>e.collapseMode!=="transform"?{}:{minWidth:ue(e.width)}),c=b(()=>t?t.siderPlacement:"left");function g(k,I){if(e.nativeScrollbar){const{value:w}=r;w&&(I===void 0?w.scrollTo(k):w.scrollTo(k,I))}else{const{value:w}=i;w&&w.scrollTo(k,I)}}function _(){const{"onUpdate:collapsed":k,onUpdateCollapsed:I,onExpand:w,onCollapse:V}=e,{value:j}=l;I&&M(I,!j),k&&M(k,!j),a.value=!j,j?w&&M(w):V&&M(V)}let A=0,f=0;const R=k=>{var I;const w=k.target;A=w.scrollLeft,f=w.scrollTop,(I=e.onScroll)===null||I===void 0||I.call(e,k)};Oe(()=>{if(e.nativeScrollbar){const k=r.value;k&&(k.scrollTop=f,k.scrollLeft=A)}}),Y($e,{collapsedRef:l,collapseModeRef:re(e,"collapseMode")});const{mergedClsPrefixRef:C,inlineThemeDisabled:x}=ne(e),z=U("Layout","-layout-sider",Ho,ge,e,C);function N(k){var I,w;k.propertyName==="max-width"&&(l.value?(I=e.onAfterLeave)===null||I===void 0||I.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const X={scrollTo:g},K=b(()=>{const{common:{cubicBezierEaseInOut:k},self:I}=z.value,{siderToggleButtonColor:w,siderToggleButtonBorder:V,siderToggleBarColor:j,siderToggleBarColorHover:ie}=I,B={"--n-bezier":k,"--n-toggle-button-color":w,"--n-toggle-button-border":V,"--n-toggle-bar-color":j,"--n-toggle-bar-color-hover":ie};return e.inverted?(B["--n-color"]=I.siderColorInverted,B["--n-text-color"]=I.textColorInverted,B["--n-border-color"]=I.siderBorderColorInverted,B["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColorInverted,B.__invertScrollbar=I.__invertScrollbar):(B["--n-color"]=I.siderColor,B["--n-text-color"]=I.textColor,B["--n-border-color"]=I.siderBorderColor,B["--n-toggle-button-icon-color"]=I.siderToggleButtonIconColor),B}),$=x?le("layout-sider",b(()=>e.inverted?"a":"b"),K,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:C,mergedTheme:z,styleMaxWidth:v,mergedCollapsed:l,scrollContainerStyle:h,siderPlacement:c,handleNativeElScroll:R,handleTransitionend:N,handleTriggerClick:_,inlineThemeDisabled:x,cssVars:K,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},X)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ue(this.width)}]},this.nativeScrollbar?d("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(Be,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?d(Bo,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Oo,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${t}-layout-sider__border`}):null)}}),Q=J("n-menu"),Le=J("n-submenu"),xe=J("n-menu-item-group"),ke=[S("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[S("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],_e=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Mo=S([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[P("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[S("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[P("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[S("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Z("disabled",[Z("selected, child-active",[S("&:focus-within",_e)]),P("selected",[q(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[q(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[S("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),q("border-bottom: 2px solid var(--n-border-color-horizontal);",_e)]),u("menu-item-content-header",[S("a","color: var(--n-item-text-color-horizontal);")])])]),Z("responsive",[u("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("collapsed",[u("menu-item-content",[P("selected",[S("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[S("> *","z-index: 1;"),S("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),P("collapsed",[s("arrow","transform: rotate(0);")]),P("selected",[S("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[S("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[S("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Z("disabled",[Z("selected, child-active",[S("&:focus-within",ke)]),P("selected",[q(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[S("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[q(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[S("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[q(null,[S("&::before","background-color: var(--n-item-color-active-hover);")])]),q(null,ke)]),s("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[S("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[S("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ro({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),u("menu-tooltip",[S("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function q(e,t){return[P("hover",e,t),S("&:hover",e,t)]}const Fe=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=D(Q);return{menuProps:t,style:b(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:b(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:a}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:a,expandIcon:l}}=this,v=r?r(t.rawNode):W(this.icon);return d("div",{onClick:h=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,h)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:i?i(t.rawNode):W(this.title),this.extra||a?d("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):W(this.extra)):null),this.showArrow?d(He,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):d(So,null)}):null)}}),te=8;function Ce(e){const t=D(Q),{props:r,mergedCollapsedRef:i}=t,a=D(Le,null),l=D(xe,null),v=b(()=>r.mode==="horizontal"),h=b(()=>v.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=b(()=>{var f;return Math.max((f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize,r.iconSize)}),g=b(()=>{var f;return!v.value&&e.root&&i.value&&(f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize}),_=b(()=>{if(v.value)return;const{collapsedWidth:f,indent:R,rootIndent:C}=r,{root:x,isGroup:z}=e,N=C===void 0?R:C;return x?i.value?f/2-c.value/2:N:l&&typeof l.paddingLeftRef.value=="number"?R/2+l.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(z?R/2:R)+a.paddingLeftRef.value:0}),A=b(()=>{const{collapsedWidth:f,indent:R,rootIndent:C}=r,{value:x}=c,{root:z}=e;return v.value||!z||!i.value?te:(C===void 0?R:C)+x+te-(f+x)/2});return{dropdownPlacement:h,activeIconSize:g,maxIconSize:c,paddingLeft:_,iconMarginRight:A,NMenu:t,NSubmenu:a,NMenuOptionGroup:l}}const ye={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Lo=O({name:"MenuDivider",setup(){const e=D(Q),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:d("div",{class:`${t.value}-menu-divider`})}}),je=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Fo=pe(je),jo=O({name:"MenuOption",props:je,setup(e){const t=Ce(e),{NSubmenu:r,NMenu:i,NMenuOptionGroup:a}=t,{props:l,mergedClsPrefixRef:v,mergedCollapsedRef:h}=i,c=r?r.mergedDisabledRef:a?a.mergedDisabledRef:{value:!1},g=b(()=>c.value||e.disabled);function _(f){const{onClick:R}=e;R&&R(f)}function A(f){g.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),_(f))}return{mergedClsPrefix:v,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:ve(()=>e.root&&h.value&&l.mode!=="horizontal"&&!g.value),selected:ve(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:g,handleClick:A}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:i,nodeProps:a}}=this,l=a==null?void 0:a(r.rawNode);return d("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),d(yo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):W(this.title),trigger:()=>d(Fe,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ke=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ko=pe(Ke),Vo=O({name:"MenuOptionGroup",props:Ke,setup(e){const t=Ce(e),{NSubmenu:r}=t,i=b(()=>r!=null&&r.mergedDisabledRef.value?!0:e.tmNode.disabled);Y(xe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:i});const{mergedClsPrefixRef:a,props:l}=D(Q);return function(){const{value:v}=a,h=t.paddingLeft.value,{nodeProps:c}=l,g=c==null?void 0:c(e.tmNode.rawNode);return d("div",{class:`${v}-menu-item-group`,role:"group"},d("div",Object.assign({},g,{class:[`${v}-menu-item-group-title`,g==null?void 0:g.class],style:[(g==null?void 0:g.style)||"",h!==void 0?`padding-left: ${h}px;`:""]}),W(e.title),e.extra?d(no,null," ",W(e.extra)):null),d("div",null,e.tmNodes.map(_=>ze(_,l))))}}});function he(e){return e.type==="divider"||e.type==="render"}function Do(e){return e.type==="divider"}function ze(e,t){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(he(r))return Do(r)?d(Lo,Object.assign({key:e.key},r.props)):null;const{labelField:a}=t,{key:l,level:v,isGroup:h}=e,c=Object.assign(Object.assign({},r),{title:r.title||r[a],extra:r.titleExtra||r.extra,key:l,internalKey:l,level:v,root:v===0,isGroup:h});return e.children?e.isGroup?d(Vo,se(c,Ko,{tmNode:e,tmNodes:e.children,key:l})):d(fe,se(c,Uo,{key:l,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):d(jo,se(c,Fo,{key:l,tmNode:e}))}const Ve=Object.assign(Object.assign({},ye),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Uo=pe(Ve),fe=O({name:"Submenu",props:Ve,setup(e){const t=Ce(e),{NMenu:r,NSubmenu:i}=t,{props:a,mergedCollapsedRef:l,mergedThemeRef:v}=r,h=b(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||a.disabled?!0:f}),c=H(!1);Y(Le,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:h}),Y(xe,null);function g(){const{onClick:f}=e;f&&f()}function _(){h.value||(l.value||r.toggleExpand(e.internalKey),g())}function A(f){c.value=f}return{menuProps:a,mergedTheme:v,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:h,mergedValue:r.mergedValueRef,childActive:ve(()=>{var f;return(f=e.virtualChildActive)!==null&&f!==void 0?f:r.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>a.mode==="horizontal"?!1:l.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!h.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:A,handleClick:_}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:i}}=this,a=()=>{const{isHorizontal:v,paddingLeft:h,collapsed:c,mergedDisabled:g,maxIconSize:_,activeIconSize:A,title:f,childActive:R,icon:C,handleClick:x,menuProps:{nodeProps:z},dropdownShow:N,iconMarginRight:X,tmNode:K,mergedClsPrefix:$,isEllipsisPlaceholder:k,extra:I}=this,w=z==null?void 0:z(K.rawNode);return d("div",Object.assign({},w,{class:[`${$}-menu-item`,w==null?void 0:w.class],role:"menuitem"}),d(Fe,{tmNode:K,paddingLeft:h,collapsed:c,disabled:g,iconMarginRight:X,maxIconSize:_,activeIconSize:A,title:f,extra:I,showArrow:!v,childActive:R,clsPrefix:$,icon:C,hover:N,onClick:x,isEllipsisPlaceholder:k}))},l=()=>d(lo,null,{default:()=>{const{tmNodes:v,collapsed:h}=this;return h?null:d("div",{class:`${t}-submenu-children`,role:"menu"},v.map(c=>ze(c,this.menuProps)))}});return this.root?d(zo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>d("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:l())}):d("div",{class:`${t}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},a(),l())}}),Go=Object.assign(Object.assign({},U.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),qo=O({name:"Menu",inheritAttrs:!1,props:Go,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ne(e),i=U("Menu","-menu",Mo,io,e,t),a=D($e,null),l=b(()=>{var m;const{collapsed:y}=e;if(y!==void 0)return y;if(a){const{collapseModeRef:o,collapsedRef:p}=a;if(o.value==="width")return(m=p.value)!==null&&m!==void 0?m:!1}return!1}),v=b(()=>{const{keyField:m,childrenField:y,disabledField:o}=e;return de(e.items||e.options,{getIgnored(p){return he(p)},getChildren(p){return p[y]},getDisabled(p){return p[o]},getKey(p){var T;return(T=p[m])!==null&&T!==void 0?T:p.name}})}),h=b(()=>new Set(v.value.treeNodes.map(m=>m.key))),{watchProps:c}=e,g=H(null);c!=null&&c.includes("defaultValue")?Se(()=>{g.value=e.defaultValue}):g.value=e.defaultValue;const _=re(e,"value"),A=me(_,g),f=H([]),R=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(A.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Se(R):R();const C=xo(e,["expandedNames","expandedKeys"]),x=me(C,f),z=b(()=>v.value.treeNodes),N=b(()=>v.value.getPath(A.value).keyPath);Y(Q,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:A,mergedExpandedKeysRef:x,activePathRef:N,mergedClsPrefixRef:t,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:re(e,"inverted"),doSelect:X,toggleExpand:$});function X(m,y){const{"onUpdate:value":o,onUpdateValue:p,onSelect:T}=e;p&&M(p,m,y),o&&M(o,m,y),T&&M(T,m,y),g.value=m}function K(m){const{"onUpdate:expandedKeys":y,onUpdateExpandedKeys:o,onExpandedNamesChange:p,onOpenNamesChange:T}=e;y&&M(y,m),o&&M(o,m),p&&M(p,m),T&&M(T,m),f.value=m}function $(m){const y=Array.from(x.value),o=y.findIndex(p=>p===m);if(~o)y.splice(o,1);else{if(e.accordion&&h.value.has(m)){const p=y.findIndex(T=>h.value.has(T));p>-1&&y.splice(p,1)}y.push(m)}K(y)}const k=m=>{const y=v.value.getPath(m??A.value,{includeSelf:!1}).keyPath;if(!y.length)return;const o=Array.from(x.value),p=new Set([...o,...y]);e.accordion&&h.value.forEach(T=>{p.has(T)&&!y.includes(T)&&p.delete(T)}),K(Array.from(p))},I=b(()=>{const{inverted:m}=e,{common:{cubicBezierEaseInOut:y},self:o}=i.value,{borderRadius:p,borderColorHorizontal:T,fontSize:Ze,itemHeight:Je,dividerColor:Qe}=o,n={"--n-divider-color":Qe,"--n-bezier":y,"--n-font-size":Ze,"--n-border-color-horizontal":T,"--n-border-radius":p,"--n-item-height":Je};return m?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),w=r?le("menu",b(()=>e.inverted?"a":"b"),I,e):void 0,V=ao(),j=H(null),ie=H(null);let B=!0;const Ie=()=>{var m;B?B=!1:(m=j.value)===null||m===void 0||m.sync({showAllItemsBeforeCalculate:!0})};function De(){return document.getElementById(V)}const ee=H(-1);function Ue(m){ee.value=e.options.length-m}function Ge(m){m||(ee.value=-1)}const qe=b(()=>{const m=ee.value;return{children:m===-1?[]:e.options.slice(m)}}),We=b(()=>{const{childrenField:m,disabledField:y,keyField:o}=e;return de([qe.value],{getIgnored(p){return he(p)},getChildren(p){return p[m]},getDisabled(p){return p[y]},getKey(p){var T;return(T=p[o])!==null&&T!==void 0?T:p.name}})}),Ye=b(()=>de([{}]).treeNodes[0]);function Xe(){var m;if(ee.value===-1)return d(fe,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ye.value,domId:V,isEllipsisPlaceholder:!0});const y=We.value.treeNodes[0],o=N.value,p=!!(!((m=y.children)===null||m===void 0)&&m.some(T=>o.includes(T.key)));return d(fe,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:p,tmNode:y,domId:V,rawNodes:y.rawNode.children||[],tmNodes:y.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:C,uncontrolledExpanededKeys:f,mergedExpandedKeys:x,uncontrolledValue:g,mergedValue:A,activePath:N,tmNodes:z,mergedTheme:i,mergedCollapsed:l,cssVars:r?void 0:I,themeClass:w==null?void 0:w.themeClass,overflowRef:j,counterRef:ie,updateCounter:()=>{},onResize:Ie,onUpdateOverflow:Ge,onUpdateCount:Ue,renderCounter:Xe,getCounter:De,onRender:w==null?void 0:w.onRender,showOption:k,deriveResponsiveState:Ie}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:i}=this;i==null||i();const a=()=>this.tmNodes.map(c=>ze(c,this.$props)),v=t==="horizontal"&&this.responsive,h=()=>d("div",co(this.$attrs,{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,v&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),v?d(Io,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return v?d(bo,{onResize:this.onResize},{default:h}):h()}}),Wo={style:{display:"flex","align-items":"center",gap:"10px",padding:"18px 16px"}},Yo={key:0,style:{"font-size":"16px","font-weight":"600",color:"#fff","white-space":"nowrap"}},Xo={style:{"margin-top":"auto",padding:"8px","border-top":"1px solid rgba(255,255,255,.06)"}},Zo={style:{"margin-left":"auto"}},ut={__name:"Layout",setup(e){const t=mo(),r=ho(),i=H(!1),a=H(null),l=H(!0);let v=null;const h=b(()=>r.path==="/"?"dashboard":r.path.slice(1)),c=[{label:"Dashboard",key:"dashboard"},{label:"Internet",key:"internet"},{label:"Wireless",key:"wireless"},{label:"Clients",key:"clients"},{label:"System",key:"system"}];function g(R){t.push(R==="dashboard"?"/":`/${R}`)}function _(R){const C=Math.floor(R/86400),x=Math.floor(R%86400/3600),z=Math.floor(R%3600/60);return C>0?`${C}d ${x}h`:x>0?`${x}h ${z}m`:`${z}m`}async function A(){try{a.value=await vo("system.get_info"),l.value=!0}catch{l.value=!1}}function f(){go(""),t.push({name:"login"})}return so(()=>{A(),v=setInterval(A,1e4)}),uo(()=>clearInterval(v)),(R,C)=>{const x=fo("router-view");return ae(),Re(E(Ae),{"has-sider":"",style:{"min-height":"100vh"}},{default:L(()=>[F(E(Eo),{width:220,"collapsed-width":60,collapsed:i.value,"collapse-mode":"width","native-scrollbar":!1,style:{background:"var(--c-sidebar)"}},{default:L(()=>[G("div",Wo,[C[1]||(C[1]=G("svg",{width:"28",height:"28",viewBox:"0 0 40 40",fill:"none"},[G("rect",{width:"40",height:"40",rx:"10",fill:"#3b82f6"}),G("path",{d:"M12 20h16M20 14v12",stroke:"#fff","stroke-width":"2","stroke-linecap":"round"})],-1)),i.value?Pe("",!0):(ae(),po("span",Yo,"BpiRouter"))]),F(E(qo),{options:c,value:h.value,collapsed:i.value,"collapsed-width":60,indent:16,style:{"--n-item-text-color":"#8b8fa3","--n-item-text-color-active":"#63b3ed","--n-item-color-active":"rgba(99,179,237,.12)"},"onUpdate:value":g},null,8,["value","collapsed"]),G("div",Xo,[F(E(Ne),{text:"",style:{width:"100%","justify-content":"flex-start",color:"#8b8fa3",padding:"10px 12px"},onClick:f},{default:L(()=>[...C[2]||(C[2]=[oe("Logout",-1)])]),_:1})])]),_:1},8,["collapsed"]),F(E(Ae),null,{default:L(()=>[F(E(_o),{bordered:"",style:{height:"56px",display:"flex","align-items":"center",padding:"0 20px",gap:"12px"}},{default:L(()=>{var z;return[F(E(Ne),{quaternary:"",circle:"",size:"small",onClick:C[0]||(C[0]=N=>i.value=!i.value)},{icon:L(()=>[...C[3]||(C[3]=[G("span",{style:{"font-size":"18px"}},"☰",-1)])]),_:1}),F(E(Te),{strong:"",style:{"font-size":"14px"}},{default:L(()=>{var N;return[oe(ce(((N=a.value)==null?void 0:N.model)||"BPI-R4"),1)]}),_:1}),(z=a.value)!=null&&z.uptime?(ae(),Re(E(Te),{key:0,depth:"3",style:{"font-size":"12px"}},{default:L(()=>[oe("up "+ce(_(a.value.uptime)),1)]),_:1})):Pe("",!0),G("div",Zo,[F(E(wo),{type:l.value?"success":"error",size:"small",round:""},{default:L(()=>[oe(ce(l.value?"Online":"Offline"),1)]),_:1},8,["type"])])]}),_:1}),F(E(To),{"content-style":"padding:20px"},{default:L(()=>[F(x)]),_:1})]),_:1})]),_:1})}}};export{ut as default};
