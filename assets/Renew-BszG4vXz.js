import{d as w,z as f,o as s,c as a,a as o,t as x,m as i,F as d,_ as b,a0 as C,s as R,r as g,e as p,x as y,b as k,k as _,H as D,Z as N,a1 as j,a2 as S,w as B,g as P}from"./main-DswCvDU9.js";import{R as T,r as U,P as q}from"./Pagination-C6xlMgWs.js";import{r as E}from"./delay-MUR3v-8w.js";const L=w({__name:"UserRow",props:{userObject:{}},setup(e){const t=e,l=f((()=>t.userObject.CensusPlayer)),r=f((()=>t.userObject.renewed?"Already renewed":t.userObject.renewRequested?"Renewal Requested":"Request Renewal"));return(e,t)=>(s(),a(d,null,[o("div",null,x(l.value),1),i(T,{"button-text":r.value,"user-object":e.userObject,"button-text-failed":"Request Failed!"},null,8,["button-text","user-object"])],64))}}),V=b(L,[["__scopeId","data-v-e8c55d77"]]),z={class:"table"},O={key:0,class:"register-cta"},$=w({__name:"UserTable",props:{filter:{}},setup(e){const t=e,l=C(),{censusData:r}=R(l),n=g([]),u=f((()=>r.value.filter((e=>e.CensusPlayer.toLowerCase().includes(t.filter.toLowerCase()))))),c=e=>n.value=e;return(e,t)=>p(r).length?(s(),a(d,{key:0},[i(q,{data:u.value,"page-size":p(U),onChange:c},null,8,["data","page-size"]),o("div",z,[(s(!0),a(d,null,y(n.value,(e=>(s(),D(V,{key:e.CensusPlayer,"user-object":e},null,8,["user-object"])))),128))]),u.value.length?_("",!0):(s(),a("div",O,t[0]||(t[0]=[k(" Not on the census?"),o("br",null,null,-1),o("a",{href:"./form.html"},"Register now!",-1)])))],64)):_("",!0)}}),F=b($,[["__scopeId","data-v-b1a1a1f4"]]),I={key:0,class:"warning"},W={key:1,class:"warning"},A=w({__name:"Renew",setup(e){const t=g(""),l=N(),{triesExceeded:r}=R(l);return(e,l)=>{const n=j("search");return s(),a(d,null,[l[1]||(l[1]=o("h1",{class:"title"},"Eisvana Census Renewal",-1)),p(E)?_("",!0):(s(),a("p",I," No Webhook URL found, no message will be sent! ")),i(n,null,{default:S((()=>[B(o("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),"aria-label":"Search Name",id:"searchBar",name:"searchBar",placeholder:"Search Name",type:"search"},null,512),[[P,t.value,void 0,{trim:!0}]])])),_:1}),p(r)?(s(),a("p",W," You have requested too many renewals. Please contact Lenni on Discord for help. ")):_("",!0),i(F,{filter:t.value},null,8,["filter"])],64)}}}),Z=b(A,[["__scopeId","data-v-967d52d4"]]);export{Z as default};
