import{a as l,o as r,b as h,w as t,h as s,e as o,E as a}from"./runtime-core.esm-bundler.15edf3c4.js";const p={class:"markdown-body"},d=s("blockquote",null,[s("p",null,[a("The JS SDK provides an intuitive interface for the Directus API from within a JavaScript-powered project (browsers and Node.js). The default implementation uses "),s("a",{href:"https://npmjs.com/axios",target:"_blank",rel:"noopener noreferrer"},"Axios"),a(" for transport and "),s("code",null,"localStorage"),a(" for storing state.")])],-1),u=s("h2",{id:"installation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installation"},"#"),a(" Installation")],-1),j=s("pre",null,[s("code",{class:"language-bash"},`npm install @directus/sdk
`)],-1),_=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage"},"#"),a(" Usage")],-1),m=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://directus.example.com'"),a(`);

`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"start"),a("("),s("span",{class:"hljs-params"}),a(`) {
	`),s("span",{class:"hljs-comment"},"// We don't need to authenticate if data is public"),a(`
	`),s("span",{class:"hljs-keyword"},"const"),a(" publicData = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-title function_"},"items"),a("("),s("span",{class:"hljs-string"},"'public'"),a(")."),s("span",{class:"hljs-title function_"},"readByQuery"),a("({ "),s("span",{class:"hljs-attr"},"meta"),a(": "),s("span",{class:"hljs-string"},"'total_count'"),a(` });

	`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`({
		`),s("span",{class:"hljs-attr"},"items"),a(": publicData."),s("span",{class:"hljs-property"},"data"),a(`,
		`),s("span",{class:"hljs-attr"},"total"),a(": publicData."),s("span",{class:"hljs-property"},"meta"),a("."),s("span",{class:"hljs-property"},"total_count"),a(`,
	});

	`),s("span",{class:"hljs-comment"},"// But, we need to authenticate if data is private"),a(`
	`),s("span",{class:"hljs-keyword"},"let"),a(" authenticated = "),s("span",{class:"hljs-literal"},"false"),a(`;

	`),s("span",{class:"hljs-comment"},"// Try to authenticate with token if exists"),a(`
	`),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a(`
		.`),s("span",{class:"hljs-title function_"},"refresh"),a(`()
		.`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
			authenticated = `),s("span",{class:"hljs-literal"},"true"),a(`;
		})
		.`),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {});

	`),s("span",{class:"hljs-comment"},"// Let's login in case we don't have token or it is invalid / expired"),a(`
	`),s("span",{class:"hljs-keyword"},"while"),a(` (!authenticated) {
		`),s("span",{class:"hljs-keyword"},"const"),a(" email = "),s("span",{class:"hljs-variable language_"},"window"),a("."),s("span",{class:"hljs-title function_"},"prompt"),a("("),s("span",{class:"hljs-string"},"'Email:'"),a(`);
		`),s("span",{class:"hljs-keyword"},"const"),a(" password = "),s("span",{class:"hljs-variable language_"},"window"),a("."),s("span",{class:"hljs-title function_"},"prompt"),a("("),s("span",{class:"hljs-string"},"'Password:'"),a(`);

		`),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a(`
			.`),s("span",{class:"hljs-title function_"},"login"),a(`({ email, password })
			.`),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
				authenticated = `),s("span",{class:"hljs-literal"},"true"),a(`;
			})
			.`),s("span",{class:"hljs-title function_"},"catch"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
				`),s("span",{class:"hljs-variable language_"},"window"),a("."),s("span",{class:"hljs-title function_"},"alert"),a("("),s("span",{class:"hljs-string"},"'Invalid credentials'"),a(`);
			});
	}

	`),s("span",{class:"hljs-comment"},"// After authentication, we can fetch the private data in case the user has access to it"),a(`
	`),s("span",{class:"hljs-keyword"},"const"),a(" privateData = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-title function_"},"items"),a("("),s("span",{class:"hljs-string"},"'privateData'"),a(")."),s("span",{class:"hljs-title function_"},"readByQuery"),a("({ "),s("span",{class:"hljs-attr"},"meta"),a(": "),s("span",{class:"hljs-string"},"'total_count'"),a(` });

	`),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`({
		`),s("span",{class:"hljs-attr"},"items"),a(": privateData."),s("span",{class:"hljs-property"},"data"),a(`,
		`),s("span",{class:"hljs-attr"},"total"),a(": privateData."),s("span",{class:"hljs-property"},"meta"),a("."),s("span",{class:"hljs-property"},"total_count"),a(`,
	});
}

`),s("span",{class:"hljs-title function_"},"start"),a(`();
`)])],-1),g=s("h2",{id:"typescript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript"},"#"),a(" TypeScript")],-1),f=s("p",null,"Version >= 4.1",-1),y=s("p",null,"Although it\u2019s not required, it is recommended to use Typescript to have an easy development experience. This allows more detailed IDE suggestions for return types, sorting, filtering, etc.",-1),w=s("p",null,"To feed the SDK with your current schema, you need to pass it on the constructor.",-1),b=s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"BlogPost"),a(` = {
	`),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-variable constant_"},"ID"),a(`;
	`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-built_in"},"string"),a(`;
};

`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"BlogSettings"),a(` = {
	`),s("span",{class:"hljs-attr"},"display_promotions"),a(": "),s("span",{class:"hljs-built_in"},"boolean"),a(`;
};

`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"MyCollections"),a(` = {
	`),s("span",{class:"hljs-attr"},"posts"),a(": "),s("span",{class:"hljs-title class_"},"BlogPost"),a(`;
	`),s("span",{class:"hljs-attr"},"settings"),a(": "),s("span",{class:"hljs-title class_"},"BlogSettings"),a(`;
};

`),s("span",{class:"hljs-comment"},"// This is how you feed custom type information to Directus."),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("<"),s("span",{class:"hljs-title class_"},"MyCollections"),a(">("),s("span",{class:"hljs-string"},"'http://url'"),a(`);

