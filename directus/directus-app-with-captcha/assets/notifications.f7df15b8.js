import{a as o,o as r,b as h,w as e,h as s,e as a,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=s("blockquote",null,[s("p",null,"Notifications allow you to send/receive messages to/from other users of the platform.")],-1),u=s("hr",null,null,-1),_=s("h2",{id:"the-notification-object",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-notification-object"},"#"),t(" The Notification Object")],-1),f=s("p",null,[s("code",null,"id"),t(),s("strong",null,"integer"),s("br"),t(" Primary key of the revision.")],-1),m=s("p",null,[s("code",null,"timestamp"),t(),s("strong",null,"string"),s("br"),t(" Timestamp in ISO8601 when the notification was created.")],-1),j=s("p",null,[s("code",null,"status"),t(),s("strong",null,"string"),s("br"),t(" Current status of the notification. One of \u201Cinbox\u201D, \u201Carchived\u201D.")],-1),g=s("p",null,[s("code",null,"recipient"),t(),s("strong",null,"many-to-one"),s("br"),t(" User that received the notification.")],-1),b=s("p",null,[s("code",null,"sender"),t(),s("strong",null,"many-to-one"),s("br"),t(" User that sent the notification, if any.")],-1),y=s("p",null,[s("code",null,"subject"),t(),s("strong",null,"string"),s("br"),t(" Subject line of the message.")],-1),x=s("p",null,[s("code",null,"message"),t(),s("strong",null,"string"),s("br"),t(" Notification\u2019s message content. Will be sent in the email.")],-1),q=s("p",null,[s("code",null,"collection"),t(),s("strong",null,"string"),s("br"),t(" Collection this notification references.")],-1),E=s("p",null,[s("code",null,"item"),t(),s("strong",null,"string"),s("br"),t(" Primary key of the item this notification references.")],-1),T=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"id"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-number"},"2"),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"timestamp"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"2021-11-24T13:57:35Z"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"inbox"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"recipient"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"3EE34828-B43C-4FB2-A721-5151579B08EA"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"sender"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"497a495e-5529-4e46-8feb-2f35e9b85601"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"subject"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"You were mentioned in articles"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"message"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"\\nHello admin@example.com,\\n\\rijk@directus.io has mentioned you in a comment:\\n\\n> Hello <em>admin@example.com</em>!\\n\\n<a href=\\"http://localhost:8080/admin/content/articles/1\\">Click here to view.</a>\\n"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"item"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"1"'),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),k=s("hr",null,null,-1),P=s("h2",{id:"list-notifications",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#list-notifications"},"#"),t(" List Notifications")],-1),R=s("p",null,"List all notifications that exist in Directus.",-1),w=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),t(" Query Parameters")],-1),S=t("Supports all "),A=t("global query parameters"),C=t("."),L=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),t(" Returns")],-1),N=t("An array of up to "),Q=t("limit"),I=t(),D=s("a",{href:"#the-notification-object"},"notification objects",-1),O=t(". If no items are available, data will be an empty array."),H=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),t(" REST API")],-1),v=s("pre",null,[s("code",null,`GET /notifications
SEARCH /notifications
`)],-1),G=t("Learn more about SEARCH ->"),B=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),t(" GraphQL")],-1),M=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),U=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),t(` {
	notifications: [directus_notifications]
}
`)])],-1),Y=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),t(" Example")],-1),V=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),t(` {
	notifications {
		id
		recipient
		subject
	}
}
`)])],-1),F=s("hr",null,null,-1),W=s("h2",{id:"retrieve-a-notification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retrieve-a-notification"},"#"),t(" Retrieve a notification")],-1),Z=s("p",null,"List an existing notification by primary key.",-1),z=s("h3",{id:"query-parameters-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-1"},"#"),t(" Query Parameters")],-1),J=t("Supports all "),K=t("global query parameters"),X=t("."),$=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),t(" Returns")],-1),ss=s("p",null,[t("Returns the requested "),s("a",{href:"#the-notification-object"},"notification object"),t(".")],-1),ts=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),t(" REST API")],-1),es=s("pre",null,[s("code",null,`GET /notifications/:id
`)],-1),ns=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),t(" Example")],-1),as=s("pre",null,[s("code",null,`GET /notifications/42
`)],-1),is=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),t(" GraphQL")],-1),os=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ls=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Query"),t(` {
	notifications_by_id(id:`),s("span",{class:"hljs-literal"}," ID"),t(`!): directus_notifications
}
`)])],-1),cs=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),t(" Example")],-1),rs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"query"),t(` {
	notifications_by_id(id: `),s("span",{class:"hljs-number"},"42"),t(`) {
		id
		sender
		recipient
		message
		subject
	}
}
`)])],-1),hs=s("hr",null,null,-1),ds=s("h2",{id:"create-a-notification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-notification"},"#"),t(" Create a Notification")],-1),ps=s("p",null,"Create a new notification.",-1),us=s("h3",{id:"query-parameters-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-2"},"#"),t(" Query Parameters")],-1),_s=t("Supports all "),fs=t("global query parameters"),ms=t("."),js=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),t(" Request Body")],-1),gs=s("p",null,[t("A partial "),s("a",{href:"#the-notification-object"},"notification object"),t(".")],-1),bs=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),t(" Returns")],-1),ys=s("p",null,[t("Returns the "),s("a",{href:"#the-notification-object"},"notification object"),t(" for the created notification.")],-1),xs=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),t(" REST API")],-1),qs=s("pre",null,[s("code",null,`POST /notifications
`)],-1),Es=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),t(" Example")],-1),Ts=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /notifications"),t(`

`),s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"recipient"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"subject"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Hi there!"'),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),ks=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),t(" GraphQL")],-1),Ps=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Rs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	create_notifications_item(data: create_directus_notifications_input!): directus_notifications
}
`)])],-1),ws=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),t(" Example")],-1),Ss=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	create_notifications_item(data: { recipient: `),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),t(", subject: "),s("span",{class:"hljs-string"},'"Hi there!"'),t(` }) {
		id
		recipient
	}
}
`)])],-1),As=s("hr",null,null,-1),Cs=s("h2",{id:"create-multiple-notifications",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-notifications"},"#"),t(" Create Multiple Notifications")],-1),Ls=s("p",null,"Create multiple new notifications.",-1),Ns=s("h3",{id:"query-parameters-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-3"},"#"),t(" Query Parameters")],-1),Qs=t("Supports all "),Is=t("global query parameters"),Ds=t("."),Os=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),t(" Request Body")],-1),Hs=s("p",null,[t("An array of partial "),s("a",{href:"#the-notification-object"},"notification objects"),t(".")],-1),vs=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),t(" Returns")],-1),Gs=s("p",null,[t("Returns the "),s("a",{href:"#the-notification-object"},"notification object"),t(" for the created notification.")],-1),Bs=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),t(" REST API")],-1),Ms=s("pre",null,[s("code",null,`POST /notifications
`)],-1),Us=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),t(" Example")],-1),Ys=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /notifications"),t(`

