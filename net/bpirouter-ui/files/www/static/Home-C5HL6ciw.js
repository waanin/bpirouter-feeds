import{a8 as we,f as w,a9 as $e,A as G,Z as fe,M as Ce,d as L,h as o,U as Re,aa as T,ab as ke,ac as ie,ad as Be,u as pe,ae as X,o as Ne,af as Pe,J as ze,ag as se,N as De,W as oe,Q as ge,ah as he,ai as ve,aj as me,ak as ye,al as Ge,F as Y,c as k,a as M,b as be,am as Ie,e as je,g as ne,k as Me,l as E,n as P,v as D,q as $,D as W,m as g,a2 as Ee,p as b,E as ae,T as Q,a1 as U,y as We,r as V}from"./index-DDHWJPsH.js";import{u as Oe,S as O}from"./SectionCard-BMN6aThM.js";import{S as le}from"./StatusDot-DB3pbg2D.js";import{_ as qe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as Ae}from"./get-slot-Bk_rJcZu.js";import{b as Te}from"./next-frame-once-C5Ksf8W7.js";import{f as q}from"./format-length-B-p6aW7q.js";function Le(e){if(typeof e=="number")return{"":e.toString()};const r={};return e.split(/ +/).forEach(d=>{if(d==="")return;const[a,n]=d.split(":");n===void 0?r[""]=a:r[a]=n}),r}function A(e,r){var d;if(e==null)return;const a=Le(e);if(r===void 0)return a[""];if(typeof r=="string")return(d=a[r])!==null&&d!==void 0?d:a[""];if(Array.isArray(r)){for(let n=r.length-1;n>=0;--n){const s=r[n];if(s in a)return a[s]}return a[""]}else{let n,s=-1;return Object.keys(a).forEach(i=>{const l=Number(i);!Number.isNaN(l)&&r>=l&&l>=s&&(s=l,n=a[i])}),n}}const Ve={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Fe(e){return`(min-width: ${e}px)`}const F={};function Xe(e=Ve){if(!we)return w(()=>[]);if(typeof window.matchMedia!="function")return w(()=>[]);const r=G({}),d=Object.keys(e),a=(n,s)=>{n.matches?r.value[s]=!0:r.value[s]=!1};return d.forEach(n=>{const s=e[n];let i,l;F[s]===void 0?(i=window.matchMedia(Fe(s)),i.addEventListener?i.addEventListener("change",p=>{l.forEach(h=>{h(p,n)})}):i.addListener&&i.addListener(p=>{l.forEach(h=>{h(p,n)})}),l=new Set,F[s]={mql:i,cbs:l}):(i=F[s].mql,l=F[s].cbs),l.add(a),i.matches&&l.forEach(p=>{p(i,n)})}),$e(()=>{d.forEach(n=>{const{cbs:s}=F[e[n]];s.has(a)&&s.delete(a)})}),w(()=>{const{value:n}=r;return d.filter(s=>n[s])})}function Ye(e){var r;const d=(r=e.dirs)===null||r===void 0?void 0:r.find(({dir:a})=>a===fe);return!!(d&&d.value===!1)}const ce=1,_e=Ce("n-grid"),xe=1,He={span:{type:[Number,String],default:xe},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},H=L({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:He,setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:d,overflowRef:a,layoutShiftDisabledRef:n}=Re(_e),s=ke();return{overflow:a,itemStyle:d,layoutShiftDisabled:n,mergedXGap:w(()=>T(r.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=xe,privateShow:l=!0,privateColStart:p=void 0,privateOffset:h=0}=s.vnode.props,{value:C}=r,R=T(C||0);return{display:l?"":"none",gridColumn:`${p??`span ${i}`} / span ${i}`,marginLeft:h?`calc((100% - (${i} - 1) * ${R}) / ${i} * ${h} + ${R} * ${h})`:""}}}},render(){var e,r;if(this.layoutShiftDisabled){const{span:d,offset:a,mergedXGap:n}=this;return o("div",{style:{gridColumn:`span ${d} / span ${d}`,marginLeft:a?`calc((100% - (${d} - 1) * ${n}) / ${d} * ${a} + ${n} * ${a})`:""}},this.$slots)}return o("div",{style:[this.itemStyle,this.deriveStyle()]},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e,{overflow:this.overflow}))}}),Qe={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Se=24,J="__ssr__",Ue={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Se},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Je=L({name:"Grid",inheritAttrs:!1,props:Ue,setup(e){const{mergedClsPrefixRef:r,mergedBreakpointsRef:d}=pe(e),a=/^\d+$/,n=G(void 0),s=Xe((d==null?void 0:d.value)||Qe),i=X(()=>!!(e.itemResponsive||!a.test(e.cols.toString())||!a.test(e.xGap.toString())||!a.test(e.yGap.toString()))),l=w(()=>{if(i.value)return e.responsive==="self"?n.value:s.value}),p=X(()=>{var _;return(_=Number(A(e.cols.toString(),l.value)))!==null&&_!==void 0?_:Se}),h=X(()=>A(e.xGap.toString(),l.value)),C=X(()=>A(e.yGap.toString(),l.value)),R=_=>{n.value=_.contentRect.width},v=_=>{Te(R,_)},B=G(!1),y=w(()=>{if(e.responsive==="self")return v}),u=G(!1),N=G();return Ne(()=>{const{value:_}=N;_&&_.hasAttribute(J)&&(_.removeAttribute(J),u.value=!0)}),De(_e,{layoutShiftDisabledRef:oe(e,"layoutShiftDisabled"),isSsrRef:u,itemStyleRef:oe(e,"itemStyle"),xGapRef:h,overflowRef:B}),{isSsr:!Pe,contentEl:N,mergedClsPrefix:r,style:w(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:T(e.xGap),rowGap:T(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${p.value}, minmax(0, 1fr))`,columnGap:T(h.value),rowGap:T(C.value)}),isResponsive:i,responsiveQuery:l,responsiveCols:p,handleResize:y,overflow:B}},render(){if(this.layoutShiftDisabled)return o("div",ie({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var r,d,a,n,s,i,l;this.overflow=!1;const p=ze(Ae(this)),h=[],{collapsed:C,collapsedRows:R,responsiveCols:v,responsiveQuery:B}=this;p.forEach(t=>{var f,c,m,x,S;if(((f=t==null?void 0:t.type)===null||f===void 0?void 0:f.__GRID_ITEM__)!==!0)return;if(Ye(t)){const I=se(t);I.props?I.props.privateShow=!1:I.props={privateShow:!1},h.push({child:I,rawChildSpan:0});return}t.dirs=((c=t.dirs)===null||c===void 0?void 0:c.filter(({dir:I})=>I!==fe))||null,((m=t.dirs)===null||m===void 0?void 0:m.length)===0&&(t.dirs=null);const z=se(t),j=Number((S=A((x=z.props)===null||x===void 0?void 0:x.span,B))!==null&&S!==void 0?S:ce);j!==0&&h.push({child:z,rawChildSpan:j})});let y=0;const u=(r=h[h.length-1])===null||r===void 0?void 0:r.child;if(u!=null&&u.props){const t=(d=u.props)===null||d===void 0?void 0:d.suffix;t!==void 0&&t!==!1&&(y=Number((n=A((a=u.props)===null||a===void 0?void 0:a.span,B))!==null&&n!==void 0?n:ce),u.props.privateSpan=y,u.props.privateColStart=v+1-y,u.props.privateShow=(s=u.props.privateShow)!==null&&s!==void 0?s:!0)}let N=0,_=!1;for(const{child:t,rawChildSpan:f}of h){if(_&&(this.overflow=!0),!_){const c=Number((l=A((i=t.props)===null||i===void 0?void 0:i.offset,B))!==null&&l!==void 0?l:0),m=Math.min(f+c,v);if(t.props?(t.props.privateSpan=m,t.props.privateOffset=c):t.props={privateSpan:m,privateOffset:c},C){const x=N%v;m+x>v&&(N+=v-x),m+N+y>R*v?_=!0:N+=m}}_&&(t.props?t.props.privateShow!==!0&&(t.props.privateShow=!1):t.props={privateShow:!1})}return o("div",ie({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[J]:this.isSsr||void 0},this.$attrs),h.map(({child:t})=>t))};return this.isResponsive&&this.responsive==="self"?o(Be,{onResize:this.handleResize},{default:e}):e()}}),Ze={success:o(ye,null),error:o(me,null),warning:o(ve,null),info:o(he,null)},Ke=L({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:r}){const d=w(()=>{const s="gradient",{fillColor:i}=e;return typeof i=="object"?`${s}-${Ge(JSON.stringify(i))}`:s});function a(s,i,l,p){const{gapDegree:h,viewBoxWidth:C,strokeWidth:R}=e,v=50,B=0,y=v,u=0,N=2*v,_=50+R/2,t=`M ${_},${_} m ${B},${y}
      a ${v},${v} 0 1 1 ${u},${-N}
      a ${v},${v} 0 1 1 ${-u},${N}`,f=Math.PI*2*v,c={stroke:p==="rail"?l:typeof e.fillColor=="object"?`url(#${d.value})`:l,strokeDasharray:`${Math.min(s,100)/100*(f-h)}px ${C*8}px`,strokeDashoffset:`-${h/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:t,pathStyle:c}}const n=()=>{const s=typeof e.fillColor=="object",i=s?e.fillColor.stops[0]:"",l=s?e.fillColor.stops[1]:"";return s&&o("defs",null,o("linearGradient",{id:d.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},o("stop",{offset:"0%","stop-color":i}),o("stop",{offset:"100%","stop-color":l})))};return()=>{const{fillColor:s,railColor:i,strokeWidth:l,offsetDegree:p,status:h,percentage:C,showIndicator:R,indicatorTextColor:v,unit:B,gapOffsetDegree:y,clsPrefix:u}=e,{pathString:N,pathStyle:_}=a(100,0,i,"rail"),{pathString:t,pathStyle:f}=a(C,p,s,"fill"),c=100+l;return o("div",{class:`${u}-progress-content`,role:"none"},o("div",{class:`${u}-progress-graph`,"aria-hidden":!0},o("div",{class:`${u}-progress-graph-circle`,style:{transform:y?`rotate(${y}deg)`:void 0}},o("svg",{viewBox:`0 0 ${c} ${c}`},n(),o("g",null,o("path",{class:`${u}-progress-graph-circle-rail`,d:N,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:_})),o("g",null,o("path",{class:[`${u}-progress-graph-circle-fill`,C===0&&`${u}-progress-graph-circle-fill--empty`],d:t,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:f}))))),R?o("div",null,r.default?o("div",{class:`${u}-progress-custom-content`,role:"none"},r.default()):h!=="default"?o("div",{class:`${u}-progress-icon`,"aria-hidden":!0},o(ge,{clsPrefix:u},{default:()=>Ze[h]})):o("div",{class:`${u}-progress-text`,style:{color:v},role:"none"},o("span",{class:`${u}-progress-text__percentage`},C),o("span",{class:`${u}-progress-text__unit`},B))):null)}}}),et={success:o(ye,null),error:o(me,null),warning:o(ve,null),info:o(he,null)},tt=L({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:r}){const d=w(()=>q(e.height)),a=w(()=>{var i,l;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(i=e.fillColor)===null||i===void 0?void 0:i.stops[0]} , ${(l=e.fillColor)===null||l===void 0?void 0:l.stops[1]})`:e.fillColor}),n=w(()=>e.railBorderRadius!==void 0?q(e.railBorderRadius):e.height!==void 0?q(e.height,{c:.5}):""),s=w(()=>e.fillBorderRadius!==void 0?q(e.fillBorderRadius):e.railBorderRadius!==void 0?q(e.railBorderRadius):e.height!==void 0?q(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:i,railColor:l,railStyle:p,percentage:h,unit:C,indicatorTextColor:R,status:v,showIndicator:B,processing:y,clsPrefix:u}=e;return o("div",{class:`${u}-progress-content`,role:"none"},o("div",{class:`${u}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${u}-progress-graph-line`,{[`${u}-progress-graph-line--indicator-${i}`]:!0}]},o("div",{class:`${u}-progress-graph-line-rail`,style:[{backgroundColor:l,height:d.value,borderRadius:n.value},p]},o("div",{class:[`${u}-progress-graph-line-fill`,y&&`${u}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:a.value,height:d.value,lineHeight:d.value,borderRadius:s.value}},i==="inside"?o("div",{class:`${u}-progress-graph-line-indicator`,style:{color:R}},r.default?r.default():`${h}${C}`):null)))),B&&i==="outside"?o("div",null,r.default?o("div",{class:`${u}-progress-custom-content`,style:{color:R},role:"none"},r.default()):v==="default"?o("div",{role:"none",class:`${u}-progress-icon ${u}-progress-icon--as-text`,style:{color:R}},h,C):o("div",{class:`${u}-progress-icon`,"aria-hidden":!0},o(ge,{clsPrefix:u},{default:()=>et[v]}))):null)}}});function de(e,r,d=100){return`m ${d/2} ${d/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const rt=L({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:r}){const d=w(()=>e.percentage.map((s,i)=>`${Math.PI*s/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`)),a=(n,s)=>{const i=e.fillColor[s],l=typeof i=="object"?i.stops[0]:"",p=typeof i=="object"?i.stops[1]:"";return typeof e.fillColor[s]=="object"&&o("linearGradient",{id:`gradient-${s}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},o("stop",{offset:"0%","stop-color":l}),o("stop",{offset:"100%","stop-color":p}))};return()=>{const{viewBoxWidth:n,strokeWidth:s,circleGap:i,showIndicator:l,fillColor:p,railColor:h,railStyle:C,percentage:R,clsPrefix:v}=e;return o("div",{class:`${v}-progress-content`,role:"none"},o("div",{class:`${v}-progress-graph`,"aria-hidden":!0},o("div",{class:`${v}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${n} ${n}`},o("defs",null,R.map((B,y)=>a(B,y))),R.map((B,y)=>o("g",{key:y},o("path",{class:`${v}-progress-graph-circle-rail`,d:de(n/2-s/2*(1+2*y)-i*y,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:h[y]},C[y]]}),o("path",{class:[`${v}-progress-graph-circle-fill`,B===0&&`${v}-progress-graph-circle-fill--empty`],d:de(n/2-s/2*(1+2*y)-i*y,s,n),"stroke-width":s,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:d.value[y],strokeDashoffset:0,stroke:typeof p[y]=="object"?`url(#gradient-${y})`:p[y]}})))))),l&&r.default?o("div",null,o("div",{class:`${v}-progress-text`},r.default())):null)}}}),it=Y([k("progress",{display:"inline-block"},[k("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),M("line",`
 width: 100%;
 display: block;
 `,[k("progress-content",`
 display: flex;
 align-items: center;
 `,[k("progress-graph",{flex:1})]),k("progress-custom-content",{marginLeft:"14px"}),k("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[M("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),M("circle, dashboard",{width:"120px"},[k("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),k("progress-text",`
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
 `),k("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),M("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[k("progress-text",`
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
 `)]),k("progress-content",{position:"relative"}),k("progress-graph",{position:"relative"},[k("progress-graph-circle",[Y("svg",{verticalAlign:"bottom"}),k("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[M("empty",{opacity:0})]),k("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),k("progress-graph-line",[M("indicator-inside",[k("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[k("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),k("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),M("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[k("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),k("progress-graph-line-indicator",`
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
 `)]),k("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[k("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[M("processing",[Y("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),Y("@keyframes progress-processing-animation",`
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
 `)]),st=Object.assign(Object.assign({},be.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ue=L({name:"Progress",props:st,setup(e){const r=w(()=>e.indicatorPlacement||e.indicatorPosition),d=w(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:a,inlineThemeDisabled:n}=pe(e),s=be("Progress","-progress",it,Ie,e,a),i=w(()=>{const{status:p}=e,{common:{cubicBezierEaseInOut:h},self:{fontSize:C,fontSizeCircle:R,railColor:v,railHeight:B,iconSizeCircle:y,iconSizeLine:u,textColorCircle:N,textColorLineInner:_,textColorLineOuter:t,lineBgProcessing:f,fontWeightCircle:c,[ne("iconColor",p)]:m,[ne("fillColor",p)]:x}}=s.value;return{"--n-bezier":h,"--n-fill-color":x,"--n-font-size":C,"--n-font-size-circle":R,"--n-font-weight-circle":c,"--n-icon-color":m,"--n-icon-size-circle":y,"--n-icon-size-line":u,"--n-line-bg-processing":f,"--n-rail-color":v,"--n-rail-height":B,"--n-text-color-circle":N,"--n-text-color-line-inner":_,"--n-text-color-line-outer":t}}),l=n?je("progress",w(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:a,mergedIndicatorPlacement:r,gapDeg:d,cssVars:n?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{type:e,cssVars:r,indicatorTextColor:d,showIndicator:a,status:n,railColor:s,railStyle:i,color:l,percentage:p,viewBoxWidth:h,strokeWidth:C,mergedIndicatorPlacement:R,unit:v,borderRadius:B,fillBorderRadius:y,height:u,processing:N,circleGap:_,mergedClsPrefix:t,gapDeg:f,gapOffsetDegree:c,themeClass:m,$slots:x,onRender:S}=this;return S==null||S(),o("div",{class:[m,`${t}-progress`,`${t}-progress--${e}`,`${t}-progress--${n}`],style:r,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(Ke,{clsPrefix:t,status:n,showIndicator:a,indicatorTextColor:d,railColor:s,fillColor:l,railStyle:i,offsetDegree:this.offsetDegree,percentage:p,viewBoxWidth:h,strokeWidth:C,gapDegree:f===void 0?e==="dashboard"?75:0:f,gapOffsetDegree:c,unit:v},x):e==="line"?o(tt,{clsPrefix:t,status:n,showIndicator:a,indicatorTextColor:d,railColor:s,fillColor:l,railStyle:i,percentage:p,processing:N,indicatorPlacement:R,unit:v,fillBorderRadius:y,railBorderRadius:B,height:u},x):e==="multiple-circle"?o(rt,{clsPrefix:t,strokeWidth:C,railColor:s,fillColor:l,railStyle:i,viewBoxWidth:h,percentage:p,showIndicator:a,circleGap:_},x):null)}}),ot={class:"fade-in"},nt={class:"stat-card"},at={class:"stat-row"},lt={class:"stat-value mono"},ct={class:"stat-sub"},dt={class:"stat-card"},ut={class:"stat-value"},ft={class:"stat-sub"},pt={class:"stat-card"},gt={class:"stat-value"},ht={class:"stat-sub"},vt={class:"stat-card"},mt={class:"stat-value"},yt={class:"stat-sub"},bt={class:"wifi-radio-header"},_t={class:"wifi-band"},xt={class:"mono wifi-detail"},St={key:0,class:"stat-sub",style:{padding:"8px 0"}},wt={class:"info-grid"},$t={class:"info-item"},Ct={class:"info-label"},Rt={class:"info-value"},kt={class:"info-item"},Bt={class:"info-label"},Nt={class:"info-value"},Pt={class:"info-item"},zt={class:"info-label"},Dt={class:"info-value mono"},Gt={class:"info-item"},It={class:"info-label"},jt={class:"info-value mono"},Mt={class:"info-item"},Et={class:"info-label"},Wt={class:"info-value"},Ot={class:"info-item"},qt={class:"info-label"},At={class:"info-value"},Tt={__name:"Home",setup(e){const{t:r}=Me(),d=G(null),a=G(null),n=G(null),s=G(null),i=G(null),l=w(()=>{var f,c;const t=((c=(f=a.value)==null?void 0:f.cpu)==null?void 0:c.usage_percent)||0;return t>80?"var(--color-danger)":t>50?"var(--color-warning)":"var(--color-success)"}),p=w(()=>{var f;const t=(f=a.value)==null?void 0:f.memory;return t!=null&&t.total_kb?Math.round(t.used_kb/t.total_kb*100):0}),h=w(()=>{var t,f;return(f=(t=n.value)==null?void 0:t.interfaces)==null?void 0:f.some(c=>c.up)}),C=w(()=>{var t,f,c;return((c=(f=(t=n.value)==null?void 0:t.interfaces)==null?void 0:f.find(m=>m.up))==null?void 0:c.ipaddr)||""}),R=w(()=>{var t,f,c;return((c=(f=(t=n.value)==null?void 0:t.interfaces)==null?void 0:f.find(m=>m.up))==null?void 0:c.proto)||""}),v=w(()=>{var t,f,c;return((c=(f=(t=n.value)==null?void 0:t.interfaces)==null?void 0:f.find(m=>m.up))==null?void 0:c.uptime)||0}),B=w(()=>{var t,f;return((f=(t=i.value)==null?void 0:t.clients)==null?void 0:f.filter(c=>c.online).length)||0}),y=w(()=>{var f,c;let t=0;return(c=(f=s.value)==null?void 0:f.radios)==null||c.forEach(m=>{var x;return(x=m.ssids)==null?void 0:x.forEach(S=>t+=S.client_count||0)}),t});function u(t){return t?t>1048576?(t/1048576).toFixed(1)+" GB":t>1024?(t/1024).toFixed(0)+" MB":t+" KB":"0"}function N(t){if(!t)return"--";const f=Math.floor(t/86400),c=Math.floor(t%86400/3600),m=Math.floor(t%3600/60);return f>0?`${f}d ${c}h ${m}m`:c>0?`${c}h ${m}m`:`${m}m`}async function _(){const t=await Promise.allSettled([V("system.get_info"),V("system.get_resources"),V("network.get_status"),V("wireless.get_status"),V("clients.get_list")]);t[0].status==="fulfilled"&&(d.value=t[0].value),t[1].status==="fulfilled"&&(a.value=t[1].value),t[2].status==="fulfilled"&&(n.value=t[2].value),t[3].status==="fulfilled"&&(s.value=t[3].value),t[4].status==="fulfilled"&&(i.value=t[4].value)}return Oe(_,5e3),(t,f)=>(W(),E("div",ot,[P($(Je),{cols:4,"x-gap":16,"y-gap":16,responsive:"screen","item-responsive":""},{default:D(()=>[P($(H),{span:"4 m:2 l:1"},{default:D(()=>[P(O,{title:$(r)("home.internet.title")},{default:D(()=>[g("div",nt,[g("div",at,[P(le,{status:h.value?"online":"offline"},null,8,["status"]),g("span",{class:"stat-label",style:Ee({color:h.value?"var(--color-success)":"var(--color-danger)"})},b(h.value?$(r)("home.internet.connected"):$(r)("home.internet.disconnected")),5)]),g("div",lt,b(C.value||"--"),1),g("div",ct,b(R.value)+" "+b(v.value?"· "+N(v.value):""),1)])]),_:1},8,["title"])]),_:1}),P($(H),{span:"2 m:1 l:1"},{default:D(()=>[P(O,{title:$(r)("home.cpu.title")},{default:D(()=>{var c,m,x,S,z,j,I,Z,K,ee,te,re;return[g("div",dt,[g("div",ut,[ae(b(((x=(m=(c=a.value)==null?void 0:c.cpu)==null?void 0:m.usage_percent)==null?void 0:x.toFixed(1))||"0"),1),f[0]||(f[0]=g("span",{class:"stat-unit"},"%",-1))]),P($(ue),{type:"line",percentage:((z=(S=a.value)==null?void 0:S.cpu)==null?void 0:z.usage_percent)||0,"show-indicator":!1,color:l.value,style:{margin:"8px 0"}},null,8,["percentage","color"]),g("div",ft,b(((Z=(I=(j=a.value)==null?void 0:j.cpu)==null?void 0:I.temperature_celsius)==null?void 0:Z.toFixed(0))||"--")+"°C · Load "+b(((re=(te=(ee=(K=a.value)==null?void 0:K.cpu)==null?void 0:ee.load_avg)==null?void 0:te[0])==null?void 0:re.toFixed(2))||"0.00"),1)])]}),_:1},8,["title"])]),_:1}),P($(H),{span:"2 m:1 l:1"},{default:D(()=>[P(O,{title:$(r)("home.memory.title")},{default:D(()=>{var c,m,x,S;return[g("div",pt,[g("div",gt,[ae(b(p.value),1),f[1]||(f[1]=g("span",{class:"stat-unit"},"%",-1))]),P($(ue),{type:"line",percentage:p.value,"show-indicator":!1,color:p.value>80?"var(--color-danger)":p.value>50?"var(--color-warning)":"var(--brand-primary)",style:{margin:"8px 0"}},null,8,["percentage","color"]),g("div",ht,b(u((m=(c=a.value)==null?void 0:c.memory)==null?void 0:m.used_kb))+" / "+b(u((S=(x=a.value)==null?void 0:x.memory)==null?void 0:S.total_kb)),1)])]}),_:1},8,["title"])]),_:1}),P($(H),{span:"4 l:1"},{default:D(()=>[P(O,{title:$(r)("home.devices.title")},{default:D(()=>{var c;return[g("div",vt,[g("div",mt,b(((c=i.value)==null?void 0:c.total)||0),1),g("div",yt,b($(r)("home.devices.onlineCount",{count:B.value}))+" · "+b($(r)("home.devices.wifiCount",{count:y.value})),1)])]}),_:1},8,["title"])]),_:1})]),_:1}),P(O,{title:$(r)("home.wifi.title"),style:{"margin-top":"16px"}},{default:D(()=>{var c,m,x;return[(W(!0),E(Q,null,U((c=s.value)==null?void 0:c.radios,S=>(W(),E("div",{key:S.name,class:"wifi-radio"},[g("div",bt,[P(le,{status:S.enabled?"online":"offline"},null,8,["status"]),g("span",_t,b(S.band),1),(W(!0),E(Q,null,U(S.ssids,z=>(W(),E("span",{key:z.ifname,class:"wifi-ssid"},b(z.ssid),1))),128)),g("span",xt,"ch"+b(S.channel)+" "+b(S.htmode),1)]),(W(!0),E(Q,null,U(S.ssids,z=>(W(),E("div",{key:z.ifname,class:"wifi-clients"}," └─ "+b(z.client_count)+" "+b($(r)("common.clients")),1))),128))]))),128)),(x=(m=s.value)==null?void 0:m.radios)!=null&&x.length?We("",!0):(W(),E("div",St,"--"))]}),_:1},8,["title"]),P(O,{title:$(r)("home.system.title"),style:{"margin-top":"16px"}},{default:D(()=>{var c,m,x,S,z,j;return[g("div",wt,[g("div",$t,[g("span",Ct,b($(r)("home.system.hostname")),1),g("span",Rt,b((c=d.value)==null?void 0:c.hostname),1)]),g("div",kt,[g("span",Bt,b($(r)("home.system.model")),1),g("span",Nt,b((m=d.value)==null?void 0:m.model),1)]),g("div",Pt,[g("span",zt,b($(r)("home.system.firmware")),1),g("span",Dt,b((x=d.value)==null?void 0:x.firmware_version),1)]),g("div",Gt,[g("span",It,b($(r)("home.system.kernel")),1),g("span",jt,b((S=d.value)==null?void 0:S.kernel_version),1)]),g("div",Mt,[g("span",Et,b($(r)("home.system.uptime")),1),g("span",Wt,b(N((z=d.value)==null?void 0:z.uptime)),1)]),g("div",Ot,[g("span",qt,b($(r)("home.system.time")),1),g("span",At,b((j=d.value)==null?void 0:j.localtime),1)])])]}),_:1},8,["title"])]))}},Ut=qe(Tt,[["__scopeId","data-v-0a66fc8b"]]);export{Ut as default};