`),s("span",{class:"hljs-comment"},"// ..."),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" post = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-title function_"},"items"),a("("),s("span",{class:"hljs-string"},"'posts'"),a(")."),s("span",{class:"hljs-title function_"},"readOne"),a("("),s("span",{class:"hljs-number"},"1"),a(`);
`),s("span",{class:"hljs-comment"},"// typeof(post) is a partial BlogPost object"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" settings = "),s("span",{class:"hljs-keyword"},"await"),a(" posts."),s("span",{class:"hljs-title function_"},"singleton"),a("("),s("span",{class:"hljs-string"},"'settings'"),a(")."),s("span",{class:"hljs-title function_"},"read"),a(`();
`),s("span",{class:"hljs-comment"},"// typeof(settings) is a partial BlogSettings object"),a(`
`)])],-1),k=s("p",null,"You can also extend the Directus system type information by providing type information for system collections as well.",-1),v=s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-comment"},"// Custom fields added to Directus user collection."),a(`
`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"UserType"),a(` = {
	`),s("span",{class:"hljs-attr"},"level"),a(": "),s("span",{class:"hljs-built_in"},"number"),a(`;
	`),s("span",{class:"hljs-attr"},"experience"),a(": "),s("span",{class:"hljs-built_in"},"number"),a(`;
};

`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"CustomTypes"),a(` = {
	`),s("span",{class:"hljs-comment"},`/*
	This type will be merged with Directus user type.
	It's important that the naming matches a directus
	collection name exactly. Typos won't get caught here
	since SDK will assume it's a custom user collection.
	*/`),a(`
	`),s("span",{class:"hljs-attr"},"directus_users"),a(": "),s("span",{class:"hljs-title class_"},"UserType"),a(`;
};

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("<"),s("span",{class:"hljs-title class_"},"CustomTypes"),a(">("),s("span",{class:"hljs-string"},"'https://api.example.com'"),a(`);

`),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-title function_"},"login"),a(`({
	`),s("span",{class:"hljs-attr"},"email"),a(": "),s("span",{class:"hljs-string"},"'admin@example.com'"),a(`,
	`),s("span",{class:"hljs-attr"},"password"),a(": "),s("span",{class:"hljs-string"},"'password'"),a(`,
});

`),s("span",{class:"hljs-keyword"},"const"),a(" me = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"me"),a("."),s("span",{class:"hljs-title function_"},"read"),a(`();
`),s("span",{class:"hljs-comment"},"// typeof me = partial DirectusUser & UserType;"),a(`

`),s("span",{class:"hljs-comment"},"// OK"),a(`
me.`),s("span",{class:"hljs-property"},"level"),a(" = "),s("span",{class:"hljs-number"},"42"),a(`;

