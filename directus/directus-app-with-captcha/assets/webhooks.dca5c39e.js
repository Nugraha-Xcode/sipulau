import{a as o,o as r,b as i,w as a,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const p={class:"markdown-body"},d=s("blockquote",null,[s("p",null,"Webhooks are configured within the App (no code required) and send HTTP requests to an external service when a specific event is triggered.")],-1),u=s("hr",null,null,-1),_=s("h2",{id:"the-webhook-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-webhook-object"},"#"),e(" The Webhook Object")],-1),b=s("p",null,[s("code",null,"id"),e(),s("strong",null,"integer"),s("br"),e(" Primary key of the webhook.")],-1),j=s("p",null,[s("code",null,"name"),e(),s("strong",null,"string"),s("br"),e(" Name for the webhook. Shown in the Admin App.")],-1),m=s("p",null,[s("code",null,"method"),e(),s("strong",null,"string"),s("br"),e(" HTTP method to use. One of "),s("code",null,"GET"),e(", "),s("code",null,"POST"),e(".")],-1),g=s("p",null,[s("code",null,"url"),e(),s("strong",null,"string"),s("br"),e(" Where to send the request too.")],-1),k=s("p",null,[s("code",null,"status"),e(),s("strong",null,"string"),s("br"),e(" Status of the webhook. One of "),s("code",null,"active"),e(", "),s("code",null,"inactive"),e(".")],-1),w=s("p",null,[s("code",null,"data"),e(),s("strong",null,"boolean"),s("br"),e(" Whether or not to send the event data to the external endpoint.")],-1),x=s("p",null,[s("code",null,"actions"),e(),s("strong",null,"csv"),s("br"),e(" When to fire the webhook. Can contain "),s("code",null,"create"),e(", "),s("code",null,"update"),e(", "),s("code",null,"delete"),e(".")],-1),y=s("p",null,[s("code",null,"collections"),e(),s("strong",null,"csv"),s("br"),e(" What collections to fire this webhook on.")],-1),f=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"1"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Build Website"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"method"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"POST"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"url"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"https://example.com/"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"true")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"actions"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"update"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"collections"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},"]"),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),q=s("hr",null,null,-1),E=s("h2",{id:"list-webhooks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-webhooks"},"#"),e(" List Webhooks")],-1),T=s("p",null,"List all webhooks that exist in Directus.",-1),P=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),S=e("Supports all "),R=e("global query parameters"),A=e("."),W=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),L=e("An array of up to "),Q=e("limit"),O=e(),D=s("a",{href:"#the-webhook-object"},"webhook objects",-1),I=e(". If no items are available, data will be an empty array."),C=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),v=s("pre",null,[s("code",null,`GET /webhooks
SEARCH /webhooks
`)],-1),B=e("Learn more about SEARCH ->"),G=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),M=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),H=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	webhooks: [directus_webhooks]
}
`)])],-1),N=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),U=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	webhooks {
		url
		method
	}
}
`)])],-1),V=s("hr",null,null,-1),z=s("h2",{id:"retrieve-a-webhook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-webhook"},"#"),e(" Retrieve a Webhook")],-1),F=s("p",null,"List an existing webhook by primary key.",-1),J=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),K=e("Supports all "),X=e("global query parameters"),Y=e("."),Z=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),$=s("p",null,[e("Returns the requested "),s("a",{href:"#the-webhook-object"},"webhook object"),e(".")],-1),ss=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),es=s("pre",null,[s("code",null,`GET /webhooks/:id
`)],-1),as=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),ts=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ns=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	webhooks_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_webhooks
}
`)])],-1),ls=s("h5",{id:"examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#examples"},"#"),e(" Examples")],-1),os=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	webhooks_by_id(id: `),s("span",{class:"hljs-number"},"15"),e(`) {
		url
		actions
		method
	}
}
`)])],-1),hs=s("hr",null,null,-1),cs=s("h2",{id:"create-a-webhook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-webhook"},"#"),e(" Create a Webhook")],-1),rs=s("p",null,"Create a new webhook.",-1),is=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),ps=e("Supports all "),ds=e("global query parameters"),us=e("."),_s=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),bs=s("p",null,[e("A partial "),s("a",{href:"#the-webhook-object"},"webhook object"),e(".")],-1),js=s("p",null,[s("code",null,"name"),e(", "),s("code",null,"actions"),e(", "),s("code",null,"collections"),e(", and "),s("code",null,"url"),e(" are required.")],-1),ms=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),gs=s("p",null,[e("Returns the "),s("a",{href:"#the-webhook-object"},"webhook object"),e(" for the created webhook.")],-1),ks=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),ws=s("pre",null,[s("code",null,`POST /webhooks
`)],-1),xs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),ys=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /webhooks"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Example"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"actions"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"update"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"collections"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"url"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"https://example.com"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),fs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),qs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Es=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_webhooks_item(data: create_directus_webhooks_input!): directus_webhooks
}
`)])],-1),Ts=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),Ps=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_webhooks_item(
		data: { name: `),s("span",{class:"hljs-string"},'"Example"'),e(", actions: ["),s("span",{class:"hljs-string"},'"create"'),e(", "),s("span",{class:"hljs-string"},'"update"'),e("], collections: ["),s("span",{class:"hljs-string"},'"articles"'),e("], url: "),s("span",{class:"hljs-string"},'"https://example.com"'),e(` }
	) {
		id
		name
	}
}
`)])],-1),Ss=s("hr",null,null,-1),Rs=s("h2",{id:"create-multiple-webhook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-webhook"},"#"),e(" Create Multiple Webhook")],-1),As=s("p",null,"Create multiple new webhooks.",-1),Ws=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Ls=e("Supports all "),Qs=e("global query parameters"),Os=e("."),Ds=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),Is=s("p",null,[e("An array of partial "),s("a",{href:"#the-webhook-object"},"webhook object"),e(".")],-1),Cs=s("p",null,[s("code",null,"name"),e(", "),s("code",null,"actions"),e(", "),s("code",null,"collections"),e(", and "),s("code",null,"url"),e(" are required.")],-1),vs=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),Bs=s("p",null,[e("Returns the "),s("a",{href:"#the-webhook-object"},"webhook objects"),e(" for the created webhooks.")],-1),Gs=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),Ms=s("pre",null,[s("code",null,`POST /webhooks
`)],-1),Hs=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),Ns=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /webhooks"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Example"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"actions"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"create"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"update"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"collections"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"url"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"https://example.com"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Second Example"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"actions"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"delete"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"collections"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"url"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"https://example.com/on-delete"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),Us=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),Vs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),zs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_webhooks_items(data: [create_directus_webhooks_input!]!): [directus_webhooks]
}
`)])],-1),Fs=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Js=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_webhooks_items(
		data: [
			{ name: `),s("span",{class:"hljs-string"},'"Example"'),e(", actions: ["),s("span",{class:"hljs-string"},'"create"'),e(", "),s("span",{class:"hljs-string"},'"update"'),e("], collections: ["),s("span",{class:"hljs-string"},'"articles"'),e("], url: "),s("span",{class:"hljs-string"},'"https://example.com"'),e(` }
			{ name: `),s("span",{class:"hljs-string"},'"Second Example"'),e(", actions: ["),s("span",{class:"hljs-string"},'"delete"'),e("], collections: ["),s("span",{class:"hljs-string"},'"articles"'),e("], url: "),s("span",{class:"hljs-string"},'"https://example.com/on-delete"'),e(` }
		]
	) {
		id
		name
	}
}
`)])],-1),Ks=s("hr",null,null,-1),Xs=s("h2",{id:"update-a-webhook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-webhook"},"#"),e(" Update a Webhook")],-1),Ys=s("p",null,"Update an existing webhook.",-1),Zs=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),$s=e("Supports all "),se=e("global query parameters"),ee=e("."),ae=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),te=s("p",null,[e("A partial "),s("a",{href:"#the-webhook-object"},"webhook object"),e(".")],-1),ne=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),le=s("p",null,[e("Returns the "),s("a",{href:"#the-webhook-object"},"webhook object"),e(" for the updated webhook.")],-1),oe=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),he=s("pre",null,[s("code",null,`PATCH /webhooks/:id
`)],-1),ce=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),re=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /webhooks/15"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Build Website"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),ie=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),pe=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),de=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_webhooks_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_webhooks_input!): directus_webhooks
}
`)])],-1),ue=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),_e=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_webhooks_item(id: `),s("span",{class:"hljs-number"},"15"),e(", data: { name: "),s("span",{class:"hljs-string"},'"Build Website"'),e(` }) {
		name
	}
}
`)])],-1),be=s("hr",null,null,-1),je=s("h2",{id:"update-multiple-webhooks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-webhooks"},"#"),e(" Update Multiple Webhooks")],-1),me=s("p",null,"Update multiple existing webhooks.",-1),ge=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),ke=e("Supports all "),we=e("global query parameters"),xe=e("."),ye=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),fe=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the webhooks you\u2019d like to update.")],-1),qe=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-webhook-object"},"the webhook object"),e("\u2019s properties.")],-1),Ee=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),Te=s("p",null,[e("Returns the "),s("a",{href:"#the-webhook-object"},"webhook objects"),e(" for the updated webhooks.")],-1),Pe=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Se=s("pre",null,[s("code",null,`PATCH /webhooks
`)],-1),Re=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),Ae=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /webhooks"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"41"),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Build Website"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),We=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),Le=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Qe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_webhooks_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_webhooks_input!): [directus_webhooks]
}
`)])],-1),Oe=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),De=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_webhooks_items(ids: [`),s("span",{class:"hljs-number"},"15"),e(", "),s("span",{class:"hljs-number"},"41"),e("], data: { name: "),s("span",{class:"hljs-string"},'"Build Website"'),e(` }) {
		name
	}
}
`)])],-1),Ie=s("hr",null,null,-1),Ce=s("h2",{id:"delete-a-webhook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-webhook"},"#"),e(" Delete a Webhook")],-1),ve=s("p",null,"Delete an existing webhook.",-1),Be=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),Ge=s("p",null,"Empty body.",-1),Me=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),He=s("pre",null,[s("code",null,`DELETE /webhooks/:id
`)],-1),Ne=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),Ue=s("pre",null,[s("code",null,`DELETE /webhooks/15
`)],-1),Ve=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),ze=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Fe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_webhooks_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),Je=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),Ke=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_webhooks_item(id: `),s("span",{class:"hljs-number"},"15"),e(`) {
		id
	}
}
`)])],-1),Xe=s("hr",null,null,-1),Ye=s("h2",{id:"delete-multiple-webhooks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-webhooks"},"#"),e(" Delete Multiple Webhooks")],-1),Ze=s("p",null,"Delete multiple existing webhooks.",-1),$e=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),sa=s("p",null,"An array of webhook primary keys",-1),ea=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),aa=s("p",null,"Empty body.",-1),ta=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),na=s("pre",null,[s("code",null,`DELETE /webhooks
`)],-1),la=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),oa=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /webhooks"),e(`

