import{a as o,o as r,b as h,w as e,h as s,e as a,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=t("All events within Directus are tracked and stored in the activities collection. This gives you full accountability over everything that happens. "),u=t("Learn more about Activity"),_=t("."),m=s("hr",null,null,-1),y=s("h2",{id:"the-activity-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-activity-object"},"#"),t(" The Activity Object")],-1),g=s("p",null,[s("code",null,"action"),t(),s("strong",null,"string"),s("br"),t(" Action that was performed.")],-1),j=s("p",null,[s("code",null,"collection"),t(),s("strong",null,"string"),s("br"),t(" Collection identifier in which the item resides.")],-1),b=s("p",null,[s("code",null,"comment"),t(),s("strong",null,"string"),s("br"),t(" User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.")],-1),f=s("p",null,[s("code",null,"id"),t(),s("strong",null,"integer"),s("br"),t(" Unique identifier for the object.")],-1),v=s("p",null,[s("code",null,"ip"),t(),s("strong",null,"string"),s("br"),t(" The IP address of the user at the time the action took place.")],-1),x=s("p",null,[s("code",null,"item"),t(),s("strong",null,"string"),s("br"),t(" Unique identifier for the item the action applied to. This is always a string, even for integer primary keys.")],-1),q=s("p",null,[s("code",null,"timestamp"),t(),s("strong",null,"string"),s("br"),t(" When the action happened.")],-1),w=s("code",null,"user",-1),T=t(),k=s("strong",null,"many-to-one",-1),E=s("br",null,null,-1),A=t(" The user who performed this action. Many-to-one to "),R=t("users"),S=t("."),P=s("p",null,[s("code",null,"user_agent"),t(),s("strong",null,"string"),s("br"),t(" User agent string of the browser the user used when the action took place.")],-1),C=s("code",null,"revisions",-1),I=t(),L=s("strong",null,"one-to-many",-1),D=s("br",null,null,-1),Q=t(" Any changes that were made in this activity. One-to-many to "),G=t("revisions"),M=t("."),O=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"comment"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-number"},"5"),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"ip"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"139.178.128.0"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"item"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"1"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"timestamp"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"2021-02-02T12:50:26-05:00"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"2d321940-69f5-445f-be6b-c773fa58a820"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"user_agent"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Safari/605.1.15"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"revisions"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"4"),s("span",{class:"hljs-punctuation"},"]"),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),H=s("hr",null,null,-1),U=s("h2",{id:"list-activity-actions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-activity-actions"},"#"),t(" List Activity Actions")],-1),W=s("p",null,"Returns a list of activity actions.",-1),B=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),t(" Query Parameters")],-1),V=t("Supports all "),K=t("global query parameters"),N=t("."),z=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),t(" Returns")],-1),X=t("An array of up to "),F=t("limit"),J=t(),Y=s("a",{href:"#the-activity-object"},"activity objects",-1),Z=t(". If no items are available, data will be an empty array."),$=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),t(" REST API")],-1),ss=s("pre",null,[s("code",null,`GET /activity
SEARCH /activity
`)],-1),ts=t("Learn more about SEARCH ->"),es=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),t(" GraphQL")],-1),ns=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),as=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),t(` {
	activity: [directus_activity]
}
`)])],-1),ls=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),t(" Example")],-1),os=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),t(` {
	activity {
		`),s("span",{class:"hljs-keyword"},"..."),t(`
	}
}
`)])],-1),cs=s("hr",null,null,-1),is=s("h2",{id:"retrieve-activity-action",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-activity-action"},"#"),t(" Retrieve Activity Action")],-1),rs=s("p",null,"Returns a single activity action by primary key.",-1),hs=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),t(" Query Parameters")],-1),ds=t("Supports all "),ps=t("global query parameters"),us=t("."),_s=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),t(" Returns")],-1),ms=s("p",null,[t("Returns an "),s("a",{href:"#the-activity-object"},"activity object"),t(" if a valid identifier was provided.")],-1),ys=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),t(" REST API")],-1),gs=s("pre",null,[s("code",null,`GET /activity/:id
`)],-1),js=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),t(" GraphQL")],-1),bs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),fs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),t(` {
	activity_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),t(`!): directus_activity
}
`)])],-1),vs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),t(" Example")],-1),xs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),t(` {
	activity_by_id(id: `),s("span",{class:"hljs-number"},"15"),t(`) {
		`),s("span",{class:"hljs-keyword"},"..."),t(`
	}
}
`)])],-1),qs=s("hr",null,null,-1),ws=s("h2",{id:"create-a-comment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-comment"},"#"),t(" Create a Comment")],-1),Ts=s("p",null,"Creates a new comment on a given item.",-1),ks=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),t(" Request Body")],-1),Es=s("p",null,[s("code",null,"collection"),t(),s("strong",null,"Required"),s("br"),t(" Collection in which the item resides.")],-1),As=s("p",null,[s("code",null,"item"),t(),s("strong",null,"Required"),s("br"),t(" Primary Key of the item to comment on.")],-1),Rs=s("p",null,[s("code",null,"comment"),t(),s("strong",null,"Required"),s("br"),t(" The comment content. Supports Markdown.")],-1),Ss=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),t(" Returns")],-1),Ps=s("p",null,[t("Returns the "),s("a",{href:"#the-activity-object"},"activity object"),t(" of the created comment.")],-1),Cs=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),t(" REST API")],-1),Is=s("pre",null,[s("code",null,`POST /activity/comment
`)],-1),Ls=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),t(" Example")],-1),Ds=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /activity/comment"),t(`