`),s("span",{class:"hljs-comment"},'// Error TS2322: Type "string" is not assignable to type "number".'),a(`
me.`),s("span",{class:"hljs-property"},"experience"),a(" = "),s("span",{class:"hljs-string"},"'high'"),a(`;
`)])],-1),x=s("h2",{id:"reference",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reference"},"#"),a(" Reference")],-1),S=s("h3",{id:"constructor",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#constructor"},"#"),a(" Constructor")],-1),D=s("p",null,[a("This is the starting point to use the SDK. You need to create an instance and invoke methods from it. In most cases a single instance is sufficient, but in case you need more, you need to define "),s("a",{href:"#options.storage.prefix"},[s("code",null,"options.storage.prefix")]),a(".")],-1),T=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a(`(url, init);
`)])],-1),I=s("ul",null,[s("li",null,[s("p",null,[s("code",null,"url"),a(" [required] "),s("em",null,"String"),a(" - A string pointing to your Directus instance. E.g. "),s("code",null,"https://admin.directus.io")]),s("a",{name:"options"})]),s("li",null,[s("p",null,[s("code",null,"init"),a(" [optional] "),s("em",null,"Object"),a(" - Define settings that you want to customize .The possible options are:")]),s("a",{name:"options.auth"}),s("ul",null,[s("li",null,[s("p",null,[s("code",null,"auth"),a(" [optional] "),s("em",null,"Object"),a(" - Defines settings you want to customize regarding "),s("a",{href:"#auth"},"authentication"),a(". The possible options are:")]),s("ul",null,[s("li",null,[s("p",null,[s("code",null,"mode"),a(" [optional] "),s("em",null,"String"),a(" - Defines the mode you want to use for authentication. It can be "),s("code",null,"'cookie'"),a(" for cookies or "),s("code",null,"'json'"),a(" for JWT. Defaults to "),s("code",null,"'cookie'"),a(" on browsers and "),s("code",null,"'json'"),a(" otherwise. We recommend using cookies when possible to prevent any kind of attacks, mostly XSS.")]),s("a",{name:"options.auth.autoRefresh"})]),s("li",null,[s("p",null,[s("code",null,"autoRefresh"),a(" [optional] "),s("em",null,"Boolean"),a(" - Tells SDK if it should handle refresh tokens automatically. Defaults to "),s("code",null,"true"),a(".")])]),s("li",null,[s("p",null,[s("code",null,"msRefreshBeforeExpires"),a(" [optional] "),s("em",null,"Number"),a(" - When "),s("code",null,"autoRefresh"),a(" is enabled, this tells how many milliseconds before the refresh token expires and needs to be refreshed. Defaults to "),s("code",null,"30000"),a(".")])]),s("li",null,[s("p",null,[s("code",null,"staticToken"),a(" [optional] "),s("em",null,"String"),a(" - Defines the static token to use. It is not compatible with the options above since it does not refresh. Defaults to "),s("code",null,"''"),a(" (no static token).")])])])])]),s("a",{name:"options.storage"}),s("ul",null,[s("li",null,[s("p",null,[s("code",null,"storage"),a(" [optional] "),s("em",null,"Object"),a(" - Defines settings you want to customize regarding "),s("a",{href:"#storage"},"storage"),a(".")]),s("a",{name:"options.storage.prefix"}),s("ul",null,[s("li",null,[s("code",null,"prefix"),a(" [optional] "),s("em",null,"String"),a(" - Defines the tokens prefix tokens that are saved. This should be fulfilled with different values when using multiple instances of SDK. Defaults to "),s("code",null,"''"),a(" (no prefix).")]),s("li",null,[s("code",null,"mode"),a(" [optional] "),s("em",null,"String"),a(" - Defines the storage location to be used to save tokens. Allowed values are "),s("code",null,"LocalStorage"),a(" and "),s("code",null,"MemoryStorage"),a(". Defaults to "),s("code",null,"LocalStorage"),a(" on browsers and "),s("code",null,"MemoryStorage"),a(" on Node.js. The mode "),s("code",null,"LocalStorage"),a(" is not compatible with Node.js.")])])])]),s("a",{name:"options.transport"}),s("ul",null,[s("li",null,[s("code",null,"transport"),a(" [optional] "),s("em",null,"Object"),a(" - Defines settings you want to customize regarding "),s("a",{href:"#transport"},"transport"),a(". "),s("ul",null,[s("li",null,[s("code",null,"params"),a(" [optional] "),s("em",null,"Object"),a(" - Defines an object with keys and values to be passed as additional query string.")]),s("li",null,[s("code",null,"headers"),a(" [optional] "),s("em",null,"Object"),a(" - Defines an object with keys and values to be passed as additional headers.")]),s("li",null,[s("code",null,"onUploadProgress"),a(" [optional] "),s("em",null,[a("(event: "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent",target:"_blank",rel:"noopener noreferrer"},"ProgressEvent"),a(" => void)")]),a(" - Defines a callback function to indicate the upload progress.")])])])])])],-1),A=s("h2",{id:"auth",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#auth"},"#"),a(" Auth")],-1),R=s("p",null,"Defines how authentication is handled by the SDK.",-1),q=s("h3",{id:"custom-implementation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-implementation"},"#"),a(" Custom Implementation")],-1),B=s("p",null,[a("It is possible to provide a custom implementation by extending "),s("code",null,"IAuth"),a(". While this could be useful for advanced usage, most use-cases do not need it.")],-1),M=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"IAuth"),a(", "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"MyAuth"),a(),s("span",{class:"hljs-keyword"},"extends"),a(),s("span",{class:"hljs-title class_ inherited__"},"IAuth"),a(` {
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"login"),a("("),s("span",{class:"hljs-params"}),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(" { "),s("span",{class:"hljs-attr"},"access_token"),a(": "),s("span",{class:"hljs-string"},"''"),a(", "),s("span",{class:"hljs-attr"},"expires"),a(": "),s("span",{class:"hljs-number"},"0"),a(` };
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"logout"),a("("),s("span",{class:"hljs-params"}),a(`) {}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"refresh"),a("("),s("span",{class:"hljs-params"}),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(" { "),s("span",{class:"hljs-attr"},"access_token"),a(": "),s("span",{class:"hljs-string"},"''"),a(", "),s("span",{class:"hljs-attr"},"expires"),a(": "),s("span",{class:"hljs-number"},"0"),a(` };
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"static"),a("("),s("span",{class:"hljs-params"}),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-literal"},"true"),a(`;
	}
}

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://directus.example.com'"),a(`, {
	`),s("span",{class:"hljs-attr"},"auth"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"MyAuth"),a(`(),
});
`)])],-1),O=s("h3",{id:"directus-implementation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#directus-implementation"},"#"),a(" Directus Implementation")],-1),C=s("p",null,[a("By default, Directus creates an instance of "),s("code",null,"Auth"),a(" which handles refresh tokens automatically. Check "),s("a",{href:"#options.auth"},[s("code",null,"options.auth")]),a(" to see the available settings.")],-1),P=s("h3",{id:"get-current-token",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-current-token"},"#"),a(" Get current token")],-1),E=s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"const"),a(" token = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-property"},"token"),a(`;
`)])],-1),N=s("div",{class:"warning hint"},[s("div",{class:"hint-title"},"Async"),s("p",null,[a("Reading the token is an asynchronous getter. This makes sure that any currently active "),s("code",null,"refresh"),a(" calls are being awaited before the current token is returned.")])],-1),U=s("h3",{id:"login",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#login"},"#"),a(" Login")],-1),K=s("h4",{id:"with-credentials",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#with-credentials"},"#"),a(" With credentials")],-1),F=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-title function_"},"login"),a(`({
	`),s("span",{class:"hljs-attr"},"email"),a(": "),s("span",{class:"hljs-string"},"'admin@example.com'"),a(`,
	`),s("span",{class:"hljs-attr"},"password"),a(": "),s("span",{class:"hljs-string"},"'d1r3ctu5'"),a(`,
});
`)])],-1),L=s("h4",{id:"with-static-tokens",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#with-static-tokens"},"#"),a(" With static tokens")],-1),J=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-title function_"},"static"),a("("),s("span",{class:"hljs-string"},"'static_token'"),a(`);
`)])],-1),W=s("h3",{id:"refresh-auth-token",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#refresh-auth-token"},"#"),a(" Refresh Auth Token")],-1),H=s("p",null,[a("By default, Directus will handle token refreshes. Although, you can handle this behavior manually by setting "),s("a",{href:"#options.auth.autoRefresh"},[s("code",null,"autoRefresh")]),a(" to "),s("code",null,"false"),a(".")],-1),V=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-title function_"},"refresh"),a(`();
`)])],-1),z={class:"tip hint"},G=s("div",{class:"hint-title"},"Developing Locally",-1),Y=a("If you\u2019re developing locally, you might not be able to refresh your auth token automatically in all browsers. This is because the default auth configuration requires secure cookies to be set, and not all browsers allow this for localhost. You can use a browser which does support this such as Firefox, or "),Q=a("disable secure cookies"),$=a("."),X=s("h3",{id:"logout",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#logout"},"#"),a(" Logout")],-1),Z=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-title function_"},"logout"),a(`();
`)])],-1),ss=s("h3",{id:"request-a-password-reset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-a-password-reset"},"#"),a(" Request a Password Reset")],-1),as=s("p",null,[a("By default, the address defined in "),s("code",null,"PUBLIC_URL"),a(" on "),s("code",null,".env"),a(" file is used for the link to the reset password page sent in the email:")],-1),ts=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-property"},"password"),a("."),s("span",{class:"hljs-title function_"},"request"),a("("),s("span",{class:"hljs-string"},"'admin@example.com'"),a(`);
`)])],-1),es=s("p",null,"But a custom address can be passed as second argument:",-1),ns=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-property"},"password"),a("."),s("span",{class:"hljs-title function_"},"request"),a(`(
	`),s("span",{class:"hljs-string"},"'admin@example.com'"),a(`,
	`),s("span",{class:"hljs-string"},"'https://myapp.com'"),a(),s("span",{class:"hljs-comment"},"// In this case, the link will be https://myapp.com?token=FEE0A..."),a(`
);
`)])],-1),ls=s("h3",{id:"reset-a-password",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reset-a-password"},"#"),a(" Reset a Password")],-1),os=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"auth"),a("."),s("span",{class:"hljs-property"},"password"),a("."),s("span",{class:"hljs-title function_"},"reset"),a("("),s("span",{class:"hljs-string"},"'abc.def.ghi'"),a(", "),s("span",{class:"hljs-string"},"'n3w-p455w0rd'"),a(`);
`)])],-1),cs=s("p",null,[a("Note: The token passed in the first parameter is sent in an email to the user when using "),s("code",null,"request()")],-1),is=s("h2",{id:"transport",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#transport"},"#"),a(" Transport")],-1),rs=s("p",null,"The transport object abstracts how you communicate with Directus. Transports can be customized to use different HTTP libraries for example.",-1),hs=s("h3",{id:"custom-implementation-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-implementation-1"},"#"),a(" Custom Implementation")],-1),ps=s("p",null,[a("It is possible to provide a custom implementation by extending "),s("code",null,"ITransport"),a(". While, this could be useful for advanced usage, it is not needed for most use-cases.")],-1),ds=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"ITransport"),a(", "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"MyTransport"),a(),s("span",{class:"hljs-keyword"},"extends"),a(),s("span",{class:"hljs-title class_ inherited__"},"ITransport"),a(` {
	`),s("span",{class:"hljs-title function_"},"buildResponse"),a("("),s("span",{class:"hljs-params"}),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(` {
			`),s("span",{class:"hljs-attr"},"raw"),a(": "),s("span",{class:"hljs-string"},"''"),a(`,
			`),s("span",{class:"hljs-attr"},"data"),a(`: {},
			`),s("span",{class:"hljs-attr"},"status"),a(": "),s("span",{class:"hljs-number"},"0"),a(`,
			`),s("span",{class:"hljs-attr"},"headers"),a(`: {},
		};
	}

	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-params"},"path, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"head"),a("("),s("span",{class:"hljs-params"},"path, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"options"),a("("),s("span",{class:"hljs-params"},"path, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"delete"),a("("),s("span",{class:"hljs-params"},"path, data, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"post"),a("("),s("span",{class:"hljs-params"},"path, data, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"put"),a("("),s("span",{class:"hljs-params"},"path, data, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
	`),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-title function_"},"patch"),a("("),s("span",{class:"hljs-params"},"path, data, options"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-variable language_"},"this"),a("."),s("span",{class:"hljs-title function_"},"buildResponse"),a(`();
	}
}

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://directus.example.com'"),a(`, {
	`),s("span",{class:"hljs-attr"},"transport"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"MyTransport"),a(`(),
});
`)])],-1),us=s("h3",{id:"directus-implementation-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#directus-implementation-1"},"#"),a(" Directus Implementation")],-1),js=s("p",null,[a("By default, Directus creates an instance of "),s("code",null,"Transport"),a(" which handles requests automatically. Check "),s("a",{href:"#options.transport"},[s("code",null,"options.transport")]),a(" to see the available settings.")],-1),_s=s("p",null,[a("To make HTTP requests SDK uses "),s("code",null,"axios"),a(" so it is compatible in both browsers and Node.js. Also, it is possible to handle upload progress (a downside of "),s("code",null,"fetch"),a(").")],-1),ms=s("h2",{id:"storage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#storage"},"#"),a(" Storage")],-1),gs=s("p",null,"The storage is used to load and save token information.",-1),fs=s("h3",{id:"custom-implementation-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-implementation-2"},"#"),a(" Custom Implementation")],-1),ys=s("p",null,[a("It is possible to provide a custom implementation by extending "),s("code",null,"BaseStorage"),a(". While, this could be useful for advanced usage, it is not needed for most use-cases.")],-1),ws=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"BaseStorage"),a(", "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"SessionStorage"),a(),s("span",{class:"hljs-keyword"},"extends"),a(),s("span",{class:"hljs-title class_ inherited__"},"BaseStorage"),a(` {
	`),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-params"},"key"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(" sessionStorage."),s("span",{class:"hljs-title function_"},"getItem"),a(`(key);
	}
	`),s("span",{class:"hljs-title function_"},"set"),a("("),s("span",{class:"hljs-params"},"key, value"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(" sessionStorage."),s("span",{class:"hljs-title function_"},"setItem"),a(`(key, value);
	}
	`),s("span",{class:"hljs-title function_"},"delete"),a("("),s("span",{class:"hljs-params"},"key"),a(`) {
		`),s("span",{class:"hljs-keyword"},"return"),a(" sessionStorage."),s("span",{class:"hljs-title function_"},"removeItem"),a(`(key);
	}
}

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://directus.example.com'"),a(`, {
	`),s("span",{class:"hljs-attr"},"storage"),a(": "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"SessionStorage"),a(`(),
});
`)])],-1),bs=s("h3",{id:"directus-implementation-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#directus-implementation-2"},"#"),a(" Directus Implementation")],-1),ks=s("p",null,[a("By default, Directus creates an instance of "),s("code",null,"Storage"),a(" which handles store information automatically. Check "),s("a",{href:"#options.storage"},[s("code",null,"options.storage")]),a(" to see the available settings.")],-1),vs=s("p",null,[a("SDK uses "),s("code",null,"localStorage"),a(" on browsers and the memory itself on Node.js to save tokens. This behavior can be configured in "),s("a",{href:"#options.storage.mode"},[s("code",null,"options.storage.mode")]),a(". The "),s("code",null,"LocalStorage"),a(" is only available on browsers and the "),s("code",null,"MemoryStorage"),a(" is not persistent, i.e., once you leave the tab or quit the process, you will need to authenticate again.")],-1),xs=s("p",null,[a("If you want to use multiple instances of the SDK you should set a different "),s("a",{href:"#options.storage.prefix"},[s("code",null,"prefix")]),a(" for each one.")],-1),Ss=s("h2",{id:"items",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#items"},"#"),a(" Items")],-1),Ds=s("p",null,[a("You can get an instance of the item handler by providing the collection (and type, in the case of TypeScript) to the "),s("code",null,"items"),a(" function. The following examples will use the "),s("code",null,"Article"),a(" type.")],-1),Ts=s("blockquote",null,[s("p",null,"JavaScript")],-1),Is=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-comment"},"// import { Directus, ID } from '@directus/sdk';"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`);

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://directus.example.com'"),a(`);

