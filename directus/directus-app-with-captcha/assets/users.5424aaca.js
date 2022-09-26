import{a as r,o as h,b as i,w as a,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},u=e("Directus Users are the individual accounts that let you authenticate into the API and App. Each user belongs to a Role which defines its granular Permissions. "),p=e("Learn more about Users"),_=e("."),g=s("hr",null,null,-1),m=s("h2",{id:"the-user-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-user-object"},"#"),e(" The User Object")],-1),j=s("p",null,[s("code",null,"id"),e(),s("strong",null,"uuid"),s("br"),e(" Primary key of the user.")],-1),f=s("p",null,[s("code",null,"first_name"),e(),s("strong",null,"string"),s("br"),e(" First name of the user.")],-1),b=s("p",null,[s("code",null,"last_name"),e(),s("strong",null,"string"),s("br"),e(" Last name of the user.")],-1),y=s("p",null,[s("code",null,"email"),e(),s("strong",null,"string"),s("br"),e(" Email address of the user.")],-1),x=s("p",null,[s("code",null,"password"),e(),s("strong",null,"hash"),s("br"),e(" Password of the user.")],-1),q=s("p",null,[s("code",null,"location"),e(),s("strong",null,"string"),s("br"),e(" Location of the user.")],-1),w=s("p",null,[s("code",null,"title"),e(),s("strong",null,"string"),s("br"),e(" Title of the user.")],-1),T=s("p",null,[s("code",null,"description"),e(),s("strong",null,"string"),s("br"),e(" Description of the user.")],-1),E=s("p",null,[s("code",null,"tags"),e(),s("strong",null,"csv"),s("br"),e(" Tags for the user.")],-1),R=s("code",null,"avatar",-1),S=e(),P=s("strong",null,"many-to-one",-1),k=s("br",null,null,-1),v=e(" Avatar file. Many-to-one to "),A=e("files"),O=e("."),L=s("p",null,[s("code",null,"language"),e(),s("strong",null,"string"),s("br"),e(" Language the Admin App is rendered in. See "),s("a",{href:"https://locales.directus.io",target:"_blank",rel:"noopener noreferrer"},"our Crowdin page"),e(" for all available languages and translations.")],-1),U=s("p",null,[s("code",null,"theme"),e(),s("strong",null,"string"),s("br"),e(" One of "),s("code",null,"auto"),e(", "),s("code",null,"light"),e(", "),s("code",null,"dark"),e(".")],-1),I=s("p",null,[s("code",null,"tfa_secret"),e(),s("strong",null,"string"),s("br"),e(" When TFA is enabled, this holds the secret key for it.")],-1),Q=s("p",null,[s("code",null,"status"),e(),s("strong",null,"string"),s("br"),e(" Status of the user. One of "),s("code",null,"draft"),e(", "),s("code",null,"invited"),e(", "),s("code",null,"active"),e(", "),s("code",null,"suspended"),e(", "),s("code",null,"archived"),e(".")],-1),C=s("code",null,"role",-1),G=e(),B=s("strong",null,"uuid",-1),D=s("br",null,null,-1),M=e(" Role of the user. Many-to-one to "),H=e("roles"),F=e("."),N=s("p",null,[s("code",null,"token"),e(),s("strong",null,"string"),s("br"),e(" Static access token for the user.")],-1),V=s("p",null,[s("code",null,"last_access"),e(),s("strong",null,"date"),s("br"),e(" Last time the user accessed the API.")],-1),W=s("p",null,[s("code",null,"last_page"),e(),s("strong",null,"string"),s("br"),e(" Last page in the app the user used.")],-1),Y=s("p",null,[s("code",null,"provider"),e(),s("strong",null,"string"),s("br"),e(" What auth provider was used to register this user.")],-1),z=s("p",null,[s("code",null,"external_identifier"),e(),s("strong",null,"string"),s("br"),e(" Primary key of the user in the third party authentication provider, if used.")],-1),J=s("p",null,[s("code",null,"auth_data"),e(),s("strong",null,"json"),s("br"),e(" Required data about the user as provided by the third party auth provider, if used.")],-1),K=s("p",null,[s("code",null,"email_notifications"),e(),s("strong",null,"boolean"),s("br"),e(" When this is enabled, the user will receive emails for notifications.")],-1),X=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"0bc7b36a-9ba9-4ce0-83f0-0a526f354e07"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"first_name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Admin"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"last_name"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"User"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"admin@example.com"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"**********"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"location"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"New York City"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"title"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"CTO"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"description"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"tags"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"avatar"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"language"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"en-US"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"theme"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"auto"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"tfa_secret"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"active"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"653925a9-970e-487a-bfc0-ab6c96affcdc"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"token"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-literal"},[s("span",{class:"hljs-keyword"},"null")]),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"last_access"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"2021-02-05T10:18:13-05:00"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"last_page"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"/settings/roles/653925a9-970e-487a-bfc0-ab6c96affcdc"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Z=s("hr",null,null,-1),$=s("h2",{id:"list-users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-users"},"#"),e(" List Users")],-1),ss=s("p",null,"List all users that exist in Directus.",-1),es=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),as=e("Supports all "),ts=e("global query parameters"),ns=e("."),ls=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),rs=e("An array of up to "),os=e("limit"),cs=e(),hs=s("a",{href:"#the-user-object"},"user objects",-1),is=e(". If no items are available, data will be an empty array."),ds=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),us=s("pre",null,[s("code",null,`GET /users
SEARCH /users
`)],-1),ps=e("Learn more about SEARCH ->"),_s=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),gs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ms=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	users: [directus_users]
}
`)])],-1),js=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),fs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	users {
		first_name
		last_name
		email
	}
}
`)])],-1),bs=s("hr",null,null,-1),ys=s("h2",{id:"retrieve-a-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-user"},"#"),e(" Retrieve a User")],-1),xs=s("p",null,"List an existing user by primary key.",-1),qs=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),e(" Query Parameters")],-1),ws=e("Supports all "),Ts=e("global query parameters"),Es=e("."),Rs=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),Ss=s("p",null,[e("Returns the requested "),s("a",{href:"#the-user-object"},"user object"),e(".")],-1),Ps=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),ks=s("pre",null,[s("code",null,`GET /users/:id
`)],-1),vs=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),As=s("pre",null,[s("code",null,`GET /users/72a1ce24-4748-47de-a05f-ce9af3033727
`)],-1),Os=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),Ls=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Us=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	users_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): directus_users
}
`)])],-1),Is=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),Qs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	users_by_id(id: `),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),e(`) {
		first_name
		last_name
		email
	}
}
`)])],-1),Cs=s("hr",null,null,-1),Gs=s("h2",{id:"retrieve-the-current-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-the-current-user"},"#"),e(" Retrieve the Current User")],-1),Bs=s("p",null,"Retrieve the currently authenticated user.",-1),Ds=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),e(" Query Parameters")],-1),Ms=e("Supports all "),Hs=e("global query parameters"),Fs=e("."),Ns=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),Vs=s("p",null,[e("Returns the "),s("a",{href:"#the-user-object"},"user object"),e(" for the currently authenticated user.")],-1),Ws=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Ys=s("pre",null,[s("code",null,`GET /users/me
`)],-1),zs=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),Js=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ks=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),e(` {
	users_me: directus_users
}
`)])],-1),Xs=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),Zs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),e(` {
	users_me {
		email
	}
}
`)])],-1),$s=s("hr",null,null,-1),se=s("h2",{id:"update-the-current-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-the-current-user"},"#"),e(" Update the Current User")],-1),ee=s("p",null,"Update the authenticated user.",-1),ae=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),e(" Query Parameters")],-1),te=e("Supports all "),ne=e("global query parameters"),le=e("."),re=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),oe=s("p",null,[e("Returns the updated "),s("a",{href:"#the-user-object"},"user object"),e(" for the authenticated user.")],-1),ce=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),he=s("pre",null,[s("code",null,`PATCH /users/me
`)],-1),ie=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /users/me"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"new.email@example.com"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),de=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),ue=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),pe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_users_me(data: update_directus_users_input!): directus_users
}
`)])],-1),_e=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),ge=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_users_me(data: { email: `),s("span",{class:"hljs-string"},'"new.email@example.com"'),e(` }) {
		email
	}
}
`)])],-1),me=s("hr",null,null,-1),je=s("h2",{id:"create-a-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-user"},"#"),e(" Create a User")],-1),fe=s("p",null,"Create a new user",-1),be=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),e(" Query Parameters")],-1),ye=e("Supports all "),xe=e("global query parameters"),qe=e("."),we=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),Te=s("p",null,[e("A partial "),s("a",{href:"#the-user-object"},"user object"),e(".")],-1),Ee=s("p",null,[s("code",null,"email"),e(" and "),s("code",null,"password"),e(" are required to authenticate with the default authentication provider.")],-1),Re=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),Se=s("p",null,[e("Returns the "),s("a",{href:"#the-user-object"},"user object"),e(" for the created user.")],-1),Pe=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),ke=s("pre",null,[s("code",null,`POST /users
`)],-1),ve=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),Ae=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"another@example.com"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"d1r3ctu5"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Oe=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),Le=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ue=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_users_item(data: create_directus_users_input!): directus_users
}
`)])],-1),Ie=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),Qe=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_users_item(
		data: { email: `),s("span",{class:"hljs-string"},'"another@example.com"'),e(", password: "),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(` }
	) {
		email
		role
	}
}
`)])],-1),Ce=s("hr",null,null,-1),Ge=s("h2",{id:"create-multiple-users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-users"},"#"),e(" Create Multiple Users")],-1),Be=s("p",null,"Create multiple new users",-1),De=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),e(" Query Parameters")],-1),Me=e("Supports all "),He=e("global query parameters"),Fe=e("."),Ne=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),Ve=s("p",null,[e("An array of partial "),s("a",{href:"#the-user-object"},"user objects"),e(".")],-1),We=s("p",null,[s("code",null,"email"),e(" and "),s("code",null,"password"),e(" are required.")],-1),Ye=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),ze=s("p",null,[e("Returns the "),s("a",{href:"#the-user-object"},"user objects"),e(" for the created users.")],-1),Je=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),Ke=s("pre",null,[s("code",null,`POST /users
`)],-1),Xe=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),e(" Example")],-1),Ze=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users"),e(`

