import{d as g,o,c as l,a as t,t as p,_ as y,r as m,D as b,Z as O,s as R,I as z,L as N,m as j,K as D,a8 as B,a9 as M,i as S,F as h,k as v}from"./main-BYFi0986.js";import{r as T,b as q,d as F}from"./delay-DQgtH6i3.js";const I={class:"text-center"},L={class:"confirm-options",id:"renew-close-form",method:"dialog"},V=g({__name:"ConfirmDialog",props:{userName:{}},emits:["confirm"],setup(e,{emit:a}){const s=a;return(e,a)=>(o(),l("article",null,[t("header",null,[a[1]||(a[1]=t("button",{"aria-label":"Close",class:"close",form:"renew-close-form"},null,-1)),t("p",I,"Confirm renewal of "+p(e.userName)+"?",1)]),t("form",L,[t("button",{onClickOnce:a[0]||(a[0]=e=>s("confirm"))},"Renew",32),a[2]||(a[2]=t("button",{class:"secondary"},"Cancel",-1))])]))}}),W=y(V,[["__scopeId","data-v-28ee97f4"]]);async function Z(e){await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:`${e.CensusPlayer} requested renewal.\n<${q(e.Name)}>`})})}function x(){const e=document.activeElement;e instanceof HTMLElement&&e.blur()}const A=["aria-busy","disabled"],H=g({__name:"RenewButton",props:{userObject:{},buttonText:{},buttonTextFailed:{},buttonTextSuccess:{}},setup(e){const a=e,s=m(!1),u=m(!1),n=m(!1),c=m(null);function i(){x(),c.value?.showModal(),x()}const r=()=>c.value?.close(),v=b((()=>s.value?"":u.value?a.buttonTextFailed:n.value&&a.buttonTextSuccess?a.buttonTextSuccess:a.buttonText)),d=O(),{tries:y,requested:f,triesExceeded:g}=R(d),k=b((()=>g.value||a.userObject.renewRequested||a.userObject.renewed));async function C(){if(!T||k.value)return;const e=a.userObject.CensusPlayer;s.value=!0;try{await Z(a.userObject),n.value=!0,a.userObject.renewRequested=!0,M(f,y,e)}catch(e){u.value=!0,console.warn(e)}finally{s.value=!1,setTimeout((()=>{n.value=!1,u.value=!1}),F)}}return(e,a)=>(o(),l("div",null,[t("button",{"aria-busy":s.value,class:z([{"is-danger":u.value},"renew-button"]),disabled:k.value,type:"button",onClick:i},p(v.value),11,A),(o(),N(B,{to:"body"},[t("dialog",{ref_key:"dialogElement",ref:c,onClick:D(r,["self"])},[j(W,{"user-name":e.userObject.CensusPlayer,onConfirm:C},null,8,["user-name"])],512)]))]))}}),ie=y(H,[["__scopeId","data-v-56ffbe31"]]),re=15,ce=50,J={key:0,class:"page-select-wrapper"},K={class:"page-select-item"},G=["disabled"],Q={class:"page-select-item"},U={key:0,class:"placeholder"},X={key:1,class:"page-select-item"},Y={type:"button"},ee={key:2,class:"page-select-item"},te={key:0,class:"placeholder"},se={class:"page-select-item"},ae={class:"page-select-item"},ne=["disabled"],oe=g({__name:"Pagination",props:{data:{},pageSize:{}},emits:["change"],setup(e,{emit:a}){const s=e,u=a,n=m(1),c=b((()=>n.value-1)),i=b((()=>Math.ceil(s.data.length/s.pageSize))),r=b((()=>s.data.slice(c.value*s.pageSize,c.value*s.pageSize+s.pageSize)));return S((()=>{(n.value>i.value||n.value<1)&&(n.value=1)})),S((()=>u("change",r.value))),(e,a)=>i.value>1?(o(),l("div",J,[t("div",K,[t("button",{disabled:1===n.value,class:"outline",type:"button",onClick:a[0]||(a[0]=e=>n.value--)}," < ",8,G)]),n.value>2?(o(),l(h,{key:0},[t("div",Q,[t("button",{class:"outline",type:"button",onClick:a[1]||(a[1]=e=>n.value=1)}," 1 ")]),n.value-2!=1?(o(),l("div",U," ... ")):v("",!0)],64)):v("",!0),n.value-1>0?(o(),l("div",X,[(o(),l("button",{key:n.value-1,class:"outline",type:"button",onClick:a[2]||(a[2]=e=>n.value--)},p(n.value-1),1))])):v("",!0),(o(),l("div",{key:n.value,class:"page-select-item"},[t("button",Y,p(n.value),1)])),n.value+1<=i.value?(o(),l("div",ee,[(o(),l("button",{key:n.value+1,class:"outline",type:"button",onClick:a[3]||(a[3]=e=>n.value++)},p(n.value+1),1))])):v("",!0),n.value<i.value-1?(o(),l(h,{key:3},[n.value+2!==i.value?(o(),l("div",te," ... ")):v("",!0),t("div",se,[t("button",{class:"outline",type:"button",onClick:a[4]||(a[4]=e=>n.value=i.value)},p(i.value),1)])],64)):v("",!0),t("div",ae,[t("button",{disabled:n.value===i.value,class:"outline",type:"button",onClick:a[5]||(a[5]=e=>n.value++)}," > ",8,ne)])])):v("",!0)}}),de=y(oe,[["__scopeId","data-v-6ae68162"]]);export{de as P,ie as R,x as b,ce as r,re as t};