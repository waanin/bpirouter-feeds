import{c as a,a as U,F as y,G as E,H,I as q,d as ee,h as u,J as ce,u as te,K as pe,b as se,L as ue,M as fe,N as ve,O as J,P as me,Q,R as O,S as he,T as X,U as ge,V as we,e as ze,f as W,W as Y,g as b,X as Z,i as xe,j as ye,k as be,l as V,m as w,p as _,q as t,n as l,v as h,Y as K,Z as L,y as I,x as B,B as R,A as j,_ as M,z as ke,C as Se,D as $,E as N,r as Ce}from"./index-DNEJFYbL.js";import{u as _e,F as T,a as Pe}from"./FullScreenOverlay-CJgc5-m-.js";import{_ as $e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as Ne}from"./get-slot-Bk_rJcZu.js";import{N as Ie}from"./Alert-Zm9UQ79R.js";import{N as Re}from"./Checkbox-Dcd0_Kvg.js";import{F as Te,N as Be}from"./Select-BQT2jx5F.js";import{N as F}from"./Input-0e5g600C.js";import"./format-length-CRNz7Xta.js";const Fe=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[U("disabled","cursor: not-allowed"),U("clickable",`
 cursor: pointer;
 `),y("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),a("step-content","flex: 1;",[a("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[E("title",`
 white-space: nowrap;
 flex: 0;
 `)]),E("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[a("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[E("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[H()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[H()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[H()])])]),U("vertical","flex-direction: column;",[q("show-description",[y(">",[a("step","padding-bottom: 8px;")])]),y(">",[a("step","margin-bottom: 16px;",[y("&:last-child","margin-bottom: 0;"),y(">",[a("step-indicator",[y(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[E("description","margin-top: 8px;")])])])])]),U("content-bottom",[q("vertical",[y(">",[a("step","flex-direction: column",[y(">",[a("step-line","display: flex;",[y(">",[a("step-splitor",`
 margin-top: 0;
 align-self: center;
 `)])])]),y(">",[a("step-content","margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);",[a("step-content-header",`
 margin-left: 0;
 `),a("step-content__description",`
 margin-left: 0;
 `)])])])])])])]);function Ue(e,v){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=v+1,e)}function Ee(e){return e.map((v,f)=>Ue(v,f))}const We=Object.assign(Object.assign({},se.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,contentPlacement:{type:String,default:"right"},"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),ie=fe("n-steps"),je=ee({name:"Steps",props:We,slots:Object,setup(e,{slots:v}){const{mergedClsPrefixRef:f,mergedRtlRef:m}=te(e),k=pe("Steps",m,f),i=se("Steps","-steps",Fe,ue,e,f);return ve(ie,{props:e,mergedThemeRef:i,mergedClsPrefixRef:f,stepsSlots:v}),{mergedClsPrefix:f,rtlEnabled:k}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`,this.contentPlacement==="bottom"&&`${e}-steps--content-bottom`]},Ee(ce(Ne(this))))}}),Ae={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},G=ee({name:"Step",props:Ae,slots:Object,setup(e){const v=ge(ie,null);v||we("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:f}=te(),{props:m,mergedThemeRef:k,mergedClsPrefixRef:i,stepsSlots:P}=v,d=Y(m,"vertical"),z=Y(m,"contentPlacement"),x=W(()=>{const{status:o}=e;if(o)return o;{const{internalIndex:p}=e,{current:S}=m;if(S===void 0)return"process";if(p<S)return"finish";if(p===S)return m.status||"process";if(p>S)return"wait"}return"process"}),c=W(()=>{const{value:o}=x,{size:p}=m,{common:{cubicBezierEaseInOut:S},self:{stepHeaderFontWeight:A,[b("stepHeaderFontSize",p)]:D,[b("indicatorIndexFontSize",p)]:C,[b("indicatorSize",p)]:s,[b("indicatorIconSize",p)]:n,[b("indicatorTextColor",o)]:ne,[b("indicatorBorderColor",o)]:re,[b("headerTextColor",o)]:oe,[b("splitorColor",o)]:ae,[b("indicatorColor",o)]:le,[b("descriptionTextColor",o)]:de}}=k.value;return{"--n-bezier":S,"--n-description-text-color":de,"--n-header-text-color":oe,"--n-indicator-border-color":re,"--n-indicator-color":le,"--n-indicator-icon-size":n,"--n-indicator-index-font-size":C,"--n-indicator-size":s,"--n-indicator-text-color":ne,"--n-splitor-color":ae,"--n-step-header-font-size":D,"--n-step-header-font-weight":A}}),g=f?ze("step",W(()=>{const{value:o}=x,{size:p}=m;return`${o[0]}${p[0]}`}),c,m):void 0,r=W(()=>{if(e.disabled)return;const{onUpdateCurrent:o,"onUpdate:current":p}=m;return o||p?()=>{o&&Z(o,e.internalIndex),p&&Z(p,e.internalIndex)}:void 0});return{stepsSlots:P,mergedClsPrefix:i,vertical:d,mergedStatus:x,handleStepClick:r,cssVars:f?void 0:c,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,contentPlacement:z}},render(){const{mergedClsPrefix:e,onRender:v,handleStepClick:f,disabled:m,contentPlacement:k,vertical:i}=this,P=J(this.$slots.default,g=>{const r=g||this.description;return r?u("div",{class:`${e}-step-content__description`},r):null}),d=u("div",{class:`${e}-step-splitor`}),z=u("div",{class:`${e}-step-indicator`,key:k},u("div",{class:`${e}-step-indicator-slot`},u(me,null,{default:()=>J(this.$slots.icon,g=>{const{mergedStatus:r,stepsSlots:o}=this;return r==="finish"||r==="error"?r==="finish"?u(Q,{clsPrefix:e,key:"finish"},{default:()=>O(o["finish-icon"],()=>[u(Te,null)])}):r==="error"?u(Q,{clsPrefix:e,key:"error"},{default:()=>O(o["error-icon"],()=>[u(he,null)])}):null:g||u("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),i?d:null),x=u("div",{class:`${e}-step-content`},u("div",{class:`${e}-step-content-header`},u("div",{class:`${e}-step-content-header__title`},O(this.$slots.title,()=>[this.title])),!i&&k==="right"?d:null),P);let c;return!i&&k==="bottom"?c=u(X,null,u("div",{class:`${e}-step-line`},z,d),x):c=u(X,null,z,x),v==null||v(),u("div",{class:[`${e}-step`,m&&`${e}-step--disabled`,!m&&f&&`${e}-step--clickable`,this.themeClass,P&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:f},c)}}),De={class:"wizard-layout"},He={class:ke(["wizard-card","fade-in"])},Oe={style:{"text-align":"center","margin-bottom":"24px"}},Ve={style:{"font-size":"22px",color:"var(--text-primary)","margin-bottom":"8px"}},Ke={style:{color:"var(--text-secondary)","font-size":"var(--text-sm)"}},Le={class:"step-content"},Me={key:0,style:{"margin-top":"16px"},class:"fade-in"},Ge={class:"step-content"},qe={style:{"font-size":"var(--text-xs)",color:"var(--text-muted)","margin-top":"8px"}},Je={class:"step-content"},Qe={key:0,class:"fade-in"},Xe={class:"wizard-footer"},Ye={class:"wizard-lang"},Ze={__name:"Wizard",setup(e){const v=Se(),f=_e(),m=xe(),k=ye(),{t:i,locale:P}=be(),d=j(1),z=j(!1),x=j(0),c=M({proto:"dhcp",username:"",password:""}),g=[{label:()=>i("wizard.wanDHCP"),value:"dhcp"},{label:()=>i("wizard.wanPPPoE"),value:"pppoe"}],r=M({ssid:"BpiRouter",key:""}),o=j(!0),p=M({password:""});function S(C){P.value=C,k.setLocale(C)}function A(){if(d.value===2&&r.ssid&&r.key&&r.key.length<8){f.error(i("wizard.errWifi"));return}d.value++}async function D(){var s;const C=o.value&&r.key&&r.key.length>=8?r.key:p.password;if(!C||C.length<8){f.error(i("wizard.errAdmin"));return}z.value=!0,x.value=10;try{const n=await Ce("setup.apply",{wan_proto:c.proto,wan_username:c.username,wan_password:c.password,wifi_ssid:r.ssid||"",wifi_key:r.key||"",admin_password:C});x.value=100,n!=null&&n.token&&m.setToken(n.token),f.success(i("wizard.success")),setTimeout(()=>{z.value=!1,v.push({name:"home"})},2e3)}catch(n){f.error(n.message),z.value=!1,(s=n.message)!=null&&s.includes("already completed")&&setTimeout(()=>v.push({name:"login"}),1500)}}return(C,s)=>($(),V("div",De,[w("div",He,[w("div",Oe,[w("h2",Ve,_(t(i)("wizard.title")),1),w("p",Ke,_(t(i)("wizard.subtitle")),1)]),l(t(je),{current:d.value,status:"process",style:{"margin-bottom":"32px",padding:"0 10px"}},{default:h(()=>[l(t(G),{title:t(i)("wizard.step1")},null,8,["title"]),l(t(G),{title:t(i)("wizard.step2")},null,8,["title"]),l(t(G),{title:t(i)("wizard.step3")},null,8,["title"])]),_:1},8,["current"]),K(w("div",Le,[l(T,{label:t(i)("wizard.wanLabel")},{default:h(()=>[l(t(Be),{value:c.proto,"onUpdate:value":s[0]||(s[0]=n=>c.proto=n),options:g,size:"large"},null,8,["value"])]),_:1},8,["label"]),c.proto==="pppoe"?($(),V("div",Me,[l(T,{label:t(i)("wizard.wanUsername")},{default:h(()=>[l(t(F),{value:c.username,"onUpdate:value":s[1]||(s[1]=n=>c.username=n),size:"large"},null,8,["value"])]),_:1},8,["label"]),l(T,{label:t(i)("wizard.wanPassword")},{default:h(()=>[l(t(F),{value:c.password,"onUpdate:value":s[2]||(s[2]=n=>c.password=n),type:"password","show-password-on":"click",size:"large"},null,8,["value"])]),_:1},8,["label"])])):I("",!0),c.proto==="dhcp"?($(),B(t(Ie),{key:1,type:"info","show-icon":!1,style:{"margin-top":"20px",background:"var(--brand-subtle)",color:"var(--brand-text)",border:"none"}},{default:h(()=>[N(_(t(i)("wizard.wanDHCPHint")),1)]),_:1})):I("",!0)],512),[[L,d.value===1]]),K(w("div",Ge,[l(T,{label:t(i)("wizard.wifiSSID")},{default:h(()=>[l(t(F),{value:r.ssid,"onUpdate:value":s[3]||(s[3]=n=>r.ssid=n),size:"large",placeholder:t(i)("wizard.wifiSSIDPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),l(T,{label:t(i)("wizard.wifiKey")},{default:h(()=>[l(t(F),{value:r.key,"onUpdate:value":s[4]||(s[4]=n=>r.key=n),type:"password","show-password-on":"click",size:"large",placeholder:t(i)("wizard.wifiKeyPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"]),w("p",qe,_(t(i)("wizard.wifiHint")),1)],512),[[L,d.value===2]]),K(w("div",Je,[l(t(Re),{checked:o.value,"onUpdate:checked":s[5]||(s[5]=n=>o.value=n),style:{"margin-bottom":"20px","font-size":"15px"},disabled:!r.key||r.key.length<8},{default:h(()=>[N(_(t(i)("wizard.syncPassword")),1)]),_:1},8,["checked","disabled"]),!o.value||!r.key||r.key.length<8?($(),V("div",Qe,[l(T,{label:t(i)("wizard.adminPassword")},{default:h(()=>[l(t(F),{value:p.password,"onUpdate:value":s[6]||(s[6]=n=>p.password=n),type:"password","show-password-on":"click",size:"large"},null,8,["value"])]),_:1},8,["label"])])):I("",!0)],512),[[L,d.value===3]]),w("div",Xe,[d.value>1?($(),B(t(R),{key:0,onClick:s[7]||(s[7]=n=>d.value--),size:"large",style:{"min-width":"100px"}},{default:h(()=>[N(_(t(i)("wizard.prev")),1)]),_:1})):I("",!0),s[11]||(s[11]=w("div",{style:{flex:"1"}},null,-1)),d.value===2?($(),B(t(R),{key:1,text:"",type:"default",size:"small",onClick:s[8]||(s[8]=n=>d.value++),style:{"margin-right":"8px"}},{default:h(()=>[N(_(t(i)("wizard.skipWifi")),1)]),_:1})):I("",!0),d.value<3?($(),B(t(R),{key:2,type:"primary",onClick:A,size:"large",style:{"min-width":"120px"}},{default:h(()=>[N(_(t(i)("wizard.next")),1)]),_:1})):I("",!0),d.value===3?($(),B(t(R),{key:3,type:"primary",loading:z.value,onClick:D,size:"large",style:{"min-width":"140px"}},{default:h(()=>[N(_(t(i)("wizard.finish")),1)]),_:1},8,["loading"])):I("",!0)])]),w("div",Ye,[l(t(R),{text:"",size:"small",type:t(P)==="zh"?"primary":"default",onClick:s[9]||(s[9]=n=>S("zh"))},{default:h(()=>[...s[12]||(s[12]=[N("中文",-1)])]),_:1},8,["type"]),s[14]||(s[14]=w("span",{style:{color:"var(--text-muted)",margin:"0 4px"}},"|",-1)),l(t(R),{text:"",size:"small",type:t(P)==="en"?"primary":"default",onClick:s[10]||(s[10]=n=>S("en"))},{default:h(()=>[...s[13]||(s[13]=[N("EN",-1)])]),_:1},8,["type"])]),l(Pe,{show:z.value,message:t(i)("wizard.applying"),progress:x.value},null,8,["show","message","progress"])]))}},dt=$e(Ze,[["__scopeId","data-v-d167cf00"]]);export{dt as default};
