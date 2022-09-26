import{a as o,o as r,b as p,w as t,h as s,e,E as n}from"./runtime-core.esm-bundler.15edf3c4.js";const h={class:"markdown-body"},d=n("Permissions are assigned to Roles, and control data access throughout the platform. "),u=n("Learn more about Permissions"),_=n("."),j=s("hr",null,null,-1),m=s("h2",{id:"the-permission-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-permission-object"},"#"),n(" The Permission Object")],-1),g=s("p",null,[s("code",null,"id"),n(),s("strong",null,"uuid"),s("br"),n(" Primary key of the permission rule.")],-1),b=s("code",null,"role",-1),f=n(),y=s("strong",null,"many-to-one",-1),x=s("br",null,null,-1),q=n(" Role this permission applies to. Many-to-one to "),E=n("roles"),P=n(". "),R=s("code",null,"null",-1),T=n(" is used for public permissions."),w=s("p",null,[s("code",null,"collection"),n(),s("strong",null,"string"),s("br"),n(" Collection this permission rule applies to.")],-1),k=s("p",null,[s("code",null,"action"),n(),s("strong",null,"string"),s("br"),n(" What CRUD operation this permission rule applies to. One of "),s("code",null,"create"),n(", "),s("code",null,"read"),n(", "),s("code",null,"update"),n(", "),s("code",null,"delete"),n(".")],-1),S=s("code",null,"permissions",-1),A=n(),D=s("strong",null,"object",-1),L=s("br",null,null,-1),Q=n(" What rules the item must pass before the role is allowed to alter it. Follows "),C=n("the Filter Rules spec"),I=n("."),v=s("code",null,"validation",-1),G=n(),O=s("strong",null,"object",-1),M=s("br",null,null,-1),B=n(" What rules the provided values must pass before the role is allowed to submit them for insertion/update. Follows "),H=n("the Filter Rules spec"),F=n("."),U=s("p",null,[s("code",null,"preset"),n(),s("strong",null,"object"),s("br"),n(" Additional default values for the role.")],-1),W=s("p",null,[s("code",null,"fields"),n(),s("strong",null,"array"),s("br"),n(" What fields the user is allowed to alter.")],-1),N=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),n(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"34"),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"permissions"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"validation"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"title"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
			`),s("span",{class:"hljs-attr"},'"_contains"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"Directus"'),n(`
		`),s("span",{class:"hljs-punctuation"},"}"),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"presets"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"published"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"translations"'),s("span",{class:"hljs-punctuation"},"]"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),V=s("hr",null,null,-1),z=s("h2",{id:"list-permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-permissions"},"#"),n(" List Permissions")],-1),J=s("p",null,"List all permissions that exist in Directus.",-1),K=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The data returned in this endpoint will be filtered based on the user\u2019s permissions. For example, permissions for a role other than the current user\u2019s role won\u2019t be returned.")],-1),X=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),n(" Query Parameters")],-1),Y=n("Supports all "),Z=n("global query parameters"),$=n("."),ss=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),n(" Returns")],-1),ns=n("An array of up to "),ts=n("limit"),as=n(),es=s("a",{href:"#the-permission-object"},"permission objects",-1),ls=n(". If no items are available, data will be an empty array."),os=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),n(" REST API")],-1),is=s("pre",null,[s("code",null,`GET /permissions
SEARCH /permissions
`)],-1),cs=n("Learn more about SEARCH ->"),rs=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),n(" GraphQL")],-1),ps=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),hs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	permissions: directus_permissions
}
`)])],-1),ds=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),n(" Example")],-1),us=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	permissions {
		action
		role
		collection
	}
}
`)])],-1),_s=s("hr",null,null,-1),js=s("h2",{id:"retrieve-a-permission",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-permission"},"#"),n(" Retrieve a Permission")],-1),ms=s("p",null,"List an existing permission by primary key.",-1),gs=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),n(" Query Parameters")],-1),bs=n("Supports all "),fs=n("global query parameters"),ys=n("."),xs=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),n(" Returns")],-1),qs=s("p",null,[n("Returns the requested "),s("a",{href:"#the-permission-object"},"permission object"),n(".")],-1),Es=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),n(" REST API")],-1),Ps=s("pre",null,[s("code",null,`GET /permissions/:id
`)],-1),Rs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),n(" Example")],-1),Ts=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// GET /permissions/34"),n(`