`),s("span",{class:"hljs-punctuation"},"["),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"admin@example.com"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"p455w0rd"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"another@example.com"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"d1r3ctu5"'),s("span",{class:"hljs-punctuation"},","),e(`
		`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),$e=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),sa=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ea=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	create_users_items(data: [create_directus_users_input!]!): [directus_users]
}
`)])],-1),aa=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),e(" Example")],-1),ta=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	create_users_items(
		data: [
			{ email: `),s("span",{class:"hljs-string"},'"admin@example.com"'),e(", password: "),s("span",{class:"hljs-string"},'"p455w0rd"'),e(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(` }
			{ email: `),s("span",{class:"hljs-string"},'"another@example.com"'),e(", password: "),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(` }
		]
	) {
		email
		role
	}
}
`)])],-1),na=s("hr",null,null,-1),la=s("h2",{id:"update-a-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-user"},"#"),e(" Update a User")],-1),ra=s("p",null,"Update an existing user.",-1),oa=s("h3",{id:"query-parameters-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-6"},"#"),e(" Query Parameters")],-1),ca=e("Supports all "),ha=e("global query parameters"),ia=e("."),da=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),ua=s("p",null,[e("A partial "),s("a",{href:"#the-user-object"},"user object"),e(".")],-1),pa=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),e(" Returns")],-1),_a=s("p",null,[e("Returns the "),s("a",{href:"#the-user-object"},"user object"),e(" for the updated user.")],-1),ga=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),e(" REST API")],-1),ma=s("pre",null,[s("code",null,`PATCH /users/:id
`)],-1),ja=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),e(" Example")],-1),fa=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /users/72a1ce24-4748-47de-a05f-ce9af3033727"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"title"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"CTO"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),ba=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),e(" GraphQL")],-1),ya=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),xa=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_users_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!, data: update_directus_users_input!): directus_users
}
`)])],-1),qa=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),e(" Example")],-1),wa=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_users_item(id: `),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),e(", data: { title: "),s("span",{class:"hljs-string"},'"CTO"'),e(` }) {
		first_name
		last_name
	}
}
`)])],-1),Ta=s("hr",null,null,-1),Ea=s("h2",{id:"update-multiple-users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-users"},"#"),e(" Update Multiple Users")],-1),Ra=s("p",null,"Update multiple existing users.",-1),Sa=s("h3",{id:"query-parameters-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-7"},"#"),e(" Query Parameters")],-1),Pa=e("Supports all "),ka=e("global query parameters"),va=e("."),Aa=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),Oa=s("p",null,[s("code",null,"keys"),e(),s("strong",null,"Required"),s("br"),e(" Array of primary keys of the users you\u2019d like to update.")],-1),La=s("p",null,[s("code",null,"data"),e(),s("strong",null,"Required"),s("br"),e(" Any of "),s("a",{href:"#the-user-object"},"the user object"),e("\u2019s properties.")],-1),Ua=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),e(" Returns")],-1),Ia=s("p",null,[e("Returns the "),s("a",{href:"#the-user-object"},"user objects"),e(" for the updated users.")],-1),Qa=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),e(" REST API")],-1),Ca=s("pre",null,[s("code",null,`PATCH /users
`)],-1),Ga=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),e(" Example")],-1),Ba=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /users"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"9c3d75a8-7a5f-41a4-be0a-1488fd974511"'),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"title"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"CTO"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Da=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),e(" GraphQL")],-1),Ma=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ha=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	update_users_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!, data: update_directus_users_input!): [directus_users]
}
`)])],-1),Fa=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),e(" Example")],-1),Na=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	update_users_items(
		ids: [`),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),e(", "),s("span",{class:"hljs-string"},'"9c3d75a8-7a5f-41a4-be0a-1488fd974511"'),e(`]
		data: { title: `),s("span",{class:"hljs-string"},'"CTO"'),e(` }
	) {
		first_name
		last_name
	}
}
`)])],-1),Va=s("hr",null,null,-1),Wa=s("h2",{id:"delete-a-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-user"},"#"),e(" Delete a User")],-1),Ya=s("p",null,"Delete an existing user.",-1),za=s("h3",{id:"returns-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-8"},"#"),e(" Returns")],-1),Ja=s("p",null,"Empty body.",-1),Ka=s("h3",{id:"rest-api-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-8"},"#"),e(" REST API")],-1),Xa=s("pre",null,[s("code",null,`DELETE /users/:id
`)],-1),Za=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),e(" Example")],-1),$a=s("pre",null,[s("code",null,`DELETE /users/72a1ce24-4748-47de-a05f-ce9af3033727
`)],-1),st=s("h3",{id:"graphql-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-8"},"#"),e(" GraphQL")],-1),et=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),at=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_users_item(id:`),s("span",{class:"hljs-literal"}," ID"),e(`!): delete_one
}
`)])],-1),tt=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),e(" Example")],-1),nt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_users_item(id: `),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),e(`) {
		id
	}
}
`)])],-1),lt=s("hr",null,null,-1),rt=s("h2",{id:"delete-multiple-users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-users"},"#"),e(" Delete Multiple Users")],-1),ot=s("p",null,"Delete multiple existing users.",-1),ct=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),ht=s("p",null,"An array of user primary keys",-1),it=s("h3",{id:"returns-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-9"},"#"),e(" Returns")],-1),dt=s("p",null,"Empty body.",-1),ut=s("h3",{id:"rest-api-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-9"},"#"),e(" REST API")],-1),pt=s("pre",null,[s("code",null,`DELETE /users
`)],-1),_t=s("h5",{id:"example-15",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-15"},"#"),e(" Example")],-1),gt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// Request"),e(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-string"},'"653925a9-970e-487a-bfc0-ab6c96affcdc"'),s("span",{class:"hljs-punctuation"},","),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),s("span",{class:"hljs-punctuation"},"]"),e(`
`)])],-1),mt=s("h3",{id:"graphql-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-9"},"#"),e(" GraphQL")],-1),jt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ft=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	delete_users_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),e(`!]!): delete_many
}
`)])],-1),bt=s("h5",{id:"example-16",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-16"},"#"),e(" Example")],-1),yt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	delete_users_items(ids: [`),s("span",{class:"hljs-string"},'"72a1ce24-4748-47de-a05f-ce9af3033727"'),e(", "),s("span",{class:"hljs-string"},'"9c3d75a8-7a5f-41a4-be0a-1488fd974511"'),e(`]) {
		ids
	}
}
`)])],-1),xt=s("hr",null,null,-1),qt=s("h2",{id:"invite-a-new-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#invite-a-new-user"},"#"),e(" Invite a new User")],-1),wt=s("p",null,"Invite a new user by email.",-1),Tt=s("h3",{id:"request-body-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-5"},"#"),e(" Request Body")],-1),Et=s("p",null,[s("code",null,"email"),e(),s("strong",null,"Required"),s("br"),e(" User email to invite.")],-1),Rt=s("p",null,[s("code",null,"role"),e(),s("strong",null,"Required"),s("br"),e(" Role of the new user.")],-1),St=s("code",null,"invite_url",-1),Pt=s("br",null,null,-1),kt=e(" Provide a custom invite url which the link in the email will lead to. The invite token will be passed as a parameter."),vt=s("br",null,null,-1),At=s("strong",null,"Note",-1),Ot=e(": You need to configure the "),Lt=s("code",null,"USER_INVITE_URL_ALLOW_LIST",-1),Ut=e(" environment variable"),It=e(" to enable this feature."),Qt=s("h3",{id:"returns-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-10"},"#"),e(" Returns")],-1),Ct=s("p",null,"Empty body.",-1),Gt=s("h3",{id:"rest-api-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-10"},"#"),e(" REST API")],-1),Bt=s("pre",null,[s("code",null,`POST /users/invite
`)],-1),Dt=s("h5",{id:"example-17",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-17"},"#"),e(" Example")],-1),Mt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users/invite"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"email"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"another@example.com"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"role"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Ht=s("h3",{id:"graphql-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-10"},"#"),e(" GraphQL")],-1),Ft=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Nt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	users_invite(email:`),s("span",{class:"hljs-type"}," String"),e("!, role:"),s("span",{class:"hljs-type"}," String"),e("!, invite_url:"),s("span",{class:"hljs-type"}," String"),e("):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),Vt=s("h5",{id:"example-18",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-18"},"#"),e(" Example")],-1),Wt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	users_invite(email: `),s("span",{class:"hljs-string"},'"another@example.com"'),e(", role: "),s("span",{class:"hljs-string"},'"c86c2761-65d3-43c3-897f-6f74ad6a5bd7"'),e(`)
}
`)])],-1),Yt=s("hr",null,null,-1),zt=s("h2",{id:"accept-user-invite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accept-user-invite"},"#"),e(" Accept User Invite")],-1),Jt=s("p",null,[e("Accept your invite. The "),s("a",{href:"#invite-a-new-user"},"invite user endpoint"),e(" sends the email a link to the Admin App.")],-1),Kt=s("p",null,"This link includes a token, which is then used to activate the invited user.",-1),Xt=s("h3",{id:"request-body-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-6"},"#"),e(" Request Body")],-1),Zt=s("p",null,[s("code",null,"token"),e(),s("strong",null,"Required"),s("br"),e(" Accept invite token.")],-1),$t=s("p",null,[s("code",null,"password"),e(),s("strong",null,"Required"),s("br"),e(" Password for the user.")],-1),sn=s("h3",{id:"returns-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-11"},"#"),e(" Returns")],-1),en=s("p",null,"Empty body.",-1),an=s("h3",{id:"rest-api-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-11"},"#"),e(" REST API")],-1),tn=s("pre",null,[s("code",null,`POST /users/invite/accept
`)],-1),nn=s("h5",{id:"example-19",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-19"},"#"),e(" Example")],-1),ln=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users/invite/accept"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"token"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"eyJh...KmUk"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),rn=s("h3",{id:"graphql-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-11"},"#"),e(" GraphQL")],-1),on=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),cn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	users_invite_accept(token:`),s("span",{class:"hljs-type"}," String"),e("!, password:"),s("span",{class:"hljs-type"}," String"),e("!):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),hn=s("h5",{id:"example-20",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-20"},"#"),e(" Example")],-1),dn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	users_invite_accept(token: `),s("span",{class:"hljs-string"},'"eyJh...KmUk"'),e(", password: "),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(`)
}
`)])],-1),un=s("hr",null,null,-1),pn=s("h2",{id:"generate-two-factor-authentication-secret",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#generate-two-factor-authentication-secret"},"#"),e(" Generate Two-Factor Authentication Secret")],-1),_n=s("p",null,"Generates a secret and returns the URL to be used in an authenticator app.",-1),gn=s("h3",{id:"request-body-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-7"},"#"),e(" Request Body")],-1),mn=s("p",null,[s("code",null,"password"),e(),s("strong",null,"Required"),s("br"),e(" The user\u2019s password.")],-1),jn=s("h3",{id:"returns-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-12"},"#"),e(" Returns")],-1),fn=s("p",null,[s("code",null,"secret"),e(),s("strong",null,"string"),s("br"),e(" OTP secret to be saved in the authenticator app.")],-1),bn=s("p",null,[s("code",null,"otpauth_url"),e(),s("strong",null,"string"),s("br"),s("code",null,"otpauth://"),e(" formatted URL. Can be rendered as QR code and used in most authenticator apps.")],-1),yn=s("h3",{id:"rest-api-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-12"},"#"),e(" REST API")],-1),xn=s("pre",null,[s("code",null,`POST /users/me/tfa/generate
`)],-1),qn=s("h5",{id:"example-21",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-21"},"#"),e(" Example")],-1),wn=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users/me/tfa/generate"),e(`
`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"password"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Tn=s("h3",{id:"graphql-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-12"},"#"),e(" GraphQL")],-1),En=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Rn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	users_me_tfa_generate(password:`),s("span",{class:"hljs-type"}," String"),e(`!): users_me_tfa_generate_data
}
`)])],-1),Sn=s("h5",{id:"example-22",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-22"},"#"),e(" Example")],-1),Pn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	users_me_tfa_generate(password: `),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(`) {
		secret
		otpauth_url
	}
}
`)])],-1),kn=s("hr",null,null,-1),vn=s("h2",{id:"enable-two-factor-authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#enable-two-factor-authentication"},"#"),e(" Enable Two-Factor Authentication")],-1),An=s("p",null,"Adds a TFA secret to the user account.",-1),On=s("h3",{id:"request-body-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-8"},"#"),e(" Request Body")],-1),Ln=s("p",null,[s("code",null,"secret"),e(),s("strong",null,"Required"),s("br"),e(" The TFA secret from tfa/generate.")],-1),Un=s("p",null,[s("code",null,"otp"),e(),s("strong",null,"Required"),s("br"),e(" OTP generated with the secret, to recheck if the user has a correct TFA setup")],-1),In=s("h3",{id:"returns-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-13"},"#"),e(" Returns")],-1),Qn=s("p",null,"Empty response.",-1),Cn=s("h3",{id:"rest-api-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-13"},"#"),e(" REST API")],-1),Gn=s("pre",null,[s("code",null,`POST /users/me/tfa/enable
`)],-1),Bn=s("h5",{id:"example-23",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-23"},"#"),e(" Example")],-1),Dn=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users/me/tfa/enable"),e(`
`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"otp"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"123456"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"secret"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"3CtiutsNBmY3szHE"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Mn=s("h3",{id:"graphql-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-13"},"#"),e(" GraphQL")],-1),Hn=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Fn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	users_me_tfa_enable(otp:`),s("span",{class:"hljs-type"}," String"),e("!, secret:"),s("span",{class:"hljs-type"}," String"),e("!):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),Nn=s("h5",{id:"example-24",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-24"},"#"),e(" Example")],-1),Vn=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	users_me_tfa_enable(otp: `),s("span",{class:"hljs-string"},'"123456"'),e(", secret: "),s("span",{class:"hljs-string"},'"3CtiutsNBmY3szHE"'),e(`)
}
`)])],-1),Wn=s("hr",null,null,-1),Yn=s("h2",{id:"disable-two-factor-authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#disable-two-factor-authentication"},"#"),e(" Disable Two-Factor Authentication")],-1),zn=s("p",null,"Disables two-factor authentication by removing the OTP secret from the user.",-1),Jn=s("h3",{id:"request-body-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-9"},"#"),e(" Request Body")],-1),Kn=s("p",null,[s("code",null,"otp"),e(),s("strong",null,"Required"),s("br"),e(" One-time password generated by the authenticator app.")],-1),Xn=s("h3",{id:"returns-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-14"},"#"),e(" Returns")],-1),Zn=s("p",null,"Empty response.",-1),$n=s("h3",{id:"rest-api-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-14"},"#"),e(" REST API")],-1),sl=s("pre",null,[s("code",null,`POST /users/me/tfa/disable
`)],-1),el=s("h5",{id:"example-25",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-25"},"#"),e(" Example")],-1),al=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /users/me/tfa/disable"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"otp"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"859014"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),tl=s("h3",{id:"graphql-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-14"},"#"),e(" GraphQL")],-1),nl=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ll=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	users_me_tfa_disable(otp:`),s("span",{class:"hljs-type"}," String"),e("!):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),rl=s("h5",{id:"example-26",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-26"},"#"),e(" Example")],-1),ol=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	users_me_tfa_disable(otp: `),s("span",{class:"hljs-string"},'"591763"'),e(`)
}
`)])],-1),ul="Users",pl=!1,_l="REST and GraphQL API documentation on the Users collection in Directus.",gl="9 min read",ml="page-reference",jl={name:"users",setup(cl,{expose:o}){const l={title:"Users",modularExtension:!1,description:"REST and GraphQL API documentation on the Users collection in Directus.",readTime:"9 min read",pageClass:"page-reference"};return o({frontmatter:l}),(hl,il)=>{const t=r("router-link"),c=r("docs-wrapper");return h(),i(c,{frontmatter:l},{default:a(()=>[s("div",d,[s("blockquote",null,[s("p",null,[u,n(t,{to:"/docs/getting-started/glossary#users"},{default:a(()=>[p]),_:1}),_])]),g,m,j,f,b,y,x,q,w,T,E,s("p",null,[R,S,P,k,v,n(t,{to:"/docs/reference/files"},{default:a(()=>[A]),_:1}),O]),L,U,I,Q,s("p",null,[C,G,B,D,M,n(t,{to:"/docs/reference/system/roles"},{default:a(()=>[H]),_:1}),F]),N,V,W,Y,z,J,K,X,Z,$,ss,es,s("p",null,[as,n(t,{to:"/docs/reference/query"},{default:a(()=>[ts]),_:1}),ns]),ls,s("p",null,[rs,n(t,{to:"/docs/reference/query#limit"},{default:a(()=>[os]),_:1}),cs,hs,is]),ds,us,s("p",null,[n(t,{to:"/docs/reference/introduction#search-http-method"},{default:a(()=>[ps]),_:1})]),_s,gs,ms,js,fs,bs,ys,xs,qs,s("p",null,[ws,n(t,{to:"/docs/reference/query"},{default:a(()=>[Ts]),_:1}),Es]),Rs,Ss,Ps,ks,vs,As,Os,Ls,Us,Is,Qs,Cs,Gs,Bs,Ds,s("p",null,[Ms,n(t,{to:"/docs/reference/query"},{default:a(()=>[Hs]),_:1}),Fs]),Ns,Vs,Ws,Ys,zs,Js,Ks,Xs,Zs,$s,se,ee,ae,s("p",null,[te,n(t,{to:"/docs/reference/query"},{default:a(()=>[ne]),_:1}),le]),re,oe,ce,he,ie,de,ue,pe,_e,ge,me,je,fe,be,s("p",null,[ye,n(t,{to:"/docs/reference/query"},{default:a(()=>[xe]),_:1}),qe]),we,Te,Ee,Re,Se,Pe,ke,ve,Ae,Oe,Le,Ue,Ie,Qe,Ce,Ge,Be,De,s("p",null,[Me,n(t,{to:"/docs/reference/query"},{default:a(()=>[He]),_:1}),Fe]),Ne,Ve,We,Ye,ze,Je,Ke,Xe,Ze,$e,sa,ea,aa,ta,na,la,ra,oa,s("p",null,[ca,n(t,{to:"/docs/reference/query"},{default:a(()=>[ha]),_:1}),ia]),da,ua,pa,_a,ga,ma,ja,fa,ba,ya,xa,qa,wa,Ta,Ea,Ra,Sa,s("p",null,[Pa,n(t,{to:"/docs/reference/query"},{default:a(()=>[ka]),_:1}),va]),Aa,Oa,La,Ua,Ia,Qa,Ca,Ga,Ba,Da,Ma,Ha,Fa,Na,Va,Wa,Ya,za,Ja,Ka,Xa,Za,$a,st,et,at,tt,nt,lt,rt,ot,ct,ht,it,dt,ut,pt,_t,gt,mt,jt,ft,bt,yt,xt,qt,wt,Tt,Et,Rt,s("p",null,[St,Pt,kt,vt,At,Ot,n(t,{to:"/docs/self-hosted/config-options#security"},{default:a(()=>[Lt,Ut]),_:1}),It]),Qt,Ct,Gt,Bt,Dt,Mt,Ht,Ft,Nt,Vt,Wt,Yt,zt,Jt,Kt,Xt,Zt,$t,sn,en,an,tn,nn,ln,rn,on,cn,hn,dn,un,pn,_n,gn,mn,jn,fn,bn,yn,xn,qn,wn,Tn,En,Rn,Sn,Pn,kn,vn,An,On,Ln,Un,In,Qn,Cn,Gn,Bn,Dn,Mn,Hn,Fn,Nn,Vn,Wn,Yn,zn,Jn,Kn,Xn,Zn,$n,sl,el,al,tl,nl,ll,rl,ol])]),_:1})}}};export{jl as default,_l as description,pl as modularExtension,ml as pageClass,gl as readTime,ul as title};
