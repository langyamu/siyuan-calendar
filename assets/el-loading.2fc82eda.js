var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))n.call(t,a)&&r(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{aI as u,b as c,x as d,m as v,u as m,aJ as p,a as f,A as g,f as h,q as b,v as y,p as w,t as x,aK as S,aL as k,Q as T,C,G as L,H as E,af as z,ag as N,$ as P,J as A,M,ax as O,_ as $,D as B,a4 as D,F as _,V as j,ab as H,aj as F,w as R,aM as I,ar as W,O as V,P as Y,as as J,aN as K,E as X,I as q,L as U,W as G,R as Q,aO as Z,aP as ee,r as te,ak as ae,aQ as le,ao as oe,g as ne,e as re,aR as se}from"./index.eb564cd9.js";function ie(){if(!arguments.length)return[];var e=arguments[0];return u(e)?e:[e]}let ue;const ce=()=>{var e;if(!c)return 0;if(void 0!==ue)return ue;const t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const a=t.offsetWidth;t.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",t.appendChild(l);const o=l.offsetWidth;return null==(e=t.parentNode)||e.removeChild(t),ue=a-o,ue};function de(e,t){if(!c)return;if(!t)return void(e.scrollTop=0);const a=[];let l=t.offsetParent;for(;null!==l&&e!==l&&e.contains(l);)a.push(l),l=l.offsetParent;const o=t.offsetTop+a.reduce(((e,t)=>e+t.offsetTop),0),n=o+t.offsetHeight,r=e.scrollTop,s=r+e.clientHeight;o<r?e.scrollTop=o:n>s&&(e.scrollTop=n-e.clientHeight)}const ve=Symbol("scrollbarContextKey");var me={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const pe=e=>(t,a)=>fe(t,a,m(e)),fe=(e,t,a)=>p(a,e,e).replace(/\{(\w+)\}/g,((e,a)=>{var l;return`${null!=(l=null==t?void 0:t[a])?l:`{${a}}`}`})),ge=()=>{const e=d("locale");return(e=>({lang:v((()=>m(e).name)),locale:f(e)?e:g(e),t:pe(e)}))(v((()=>e.value||me)))},he={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};var be=$(b({props:h({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),setup(e){const t=e,a=y(ve),l=w("scrollbar");a||x("Thumb","can not inject scrollbar context");const o=g(),n=g(),r=g({}),s=g(!1);let i=!1,u=!1,d=c?document.onselectstart:null;const p=v((()=>he[t.vertical?"vertical":"horizontal"])),f=v((()=>(({move:e,size:t,bar:a})=>({[a.size]:t,transform:`translate${a.axis}(${e}%)`}))({size:t.size,move:t.move,bar:p.value}))),h=v((()=>o.value[p.value.offset]**2/a.wrapElement[p.value.scrollSize]/t.ratio/n.value[p.value.offset])),b=e=>{var t;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(t=window.getSelection())||t.removeAllRanges(),B(e);const a=e.currentTarget;a&&(r.value[p.value.axis]=a[p.value.offset]-(e[p.value.client]-a.getBoundingClientRect()[p.value.direction]))},$=e=>{if(!n.value||!o.value||!a.wrapElement)return;const t=100*(Math.abs(e.target.getBoundingClientRect()[p.value.direction]-e[p.value.client])-n.value[p.value.offset]/2)*h.value/o.value[p.value.offset];a.wrapElement[p.value.scroll]=t*a.wrapElement[p.value.scrollSize]/100},B=e=>{e.stopImmediatePropagation(),i=!0,document.addEventListener("mousemove",D),document.addEventListener("mouseup",_),d=document.onselectstart,document.onselectstart=()=>!1},D=e=>{if(!o.value||!n.value)return;if(!1===i)return;const t=r.value[p.value.axis];if(!t)return;const l=100*(-1*(o.value.getBoundingClientRect()[p.value.direction]-e[p.value.client])-(n.value[p.value.offset]-t))*h.value/o.value[p.value.offset];a.wrapElement[p.value.scroll]=l*a.wrapElement[p.value.scrollSize]/100},_=()=>{i=!1,r.value[p.value.axis]=0,document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",_),j(),u&&(s.value=!1)};S((()=>{j(),document.removeEventListener("mouseup",_)}));const j=()=>{document.onselectstart!==d&&(document.onselectstart=d)};return k(T(a,"scrollbarElement"),"mousemove",(()=>{u=!1,s.value=!!t.size})),k(T(a,"scrollbarElement"),"mouseleave",(()=>{u=!0,s.value=i})),(e,t)=>(C(),L(O,{name:m(l).b("fade")},{default:E((()=>[z(P("div",{ref_key:"instance",ref:o,class:A([m(l).e("bar"),m(l).is(m(p).key)]),onMousedown:$},[P("div",{ref_key:"thumb",ref:n,class:A(m(l).e("thumb")),style:M(m(f)),onMousedown:b},null,38)],34),[[N,e.always||s.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var ye=$(b({props:h({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:t}){const a=e,l=g(0),o=g(0);return t({handleScroll:e=>{if(e){const t=e.offsetHeight-4,n=e.offsetWidth-4;o.value=100*e.scrollTop/t*a.ratioY,l.value=100*e.scrollLeft/n*a.ratioX}}}),(e,t)=>(C(),B(_,null,[D(be,{move:l.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),D(be,{move:o.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const we=h({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:j([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),xe={scroll:({scrollTop:e,scrollLeft:t})=>H(e)&&H(t)};const Se=Q($(b(i(s({},{name:"ElScrollbar"}),{props:we,emits:xe,setup(e,{expose:t,emit:a}){const l=e,o=w("scrollbar");let n,r;const s=g(),i=g(),u=g(),c=g("0"),d=g("0"),p=g(),f=g(1),h=g(1),b=v((()=>{const e={};return l.height&&(e.height=F(l.height)),l.maxHeight&&(e.maxHeight=F(l.maxHeight)),[l.wrapStyle,e]})),y=()=>{var e;i.value&&(null==(e=p.value)||e.handleScroll(i.value),a("scroll",{scrollTop:i.value.scrollTop,scrollLeft:i.value.scrollLeft}))};const x=()=>{if(!i.value)return;const e=i.value.offsetHeight-4,t=i.value.offsetWidth-4,a=e**2/i.value.scrollHeight,o=t**2/i.value.scrollWidth,n=Math.max(a,l.minSize),r=Math.max(o,l.minSize);f.value=a/(e-a)/(n/(e-n)),h.value=o/(t-o)/(r/(t-r)),d.value=n+4<e?`${n}px`:"",c.value=r+4<t?`${r}px`:""};return R((()=>l.noresize),(e=>{e?(null==n||n(),null==r||r()):(({stop:n}=I(u,x)),r=k("resize",x))}),{immediate:!0}),R((()=>[l.maxHeight,l.height]),(()=>{l.native||W((()=>{var e;x(),i.value&&(null==(e=p.value)||e.handleScroll(i.value))}))})),V(ve,Y({scrollbarElement:s,wrapElement:i})),J((()=>{l.native||W((()=>x()))})),K((()=>x())),t({wrap$:i,update:x,scrollTo:function(e,t){G(e)?i.value.scrollTo(e):H(e)&&H(t)&&i.value.scrollTo(e,t)},setScrollTop:e=>{H(e)&&(i.value.scrollTop=e)},setScrollLeft:e=>{H(e)&&(i.value.scrollLeft=e)},handleScroll:y}),(e,t)=>(C(),B("div",{ref_key:"scrollbar$",ref:s,class:A(m(o).b())},[P("div",{ref_key:"wrap$",ref:i,class:A([e.wrapClass,m(o).e("wrap"),{[m(o).em("wrap","hidden-default")]:!e.native}]),style:M(m(b)),onScroll:y},[(C(),L(q(e.tag),{ref_key:"resize$",ref:u,class:A([m(o).e("view"),e.viewClass]),style:M(e.viewStyle)},{default:E((()=>[X(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?U("v-if",!0):(C(),L(ye,{key:0,ref_key:"barRef",ref:p,height:d.value,width:c.value,always:e.always,"ratio-x":h.value,"ratio-y":f.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));let ke;const Te=function(e={}){if(!c)return;const t=Ce(e);if(t.fullscreen&&ke)return ke;const a=function(e){let t;const a=w("loading"),l=g(!1),o=Y(i(s({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function n(){const e=o.parent;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(te(e,a.bm("parent","relative")),e.removeAttribute("loading-number")),te(e,a.bm("parent","hidden"))}r(),c.unmount()}function r(){var e,t;null==(t=null==(e=d.$el)?void 0:e.parentNode)||t.removeChild(d.$el)}function u(){l.value&&(l.value=!1,n())}const c=ee({name:"ElLoading",setup:()=>()=>{const e=o.spinner||o.svg,t=ae("svg",s({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"25 25 50 50"},e?{innerHTML:e}:{}),[ae("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),l=o.text?ae("p",{class:a.b("text")},[o.text]):void 0;return ae(O,{name:a.b("fade"),onAfterLeave:u},{default:E((()=>[z(D("div",{style:{backgroundColor:o.background||""},class:[a.b("mask"),o.customClass,o.fullscreen?"is-fullscreen":""]},[ae("div",{class:a.b("spinner")},[t,l])]),[[N,o.visible]])]))})}}),d=c.mount(document.createElement("div"));return i(s({},Z(o)),{setText:function(e){o.text=e},removeElLoadingChild:r,close:function(){var a;e.beforeClose&&!e.beforeClose()||(o.parent.vLoadingAddClassList=void 0,l.value=!0,clearTimeout(t),t=window.setTimeout((()=>{l.value&&(l.value=!1,n())}),400),o.visible=!1,null==(a=e.closed)||a.call(e))},handleAfterLeave:u,vm:d,get $el(){return d.$el}})}(i(s({},t),{closed:()=>{var e;null==(e=t.closed)||e.call(t),t.fullscreen&&(ke=void 0)}}));Le(t,t.parent,a),Ee(t,t.parent,a),t.parent.vLoadingAddClassList=()=>Ee(t,t.parent,a);let l=t.parent.getAttribute("loading-number");return l=l?`${Number.parseInt(l)+1}`:"1",t.parent.setAttribute("loading-number",l),t.parent.appendChild(a.$el),W((()=>a.visible.value=t.visible)),t.fullscreen&&(ke=a),a},Ce=e=>{var t,a,l,o;let n;return n=le(e.target)?null!=(t=document.querySelector(e.target))?t:document.body:e.target||document.body,{parent:n===document.body||e.body?document.body:n,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:n===document.body&&(null==(a=e.fullscreen)||a),lock:null!=(l=e.lock)&&l,customClass:e.customClass||"",visible:null==(o=e.visible)||o,target:n}},Le=async(e,t,a)=>{const{nextZIndex:l}=oe(),o={};if(e.fullscreen)a.originalPosition.value=ne(document.body,"position"),a.originalOverflow.value=ne(document.body,"overflow"),o.zIndex=l();else if(e.parent===document.body){a.originalPosition.value=ne(document.body,"position"),await W();for(const t of["top","left"]){const a="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[a]+document.documentElement[a]-Number.parseInt(ne(document.body,`margin-${t}`),10)+"px"}for(const t of["height","width"])o[t]=`${e.target.getBoundingClientRect()[t]}px`}else a.originalPosition.value=ne(t,"position");for(const[n,r]of Object.entries(o))a.$el.style[n]=r},Ee=(e,t,a)=>{const l=w("loading");"absolute"!==a.originalPosition.value&&"fixed"!==a.originalPosition.value?re(t,l.bm("parent","relative")):te(t,l.bm("parent","relative")),e.fullscreen&&e.lock?re(t,l.bm("parent","hidden")):te(t,l.bm("parent","hidden"))},ze=Symbol("ElLoading"),Ne=(e,t)=>{var a,l,o,n;const r=t.instance,s=e=>G(t.value)?t.value[e]:void 0,i=t=>(e=>{const t=le(e)&&(null==r?void 0:r[e])||e;return t?g(t):t})(s(t)||e.getAttribute(`element-loading-${se(t)}`)),u=null!=(a=s("fullscreen"))?a:t.modifiers.fullscreen,c={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:u,target:null!=(l=s("target"))?l:u?void 0:e,body:null!=(o=s("body"))?o:t.modifiers.body,lock:null!=(n=s("lock"))?n:t.modifiers.lock};e[ze]={options:c,instance:Te(c)}},Pe={mounted(e,t){t.value&&Ne(e,t)},updated(e,t){const a=e[ze];t.oldValue!==t.value&&(t.value&&!t.oldValue?Ne(e,t):t.value&&t.oldValue?G(t.value)&&((e,t)=>{for(const a of Object.keys(t))f(t[a])&&(t[a].value=e[a])})(t.value,a.options):null==a||a.instance.close())},unmounted(e){var t;null==(t=e[ze])||t.instance.close()}};export{Se as E,ie as c,ce as g,de as s,ge as u,Pe as v};