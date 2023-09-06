"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[89790],{6470:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),s=n(13352),l=n(7426);function i(e){let{name:t}=e;const n=(0,l.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),i=[];let a=[];for(let l=0;l<n.docs.length;l++){const{contentTitle:e,excerpt:t,path:o,frontMatter:c}=n.docs[l];a.push(r.createElement(s.Z,{to:o,size:"sm",title:c?.title||e,description:c?.description||t})),(2==a.length||n.docs.length<2||l==n.docs.length-1)&&(i.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},a)),a=[])}return r.createElement(r.Fragment,null,i)}},13352:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(59496),s=n(45924),l=n(62515);function i(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function a(e){let{size:t,title:n,icon:s}=e;return s?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(i,{size:t,title:n}),s):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(i,{size:t,title:n})):null}function o(e){let{to:t,note:n=!1,size:i="",title:o,img:c="",icon:m=!1,description:u=!1,descriptionLink:d=!1}=e;i=i.toLowerCase();let g=(0,s.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==i,"ngrok--card-lg":"lg"==i,"ngrok--card-xl":"xl"==i});return r.createElement(l.Z,{to:t},r.createElement("div",{className:g},c&&r.createElement("img",{src:c}),r.createElement(a,{size:i,title:o,icon:m}),u&&r.createElement("p",null,u),d&&r.createElement("a",null,d)))}},35147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(51163),s=(n(59496),n(49613)),l=n(6470);const i={name:"trustelem",title:"Wallix Trustelem Integration Hub",sidebar_label:"Trustelem (Wallix)",description:"Secure access to ngrok tunnels with Wallix Trustelem SSO. \nNo VPNs, Firewalls, or complex network rules required.\n",excerpt:"Secure access to ngrok tunnels with Wallix Trustelem SSO.\n"},a=void 0,o={unversionedId:"integrations/trustelem/index",id:"integrations/trustelem/index",title:"Wallix Trustelem Integration Hub",description:"Secure access to ngrok tunnels with Wallix Trustelem SSO. \nNo VPNs, Firewalls, or complex network rules required.\n",source:"@site/docs/integrations/trustelem/index.mdx",sourceDirName:"integrations/trustelem",slug:"/integrations/trustelem/",permalink:"/docs/integrations/trustelem/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/trustelem/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"trustelem",title:"Wallix Trustelem Integration Hub",sidebar_label:"Trustelem (Wallix)",description:"Secure access to ngrok tunnels with Wallix Trustelem SSO. \nNo VPNs, Firewalls, or complex network rules required.\n",excerpt:"Secure access to ngrok tunnels with Wallix Trustelem SSO.\n"},sidebar:"docs",previous:{title:"Trend Micro Webhooks",permalink:"/docs/integrations/trendmicro/webhooks"},next:{title:"Wallix Trustelem SSO (OpenID Connect)",permalink:"/docs/integrations/trustelem/sso-oidc"}},c={},m=[],u={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,i.description),(0,s.kt)(l.Z,{name:i.name,mdxType:"IntegrationPageList"}))}g.isMDXComponent=!0}}]);