import{a as o,o as h,b as i,w as t,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=s("blockquote",null,[s("p",null,"Flows enable custom, event-driven data processing and task automation within Directus.")],-1),u=s("hr",null,null,-1),_=s("h2",{id:"the-flow-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-flow-object"},"#"),e(" The Flow Object")],-1),f=s("p",null,[s("code",null,"id"),e(),s("strong",null,"uuid"),s("br"),e(" Primary key of the flow.")],-1),g=s("p",null,[s("code",null,"name"),e(),s("strong",null,"string"),s("br"),e(" Name for the flow.")],-1),j=s("p",null,[s("code",null,"icon"),e(),s("strong",null,"string"),s("br"),e(" Icon displayed in the Admin App for the flow.")],-1),m=s("p",null,[s("code",null,"color"),e(),s("strong",null,"string"),s("br"),e(" Color of the icon displayed in the Admin App for the flow.")],-1),w=s("p",null,[s("code",null,"note"),e(),s("strong",null,"text"),s("br"),e(" Short description displayed in the Admin App.")],-1),b=s("p",null,[s("code",null,"status"),e(),s("strong",null,"string"),s("br"),e(" Current status of the flow. One of "),s("code",null,"active"),e(", "),s("code",null,"inactive"),e(". Defaults to "),s("code",null,"active"),e(" when not specified.")],-1),y=s("p",null,[s("code",null,"trigger"),e(),s("strong",null,"string"),s("br"),e(" Type of trigger for the flow. One of "),s("code",null,"hook"),e(", "),s("code",null,"webhook"),e(", "),s("code",null,"operation"),e(", "),s("code",null,"schedule"),e(", "),s("code",null,"manual"),e(".")],-1),x=s("p",null,[s("code",null,"options"),e(),s("strong",null,"json"),s("br"),e(" Options of the selected trigger for the flow.")],-1),q=s("p",null,[s("code",null,"accountability"),e(),s("strong",null,"string"),s("br"),e(" The permission used during the flow. One of "),s("code",null,"$public"),e(", "),s("code",null,"$trigger"),e(", "),s("code",null,"$full"),e(", or UUID of a role.")],-1),E=s("p",null,[s("code",null,"date_created"),e(),s("strong",null,"timestamp"),s("br"),e(" Timestamp in ISO8601 when the flow was created.")],-1),T=s("code",null,"user_created",-1),P=e(),k=s("strong",null,"many-to-one",-1),S=s("br",null,null,-1),R=e(" The user who created the flow. Many-to-one to "),A=e("users"),F=e("."),O=s("p",null,[s("code",null,"operation"),e(),s("strong",null,"string"),s("br"),e(" UUID of the operation connected to the trigger in the flow.")],-1),I=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"2fab3b9d-0543-4b87-8a30-3c5ee66fedf1"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Flow"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"icon"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"bolt"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"color"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"#112233"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"note"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Note for my flow"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"trigger"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"manual"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"accountability"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"$trigger"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"date_created"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"2022-05-11T13:14:52Z"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"user_created"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"12e62fd0-29c7-4fd3-b3d3-c7a39933e8af"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"operation"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"92e82998-e421-412f-a513-13701e83e4ce"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),v=s("hr",null,null,-1),D=s("h2",{id:"list-flows",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-flows"},"#"),e(" List Flows")],-1),L=s("p",null,"List all flows that exist in Directus.",-1),Q=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),G=e("Supports all "),M=e("global query parameters"),C=e("."),U=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),B=e("An array of up to "),H=e("limit"),N=e(),$=s("a",{href:"#the-flow-object"},"flow objects",-1),V=e(". If no items are available, data will be an empty array."),Z=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),z=s("pre",null,[s("code",null,`GET /flows
SEARCH /flows
`)],-1),J=e("Learn more about SEARCH ->"),K=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),W=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),X=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	flows: [directus_flows]
}
`)])],-1),Y=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),ss=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	flows {
		id
		name
		status
	}
}
`)])],-1),es=s("hr",null,null,-1),ts=s("h2",{id:"retrieve-a-flow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-flow"},"#"),e(" Retrieve a flow")],-1),as=s("p",null,"List an existing flow by primary key.",-1),ns=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),ls=e("Supports all "),os=e("global query parameters"),cs=e("."),rs=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),hs=s("p",null,[e("Returns the requested "),s("a",{href:"#the-flow-object"},"flow object"),e(".")],-1),is=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),ds=s("pre",null,[s("code",null,`GET /flows/:id
`)],-1),ps=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),us=s("pre",null,[s("code",null,`GET /flows/2fc325fb-299b-4d20-a9e7-a34349dee8b2
`)],-1),_s=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),fs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),gs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	flows_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_flows
}
`)])],-1),js=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),ms=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	flows_by_id(id: `),s("span",{class:"hljs-string"},'"2fc325fb-299b-4d20-a9e7-a34349dee8b2"'),e(`) {
		id
		name
		status
	}
}
`)])],-1),ws=s("hr",null,null,-1),bs=s("h2",{id:"create-a-flow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-flow"},"#"),e(" Create a Flow")],-1),ys=s("p",null,"Create a new flow.",-1),xs=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),qs=e("Supports all "),Es=e("global query parameters"),Ts=e("."),Ps=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),ks=s("p",null,[e("A partial "),s("a",{href:"#the-flow-object"},"flow object"),e(".")],-1),Ss=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),Rs=s("p",null,[e("Returns the "),s("a",{href:"#the-flow-object"},"flow object"),e(" for the created flow.")],-1),As=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Fs=s("pre",null,[s("code",null,`POST /flows
`)],-1),Os=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),Is=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /flows"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Flow"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"trigger"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"manual"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),vs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),Ds=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ls=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_flows_item(data: create_directus_flows_input!): directus_flows
}
`)])],-1),Qs=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Gs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_flows_item(data: { name: `),s("span",{class:"hljs-string"},'"My Flow"'),e(", status: "),s("span",{class:"hljs-string"},'"active"'),e(", trigger: "),s("span",{class:"hljs-string"},'"manual"'),e(` }) {
		id
		name
		status
	}
}
`)])],-1),Ms=s("hr",null,null,-1),Cs=s("h2",{id:"create-multiple-flows",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-flows"},"#"),e(" Create Multiple Flows")],-1),Us=s("p",null,"Create multiple new flows.",-1),Bs=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Hs=e("Supports all "),Ns=e("global query parameters"),$s=e("."),Vs=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),Zs=s("p",null,[e("An array of partial "),s("a",{href:"#the-flow-object"},"flow objects"),e(".")],-1),zs=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),Js=s("p",null,[e("Returns the "),s("a",{href:"#the-flow-object"},"flow object"),e(" for the created flow.")],-1),Ks=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),Ws=s("pre",null,[s("code",null,`POST /flows
`)],-1),Xs=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),Ys=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /flows"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Flow"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"trigger"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"manual"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Another Flow"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"trigger"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"webhook"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),se=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),ee=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),te=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_flows_items(data: [create_directus_flows_input!]!): [directus_flows]
}
`)])],-1),ae=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),ne=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_flows_items(
		data: [
			{
				`),s("span",{class:"hljs-string"},'"name"'),e(": "),s("span",{class:"hljs-string"},'"My Flow"'),e(`,
				`),s("span",{class:"hljs-string"},'"status"'),e(": "),s("span",{class:"hljs-string"},'"active"'),e(`,
				`),s("span",{class:"hljs-string"},'"trigger"'),e(": "),s("span",{class:"hljs-string"},'"manual"'),e(`
			},
			{
				`),s("span",{class:"hljs-string"},'"name"'),e(": "),s("span",{class:"hljs-string"},'"Another Flow"'),e(`,
				`),s("span",{class:"hljs-string"},'"status"'),e(": "),s("span",{class:"hljs-string"},'"active"'),e(`,
				`),s("span",{class:"hljs-string"},'"trigger"'),e(": "),s("span",{class:"hljs-string"},'"webhook"'),e(`
			}
		]
	) {
		id
		name
		status
	}
}
`)])],-1),le=s("hr",null,null,-1),oe=s("h2",{id:"update-a-flow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-flow"},"#"),e(" Update a Flow")],-1),ce=s("p",null,"Update an existing flow.",-1),re=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),he=e("Supports all "),ie=e("global query parameters"),de=e("."),pe=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),ue=s("p",null,[e("A partial "),s("a",{href:"#the-flow-object"},"flow object"),e(".")],-1),_e=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),fe=s("p",null,[e("Returns the "),s("a",{href:"#the-flow-object"},"flow object"),e(" for the updated flow.")],-1),ge=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),je=s("pre",null,[s("code",null,`PATCH /flows/:id
`)],-1),me=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),we=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /flows/2fc325fb-299b-4d20-a9e7-a34349dee8b2"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"My Updated Flow"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),be=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),ye=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),xe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_flows_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_flows_input): directus_flows
}
`)])],-1),qe=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),Ee=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_flows_item(id: `),s("span",{class:"hljs-string"},'"2fc325fb-299b-4d20-a9e7-a34349dee8b2"'),e(", data: { name: "),s("span",{class:"hljs-string"},'"My Updated Flow"'),e(` }) {
		id
		name
	}
}
`)])],-1),Te=s("hr",null,null,-1),Pe=s("h2",{id:"update-multiple-flows",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-flows"},"#"),e(" Update Multiple Flows")],-1),ke=s("p",null,"Update multiple existing flows.",-1),Se=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),Re=e("Supports all "),Ae=e("global query parameters"),Fe=e("."),Oe=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),Ie=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the flows you\u2019d like to update.")],-1),ve=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-flow-object"},"the flow object"),e("\u2019s properties.")],-1),De=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),Le=s("p",null,[e("Returns the "),s("a",{href:"#the-flow-object"},"flow objects"),e(" for the updated flows.")],-1),Qe=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Ge=s("pre",null,[s("code",null,`PATCH /flows
`)],-1),Me=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),Ce=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /flows"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"3f2facab-7f05-4ee8-a7a3-d8b9c634a1fc"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"7259bfa8-3786-45c6-8c08-cc688e7ba229"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"inactive"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Ue=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),Be=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),He=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_flows_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_flows_input): [directus_flows]
}
`)])],-1),Ne=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),$e=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_flows_items(
		ids: [`),s("span",{class:"hljs-string"},'"3f2facab-7f05-4ee8-a7a3-d8b9c634a1fc"'),e(", "),s("span",{class:"hljs-string"},'"7259bfa8-3786-45c6-8c08-cc688e7ba229"'),e(`]
		data: { status: `),s("span",{class:"hljs-string"},'"inactive"'),e(` }
	) {
		id
		name
		status
	}
}
`)])],-1),Ve=s("hr",null,null,-1),Ze=s("h2",{id:"delete-a-flow",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-flow"},"#"),e(" Delete a Flow")],-1),ze=s("p",null,"Delete an existing flow.",-1),Je=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),Ke=s("p",null,"Empty body.",-1),We=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),Xe=s("pre",null,[s("code",null,`DELETE /flows/:id
`)],-1),Ye=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),st=s("pre",null,[s("code",null,`DELETE /flows/12204ee2-2c82-4d9a-b044-2f4842a11dba
`)],-1),et=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),tt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),at=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_flows_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),nt=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),lt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_flows_item(id: `),s("span",{class:"hljs-string"},'"12204ee2-2c82-4d9a-b044-2f4842a11dba"'),e(`) {
		id
	}
}
`)])],-1),ot=s("hr",null,null,-1),ct=s("h2",{id:"delete-multiple-flows",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-flows"},"#"),e(" Delete Multiple Flows")],-1),rt=s("p",null,"Delete multiple existing flows.",-1),ht=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),it=s("p",null,"An array of flows primary keys",-1),dt=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),pt=s("p",null,"Empty body.",-1),ut=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),_t=s("pre",null,[s("code",null,`DELETE /flows
`)],-1),ft=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),e(" Example")],-1),gt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /flows"),e(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"25821236-8c2a-4f89-8fdc-c7d01f35877d"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"02b9486e-4273-4fd5-b94b-e18fd923d1ed"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"7d62f1e9-a83f-407b-84f8-1c184f014501"'),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),jt=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),mt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),wt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_flows_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),bt=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),e(" Example")],-1),yt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_flows_items(
		ids: [
			`),s("span",{class:"hljs-string"},'"25821236-8c2a-4f89-8fdc-c7d01f35877d"'),e(`
			`),s("span",{class:"hljs-string"},'"02b9486e-4273-4fd5-b94b-e18fd923d1ed"'),e(`
			`),s("span",{class:"hljs-string"},'"7d62f1e9-a83f-407b-84f8-1c184f014501"'),e(`
		]
	) {
		ids
	}
}
`)])],-1),xt=s("h2",{id:"flow-with-get-webhook-trigger",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flow-with-get-webhook-trigger"},"#"),e(" Flow with GET webhook trigger")],-1),qt=s("p",null,"Start a flow with GET webhook trigger.",-1),Et=s("h3",{id:"returns-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-8"},"#"),e(" Returns")],-1),Tt=s("p",null,"Result of the flow, if any.",-1),Pt=s("h3",{id:"rest-api-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-8"},"#"),e(" REST API")],-1),kt=s("pre",null,[s("code",null,`GET /flows/trigger/:flow_uuid
`)],-1),St=s("h5",{id:"example-15",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-15"},"#"),e(" Example")],-1),Rt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// GET /flows/trigger/202a940b-a00b-47df-b832-369c53f13122"),e(`
`),s("span",{class:"hljs-comment"},"// Payload here"),e(`
`)])],-1),At=s("h2",{id:"flow-with-post-webhook-trigger",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#flow-with-post-webhook-trigger"},"#"),e(" Flow with POST webhook trigger")],-1),Ft=s("p",null,"Start a flow with POST webhook trigger.",-1),Ot=s("h3",{id:"request-body-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-5"},"#"),e(" Request Body")],-1),It=s("p",null,"Payload for the POST request.",-1),vt=s("h3",{id:"returns-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-9"},"#"),e(" Returns")],-1),Dt=s("p",null,"Result of the flow, if any.",-1),Lt=s("h3",{id:"rest-api-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-9"},"#"),e(" REST API")],-1),Qt=s("pre",null,[s("code",null,`POST /flows/trigger/:flow_uuid
`)],-1),Gt=s("h5",{id:"example-16",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-16"},"#"),e(" Example")],-1),Mt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /flows/trigger/202a940b-a00b-47df-b832-369c53f13122"),e(`
`),s("span",{class:"hljs-comment"},"// Payload here"),e(`
`)])],-1),Nt="Flows",$t=!1,Vt="REST and GraphQL API documentation on the Flows collection in Directus.",Zt="5 min read",zt="page-reference",Jt={name:"flows",setup(Ct,{expose:c}){const l={title:"Flows",modularExtension:!1,description:"REST and GraphQL API documentation on the Flows collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return c({frontmatter:l}),(Ut,Bt)=>{const a=o("router-link"),r=o("docs-wrapper");return h(),i(r,{frontmatter:l},{default:t(()=>[s("div",d,[p,u,_,f,g,j,m,w,b,y,x,q,E,s("p",null,[T,P,k,S,R,n(a,{to:"/docs/reference/system/users#the-users-object"},{default:t(()=>[A]),_:1}),F]),O,I,v,D,L,Q,s("p",null,[G,n(a,{to:"/docs/reference/query"},{default:t(()=>[M]),_:1}),C]),U,s("p",null,[B,n(a,{to:"/docs/reference/query#limit"},{default:t(()=>[H]),_:1}),N,$,V]),Z,z,s("p",null,[n(a,{to:"/docs/reference/introduction#search-http-method"},{default:t(()=>[J]),_:1})]),K,W,X,Y,ss,es,ts,as,ns,s("p",null,[ls,n(a,{to:"/docs/reference/query"},{default:t(()=>[os]),_:1}),cs]),rs,hs,is,ds,ps,us,_s,fs,gs,js,ms,ws,bs,ys,xs,s("p",null,[qs,n(a,{to:"/docs/reference/query"},{default:t(()=>[Es]),_:1}),Ts]),Ps,ks,Ss,Rs,As,Fs,Os,Is,vs,Ds,Ls,Qs,Gs,Ms,Cs,Us,Bs,s("p",null,[Hs,n(a,{to:"/docs/reference/query"},{default:t(()=>[Ns]),_:1}),$s]),Vs,Zs,zs,Js,Ks,Ws,Xs,Ys,se,ee,te,ae,ne,le,oe,ce,re,s("p",null,[he,n(a,{to:"/docs/reference/query"},{default:t(()=>[ie]),_:1}),de]),pe,ue,_e,fe,ge,je,me,we,be,ye,xe,qe,Ee,Te,Pe,ke,Se,s("p",null,[Re,n(a,{to:"/docs/reference/query"},{default:t(()=>[Ae]),_:1}),Fe]),Oe,Ie,ve,De,Le,Qe,Ge,Me,Ce,Ue,Be,He,Ne,$e,Ve,Ze,ze,Je,Ke,We,Xe,Ye,st,et,tt,at,nt,lt,ot,ct,rt,ht,it,dt,pt,ut,_t,ft,gt,jt,mt,wt,bt,yt,xt,qt,Et,Tt,Pt,kt,St,Rt,At,Ft,Ot,It,vt,Dt,Lt,Qt,Gt,Mt])]),_:1})}}};export{Jt as default,Vt as description,$t as modularExtension,zt as pageClass,Zt as readTime,Nt as title};