`),s("span",{class:"hljs-punctuation"},"["),t(`
	`),s("span",{class:"hljs-punctuation"},"{"),t(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"directus_files"'),s("span",{class:"hljs-punctuation"},","),t(`
		`),s("span",{class:"hljs-attr"},'"recipient"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),t(`
		`),s("span",{class:"hljs-attr"},'"message"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Hi there! You should check out these files"'),t(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-punctuation"},"{"),t(`
		`),s("span",{class:"hljs-attr"},'"collection"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"articles"'),s("span",{class:"hljs-punctuation"},","),t(`
		`),s("span",{class:"hljs-attr"},'"recipient"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),s("span",{class:"hljs-punctuation"},","),t(`
		`),s("span",{class:"hljs-attr"},'"message"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Hi there! You should check out these articles"'),t(`
	`),s("span",{class:"hljs-punctuation"},"}"),t(`
`),s("span",{class:"hljs-punctuation"},"]"),t(`
`)])],-1),Vs=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),t(" GraphQL")],-1),Fs=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),Ws=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	create_notifications_items(data: [create_directus_notifications_input!]!): [directus_notifications]
}
`)])],-1),Zs=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),t(" Example")],-1),zs=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	create_notifications_items(
		data: [
			{
				collection: `),s("span",{class:"hljs-string"},'"directus_files"'),t(`
				recipient: `),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),t(`
				message: `),s("span",{class:"hljs-string"},'"Hi there! You should check out these files"'),t(`
			}
			{
				collection: `),s("span",{class:"hljs-string"},'"articles"'),t(`
				recipient: `),s("span",{class:"hljs-string"},'"410b5772-e63f-4ae6-9ea2-39c3a31bd6ca"'),t(`
				message: `),s("span",{class:"hljs-string"},'"Hi there! You should check out these articles"'),t(`
			}
		]
	) {
		id
		recipient
	}
}
`)])],-1),Js=s("hr",null,null,-1),Ks=s("h2",{id:"update-a-notification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-a-notification"},"#"),t(" Update a Notification")],-1),Xs=s("p",null,"Update an existing notification.",-1),$s=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Email Notifications"),s("p",null,"Emails are only sent when the notification is created. Updated to an existing notification won\u2019t trigger a new notification email to be sent.")],-1),st=s("h3",{id:"query-parameters-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-4"},"#"),t(" Query Parameters")],-1),tt=t("Supports all "),et=t("global query parameters"),nt=t("."),at=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),t(" Request Body")],-1),it=s("p",null,[t("A partial "),s("a",{href:"#the-notification-object"},"notification object"),t(".")],-1),ot=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),t(" Returns")],-1),lt=s("p",null,[t("Returns the "),s("a",{href:"#the-notification-object"},"notification object"),t(" for the updated notification.")],-1),ct=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),t(" REST API")],-1),rt=s("pre",null,[s("code",null,`PATCH /notifications/:id
`)],-1),ht=s("h5",{id:"example-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-7"},"#"),t(" Example")],-1),dt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /notifications/34"),t(`

