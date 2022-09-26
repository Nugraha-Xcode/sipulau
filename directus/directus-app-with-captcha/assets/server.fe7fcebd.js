import{a as l,o as i,b as h,w as e,h as s,e as o,E as n}from"./runtime-core.esm-bundler.15edf3c4.js";const p={class:"markdown-body"},u=n("Provides detailed information about the project server, its schema, and its health. "),d=n("Learn more about Projects"),_=n("."),j=s("hr",null,null,-1),g=s("h2",{id:"get-openapi-specification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-openapi-specification"},"#"),n(" Get OpenAPI Specification")],-1),m=s("p",null,"Retrieve the OpenAPI spec for the current project.",-1),f=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"This OAS spec is based on the read permissions of the currently authenticated user.")],-1),b=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),n(" Returns")],-1),y=s("p",null,[n("Object conforming to "),s("a",{href:"https://swagger.io/specification",target:"_blank",rel:"noopener noreferrer"},"the OpenAPI Specification")],-1),v=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),n(" REST API")],-1),x=s("pre",null,[s("code",null,`GET /server/specs/oas
`)],-1),q=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),n(" GraphQL")],-1),k=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),S=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	server_specs_oas:`),s("span",{class:"hljs-type"}," String"),n(`
}
`)])],-1),T=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),n(" Example")],-1),w=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	server_specs_oas
}
`)])],-1),P=s("hr",null,null,-1),I=s("h2",{id:"get-graphql-sdl",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-graphql-sdl"},"#"),n(" Get GraphQL SDL")],-1),A=s("p",null,"Retrieve the GraphQL SDL for the current project.",-1),E=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The SDL is based on the permissions of the currently authenticated user.")],-1),G=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),n(" Returns")],-1),L=s("p",null,"GraphQL SDL file.",-1),R=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),n(` about_us {
  id:`),s("span",{class:"hljs-type"}," Int"),n(`
  introduction:`),s("span",{class:"hljs-type"}," String"),n(`
  our_process:`),s("span",{class:"hljs-type"}," String"),n(`
  sales_email:`),s("span",{class:"hljs-type"}," String"),n(`
  general_email:`),s("span",{class:"hljs-type"}," String"),n(`
  primary_color:`),s("span",{class:"hljs-type"}," String"),n(`
  secondary_color:`),s("span",{class:"hljs-type"}," String"),n(`
  logo: directus_files
  mark: directus_files
}

`),s("span",{class:"hljs-keyword"},"type"),n(` articles {
  id:`),s("span",{class:"hljs-type"}," Int"),n(`
  status:`),s("span",{class:"hljs-type"}," String"),n(`
	`),s("span",{class:"hljs-keyword"},"..."),n(`
`),s("span",{class:"hljs-comment"},"# etc"),n(`
`)])],-1),Q=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),n(" REST API")],-1),O=s("pre",null,[s("code",null,`GET /server/specs/graphql/
GET /server/specs/graphql/system
`)],-1),D=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),n(" GraphQL")],-1),C=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),H=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	server_specs_graphql(scope: graphql_sdl_scope):`),s("span",{class:"hljs-type"}," String"),n(`
}
`)])],-1),V=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),n(" Example")],-1),B=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	server_specs_graphql(scope: `),s("span",{class:"hljs-string"},'"system"'),n(`)
}
`)])],-1),N=s("hr",null,null,-1),U=s("h2",{id:"ping",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ping"},"#"),n(" Ping")],-1),W=s("p",null,"Ping\u2026 pong! \u{1F3D3}",-1),z=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),n(" Returns")],-1),F=s("p",null,"Pong.",-1),J=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),n(" REST API")],-1),K=s("pre",null,[s("code",null,`GET /server/ping
`)],-1),M=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),n(" GraphQL")],-1),X=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Y=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	server_ping:`),s("span",{class:"hljs-type"}," String"),n(`
}
`)])],-1),Z=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),n(" Example")],-1),$=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	server_ping
}
`)])],-1),ss=s("hr",null,null,-1),ns=s("h2",{id:"info",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#info"},"#"),n(" Info")],-1),es=s("p",null,"Information about the current installation.",-1),ts=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The public information is returned for everybody. Admin users get additional information (see below).")],-1),as=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),n(" Returns")],-1),ls=s("p",null,[s("code",null,"project"),n(),s("strong",null,"object"),s("br"),n(" Public information about the project. Used to render the Admin App public pages.")],-1),os=n("See "),rs=n("the settings object"),cs=n(" for more information on the individual properties of the "),is=s("code",null,"project",-1),hs=n(" object."),ps=s("p",null,"Logged in users also get the following information:",-1),us=s("p",null,[s("code",null,"rateLimit"),n(),s("strong",null,"false | object"),s("br"),n(" Whether or not the rate limiter is enabled.")],-1),ds=s("p",null,[s("code",null,"rateLimit.points"),n(),s("strong",null,"number"),s("br"),n(" If rate-limiter is enabled, amount of allowed points per duration")],-1),_s=s("p",null,[s("code",null,"rateLimit.duration"),n(),s("strong",null,"number"),s("br"),n(" If rate-limiter is enabled, duration in seconds in which points are counted")],-1),js=s("p",null,"Admin users also get the following information:",-1),gs=s("p",null,[s("code",null,"directus.version"),n(),s("strong",null,"string"),s("br"),n(" Current version of Directus used.")],-1),ms=s("p",null,[s("code",null,"node.version"),n(),s("strong",null,"string"),s("br"),n(" Current version of Node used.")],-1),fs=s("p",null,[s("code",null,"node.uptime"),n(),s("strong",null,"integer"),s("br"),n(" How long the current process has been running.")],-1),bs=s("p",null,[s("code",null,"os.type"),n(),s("strong",null,"string"),s("br"),n(" What type of operation system is used.")],-1),ys=s("p",null,[s("code",null,"os.version"),n(),s("strong",null,"string"),s("br"),n(" What version of the operation system is used.")],-1),vs=s("p",null,[s("code",null,"os.uptime"),n(),s("strong",null,"string"),s("br"),n(" How long the operating system has been up.")],-1),xs=s("p",null,[s("code",null,"os.totalmem"),n(),s("strong",null,"string"),s("br"),n(" How much memory is available on the operating system.")],-1),qs=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),n(" REST API")],-1),ks=s("pre",null,[s("code",null,`GET /server/info
`)],-1),Ss=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),n(" GraphQL")],-1),Ts=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ws=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	server_info: server_info
}
`)])],-1),Ps=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),n(" Example")],-1),Is=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	server_info {
		directus {
			version
		}
	}
}
`)])],-1),As=s("hr",null,null,-1),Es=s("h2",{id:"health",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#health"},"#"),n(" Health")],-1),Gs=s("p",null,"Get the current health status of the server.",-1),Ls=s("p",null,[n("The "),s("code",null,"/server/health"),n(" endpoint shows you a general health status for the server and all connected (third party) services, such as Redis or S3.")],-1),Rs=s("p",null,[n("The output is based on the \u201CHealth Check Response for HTTP APIs\u201D draft spec: "),s("a",{href:"https://tools.ietf.org/id/draft-inadarei-api-health-check-05.html",target:"_blank",rel:"noopener noreferrer"},"Health Check Response Format for HTTP APIs Draft Specification"),n(".")],-1),Qs=s("p",null,"This endpoint can be used to ensure a healthy system when running in a horizontally scaled setup, like Kubernetes, Google Cloud Platform or AWS Elastic Beanstalk.",-1),Os=s("p",null,[n("By default, the endpoint only returns a "),s("code",null,"status"),n(" of "),s("code",null,"ok"),n(", "),s("code",null,"warn"),n(" or "),s("code",null,"error"),n(". By authenticating as an admin, it will return more in-depth information about the current health status of the system.")],-1),Ds=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// Response"),n(`

