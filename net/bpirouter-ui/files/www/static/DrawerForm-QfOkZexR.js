import{u as $e}from"./index-CaoLrzvz.js";import{d as Y,Y as X,h as s,bX as Ce,a6 as ee,ac as ze,aW as te,Z as q,A as F,U as re,c6 as V,u as oe,K as xe,aM as Be,aF as ke,a9 as Ee,c7 as Re,f as S,N as P,bY as Te,b1 as Fe,a_ as Oe,b0 as Me,F as i,c8 as N,c as v,a as z,G as k,c9 as He,br as De,bq as Ie,bs as Pe,b as ne,ca as Ne,W as K,cb as We,e as je,cc as Ae,X as E,ay as Ue,V as Le,k as _e,D as Xe,x as Ye,v as R,n as U,q as T,m as L,B as G,E as Z,p as _,bc as Ve}from"./index-DDHWJPsH.js";import{u as J}from"./Input-DM4KpV5-.js";import{f as Q}from"./format-length-B-p6aW7q.js";const qe=Y({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=F(!!e.show),r=F(null),g=re(V);let d=0,y="",c=null;const h=F(!1),u=F(!1),f=S(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:$,mergedRtlRef:O}=oe(e),M=xe("Drawer",O,$),x=o,w=n=>{u.value=!0,d=f.value?n.clientY:n.clientX,y=document.body.style.cursor,document.body.style.cursor=f.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",C),document.body.addEventListener("mouseleave",x),document.body.addEventListener("mouseup",o)},D=()=>{c!==null&&(window.clearTimeout(c),c=null),u.value?h.value=!0:c=window.setTimeout(()=>{h.value=!0},300)},W=()=>{c!==null&&(window.clearTimeout(c),c=null),h.value=!1},{doUpdateHeight:j,doUpdateWidth:A}=g,H=n=>{const{maxWidth:l}=e;if(l&&n>l)return l;const{minWidth:m}=e;return m&&n<m?m:n},I=n=>{const{maxHeight:l}=e;if(l&&n>l)return l;const{minHeight:m}=e;return m&&n<m?m:n};function C(n){var l,m;if(u.value)if(f.value){let p=((l=r.value)===null||l===void 0?void 0:l.offsetHeight)||0;const B=d-n.clientY;p+=e.placement==="bottom"?B:-B,p=I(p),j(p),d=n.clientY}else{let p=((m=r.value)===null||m===void 0?void 0:m.offsetWidth)||0;const B=d-n.clientX;p+=e.placement==="right"?B:-B,p=H(p),A(p),d=n.clientX}}function o(){u.value&&(d=0,u.value=!1,document.body.style.cursor=y,document.body.removeEventListener("mousemove",C),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mouseleave",x))}Be(()=>{e.show&&(t.value=!0)}),ke(()=>e.show,n=>{n||o()}),Ee(()=>{o()});const a=S(()=>{const{show:n}=e,l=[[q,n]];return e.showMask||l.push([Te,e.onClickoutside,void 0,{capture:!0}]),l});function b(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return Re(S(()=>e.blockScroll&&t.value)),P(Fe,r),P(Oe,null),P(Me,null),{bodyRef:r,rtlEnabled:M,mergedClsPrefix:g.mergedClsPrefixRef,isMounted:g.isMountedRef,mergedTheme:g.mergedThemeRef,displayed:t,transitionName:S(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:b,bodyDirectives:a,handleMousedownResizeTrigger:w,handleMouseenterResizeTrigger:D,handleMouseleaveResizeTrigger:W,isDragging:u,isHoverOnResizeTrigger:h}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?X(s("div",{role:"none"},s(Ce,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(ee,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>X(s("div",ze(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):s(te,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[q,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ke,cubicBezierEaseOut:Ge}=N;function Ze({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ke}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ge}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Je,cubicBezierEaseOut:Qe}=N;function et({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Je}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Qe}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:tt,cubicBezierEaseOut:rt}=N;function ot({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${tt}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${rt}`}),i(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:nt,cubicBezierEaseOut:it}=N;function st({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[i(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${nt}`}),i(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${it}`}),i(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const at=i([v("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[ot(),et(),st(),Ze(),z("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),z("native-scrollbar",[v("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),k("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[z("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),v("drawer-content-wrapper",`
 box-sizing: border-box;
 `),v("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[z("native-scrollbar",[v("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),v("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),v("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),v("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[k("main",`
 flex: 1;
 `),k("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),v("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),z("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),z("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),z("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),z("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[k("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[v("drawer-container",`
 position: fixed;
 `)])]),v("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),v("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[z("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),He({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),lt=Object.assign(Object.assign({},ne.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),dt=Y({name:"Drawer",inheritAttrs:!1,props:lt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:g}=oe(e),d=Pe(),y=ne("Drawer","-drawer",at,Ne,e,t),c=F(e.defaultWidth),h=F(e.defaultHeight),u=J(K(e,"width"),c),f=J(K(e,"height"),h),$=S(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":Q(u.value)}),O=S(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":Q(f.value)}),M=o=>{const{onUpdateWidth:a,"onUpdate:width":b}=e;a&&E(a,o),b&&E(b,o),c.value=o},x=o=>{const{onUpdateHeight:a,"onUpdate:width":b}=e;a&&E(a,o),b&&E(b,o),h.value=o},w=S(()=>[{width:$.value,height:O.value},e.drawerStyle||""]);function D(o){const{onMaskClick:a,maskClosable:b}=e;b&&H(!1),a&&a(o)}function W(o){D(o)}const j=We();function A(o){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Ae(o)&&(j.value||H(!1))}function H(o){const{onHide:a,onUpdateShow:b,"onUpdate:show":n}=e;b&&E(b,o),n&&E(n,o),a&&!o&&E(a,o)}P(V,{isMountedRef:d,mergedThemeRef:y,mergedClsPrefixRef:t,doUpdateShow:H,doUpdateHeight:x,doUpdateWidth:M});const I=S(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:a,cubicBezierEaseOut:b},self:{color:n,textColor:l,boxShadow:m,lineHeight:p,headerPadding:B,footerPadding:ie,borderRadius:se,bodyPadding:ae,titleFontSize:le,titleTextColor:de,titleFontWeight:ce,headerBorderBottom:ue,footerBorderTop:he,closeIconColor:fe,closeIconColorHover:be,closeIconColorPressed:me,closeColorHover:ge,closeColorPressed:ve,closeIconSize:we,closeSize:pe,closeBorderRadius:ye,resizableTriggerColorHover:Se}}=y.value;return{"--n-line-height":p,"--n-color":n,"--n-border-radius":se,"--n-text-color":l,"--n-box-shadow":m,"--n-bezier":o,"--n-bezier-out":b,"--n-bezier-in":a,"--n-header-padding":B,"--n-body-padding":ae,"--n-footer-padding":ie,"--n-title-text-color":de,"--n-title-font-size":le,"--n-title-font-weight":ce,"--n-header-border-bottom":ue,"--n-footer-border-top":he,"--n-close-icon-color":fe,"--n-close-icon-color-hover":be,"--n-close-icon-color-pressed":me,"--n-close-size":pe,"--n-close-color-hover":ge,"--n-close-color-pressed":ve,"--n-close-icon-size":we,"--n-close-border-radius":ye,"--n-resize-trigger-color-hover":Se}}),C=g?je("drawer",void 0,I,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:w,handleOutsideClick:W,handleMaskClick:D,handleEsc:A,mergedTheme:y,cssVars:g?void 0:I,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return s(Ie,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),X(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(ee,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(qe,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[De,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ct={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},ut=Y({name:"DrawerContent",props:ct,slots:Object,setup(){const e=re(V,null);e||Le("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:g,bodyClass:d,bodyStyle:y,bodyContentClass:c,bodyContentStyle:h,headerClass:u,headerStyle:f,footerClass:$,footerStyle:O,scrollbarProps:M,closable:x,$slots:w}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},w.header||e||x?s("div",{class:[`${t}-drawer-header`,u],style:f,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},w.header!==void 0?w.header():e),x&&s(Ue,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:[`${t}-drawer-body`,d],style:y,role:"none"},s("div",{class:[`${t}-drawer-body-content-wrapper`,c],style:h,role:"none"},w)):s(te,Object.assign({themeOverrides:g.peerOverrides.Scrollbar,theme:g.peers.Scrollbar},M,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,c],contentStyle:h}),w),w.footer?s("div",{class:[`${t}-drawer-footer`,$],style:O,role:"none"},w.footer()):null)}}),ht={style:{"font-weight":"600"}},ft={style:{"padding-top":"4px"}},bt={style:{display:"flex",gap:"12px","justify-content":"flex-end",width:"100%"}},pt={__name:"DrawerForm",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},saving:{type:Boolean,default:!1},saveLabel:{type:String,default:""}},emits:["update:show","save"],setup(e,{emit:t}){const{t:r}=_e(),{width:g}=$e(),d=S(()=>g.value<768),y=e,c=t,h=S({get:()=>y.show,set:u=>c("update:show",u)});return(u,f)=>(Xe(),Ye(T(dt),{show:h.value,"onUpdate:show":f[2]||(f[2]=$=>h.value=$),placement:d.value?"bottom":"right",width:d.value?"100%":480,height:d.value?"85vh":void 0,"close-on-esc":!0,"mask-closable":!0},{default:R(()=>[U(T(ut),{title:e.title},{header:R(()=>[L("span",ht,_(e.title),1)]),default:R(()=>[L("div",ft,[Ve(u.$slots,"default")])]),footer:R(()=>[L("div",bt,[U(T(G),{onClick:f[0]||(f[0]=$=>h.value=!1)},{default:R(()=>[Z(_(T(r)("common.cancel")),1)]),_:1}),U(T(G),{type:"primary",loading:e.saving,onClick:f[1]||(f[1]=$=>u.$emit("save"))},{default:R(()=>[Z(_(e.saveLabel||T(r)("common.saveApply")),1)]),_:1},8,["loading"])])]),_:3},8,["title"])]),_:3},8,["show","placement","width","height"]))}};export{pt as _};
