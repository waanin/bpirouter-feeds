import{i as te,o as Pe,c as ne,m as B,p as Te,R as ie,d as b,a as A,b as g,l as c,U as J,ap as ke,e as Re,h as m,Z as $e,as as Fe,am as Ie,X as He,u as je,f as se,bs as Ee,ad as Oe,s as De,r as L,x as r,bn as E}from"./index-DPXSnRha.js";import{i as D}from"./is-browser-DqcmxZSF.js";import{f as Ne,N as _e}from"./Wave-Cu-0WI9g.js";import{r as ee,i as Ke,c as Me,d as oe}from"./Scrollbar-CZQ7j8JC.js";const re=ne("n-form-item");function Ge(o,{defaultSize:P="medium",mergedSize:y,mergedDisabled:f}={}){const i=te(re,null);Te(re,null);const N=B(y?()=>y(i):()=>{const{size:h}=o;if(h)return h;if(i){const{mergedSize:T}=i;if(T.value!==void 0)return T.value}return P}),I=B(f?()=>f(i):()=>{const{disabled:h}=o;return h!==void 0?h:i?i.disabled.value:!1}),F=B(()=>{const{status:h}=o;return h||(i==null?void 0:i.mergedValidationStatus.value)});return Pe(()=>{i&&i.restoreValidation()}),{mergedSizeRef:N,mergedDisabledRef:I,mergedStatusRef:F,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}const Ve=D&&"chrome"in window;D&&navigator.userAgent.includes("Firefox");const We=D&&navigator.userAgent.includes("Safari")&&!Ve;function S(o){return ie(o,[255,255,255,.16])}function O(o){return ie(o,[0,0,0,.12])}const Qe=ne("n-button-group"),qe=b([A("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("color",[c("border",{borderColor:"var(--n-border-color)"}),g("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),J("disabled",[b("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),g("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),g("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),J("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),g("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),g("loading","cursor: wait;"),A("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[g("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),D&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",`
 border: var(--n-border);
 `),c("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[A("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[ke({top:"50%",originalTransform:"translateY(-50%)"})]),Ne()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),g("block",`
 display: flex;
 width: 100%;
 `),g("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),g("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Ae=Object.assign(Object.assign({},se.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!We},spinProps:Object}),Ze=Re({name:"Button",props:Ae,slots:Object,setup(o){const P=L(null),y=L(null),f=L(!1),i=He(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),N=te(Qe,{}),{inlineThemeDisabled:I,mergedClsPrefixRef:F,mergedRtlRef:h,mergedComponentPropsRef:T}=je(o),{mergedSizeRef:_}=Ge({},{defaultSize:"medium",mergedSize:t=>{var d,v;const{size:e}=o;if(e)return e;const{size:R}=N;if(R)return R;const{mergedSize:C}=t||{};if(C)return C.value;const $=(v=(d=T==null?void 0:T.value)===null||d===void 0?void 0:d.Button)===null||v===void 0?void 0:v.size;return $||"medium"}}),K=B(()=>o.focusable&&!o.disabled),ae=t=>{var d;K.value||t.preventDefault(),!o.nativeFocusBehavior&&(t.preventDefault(),!o.disabled&&K.value&&((d=P.value)===null||d===void 0||d.focus({preventScroll:!0})))},le=t=>{var d;if(!o.disabled&&!o.loading){const{onClick:v}=o;v&&Me(v,t),o.text||(d=y.value)===null||d===void 0||d.play()}},de=t=>{switch(t.key){case"Enter":if(!o.keyboard)return;f.value=!1}},ce=t=>{switch(t.key){case"Enter":if(!o.keyboard||o.loading){t.preventDefault();return}f.value=!0}},ue=()=>{f.value=!1},be=se("Button","-button",qe,Ee,o,F),fe=Oe("Button",h,F),U=B(()=>{const t=be.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:v},self:e}=t,{rippleDuration:R,opacityDisabled:C,fontWeight:$,fontWeightStrong:M}=e,p=_.value,{dashed:G,type:w,ghost:V,text:x,color:s,round:Y,circle:W,textColor:z,secondary:he,tertiary:X,quaternary:ve,strong:pe}=o,ge={"--n-font-weight":pe?M:$};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const H=w==="tertiary",Z=w==="default",n=H?"default":w;if(x){const l=z||s;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":l||e[r("textColorText",n)],"--n-text-color-hover":l?S(l):e[r("textColorTextHover",n)],"--n-text-color-pressed":l?O(l):e[r("textColorTextPressed",n)],"--n-text-color-focus":l?S(l):e[r("textColorTextHover",n)],"--n-text-color-disabled":l||e[r("textColorTextDisabled",n)]}}else if(V||G){const l=z||s;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":s||e[r("rippleColor",n)],"--n-text-color":l||e[r("textColorGhost",n)],"--n-text-color-hover":l?S(l):e[r("textColorGhostHover",n)],"--n-text-color-pressed":l?O(l):e[r("textColorGhostPressed",n)],"--n-text-color-focus":l?S(l):e[r("textColorGhostHover",n)],"--n-text-color-disabled":l||e[r("textColorGhostDisabled",n)]}}else if(he){const l=Z?e.textColor:H?e.textColorTertiary:e[r("color",n)],u=s||l,j=w!=="default"&&w!=="tertiary";a={"--n-color":j?E(u,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":j?E(u,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":j?E(u,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":j?E(u,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":u,"--n-text-color-hover":u,"--n-text-color-pressed":u,"--n-text-color-focus":u,"--n-text-color-disabled":u}}else if(X||ve){const l=Z?e.textColor:H?e.textColorTertiary:e[r("color",n)],u=s||l;X?(a["--n-color"]=e.colorTertiary,a["--n-color-hover"]=e.colorTertiaryHover,a["--n-color-pressed"]=e.colorTertiaryPressed,a["--n-color-focus"]=e.colorSecondaryHover,a["--n-color-disabled"]=e.colorTertiary):(a["--n-color"]=e.colorQuaternary,a["--n-color-hover"]=e.colorQuaternaryHover,a["--n-color-pressed"]=e.colorQuaternaryPressed,a["--n-color-focus"]=e.colorQuaternaryHover,a["--n-color-disabled"]=e.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=u,a["--n-text-color-hover"]=u,a["--n-text-color-pressed"]=u,a["--n-text-color-focus"]=u,a["--n-text-color-disabled"]=u}else a={"--n-color":s||e[r("color",n)],"--n-color-hover":s?S(s):e[r("colorHover",n)],"--n-color-pressed":s?O(s):e[r("colorPressed",n)],"--n-color-focus":s?S(s):e[r("colorFocus",n)],"--n-color-disabled":s||e[r("colorDisabled",n)],"--n-ripple-color":s||e[r("rippleColor",n)],"--n-text-color":z||(s?e.textColorPrimary:H?e.textColorTertiary:e[r("textColor",n)]),"--n-text-color-hover":z||(s?e.textColorHoverPrimary:e[r("textColorHover",n)]),"--n-text-color-pressed":z||(s?e.textColorPressedPrimary:e[r("textColorPressed",n)]),"--n-text-color-focus":z||(s?e.textColorFocusPrimary:e[r("textColorFocus",n)]),"--n-text-color-disabled":z||(s?e.textColorDisabledPrimary:e[r("textColorDisabled",n)])};let Q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};x?Q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Q={"--n-border":e[r("border",n)],"--n-border-hover":e[r("borderHover",n)],"--n-border-pressed":e[r("borderPressed",n)],"--n-border-focus":e[r("borderFocus",n)],"--n-border-disabled":e[r("borderDisabled",n)]};const{[r("height",p)]:q,[r("fontSize",p)]:me,[r("padding",p)]:ye,[r("paddingRound",p)]:xe,[r("iconSize",p)]:Ce,[r("borderRadius",p)]:we,[r("iconMargin",p)]:ze,waveOpacity:Se}=e,Be={"--n-width":W&&!x?q:"initial","--n-height":x?"initial":q,"--n-font-size":me,"--n-padding":W||x?"initial":Y?xe:ye,"--n-icon-size":Ce,"--n-icon-margin":ze,"--n-border-radius":x?"initial":W||Y?q:we};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":v,"--n-ripple-duration":R,"--n-opacity-disabled":C,"--n-wave-opacity":Se},ge),a),Q),Be)}),k=I?De("button",B(()=>{let t="";const{dashed:d,type:v,ghost:e,text:R,color:C,round:$,circle:M,textColor:p,secondary:G,tertiary:w,quaternary:V,strong:x}=o;d&&(t+="a"),e&&(t+="b"),R&&(t+="c"),$&&(t+="d"),M&&(t+="e"),G&&(t+="f"),w&&(t+="g"),V&&(t+="h"),x&&(t+="i"),C&&(t+=`j${oe(C)}`),p&&(t+=`k${oe(p)}`);const{value:s}=_;return t+=`l${s[0]}`,t+=`m${v[0]}`,t}),U,o):void 0;return{selfElRef:P,waveElRef:y,mergedClsPrefix:F,mergedFocusable:K,mergedSize:_,showBorder:i,enterPressed:f,rtlEnabled:fe,handleMousedown:ae,handleKeydown:ce,handleBlur:ue,handleKeyup:de,handleClick:le,customColorCssVars:B(()=>{const{color:t}=o;if(!t)return null;const d=S(t);return{"--n-border-color":t,"--n-border-color-hover":d,"--n-border-color-pressed":O(t),"--n-border-color-focus":d,"--n-border-color-disabled":t}}),cssVars:I?void 0:U,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:o,tag:P,onRender:y}=this;y==null||y();const f=ee(this.$slots.default,i=>i&&m("span",{class:`${o}-button__content`},i));return m(P,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&f,m($e,{width:!0},{default:()=>ee(this.$slots.icon,i=>(this.loading||this.renderIcon||i)&&m("span",{class:`${o}-button__icon`,style:{margin:Ke(this.$slots.default)?"0":""}},m(Fe,null,{default:()=>this.loading?m(Ie,Object.assign({clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20},this.spinProps)):m("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():i)})))}),this.iconPlacement==="left"&&f,this.text?null:m(_e,{ref:"waveElRef",clsPrefix:o}),this.showBorder?m("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?m("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});export{Ze as B,re as f,We as i,Ge as u};