`),s("span",{class:"hljs-punctuation"},"{"),n(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-number"},"34"),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"permissions"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"validation"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
			`),s("span",{class:"hljs-attr"},'"title"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
				`),s("span",{class:"hljs-attr"},'"_contains"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"Directus"'),n(`
			`),s("span",{class:"hljs-punctuation"},"}"),n(`
		`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"presets"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
			`),s("span",{class:"hljs-attr"},'"published"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),n(`
		`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"translations"'),s("span",{class:"hljs-punctuation"},"]"),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),ws=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),n(" GraphQL")],-1),ks=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ss=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),n(` {
	permissions_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),n(`!): directus_permissions
}
`)])],-1),As=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),n(" Example")],-1),Ds=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),n(` {
	permissions_by_id(id: `),s("span",{class:"hljs-number"},"34"),n(`) {
		role
		collection
		action
	}
}
`)])],-1),Ls=s("hr",null,null,-1),Qs=s("h2",{id:"create-a-permission-rule",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-permission-rule"},"#"),n(" Create a Permission Rule")],-1),Cs=s("p",null,"Create a new permission rule",-1),Is=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),n(" Query Parameters")],-1),vs=n("Supports all "),Gs=n("global query parameters"),Os=n("."),Ms=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),n(" Request Body")],-1),Bs=s("p",null,[n("A partial "),s("a",{href:"#the-permission-object"},"permissions object"),n(". "),s("code",null,"action"),n(" and "),s("code",null,"collection"),n(" are required.")],-1),Hs=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),n(" Returns")],-1),Fs=s("p",null,[n("Returns the "),s("a",{href:"#the-permission-object"},"permission object"),n(" for the created permission.")],-1),Us=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),n(" REST API")],-1),Ws=s("pre",null,[s("code",null,`POST /permissions
`)],-1),Ns=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),n(" Example")],-1),Vs=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// Request"),n(`

`),s("span",{class:"hljs-punctuation"},"{"),n(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"read"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},"]"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),zs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),n(" GraphQL")],-1),Js=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ks=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	create_permissions_item(data: create_directus_permissions_input!): directus_permissions
}
`)])],-1),Xs=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),n(" Example")],-1),Ys=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	create_permissions_item(
		data: { collection: `),s("span",{class:"hljs-string"},'"pages"'),n(", action: "),s("span",{class:"hljs-string"},'"read"'),n(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),n(", fields: ["),s("span",{class:"hljs-string"},'"id"'),n(", "),s("span",{class:"hljs-string"},'"title"'),n(`] }
	) {
		id
		collection
		action
	}
}
`)])],-1),Zs=s("hr",null,null,-1),$s=s("h2",{id:"create-multiple-permission-rules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-permission-rules"},"#"),n(" Create Multiple Permission Rules")],-1),sn=s("p",null,"Create multiple new permission rules",-1),nn=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),n(" Query Parameters")],-1),tn=n("Supports all "),an=n("global query parameters"),en=n("."),ln=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),n(" Request Body")],-1),on=s("p",null,[n("An array of partial "),s("a",{href:"#the-permission-object"},"permissions objects"),n(". "),s("code",null,"action"),n(" and "),s("code",null,"collection"),n(" are required.")],-1),cn=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),n(" Returns")],-1),rn=s("p",null,[n("Returns the "),s("a",{href:"#the-permission-object"},"permission objects"),n(" for the created permissions.")],-1),pn=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),n(" REST API")],-1),hn=s("pre",null,[s("code",null,`POST /permissions
`)],-1),dn=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),n(" Example")],-1),un=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// Request"),n(`

`),s("span",{class:"hljs-punctuation"},"["),n(`
	`),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"read"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},"]"),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"pages"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),n(`
		`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},"]"),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),n(`
`),s("span",{class:"hljs-punctuation"},"]"),n(`
`)])],-1),_n=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),n(" GraphQL")],-1),jn=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),mn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	create_permissions_items(data: [create_directus_permissions_input!]!): [directus_permissions]
}
`)])],-1),gn=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),n(" Example")],-1),bn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	create_permissions_items(
		data: [
			{ collection: `),s("span",{class:"hljs-string"},'"pages"'),n(", action: "),s("span",{class:"hljs-string"},'"read"'),n(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),n(", fields: ["),s("span",{class:"hljs-string"},'"id"'),n(", "),s("span",{class:"hljs-string"},'"title"'),n(`] }
			{ collection: `),s("span",{class:"hljs-string"},'"pages"'),n(", action: "),s("span",{class:"hljs-string"},'"create"'),n(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),n(", fields: ["),s("span",{class:"hljs-string"},'"id"'),n(", "),s("span",{class:"hljs-string"},'"title"'),n(`] }
		]
	) {
		id
		collection
		action
	}
}
`)])],-1),fn=s("hr",null,null,-1),yn=s("h2",{id:"update-permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-permissions"},"#"),n(" Update Permissions")],-1),xn=s("p",null,"Update an existing permissions rule.",-1),qn=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),n(" Query Parameters")],-1),En=n("Supports all "),Pn=n("global query parameters"),Rn=n("."),Tn=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),n(" Request Body")],-1),wn=s("p",null,[n("A partial "),s("a",{href:"#the-permission-object"},"permissions object"),n(".")],-1),kn=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),n(" Returns")],-1),Sn=s("p",null,[n("Returns the "),s("a",{href:"#the-permission-object"},"permission object"),n(" for the updated permission.")],-1),An=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),n(" REST API")],-1),Dn=s("pre",null,[s("code",null,`PATCH /permissions/:id
`)],-1),Ln=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),n(" Example")],-1),Qn=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /permissions/34"),n(`

