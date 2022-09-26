import{a as l,o as i,b as h,w as t,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const p={class:"markdown-body"},d=s("blockquote",null,[s("p",null,"Operations are the building blocks of Data Flows within Directus.")],-1),u=s("hr",null,null,-1),_=s("h2",{id:"the-operation-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-operation-object"},"#"),e(" The Operation Object")],-1),j=s("p",null,[s("code",null,"id"),e(),s("strong",null,"uuid"),s("br"),e(" Primary key of the operation.")],-1),g=s("p",null,[s("code",null,"name"),e(),s("strong",null,"string"),s("br"),e(" Name for the operation.")],-1),m=s("p",null,[s("code",null,"key"),e(),s("strong",null,"string"),s("br"),e(" Key for the operation. Must be unique within a given flow.")],-1),f=s("p",null,[s("code",null,"type"),e(),s("strong",null,"string"),s("br"),e(" Type of operation. One of "),s("code",null,"log"),e(", "),s("code",null,"mail"),e(", "),s("code",null,"notification"),e(", "),s("code",null,"create"),e(", "),s("code",null,"read"),e(", "),s("code",null,"request"),e(", "),s("code",null,"sleep"),e(", "),s("code",null,"transform"),e(", "),s("code",null,"trigger"),e(", "),s("code",null,"condition"),e(", or any type of custom operation extensions.")],-1),b=s("p",null,[s("code",null,"options"),e(),s("strong",null,"json"),s("br"),e(" Options depending on the type of the operation.")],-1),y=s("p",null,[s("code",null,"position_x"),e(),s("strong",null,"integer"),s("br"),e(" Position of the operation on the X axis within the flow workspace.")],-1),x=s("p",null,[s("code",null,"position_y"),e(),s("strong",null,"integer"),s("br"),e(" Position of the operation on the Y axis within the flow workspace.")],-1),q=s("p",null,[s("code",null,"date_created"),e(),s("strong",null,"timestamp"),s("br"),e(" Timestamp in ISO8601 when the operation was created.")],-1),k=s("code",null,"user_created",-1),w=e(),E=s("strong",null,"many-to-one",-1),T=s("br",null,null,-1),P=e(" The user who created the operation. Many-to-one to "),R=e("users"),S=e("."),O=s("p",null,[s("code",null,"resolve"),e(),s("strong",null,"uuid"),s("br"),e(" The operation triggered when the current operation succeeds (or "),s("code",null,"then"),e(" logic of a condition operation). Primary key of an "),s("a",{href:"#the-operation-object"},"operation"),e(".")],-1),A=s("p",null,[s("code",null,"reject"),e(),s("strong",null,"uuid"),s("br"),e(" The operation triggered when the current operation fails (or "),s("code",null,"otherwise"),e(" logic of a condition operation). Primary key of an "),s("a",{href:"#the-operation-object"},"operation"),e(".")],-1),L=s("code",null,"flow",-1),M=e(),D=s("strong",null,"many-to-one",-1),I=s("br",null,null,-1),Q=e(" The flow containing this operation. Many-to-one to "),C=e("flows"),G=e("."),v=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"585b04cd-2821-4dcc-a563-ae5d29ecace2"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Log a Message"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"key"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"log_message"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"type"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"log"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"position_x"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"12"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"position_y"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"24"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"date_created"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"2022-05-11T13:14:52Z"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"user_created"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"12e62fd0-29c7-4fd3-b3d3-c7a39933e8af"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"resolve"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"bf4099c0-c54c-4736-ab4e-95e2487595e4"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"reject"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"flow"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"22544db5-93f7-48e2-a028-7ae02c8fe49a"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),B=s("hr",null,null,-1),U=s("h2",{id:"list-operations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-operations"},"#"),e(" List Operations")],-1),H=s("p",null,"List all operations that exist in Directus.",-1),N=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),V=e("Supports all "),F=e("global query parameters"),K=e("."),X=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),Y=e("An array of up to "),Z=e("limit"),z=e(),J=s("a",{href:"#the-operation-object"},"operation objects",-1),W=e(". If no items are available, data will be an empty array."),$=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),ss=s("pre",null,[s("code",null,`GET /operations
SEARCH /operations
`)],-1),es=e("Learn more about SEARCH ->"),ts=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),as=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ns=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	operations: [directus_operations]
}
`)])],-1),os=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),ls=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	operations {
		id
		name
		key
	}
}
`)])],-1),rs=s("hr",null,null,-1),cs=s("h2",{id:"retrieve-an-operation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-an-operation"},"#"),e(" Retrieve an operation")],-1),is=s("p",null,"List an existing operation by primary key.",-1),hs=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),ps=e("Supports all "),ds=e("global query parameters"),us=e("."),_s=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),js=s("p",null,[e("Returns the requested "),s("a",{href:"#the-operation-object"},"operation object"),e(".")],-1),gs=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),ms=s("pre",null,[s("code",null,`GET /operations/:id
`)],-1),fs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),bs=s("pre",null,[s("code",null,`GET /operations/3c636d1c-4eb2-49cd-8a6d-3ec571ab3390
`)],-1),ys=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),xs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),qs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	operations_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_operations
}
`)])],-1),ks=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),ws=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	operations_by_id(id: `),s("span",{class:"hljs-number"},"42"),e(`) {
		id
		name
		key
	}
}
`)])],-1),Es=s("hr",null,null,-1),Ts=s("h2",{id:"create-an-operation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-an-operation"},"#"),e(" Create an Operation")],-1),Ps=s("p",null,"Create a new operation.",-1),Rs=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),Ss=e("Supports all "),Os=e("global query parameters"),As=e("."),Ls=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),Ms=s("p",null,[e("A partial "),s("a",{href:"#the-operation-object"},"operation object"),e(".")],-1),Ds=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),Is=s("p",null,[e("Returns the "),s("a",{href:"#the-operation-object"},"operation object"),e(" for the created operation.")],-1),Qs=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Cs=s("pre",null,[s("code",null,`POST /operations
`)],-1),Gs=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),vs=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /operations"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Log"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"key"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"my_log"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"type"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"log"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Bs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),Us=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Hs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_operations_item(data: create_directus_operations_input!): directus_operations
}
`)])],-1),Ns=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Vs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_operations_item(data: { name: `),s("span",{class:"hljs-string"},'"My Log"'),e(", key: "),s("span",{class:"hljs-string"},'"my_log"'),e(", "),s("span",{class:"hljs-keyword"},"type"),e(": "),s("span",{class:"hljs-string"},'"log"'),e(` }) {
		id
		name
		key
	}
}
`)])],-1),Fs=s("hr",null,null,-1),Ks=s("h2",{id:"create-multiple-operations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-operations"},"#"),e(" Create Multiple Operations")],-1),Xs=s("p",null,"Create multiple new operations.",-1),Ys=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Zs=e("Supports all "),zs=e("global query parameters"),Js=e("."),Ws=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),$s=s("p",null,[e("An array of partial "),s("a",{href:"#the-operation-object"},"operation objects"),e(".")],-1),se=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),ee=s("p",null,[e("Returns the "),s("a",{href:"#the-operation-object"},"operation object"),e(" for the created operation.")],-1),te=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),ae=s("pre",null,[s("code",null,`POST /operations
`)],-1),ne=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),oe=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /operations"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Log"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"key"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"my_log"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"type"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"log"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Send Notification"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"key"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"send_notification"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"type"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"notification"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),le=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),re=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ce=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_operations_items(data: [create_directus_operations_input!]!): [directus_operations]
}
`)])],-1),ie=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),he=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_operations_items(
		data: [
			{
				`),s("span",{class:"hljs-string"},'"name"'),e(": "),s("span",{class:"hljs-string"},'"My Log"'),e(`,
				`),s("span",{class:"hljs-string"},'"key"'),e(": "),s("span",{class:"hljs-string"},'"my_log"'),e(`,
				`),s("span",{class:"hljs-string"},'"type"'),e(": "),s("span",{class:"hljs-string"},'"log"'),e(`
			},
			{
				`),s("span",{class:"hljs-string"},'"name"'),e(": "),s("span",{class:"hljs-string"},'"Send Notification"'),e(`,
				`),s("span",{class:"hljs-string"},'"key"'),e(": "),s("span",{class:"hljs-string"},'"send_notification"'),e(`,
				`),s("span",{class:"hljs-string"},'"type"'),e(": "),s("span",{class:"hljs-string"},'"notification"'),e(`
			}
		]
	) {
		id
		name
		key
	}
}
`)])],-1),pe=s("hr",null,null,-1),de=s("h2",{id:"update-an-operation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-an-operation"},"#"),e(" Update an Operation")],-1),ue=s("p",null,"Update an existing operation.",-1),_e=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),je=e("Supports all "),ge=e("global query parameters"),me=e("."),fe=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),be=s("p",null,[e("A partial "),s("a",{href:"#the-operation-object"},"operation object"),e(".")],-1),ye=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),xe=s("p",null,[e("Returns the "),s("a",{href:"#the-operation-object"},"operation object"),e(" for the updated operation.")],-1),qe=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),ke=s("pre",null,[s("code",null,`PATCH /operation/:id
`)],-1),we=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),Ee=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /operation/7d62f1e9-a83f-407b-84f8-1c184f014501"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Updated Operation"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Te=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),Pe=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Re=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_operations_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_operations_input): directus_operations
}
`)])],-1),Se=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),Oe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_operations_item(id: `),s("span",{class:"hljs-string"},'"7d62f1e9-a83f-407b-84f8-1c184f014501"'),e(", data: { name: "),s("span",{class:"hljs-string"},'"My Updated Operation"'),e(` }) {
		id
		name
	}
}
`)])],-1),Ae=s("hr",null,null,-1),Le=s("h2",{id:"update-multiple-operations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-operations"},"#"),e(" Update Multiple Operations")],-1),Me=s("p",null,"Update multiple existing operations.",-1),De=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),Ie=e("Supports all "),Qe=e("global query parameters"),Ce=e("."),Ge=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),ve=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the operations you\u2019d like to update.")],-1),Be=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-operation-object"},"the operation object"),e("\u2019s properties.")],-1),Ue=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),He=s("p",null,[e("Returns the "),s("a",{href:"#the-operation-object"},"operation objects"),e(" for the updated operations.")],-1),Ne=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Ve=s("pre",null,[s("code",null,`PATCH /operations
`)],-1),Fe=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),Ke=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /operations"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"6a25fb7c-26a4-4dcb-a474-d47b6a203a38"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"07ac467e-1900-4c62-9637-8dac2ab97f71"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Updated Operations"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Xe=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),Ye=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ze=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_operations_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_operations_input): [directus_operations]
}
`)])],-1),ze=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),Je=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_operations_items(
		ids: [`),s("span",{class:"hljs-string"},'"6a25fb7c-26a4-4dcb-a474-d47b6a203a38"'),e(", "),s("span",{class:"hljs-string"},'"07ac467e-1900-4c62-9637-8dac2ab97f71"'),e(`]
		data: { name: `),s("span",{class:"hljs-string"},'"Updated Operations"'),e(` }
	) {
		id
		name
		key
	}
}
`)])],-1),We=s("hr",null,null,-1),$e=s("h2",{id:"delete-an-operation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-an-operation"},"#"),e(" Delete an Operation")],-1),st=s("p",null,"Delete an existing operation.",-1),et=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),tt=s("p",null,"Empty body.",-1),at=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),nt=s("pre",null,[s("code",null,`DELETE /operations/:id
`)],-1),ot=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),lt=s("pre",null,[s("code",null,`DELETE /operations/07ac467e-1900-4c62-9637-8dac2ab97f71
`)],-1),rt=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),ct=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),it=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_operations_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),ht=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),pt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_operations_item(id: `),s("span",{class:"hljs-string"},'"07ac467e-1900-4c62-9637-8dac2ab97f71"'),e(`) {
		id
	}
}
`)])],-1),dt=s("hr",null,null,-1),ut=s("h2",{id:"delete-multiple-operations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-operations"},"#"),e(" Delete Multiple Operations")],-1),_t=s("p",null,"Delete multiple existing operations.",-1),jt=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),gt=s("p",null,"An array of operations primary keys",-1),mt=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),ft=s("p",null,"Empty body.",-1),bt=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),yt=s("pre",null,[s("code",null,`DELETE /operations
`)],-1),xt=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),e(" Example")],-1),qt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /operations"),e(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"a791ce73-41a2-4fb7-8f67-c7ba176cc719"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"4e57ab0e-f4ec-47b5-9dad-e36f08a25642"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"5fe0a6f6-18ad-4bb3-94c6-2e033246c784"'),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),kt=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),wt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Et=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_operations_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),Tt=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),e(" Example")],-1),Pt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_operations_items(
		ids: [
			`),s("span",{class:"hljs-string"},'"a791ce73-41a2-4fb7-8f67-c7ba176cc719"'),e(`
			`),s("span",{class:"hljs-string"},'"4e57ab0e-f4ec-47b5-9dad-e36f08a25642"'),e(`
			`),s("span",{class:"hljs-string"},'"5fe0a6f6-18ad-4bb3-94c6-2e033246c784"'),e(`
		]
	) {
		ids
	}
}
`)])],-1),Rt=s("h2",{id:"triggering-an-operation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#triggering-an-operation"},"#"),e(" Triggering an operation")],-1),St=s("p",null,"Trigger an operation based on primary key.",-1),Ot=s("h3",{id:"request-body-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-5"},"#"),e(" Request Body")],-1),At=s("p",null,"Payload for the operation, if needed.",-1),Lt=s("h3",{id:"returns-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-8"},"#"),e(" Returns")],-1),Mt=s("p",null,"Result of the operation, if any.",-1),Dt=s("h3",{id:"rest-api-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-8"},"#"),e(" REST API")],-1),It=s("pre",null,[s("code",null,`POST /operations/trigger/:operation_uuid
`)],-1),Qt=s("h5",{id:"example-15",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-15"},"#"),e(" Example")],-1),Ct=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /flows/trigger/202a940b-a00b-47df-b832-369c53f13122"),e(`
`),s("span",{class:"hljs-comment"},"// Payload here"),e(`
`)])],-1),Ht="Operations",Nt=!1,Vt="REST and GraphQL API documentation on the Operations collection in Directus.",Ft="5 min read",Kt="page-reference",Xt={name:"operations",setup(Gt,{expose:r}){const o={title:"Operations",modularExtension:!1,description:"REST and GraphQL API documentation on the Operations collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return r({frontmatter:o}),(vt,Bt)=>{const a=l("router-link"),c=l("docs-wrapper");return i(),h(c,{frontmatter:o},{default:t(()=>[s("div",p,[d,u,_,j,g,m,f,b,y,x,q,s("p",null,[k,w,E,T,P,n(a,{to:"/docs/reference/system/users#the-users-object"},{default:t(()=>[R]),_:1}),S]),O,A,s("p",null,[L,M,D,I,Q,n(a,{to:"/docs/reference/system/flows#the-flow-object"},{default:t(()=>[C]),_:1}),G]),v,B,U,H,N,s("p",null,[V,n(a,{to:"/docs/reference/query"},{default:t(()=>[F]),_:1}),K]),X,s("p",null,[Y,n(a,{to:"/docs/reference/query#limit"},{default:t(()=>[Z]),_:1}),z,J,W]),$,ss,s("p",null,[n(a,{to:"/docs/reference/introduction#search-http-method"},{default:t(()=>[es]),_:1})]),ts,as,ns,os,ls,rs,cs,is,hs,s("p",null,[ps,n(a,{to:"/docs/reference/query"},{default:t(()=>[ds]),_:1}),us]),_s,js,gs,ms,fs,bs,ys,xs,qs,ks,ws,Es,Ts,Ps,Rs,s("p",null,[Ss,n(a,{to:"/docs/reference/query"},{default:t(()=>[Os]),_:1}),As]),Ls,Ms,Ds,Is,Qs,Cs,Gs,vs,Bs,Us,Hs,Ns,Vs,Fs,Ks,Xs,Ys,s("p",null,[Zs,n(a,{to:"/docs/reference/query"},{default:t(()=>[zs]),_:1}),Js]),Ws,$s,se,ee,te,ae,ne,oe,le,re,ce,ie,he,pe,de,ue,_e,s("p",null,[je,n(a,{to:"/docs/reference/query"},{default:t(()=>[ge]),_:1}),me]),fe,be,ye,xe,qe,ke,we,Ee,Te,Pe,Re,Se,Oe,Ae,Le,Me,De,s("p",null,[Ie,n(a,{to:"/docs/reference/query"},{default:t(()=>[Qe]),_:1}),Ce]),Ge,ve,Be,Ue,He,Ne,Ve,Fe,Ke,Xe,Ye,Ze,ze,Je,We,$e,st,et,tt,at,nt,ot,lt,rt,ct,it,ht,pt,dt,ut,_t,jt,gt,mt,ft,bt,yt,xt,qt,kt,wt,Et,Tt,Pt,Rt,St,Ot,At,Lt,Mt,Dt,It,Qt,Ct])]),_:1})}}};export{Xt as default,Vt as description,Nt as modularExtension,Kt as pageClass,Ft as readTime,Ht as title};
