import{a as n,o as c,b as i,w as a,h as s,e as h,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=e("What data is linked to what other data. Allows you to assign authors to articles, products to sales, and whatever other structures you can think of. "),u=e("Learn more about Relationships"),_=e("."),j=s("hr",null,null,-1),g=s("h2",{id:"the-relation-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-relation-object"},"#"),e(" The Relation Object")],-1),m=s("p",null,[s("code",null,"collection"),e(),s("strong",null,"string"),s("br"),e(" Name of the collection. This matches the table name in the database.")],-1),f=s("p",null,[s("code",null,"field"),e(),s("strong",null,"string"),s("br"),e(" Name of the field that holds the related primary key. This matches the column name in the database.")],-1),b=s("p",null,[s("code",null,"related_collection"),e(),s("strong",null,"string"),s("br"),e(" Name of the related collection. This matches the table name in the database.")],-1),y=s("h4",{id:"meta",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#meta"},"#"),e(" Meta")],-1),x=s("p",null,"Directus metadata. Used to enable non-database relationship types",-1),q=s("p",null,[s("code",null,"id"),e(),s("strong",null,"integer"),s("br"),e(" Primary key of the metadata row in "),s("code",null,"directus_relations"),e(".")],-1),T=s("p",null,[s("code",null,"many_collection"),e(),s("strong",null,"string"),s("br"),e(" Name of the collection. Matches the top level "),s("code",null,"collection"),e(" field.")],-1),w=s("p",null,[s("code",null,"many_field"),e(),s("strong",null,"string"),s("br"),e(" Name of the field. Matches the top level "),s("code",null,"field"),e(" field.")],-1),E=s("p",null,[s("code",null,"one_collection"),e(),s("strong",null,"string"),s("br"),e(" Name of the related collection. Matches the top level "),s("code",null,"related_collection"),e(" field.")],-1),k=s("p",null,[s("code",null,"one_field"),e(),s("strong",null,"string"),s("br"),e(" Name of the one to many field on the other side of the relation.")],-1),R=s("p",null,[s("code",null,"one_allowed_collections"),e(),s("strong",null,"string"),s("br"),e(" What collections are allowed to be used in a many-to-any context.")],-1),P=s("p",null,[s("code",null,"one_collection_field"),e(),s("strong",null,"string"),s("br"),e(" Field that holds the collection name in a many-to-any context.")],-1),S=s("p",null,[s("code",null,"one_deselect_action"),e(),s("strong",null,"nullify | delete"),s("br"),e(" Whether to nullify or delete related one-to-many records.")],-1),v=s("p",null,[s("code",null,"sort_field"),e(),s("strong",null,"string"),s("br"),e(" What field is used to hold the sort field.")],-1),L=s("p",null,[s("code",null,"junction_field"),e(),s("strong",null,"string"),s("br"),e(" What field connects two relations in a many-to-many (O2M-M2O) context.")],-1),A=s("h4",{id:"schema",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#schema"},"#"),e(" Schema")],-1),Q=s("p",null,"\u201CRaw\u201D database information. Based on the database vendor used, different information might be returned. The following are available for all drivers.",-1),D=s("p",null,[s("code",null,"table"),e(),s("strong",null,"string"),s("br"),e(" The table name.")],-1),N=s("p",null,[s("code",null,"column"),e(),s("strong",null,"string"),s("br"),e(" The column name.")],-1),G=s("p",null,[s("code",null,"foreign_key_table"),e(),s("strong",null,"string"),s("br"),e(" Related table name.")],-1),O=s("p",null,[s("code",null,"foreign_key_column"),e(),s("strong",null,"string"),s("br"),e(" Related column name.")],-1),I=s("p",null,[s("code",null,"constraint_name"),e(),s("strong",null,"string"),s("br"),e(" Name for the foreign key constraint.")],-1),C=s("p",null,[s("code",null,"on_update"),e(),s("strong",null,"string"),s("br"),e(" Update trigger for the foreign key constraint.")],-1),M=s("p",null,[s("code",null,"on_delete"),e(),s("strong",null,"string"),s("br"),e(" Delete trigger for the foreign key constraint.")],-1),B=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"about_us"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"logo"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"related_collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_files"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"schema"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"table"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"about_us"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"column"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"logo"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"foreign_key_table"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_files"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"foreign_key_column"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"id"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"constraint_name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"about_us_logo_foreign"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"on_update"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"NO ACTION"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"on_delete"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"SET NULL"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"meta"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"1"),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"junction_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"many_collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"about_us"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"many_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"logo"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"one_allowed_collections"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"one_collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_files"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"one_collection_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"one_deselect_action"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"nullify"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"one_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"sort_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),U=s("hr",null,null,-1),W=s("h2",{id:"list-relations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-relations"},"#"),e(" List relations")],-1),F=s("p",null,"List all relations that exist in Directus.",-1),V=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The data returned in this endpoint will be filtered based on the user\u2019s permissions. For example, relations that apply to a collection that the current user doesn\u2019t have access to are stripped out.")],-1),H=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),z=s("p",null,"Doesn\u2019t support any query parameters.",-1),J=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),K=s("p",null,[e("Array of "),s("a",{href:"#the-relation-object"},"relation objects"),e(". If no items are available, data will be an empty array.")],-1),X=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),Y=s("pre",null,[s("code",null,`GET /relations
`)],-1),Z=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),$=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ss=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	relations: [directus_relations]
}
`)])],-1),es=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),ts=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	relations {
		collection
		field
	}
}
`)])],-1),ns=s("hr",null,null,-1),as=s("h2",{id:"list-relations-in-collection",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-relations-in-collection"},"#"),e(" List relations in collection")],-1),ls=s("p",null,"List all relations that exist in a given collection.",-1),os=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Permissions"),s("p",null,"The data returned in this endpoint will be filtered based on the user\u2019s permissions. For example, relations that apply to a collection that the current user doesn\u2019t have access to are stripped out.")],-1),rs=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),cs=s("p",null,"Doesn\u2019t support any query parameters.",-1),is=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),hs=s("p",null,[e("Array of "),s("a",{href:"#the-relation-object"},"relation objects"),e(". If no items are available, data will be an empty array.")],-1),ds=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),ps=s("pre",null,[s("code",null,`GET /relations/:collection
`)],-1),us=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),_s=s("pre",null,[s("code",null,`GET /relations/articles
`)],-1),js=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),gs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ms=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	relations_in_collection(collection:`),s("span",{class:"hljs-type"}," String"),e(`!): [directus_relations]
}
`)])],-1),fs=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),bs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	relations_in_collection(collection: `),s("span",{class:"hljs-string"},'"articles"'),e(`) {
		collection
		field
	}
}
`)])],-1),ys=s("hr",null,null,-1),xs=s("h2",{id:"retrieve-a-relation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-relation"},"#"),e(" Retrieve a relation")],-1),qs=s("p",null,"List an existing relation by collection/field name.",-1),Ts=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),ws=s("p",null,"Doesn\u2019t support any query parameters.",-1),Es=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),ks=s("p",null,[e("Returns the requested "),s("a",{href:"#the-relation-object"},"relation object"),e(".")],-1),Rs=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Ps=s("pre",null,[s("code",null,`GET /relations/:collection/:field
`)],-1),Ss=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),vs=s("pre",null,[s("code",null,`GET /relations/articles/featured_image
`)],-1),Ls=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),As=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Qs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	relations_by_name(collection:`),s("span",{class:"hljs-type"}," String"),e("!, field:"),s("span",{class:"hljs-type"}," String"),e(`!): directus_relations
}
`)])],-1),Ds=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),Ns=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	relations_by_name(collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", field: "),s("span",{class:"hljs-string"},'"featured_image"'),e(`) {
		collection
		field
		related_collection
	}
}
`)])],-1),Gs=s("hr",null,null,-1),Os=s("h2",{id:"create-a-relation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-relation"},"#"),e(" Create a Relation")],-1),Is=s("p",null,"Create a new relation.",-1),Cs=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),Ms=s("p",null,"Doesn\u2019t support any query parameters.",-1),Bs=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),Us=s("p",null,[e("A partial "),s("a",{href:"#the-relation-object"},"relation object"),e(".")],-1),Ws=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),Fs=s("p",null,[e("Returns the "),s("a",{href:"#the-relation-object"},"relation object"),e(" for the created relation.")],-1),Vs=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),Hs=s("pre",null,[s("code",null,`POST /relations
`)],-1),zs=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),Js=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /relations"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"featured_image"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"related_collection"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"directus_files"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Ks=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),Xs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ys=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_relations_item(data: create_directus_relations_input!): directus_relations
}
`)])],-1),Zs=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),$s=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_relations_item(
		data: { collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", field: "),s("span",{class:"hljs-string"},'"featured_image"'),e(", related_collection: "),s("span",{class:"hljs-string"},'"directus_files"'),e(` }
	) {
		collection
		field
		related_collection
	}
}
`)])],-1),se=s("hr",null,null,-1),ee=s("h2",{id:"update-a-relation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-relation"},"#"),e(" Update a Relation")],-1),te=s("p",null,"Update an existing relation.",-1),ne=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),ae=s("p",null,"Doesn\u2019t support any query parameters.",-1),le=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),oe=s("p",null,[e("A partial "),s("a",{href:"#the-relation-object"},"relation object"),e(".")],-1),re=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),ce=s("p",null,[e("Returns the "),s("a",{href:"#the-relation-object"},"relation object"),e(" for the created relation.")],-1),ie=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),he=s("pre",null,[s("code",null,`PATCH /relations/:collection/:field
`)],-1),de=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),pe=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /relations/articles/author"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"meta"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"one_field"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"articles"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),ue=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),_e=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),je=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_relations_item(collection:`),s("span",{class:"hljs-type"}," String"),e("!, field:"),s("span",{class:"hljs-type"}," String"),e(`!, data: update_directus_relations_input!): directus_relations
}
`)])],-1),ge=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),me=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_relations_item(collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", field: "),s("span",{class:"hljs-string"},'"author"'),e(", data: { meta: { one_field: "),s("span",{class:"hljs-string"},'"articles"'),e(` } }) {
		collection
		field
		related_collection
	}
}
`)])],-1),fe=s("hr",null,null,-1),be=s("h2",{id:"delete-a-relation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-relation"},"#"),e(" Delete a Relation")],-1),ye=s("p",null,"Delete an existing relation.",-1),xe=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),qe=s("p",null,"Empty body.",-1),Te=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),we=s("pre",null,[s("code",null,`DELETE /relations/:collection/:field
`)],-1),Ee=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),ke=s("pre",null,[s("code",null,`DELETE /relations/articles/author
`)],-1),Re=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),Pe=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Se=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_relations_item(collection:`),s("span",{class:"hljs-type"}," String"),e("!, field:"),s("span",{class:"hljs-type"}," String"),e(`!): delete_one
}
`)])],-1),ve=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),Le=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_relations_item(collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", field: "),s("span",{class:"hljs-string"},'"author"'),e(`) {
		collection
		field
	}
}
`)])],-1),Ge="Relations",Oe=!1,Ie="REST and GraphQL API documentation on the Relations collection in Directus.",Ce="5 min read",Me="page-reference",Be={name:"relations",setup(Ae,{expose:l}){const t={title:"Relations",modularExtension:!1,description:"REST and GraphQL API documentation on the Relations collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return l({frontmatter:t}),(Qe,De)=>{const o=n("router-link"),r=n("docs-wrapper");return c(),i(r,{frontmatter:t},{default:a(()=>[s("div",d,[s("blockquote",null,[s("p",null,[p,h(o,{to:"/docs/getting-started/glossary#relationships"},{default:a(()=>[u]),_:1}),_])]),j,g,m,f,b,y,x,q,T,w,E,k,R,P,S,v,L,A,Q,D,N,G,O,I,C,M,B,U,W,F,V,H,z,J,K,X,Y,Z,$,ss,es,ts,ns,as,ls,os,rs,cs,is,hs,ds,ps,us,_s,js,gs,ms,fs,bs,ys,xs,qs,Ts,ws,Es,ks,Rs,Ps,Ss,vs,Ls,As,Qs,Ds,Ns,Gs,Os,Is,Cs,Ms,Bs,Us,Ws,Fs,Vs,Hs,zs,Js,Ks,Xs,Ys,Zs,$s,se,ee,te,ne,ae,le,oe,re,ce,ie,he,de,pe,ue,_e,je,ge,me,fe,be,ye,xe,qe,Te,we,Ee,ke,Re,Pe,Se,ve,Le])]),_:1})}}};export{Be as default,Ie as description,Oe as modularExtension,Me as pageClass,Ce as readTime,Ge as title};