`),s("span",{class:"hljs-keyword"},"const"),a(" articles = directus."),s("span",{class:"hljs-title function_"},"items"),a("("),s("span",{class:"hljs-string"},"'articles'"),a(`);
`)])],-1),As=s("blockquote",null,[s("p",null,"TypeScript")],-1),Rs=s("pre",null,[s("code",{class:"language-ts"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(", "),s("span",{class:"hljs-variable constant_"},"ID"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@directus/sdk'"),a(`;

`),s("span",{class:"hljs-comment"},"// Map your collection structure based on its fields."),a(`
`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"Article"),a(` = {
	`),s("span",{class:"hljs-attr"},"id"),a(": "),s("span",{class:"hljs-variable constant_"},"ID"),a(`;
	`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-built_in"},"string"),a(`;
	`),s("span",{class:"hljs-attr"},"body"),a(": "),s("span",{class:"hljs-built_in"},"string"),a(`;
	`),s("span",{class:"hljs-attr"},"published"),a(": "),s("span",{class:"hljs-built_in"},"boolean"),a(`;
};

`),s("span",{class:"hljs-comment"},"// Map your collections to its respective types. The SDK will"),a(`
`),s("span",{class:"hljs-comment"},"// infer its types based on usage later."),a(`
`),s("span",{class:"hljs-keyword"},"type"),a(),s("span",{class:"hljs-title class_"},"MyBlog"),a(` = {
	`),s("span",{class:"hljs-comment"},"// [collection_name]: typescript_type"),a(`
	`),s("span",{class:"hljs-attr"},"articles"),a(": "),s("span",{class:"hljs-title class_"},"Article"),a(`;

	`),s("span",{class:"hljs-comment"},"// You can also extend Directus collection. The naming has"),a(`
	`),s("span",{class:"hljs-comment"},"// to match a Directus system collection and it will be merged"),a(`
	`),s("span",{class:"hljs-comment"},"// into the system spec."),a(`
	`),s("span",{class:"hljs-attr"},"directus_users"),a(`: {
		`),s("span",{class:"hljs-attr"},"bio"),a(": "),s("span",{class:"hljs-built_in"},"string"),a(`;
	};
};