`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"2"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"41"),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),ha=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),ca=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ra=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_webhooks_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),ia=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),pa=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_webhooks_items(ids: [`),s("span",{class:"hljs-number"},"2"),e(", "),s("span",{class:"hljs-number"},"15"),e(", "),s("span",{class:"hljs-number"},"41"),e(`]) {
		ids
	}
}
`)])],-1),da=s("hr",null,null,-1),ma="Webhooks",ga=!1,ka="REST and GraphQL API documentation on the Webhooks collection in Directus.",wa="5 min read",xa="page-reference",ya={name:"webhooks",setup(ua,{expose:h}){const l={title:"Webhooks",modularExtension:!1,description:"REST and GraphQL API documentation on the Webhooks collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return h({frontmatter:l}),(_a,ba)=>{const t=o("router-link"),c=o("docs-wrapper");return r(),i(c,{frontmatter:l},{default:a(()=>[s("div",p,[d,u,_,b,j,m,g,k,w,x,y,f,q,E,T,P,s("p",null,[S,n(t,{to:"/docs/reference/query"},{default:a(()=>[R]),_:1}),A]),W,s("p",null,[L,n(t,{to:"/docs/reference/query#limit"},{default:a(()=>[Q]),_:1}),O,D,I]),C,v,s("p",null,[n(t,{to:"/docs/reference/introduction#search-http-method"},{default:a(()=>[B]),_:1})]),G,M,H,N,U,V,z,F,J,s("p",null,[K,n(t,{to:"/docs/reference/query"},{default:a(()=>[X]),_:1}),Y]),Z,$,ss,es,as,ts,ns,ls,os,hs,cs,rs,is,s("p",null,[ps,n(t,{to:"/docs/reference/query"},{default:a(()=>[ds]),_:1}),us]),_s,bs,js,ms,gs,ks,ws,xs,ys,fs,qs,Es,Ts,Ps,Ss,Rs,As,Ws,s("p",null,[Ls,n(t,{to:"/docs/reference/query"},{default:a(()=>[Qs]),_:1}),Os]),Ds,Is,Cs,vs,Bs,Gs,Ms,Hs,Ns,Us,Vs,zs,Fs,Js,Ks,Xs,Ys,Zs,s("p",null,[$s,n(t,{to:"/docs/reference/query"},{default:a(()=>[se]),_:1}),ee]),ae,te,ne,le,oe,he,ce,re,ie,pe,de,ue,_e,be,je,me,ge,s("p",null,[ke,n(t,{to:"/docs/reference/query"},{default:a(()=>[we]),_:1}),xe]),ye,fe,qe,Ee,Te,Pe,Se,Re,Ae,We,Le,Qe,Oe,De,Ie,Ce,ve,Be,Ge,Me,He,Ne,Ue,Ve,ze,Fe,Je,Ke,Xe,Ye,Ze,$e,sa,ea,aa,ta,na,la,oa,ha,ca,ra,ia,pa,da])]),_:1})}}};export{ya as default,ka as description,ga as modularExtension,xa as pageClass,wa as readTime,ma as title};
