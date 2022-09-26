import{a as o,o as h,b as i,w as a,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=e("Roles define a specific set of access permissions, and are the primary organizational structure for Users within the platform. "),u=e("Learn more about Roles"),_=e("."),j=s("hr",null,null,-1),m=s("h2",{id:"the-role-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-role-object"},"#"),e(" The Role Object")],-1),f=s("p",null,[s("code",null,"id"),e(),s("strong",null,"uuid"),s("br"),e(" Primary key of the role.")],-1),b=s("p",null,[s("code",null,"name"),e(),s("strong",null,"string"),s("br"),e(" Name of the role.")],-1),g=s("p",null,[s("code",null,"icon"),e(),s("strong",null,"string"),s("br"),e(" Icon for the role. Displayed in the Admin App.")],-1),y=s("p",null,[s("code",null,"description"),e(),s("strong",null,"string"),s("br"),e(" Description for the role. Displayed in the Admin App.")],-1),x=s("p",null,[s("code",null,"ip_access"),e(),s("strong",null,"csv"),s("br"),e(" A CSV of IP addresses that have access to this role. Allows you to configure an allowlist of IP addresses.")],-1),q=s("p",null,[s("code",null,"enforce_tfa"),e(),s("strong",null,"boolean"),s("br"),e(" Whether or not Two-Factor Authentication is required for users in this role.")],-1),R=s("p",null,[s("code",null,"admin_access"),e(),s("strong",null,"boolean"),s("br"),e(" If this role is considered an admin role. This means that users in this role have full permissions to everything.")],-1),E=s("p",null,[s("code",null,"app_access"),e(),s("strong",null,"boolean"),s("br"),e(" Whether or not users in this role have access to use the Admin App.")],-1),k=s("code",null,"users",-1),w=e(),T=s("strong",null,"one-to-many",-1),P=s("br",null,null,-1),A=e(" The users in this role. One-to-many to "),S=e("users"),I=e("."),D=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"653925a9-970e-487a-bfc0-ab6c96affcdc"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Admin"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"supervised_user_circle"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"description"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"ip_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"enforce_tfa"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"admin_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"true")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"app_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"true")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"users"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"0bc7b36a-9ba9-4ce0-83f0-0a526f354e07"'),s("span",{class:"hljs-punctuation"},"]"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),L=s("hr",null,null,-1),Q=s("h2",{id:"list-roles",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-roles"},"#"),e(" List Roles")],-1),C=s("p",null,"List all roles that exist in Directus.",-1),v=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),O=e("Supports all "),G=e("global query parameters"),M=e("."),B=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),H=e("An array of up to "),U=e("limit"),N=e(),V=s("a",{href:"#the-role-object"},"role objects",-1),W=e(". If no items are available, data will be an empty array."),z=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),F=s("pre",null,[s("code",null,`GET /roles
SEARCH /roles
`)],-1),J=e("Learn more about SEARCH ->"),K=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),X=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Y=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	roles: [directus_roles]
}
`)])],-1),Z=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),$=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	roles {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),ss=s("hr",null,null,-1),es=s("h2",{id:"retrieve-a-role",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-role"},"#"),e(" Retrieve a Role")],-1),as=s("p",null,"List an existing role by primary key.",-1),ts=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),ns=e("Supports all "),ls=e("global query parameters"),os=e("."),rs=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),cs=s("p",null,[e("Returns the requested "),s("a",{href:"#the-role-object"},"role object"),e(".")],-1),hs=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),is=s("pre",null,[s("code",null,`GET /roles/:id
`)],-1),ds=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),ps=s("pre",null,[s("code",null,`GET /roles/b4cb3b64-8580-4ad9-a099-eade6da24302
`)],-1),us=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),_s=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),js=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	roles_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_roles
}
`)])],-1),ms=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),fs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	roles_by_id(id: `),s("span",{class:"hljs-number"},"2"),e(`) {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),bs=s("hr",null,null,-1),gs=s("h2",{id:"create-a-role",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-role"},"#"),e(" Create a Role")],-1),ys=s("p",null,"Create a new role.",-1),xs=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),qs=e("Supports all "),Rs=e("global query parameters"),Es=e("."),ks=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),ws=s("p",null,[e("A partial "),s("a",{href:"#the-role-object"},"role object"),e(".")],-1),Ts=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),Ps=s("p",null,[e("Returns the "),s("a",{href:"#the-role-object"},"role object"),e(" for the created role.")],-1),As=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Ss=s("pre",null,[s("code",null,`POST /roles
`)],-1),Is=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),Ds=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /roles"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Interns"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"verified_user"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"description"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"admin_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"app_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"true")]),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Ls=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),Qs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Cs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_roles_item(data: create_directus_roles_input!): directus_roles
}
`)])],-1),vs=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Os=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_roles_item(
		data: { name: `),s("span",{class:"hljs-string"},'"Interns"'),e(", icon: "),s("span",{class:"hljs-string"},'"verified_user"'),e(", description: "),s("span",{class:"hljs-literal"},"null"),e(", admin_access: "),s("span",{class:"hljs-literal"},"false"),e(", app_access: "),s("span",{class:"hljs-literal"},"true"),e(` }
	) {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),Gs=s("hr",null,null,-1),Ms=s("h2",{id:"create-multiple-roles",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-roles"},"#"),e(" Create Multiple Roles")],-1),Bs=s("p",null,"Create multiple new roles.",-1),Hs=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Us=e("Supports all "),Ns=e("global query parameters"),Vs=e("."),Ws=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),zs=s("p",null,[e("An array of partial "),s("a",{href:"#the-role-object"},"role objects"),e(".")],-1),Fs=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),Js=s("p",null,[e("Returns the "),s("a",{href:"#the-role-object"},"role objects"),e(" for the created roles.")],-1),Ks=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),Xs=s("pre",null,[s("code",null,`POST /roles
`)],-1),Ys=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),Zs=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /roles"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Interns"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"verified_user"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"description"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"admin_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"app_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"true")]),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Customers"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"person"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"description"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"admin_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"app_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"false")]),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),$s=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),se=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ee=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_roles_items(data: [create_directus_roles_input!]!): [directus_roles]
}
`)])],-1),ae=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),te=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_roles_items(
		data: [
			{ name: `),s("span",{class:"hljs-string"},'"Interns"'),e(", icon: "),s("span",{class:"hljs-string"},'"verified_user"'),e(", description: "),s("span",{class:"hljs-literal"},"null"),e(", admin_access: "),s("span",{class:"hljs-literal"},"false"),e(", app_access: "),s("span",{class:"hljs-literal"},"true"),e(` }
			{ name: `),s("span",{class:"hljs-string"},'"Customers"'),e(", icon: "),s("span",{class:"hljs-string"},'"person"'),e(", description: "),s("span",{class:"hljs-literal"},"null"),e(", admin_access: "),s("span",{class:"hljs-literal"},"false"),e(", app_access: "),s("span",{class:"hljs-literal"},"false"),e(` }
		]
	) {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),ne=s("hr",null,null,-1),le=s("h2",{id:"update-a-role",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-role"},"#"),e(" Update a Role")],-1),oe=s("p",null,"Update an existing role.",-1),re=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),ce=e("Supports all "),he=e("global query parameters"),ie=e("."),de=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),pe=s("p",null,[e("A partial "),s("a",{href:"#the-role-object"},"role object"),e(".")],-1),ue=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),_e=s("p",null,[e("Returns the "),s("a",{href:"#the-role-object"},"role object"),e(" for the updated role.")],-1),je=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),me=s("pre",null,[s("code",null,`PATCH /roles/:id
`)],-1),fe=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),be=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /roles/c86c2761-65d3-43c3-897f-6f74ad6a5bd7"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"attractions"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),ge=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),ye=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),xe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_roles_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_roles_input): directus_roles
}
`)])],-1),qe=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),Re=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_roles_item(id: `),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(", data: { icon: "),s("span",{class:"hljs-string"},'"attractions"'),e(` }) {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),Ee=s("hr",null,null,-1),ke=s("h2",{id:"update-multiple-roles",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-roles"},"#"),e(" Update Multiple Roles")],-1),we=s("p",null,"Update multiple existing roles.",-1),Te=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),Pe=e("Supports all "),Ae=e("global query parameters"),Se=e("."),Ie=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),De=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the roles you\u2019d like to update.")],-1),Le=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-role-object"},"the role object"),e("\u2019s properties.")],-1),Qe=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),Ce=s("p",null,[e("Returns the "),s("a",{href:"#the-role-object"},"role objects"),e(" for the updated roles.")],-1),ve=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Oe=s("pre",null,[s("code",null,`PATCH /roles
`)],-1),Ge=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),Me=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /roles"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"6fc3d5d3-a37b-4da8-a2f4-ed62ad5abe03"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"attractions"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Be=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),He=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ue=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_roles_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_roles_input): [directus_roles]
}
`)])],-1),Ne=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),Ve=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_roles_items(
		ids: [`),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(", "),s("span",{class:"hljs-string"},'"6fc3d5d3-a37b-4da8-a2f4-ed62ad5abe03"'),e(`]
		data: { icon: `),s("span",{class:"hljs-string"},'"attractions"'),e(` }
	) {
		id
		name
		users {
			email
		}
	}
}
`)])],-1),We=s("hr",null,null,-1),ze=s("h2",{id:"delete-a-role",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-role"},"#"),e(" Delete a Role")],-1),Fe=s("p",null,"Delete an existing role.",-1),Je=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),Ke=s("p",null,"Empty body.",-1),Xe=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),Ye=s("pre",null,[s("code",null,`DELETE /roles/:id
`)],-1),Ze=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),$e=s("pre",null,[s("code",null,`DELETE /roles/c86c2761-65d3-43c3-897f-6f74ad6a5bd7
`)],-1),sa=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),ea=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),aa=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_roles_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),ta=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),na=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_roles_item(id: `),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`) {
		id
	}
}
`)])],-1),la=s("hr",null,null,-1),oa=s("h2",{id:"delete-multiple-roles",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-roles"},"#"),e(" Delete Multiple Roles")],-1),ra=s("p",null,"Delete multiple existing roles.",-1),ca=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),ha=s("p",null,"An array of role primary keys",-1),ia=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),da=s("p",null,"Empty body.",-1),pa=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),ua=s("pre",null,[s("code",null,`DELETE /roles
`)],-1),_a=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),e(" Example")],-1),ja=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /roles"),e(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"653925a9-970e-487a-bfc0-ab6c96affcdc"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),ma=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),fa=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ba=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_roles_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),ga=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),e(" Example")],-1),ya=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_roles_items(ids: [`),s("span",{class:"hljs-string"},'"653925a9-970e-487a-bfc0-ab6c96affcdc"'),e(", "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`]) {
		ids
	}
}
`)])],-1),xa=s("hr",null,null,-1),wa="Roles",Ta=!1,Pa="REST and GraphQL API documentation on the Roles collection in Directus.",Aa="5 min read",Sa="page-reference",Ia={name:"roles",setup(qa,{expose:r}){const l={title:"Roles",modularExtension:!1,description:"REST and GraphQL API documentation on the Roles collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return r({frontmatter:l}),(Ra,Ea)=>{const t=o("router-link"),c=o("docs-wrapper");return h(),i(c,{frontmatter:l},{default:a(()=>[s("div",d,[s("blockquote",null,[s("p",null,[p,n(t,{to:"/docs/getting-started/glossary#roles"},{default:a(()=>[u]),_:1}),_])]),j,m,f,b,g,y,x,q,R,E,s("p",null,[k,w,T,P,A,n(t,{to:"/docs/reference/system/users"},{default:a(()=>[S]),_:1}),I]),D,L,Q,C,v,s("p",null,[O,n(t,{to:"/docs/reference/query"},{default:a(()=>[G]),_:1}),M]),B,s("p",null,[H,n(t,{to:"/docs/reference/query#limit"},{default:a(()=>[U]),_:1}),N,V,W]),z,F,s("p",null,[n(t,{to:"/docs/reference/introduction#search-http-method"},{default:a(()=>[J]),_:1})]),K,X,Y,Z,$,ss,es,as,ts,s("p",null,[ns,n(t,{to:"/docs/reference/query"},{default:a(()=>[ls]),_:1}),os]),rs,cs,hs,is,ds,ps,us,_s,js,ms,fs,bs,gs,ys,xs,s("p",null,[qs,n(t,{to:"/docs/reference/query"},{default:a(()=>[Rs]),_:1}),Es]),ks,ws,Ts,Ps,As,Ss,Is,Ds,Ls,Qs,Cs,vs,Os,Gs,Ms,Bs,Hs,s("p",null,[Us,n(t,{to:"/docs/reference/query"},{default:a(()=>[Ns]),_:1}),Vs]),Ws,zs,Fs,Js,Ks,Xs,Ys,Zs,$s,se,ee,ae,te,ne,le,oe,re,s("p",null,[ce,n(t,{to:"/docs/reference/query"},{default:a(()=>[he]),_:1}),ie]),de,pe,ue,_e,je,me,fe,be,ge,ye,xe,qe,Re,Ee,ke,we,Te,s("p",null,[Pe,n(t,{to:"/docs/reference/query"},{default:a(()=>[Ae]),_:1}),Se]),Ie,De,Le,Qe,Ce,ve,Oe,Ge,Me,Be,He,Ue,Ne,Ve,We,ze,Fe,Je,Ke,Xe,Ye,Ze,$e,sa,ea,aa,ta,na,la,oa,ra,ca,ha,ia,da,pa,ua,_a,ja,ma,fa,ba,ga,ya,xa])]),_:1})}}};export{Ia as default,Pa as description,Ta as modularExtension,Sa as pageClass,Aa as readTime,wa as title};