`),s("span",{class:"hljs-comment"},"// Let the SDK know about your collection types."),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("<"),s("span",{class:"hljs-title class_"},"MyBlog"),a(">("),s("span",{class:"hljs-string"},"'https://directus.myblog.com'"),a(`);

`),s("span",{class:"hljs-comment"},'// typeof(article) is a partial "Article"'),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" article = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-title function_"},"items"),a("("),s("span",{class:"hljs-string"},"'articles'"),a(")."),s("span",{class:"hljs-title function_"},"readOne"),a("("),s("span",{class:"hljs-number"},"10"),a(`);

`),s("span",{class:"hljs-comment"},'// Error TS2322: "hello" is not assignable to type "boolean".'),a(`
`),s("span",{class:"hljs-comment"},"// post.published = 'hello';"),a(`
`)])],-1),qs=s("h3",{id:"create-single-item",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-single-item"},"#"),a(" Create Single Item")],-1),Bs=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"createOne"),a(`({
	`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'My New Article'"),a(`,
});
`)])],-1),Ms=s("h3",{id:"create-multiple-items",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-multiple-items"},"#"),a(" Create Multiple Items")],-1),Os=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"createMany"),a(`([
	{
		`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'My First Article'"),a(`,
	},
	{
		`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'My Second Article'"),a(`,
	},
]);
`)])],-1),Cs=s("h3",{id:"read-by-query",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#read-by-query"},"#"),a(" Read By Query")],-1),Ps=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readByQuery"),a(`({
	`),s("span",{class:"hljs-attr"},"search"),a(": "),s("span",{class:"hljs-string"},"'Directus'"),a(`,
	`),s("span",{class:"hljs-attr"},"filter"),a(`: {
		`),s("span",{class:"hljs-attr"},"date_published"),a(`: {
			`),s("span",{class:"hljs-attr"},"_gte"),a(": "),s("span",{class:"hljs-string"},"'$NOW'"),a(`,
		},
	},
});
`)])],-1),Es=s("h3",{id:"read-all",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#read-all"},"#"),a(" Read All")],-1),Ns=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readByQuery"),a(`({
	`),s("span",{class:"hljs-comment"},"// By default API limits results to 100."),a(`
	`),s("span",{class:"hljs-comment"},"// With -1, it will return all results, but it may lead to performance degradation"),a(`
	`),s("span",{class:"hljs-comment"},"// for large result sets."),a(`
	`),s("span",{class:"hljs-attr"},"limit"),a(": -"),s("span",{class:"hljs-number"},"1"),a(`,
});
`)])],-1),Us=s("h3",{id:"read-single-item",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#read-single-item"},"#"),a(" Read Single Item")],-1),Ks=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readOne"),a("("),s("span",{class:"hljs-number"},"15"),a(`);
`)])],-1),Fs=s("p",null,"Supports optional query:",-1),Ls=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readOne"),a("("),s("span",{class:"hljs-number"},"15"),a(`, {
	`),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'title'"),a(`],
});
`)])],-1),Js=s("h3",{id:"read-multiple-items",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#read-multiple-items"},"#"),a(" Read Multiple Items")],-1),Ws=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readMany"),a("(["),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"16"),a(", "),s("span",{class:"hljs-number"},"17"),a(`]);
`)])],-1),Hs=s("p",null,"Supports optional query:",-1),Vs=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"readMany"),a("(["),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"16"),a(", "),s("span",{class:"hljs-number"},"17"),a(`], {
	`),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'title'"),a(`],
});
`)])],-1),zs=s("h3",{id:"update-single-item",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-single-item"},"#"),a(" Update Single Item")],-1),Gs=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"updateOne"),a("("),s("span",{class:"hljs-number"},"15"),a(`, {
	`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'This articles now has a different title'"),a(`,
});
`)])],-1),Ys=s("p",null,"Supports optional query:",-1),Qs=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"updateOne"),a(`(
	`),s("span",{class:"hljs-number"},"42"),a(`,
	{
		`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'This articles now has a similar title'"),a(`,
	},
	{
		`),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'title'"),a(`],
	}
);
`)])],-1),$s=s("h3",{id:"update-multiple-items",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-multiple-items"},"#"),a(" Update Multiple Items")],-1),Xs=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"updateMany"),a("(["),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"42"),a(`], {
	`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'Both articles now have the same title'"),a(`,
});
`)])],-1),Zs=s("p",null,"Supports optional query:",-1),sa=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"updateMany"),a(`(
	[`),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"42"),a(`],
	{
		`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'Both articles now have the same title'"),a(`,
	},
	{
		`),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'title'"),a(`],
	}
);
`)])],-1),aa=s("h3",{id:"delete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#delete"},"#"),a(" Delete")],-1),ta=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-comment"},"// One"),a(`
`),s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"deleteOne"),a("("),s("span",{class:"hljs-number"},"15"),a(`);