`),s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"message"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"This is my updated notification"'),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),pt=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),t(" GraphQL")],-1),ut=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),_t=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	update_notifications_item(id:`),s("span",{class:"hljs-literal"}," ID"),t(`!, data: update_directus_notifications_input): directus_notifications
}
`)])],-1),ft=s("h5",{id:"example-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-8"},"#"),t(" Example")],-1),mt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	update_notifications_item(id: `),s("span",{class:"hljs-number"},"32"),t(", data: { message: "),s("span",{class:"hljs-string"},'"This is my updated notification"'),t(` }) {
		id
		message
	}
}
`)])],-1),jt=s("hr",null,null,-1),gt=s("h2",{id:"update-multiple-notifications",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-notifications"},"#"),t(" Update Multiple Notifications")],-1),bt=s("p",null,"Update multiple existing notifications.",-1),yt=s("h3",{id:"query-parameters-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters-5"},"#"),t(" Query Parameters")],-1),xt=t("Supports all "),qt=t("global query parameters"),Et=t("."),Tt=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),t(" Request Body")],-1),kt=s("p",null,[s("code",null,"keys"),t(),s("strong",null,"Required"),s("br"),t(" Array of primary keys of the notifications you\u2019d like to update.")],-1),Pt=s("p",null,[s("code",null,"data"),t(),s("strong",null,"Required"),s("br"),t(" Any of "),s("a",{href:"#the-notification-object"},"the notification object"),t("\u2019s properties.")],-1),Rt=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),t(" Returns")],-1),wt=s("p",null,[t("Returns the "),s("a",{href:"#the-notification-object"},"notification objects"),t(" for the updated notifications.")],-1),St=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),t(" REST API")],-1),At=s("pre",null,[s("code",null,`PATCH /notifications
`)],-1),Ct=s("h5",{id:"example-9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-9"},"#"),t(" Example")],-1),Lt=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// PATCH /notifications"),t(`

`),s("span",{class:"hljs-punctuation"},"{"),t(`
	`),s("span",{class:"hljs-attr"},'"keys"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),t(),s("span",{class:"hljs-number"},"64"),s("span",{class:"hljs-punctuation"},"]"),s("span",{class:"hljs-punctuation"},","),t(`
	`),s("span",{class:"hljs-attr"},'"data"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-punctuation"},"{"),t(`
		`),s("span",{class:"hljs-attr"},'"message"'),s("span",{class:"hljs-punctuation"},":"),t(),s("span",{class:"hljs-string"},'"Updated message!"'),t(`
	`),s("span",{class:"hljs-punctuation"},"}"),t(`
