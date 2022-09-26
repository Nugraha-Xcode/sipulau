import{a as o,o as r,b as h,w as t,h as e,e as n,E as s}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=s("Items are individual pieces of data in your database. They can be anything, from articles, to IoT status checks. "),u=s("Learn more about Items"),_=s("."),m=e("hr",null,null,-1),j=e("h2",{id:"the-item-object",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-item-object"},"#"),s(" The Item Object")],-1),b=e("p",null,[s("Items don\u2019t have a predefined schema. The format depends completely on how you configured your collections and fields in Directus. For the sake of documentation, we\u2019ll use a fictional articles collection with the following fields: "),e("code",null,"id"),s(", "),e("code",null,"status"),s(", "),e("code",null,"title"),s(", "),e("code",null,"body"),s(", "),e("code",null,"featured_image"),s(", and "),e("code",null,"author"),s(".")],-1),f={class:"tip hint"},g=e("div",{class:"hint-title"},"Relational Data",-1),y=s("Please see "),x=s("Relational Data"),q=s(" and "),E=s("Field Parameters"),T=s(" to learn more."),w=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"id"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-number"},"1"),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"status"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"published"'),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"title"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Hello, world!"'),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"body"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"This is my first article"'),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"featured_image"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"768eabec-3c54-4110-a6bb-64b548116661"'),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"author"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"0bc7b36a-9ba9-4ce0-83f0-0a526f354e07"'),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),I=e("hr",null,null,-1),P=e("h2",{id:"get-items",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-items"},"#"),s(" Get Items")],-1),R=e("p",null,"List all items that exist in Directus.",-1),S=e("h3",{id:"query-parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters"},"#"),s(" Query Parameters")],-1),k=s("Supports all "),A=s("global query parameters"),D=s("."),Q={class:"tip hint"},v=e("div",{class:"hint-title"},"Relational Data",-1),G=s("The "),L=s("Field Parameter"),C=s(" is required to return nested relational data."),O=e("h3",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},"#"),s(" Returns")],-1),H=s("An array of up to "),M=s("limit"),B=s(),U=e("a",{href:"#the-item-object"},"item objects",-1),F=s(". If no items are available, data will be an empty array."),N=e("h4",{id:"singleton",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#singleton"},"#"),s(" Singleton")],-1),V=e("p",null,"If your collection is a singleton, this endpoint will return the item. If the item doesn\u2019t exist in the database, the default values will be returned.",-1),z=e("h3",{id:"rest-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api"},"#"),s(" REST API")],-1),J=e("pre",null,[e("code",null,`GET /items/:collection
SEARCH /items/:collection
`)],-1),K=s("Learn more about SEARCH ->"),W=e("h5",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example"},"#"),s(" Example")],-1),X=e("pre",null,[e("code",null,`GET /items/articles
`)],-1),Y=e("h3",{id:"graphql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql"},"#"),s(" GraphQL")],-1),Z=e("pre",null,[e("code",null,`POST /graphql
`)],-1),$=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Query"),s(` {
	<collection>: [<collection>]
}
`)])],-1),ee=e("h5",{id:"example-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-1"},"#"),s(" Example")],-1),se=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),s(` {
	articles {
		id
		title
		author {
			first_name
		}
	}
}
`)])],-1),te=e("hr",null,null,-1),ae=e("h2",{id:"get-item-by-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-item-by-id"},"#"),s(" Get Item by ID")],-1),ne=e("p",null,"Get an item that exists in Directus.",-1),le=e("h3",{id:"query-parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),s(" Query Parameters")],-1),oe=s("Supports all "),ce=s("global query parameters"),ie=s("."),re=e("h3",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},"#"),s(" Returns")],-1),he=e("p",null,[s("Returns an "),e("a",{href:"#the-item-object"},"item object"),s(" if a valid primary key was provided.")],-1),de=e("h3",{id:"rest-api-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-1"},"#"),s(" REST API")],-1),pe=e("pre",null,[e("code",null,`GET /items/:collection/:id
`)],-1),ue=e("h5",{id:"example-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-2"},"#"),s(" Example")],-1),_e=e("pre",null,[e("code",null,`GET /items/articles/15
`)],-1),me=e("h3",{id:"graphql-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-1"},"#"),s(" GraphQL")],-1),je=e("pre",null,[e("code",null,`POST /graphql
`)],-1),be=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Query"),s(` {
	<collection>_by_id(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!): <collection>
}
`)])],-1),fe=e("h5",{id:"example-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-3"},"#"),s(" Example")],-1),ge=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),s(` {
	articles_by_id(id: `),e("span",{class:"hljs-number"},"15"),s(`) {
		id
		title
	}
}
`)])],-1),ye=e("hr",null,null,-1),xe=e("h2",{id:"create-an-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-item"},"#"),s(" Create an Item")],-1),qe=e("p",null,"Create a new item in the given collection.",-1),Ee=e("h3",{id:"query-parameters-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),s(" Query Parameters")],-1),Te=s("Supports all "),we=s("global query parameters"),Ie=s("."),Pe=e("h3",{id:"request-body",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body"},"#"),s(" Request Body")],-1),Re=e("p",null,[s("An array of partial "),e("a",{href:"#the-item-object"},"item objects"),s(".")],-1),Se={class:"tip hint"},ke=e("div",{class:"hint-title"},"Relational Data",-1),Ae=s("Relational data needs to be correctly nested to add new items successfully. Check out the "),De=s("relational data section"),Qe=s(" for more information."),ve=e("h3",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2"},"#"),s(" Returns")],-1),Ge=e("p",null,[s("Returns the "),e("a",{href:"#the-item-object"},"item objects"),s(" of the item that were created.")],-1),Le=e("h3",{id:"rest-api-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-2"},"#"),s(" REST API")],-1),Ce=e("pre",null,[e("code",null,`POST /items/:collection
`)],-1),Oe=e("h5",{id:"example-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-4"},"#"),s(" Example")],-1),He=e("pre",null,[e("code",null,`POST /items/articles
`)],-1),Me=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"title"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Hello world!"'),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"body"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"This is our first article"'),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),Be=e("h3",{id:"graphql-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-2"},"#"),s(" GraphQL")],-1),Ue=e("pre",null,[e("code",null,`POST /graphql
`)],-1),Fe=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	create_<collection>_item(data: create_<collection>_input): <collection>
}
`)])],-1),Ne=e("h5",{id:"example-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-5"},"#"),s(" Example")],-1),Ve=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	create_articles_item(data: { title: `),e("span",{class:"hljs-string"},'"Hello world!"'),s(", body: "),e("span",{class:"hljs-string"},'"This is our first article"'),s(` }) {
		id
		title
	}
}
`)])],-1),ze=e("hr",null,null,-1),Je=e("h2",{id:"create-multiple-items",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-multiple-items"},"#"),s(" Create Multiple Items")],-1),Ke=e("p",null,"Create new items in the given collection.",-1),We=e("h3",{id:"query-parameters-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),s(" Query Parameters")],-1),Xe=s("Supports all "),Ye=s("global query parameters"),Ze=s("."),$e=e("h3",{id:"request-body-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-1"},"#"),s(" Request Body")],-1),es=e("p",null,[s("An array of partial "),e("a",{href:"#the-item-object"},"item objects"),s(".")],-1),ss=e("h3",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3"},"#"),s(" Returns")],-1),ts=e("p",null,[s("Returns the "),e("a",{href:"#the-item-object"},"item objects"),s(" of the item that were created.")],-1),as=e("h3",{id:"rest-api-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-3"},"#"),s(" REST API")],-1),ns=e("pre",null,[e("code",null,`POST /items/:collection
`)],-1),ls=e("h5",{id:"example-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-6"},"#"),s(" Example")],-1),os=e("pre",null,[e("code",null,`POST /items/articles
`)],-1),cs=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"["),s(`
	`),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"title"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Hello world!"'),e("span",{class:"hljs-punctuation"},","),s(`
		`),e("span",{class:"hljs-attr"},'"body"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"This is our first article"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"title"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Hello again, world!"'),e("span",{class:"hljs-punctuation"},","),s(`
		`),e("span",{class:"hljs-attr"},'"body"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"This is our second article"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),s(`
