import{a as l,o as c,b as u,w as o,h as e,e as a,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},h=t("Custom Modules are completely open-ended components that allow you to create new experiences within the Directus platform. "),p=t("Learn more about Modules"),m=t("."),_=e("h2",{id:"extension-entrypoint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extension-entrypoint"},"#"),t(" Extension Entrypoint")],-1),f=e("p",null,[t("The entrypoint of your module is the "),e("code",null,"index"),t(" file inside the "),e("code",null,"src/"),t(" folder of your extension package. It exports a configuration object with options to configure the behavior of your module. When loading your module, this object is imported by the Directus host.")],-1),g=e("p",null,"Example of an entrypoint:",-1),y=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(),e("span",{class:"hljs-title class_"},"ModuleComponent"),t(),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'./module.vue'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-attr"},"id"),t(": "),e("span",{class:"hljs-string"},"'custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"name"),t(": "),e("span",{class:"hljs-string"},"'Custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"icon"),t(": "),e("span",{class:"hljs-string"},"'box'"),t(`,
	`),e("span",{class:"hljs-attr"},"routes"),t(`: [
		{
			`),e("span",{class:"hljs-attr"},"path"),t(": "),e("span",{class:"hljs-string"},"''"),t(`,
			`),e("span",{class:"hljs-attr"},"component"),t(": "),e("span",{class:"hljs-title class_"},"ModuleComponent"),t(`,
		},
	],
};
`)])],-1),b=e("h4",{id:"available-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-options"},"#"),t(" Available Options")],-1),w=e("li",null,[e("code",null,"id"),t(" \u2014 The unique key for this module. It is good practice to scope proprietary modules with an author prefix.")],-1),v=e("li",null,[e("code",null,"name"),t(" \u2014 The human-readable name for this module.")],-1),j=e("code",null,"icon",-1),x=t(" \u2014 An icon name from the "),k=t("material icon set"),A=t(", or the extended list of Directus custom icons."),T=e("li",null,[e("code",null,"color"),t(" \u2014 A color associated with the module.")],-1),C=e("li",null,[e("code",null,"routes"),t(" \u2014 Details the routes in your module. The routes are registered as nested routes with the module\u2019s "),e("code",null,"id"),t(" serving as the base path.")],-1),V=e("li",null,[e("code",null,"hidden"),t(" \u2014 A boolean that indicates if the module should be hidden from the module bar.")],-1),I=e("li",null,[e("code",null,"preRegisterCheck"),t(" \u2014 A function that receives the current user as the first parameter and the permissions of this user as the second parameter. It should return a boolean that indicates if the check succeeded.")],-1),M=e("h2",{id:"routes-array",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routes-array"},"#"),t(" Routes Array")],-1),S=e("p",null,[t("The "),e("code",null,"routes"),t(" array of a module works very similar to Vue Router\u2019s "),e("code",null,"routes"),t(" array. The only difference is that the module\u2019s routes are registered as child routes of the "),e("code",null,"/<module-id>"),t(" route.")],-1),D=e("p",null,[t("The "),e("code",null,"routes"),t(" array should contain one or more route objects with a "),e("code",null,"path"),t(" property. Because the routes are registered as child routes, the "),e("code",null,"path"),t(" property should be a relative path without a leading slash. As the button in the module bar corresponding to your module links to the "),e("code",null,"/<module-id>"),t(" route, the "),e("code",null,"routes"),t(" array should contain a "),e("em",null,"root"),t(" route with an empty path.")],-1),E=e("p",null,[t("If a route should render something, the route object should have a "),e("code",null,"component"),t(" property with a reference to a route component.")],-1),B=e("p",null,[t("To learn more about the properties of route objects, you can refer to the "),e("a",{href:"https://next.router.vuejs.org/guide",target:"_blank",rel:"noopener noreferrer"},"Vue Router Docs"),t(".")],-1),R=e("h2",{id:"route-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#route-component"},"#"),t(" Route Component")],-1),P=e("p",null,"A single module can have multiple route components registered under different routes. Whenever a certain route is visited, the corresponding route component is rendered, occupying the whole browser window. The route component has to be Vue component. The most straightforward way to write a Vue component is to use the Vue Single File Component syntax.",-1),q=e("p",null,"Example of a route component using the Vue SFC syntax:",-1),L=e("pre",null,[e("code",{class:"language-vue"},`<template>
	<private-view title="My Custom Module">Content goes here...</private-view>
</template>

<script>
export default {};
<\/script>
`)],-1),N=e("p",null,[t("A route component provides a blank canvas for creating anything you need. You can use the globally registered "),e("code",null,"private-view"),t(" component to get access to Directus\u2019 page structure consisting of the module bar, the navigation, the sidebar, the header and the main content area.")],-1),O=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"Enable the Module"),e("p",null,"Before a module appears in the module bar, it has to be enabled inside the project settings.")],-1),W=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"Vue Version"),e("p",null,"The Directus App uses Vue 3. There might be 3rd party libraries that aren\u2019t yet compatible with Vue 3.")],-1),F=e("h2",{id:"accessing-internal-systems",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessing-internal-systems"},"#"),t(" Accessing Internal Systems")],-1),G=e("p",null,[t("To access internal systems like the API or the stores, you can use the "),e("code",null,"useApi()"),t(" and "),e("code",null,"useStores()"),t(" composables exported by the "),e("code",null,"@directus/extensions-sdk"),t(" package. They can be used inside a "),e("code",null,"setup()"),t(" function like this:")],-1),H=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(" { useApi, useStores } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@directus/extensions-sdk'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
		`),e("span",{class:"hljs-keyword"},"const"),t(" api = "),e("span",{class:"hljs-title function_"},"useApi"),t(`();

		`),e("span",{class:"hljs-keyword"},"const"),t(" { useCollectionsStore } = "),e("span",{class:"hljs-title function_"},"useStores"),t(`();
		`),e("span",{class:"hljs-keyword"},"const"),t(" collectionsStore = "),e("span",{class:"hljs-title function_"},"useCollectionsStore"),t(`();

		`),e("span",{class:"hljs-comment"},"// ..."),t(`
	},
};
`)])],-1),Y=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Vue Options API"),e("p",null,[t("If you prefer to use the Vue Options API, you can inject the "),e("code",null,"api"),t(" and "),e("code",null,"stores"),t(" properties directly.")])],-1),z=e("h2",{id:"example%3A-accessing-the-api-from-within-your-extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example%3A-accessing-the-api-from-within-your-extension"},"#"),t(" Example: Accessing the API from within your extension")],-1),J=e("p",null,[t("The Directus App\u2019s Vue app instance provides a field called "),e("code",null,"api"),t(", which can be injected into Vue components using "),e("a",{href:"https://v3.vuejs.org/guide/component-provide-inject.html",target:"_blank",rel:"noopener noreferrer"},"Vue\u2019s inject framework"),t(". This "),e("code",null,"api"),t(" field contains a property called "),e("code",null,"api"),t(", which is an authenticated Axios instance. Here\u2019s an example of how to use it:")],-1),K=e("pre",null,[e("code",{class:"language-vue"},`<template>
	<private-view title="Example Collection List">
		<v-list>
			<v-list-item v-for="col in collections" v-bind:key="col.collection">
				{{ col.collection }}
			</v-list-item>
		</v-list>
		<v-button v-on:click="logToConsole">Log collections to console</v-button>
	</private-view>
