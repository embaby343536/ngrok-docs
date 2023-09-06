"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[58381],{6470:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(59496),r=n(13352),i=n(7426);function a(e){let{name:t}=e;const n=(0,i.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),a=[];let o=[];for(let i=0;i<n.docs.length;i++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[i];o.push(s.createElement(r.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==o.length||n.docs.length<2||i==n.docs.length-1)&&(a.push(s.createElement("div",{className:"ngrok--cards ngrok--cards-row"},o)),o=[])}return s.createElement(s.Fragment,null,a)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(59496),r=n(45924),i=n(62515);function a(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return s.createElement("h4",{className:"fw-600"},n);case"xl":return s.createElement("h2",{className:"fw-600"},n);default:return s.createElement("h3",{className:"fw-600"},n)}}function o(e){let{size:t,title:n,icon:r}=e;return r?s.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&s.createElement(a,{size:t,title:n}),r):n?s.createElement("div",{className:"ngrok--card-heading"},s.createElement(a,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:a="",title:c,img:l="",icon:d=!1,description:u=!1,descriptionLink:m=!1}=e;a=a.toLowerCase();let g=(0,r.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==a,"ngrok--card-lg":"lg"==a,"ngrok--card-xl":"xl"==a});return s.createElement(i.Z,{to:t},s.createElement("div",{className:g},l&&s.createElement("img",{src:l}),s.createElement(o,{size:a,title:c,icon:d}),u&&s.createElement("p",null,u),m&&s.createElement("a",null,m)))}},20683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(51163),r=(n(59496),n(49613)),i=n(6470);const a={name:"mux",title:"Mux Integration Hub",sidebar_label:"Mux",description:"Listen to Mux events like asset status transitions or when live streams\nstart or end. All with security and access from ngrok.\n",excerpt:"Securely listen to your Mux events and transitions using ngrok.\n"},o=void 0,c={unversionedId:"integrations/mux/index",id:"integrations/mux/index",title:"Mux Integration Hub",description:"Listen to Mux events like asset status transitions or when live streams\nstart or end. All with security and access from ngrok.\n",source:"@site/docs/integrations/mux/index.mdx",sourceDirName:"integrations/mux",slug:"/integrations/mux/",permalink:"/docs/integrations/mux/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/mux/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"mux",title:"Mux Integration Hub",sidebar_label:"Mux",description:"Listen to Mux events like asset status transitions or when live streams\nstart or end. All with security and access from ngrok.\n",excerpt:"Securely listen to your Mux events and transitions using ngrok.\n"},sidebar:"docs",previous:{title:"MongoDB Webhooks",permalink:"/docs/integrations/mongodb/webhooks"},next:{title:"Mux Webhooks",permalink:"/docs/integrations/mux/webhooks"}},l={},d=[],u={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,a.description),(0,r.kt)(i.Z,{name:a.name,mdxType:"IntegrationPageList"}))}g.isMDXComponent=!0}}]);