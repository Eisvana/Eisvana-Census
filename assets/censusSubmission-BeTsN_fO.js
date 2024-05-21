import{a6 as M,Z as Q,a7 as D,u as _,a1 as z,a8 as q,f as ee,l as ae}from"./main-DxgA01JS.js";import{b as W,f as ne}from"./delay-Dh76jFQY.js";function ie(e){return e.map(((e,a)=>e.body||M.includes(e.heading.toLowerCase())?`${a?`==${e.heading}==`:""}\n${e.body}`.trim():"")).filter(Boolean).join("\n\n").replace(/\n{3,}/g,"\n\n").replace(/ {2,}/g," ")}function te({version:e,name:a,image:n,builderlink:i,builder:s,region:t,system:o,planet:r,moon:l,axes:c,glyphs:m,type:d,mode:g,platform:u,farm:p,geobay:y,landingpad:f,arena:b,terminal:w,racetrack:$,censusPlayer:h,censusReddit:I,censusSocial:C,censusDiscord:B,censusFriend:N,arrival:v,renew:A}){return{heading:"",body:`{{Version|${e}}}\n{{Eisvana}}\n{{Base infobox\n| name = ${a}\n| image = ${n}\n| civilized = ${Q}\n| researchteam =\n| builderlink = ${i}\n| builder = ${s}\n| galaxy = Eissentam\n| region = ${t}\n| system = ${o}\n| planet = ${r}\n| moon = ${l}\n| axes = ${c}\n| coordinates = {{Glyphs2Coords|${m}}}\n| portalglyphs = ${m}\n| type = ${d}\n| mode = ${g}\n| platform = ${u}\n| release = ${e}\n| farm = ${p}\n| geobay = ${y}\n| landingpad = ${f}\n| arena = ${b}\n| terminal = ${w}\n| racetrack = ${$}\n| censusplayer = ${h}\n| ${I?"censusreddit = "+I:"censussocial = "+C}\n| censusdiscord = ${B}\n| censusfriend = ${N}\n| censusarrival = ${v}\n| censusrenewal = ${A}\n| censusshow = Y\n}}\n'''${a}''' is a player base.`}}function se({name:e,system:a,planet:n,moon:i}){return{heading:"Summary",body:`'''${e}''' is a [[Habitable Base|player base]], located on the ${i?"moon [["+i+"]] of the ":""}planet [[${n}]] in the [[${a}]] system.`}}function oe({galleryPics:e}){return{heading:"Gallery",body:`<gallery>${e?"\n"+e:""}\n</gallery>`}}function ce(e){const a=te(e),n=se(e),i=oe(e),{sections:s}=e;return ie([a,n,...s,i])}const X={WEBP:"image/webp",JPEG:"image/jpeg"},H="b25tZXNzYWdlID0gYXN5bmMgKHsgZGF0YTogdCB9KSA9PiB7CiAgdHJ5IHsKICAgIGNvbnN0IGUgPSB7CiAgICAgIHN0YXR1czogInN1Y2Nlc3MiLAogICAgICBkYXRhOiBhd2FpdCBjKHQpCiAgICB9OwogICAgcG9zdE1lc3NhZ2UoZSk7CiAgfSBjYXRjaCAocykgewogICAgY29uc3QgciA9IHsKICAgICAgc3RhdHVzOiAiZXJyb3IiLAogICAgICBkYXRhOiBgQ291bGQgbm90IGNvbXByZXNzISAke3MgaW5zdGFuY2VvZiBFcnJvciA/IHMubWVzc2FnZSA6ICIifWAKICAgIH07CiAgICBwb3N0TWVzc2FnZShyKTsKICB9IGZpbmFsbHkgewogICAgY2xvc2UoKTsKICB9Cn07CmFzeW5jIGZ1bmN0aW9uIGMoeyBmaWxlOiB0LCBjb25maWc6IHMgfSkgewogIGNvbnN0IGUgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcCh0KSwgeyB3aWR0aDogciwgaGVpZ2h0OiBuIH0gPSBlLCBvID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhyLCBuKSwgYSA9IG8uZ2V0Q29udGV4dCgiYml0bWFwcmVuZGVyZXIiKTsKICByZXR1cm4gYSA9PSBudWxsIHx8IGEudHJhbnNmZXJGcm9tSW1hZ2VCaXRtYXAoZSksIGUuY2xvc2UoKSwgYXdhaXQgby5jb252ZXJ0VG9CbG9iKHMpOwp9Cg==",re=e=>Uint8Array.from(atob(e),(e=>e.charCodeAt(0))),E=typeof window<"u"&&window.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",re(H)],{type:"text/javascript;charset=utf-8"});function le(e){let a;try{if(a=E&&(window.URL||window.webkitURL).createObjectURL(E),!a)throw"";const n=new Worker(a,{type:"module",name:e?.name});return n.addEventListener("error",(()=>{(window.URL||window.webkitURL).revokeObjectURL(a)})),n}catch{return new Worker("data:text/javascript;base64,"+H,{type:"module",name:e?.name})}}async function me(e){return new Promise(((a,n)=>{const i=new le;i.postMessage(e),i.onmessage=({data:e})=>{if("error"===e.status)console.error(e.data),n(new Error(e.data));else{const n=e.data;a(n)}}}))}async function de(e,a={}){a.type??(a.type=X.JPEG),a.quality??(a.quality=.92);const n={originalType:e.type,...a};return await me({file:e,config:n})}async function L(e,a=1){if(e.size<D)return e;const n=X.JPEG,i=n.split("/").at(-1),s=await de(e,{quality:a,type:n}),t=a-.01;if(s.size>D)return await L(e,t);const o=`${e.name.split(".").slice(0,-1).join(".")}-min.${i}`;return new File([s],o,{type:n})}const T=e=>e.replaceAll(/['"[\]{} ]/g,"_"),K="requestedBaseChanges",g=e=>e?"Yes":"No";function ge(e,a){if(!e.file)return;const n=T(a),i=(e.file?.name??e.filename).split(".").at(-1),s=`${n}${e.id}.${i}`;return new File([e.file],s,{type:e.file.type})}async function fe(e){const a=_(),{version:n,baseData:i,playerData:s,imageData:t,region:o,sectionData:r}=a,{image:l,gallery:c}=t,{mode:m,platform:d}=i,{renewals:u}=s;u.includes(z)||u.push(z);const p=[];for(const e of c){const a=ge(e,i.baseName);if(!a)continue;const n=await L(a);e.file=n,e.filename=n.name,p.push(n)}const y=c.map((({desc:e,file:a,filename:n})=>e?`${a?.name??n}|${e}`:a?.name??n)).join("\n"),f=s.wikiName?"":s.player,b=`{{profile|${s.wikiName}}}`,w=s.social.split("/").at(-1),$=`[${s.social} ${w}]`,h=s.social?$:b,I=s.reddit?"":h,C=s.social||s.wikiName?I:"",B=l.file?.type,N=(l.file?.name??l.filename).split(".").at(-1),v=`${T(i.baseName)}-main.${N}`,A=l.file?new File([l.file],v,{type:B}):void 0,S=A?await L(A):void 0,G=ce({version:n,region:o,name:i.baseName,image:S?.name??l.filename,platform:d??"PC",mode:m??"Normal",builderlink:s.wikiName,builder:f,system:i.system,planet:i.planet,moon:i.moon,axes:i.axes,glyphs:i.glyphs,type:i.type,farm:g(i.farm),arena:g(i.arena),racetrack:g(i.racetrack),geobay:g(i.geobay),terminal:g(i.terminal),landingpad:g(i.landingpad),censusPlayer:s.player,censusDiscord:s.discord,censusReddit:s.reddit,censusSocial:C,censusFriend:s.friend,arrival:s.arrival,renew:u.join(", "),galleryPics:y,sections:r}),k=new File([G],`${i.baseName}.txt`,{type:"text/plain"}),Z=q(p);Z.unshift([k]),S&&Z[0].unshift(S);const j=Z.map(ue),F={allowed_mentions:{parse:[]},embeds:[{description:e,title:"New Census Submission!",image:{url:`attachment://${S?.name??l.filename}`},fields:[{name:"Player",value:s.player},{name:"Wikipage",value:W(i.baseName)},{name:"Timezone",value:s.shareTimezone?ee:"not disclosed"},{name:"Active Time",value:s.activeTime||"not disclosed"}]}],attachments:[{id:0,filename:S?.name??l.filename}]};S||(delete F.embeds[0].image,delete F.attachments),ae||(F.embeds[0].fields=F.embeds[0].fields.slice(0,-2)),j[0].append("payload_json",JSON.stringify(F));const P=j.map(U);await Promise.all(P);const X=localStorage.getItem(K)??"{}",Y=JSON.parse(X);delete Y[s.player],localStorage.setItem(K,JSON.stringify(Y))}function ue(e){const a=new FormData;return e.forEach(((e,n)=>a.append(`files[${n}]`,e))),a}async function we(e,a,n){const i=new FormData;i.append("payload_json",JSON.stringify({allowed_mentions:{parse:[]},embeds:[{title:"Census Base Change",fields:[{name:"Player",value:e.CensusPlayer},{name:"Old Base",value:W(e.Name)},{name:"New Base",value:W(a)},{name:"Reason",value:n||"No reason given"}]}]})),U(i)}async function U(e){await fetch(ne,{method:"POST",body:e})}export{we as a,K as l,fe as s};