`),s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"item"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-number"},"3"),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"comment"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Hello World"'),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),Qs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),t(" GraphQL")],-1),Gs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ms=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	create_comment(collection:`),s("span",{class:"hljs-type"}," String"),t("!, item:"),s("span",{class:"hljs-literal"}," ID"),t("!, comment:"),s("span",{class:"hljs-type"}," String"),t(`!): directus_activity
}
`)])],-1),Os=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),t(" Example")],-1),Hs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	create_comment(
		collection: `),s("span",{class:"hljs-string"},'"pages"'),t(`,
		item: `),s("span",{class:"hljs-number"},"3"),t(`,
		comment: `),s("span",{class:"hljs-string"},'"Hello World"'),t(`
	) { `),s("span",{class:"hljs-keyword"},"..."),t(` }
}
`)])],-1),Us=s("hr",null,null,-1),Ws=s("h2",{id:"update-a-comment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-comment"},"#"),t(" Update a Comment")],-1),Bs=s("p",null,"Updates an existing comment by activity action primary key.",-1),Vs=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),t(" Request Body")],-1),Ks=s("p",null,[s("code",null,"comment"),t(),s("strong",null,"Required"),s("br"),t(" The updated comment content. Supports Markdown.")],-1),Ns=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),t(" Returns")],-1),zs=s("p",null,[t("Returns the "),s("a",{href:"#the-activity-object"},"activity object"),t(" of the created comment.")],-1),Xs=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),t(" REST API")],-1),Fs=s("pre",null,[s("code",null,`PATCH /activity/comment/:id
`)],-1),Js=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),t(" Example")],-1),Ys=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /activity/comment/15"),t(`

`),s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"comment"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Hello World!!"'),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),Zs=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),t(" GraphQL")],-1),$s=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),st=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	update_comment(id:`),s("span",{class:"hljs-literal"}," ID"),t("!, comment:"),s("span",{class:"hljs-type"}," String"),t(`!): directus_activity
}
`)])],-1),tt=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),t(" Example")],-1),et=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	update_comment(
		id: `),s("span",{class:"hljs-number"},"3"),t(`,
		comment: `),s("span",{class:"hljs-string"},'"Hello World"'),t(`,
	) { `),s("span",{class:"hljs-keyword"},"..."),t(` }
}
`)])],-1),nt=s("hr",null,null,-1),at=s("h2",{id:"delete-a-comment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-comment"},"#"),t(" Delete a Comment")],-1),lt=s("p",null,"Deletes a comment.",-1),ot=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),t(" REST API")],-1),ct=s("pre",null,[s("code",null,`DELETE /activity/comment/:id
`)],-1),it=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),t(" Example")],-1),rt=s("pre",null,[s("code",null,`DELETE /activity/comment/15
`)],-1),ht=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),t(" GraphQL")],-1),dt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),pt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	delete_comment(id:`),s("span",{class:"hljs-literal"}," ID"),t(`): delete_one
}
`)])],-1),ut=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),t(" Example")],-1),_t=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	delete_comment(id: `),s("span",{class:"hljs-number"},"3"),t(`) {
		id
	}
}
`)])],-1),bt="Activity",ft=!1,vt="REST and GraphQL API documentation on the Activity collection in Directus.",xt="4 min read",qt="page-reference",wt={name:"activity",setup(mt,{expose:c}){const l={title:"Activity",modularExtension:!1,description:"REST and GraphQL API documentation on the Activity collection in Directus.",readTime:"4 min read",pageClass:"page-reference"};return c({frontmatter:l}),(yt,gt)=>{const n=o("router-link"),i=o("docs-wrapper");return r(),h(i,{frontmatter:l},{default:e(()=>[s("div",d,[s("blockquote",null,[s("p",null,[p,a(n,{to:"/docs/getting-started/glossary#activity"},{default:e(()=>[u]),_:1}),_])]),m,y,g,j,b,f,v,x,q,s("p",null,[w,T,k,E,A,a(n,{to:"/docs/reference/system/users#the-users-object"},{default:e(()=>[R]),_:1}),S]),P,s("p",null,[C,I,L,D,Q,a(n,{to:"/docs/reference/system/revisions#the-revisions-object"},{default:e(()=>[G]),_:1}),M]),O,H,U,W,B,s("p",null,[V,a(n,{to:"/docs/reference/query"},{default:e(()=>[K]),_:1}),N]),z,s("p",null,[X,a(n,{to:"/docs/reference/query#limit"},{default:e(()=>[F]),_:1}),J,Y,Z]),$,ss,s("p",null,[a(n,{to:"/docs/reference/introduction#search-http-method"},{default:e(()=>[ts]),_:1})]),es,ns,as,ls,os,cs,is,rs,hs,s("p",null,[ds,a(n,{to:"/docs/reference/query"},{default:e(()=>[ps]),_:1}),us]),_s,ms,ys,gs,js,bs,fs,vs,xs,qs,ws,Ts,ks,Es,As,Rs,Ss,Ps,Cs,Is,Ls,Ds,Qs,Gs,Ms,Os,Hs,Us,Ws,Bs,Vs,Ks,Ns,zs,Xs,Fs,Js,Ys,Zs,$s,st,tt,et,nt,at,lt,ot,ct,it,rt,ht,dt,pt,ut,_t])]),_:1})}}};export{wt as default,vt as description,ft as modularExtension,qt as pageClass,xt as readTime,bt as title};
