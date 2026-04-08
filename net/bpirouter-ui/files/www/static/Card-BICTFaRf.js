import{d as e,a,bt as Z,b as i,l as d,aq as ee,ar as oe,e as re,h as s,u as ne,f as $,ad as te,s as ae,m as z,bo as de,bu as le,x as S}from"./index-DPXSnRha.js";import{r as v,c as ie,m as f,S as se,g as ce}from"./Scrollbar-CZQ7j8JC.js";const y=a("card-content",`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),be=e([a("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Z({background:"var(--n-color-modal)"}),i("hoverable",[e("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[e(">",[a("card-content",`
 padding-top: var(--n-padding-bottom);
 `),d("content-scrollbar",[e(">",[a("scrollbar-container",[e(">",[a("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),i("content-soft-segmented",[e(">",[a("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),d("content-scrollbar",[e(">",[a("scrollbar-container",[e(">",[a("card-content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),i("footer-segmented",[e(">",[d("footer",`
 padding-top: var(--n-padding-bottom);
 `)])]),i("footer-soft-segmented",[e(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),e(">",[a("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),y,a("card-content",[e("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),d("content-scrollbar",`
 display: flex;
 flex-direction: column;
 `,[e(">",[a("scrollbar-container",[e(">",[y])])]),e("&:first-child >",[a("scrollbar-container",[e(">",[a("card-content",`
 padding-top: var(--n-padding-bottom);
 `)])])])]),d("footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[e("&:first-child",`
 padding-top: var(--n-padding-bottom);
 `)]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),a("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[e("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[e("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[e(">",[d("action",[e("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),i("content-segmented, content-soft-segmented",[e(">",[a("card-content",`
 transition: border-color 0.3s var(--n-bezier);
 `,[e("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)]),d("content-scrollbar",`
 transition: border-color 0.3s var(--n-bezier);
 `,[e("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),i("footer-segmented, footer-soft-segmented",[e(">",[d("footer",`
 transition: border-color 0.3s var(--n-bezier);
 `,[e("&:not(:first-child)",`
 border-top: 1px solid var(--n-border-color);
 `)])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ee(a("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),oe(a("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ge={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},ve=Object.assign(Object.assign({},$.props),ge),me=re({name:"Card",props:ve,slots:Object,setup(n){const u=()=>{const{onClose:t}=n;t&&ie(t)},{inlineThemeDisabled:h,mergedClsPrefixRef:r,mergedRtlRef:x,mergedComponentPropsRef:b}=ne(n),m=$("Card","-card",be,le,n,r),C=te("Card",x,r),c=z(()=>{var t,g;return n.size||((g=(t=b==null?void 0:b.value)===null||t===void 0?void 0:t.Card)===null||g===void 0?void 0:g.size)||"medium"}),l=z(()=>{const t=c.value,{self:{color:g,colorModal:p,colorTarget:k,textColor:w,titleTextColor:E,titleFontWeight:B,borderColor:R,actionColor:_,borderRadius:F,lineHeight:P,closeIconColor:O,closeIconColorHover:j,closeIconColorPressed:T,closeColorHover:M,closeColorPressed:I,closeBorderRadius:V,closeIconSize:H,closeSize:N,boxShadow:L,colorPopover:W,colorEmbedded:q,colorEmbeddedModal:A,colorEmbeddedPopover:D,[S("padding",t)]:K,[S("fontSize",t)]:G,[S("titleFontSize",t)]:J},common:{cubicBezierEaseInOut:Q}}=m.value,{top:U,left:X,bottom:Y}=ce(K);return{"--n-bezier":Q,"--n-border-radius":F,"--n-color":g,"--n-color-modal":p,"--n-color-popover":W,"--n-color-embedded":q,"--n-color-embedded-modal":A,"--n-color-embedded-popover":D,"--n-color-target":k,"--n-text-color":w,"--n-line-height":P,"--n-action-color":_,"--n-title-text-color":E,"--n-title-font-weight":B,"--n-close-icon-color":O,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":T,"--n-close-color-hover":M,"--n-close-color-pressed":I,"--n-border-color":R,"--n-box-shadow":L,"--n-padding-top":U,"--n-padding-bottom":Y,"--n-padding-left":X,"--n-font-size":G,"--n-title-font-size":J,"--n-close-size":N,"--n-close-icon-size":H,"--n-close-border-radius":V}}),o=h?ae("card",z(()=>c.value[0]),l,n):void 0;return{rtlEnabled:C,mergedClsPrefix:r,mergedTheme:m,handleCloseClick:u,cssVars:h?void 0:l,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{segmented:n,bordered:u,hoverable:h,mergedClsPrefix:r,rtlEnabled:x,onRender:b,embedded:m,tag:C,$slots:c}=this;return b==null||b(),s(C,{class:[`${r}-card`,this.themeClass,m&&`${r}-card--embedded`,{[`${r}-card--rtl`]:x,[`${r}-card--content-scrollable`]:this.contentScrollable,[`${r}-card--content${typeof n!="boolean"&&n.content==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.content,[`${r}-card--footer${typeof n!="boolean"&&n.footer==="soft"?"-soft":""}-segmented`]:n===!0||n!==!1&&n.footer,[`${r}-card--action-segmented`]:n===!0||n!==!1&&n.action,[`${r}-card--bordered`]:u,[`${r}-card--hoverable`]:h}],style:this.cssVars,role:this.role},v(c.cover,l=>{const o=this.cover?f([this.cover()]):l;return o&&s("div",{class:`${r}-card-cover`,role:"none"},o)}),v(c.header,l=>{const{title:o}=this,t=o?f(typeof o=="function"?[o()]:[o]):l;return t||this.closable?s("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${r}-card-header__main`,role:"heading"},t),v(c["header-extra"],g=>{const p=this.headerExtra?f([this.headerExtra()]):g;return p&&s("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},p)}),this.closable&&s(de,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),v(c.default,l=>{const{content:o}=this,t=o?f(typeof o=="function"?[o()]:[o]):l;return t?this.contentScrollable?s(se,{class:`${r}-card__content-scrollbar`,contentClass:[`${r}-card-content`,this.contentClass],contentStyle:this.contentStyle},t):s("div",{class:[`${r}-card-content`,this.contentClass],style:this.contentStyle,role:"none"},t):null}),v(c.footer,l=>{const o=this.footer?f([this.footer()]):l;return o&&s("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},o)}),v(c.action,l=>{const o=this.action?f([this.action()]):l;return o&&s("div",{class:`${r}-card__action`,role:"none"},o)}))}});export{me as N};