`),s("span",{class:"hljs-comment"},"// Multiple"),a(`
`),s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"deleteMany"),a("(["),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"42"),a(`]);
`)])],-1),ea=s("h3",{id:"request-parameter-overrides",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-parameter-overrides"},"#"),a(" Request Parameter Overrides")],-1),na=s("p",null,[a("To override any of the axios request parameters, provide an additional parameter with a "),s("code",null,"requestOptions"),a(" object:")],-1),la=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" articles."),s("span",{class:"hljs-title function_"},"createOne"),a(`(
	{ `),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'example'"),a(` },
	{ `),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'id'"),a(`] },
	{
		`),s("span",{class:"hljs-attr"},"requestOptions"),a(`: {
			`),s("span",{class:"hljs-attr"},"headers"),a(`: {
				`),s("span",{class:"hljs-string"},"'X-My-Custom-Header'"),a(": "),s("span",{class:"hljs-string"},"'example'"),a(`,
			},
		},
	}
);
`)])],-1),oa=s("h2",{id:"activity",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#activity"},"#"),a(" Activity")],-1),ca=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"activity"),a(`;
`)])],-1),ia=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_activity")'),a(".")],-1),ra=s("h2",{id:"comments",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#comments"},"#"),a(" Comments")],-1),ha=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"comments"),a(`;
`)])],-1),pa=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_comments")'),a(".")],-1),da=s("h2",{id:"collections",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#collections"},"#"),a(" Collections")],-1),ua=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"collections"),a(`;
`)])],-1),ja=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_collections")'),a(".")],-1),_a=s("h2",{id:"fields",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#fields"},"#"),a(" Fields")],-1),ma=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"fields"),a(`;
`)])],-1),ga=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_fields")'),a(".")],-1),fa=s("h2",{id:"files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#files"},"#"),a(" Files")],-1),ya=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"files"),a(`;
`)])],-1),wa=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_files")'),a(".")],-1),ba=s("h3",{id:"uploading-a-file",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#uploading-a-file"},"#"),a(" Uploading a file")],-1),ka=s("p",null,[a("To upload a file you will need to send a "),s("code",null,"multipart/form-data"),a(" as body. On browser side you do so:")],-1),va=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-comment"},"/* index.js */"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'https://unpkg.com/@directus/sdk@latest/dist/sdk.esm.min.js'"),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://localhost:8055'"),a(`, {
	`),s("span",{class:"hljs-attr"},"auth"),a(`: {
		`),s("span",{class:"hljs-attr"},"staticToken"),a(": "),s("span",{class:"hljs-string"},"'STATIC_TOKEN'"),a(", "),s("span",{class:"hljs-comment"},"// If you want to use a static token, otherwise check below how you can use email and password."),a(`
	},
});

`),s("span",{class:"hljs-comment"},"// await directus.auth.login({ email, password }) // If you want to use email and password. You should remove the staticToken above"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" form = "),s("span",{class:"hljs-variable language_"},"document"),a("."),s("span",{class:"hljs-title function_"},"querySelector"),a("("),s("span",{class:"hljs-string"},"'#upload-file'"),a(`);

`),s("span",{class:"hljs-keyword"},"if"),a(" (form && form "),s("span",{class:"hljs-keyword"},"instanceof"),a(),s("span",{class:"hljs-title class_"},"HTMLFormElement"),a(`) {
	form.`),s("span",{class:"hljs-title function_"},"addEventListener"),a("("),s("span",{class:"hljs-string"},"'submit'"),a(", "),s("span",{class:"hljs-keyword"},"async"),a(` (event) => {
		event.`),s("span",{class:"hljs-title function_"},"preventDefault"),a(`();

		`),s("span",{class:"hljs-keyword"},"const"),a(" form = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"FormData"),a("(event."),s("span",{class:"hljs-property"},"target"),a(`);
		`),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"files"),a("."),s("span",{class:"hljs-title function_"},"createOne"),a(`(form);
	});
}
`)])],-1),xa=s("pre",null,[s("code",{class:"language-html"},[s("span",{class:"hljs-comment"},"<!-- index.html -->"),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"head"),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"head"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"body"),a(">")]),a(`
	`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"form"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"upload-file"'),a(">")]),a(`
		`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"input"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"text"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"title"'),a(" />")]),a(`
		`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"input"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"file"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"file"'),a(" />")]),a(`
    	`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"button"),a(">")]),a("Send"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"button"),a(">")]),a(`
	`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"form"),a(">")]),a(`
	`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"/index.js"'),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"module"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"body"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"html"),a(">")]),a(`
`)])],-1),Sa=s("h4",{id:"nodejs-usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nodejs-usage"},"#"),a(" NodeJS usage")],-1),Da=s("p",null,"When uploading a file from a NodeJS environment, you\u2019ll have to override the headers to ensure the correct boundary is set:",-1),Ta=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),a(" { "),s("span",{class:"hljs-title class_"},"Directus"),a(" } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'https://unpkg.com/@directus/sdk@latest/dist/sdk.esm.min.js'"),a(`;

`),s("span",{class:"hljs-keyword"},"const"),a(" directus = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"Directus"),a("("),s("span",{class:"hljs-string"},"'http://localhost:8055'"),a(`, {
	`),s("span",{class:"hljs-attr"},"auth"),a(`: {
		`),s("span",{class:"hljs-attr"},"staticToken"),a(": "),s("span",{class:"hljs-string"},"'STATIC_TOKEN'"),a(", "),s("span",{class:"hljs-comment"},"// If you want to use a static token, otherwise check below how you can use email and password."),a(`
	},
});

