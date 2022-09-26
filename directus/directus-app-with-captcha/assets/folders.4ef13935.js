import{a as o,o as c,b as h,w as a,h as e,e as n,E as s}from"./runtime-core.esm-bundler.15edf3c4.js";const i={class:"markdown-body"},p=e("blockquote",null,[e("p",null,"Folders can be used to organize files within the platform. Folders are virtual, and aren\u2019t mirrored within the storage adapter.")],-1),u=e("hr",null,null,-1),_=e("h2",{id:"the-folder-object",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-folder-object"},"#"),s(" The Folder Object")],-1),f=e("p",null,[e("code",null,"id"),s(),e("strong",null,"uuid"),e("br"),s(" Primary key of the folder.")],-1),b=e("p",null,[e("code",null,"name"),s(),e("strong",null,"string"),e("br"),s(" Name of the folder.")],-1),m=e("p",null,[e("code",null,"parent"),s(),e("strong",null,"many-to-one"),e("br"),s(" Parent folder. Many-to-one to folders (recursive).")],-1),j=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"data"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"id"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"fc02d733-95b8-4e27-bd4b-08a32cbe4e66"'),e("span",{class:"hljs-punctuation"},","),s(`
		`),e("span",{class:"hljs-attr"},'"name"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Test"'),e("span",{class:"hljs-punctuation"},","),s(`
		`),e("span",{class:"hljs-attr"},'"parent"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-literal"},[e("span",{class:"hljs-keyword"},"null")]),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),g=e("hr",null,null,-1),y=e("h2",{id:"list-folders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#list-folders"},"#"),s(" List Folders")],-1),x=e("p",null,"List all folders that exist in Directus.",-1),q=e("h3",{id:"query-parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters"},"#"),s(" Query Parameters")],-1),E=s("Supports all "),T=s("global query parameters"),w=s("."),P=e("h3",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},"#"),s(" Returns")],-1),R=s("An array of up to "),k=s("limit"),S=s(),A=e("a",{href:"#the-folder-object"},"folder objects",-1),v=s(". If no items are available, data will be an empty array."),L=e("h3",{id:"rest-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api"},"#"),s(" REST API")],-1),Q=e("pre",null,[e("code",null,`GET /folders
SEARCH /folders
`)],-1),D=s("Learn more about SEARCH ->"),F=e("h3",{id:"graphql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql"},"#"),s(" GraphQL")],-1),C=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),I=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Query"),s(` {
	folders: directus_folders
}
`)])],-1),G=e("h5",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example"},"#"),s(" Example")],-1),O=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),s(` {
	folders {
		name
	}
}
`)])],-1),M=e("hr",null,null,-1),B=e("h2",{id:"retrieve-a-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#retrieve-a-folder"},"#"),s(" Retrieve a Folder")],-1),N=e("p",null,"List all folders that exist in Directus.",-1),H=e("h3",{id:"query-parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),s(" Query Parameters")],-1),U=s("Supports all "),V=s("global query parameters"),z=s("."),J=e("h3",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},"#"),s(" Returns")],-1),K=e("p",null,[s("Returns a "),e("a",{href:"#the-folder-object"},"folder object"),s(" if a valid primary key was provided.")],-1),W=e("h3",{id:"rest-api-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-1"},"#"),s(" REST API")],-1),X=e("pre",null,[e("code",null,`GET /folders/:id
`)],-1),Y=e("h5",{id:"example-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-1"},"#"),s(" Example")],-1),Z=e("pre",null,[e("code",null,`GET /folders/fc02d733-95b8-4e27-bd4b-08a32cbe4e66
`)],-1),$=e("h3",{id:"graphql-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-1"},"#"),s(" GraphQL")],-1),ee=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),se=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Query"),s(` {
	folders_by_id(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!): directus_folders
}
`)])],-1),ae=e("h5",{id:"example-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-2"},"#"),s(" Example")],-1),te=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),s(` {
	folders_by_id(id: `),e("span",{class:"hljs-string"},'"fc02d733-95b8-4e27-bd4b-08a32cbe4e66"'),s(`) {
		name
	}
}
`)])],-1),ne=e("hr",null,null,-1),le=e("h2",{id:"create-a-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-a-folder"},"#"),s(" Create a Folder")],-1),oe=e("p",null,"Create a new (virtual) folder.",-1),re=e("h3",{id:"query-parameters-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),s(" Query Parameters")],-1),de=s("Supports all "),ce=s("global query parameters"),he=s("."),ie=e("h3",{id:"request-body",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body"},"#"),s(" Request Body")],-1),pe=e("p",null,[s("A partial "),e("a",{href:"#the-folder-object"},"folder object"),s(". "),e("code",null,"name"),s(" is required.")],-1),ue=e("h3",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2"},"#"),s(" Returns")],-1),_e=e("p",null,[s("Returns the "),e("a",{href:"#the-folder-object"},"folder object"),s(" of the folder that was created.")],-1),fe=e("h3",{id:"rest-api-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-2"},"#"),s(" REST API")],-1),be=e("pre",null,[e("code",null,`POST /folders
`)],-1),me=e("h5",{id:"example-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-3"},"#"),s(" Example")],-1),je=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-comment"},"// POST /folders"),s(`

`),e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"name"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Nature"'),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),ge=e("h3",{id:"graphql-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-2"},"#"),s(" GraphQL")],-1),ye=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),xe=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	create_folders_item(data: create_directus_folders_input): directus_folders
}
`)])],-1),qe=e("h5",{id:"example-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-4"},"#"),s(" Example")],-1),Ee=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	create_folders_item(data: { name: `),e("span",{class:"hljs-string"},'"Nature"'),s(` }) {
		id
		name
	}
}
`)])],-1),Te=e("hr",null,null,-1),we=e("h2",{id:"create-multiple-folders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-multiple-folders"},"#"),s(" Create Multiple Folders")],-1),Pe=e("p",null,"Create multiple new (virtual) folders.",-1),Re=e("h3",{id:"query-parameters-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),s(" Query Parameters")],-1),ke=s("Supports all "),Se=s("global query parameters"),Ae=s("."),ve=e("h3",{id:"request-body-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-1"},"#"),s(" Request Body")],-1),Le=e("p",null,[s("An array of partial "),e("a",{href:"#the-folder-object"},"folder objects"),s(". "),e("code",null,"name"),s(" is required.")],-1),Qe=e("h3",{id:"returns-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-3"},"#"),s(" Returns")],-1),De=e("p",null,[s("Returns the "),e("a",{href:"#the-folder-object"},"folder object"),s(" of the folder that was created.")],-1),Fe=e("h3",{id:"rest-api-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-3"},"#"),s(" REST API")],-1),Ce=e("pre",null,[e("code",null,`POST /folders
`)],-1),Ie=e("h5",{id:"example-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-5"},"#"),s(" Example")],-1),Ge=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-comment"},"// POST /folders"),s(`