`),s("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),Nt=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),t(" GraphQL")],-1),Qt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),It=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	update_notifications_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),t(`!]!, data: update_directus_notifications_input): [directus_notifications]
}
`)])],-1),Dt=s("h5",{id:"example-10",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-10"},"#"),t(" Example")],-1),Ot=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	update_notifications_items(ids: [`),s("span",{class:"hljs-number"},"15"),t(", "),s("span",{class:"hljs-number"},"64"),t("], data: { message: "),s("span",{class:"hljs-string"},'"Updated message!"'),t(` }) {
		id
		recipient
	}
}
`)])],-1),Ht=s("hr",null,null,-1),vt=s("h2",{id:"delete-a-notification",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-a-notification"},"#"),t(" Delete a Notification")],-1),Gt=s("p",null,"Delete an existing notification.",-1),Bt=s("h3",{id:"returns-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-6"},"#"),t(" Returns")],-1),Mt=s("p",null,"Empty body.",-1),Ut=s("h3",{id:"rest-api-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-6"},"#"),t(" REST API")],-1),Yt=s("pre",null,[s("code",null,`DELETE /notifications/:id
`)],-1),Vt=s("h5",{id:"example-11",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-11"},"#"),t(" Example")],-1),Ft=s("pre",null,[s("code",null,`DELETE /notifications/34
`)],-1),Wt=s("h3",{id:"graphql-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-6"},"#"),t(" GraphQL")],-1),Zt=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),zt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	delete_notifications_item(id:`),s("span",{class:"hljs-literal"}," ID"),t(`!): delete_one
}
`)])],-1),Jt=s("h5",{id:"example-12",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-12"},"#"),t(" Example")],-1),Kt=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	delete_notifications_item(id: `),s("span",{class:"hljs-number"},"32"),t(`) {
		id
	}
}
`)])],-1),Xt=s("hr",null,null,-1),$t=s("h2",{id:"delete-multiple-notifications",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete-multiple-notifications"},"#"),t(" Delete Multiple Notifications")],-1),se=s("p",null,"Delete multiple existing notifications.",-1),te=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),t(" Request Body")],-1),ee=s("p",null,"An array of notification primary keys",-1),ne=s("h3",{id:"returns-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-7"},"#"),t(" Returns")],-1),ae=s("p",null,"Empty body.",-1),ie=s("h3",{id:"rest-api-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-7"},"#"),t(" REST API")],-1),oe=s("pre",null,[s("code",null,`DELETE /notifications
`)],-1),le=s("h5",{id:"example-13",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-13"},"#"),t(" Example")],-1),ce=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// DELETE /notifications"),t(`
`),s("span",{class:"hljs-punctuation"},"["),s("span",{class:"hljs-number"},"15"),s("span",{class:"hljs-punctuation"},","),t(),s("span",{class:"hljs-number"},"251"),s("span",{class:"hljs-punctuation"},","),t(),s("span",{class:"hljs-number"},"810"),s("span",{class:"hljs-punctuation"},"]"),t(`
`)])],-1),re=s("h3",{id:"graphql-7",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-7"},"#"),t(" GraphQL")],-1),he=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),de=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),t(` {
	delete_notifications_items(ids: `),s("span",{class:"hljs-literal"},"[ID"),t(`!]!): delete_many
}
`)])],-1),pe=s("h5",{id:"example-14",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-14"},"#"),t(" Example")],-1),ue=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),t(` {
	delete_notifications_items(ids: [`),s("span",{class:"hljs-number"},"15"),t(", "),s("span",{class:"hljs-number"},"251"),t(", "),s("span",{class:"hljs-number"},"810"),t(`]) {
		ids
	}
}
`)])],-1),ge="Notifications",be=!1,ye="REST and GraphQL API documentation on the Notifications collection in Directus.",xe="5 min read",qe="page-reference",Ee={name:"notifications",setup(_e,{expose:l}){const i={title:"Notifications",modularExtension:!1,description:"REST and GraphQL API documentation on the Notifications collection in Directus.",readTime:"5 min read",pageClass:"page-reference"};return l({frontmatter:i}),(fe,me)=>{const n=o("router-link"),c=o("docs-wrapper");return r(),h(c,{frontmatter:i},{default:e(()=>[s("div",d,[p,u,_,f,m,j,g,b,y,x,q,E,T,k,P,R,w,s("p",null,[S,a(n,{to:"/docs/reference/query"},{default:e(()=>[A]),_:1}),C]),L,s("p",null,[N,a(n,{to:"/docs/reference/query#limit"},{default:e(()=>[Q]),_:1}),I,D,O]),H,v,s("p",null,[a(n,{to:"/docs/reference/introduction#search-http-method"},{default:e(()=>[G]),_:1})]),B,M,U,Y,V,F,W,Z,z,s("p",null,[J,a(n,{to:"/docs/reference/query"},{default:e(()=>[K]),_:1}),X]),$,ss,ts,es,ns,as,is,os,ls,cs,rs,hs,ds,ps,us,s("p",null,[_s,a(n,{to:"/docs/reference/query"},{default:e(()=>[fs]),_:1}),ms]),js,gs,bs,ys,xs,qs,Es,Ts,ks,Ps,Rs,ws,Ss,As,Cs,Ls,Ns,s("p",null,[Qs,a(n,{to:"/docs/reference/query"},{default:e(()=>[Is]),_:1}),Ds]),Os,Hs,vs,Gs,Bs,Ms,Us,Ys,Vs,Fs,Ws,Zs,zs,Js,Ks,Xs,$s,st,s("p",null,[tt,a(n,{to:"/docs/reference/query"},{default:e(()=>[et]),_:1}),nt]),at,it,ot,lt,ct,rt,ht,dt,pt,ut,_t,ft,mt,jt,gt,bt,yt,s("p",null,[xt,a(n,{to:"/docs/reference/query"},{default:e(()=>[qt]),_:1}),Et]),Tt,kt,Pt,Rt,wt,St,At,Ct,Lt,Nt,Qt,It,Dt,Ot,Ht,vt,Gt,Bt,Mt,Ut,Yt,Vt,Ft,Wt,Zt,zt,Jt,Kt,Xt,$t,se,te,ee,ne,ae,ie,oe,le,ce,re,he,de,pe,ue])]),_:1})}}};export{Ee as default,ye as description,be as modularExtension,qe as pageClass,xe as readTime,ge as title};