`),s("span",{class:"hljs-keyword"},"const"),a(" form = "),s("span",{class:"hljs-keyword"},"new"),a(),s("span",{class:"hljs-title class_"},"FormData"),a(`();
form.`),s("span",{class:"hljs-title function_"},"append"),a("("),s("span",{class:"hljs-string"},'"file"'),a(", fs."),s("span",{class:"hljs-title function_"},"createReadStream"),a("("),s("span",{class:"hljs-string"},'"./to_upload.jpeg"'),a(`));

`),s("span",{class:"hljs-keyword"},"const"),a(" fileId = "),s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"files"),a("."),s("span",{class:"hljs-title function_"},"createOne"),a(`(form, {}, {
  `),s("span",{class:"hljs-attr"},"requestOptions"),a(`: {
    `),s("span",{class:"hljs-attr"},"headers"),a(`: {
      ...form.`),s("span",{class:"hljs-title function_"},"getHeaders"),a(`()
    }
  }
);
`)])],-1),Ia=s("h3",{id:"importing-a-file",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#importing-a-file"},"#"),a(" Importing a file")],-1),Aa=a("Example of "),Ra=a("importing a file from a URL"),qa=a(":"),Ba=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"files"),a("."),s("span",{class:"hljs-title function_"},"import"),a(`({
	`),s("span",{class:"hljs-attr"},"url"),a(": "),s("span",{class:"hljs-string"},"'http://www.example.com/example-image.jpg'"),a(`,
});
`)])],-1),Ma=s("p",null,"Example of importing file with custom data:",-1),Oa=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"files"),a("."),s("span",{class:"hljs-title function_"},"import"),a(`({
	`),s("span",{class:"hljs-attr"},"url"),a(": "),s("span",{class:"hljs-string"},"'http://www.example.com/example-image.jpg'"),a(`,
	`),s("span",{class:"hljs-attr"},"data"),a(`: {
		`),s("span",{class:"hljs-attr"},"title"),a(": "),s("span",{class:"hljs-string"},"'My Custom File'"),a(`,
	},
});
`)])],-1),Ca=s("h2",{id:"folders",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#folders"},"#"),a(" Folders")],-1),Pa=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"folders"),a(`;
`)])],-1),Ea=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_folders")'),a(".")],-1),Na=s("h2",{id:"permissions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#permissions"},"#"),a(" Permissions")],-1),Ua=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"permissions"),a(`;
`)])],-1),Ka=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_permissions")'),a(".")],-1),Fa=s("h2",{id:"presets",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#presets"},"#"),a(" Presets")],-1),La=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"presets"),a(`;
`)])],-1),Ja=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_presets")'),a(".")],-1),Wa=s("h2",{id:"relations",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#relations"},"#"),a(" Relations")],-1),Ha=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"relations"),a(`;
`)])],-1),Va=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_relations")'),a(".")],-1),za=s("h2",{id:"revisions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#revisions"},"#"),a(" Revisions")],-1),Ga=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"revisions"),a(`;
`)])],-1),Ya=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_revisions")'),a(".")],-1),Qa=s("h2",{id:"roles",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#roles"},"#"),a(" Roles")],-1),$a=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"roles"),a(`;
`)])],-1),Xa=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_roles")'),a(".")],-1),Za=s("h2",{id:"settings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#settings"},"#"),a(" Settings")],-1),st=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"settings"),a(`;
`)])],-1),at=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_settings")'),a(".")],-1),tt=s("h2",{id:"server",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server"},"#"),a(" Server")],-1),et=s("h3",{id:"ping-the-server",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ping-the-server"},"#"),a(" Ping the Server")],-1),nt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"server"),a("."),s("span",{class:"hljs-title function_"},"ping"),a(`();
`)])],-1),lt=s("h3",{id:"get-server%2Fproject-info",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-server%2Fproject-info"},"#"),a(" Get Server/Project Info")],-1),ot=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"server"),a("."),s("span",{class:"hljs-title function_"},"info"),a(`();
`)])],-1),ct=s("h2",{id:"users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#users"},"#"),a(" Users")],-1),it=s("pre",null,[s("code",{class:"language-js"},[a("directus."),s("span",{class:"hljs-property"},"users"),a(`;
`)])],-1),rt=s("p",null,[a("Same methods as "),s("code",null,'directus.items("directus_users")'),a(", and:")],-1),ht=s("h3",{id:"invite-a-new-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#invite-a-new-user"},"#"),a(" Invite a New User")],-1),pt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"invites"),a("."),s("span",{class:"hljs-title function_"},"send"),a("("),s("span",{class:"hljs-string"},"'admin@example.com'"),a(", "),s("span",{class:"hljs-string"},"'fe38136e-52f7-4622-8498-112b8a32a1e2'"),a(`);
`)])],-1),dt=s("p",null,"The second parameter is the role of the user",-1),ut=s("h3",{id:"accept-a-user-invite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accept-a-user-invite"},"#"),a(" Accept a User Invite")],-1),jt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"invites"),a("."),s("span",{class:"hljs-title function_"},"accept"),a("("),s("span",{class:"hljs-string"},"'<accept-token>'"),a(", "),s("span",{class:"hljs-string"},"'n3w-p455w0rd'"),a(`);
`)])],-1),_t=s("p",null,"The provided token is sent to the user\u2019s email",-1),mt=s("h3",{id:"enable-two-factor-authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#enable-two-factor-authentication"},"#"),a(" Enable Two-Factor Authentication")],-1),gt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"tfa"),a("."),s("span",{class:"hljs-title function_"},"enable"),a("("),s("span",{class:"hljs-string"},"'my-password'"),a(`);
`)])],-1),ft=s("h3",{id:"disable-two-factor-authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#disable-two-factor-authentication"},"#"),a(" Disable Two-Factor Authentication")],-1),yt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"tfa"),a("."),s("span",{class:"hljs-title function_"},"disable"),a("("),s("span",{class:"hljs-string"},"'691402'"),a(`);
`)])],-1),wt=s("h3",{id:"get-the-current-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-the-current-user"},"#"),a(" Get the Current User")],-1),bt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"me"),a("."),s("span",{class:"hljs-title function_"},"read"),a(`();
`)])],-1),kt=s("p",null,"Supports optional query:",-1),vt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"me"),a("."),s("span",{class:"hljs-title function_"},"read"),a(`({
	`),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'last_access'"),a(`],
});
`)])],-1),xt=s("h3",{id:"update-the-current-users",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-the-current-users"},"#"),a(" Update the Current Users")],-1),St=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"me"),a("."),s("span",{class:"hljs-title function_"},"update"),a("({ "),s("span",{class:"hljs-attr"},"first_name"),a(": "),s("span",{class:"hljs-string"},"'Admin'"),a(` });
`)])],-1),Dt=s("p",null,"Supports optional query:",-1),Tt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"users"),a("."),s("span",{class:"hljs-property"},"me"),a("."),s("span",{class:"hljs-title function_"},"update"),a("({ "),s("span",{class:"hljs-attr"},"first_name"),a(": "),s("span",{class:"hljs-string"},"'Admin'"),a(" }, { "),s("span",{class:"hljs-attr"},"fields"),a(": ["),s("span",{class:"hljs-string"},"'last_access'"),a(`] });
`)])],-1),It=s("h2",{id:"utils",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#utils"},"#"),a(" Utils")],-1),At=s("h3",{id:"get-a-random-string",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#get-a-random-string"},"#"),a(" Get a Random String")],-1),Rt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-property"},"random"),a("."),s("span",{class:"hljs-title function_"},"string"),a(`();
`)])],-1),qt=s("p",null,[a("Supports an optional "),s("code",null,"length"),a(" (defaults to 32):")],-1),Bt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-property"},"random"),a("."),s("span",{class:"hljs-title function_"},"string"),a("("),s("span",{class:"hljs-number"},"50"),a(`);
`)])],-1),Mt=s("h3",{id:"generate-a-hash-for-a-given-value",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#generate-a-hash-for-a-given-value"},"#"),a(" Generate a Hash for a Given Value")],-1),Ot=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-property"},"hash"),a("."),s("span",{class:"hljs-title function_"},"generate"),a("("),s("span",{class:"hljs-string"},"'My String'"),a(`);
`)])],-1),Ct=s("h3",{id:"verify-if-a-hash-is-valid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#verify-if-a-hash-is-valid"},"#"),a(" Verify if a Hash is Valid")],-1),Pt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-property"},"hash"),a("."),s("span",{class:"hljs-title function_"},"verify"),a("("),s("span",{class:"hljs-string"},"'My String'"),a(", "),s("span",{class:"hljs-string"},"'$argon2i$v=19$m=4096,t=3,p=1$A5uogJh'"),a(`);
`)])],-1),Et=s("h3",{id:"sort-items-in-a-collection",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sort-items-in-a-collection"},"#"),a(" Sort Items in a Collection")],-1),Nt=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-title function_"},"sort"),a("("),s("span",{class:"hljs-string"},"'articles'"),a(", "),s("span",{class:"hljs-number"},"15"),a(", "),s("span",{class:"hljs-number"},"42"),a(`);
`)])],-1),Ut=s("p",null,[a("This will move item "),s("code",null,"15"),a(" to the position of item "),s("code",null,"42"),a(", and move everything in between one \u201Cslot\u201D up.")],-1),Kt=s("h3",{id:"revert-to-a-previous-revision",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#revert-to-a-previous-revision"},"#"),a(" Revert to a Previous Revision")],-1),Ft=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"await"),a(" directus."),s("span",{class:"hljs-property"},"utils"),a("."),s("span",{class:"hljs-title function_"},"revert"),a("("),s("span",{class:"hljs-number"},"451"),a(`);
`)])],-1),Lt=s("p",null,"Note: The key passed is the primary key of the revision you\u2019d like to apply.",-1),Jt=s("hr",null,null,-1),Gt="JavaScript SDK",Yt=!1,Qt="The JS SDK provides an intuitive interface for the Directus API from within a JavaScript-powered project (browsers and Node.js). The default implementation uses [Axios](https://npmjs.com/axios) for transport and `localStorage` for storing state.",$t="14 min read",Xt={name:"sdk",setup(Wt,{expose:c}){const e={title:"JavaScript SDK",modularExtension:!1,description:"The JS SDK provides an intuitive interface for the Directus API from within a JavaScript-powered project (browsers and Node.js). The default implementation uses [Axios](https://npmjs.com/axios) for transport and `localStorage` for storing state.",readTime:"14 min read"};return c({frontmatter:e}),(Ht,Vt)=>{const n=l("router-link"),i=l("docs-wrapper");return r(),h(i,{frontmatter:e},{default:t(()=>[s("div",p,[d,u,j,_,m,g,f,y,w,b,k,v,x,S,D,T,I,A,R,q,B,M,O,C,P,E,N,U,K,F,L,J,W,H,V,s("div",z,[G,s("p",null,[Y,o(n,{to:"/docs/self-hosted/config-options#security"},{default:t(()=>[Q]),_:1}),$])]),X,Z,ss,as,ts,es,ns,ls,os,cs,is,rs,hs,ps,ds,us,js,_s,ms,gs,fs,ys,ws,bs,ks,vs,xs,Ss,Ds,Ts,Is,As,Rs,qs,Bs,Ms,Os,Cs,Ps,Es,Ns,Us,Ks,Fs,Ls,Js,Ws,Hs,Vs,zs,Gs,Ys,Qs,$s,Xs,Zs,sa,aa,ta,ea,na,la,oa,ca,ia,ra,ha,pa,da,ua,ja,_a,ma,ga,fa,ya,wa,ba,ka,va,xa,Sa,Da,Ta,Ia,s("p",null,[Aa,o(n,{to:"/docs/reference/files#import-a-file"},{default:t(()=>[Ra]),_:1}),qa]),Ba,Ma,Oa,Ca,Pa,Ea,Na,Ua,Ka,Fa,La,Ja,Wa,Ha,Va,za,Ga,Ya,Qa,$a,Xa,Za,st,at,tt,et,nt,lt,ot,ct,it,rt,ht,pt,dt,ut,jt,_t,mt,gt,ft,yt,wt,bt,kt,vt,xt,St,Dt,Tt,It,At,Rt,qt,Bt,Mt,Ot,Ct,Pt,Et,Nt,Ut,Kt,Ft,Lt,Jt])]),_:1})}}};export{Xt as default,Qt as description,Yt as modularExtension,$t as readTime,Gt as title};