`),e("span",{class:"hljs-punctuation"},"["),s(`
	`),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"name"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Nature"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"name"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"Cities"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),s(`
`),e("span",{class:"hljs-punctuation"},"]"),s(`
`)])],-1),Oe=e("h3",{id:"graphql-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-3"},"#"),s(" GraphQL")],-1),Me=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),Be=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	create_folders_items(data: [create_directus_folders_input]): [directus_folders]
}
`)])],-1),Ne=e("h5",{id:"example-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-6"},"#"),s(" Example")],-1),He=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	create_folders_items(data: [{ name: `),e("span",{class:"hljs-string"},'"Nature"'),s(" }, { name: "),e("span",{class:"hljs-string"},'"Cities"'),s(` }]) {
		id
		name
	}
}
`)])],-1),Ue=e("hr",null,null,-1),Ve=e("h2",{id:"update-a-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-a-folder"},"#"),s(" Update a Folder")],-1),ze=e("p",null,"Update an existing folder.",-1),Je=e("h3",{id:"query-parameters-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),s(" Query Parameters")],-1),Ke=s("Supports all "),We=s("global query parameters"),Xe=s("."),Ye=e("h3",{id:"request-body-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-2"},"#"),s(" Request Body")],-1),Ze=e("p",null,[s("A partial "),e("a",{href:"#the-folder-object"},"folder object"),s(".")],-1),$e=e("h3",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4"},"#"),s(" Returns")],-1),es=e("p",null,[s("Returns the "),e("a",{href:"#the-folder-object"},"folder object"),s(" of the folder that was updated.")],-1),ss=e("h3",{id:"rest-api-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-4"},"#"),s(" REST API")],-1),as=e("pre",null,[e("code",null,`PATCH /folders/:id
`)],-1),ts=e("h5",{id:"example-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-7"},"#"),s(" Example")],-1),ns=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-comment"},"// PATCH /folders/fac21847-d5ce-4e4b-a288-9abafbdfbc87"),s(`