`),e("span",{class:"hljs-punctuation"},"]"),s(`
`)])],-1),is=e("h3",{id:"graphql-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-3"},"#"),s(" GraphQL")],-1),rs=e("pre",null,[e("code",null,`POST /graphql
`)],-1),hs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	create_<collection>_items(data: [create_<collection>_input]): [<collection>]
}
`)])],-1),ds=e("h5",{id:"example-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-7"},"#"),s(" Example")],-1),ps=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	create_articles_items(
		data: [
			{ title: `),e("span",{class:"hljs-string"},'"Hello world!"'),s(", body: "),e("span",{class:"hljs-string"},'"This is our first article"'),s(` }
			{ title: `),e("span",{class:"hljs-string"},'"Hello again, world!"'),s(", body: "),e("span",{class:"hljs-string"},'"This is our second article"'),s(` }
		]
	) {
		id
		title
	}
}
`)])],-1),us=e("hr",null,null,-1),_s=e("h2",{id:"update-an-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-an-item"},"#"),s(" Update an Item")],-1),ms=e("p",null,"Update an existing item.",-1),js=e("h3",{id:"query-parameters-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),s(" Query Parameters")],-1),bs=s("Supports all "),fs=s("global query parameters"),gs=s("."),ys=e("h3",{id:"request-body-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-2"},"#"),s(" Request Body")],-1),xs=e("p",null,[s("A partial "),e("a",{href:"#the-item-object"},"item object"),s(".")],-1),qs=e("h3",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4"},"#"),s(" Returns")],-1),Es=e("p",null,[s("Returns the "),e("a",{href:"#the-item-object"},"item object"),s(" of the item that was updated.")],-1),Ts=e("h3",{id:"rest-api-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-4"},"#"),s(" REST API")],-1),ws=e("pre",null,[e("code",null,`PATCH /items/:collection/:id
`)],-1),Is=e("h5",{id:"example-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-8"},"#"),s(" Example")],-1),Ps=e("pre",null,[e("code",null,`PATCH /items/articles/15
`)],-1),Rs=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"title"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"An updated title"'),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),Ss=e("h3",{id:"graphql-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-4"},"#"),s(" GraphQL")],-1),ks=e("pre",null,[e("code",null,`POST /graphql
`)],-1),As=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	update_<collection>_item(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!, data: update_<collection>_input!): <collection>
}
`)])],-1),Ds=e("h5",{id:"example-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-9"},"#"),s(" Example")],-1),Qs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	update_articles_item(id: `),e("span",{class:"hljs-number"},"15"),s(", data: { title: "),e("span",{class:"hljs-string"},'"An updated title"'),s(` }) {
		id
		title
	}
}
`)])],-1),vs=e("hr",null,null,-1),Gs=e("h2",{id:"update-multiple-items",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-multiple-items"},"#"),s(" Update Multiple Items")],-1),Ls=e("p",null,"Update multiple items at the same time.",-1),Cs=e("h3",{id:"query-parameters-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),s(" Query Parameters")],-1),Os=s("Supports all "),Hs=s("global query parameters"),Ms=s("."),Bs=e("h3",{id:"request-body-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-3"},"#"),s(" Request Body")],-1),Us=e("p",null,[s("Object containing "),e("code",null,"data"),s(" for the values to set, and either "),e("code",null,"keys"),s(" or "),e("code",null,"query"),s(" to select what items to update.")],-1),Fs=e("h3",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5"},"#"),s(" Returns")],-1),Ns=e("p",null,[s("Returns the "),e("a",{href:"#the-item-object"},"item objects"),s(" for the updated items.")],-1),Vs=e("h4",{id:"singleton-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#singleton-1"},"#"),s(" Singleton")],-1),zs=e("p",null,[s("If your collection is a singleton, this endpoint will act the same as the "),e("a",{href:"#update-an-item"},"Update an Item"),s(" endpoint.")],-1),Js=e("h3",{id:"rest-api-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-5"},"#"),s(" REST API")],-1),Ks=e("pre",null,[e("code",null,`PATCH /items/:collection
`)],-1),Ws=e("h5",{id:"example-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-10"},"#"),s(" Example")],-1),Xs=e("pre",null,[e("code",null,`PATCH /items/articles
`)],-1),Ys=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"keys"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-number"},"1"),e("span",{class:"hljs-punctuation"},","),s(),e("span",{class:"hljs-number"},"2"),e("span",{class:"hljs-punctuation"},"]"),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"data"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"status"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"published"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),Zs=e("h3",{id:"graphql-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-5"},"#"),s(" GraphQL")],-1),$s=e("pre",null,[e("code",null,`POST /graphql
`)],-1),et=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	update_<collection>_items(ids: `),e("span",{class:"hljs-literal"},"[ID"),s(`!]!, data: [update_<collection>_input]): [<collection>]
}
`)])],-1),st=e("h5",{id:"example-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-11"},"#"),s(" Example")],-1),tt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	update_articles_items(ids: [`),e("span",{class:"hljs-number"},"1"),s(", "),e("span",{class:"hljs-number"},"2"),s("], data: { status: "),e("span",{class:"hljs-string"},'"published"'),s(` }) {
		id
		status
	}
}
`)])],-1),at=e("hr",null,null,-1),nt=e("h2",{id:"delete-an-item",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#delete-an-item"},"#"),s(" Delete an Item")],-1),lt=e("p",null,"Delete an existing item.",-1),ot=e("h3",{id:"returns-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-6"},"#"),s(" Returns")],-1),ct=e("p",null,"Empty body.",-1),it=e("h3",{id:"rest-api-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-6"},"#"),s(" REST API")],-1),rt=e("pre",null,[e("code",null,`DELETE /items/:collection/:id
`)],-1),ht=e("h5",{id:"example-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-12"},"#"),s(" Example")],-1),dt=e("pre",null,[e("code",null,`DELETE /items/articles/15
`)],-1),pt=e("h3",{id:"graphql-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-6"},"#"),s(" GraphQL")],-1),ut=e("pre",null,[e("code",null,`POST /graphql
`)],-1),_t=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	delete_<collection>_item(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!): delete_one
}
`)])],-1),mt=e("h5",{id:"example-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-13"},"#"),s(" Example")],-1),jt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	delete_articles_item(id: `),e("span",{class:"hljs-number"},"15"),s(`) {
		id
	}
}
`)])],-1),bt=e("hr",null,null,-1),ft=e("h2",{id:"delete-multiple-items",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#delete-multiple-items"},"#"),s(" Delete Multiple Items")],-1),gt=e("p",null,"Delete multiple existing items.",-1),yt=e("h3",{id:"request-body-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-4"},"#"),s(" Request Body")],-1),xt=e("p",null,"An array of item primary keys.",-1),qt=e("h3",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7"},"#"),s(" Returns")],-1),Et=e("p",null,"Empty body.",-1),Tt=e("h3",{id:"rest-api-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-7"},"#"),s(" REST API")],-1),wt=e("pre",null,[e("code",null,`DELETE /items/:collection
`)],-1),It=e("h5",{id:"example-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-14"},"#"),s(" Example")],-1),Pt=e("pre",null,[e("code",null,`DELETE /items/articles
`)],-1),Rt=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-number"},"15"),e("span",{class:"hljs-punctuation"},","),s(),e("span",{class:"hljs-number"},"16"),e("span",{class:"hljs-punctuation"},","),s(),e("span",{class:"hljs-number"},"21"),e("span",{class:"hljs-punctuation"},"]"),s(`
`)])],-1),St=e("h3",{id:"graphql-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-7"},"#"),s(" GraphQL")],-1),kt=e("pre",null,[e("code",null,`POST /graphql
`)],-1),At=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	delete_<collection>_items(ids: `),e("span",{class:"hljs-literal"},"[ID"),s(`!]!): delete_many
}
`)])],-1),Dt=e("h5",{id:"example-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-15"},"#"),s(" Example")],-1),Qt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	delete_articles_items(ids: [`),e("span",{class:"hljs-number"},"15"),s(", "),e("span",{class:"hljs-number"},"16"),s(", "),e("span",{class:"hljs-number"},"21"),s(`]) {
		ids
	}
}
`)])],-1),Ot="Accessing Items",Ht=!1,Mt="REST and GraphQL API documentation to access and manage Items in Directus.",Bt="5 min read",Ut="page-reference",Ft={name:"items",setup(vt,{expose:c}){const l={title:"Accessing Items",modularExtension:!1,description:"REST and GraphQL API documentation to access and manage Items in Directus.",readTime:"5 min read",pageClass:"page-reference"};return c({frontmatter:l}),(Gt,Lt)=>{const a=o("router-link"),i=o("docs-wrapper");return r(),h(i,{frontmatter:l},{default:t(()=>[e("div",d,[e("blockquote",null,[e("p",null,[p,n(a,{to:"/docs/getting-started/glossary#items"},{default:t(()=>[u]),_:1}),_])]),m,j,b,e("div",f,[g,e("p",null,[y,n(a,{to:"/docs/reference/introduction#relational-data"},{default:t(()=>[x]),_:1}),q,n(a,{to:"/docs/reference/query#fields"},{default:t(()=>[E]),_:1}),T])]),w,I,P,R,S,e("p",null,[k,n(a,{to:"/docs/reference/query"},{default:t(()=>[A]),_:1}),D]),e("div",Q,[v,e("p",null,[G,n(a,{to:"/docs/reference/query#fields"},{default:t(()=>[L]),_:1}),C])]),O,e("p",null,[H,n(a,{to:"/docs/reference/query#limit"},{default:t(()=>[M]),_:1}),B,U,F]),N,V,z,J,e("p",null,[n(a,{to:"/docs/reference/introduction#search-http-method"},{default:t(()=>[K]),_:1})]),W,X,Y,Z,$,ee,se,te,ae,ne,le,e("p",null,[oe,n(a,{to:"/docs/reference/query"},{default:t(()=>[ce]),_:1}),ie]),re,he,de,pe,ue,_e,me,je,be,fe,ge,ye,xe,qe,Ee,e("p",null,[Te,n(a,{to:"/docs/reference/query"},{default:t(()=>[we]),_:1}),Ie]),Pe,Re,e("div",Se,[ke,e("p",null,[Ae,n(a,{to:"/docs/reference/introduction#relational-data"},{default:t(()=>[De]),_:1}),Qe])]),ve,Ge,Le,Ce,Oe,He,Me,Be,Ue,Fe,Ne,Ve,ze,Je,Ke,We,e("p",null,[Xe,n(a,{to:"/docs/reference/query"},{default:t(()=>[Ye]),_:1}),Ze]),$e,es,ss,ts,as,ns,ls,os,cs,is,rs,hs,ds,ps,us,_s,ms,js,e("p",null,[bs,n(a,{to:"/docs/reference/query"},{default:t(()=>[fs]),_:1}),gs]),ys,xs,qs,Es,Ts,ws,Is,Ps,Rs,Ss,ks,As,Ds,Qs,vs,Gs,Ls,Cs,e("p",null,[Os,n(a,{to:"/docs/reference/query"},{default:t(()=>[Hs]),_:1}),Ms]),Bs,Us,Fs,Ns,Vs,zs,Js,Ks,Ws,Xs,Ys,Zs,$s,et,st,tt,at,nt,lt,ot,ct,it,rt,ht,dt,pt,ut,_t,mt,jt,bt,ft,gt,yt,xt,qt,Et,Tt,wt,It,Pt,Rt,St,kt,At,Dt,Qt])]),_:1})}}};export{Ft as default,Mt as description,Ht as modularExtension,Ut as pageClass,Bt as readTime,Ot as title};