`),s("span",{class:"hljs-punctuation"},"{"),n(`
	`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"body"'),s("span",{class:"hljs-punctuation"},"]"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),Cn=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),n(" GraphQL")],-1),In=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),vn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	update_permissions_item(id:`),s("span",{class:"hljs-literal"}," ID"),n(`!, data: update_directus_permissions_input!): directus_permissions
}
`)])],-1),Gn=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),n(" Example")],-1),On=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	update_permissions_item(id: `),s("span",{class:"hljs-number"},"34"),n(", data: { fields: ["),s("span",{class:"hljs-string"},'"id"'),n(", "),s("span",{class:"hljs-string"},'"title"'),n(", "),s("span",{class:"hljs-string"},'"body"'),n(`] }) {
		id
		action
		collection
	}
}
`)])],-1),Mn=s("hr",null,null,-1),Bn=s("h2",{id:"update-multiple-permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-permissions"},"#"),n(" Update Multiple Permissions")],-1),Hn=s("p",null,"Update multiple existing permissions rules.",-1),Fn=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),n(" Query Parameters")],-1),Un=n("Supports all "),Wn=n("global query parameters"),Nn=n("."),Vn=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),n(" Request Body")],-1),zn=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),n(" Request Body")],-1),Jn=s("p",null,[s("code",null,"keys"),n(),s("strong",null,"Required"),s("br"),n(" Array of primary keys of the permissions you\u2019d like to update.")],-1),Kn=s("p",null,[s("code",null,"data"),n(),s("strong",null,"Required"),s("br"),n(" Any of "),s("a",{href:"#the-permission-object"},"the permission object"),n("\u2019s properties.")],-1),Xn=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),n(" Returns")],-1),Yn=s("p",null,[n("Returns the "),s("a",{href:"#the-permission-object"},"permission object"),n(" for the updated permissions.")],-1),Zn=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),n(" REST API")],-1),$n=s("pre",null,[s("code",null,`PATCH /permissions
`)],-1),st=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),n(" Example")],-1),nt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /permissions"),n(`

`),s("span",{class:"hljs-punctuation"},"{"),n(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"34"),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-number"},"65"),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),n(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"{"),n(`
		`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),n(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"title"'),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-string"},'"body"'),s("span",{class:"hljs-punctuation"},"]"),n(`
	`),s("span",{class:"hljs-punctuation"},"}"),n(`
`),s("span",{class:"hljs-punctuation"},"}"),n(`
`)])],-1),tt=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),n(" GraphQL")],-1),at=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),et=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	update_permissions_items(id: `),s("span",{class:"hljs-literal"},"[ID"),n(`!]!, data: update_directus_permissions_input!): [directus_permissions]
}
`)])],-1),lt=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),n(" Example")],-1),ot=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	update_permissions_items(ids: [`),s("span",{class:"hljs-number"},"34"),n(", "),s("span",{class:"hljs-number"},"64"),n("], data: { fields: ["),s("span",{class:"hljs-string"},'"id"'),n(", "),s("span",{class:"hljs-string"},'"title"'),n(", "),s("span",{class:"hljs-string"},'"body"'),n(`] }) {
		id
		action
		collection
	}
}
`)])],-1),it=s("hr",null,null,-1),ct=s("h2",{id:"delete-permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-permissions"},"#"),n(" Delete Permissions")],-1),rt=s("p",null,"Delete an existing permissions rule",-1),pt=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),n(" Returns")],-1),ht=s("p",null,"Empty body.",-1),dt=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),n(" REST API")],-1),ut=s("pre",null,[s("code",null,`DELETE /permissions/:id
`)],-1),_t=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),n(" Example")],-1),jt=s("pre",null,[s("code",null,`DELETE /permissions/34
`)],-1),mt=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),n(" GraphQL")],-1),gt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),bt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	delete_permissions_item(id:`),s("span",{class:"hljs-literal"}," ID"),n(`!): delete_one
}
`)])],-1),ft=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),n(" Example")],-1),yt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	delete_permissions_item(id: `),s("span",{class:"hljs-number"},"34"),n(`) {
		id
	}
}
`)])],-1),xt=s("hr",null,null,-1),qt=s("h2",{id:"delete-multiple-permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-permissions"},"#"),n(" Delete Multiple Permissions")],-1),Et=s("p",null,"Delete multiple existing permissions rules",-1),Pt=s("h3",{id:"request-body-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-5"},"#"),n(" Request Body")],-1),Rt=s("p",null,"An array of permission primary keys",-1),Tt=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),n(" Returns")],-1),wt=s("p",null,"Empty body.",-1),kt=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),n(" REST API")],-1),St=s("pre",null,[s("code",null,`DELETE /permissions
`)],-1),At=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),n(" Example")],-1),Dt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /permissions"),n(`