</template>

<script>
export default {
	data() {
		return {
			collections: null,
		};
	},
	methods: {
		logToConsole: function () {
			console.log(this.collections);
		},
	},
	inject: ['api'],
	mounted() {
		// log the system field so you can see what attributes are available under it
		// remove this line when you're done.
		console.log(this.api);

		// Get a list of all available collections to use with this module
		this.api.get('/collections?limit=-1').then((res) => {
			this.collections = res.data.data;
		});
	},
};
<\/script>
`)],-1),Q=e("p",null,"In the above example, you can see that:",-1),U=e("ul",null,[e("li",null,[t("The "),e("code",null,"api"),t(" field gets injected into the component and becomes available as an attribute of the component (i.e., "),e("code",null,"this.api"),t(")")]),e("li",null,[t("When the component is mounted, it uses "),e("code",null,"this.api.get"),t(" to request a list of all available collections")]),e("li",null,"The names of the collections are rendered into a list in the component\u2019s template"),e("li",null,"a button is added with a method that logs all the data for the collections to the console")],-1),X=e("p",null,[t("This is just a basic example. A more efficient way to access and work with the list of collections would be to get an instance of the "),e("code",null,"collectionsStore"),t(" using the provided "),e("code",null,"stores"),t(" and accessing "),e("code",null,"stores.useCollectionsStore()"),t(", but that\u2019s beyond the scope of this guide.")],-1),oe="Custom Modules",se=!0,ne="A guide on how to build custom Modules in Directus.",le="5 min read",ae={name:"modules",setup(Z,{expose:i}){const s={title:"Custom Modules",modularExtension:!0,description:"A guide on how to build custom Modules in Directus.",readTime:"5 min read"};return i({frontmatter:s}),($,ee)=>{const n=l("router-link"),r=l("docs-wrapper");return c(),u(r,{frontmatter:s},{default:o(()=>[e("div",d,[e("blockquote",null,[e("p",null,[h,a(n,{to:"/docs/getting-started/glossary#modules"},{default:o(()=>[p]),_:1}),m])]),_,f,g,y,b,e("ul",null,[w,v,e("li",null,[j,x,a(n,{to:"/docs/getting-started/glossary#material-icons"},{default:o(()=>[k]),_:1}),A]),T,C,V,I]),M,S,D,E,B,R,P,q,L,N,O,W,F,G,H,Y,z,J,K,Q,U,X])]),_:1})}}};export{ae as default,ne as description,se as modularExtension,le as readTime,oe as title};