`),s("span",{class:"hljs-comment"},"// Non-admin"),n(`
`),s("span",{class:"hljs-punctuation"},"{"),n(`
  `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`

`),s("span",{class:"hljs-comment"},"// Admin"),n(`
`),s("span",{class:"hljs-punctuation"},"{"),n(`
  `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
  `),s("span",{class:"hljs-attr"},'"releaseId"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"9.0.0"'),s("span",{class:"hljs-punctuation"},","),n(`
  `),s("span",{class:"hljs-attr"},'"serviceId"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"3292c816-ae02-43b4-ba91-f0bb549f040c"'),s("span",{class:"hljs-punctuation"},","),n(`
  `),s("span",{class:"hljs-attr"},'"checks"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
    `),s("span",{class:"hljs-attr"},'"pg:responseTime"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),n(`
      `),s("span",{class:"hljs-punctuation"},"{"),n(`
        `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"componentType"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"datastore"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedUnit"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ms"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedValue"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"0.489"),n(`
      `),s("span",{class:"hljs-punctuation"},"}"),n(`
    `),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),n(`
    `),s("span",{class:"hljs-attr"},'"pg:connectionsAvailable"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),n(`
      `),s("span",{class:"hljs-punctuation"},"{"),n(`
        `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"componentType"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"datastore"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedValue"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"2"),n(`
      `),s("span",{class:"hljs-punctuation"},"}"),n(`
    `),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),n(`
    `),s("span",{class:"hljs-attr"},'"pg:connectionsUsed"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),n(`
      `),s("span",{class:"hljs-punctuation"},"{"),n(`
        `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"componentType"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"datastore"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedValue"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"0"),n(`
      `),s("span",{class:"hljs-punctuation"},"}"),n(`
    `),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),n(`
    `),s("span",{class:"hljs-attr"},'"storage:local:responseTime"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),n(`
      `),s("span",{class:"hljs-punctuation"},"{"),n(`
        `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"componentType"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"objectstore"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedValue"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"1.038"),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"observedUnit"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ms"'),n(`
      `),s("span",{class:"hljs-punctuation"},"}"),n(`
    `),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),n(`
    `),s("span",{class:"hljs-attr"},'"email:connection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),n(`
      `),s("span",{class:"hljs-punctuation"},"{"),n(`
        `),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"ok"'),s("span",{class:"hljs-punctuation"},","),n(`
        `),s("span",{class:"hljs-attr"},'"componentType"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"email"'),n(`
      `),s("span",{class:"hljs-punctuation"},"}"),n(`
    `),s("span",{class:"hljs-punctuation"},"]"),n(`
  `),s("span",{class:"hljs-punctuation"},"}"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),Cs=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),n(" Returns")],-1),Hs=s("p",null,[s("code",null,"status"),n(),s("strong",null,"string"),s("br"),n(" One of "),s("code",null,"ok"),n(", "),s("code",null,"warn"),n(", "),s("code",null,"error"),n(".")],-1),Vs=s("p",null,"Authenticated admin users also get the following information:",-1),Bs=s("p",null,[s("code",null,"releaseId"),n(),s("strong",null,"string"),s("br"),n(" Directus version in use.")],-1),Ns=s("p",null,[s("code",null,"serviceId"),n(),s("strong",null,"string"),s("br"),n(" UUID of the current Directus instance.")],-1),Us=s("p",null,[s("code",null,"checks"),n(),s("strong",null,"array"),s("br"),n(" Array with the status of all individually connected services.")],-1),Ws=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),n(" REST API")],-1),zs=s("pre",null,[s("code",null,`GET /server/health
`)],-1),Fs=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),n(" GraphQL")],-1),Js=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ks=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	server_health:`),s("span",{class:"hljs-literal"}," JSON"),n(`
}
`)])],-1),Ms=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),n(" Example")],-1),Xs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	server_health
}
`)])],-1),Ys=s("hr",null,null,-1),en="Server",tn=!1,an="REST and GraphQL API documentation on the Server collection in Directus.",ln="4 min read",on="page-reference",rn={name:"server",setup(Zs,{expose:r}){const t={title:"Server",modularExtension:!1,description:"REST and GraphQL API documentation on the Server collection in Directus.",readTime:"4 min read",pageClass:"page-reference"};return r({frontmatter:t}),($s,sn)=>{const a=l("router-link"),c=l("docs-wrapper");return i(),h(c,{frontmatter:t},{default:e(()=>[s("div",p,[s("blockquote",null,[s("p",null,[u,o(a,{to:"/docs/getting-started/glossary#projects"},{default:e(()=>[d]),_:1}),_])]),j,g,m,f,b,y,v,x,q,k,S,T,w,P,I,A,E,G,L,R,Q,O,D,C,H,V,B,N,U,W,z,F,J,K,M,X,Y,Z,$,ss,ns,es,ts,as,ls,s("p",null,[os,o(a,{to:"/docs/reference/system/settings#the-settings-object"},{default:e(()=>[rs]),_:1}),cs,is,hs]),ps,us,ds,_s,js,gs,ms,fs,bs,ys,vs,xs,qs,ks,Ss,Ts,ws,Ps,Is,As,Es,Gs,Ls,Rs,Qs,Os,Ds,Cs,Hs,Vs,Bs,Ns,Us,Ws,zs,Fs,Js,Ks,Ms,Xs,Ys])]),_:1})}}};export{rn as default,an as description,tn as modularExtension,on as pageClass,ln as readTime,en as title};