`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"34"),s("span",{class:"hljs-punctuation"},","),n(),s("span",{class:"hljs-number"},"64"),s("span",{class:"hljs-punctuation"},"]"),n(`
`)])],-1),Lt=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),n(" GraphQL")],-1),Qt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ct=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),n(` {
	delete_permissions_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),n(`!]!): delete_many
}
`)])],-1),It=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),n(" Example")],-1),vt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),n(` {
	delete_permissions_items(ids: [`),s("span",{class:"hljs-number"},"34"),n(", "),s("span",{class:"hljs-number"},"64"),n(`]) {
		ids
	}
}
`)])],-1),Gt=s("hr",null,null,-1),Ft="Permissions",Ut=!1,Wt="REST and GraphQL API documentation on the Permissions collection in Directus.",Nt="5 min read",Vt="page-reference",zt={name:"permissions",setup(Ot,{expose:i}){const l={title:"Permissions",modularExtension:!1,description:"REST and GraphQL API documentation on the Permissions collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return i({frontmatter:l}),(Mt,Bt)=>{const a=o("router-link"),c=o("docs-wrapper");return r(),p(c,{frontmatter:l},{default:t(()=>[s("div",h,[s("blockquote",null,[s("p",null,[d,e(a,{to:"/docs/getting-started/glossary#permissions"},{default:t(()=>[u]),_:1}),_])]),j,m,g,s("p",null,[b,f,y,x,q,e(a,{to:"/docs/reference/system/roles"},{default:t(()=>[E]),_:1}),P,R,T]),w,k,s("p",null,[S,A,D,L,Q,e(a,{to:"/docs/reference/filter-rules"},{default:t(()=>[C]),_:1}),I]),s("p",null,[v,G,O,M,B,e(a,{to:"/docs/reference/filter-rules"},{default:t(()=>[H]),_:1}),F]),U,W,N,V,z,J,K,X,s("p",null,[Y,e(a,{to:"/docs/reference/query"},{default:t(()=>[Z]),_:1}),$]),ss,s("p",null,[ns,e(a,{to:"/docs/reference/query#limit"},{default:t(()=>[ts]),_:1}),as,es,ls]),os,is,s("p",null,[e(a,{to:"/docs/reference/introduction#search-http-method"},{default:t(()=>[cs]),_:1})]),rs,ps,hs,ds,us,_s,js,ms,gs,s("p",null,[bs,e(a,{to:"/docs/reference/query"},{default:t(()=>[fs]),_:1}),ys]),xs,qs,Es,Ps,Rs,Ts,ws,ks,Ss,As,Ds,Ls,Qs,Cs,Is,s("p",null,[vs,e(a,{to:"/docs/reference/query"},{default:t(()=>[Gs]),_:1}),Os]),Ms,Bs,Hs,Fs,Us,Ws,Ns,Vs,zs,Js,Ks,Xs,Ys,Zs,$s,sn,nn,s("p",null,[tn,e(a,{to:"/docs/reference/query"},{default:t(()=>[an]),_:1}),en]),ln,on,cn,rn,pn,hn,dn,un,_n,jn,mn,gn,bn,fn,yn,xn,qn,s("p",null,[En,e(a,{to:"/docs/reference/query"},{default:t(()=>[Pn]),_:1}),Rn]),Tn,wn,kn,Sn,An,Dn,Ln,Qn,Cn,In,vn,Gn,On,Mn,Bn,Hn,Fn,s("p",null,[Un,e(a,{to:"/docs/reference/query"},{default:t(()=>[Wn]),_:1}),Nn]),Vn,zn,Jn,Kn,Xn,Yn,Zn,$n,st,nt,tt,at,et,lt,ot,it,ct,rt,pt,ht,dt,ut,_t,jt,mt,gt,bt,ft,yt,xt,qt,Et,Pt,Rt,Tt,wt,kt,St,At,Dt,Lt,Qt,Ct,It,vt,Gt])]),_:1})}}};export{zt as default,Wt as description,Ut as modularExtension,Vt as pageClass,Nt as readTime,Ft as title};