`),e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"parent"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"'),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),ls=e("h3",{id:"graphql-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-4"},"#"),s(" GraphQL")],-1),os=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),rs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	update_folders_item(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!, data: update_directus_folders_input): directus_folders
}
`)])],-1),ds=e("h5",{id:"example-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-8"},"#"),s(" Example")],-1),cs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	update_folders_item(
		id: `),e("span",{class:"hljs-string"},'"fac21847-d5ce-4e4b-a288-9abafbdfbc87"'),s(`
		data: { parent: `),e("span",{class:"hljs-string"},'"d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"'),s(` }
	) {
		id
		name
	}
}
`)])],-1),hs=e("hr",null,null,-1),is=e("h2",{id:"update-multiple-folders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-multiple-folders"},"#"),s(" Update Multiple Folders")],-1),ps=e("p",null,"Update multiple existing folders.",-1),us=e("h3",{id:"query-parameters-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),s(" Query Parameters")],-1),_s=s("Supports all "),fs=s("global query parameters"),bs=s("."),ms=e("h3",{id:"request-body-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-3"},"#"),s(" Request Body")],-1),js=e("p",null,[e("code",null,"keys"),s(),e("strong",null,"Required"),e("br"),s(" Array of primary keys of the folders you\u2019d like to update.")],-1),gs=e("p",null,[e("code",null,"data"),s(),e("strong",null,"Required"),e("br"),s(" Any of "),e("a",{href:"#the-folder-object"},"the folder object"),s("\u2019s properties.")],-1),ys=e("h3",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5"},"#"),s(" Returns")],-1),xs=e("p",null,[s("Returns the "),e("a",{href:"#the-folder-object"},"folder objects"),s(" of the folders that were updated.")],-1),qs=e("h3",{id:"rest-api-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-5"},"#"),s(" REST API")],-1),Es=e("pre",null,[e("code",null,`PATCH /folders
`)],-1),Ts=e("h5",{id:"example-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-9"},"#"),s(" Example")],-1),ws=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-comment"},"// PATCH /folders"),s(`

`),e("span",{class:"hljs-punctuation"},"{"),s(`
	`),e("span",{class:"hljs-attr"},'"keys"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-string"},'"fac21847-d5ce-4e4b-a288-9abafbdfbc87"'),e("span",{class:"hljs-punctuation"},","),s(),e("span",{class:"hljs-string"},'"a5bdb793-dd85-4ac9-882a-b42862092983"'),e("span",{class:"hljs-punctuation"},"]"),e("span",{class:"hljs-punctuation"},","),s(`
	`),e("span",{class:"hljs-attr"},'"data"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-punctuation"},"{"),s(`
		`),e("span",{class:"hljs-attr"},'"parent"'),e("span",{class:"hljs-punctuation"},":"),s(),e("span",{class:"hljs-string"},'"d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"'),s(`
	`),e("span",{class:"hljs-punctuation"},"}"),s(`
`),e("span",{class:"hljs-punctuation"},"}"),s(`
`)])],-1),Ps=e("h3",{id:"graphql-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-5"},"#"),s(" GraphQL")],-1),Rs=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),ks=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	update_folders_items(ids: `),e("span",{class:"hljs-literal"},"[ID"),s(`!]!, data: update_directus_folders_input): [directus_folders]
}
`)])],-1),Ss=e("h5",{id:"example-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-10"},"#"),s(" Example")],-1),As=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	update_folders_items(
		ids: [`),e("span",{class:"hljs-string"},'"fac21847-d5ce-4e4b-a288-9abafbdfbc87"'),s(", "),e("span",{class:"hljs-string"},'"a5bdb793-dd85-4ac9-882a-b42862092983"'),s(`]
		data: { parent: `),e("span",{class:"hljs-string"},'"d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"'),s(` }
	) {
		id
		name
	}
}
`)])],-1),vs=e("hr",null,null,-1),Ls=e("h2",{id:"delete-a-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#delete-a-folder"},"#"),s(" Delete a Folder")],-1),Qs=e("p",null,"Delete an existing folder.",-1),Ds=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Files"),e("p",null,"Any files in this folder will be moved to the root folder.")],-1),Fs=e("h3",{id:"returns-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-6"},"#"),s(" Returns")],-1),Cs=e("p",null,"Empty body.",-1),Is=e("h3",{id:"rest-api-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-6"},"#"),s(" REST API")],-1),Gs=e("pre",null,[e("code",null,`DELETE /folders/:id
`)],-1),Os=e("h5",{id:"example-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-11"},"#"),s(" Example")],-1),Ms=e("pre",null,[e("code",null,`// DELETE /folders/a5bdb793-dd85-4ac9-882a-b42862092983
`)],-1),Bs=e("h3",{id:"graphql-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-6"},"#"),s(" GraphQL")],-1),Ns=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),Hs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	delete_folders_item(id:`),e("span",{class:"hljs-literal"}," ID"),s(`!): delete_one
}
`)])],-1),Us=e("h5",{id:"example-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-12"},"#"),s(" Example")],-1),Vs=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	delete_folders_item(id: `),e("span",{class:"hljs-string"},'"fac21847-d5ce-4e4b-a288-9abafbdfbc87"'),s(`) {
		id
	}
}
`)])],-1),zs=e("hr",null,null,-1),Js=e("h2",{id:"delete-multiple-folders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#delete-multiple-folders"},"#"),s(" Delete Multiple Folders")],-1),Ks=e("p",null,"Delete multiple existing folders.",-1),Ws=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Files"),e("p",null,"Any files in these folders will be moved to the root folder.")],-1),Xs=e("h3",{id:"request-body-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-body-4"},"#"),s(" Request Body")],-1),Ys=e("p",null,"An array of folder primary keys.",-1),Zs=e("h3",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7"},"#"),s(" Returns")],-1),$s=e("p",null,"Empty body.",-1),ea=e("h3",{id:"rest-api-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-7"},"#"),s(" REST API")],-1),sa=e("pre",null,[e("code",null,`DELETE /folders
`)],-1),aa=e("h5",{id:"example-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-13"},"#"),s(" Example")],-1),ta=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-comment"},"// DELETE /folders"),s(`

