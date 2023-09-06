"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[56852],{6470:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(59496),o=n(13352),r=n(7426);function a(e){let{name:t}=e;const n=(0,r.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),a=[];let s=[];for(let r=0;r<n.docs.length;r++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[r];s.push(i.createElement(o.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==s.length||n.docs.length<2||r==n.docs.length-1)&&(a.push(i.createElement("div",{className:"ngrok--cards ngrok--cards-row"},s)),s=[])}return i.createElement(i.Fragment,null,a)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(59496),o=n(45924),r=n(62515);function a(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return i.createElement("h4",{className:"fw-600"},n);case"xl":return i.createElement("h2",{className:"fw-600"},n);default:return i.createElement("h3",{className:"fw-600"},n)}}function s(e){let{size:t,title:n,icon:o}=e;return o?i.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&i.createElement(a,{size:t,title:n}),o):n?i.createElement("div",{className:"ngrok--card-heading"},i.createElement(a,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:a="",title:c,img:l="",icon:u=!1,description:g=!1,descriptionLink:d=!1}=e;a=a.toLowerCase();let m=(0,o.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==a,"ngrok--card-lg":"lg"==a,"ngrok--card-xl":"xl"==a});return i.createElement(r.Z,{to:t},i.createElement("div",{className:m},l&&i.createElement("img",{src:l}),i.createElement(s,{size:a,title:c,icon:u}),g&&i.createElement("p",null,g),d&&i.createElement("a",null,d)))}},84841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(51163),o=(n(59496),n(49613)),r=n(6470);const a={name:"github",title:"GitHub Integration Hub",sidebar_label:"GitHub",description:"Integrate your remote CI/CD tools with GitHub webhooks and secure access \nwith GitHub Login without poking your firewall or changing code.\n",excerpt:"Integrate CI/CD tools with your GitHub webhooks using ngrok\n"},s=void 0,c={unversionedId:"integrations/github/index",id:"integrations/github/index",title:"GitHub Integration Hub",description:"Integrate your remote CI/CD tools with GitHub webhooks and secure access \nwith GitHub Login without poking your firewall or changing code.\n",source:"@site/docs/integrations/github/index.mdx",sourceDirName:"integrations/github",slug:"/integrations/github/",permalink:"/docs/integrations/github/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/github/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"github",title:"GitHub Integration Hub",sidebar_label:"GitHub",description:"Integrate your remote CI/CD tools with GitHub webhooks and secure access \nwith GitHub Login without poking your firewall or changing code.\n",excerpt:"Integrate CI/CD tools with your GitHub webhooks using ngrok\n"},sidebar:"docs",previous:{title:"FusionAuth SSO (OpenID Connect)",permalink:"/docs/integrations/fusionauth/sso-oidc"},next:{title:"GitHub OAuth",permalink:"/docs/integrations/github/oauth"}},l={},u=[],g={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,a.description),(0,o.kt)(r.Z,{name:a.name,mdxType:"IntegrationPageList"}))}m.isMDXComponent=!0}}]);