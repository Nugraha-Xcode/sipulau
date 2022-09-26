import{a as r,o as h,b as p,w as t,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const i={class:"markdown-body"},u=e("Presets hold the preferences of individual users of the platform. This allows Directus to show and maintain custom item listings and bookmarks for users of the app. "),d=e("Learn more about Presets"),_=e("."),j=s("hr",null,null,-1),m=s("h2",{id:"the-preset-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-preset-object"},"#"),e(" The Preset Object")],-1),b=s("p",null,[s("code",null,"id"),e(),s("strong",null,"uuid"),s("br"),e(" Primary key of the preset.")],-1),y=s("p",null,[s("code",null,"bookmark"),e(),s("strong",null,"string"),s("br"),e(" The title of the bookmark. If this value is "),s("code",null,"null"),e(", it\u2019s considered a preset instead of a bookmark.")],-1),g=s("code",null,"user",-1),f=e(),x=s("strong",null,"many-to-one",-1),q=s("br",null,null,-1),P=e(" User this preset applies to. Many-to-one to "),E=e("users"),T=e("."),k=s("code",null,"role",-1),R=e(),w=s("strong",null,"many-to-one",-1),S=s("br",null,null,-1),A=e(" Role this preset applies to. Many-to-one to "),D=e("users"),L=e("."),Q=s("p",null,[s("code",null,"collection"),e(),s("strong",null,"string"),s("br"),e(" Collection this preset applies to.")],-1),I=s("p",null,[s("code",null,"search"),e(),s("strong",null,"string"),s("br"),e(" The search query used in the preset.")],-1),C=s("p",null,[s("code",null,"filters"),e(),s("strong",null,"array"),s("br"),e(" The filters used in the preset.")],-1),G=s("p",null,[s("code",null,"layout"),e(),s("strong",null,"string"),s("br"),e(" The layout used in this preset.")],-1),O=s("p",null,[s("code",null,"layout_query"),e(),s("strong",null,"object"),s("br"),e(" The item query used by the layout. This structure is based on the used layout.")],-1),v=s("p",null,[s("code",null,"layout_options"),e(),s("strong",null,"object"),s("br"),e(" The options used by the layout. This structure is based on the used layout.")],-1),M=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"39"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"bookmark"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_activity"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"search"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"filters"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"tabular"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"layout_query"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"tabular"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
			`),s("span",{class:"hljs-attr"},'"sort"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"-timestamp"'),s("span",{class:"hljs-punctuation"},","),e(`
			`),s("span",{class:"hljs-attr"},'"fields"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"action"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"collection"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"timestamp"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"user"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
			`),s("span",{class:"hljs-attr"},'"page"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"1"),e(`
		`),s("span",{class:"hljs-punctuation"},"}"),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"layout_options"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"tabular"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
			`),s("span",{class:"hljs-attr"},'"widths"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
				`),s("span",{class:"hljs-attr"},'"action"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"100"),s("span",{class:"hljs-punctuation"},","),e(`
				`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"210"),s("span",{class:"hljs-punctuation"},","),e(`
				`),s("span",{class:"hljs-attr"},'"timestamp"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"240"),s("span",{class:"hljs-punctuation"},","),e(`
				`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"240"),e(`
			`),s("span",{class:"hljs-punctuation"},"}"),e(`
		`),s("span",{class:"hljs-punctuation"},"}"),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),B=s("hr",null,null,-1),H=s("h2",{id:"list-presets",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-presets"},"#"),e(" List Presets")],-1),U=s("p",null,"List all presets that exist in Directus.",-1),N=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The data returned in this endpoint will be filtered based on the user\u2019s permissions. For example, presets for a role other than the current user\u2019s role won\u2019t be returned.")],-1),V=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),F=e("Supports all "),z=e("global query parameters"),J=e("."),K=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),W=e("An array of up to "),X=e("limit"),Y=e(),Z=s("a",{href:"#the-preset-object"},"preset objects",-1),$=e(". If no items are available, data will be an empty array."),ss=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),es=s("pre",null,[s("code",null,`GET /presets
SEARCH /presets
`)],-1),ts=e("Learn more about SEARCH ->"),as=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),ns=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ls=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	presets: [directus_presets]
}
`)])],-1),rs=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),os=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	presets {
		id
		user
	}
}
`)])],-1),cs=s("hr",null,null,-1),hs=s("h2",{id:"retrieve-a-preset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-preset"},"#"),e(" Retrieve a preset")],-1),ps=s("p",null,"List an existing preset by primary key.",-1),is=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),us=e("Supports all "),ds=e("global query parameters"),_s=e("."),js=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),ms=s("p",null,[e("Returns the requested "),s("a",{href:"#the-preset-object"},"preset object"),e(".")],-1),bs=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),ys=s("pre",null,[s("code",null,`GET /presets/:id
`)],-1),gs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),fs=s("pre",null,[s("code",null,`GET /presets/42
`)],-1),xs=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),qs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ps=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	presets_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_presets
}
`)])],-1),Es=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),Ts=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	presets_by_id(id: `),s("span",{class:"hljs-number"},"42"),e(`) {
		id
		user
	}
}
`)])],-1),ks=s("hr",null,null,-1),Rs=s("h2",{id:"create-a-preset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-preset"},"#"),e(" Create a Preset")],-1),ws=s("p",null,"Create a new preset.",-1),Ss=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),As=e("Supports all "),Ds=e("global query parameters"),Ls=e("."),Qs=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),Is=s("p",null,[e("A partial "),s("a",{href:"#the-preset-object"},"preset object"),e(".")],-1),Cs=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),Gs=s("p",null,[e("Returns the "),s("a",{href:"#the-preset-object"},"preset object"),e(" for the created preset.")],-1),Os=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),vs=s("pre",null,[s("code",null,`POST /presets
`)],-1),Ms=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),Bs=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /presets"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"cards"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"search"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Directus"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Hs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),Us=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ns=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_presets_item(data: create_directus_presets_input!): directus_presets
}
`)])],-1),Vs=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Fs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_presets_item(data: { user: `),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),e(", layout: "),s("span",{class:"hljs-string"},'"cards"'),e(", search: "),s("span",{class:"hljs-string"},'"Directus"'),e(` }) {
		id
		user
	}
}
`)])],-1),zs=s("hr",null,null,-1),Js=s("h2",{id:"create-multiple-presets",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-presets"},"#"),e(" Create Multiple Presets")],-1),Ks=s("p",null,"Create multiple new presets.",-1),Ws=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Xs=e("Supports all "),Ys=e("global query parameters"),Zs=e("."),$s=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),se=s("p",null,[e("An array of partial "),s("a",{href:"#the-preset-object"},"preset objects"),e(".")],-1),ee=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),te=s("p",null,[e("Returns the "),s("a",{href:"#the-preset-object"},"preset object"),e(" for the created preset.")],-1),ae=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),ne=s("pre",null,[s("code",null,`POST /presets
`)],-1),le=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),re=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /presets"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_files"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"cards"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"search"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Directus"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"user"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"tabular"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),oe=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),ce=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),he=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_presets_items(data: [create_directus_presets_input!]!): [directus_presets]
}
`)])],-1),pe=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),ie=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_presets_items(
		data: [
			{
				collection: `),s("span",{class:"hljs-string"},'"directus_files"'),e(`
				user: `),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),e(`
				layout: `),s("span",{class:"hljs-string"},'"cards"'),e(`
				search: `),s("span",{class:"hljs-string"},'"Directus"'),e(`
			}
			{ collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", user: "),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),e(", layout: "),s("span",{class:"hljs-string"},'"tabular"'),e(` }
		]
	) {
		id
		user
	}
}
`)])],-1),ue=s("hr",null,null,-1),de=s("h2",{id:"update-a-preset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-preset"},"#"),e(" Update a Preset")],-1),_e=s("p",null,"Update an existing preset.",-1),je=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),me=e("Supports all "),be=e("global query parameters"),ye=e("."),ge=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),fe=s("p",null,[e("A partial "),s("a",{href:"#the-preset-object"},"preset object"),e(".")],-1),xe=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),qe=s("p",null,[e("Returns the "),s("a",{href:"#the-preset-object"},"preset object"),e(" for the updated preset.")],-1),Pe=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),Ee=s("pre",null,[s("code",null,`PATCH /presets/:id
`)],-1),Te=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),ke=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /presets/34"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"tabular"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Re=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),we=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Se=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_presets_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_presets_input): directus_presets
}
`)])],-1),Ae=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),De=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_presets_item(id: `),s("span",{class:"hljs-number"},"32"),e(", data: { layout: "),s("span",{class:"hljs-string"},'"tabular"'),e(` }) {
		id
		user
	}
}
`)])],-1),Le=s("hr",null,null,-1),Qe=s("h2",{id:"update-multiple-presets",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-presets"},"#"),e(" Update Multiple Presets")],-1),Ie=s("p",null,"Update multiple existing presets.",-1),Ce=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),Ge=e("Supports all "),Oe=e("global query parameters"),ve=e("."),Me=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),Be=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the presets you\u2019d like to update.")],-1),He=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-preset-object"},"the preset object"),e("\u2019s properties.")],-1),Ue=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),Ne=s("p",null,[e("Returns the "),s("a",{href:"#the-preset-object"},"preset objects"),e(" for the updated presets.")],-1),Ve=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Fe=s("pre",null,[s("code",null,`PATCH /presets
`)],-1),ze=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),Je=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /presets"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"64"),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"layout"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"tabular"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Ke=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),We=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Xe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_presets_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_presets_input): [directus_presets]
}
`)])],-1),Ye=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),Ze=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_presets_items(ids: [`),s("span",{class:"hljs-number"},"15"),e(", "),s("span",{class:"hljs-number"},"64"),e("], data: { layout: "),s("span",{class:"hljs-string"},'"tabular"'),e(` }) {
		id
		user
	}
}
`)])],-1),$e=s("hr",null,null,-1),st=s("h2",{id:"delete-a-preset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-preset"},"#"),e(" Delete a Preset")],-1),et=s("p",null,"Delete an existing preset.",-1),tt=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),at=s("p",null,"Empty body.",-1),nt=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),lt=s("pre",null,[s("code",null,`DELETE /presets/:id
`)],-1),rt=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),ot=s("pre",null,[s("code",null,`DELETE /presets/34
`)],-1),ct=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),ht=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),pt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_presets_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),it=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),ut=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_presets_item(id: `),s("span",{class:"hljs-number"},"32"),e(`) {
		id
	}
}
`)])],-1),dt=s("hr",null,null,-1),_t=s("h2",{id:"delete-multiple-presets",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-presets"},"#"),e(" Delete Multiple Presets")],-1),jt=s("p",null,"Delete multiple existing presets.",-1),mt=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),bt=s("p",null,"An array of preset primary keys",-1),yt=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),gt=s("p",null,"Empty body.",-1),ft=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),xt=s("pre",null,[s("code",null,`DELETE /presets
`)],-1),qt=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),e(" Example")],-1),Pt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /presets"),e(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"251"),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-number"},"810"),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),Et=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),Tt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),kt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_presets_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),Rt=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),e(" Example")],-1),wt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_presets_items(ids: [`),s("span",{class:"hljs-number"},"15"),e(", "),s("span",{class:"hljs-number"},"251"),e(", "),s("span",{class:"hljs-number"},"810"),e(`]) {
		ids
	}
}
`)])],-1),Qt="Preset",It=!1,Ct="REST and GraphQL API documentation on the Presets collection in Directus.",Gt="5 min read",Ot="page-reference",vt={name:"presets",setup(St,{expose:o}){const l={title:"Preset",modularExtension:!1,description:"REST and GraphQL API documentation on the Presets collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return o({frontmatter:l}),(At,Dt)=>{const a=r("router-link"),c=r("docs-wrapper");return h(),p(c,{frontmatter:l},{default:t(()=>[s("div",i,[s("blockquote",null,[s("p",null,[u,n(a,{to:"/docs/getting-started/glossary#presets"},{default:t(()=>[d]),_:1}),_])]),j,m,b,y,s("p",null,[g,f,x,q,P,n(a,{to:"/docs/reference/system/users"},{default:t(()=>[E]),_:1}),T]),s("p",null,[k,R,w,S,A,n(a,{to:"/docs/reference/system/users"},{default:t(()=>[D]),_:1}),L]),Q,I,C,G,O,v,M,B,H,U,N,V,s("p",null,[F,n(a,{to:"/docs/reference/query"},{default:t(()=>[z]),_:1}),J]),K,s("p",null,[W,n(a,{to:"/docs/reference/query#limit"},{default:t(()=>[X]),_:1}),Y,Z,$]),ss,es,s("p",null,[n(a,{to:"/docs/reference/introduction#search-http-method"},{default:t(()=>[ts]),_:1})]),as,ns,ls,rs,os,cs,hs,ps,is,s("p",null,[us,n(a,{to:"/docs/reference/query"},{default:t(()=>[ds]),_:1}),_s]),js,ms,bs,ys,gs,fs,xs,qs,Ps,Es,Ts,ks,Rs,ws,Ss,s("p",null,[As,n(a,{to:"/docs/reference/query"},{default:t(()=>[Ds]),_:1}),Ls]),Qs,Is,Cs,Gs,Os,vs,Ms,Bs,Hs,Us,Ns,Vs,Fs,zs,Js,Ks,Ws,s("p",null,[Xs,n(a,{to:"/docs/reference/query"},{default:t(()=>[Ys]),_:1}),Zs]),$s,se,ee,te,ae,ne,le,re,oe,ce,he,pe,ie,ue,de,_e,je,s("p",null,[me,n(a,{to:"/docs/reference/query"},{default:t(()=>[be]),_:1}),ye]),ge,fe,xe,qe,Pe,Ee,Te,ke,Re,we,Se,Ae,De,Le,Qe,Ie,Ce,s("p",null,[Ge,n(a,{to:"/docs/reference/query"},{default:t(()=>[Oe]),_:1}),ve]),Me,Be,He,Ue,Ne,Ve,Fe,ze,Je,Ke,We,Xe,Ye,Ze,$e,st,et,tt,at,nt,lt,rt,ot,ct,ht,pt,it,ut,dt,_t,jt,mt,bt,yt,gt,ft,xt,qt,Pt,Et,Tt,kt,Rt,wt])]),_:1})}}};export{vt as default,Ct as description,It as modularExtension,Ot as pageClass,Gt as readTime,Qt as title};
