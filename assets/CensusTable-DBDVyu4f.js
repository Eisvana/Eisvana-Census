import{U as F,d as P,B as w,o as l,c as d,t as v,e as g,V as z,W as J,r as y,K as Z,X as G,Y as H,Z as ee,$ as te,a as e,m as C,F as S,x as N,w as B,g as O,J as E,P as se,E as ae,z as M,A as L,y as ne,_ as D,a0 as oe,s as j,a1 as le,k as R,I as re,a2 as ie,i as ue,a3 as de,a4 as A,a5 as ce,a6 as ve}from"./main-CbBu-MIq.js";import{R as pe,b as he,t as ye,P as _e}from"./Pagination-qDgzuOJI.js";import{a as me,l as q}from"./censusSubmission-sCMYpWYK.js";import{a as fe}from"./delay-BwyBz56E.js";function Ce(e){const a=e.slice(1,-1).split(" ");return{link:a[0],text:a[1]}}function ge(e){const a=e.slice(2,-2).split("|");return{link:`${F}${a[0]}`,text:a[1]}}function be(e){return e.startsWith("[http")?Ce(e):e.startsWith("[[")?ge(e):{link:e,text:e}}const we=["href"],W=P({__name:"LinkItem",props:{wikitext:{},text:{}},setup(e){const a=e,t=w((()=>a.wikitext.startsWith("[")?be(a.wikitext):{text:a.wikitext,link:`${F}${a.wikitext}`}));return(e,a)=>(l(),d("a",{href:t.value.link,rel:"noopener noreferrer",target:"_blank"},v(e.text??t.value.text),9,we))}}),ke=["href"],K=P({__name:"NewBaseButton",props:{text:{},entry:{}},setup:e=>(e,a)=>(l(),d("a",{href:`./form.html?new=${g(z)(e.entry.CensusPlayer)}`,role:"button",onClick:a[0]||(a[0]=a=>g(J)(e.entry))},v(e.text),9,ke))}),U=e=>(M("data-v-aa2020fb"),e=e(),L(),e),Se={class:"text-bold"},$e=U((()=>e("button",{"aria-label":"Close",class:"close",form:"request-close-form"},null,-1))),Re={key:0,class:"text-center"},Be=U((()=>e("p",null,"There's currently only one base on the wiki.",-1))),Pe={class:"base-item"},xe=["for","aria-disabled"],Ie=["disabled","id","value"],qe=["href"],Ne={key:3},Ee=U((()=>e("button",{class:"secondary"},"Cancel",-1))),Me=P({__name:"ChangeCensusBase",props:{entry:{},items:{},requested:{}},emits:["close","ready","submit"],setup(a,{emit:t}){const s=a,n=w((()=>s.requested===s.entry.Name?"":s.requested)),u=w((()=>s.requested??s.entry.Name)),r=y(s.items??[]),i=y(!1),o=y(u.value),c=y(""),m=t;function p(){o.value!==u.value&&(m("submit",o.value),me(s.entry,o.value,c.value))}return Z((async()=>{if(!r.value.length)try{const e=await G(H(s.entry.CensusPlayer,ee));if(!te(e))return void(i.value=!0);r.value=e.cargoquery.map((e=>e.title.Name)),m("ready",r.value),i.value=!1}catch(e){i.value=!0,console.error("Something went wrong:",e)}})),(a,t)=>(l(),d("article",null,[e("header",Se,[$e,e("p",null,"Change Census Base for "+v(a.entry.CensusPlayer),1)]),1===r.value.length?(l(),d("div",Re,[Be,C(K,{entry:a.entry,text:"Create New Base"},null,8,["entry"])])):r.value.length?(l(),d(S,{key:1},[(l(!0),d(S,null,N(r.value,(a=>(l(),d("div",Pe,[e("label",{for:a,"aria-disabled":a===n.value||a===u.value&&!n.value,class:"base-selector"},[B(e("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),disabled:a===n.value||a===u.value&&!n.value,id:a,value:a,name:"bases",type:"radio"},null,8,Ie),[[ne,o.value]]),e("span",null,v(a)+" "+v(a===n.value?"[Requested]":"")+" "+v(a!==u.value||n.value?"":"[Active]"),1)],8,xe),e("a",{href:g(fe)(a),rel:"noopener noreferrer",target:"_blank"},"View Wiki Page",8,qe)])))),256)),B(e("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),"aria-label":"Reason (optional)",class:"reason-input",placeholder:"Reason (optional)",type:"text"},null,512),[[O,c.value]])],64)):i.value?(l(),d("p",Ne,"Something went wrong!")):(l(),E(se,{key:2})),B(e("footer",null,[e("form",{id:"request-close-form",method:"dialog",onSubmit:t[2]||(t[2]=e=>a.$emit("close"))},[e("button",{onClick:p},"Submit"),Ee],32)],512),[[ae,r.value.length>1]])]))}}),Le=D(Me,[["__scopeId","data-v-aa2020fb"]]),m=e=>(M("data-v-78f2e0c4"),e=e(),L(),e),De={class:"census-item"},Ue={class:"player-name text-bold"},Te={class:"table-items"},Ve={key:0},Ae=m((()=>e("div",{class:"heading"},"Discord:",-1))),We={key:1},Fe=m((()=>e("div",{class:"heading"},"Social Media:",-1))),ze={class:"link is-social"},Je={key:2},Oe=m((()=>e("div",{class:"heading"},"Friend Code:",-1))),je={class:"friend-code"},Ke=m((()=>e("div",{class:"heading"},"Base:",-1))),Ye={class:"link"},Qe=m((()=>e("div",{class:"heading"},"System:",-1))),Xe=m((()=>e("div",{class:"heading"},"Platform:",-1))),Ze=m((()=>e("div",{class:"heading"},"Mode:",-1))),Ge=m((()=>e("div",{class:"heading"},"Arrival:",-1))),He=m((()=>e("summary",{role:"button"},"Actions",-1))),et={class:"action-buttons"},tt=["href"],st=P({__name:"CensusItem",props:{entry:{}},setup(a){const t=a,s=localStorage.getItem(q)??"{}",n=JSON.parse(s),u=y(n[t.entry.CensusPlayer]);u.value===t.entry.Name&&(delete n[t.entry.CensusPlayer],localStorage.setItem(q,JSON.stringify(n)));const r=y(null),i=y(!1),o=oe(),{triesExceeded:c}=j(o),m=w((()=>t.entry.renewed?"Already renewed":t.entry.renewRequested?"Renewal Requested":c.value?"Too Many Requests":`Request Renewal for ${le}`)),p=()=>{he(),i.value=!0,r.value?.showModal()},f=()=>{r.value?.close(),i.value=!1},h=y(),b=e=>h.value=e;function k(e){u.value=e,n[t.entry.CensusPlayer]=e,localStorage.setItem(q,JSON.stringify(n))}return(a,t)=>(l(),d(S,null,[e("article",De,[e("p",Ue,v(a.entry.CensusPlayer),1),e("div",Te,[a.entry.CensusDiscord?(l(),d("div",Ve,[Ae,e("div",null,v(a.entry.CensusDiscord),1)])):R("",!0),a.entry.CensusReddit?(l(),d("div",We,[Fe,e("div",ze,[C(W,{wikitext:a.entry.CensusReddit},null,8,["wikitext"])])])):R("",!0),a.entry.CensusFriend?(l(),d("div",Je,[Oe,e("div",je,v(a.entry.CensusFriend),1)])):R("",!0),e("div",null,[Ke,e("div",Ye,[C(W,{wikitext:a.entry.Name},null,8,["wikitext"])])]),e("div",null,[Qe,e("div",null,v(a.entry.System),1)]),e("div",null,[Xe,e("div",null,v(a.entry.Platform),1)]),e("div",null,[Ze,e("div",null,v(a.entry.Mode),1)]),e("div",null,[Ge,e("div",null,v(a.entry.CensusArrival.toLocaleDateString()),1)])]),e("details",null,[He,e("article",et,[C(pe,{"user-object":a.entry,"data-tooltip":m.value,"button-text":"Renew","button-text-failed":"Failed!","button-text-success":"Renewed!"},null,8,["user-object","data-tooltip"]),e("button",{"data-tooltip":"Change Census Base",type:"button",onClick:p}," Change "),e("a",{href:`./form.html?update=${g(z)(a.entry.CensusPlayer)}`,"data-tooltip":"Update Census Base",role:"button",onClick:t[0]||(t[0]=e=>g(J)(a.entry))},"Update",8,tt),C(K,{entry:a.entry,"data-tooltip":"New Census Base",text:"New"},null,8,["entry"])])])]),e("dialog",{ref_key:"changeBaseModal",ref:r,onClick:re(f,["self"])},[i.value?(l(),E(Le,{key:0,entry:a.entry,items:h.value,requested:u.value,onClose:f,onReady:b,onSubmit:k},null,8,["entry","items","requested"])):R("",!0)],512)],64))}}),at=D(st,[["__scopeId","data-v-78f2e0c4"]]),T=e=>(M("data-v-86c89647"),e=e(),L(),e),nt=T((()=>e("h1",{class:"title"},"Eisvana Census Table",-1))),ot={class:"layout-table"},lt={class:"top-row"},rt=T((()=>e("option",{value:""},"All",-1))),it=["value"],ut=T((()=>e("hr",null,null,-1))),dt={key:0,class:"census-items"},ct=P({__name:"CensusTable",setup(a){const t=ie(),{censusData:s,availableRevisions:n}=j(t),u=y(""),r=y(""),i=y([]);function o({Name:e,CensusPlayer:a,CensusDiscord:t,CensusReddit:l,Mode:s,Platform:n,System:i,CensusFriend:o,CensusRenewal:d}){return!(u.value&&!d.includes(u.value))&&[e,a,t,l,s,n,i,o].map((e=>e?.trim().toLowerCase())).some((e=>e?.includes(r.value.toLowerCase())))}ue((()=>u.value=n.value[0]?.toString()));const c=w((()=>u.value?s.value.filter((e=>e.CensusRenewal.includes(u.value))):s.value)),m=w((()=>c.value.length)),p=w((()=>c.value.filter(o).toReversed())),f=e=>i.value=e;return(a,t)=>{const o=de("search");return l(),d(S,null,[nt,e("div",ot,[e("div",lt,[e("p",null,"Census count: "+v(m.value),1),C(o,{class:"search-wrapper"},{default:A((()=>[B(e("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),"aria-label":"Search Name",placeholder:"Search Player",type:"search"},null,512),[[O,r.value,void 0,{trim:!0}]])])),_:1}),e("div",null,[B(e("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),"aria-label":"Select Revision"},[rt,(l(!0),d(S,null,N(g(n),(e=>(l(),d("option",{value:e},v(e),9,it)))),256))],512),[[ce,u.value,void 0,{trim:!0}]])])]),ut,C(_e,{data:p.value,"page-size":g(ye),onChange:f},null,8,["data","page-size"]),C(ve,null,{default:A((()=>[g(s).length?(l(),d("div",dt,[(l(!0),d(S,null,N(i.value,(e=>(l(),E(at,{entry:e,key:e.CensusPlayer},null,8,["entry"])))),128))])):R("",!0)])),_:1})])],64)}}}),Ct=D(ct,[["__scopeId","data-v-86c89647"]]);export{Ct as default};