`),e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-string"},'"d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"'),e("span",{class:"hljs-punctuation"},","),s(),e("span",{class:"hljs-string"},'"fc02d733-95b8-4e27-bd4b-08a32cbe4e66"'),e("span",{class:"hljs-punctuation"},"]"),s(`
`)])],-1),na=e("h3",{id:"graphql-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-7"},"#"),s(" GraphQL")],-1),la=e("pre",null,[e("code",null,`POST /graphql/system
`)],-1),oa=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"type"),e("span",{class:"hljs-type"}," Mutation"),s(` {
	delete_folders_items(ids: `),e("span",{class:"hljs-literal"},"[ID"),s(`!]!): delete_many
}
`)])],-1),ra=e("h5",{id:"example-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example-14"},"#"),s(" Example")],-1),da=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"mutation"),s(` {
	delete_folders_items(ids: [`),e("span",{class:"hljs-string"},'"fac21847-d5ce-4e4b-a288-9abafbdfbc87"'),s(", "),e("span",{class:"hljs-string"},'"a5bdb793-dd85-4ac9-882a-b42862092983"'),s(`]) {
		ids
	}
}
`)])],-1),ua="Folders",_a=!1,fa="REST and GraphQL API documentation on the Folders collection in Directus.",ba="4 min read",ma="page-reference",ja={name:"folders",setup(ca,{expose:r}){const l={title:"Folders",modularExtension:!1,description:"REST and GraphQL API documentation on the Folders collection in Directus.",readTime:"4 min read",pageClass:"page-reference"};return r({frontmatter:l}),(ha,ia)=>{const t=o("router-link"),d=o("docs-wrapper");return c(),h(d,{frontmatter:l},{default:a(()=>[e("div",i,[p,u,_,f,b,m,j,g,y,x,q,e("p",null,[E,n(t,{to:"/docs/reference/query"},{default:a(()=>[T]),_:1}),w]),P,e("p",null,[R,n(t,{to:"/docs/reference/query#limit"},{default:a(()=>[k]),_:1}),S,A,v]),L,Q,e("p",null,[n(t,{to:"/docs/reference/introduction#search-http-method"},{default:a(()=>[D]),_:1})]),F,C,I,G,O,M,B,N,H,e("p",null,[U,n(t,{to:"/docs/reference/query"},{default:a(()=>[V]),_:1}),z]),J,K,W,X,Y,Z,$,ee,se,ae,te,ne,le,oe,re,e("p",null,[de,n(t,{to:"/docs/reference/query"},{default:a(()=>[ce]),_:1}),he]),ie,pe,ue,_e,fe,be,me,je,ge,ye,xe,qe,Ee,Te,we,Pe,Re,e("p",null,[ke,n(t,{to:"/docs/reference/query"},{default:a(()=>[Se]),_:1}),Ae]),ve,Le,Qe,De,Fe,Ce,Ie,Ge,Oe,Me,Be,Ne,He,Ue,Ve,ze,Je,e("p",null,[Ke,n(t,{to:"/docs/reference/query"},{default:a(()=>[We]),_:1}),Xe]),Ye,Ze,$e,es,ss,as,ts,ns,ls,os,rs,ds,cs,hs,is,ps,us,e("p",null,[_s,n(t,{to:"/docs/reference/query"},{default:a(()=>[fs]),_:1}),bs]),ms,js,gs,ys,xs,qs,Es,Ts,ws,Ps,Rs,ks,Ss,As,vs,Ls,Qs,Ds,Fs,Cs,Is,Gs,Os,Ms,Bs,Ns,Hs,Us,Vs,zs,Js,Ks,Ws,Xs,Ys,Zs,$s,ea,sa,aa,ta,na,la,oa,ra,da])]),_:1})}}};export{ja as default,fa as description,_a as modularExtension,ma as pageClass,ba as readTime,ua as title};
