import{m as C,o as Ee,r as G,a4 as we,c as We,e as A,h as o,i as je,g as Me,a0 as ge,u as ae,X as U,q as Ce,a5 as ve,p as Oe,t as he,S as Re,a6 as ze,a7 as Ne,a8 as ke,a9 as Be,aa as Te,d as Q,a as w,b as j,f as ee,ab as Ae,s as Pe,x as me,l as J,ac as qe,ad as Ve,a1 as Fe,y as O,B as g,C as m,E as p,M as Y,J as D,L as B,H as N,z as K,Y as te,ae as re,F as ie,G as se}from"./index-DPXSnRha.js";import{p as L,V as Le,r as Z}from"./Scrollbar-CZQ7j8JC.js";import{i as Xe,b as Ye}from"./utils-Bhs2YIuv.js";import{i as He}from"./is-browser-DqcmxZSF.js";import{f as Ue}from"./flatten-DMy8cLVD.js";import{g as Qe}from"./get-slot-Bk_rJcZu.js";import{N as T}from"./Card-BICTFaRf.js";import{f as q}from"./format-length-B-p6aW7q.js";import{N as ye}from"./Badge-DT3K7FeX.js";import{N as be}from"./Empty-DCYFmJI2.js";import{N as Je,a as M}from"./DescriptionsItem-D7qTmXKe.js";import{N as W}from"./text-CFEgkAMv.js";import{N as le}from"./Tag-CZQ_QBiY.js";import"./fade-in-scale-up.cssr-Czm_2hDQ.js";import"./attribute-Cz32yFEB.js";import"./Wave-Cu-0WI9g.js";import"./use-locale-CQCl7t1M.js";function Ke(e){if(typeof e=="number")return{"":e.toString()};const s={};return e.split(/ +/).forEach(u=>{if(u==="")return;const[c,a]=u.split(":");a===void 0?s[""]=c:s[c]=a}),s}function V(e,s){var u;if(e==null)return;const c=Ke(e);if(s===void 0)return c[""];if(typeof s=="string")return(u=c[s])!==null&&u!==void 0?u:c[""];if(Array.isArray(s)){for(let a=s.length-1;a>=0;--a){const l=s[a];if(l in c)return c[l]}return c[""]}else{let a,l=-1;return Object.keys(c).forEach(r=>{const n=Number(r);!Number.isNaN(n)&&s>=n&&n>=l&&(l=n,a=c[r])}),a}}const Ze={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function et(e){return`(min-width: ${e}px)`}const H={};function tt(e=Ze){if(!Xe)return C(()=>[]);if(typeof window.matchMedia!="function")return C(()=>[]);const s=G({}),u=Object.keys(e),c=(a,l)=>{a.matches?s.value[l]=!0:s.value[l]=!1};return u.forEach(a=>{const l=e[a];let r,n;H[l]===void 0?(r=window.matchMedia(et(l)),r.addEventListener?r.addEventListener("change",v=>{n.forEach(y=>{y(v,a)})}):r.addListener&&r.addListener(v=>{n.forEach(y=>{y(v,a)})}),n=new Set,H[l]={mql:r,cbs:n}):(r=H[l].mql,n=H[l].cbs),n.add(c),r.matches&&n.forEach(v=>{v(r,a)})}),Ee(()=>{u.forEach(a=>{const{cbs:l}=H[e[a]];l.has(c)&&l.delete(c)})}),C(()=>{const{value:a}=s;return u.filter(l=>a[l])})}function rt(e){var s;const u=(s=e.dirs)===null||s===void 0?void 0:s.find(({dir:c})=>c===we);return!!(u&&u.value===!1)}const xe=1,De=We("n-grid"),Ge=1,it={span:{type:[Number,String],default:Ge},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},F=A({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:it,setup(){const{isSsrRef:e,xGapRef:s,itemStyleRef:u,overflowRef:c,layoutShiftDisabledRef:a}=je(De),l=Me();return{overflow:c,itemStyle:u,layoutShiftDisabled:a,mergedXGap:C(()=>L(s.value||0)),deriveStyle:()=>{e.value;const{privateSpan:r=Ge,privateShow:n=!0,privateColStart:v=void 0,privateOffset:y=0}=l.vnode.props,{value:R}=s,z=L(R||0);return{display:n?"":"none",gridColumn:`${v??`span ${r}`} / span ${r}`,marginLeft:y?`calc((100% - (${r} - 1) * ${z}) / ${r} * ${y} + ${z} * ${y})`:""}}}},render(){var e,s;if(this.layoutShiftDisabled){const{span:u,offset:c,mergedXGap:a}=this;return o("div",{style:{gridColumn:`span ${u} / span ${u}`,marginLeft:c?`calc((100% - (${u} - 1) * ${a}) / ${u} * ${c} + ${a} * ${c})`:""}},this.$slots)}return o("div",{style:[this.itemStyle,this.deriveStyle()]},(s=(e=this.$slots).default)===null||s===void 0?void 0:s.call(e,{overflow:this.overflow}))}}),st={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ie=24,oe="__ssr__",lt={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Ie},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Se=A({name:"Grid",inheritAttrs:!1,props:lt,setup(e){const{mergedClsPrefixRef:s,mergedBreakpointsRef:u}=ae(e),c=/^\d+$/,a=G(void 0),l=tt((u==null?void 0:u.value)||st),r=U(()=>!!(e.itemResponsive||!c.test(e.cols.toString())||!c.test(e.xGap.toString())||!c.test(e.yGap.toString()))),n=C(()=>{if(r.value)return e.responsive==="self"?a.value:l.value}),v=U(()=>{var S;return(S=Number(V(e.cols.toString(),n.value)))!==null&&S!==void 0?S:Ie}),y=U(()=>V(e.xGap.toString(),n.value)),R=U(()=>V(e.yGap.toString(),n.value)),z=S=>{a.value=S.contentRect.width},h=S=>{Ye(z,S)},k=G(!1),x=C(()=>{if(e.responsive==="self")return h}),d=G(!1),P=G();return Ce(()=>{const{value:S}=P;S&&S.hasAttribute(oe)&&(S.removeAttribute(oe),d.value=!0)}),Oe(De,{layoutShiftDisabledRef:he(e,"layoutShiftDisabled"),isSsrRef:d,itemStyleRef:he(e,"itemStyle"),xGapRef:y,overflowRef:k}),{isSsr:!He,contentEl:P,mergedClsPrefix:s,style:C(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:L(e.xGap),rowGap:L(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${v.value}, minmax(0, 1fr))`,columnGap:L(y.value),rowGap:L(R.value)}),isResponsive:r,responsiveQuery:n,responsiveCols:v,handleResize:x,overflow:k}},render(){if(this.layoutShiftDisabled)return o("div",ge({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var s,u,c,a,l,r,n;this.overflow=!1;const v=Ue(Qe(this)),y=[],{collapsed:R,collapsedRows:z,responsiveCols:h,responsiveQuery:k}=this;v.forEach(t=>{var f,i,b,_,$;if(((f=t==null?void 0:t.type)===null||f===void 0?void 0:f.__GRID_ITEM__)!==!0)return;if(rt(t)){const E=ve(t);E.props?E.props.privateShow=!1:E.props={privateShow:!1},y.push({child:E,rawChildSpan:0});return}t.dirs=((i=t.dirs)===null||i===void 0?void 0:i.filter(({dir:E})=>E!==we))||null,((b=t.dirs)===null||b===void 0?void 0:b.length)===0&&(t.dirs=null);const I=ve(t),X=Number(($=V((_=I.props)===null||_===void 0?void 0:_.span,k))!==null&&$!==void 0?$:xe);X!==0&&y.push({child:I,rawChildSpan:X})});let x=0;const d=(s=y[y.length-1])===null||s===void 0?void 0:s.child;if(d!=null&&d.props){const t=(u=d.props)===null||u===void 0?void 0:u.suffix;t!==void 0&&t!==!1&&(x=Number((a=V((c=d.props)===null||c===void 0?void 0:c.span,k))!==null&&a!==void 0?a:xe),d.props.privateSpan=x,d.props.privateColStart=h+1-x,d.props.privateShow=(l=d.props.privateShow)!==null&&l!==void 0?l:!0)}let P=0,S=!1;for(const{child:t,rawChildSpan:f}of y){if(S&&(this.overflow=!0),!S){const i=Number((n=V((r=t.props)===null||r===void 0?void 0:r.offset,k))!==null&&n!==void 0?n:0),b=Math.min(f+i,h);if(t.props?(t.props.privateSpan=b,t.props.privateOffset=i):t.props={privateSpan:b,privateOffset:i},R){const _=P%h;b+_>h&&(P+=h-_),b+P+x>z*h?S=!0:P+=b}}S&&(t.props?t.props.privateShow!==!0&&(t.props.privateShow=!1):t.props={privateShow:!1})}return o("div",ge({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[oe]:this.isSsr||void 0},this.$attrs),y.map(({child:t})=>t))};return this.isResponsive&&this.responsive==="self"?o(Le,{onResize:this.handleResize},{default:e}):e()}}),ot={success:o(Be,null),error:o(ke,null),warning:o(Ne,null),info:o(ze,null)},nt=A({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:s}){const u=C(()=>{const l="gradient",{fillColor:r}=e;return typeof r=="object"?`${l}-${Te(JSON.stringify(r))}`:l});function c(l,r,n,v){const{gapDegree:y,viewBoxWidth:R,strokeWidth:z}=e,h=50,k=0,x=h,d=0,P=2*h,S=50+z/2,t=`M ${S},${S} m ${k},${x}
      a ${h},${h} 0 1 1 ${d},${-P}
      a ${h},${h} 0 1 1 ${-d},${P}`,f=Math.PI*2*h,i={stroke:v==="rail"?n:typeof e.fillColor=="object"?`url(#${u.value})`:n,strokeDasharray:`${Math.min(l,100)/100*(f-y)}px ${R*8}px`,strokeDashoffset:`-${y/2}px`,transformOrigin:r?"center":void 0,transform:r?`rotate(${r}deg)`:void 0};return{pathString:t,pathStyle:i}}const a=()=>{const l=typeof e.fillColor=="object",r=l?e.fillColor.stops[0]:"",n=l?e.fillColor.stops[1]:"";return l&&o("defs",null,o("linearGradient",{id:u.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},o("stop",{offset:"0%","stop-color":r}),o("stop",{offset:"100%","stop-color":n})))};return()=>{const{fillColor:l,railColor:r,strokeWidth:n,offsetDegree:v,status:y,percentage:R,showIndicator:z,indicatorTextColor:h,unit:k,gapOffsetDegree:x,clsPrefix:d}=e,{pathString:P,pathStyle:S}=c(100,0,r,"rail"),{pathString:t,pathStyle:f}=c(R,v,l,"fill"),i=100+n;return o("div",{class:`${d}-progress-content`,role:"none"},o("div",{class:`${d}-progress-graph`,"aria-hidden":!0},o("div",{class:`${d}-progress-graph-circle`,style:{transform:x?`rotate(${x}deg)`:void 0}},o("svg",{viewBox:`0 0 ${i} ${i}`},a(),o("g",null,o("path",{class:`${d}-progress-graph-circle-rail`,d:P,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:S})),o("g",null,o("path",{class:[`${d}-progress-graph-circle-fill`,R===0&&`${d}-progress-graph-circle-fill--empty`],d:t,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:f}))))),z?o("div",null,s.default?o("div",{class:`${d}-progress-custom-content`,role:"none"},s.default()):y!=="default"?o("div",{class:`${d}-progress-icon`,"aria-hidden":!0},o(Re,{clsPrefix:d},{default:()=>ot[y]})):o("div",{class:`${d}-progress-text`,style:{color:h},role:"none"},o("span",{class:`${d}-progress-text__percentage`},R),o("span",{class:`${d}-progress-text__unit`},k))):null)}}}),at={success:o(Be,null),error:o(ke,null),warning:o(Ne,null),info:o(ze,null)},ut=A({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:s}){const u=C(()=>q(e.height)),c=C(()=>{var r,n;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(r=e.fillColor)===null||r===void 0?void 0:r.stops[0]} , ${(n=e.fillColor)===null||n===void 0?void 0:n.stops[1]})`:e.fillColor}),a=C(()=>e.railBorderRadius!==void 0?q(e.railBorderRadius):e.height!==void 0?q(e.height,{c:.5}):""),l=C(()=>e.fillBorderRadius!==void 0?q(e.fillBorderRadius):e.railBorderRadius!==void 0?q(e.railBorderRadius):e.height!==void 0?q(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:r,railColor:n,railStyle:v,percentage:y,unit:R,indicatorTextColor:z,status:h,showIndicator:k,processing:x,clsPrefix:d}=e;return o("div",{class:`${d}-progress-content`,role:"none"},o("div",{class:`${d}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${d}-progress-graph-line`,{[`${d}-progress-graph-line--indicator-${r}`]:!0}]},o("div",{class:`${d}-progress-graph-line-rail`,style:[{backgroundColor:n,height:u.value,borderRadius:a.value},v]},o("div",{class:[`${d}-progress-graph-line-fill`,x&&`${d}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:c.value,height:u.value,lineHeight:u.value,borderRadius:l.value}},r==="inside"?o("div",{class:`${d}-progress-graph-line-indicator`,style:{color:z}},s.default?s.default():`${y}${R}`):null)))),k&&r==="outside"?o("div",null,s.default?o("div",{class:`${d}-progress-custom-content`,style:{color:z},role:"none"},s.default()):h==="default"?o("div",{role:"none",class:`${d}-progress-icon ${d}-progress-icon--as-text`,style:{color:z}},y,R):o("div",{class:`${d}-progress-icon`,"aria-hidden":!0},o(Re,{clsPrefix:d},{default:()=>at[h]}))):null)}}});function $e(e,s,u=100){return`m ${u/2} ${u/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ct=A({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:s}){const u=C(()=>e.percentage.map((l,r)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*r)-e.circleGap*r)*2}, ${e.viewBoxWidth*8}`)),c=(a,l)=>{const r=e.fillColor[l],n=typeof r=="object"?r.stops[0]:"",v=typeof r=="object"?r.stops[1]:"";return typeof e.fillColor[l]=="object"&&o("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},o("stop",{offset:"0%","stop-color":n}),o("stop",{offset:"100%","stop-color":v}))};return()=>{const{viewBoxWidth:a,strokeWidth:l,circleGap:r,showIndicator:n,fillColor:v,railColor:y,railStyle:R,percentage:z,clsPrefix:h}=e;return o("div",{class:`${h}-progress-content`,role:"none"},o("div",{class:`${h}-progress-graph`,"aria-hidden":!0},o("div",{class:`${h}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${a} ${a}`},o("defs",null,z.map((k,x)=>c(k,x))),z.map((k,x)=>o("g",{key:x},o("path",{class:`${h}-progress-graph-circle-rail`,d:$e(a/2-l/2*(1+2*x)-r*x,l,a),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:y[x]},R[x]]}),o("path",{class:[`${h}-progress-graph-circle-fill`,k===0&&`${h}-progress-graph-circle-fill--empty`],d:$e(a/2-l/2*(1+2*x)-r*x,l,a),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:u.value[x],strokeDashoffset:0,stroke:typeof v[x]=="object"?`url(#gradient-${x})`:v[x]}})))))),n&&s.default?o("div",null,o("div",{class:`${h}-progress-text`},s.default())):null)}}}),dt=Q([w("progress",{display:"inline-block"},[w("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),j("line",`
 width: 100%;
 display: block;
 `,[w("progress-content",`
 display: flex;
 align-items: center;
 `,[w("progress-graph",{flex:1})]),w("progress-custom-content",{marginLeft:"14px"}),w("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[j("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),j("circle, dashboard",{width:"120px"},[w("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),w("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),w("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),j("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[w("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),w("progress-content",{position:"relative"}),w("progress-graph",{position:"relative"},[w("progress-graph-circle",[Q("svg",{verticalAlign:"bottom"}),w("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[j("empty",{opacity:0})]),w("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),w("progress-graph-line",[j("indicator-inside",[w("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[w("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),w("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),j("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[w("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),w("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),w("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[w("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[j("processing",[Q("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),Q("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),ft=Object.assign(Object.assign({},ee.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),_e=A({name:"Progress",props:ft,setup(e){const s=C(()=>e.indicatorPlacement||e.indicatorPosition),u=C(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:c,inlineThemeDisabled:a}=ae(e),l=ee("Progress","-progress",dt,Ae,e,c),r=C(()=>{const{status:v}=e,{common:{cubicBezierEaseInOut:y},self:{fontSize:R,fontSizeCircle:z,railColor:h,railHeight:k,iconSizeCircle:x,iconSizeLine:d,textColorCircle:P,textColorLineInner:S,textColorLineOuter:t,lineBgProcessing:f,fontWeightCircle:i,[me("iconColor",v)]:b,[me("fillColor",v)]:_}}=l.value;return{"--n-bezier":y,"--n-fill-color":_,"--n-font-size":R,"--n-font-size-circle":z,"--n-font-weight-circle":i,"--n-icon-color":b,"--n-icon-size-circle":x,"--n-icon-size-line":d,"--n-line-bg-processing":f,"--n-rail-color":h,"--n-rail-height":k,"--n-text-color-circle":P,"--n-text-color-line-inner":S,"--n-text-color-line-outer":t}}),n=a?Pe("progress",C(()=>e.status[0]),r,e):void 0;return{mergedClsPrefix:c,mergedIndicatorPlacement:s,gapDeg:u,cssVars:a?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{type:e,cssVars:s,indicatorTextColor:u,showIndicator:c,status:a,railColor:l,railStyle:r,color:n,percentage:v,viewBoxWidth:y,strokeWidth:R,mergedIndicatorPlacement:z,unit:h,borderRadius:k,fillBorderRadius:x,height:d,processing:P,circleGap:S,mergedClsPrefix:t,gapDeg:f,gapOffsetDegree:i,themeClass:b,$slots:_,onRender:$}=this;return $==null||$(),o("div",{class:[b,`${t}-progress`,`${t}-progress--${e}`,`${t}-progress--${a}`],style:s,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":v,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(nt,{clsPrefix:t,status:a,showIndicator:c,indicatorTextColor:u,railColor:l,fillColor:n,railStyle:r,offsetDegree:this.offsetDegree,percentage:v,viewBoxWidth:y,strokeWidth:R,gapDegree:f===void 0?e==="dashboard"?75:0:f,gapOffsetDegree:i,unit:h},_):e==="line"?o(ut,{clsPrefix:t,status:a,showIndicator:c,indicatorTextColor:u,railColor:l,fillColor:n,railStyle:r,percentage:v,processing:P,indicatorPlacement:z,unit:h,fillBorderRadius:x,railBorderRadius:k,height:d},_):e==="multiple-circle"?o(ct,{clsPrefix:t,strokeWidth:R,railColor:l,fillColor:n,railStyle:r,viewBoxWidth:y,percentage:v,showIndicator:c,circleGap:S},_):null)}}),pt=w("statistic",[J("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),w("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[J("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[w("icon",{verticalAlign:"-0.125em"})]),J("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),J("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[w("icon",{verticalAlign:"-0.125em"})])])]),gt=Object.assign(Object.assign({},ee.props),{tabularNums:Boolean,label:String,value:[String,Number]}),ne=A({name:"Statistic",props:gt,slots:Object,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:u,mergedRtlRef:c}=ae(e),a=ee("Statistic","-statistic",pt,qe,e,s),l=Ve("Statistic",c,s),r=C(()=>{const{self:{labelFontWeight:v,valueFontSize:y,valueFontWeight:R,valuePrefixTextColor:z,labelTextColor:h,valueSuffixTextColor:k,valueTextColor:x,labelFontSize:d},common:{cubicBezierEaseInOut:P}}=a.value;return{"--n-bezier":P,"--n-label-font-size":d,"--n-label-font-weight":v,"--n-label-text-color":h,"--n-value-font-weight":R,"--n-value-font-size":y,"--n-value-prefix-text-color":z,"--n-value-suffix-text-color":k,"--n-value-text-color":x}}),n=u?Pe("statistic",void 0,r,e):void 0;return{rtlEnabled:l,mergedClsPrefix:s,cssVars:u?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:s,$slots:{default:u,label:c,prefix:a,suffix:l}}=this;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{class:[`${s}-statistic`,this.themeClass,this.rtlEnabled&&`${s}-statistic--rtl`],style:this.cssVars},Z(c,r=>o("div",{class:`${s}-statistic__label`},this.label||r)),o("div",{class:`${s}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},Z(a,r=>r&&o("span",{class:`${s}-statistic-value__prefix`},r)),this.value!==void 0?o("span",{class:`${s}-statistic-value__content`},this.value):Z(u,r=>r&&o("span",{class:`${s}-statistic-value__content`},r)),Z(l,r=>r&&o("span",{class:`${s}-statistic-value__suffix`},r))))}}),vt={class:"fade-in"},ht={style:{"text-align":"center",padding:"8px 0"}},mt={style:{"font-size":"16px","font-weight":"600","margin-top":"8px"}},yt={style:{display:"flex","align-items":"center",gap:"8px"}},bt={style:{display:"flex","align-items":"center",gap:"8px","margin-bottom":"4px"}},jt={__name:"Dashboard",setup(e){const s=G(null),u=G(null),c=G(null),a=G(null),l=G(null);let r=null;const n=C(()=>{var f,i;const t=((i=(f=u.value)==null?void 0:f.cpu)==null?void 0:i.usage_percent)||0;return t>80?"#ef4444":t>50?"#f59e0b":"#10b981"}),v=C(()=>{var f;const t=(f=u.value)==null?void 0:f.memory;return t!=null&&t.total_kb?Math.round(t.used_kb/t.total_kb*100):0}),y=C(()=>{var t,f;return(f=(t=c.value)==null?void 0:t.interfaces)==null?void 0:f.some(i=>i.up)}),R=C(()=>{var t,f,i;return((i=(f=(t=c.value)==null?void 0:t.interfaces)==null?void 0:f.find(b=>b.up))==null?void 0:i.ipaddr)||""}),z=C(()=>{var t,f,i;return((i=(f=(t=c.value)==null?void 0:t.interfaces)==null?void 0:f.find(b=>b.up))==null?void 0:i.proto)||""}),h=C(()=>{var t,f,i;return((i=(f=(t=c.value)==null?void 0:t.interfaces)==null?void 0:f.find(b=>b.up))==null?void 0:i.uptime)||0}),k=C(()=>{var t,f;return((f=(t=l.value)==null?void 0:t.clients)==null?void 0:f.filter(i=>i.online).length)||0}),x=C(()=>{var f,i;let t=0;return(i=(f=a.value)==null?void 0:f.radios)==null||i.forEach(b=>{var _;return(_=b.ssids)==null?void 0:_.forEach($=>t+=$.client_count||0)}),t});function d(t){return t?t>1048576?(t/1048576).toFixed(1)+" GB":t>1024?(t/1024).toFixed(0)+" MB":t+" KB":"0"}function P(t){if(!t)return"--";const f=Math.floor(t/86400),i=Math.floor(t%86400/3600),b=Math.floor(t%3600/60);return f>0?`${f}d ${i}h ${b}m`:i>0?`${i}h ${b}m`:`${b}m`}async function S(){const t=await Promise.allSettled([Y("system.get_info"),Y("system.get_resources"),Y("network.get_status"),Y("wireless.get_status"),Y("clients.get_list")]);t[0].status==="fulfilled"&&(s.value=t[0].value),t[1].status==="fulfilled"&&(u.value=t[1].value),t[2].status==="fulfilled"&&(c.value=t[2].value),t[3].status==="fulfilled"&&(a.value=t[3].value),t[4].status==="fulfilled"&&(l.value=t[4].value)}return Ce(()=>{S(),r=setInterval(S,5e3)}),Fe(()=>clearInterval(r)),(t,f)=>(D(),O("div",vt,[g(p(Se),{cols:4,"x-gap":14,"y-gap":14,responsive:"screen","item-responsive":!0},{default:m(()=>[g(p(F),{span:"4 m:2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"CPU"},{default:m(()=>{var i,b,_,$,I;return[g(p(ne),{value:((_=(b=(i=u.value)==null?void 0:i.cpu)==null?void 0:b.usage_percent)==null?void 0:_.toFixed(1))||"0",style:{"text-align":"center"}},{suffix:m(()=>[...f[0]||(f[0]=[B("%",-1)])]),_:1},8,["value"]),g(p(_e),{type:"line",percentage:((I=($=u.value)==null?void 0:$.cpu)==null?void 0:I.usage_percent)||0,"show-indicator":!1,color:n.value,style:{margin:"8px 0"}},null,8,["percentage","color"]),g(p(W),{depth:"3",style:{"font-size":"12px"}},{default:m(()=>{var X,E,ue,ce,de,fe,pe;return[B(N(((ue=(E=(X=u.value)==null?void 0:X.cpu)==null?void 0:E.temperature_celsius)==null?void 0:ue.toFixed(0))||"--")+"°C · Load "+N(((pe=(fe=(de=(ce=u.value)==null?void 0:ce.cpu)==null?void 0:de.load_avg)==null?void 0:fe[0])==null?void 0:pe.toFixed(2))||"0.00"),1)]}),_:1})]}),_:1})]),_:1}),g(p(F),{span:"4 m:2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"Memory"},{default:m(()=>[g(p(ne),{value:v.value,style:{"text-align":"center"}},{suffix:m(()=>[...f[1]||(f[1]=[B("%",-1)])]),_:1},8,["value"]),g(p(_e),{type:"line",percentage:v.value,"show-indicator":!1,color:v.value>80?"#ef4444":v.value>50?"#f59e0b":"#3b82f6",style:{margin:"8px 0"}},null,8,["percentage","color"]),g(p(W),{depth:"3",style:{"font-size":"12px"}},{default:m(()=>{var i,b,_,$;return[B(N(d((b=(i=u.value)==null?void 0:i.memory)==null?void 0:b.used_kb))+" / "+N(d(($=(_=u.value)==null?void 0:_.memory)==null?void 0:$.total_kb)),1)]}),_:1})]),_:1})]),_:1}),g(p(F),{span:"4 m:2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"WAN"},{default:m(()=>[K("div",ht,[g(p(le),{type:y.value?"success":"error",round:""},{default:m(()=>[B(N(y.value?"Connected":"Disconnected"),1)]),_:1},8,["type"]),K("div",mt,N(R.value||"--"),1)]),g(p(W),{depth:"3",style:{"font-size":"12px"}},{default:m(()=>[B(N(z.value)+" "+N(h.value?"· "+P(h.value):""),1)]),_:1})]),_:1})]),_:1}),g(p(F),{span:"4 m:2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"Clients"},{default:m(()=>{var i;return[g(p(ne),{value:((i=l.value)==null?void 0:i.total)||0,style:{"text-align":"center"}},{suffix:m(()=>[...f[2]||(f[2]=[B("devices",-1)])]),_:1},8,["value"]),g(p(W),{depth:"3",style:{"font-size":"12px","margin-top":"8px",display:"block","text-align":"center"}},{default:m(()=>[B(N(k.value)+" online · "+N(x.value)+" on WiFi",1)]),_:1})]}),_:1})]),_:1})]),_:1}),g(p(Se),{cols:2,"x-gap":14,"y-gap":14,responsive:"screen","item-responsive":!0,style:{"margin-top":"14px"}},{default:m(()=>[g(p(F),{span:"2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"Network interfaces"},{default:m(()=>{var i,b,_;return[(D(!0),O(te,null,re((i=c.value)==null?void 0:i.interfaces,$=>(D(),O("div",{key:$.name,style:{display:"flex","align-items":"center","justify-content":"space-between",padding:"8px 0","border-bottom":"1px solid var(--c-border)"}},[K("div",yt,[g(p(ye),{color:$.up?"#10b981":"#9ca3af",dot:""},null,8,["color"]),g(p(W),{strong:"",style:{"font-size":"13px"}},{default:m(()=>[B(N($.name),1)]),_:2},1024),g(p(le),{size:"tiny",bordered:!1},{default:m(()=>[B(N($.type),1)]),_:2},1024)]),$.up?(D(),ie(p(W),{key:0,depth:"3",code:"",style:{"font-size":"12px"}},{default:m(()=>[B(N($.ipaddr),1)]),_:2},1024)):se("",!0)]))),128)),(_=(b=c.value)==null?void 0:b.interfaces)!=null&&_.length?se("",!0):(D(),ie(p(be),{key:0,description:"No interfaces",size:"small"}))]}),_:1})]),_:1}),g(p(F),{span:"2 l:1"},{default:m(()=>[g(p(T),{size:"small",title:"Wireless"},{default:m(()=>{var i,b,_;return[(D(!0),O(te,null,re((i=a.value)==null?void 0:i.radios,$=>(D(),O("div",{key:$.name,style:{padding:"8px 0","border-bottom":"1px solid var(--c-border)"}},[K("div",bt,[g(p(ye),{color:$.enabled?"#10b981":"#9ca3af",dot:""},null,8,["color"]),g(p(W),{strong:"",style:{"font-size":"13px"}},{default:m(()=>[B(N($.band),1)]),_:2},1024),g(p(le),{size:"tiny",bordered:!1},{default:m(()=>[B("ch"+N($.channel),1)]),_:2},1024)]),(D(!0),O(te,null,re($.ssids,I=>(D(),O("div",{key:I.ifname,style:{"margin-left":"20px"}},[g(p(W),{style:{"font-size":"13px"}},{default:m(()=>[B(N(I.ssid),1)]),_:2},1024),g(p(W),{depth:"3",style:{"font-size":"12px","margin-left":"8px"}},{default:m(()=>[B("("+N(I.client_count)+" clients)",1)]),_:2},1024)]))),128))]))),128)),(_=(b=a.value)==null?void 0:b.radios)!=null&&_.length?se("",!0):(D(),ie(p(be),{key:0,description:"No radios",size:"small"}))]}),_:1})]),_:1})]),_:1}),g(p(T),{size:"small",title:"System information",style:{"margin-top":"14px"}},{default:m(()=>[g(p(Je),{"label-placement":"left",column:2,bordered:"",size:"small"},{default:m(()=>[g(p(M),{label:"Hostname"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.hostname),1)]}),_:1}),g(p(M),{label:"Model"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.model),1)]}),_:1}),g(p(M),{label:"Firmware"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.firmware_version),1)]}),_:1}),g(p(M),{label:"Kernel"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.kernel_version),1)]}),_:1}),g(p(M),{label:"OpenWrt"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.openwrt_version),1)]}),_:1}),g(p(M),{label:"Uptime"},{default:m(()=>{var i;return[B(N(P((i=s.value)==null?void 0:i.uptime)),1)]}),_:1}),g(p(M),{label:"Time"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.localtime),1)]}),_:1}),g(p(M),{label:"Arch"},{default:m(()=>{var i;return[B(N((i=s.value)==null?void 0:i.architecture),1)]}),_:1})]),_:1})]),_:1})]))}};export{jt as default};
