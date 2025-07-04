import{a as l,o as r,b as u,w as s,h as e,e as a,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=t("Custom Layouts allow for building new ways to view or interact with Items via the Collection Detail pages. "),h=t("Learn more about Layouts"),m=t("."),y=e("h2",{id:"extension-entrypoint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extension-entrypoint"},"#"),t(" Extension Entrypoint")],-1),_=e("p",null,[t("The entrypoint of your layout is the "),e("code",null,"index"),t(" file inside the "),e("code",null,"src/"),t(" folder of your extension package. It exports a configuration object with options to configure the behavior of your layout. When loading your layout, this object is imported by the Directus host.")],-1),f=e("p",null,"Example of an entrypoint:",-1),b=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`;
`),e("span",{class:"hljs-keyword"},"import"),t(),e("span",{class:"hljs-title class_"},"LayoutComponent"),t(),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'./layout.vue'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-attr"},"id"),t(": "),e("span",{class:"hljs-string"},"'custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"name"),t(": "),e("span",{class:"hljs-string"},"'Custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"icon"),t(": "),e("span",{class:"hljs-string"},"'box'"),t(`,
	`),e("span",{class:"hljs-attr"},"component"),t(": "),e("span",{class:"hljs-title class_"},"LayoutComponent"),t(`,
	`),e("span",{class:"hljs-attr"},"slots"),t(`: {
		`),e("span",{class:"hljs-attr"},"options"),t(": "),e("span",{class:"hljs-function"},"() =>"),t(),e("span",{class:"hljs-literal"},"null"),t(`,
		`),e("span",{class:"hljs-attr"},"sidebar"),t(": "),e("span",{class:"hljs-function"},"() =>"),t(),e("span",{class:"hljs-literal"},"null"),t(`,
		`),e("span",{class:"hljs-attr"},"actions"),t(": "),e("span",{class:"hljs-function"},"() =>"),t(),e("span",{class:"hljs-literal"},"null"),t(`,
	},
	`),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
		`),e("span",{class:"hljs-keyword"},"const"),t(" name = "),e("span",{class:"hljs-title function_"},"ref"),t("("),e("span",{class:"hljs-string"},"'Custom Layout'"),t(`);

		`),e("span",{class:"hljs-keyword"},"return"),t(` { name };
	},
};
`)])],-1),j=e("h4",{id:"available-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-options"},"#"),t(" Available Options")],-1),g=e("li",null,[e("code",null,"id"),t(" \u2014 The unique key for this layout. It is good practice to scope proprietary layouts with an author prefix.")],-1),w=e("li",null,[e("code",null,"name"),t(" \u2014 The human-readable name for this layout.")],-1),v=e("code",null,"icon",-1),x=t(" \u2014 An icon name from the "),k=t("material icon set"),A=t(", or the extended list of Directus custom icons."),T=e("li",null,[e("code",null,"component"),t(" \u2014 A reference to your layout component.")],-1),C=e("li",null,[e("code",null,"slots"),t(" \u2014 Additional components to be added by your layout. "),e("ul",null,[e("li",null,[e("code",null,"options"),t(" \u2014 A reference to an options component.")]),e("li",null,[e("code",null,"sidebar"),t(" \u2014 A reference to a sidebar component.")]),e("li",null,[e("code",null,"actions"),t(" \u2014 A reference to an actions component.")])])],-1),I=e("li",null,[e("code",null,"setup"),t(" \u2014 A function to setup reactive state to be shared by the layout component and the other components. It receives a "),e("code",null,"props"),t(" object as the first parameter and a "),e("code",null,"context"),t(" object containing an "),e("code",null,"emit()"),t(" function as the second parameter.")],-1),S=e("h2",{id:"layout-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#layout-component"},"#"),t(" Layout Component")],-1),V=e("p",null,"The layout component is the part of your extension that will be rendered by the Directus App whenever your layout should be used to show the items of a collection. This layout component has to be Vue component. The most straightforward way to write a Vue component is to use the Vue Single File Component syntax.",-1),L=e("p",null,"Example of a layout component using the Vue SFC syntax:",-1),D=e("pre",null,[e("code",{class:"language-vue"},`<template>
	<div>
		<p>Name: {{ name }}</p>
		<p>Collection: {{ collection }}</p>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		collection: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
};
<\/script>
`)],-1),E=e("p",null,[t("In addition to some predefined props, the component receives the state defined inside the "),e("code",null,"setup()"),t(" function as individual props. Besides some predefined emits, the component also provides emits for every property returned by the "),e("code",null,"setup()"),t(" function. Those emits are prefixed by "),e("code",null,"update:"),t(".")],-1),q=e("p",null,"These props and emits are available in all components associated with your layout.",-1),P=e("h4",{id:"available-props",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-props"},"#"),t(" Available Props")],-1),O=e("ul",null,[e("li",null,[e("code",null,"collection"),t(" \u2014 The current collection\u2019s name.")]),e("li",null,[e("code",null,"selection"),t(" \u2014 Any currently selected items.")]),e("li",null,[e("code",null,"layoutOptions"),t(" \u2014 The user\u2019s currently saved layout options.")]),e("li",null,[e("code",null,"layoutQuery"),t(" \u2014 The user\u2019s layout query parameters. (e.g., sort, limit, etc)")]),e("li",null,[e("code",null,"filter"),t(" \u2014 The combined active filter.")]),e("li",null,[e("code",null,"filterUser"),t(" \u2014 The user\u2019s currently active filter.")]),e("li",null,[e("code",null,"filterSystem"),t(" \u2014 The system\u2019s currently active filter.")]),e("li",null,[e("code",null,"search"),t(" \u2014 The user\u2019s current search query.")]),e("li",null,[e("code",null,"selectMode"),t(" \u2014 A boolean that indicates if the layout should be in select mode.")]),e("li",null,[e("code",null,"readonly"),t(" \u2014 A boolean that indicates if the layout should be in readonly mode.")]),e("li",null,[e("code",null,"resetPreset"),t(" \u2014 A function to reset the preset.")])],-1),B=e("h4",{id:"available-emits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-emits"},"#"),t(" Available Emits")],-1),N=e("ul",null,[e("li",null,[e("code",null,"update:selection"),t(" \u2014 Update the currently selected items.")]),e("li",null,[e("code",null,"update:layoutOptions"),t(" \u2014 Update the user\u2019s currently saved layout options.")]),e("li",null,[e("code",null,"update:layoutQuery"),t(" \u2014 Update the user\u2019s layout query parameters.")])],-1),U=e("p",null,"Other than this simple API to communicate with the Directus App and the system to share state between components, the layout component is a blank canvas, allowing you to create anything you need.",-1),F=e("p",null,[t("The "),e("code",null,"@directus/extensions-sdk"),t(" package provides some useful composables to help with creating layouts:")],-1),Q=e("ul",null,[e("li",null,[e("code",null,"useSync()"),t(" \u2014 This function can be used to synchronize a writable ref with a prop and a corresponding emit.")]),e("li",null,[e("code",null,"useCollection()"),t(" \u2014 This function can be used to receive information about a collection.")]),e("li",null,[e("code",null,"useItems()"),t(" \u2014 This function can be used to fetch items from the API.")])],-1),z=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"Vue Version"),e("p",null,"The Directus App uses Vue 3. There might be 3rd party libraries that aren\u2019t yet compatible with Vue 3.")],-1),M=e("h2",{id:"accessing-internal-systems",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessing-internal-systems"},"#"),t(" Accessing Internal Systems")],-1),W=e("p",null,[t("To access internal systems like the API or the stores, you can use the "),e("code",null,"useApi()"),t(" and "),e("code",null,"useStores()"),t(" composables exported by the "),e("code",null,"@directus/extensions-sdk"),t(" package. They can be used inside a "),e("code",null,"setup()"),t(" function like this:")],-1),G=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(" { useApi, useStores } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@directus/extensions-sdk'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
		`),e("span",{class:"hljs-keyword"},"const"),t(" api = "),e("span",{class:"hljs-title function_"},"useApi"),t(`();

		`),e("span",{class:"hljs-keyword"},"const"),t(" { useCollectionsStore } = "),e("span",{class:"hljs-title function_"},"useStores"),t(`();
		`),e("span",{class:"hljs-keyword"},"const"),t(" collectionsStore = "),e("span",{class:"hljs-title function_"},"useCollectionsStore"),t(`();

		`),e("span",{class:"hljs-comment"},"// ..."),t(`
	},
};
`)])],-1),H=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Vue Options API"),e("p",null,[t("If you prefer to use the Vue Options API, you can inject the "),e("code",null,"api"),t(" and "),e("code",null,"stores"),t(" properties directly.")])],-1),Y="Custom Layouts",Z=!0,$="A guide on how to build custom Layouts in Directus.",ee="4 min read",te={name:"layouts",setup(J,{expose:i}){const n={title:"Custom Layouts",modularExtension:!0,description:"A guide on how to build custom Layouts in Directus.",readTime:"4 min read"};return i({frontmatter:n}),(K,R)=>{const o=l("router-link"),c=l("docs-wrapper");return r(),u(c,{frontmatter:n},{default:s(()=>[e("div",d,[e("blockquote",null,[e("p",null,[p,a(o,{to:"/docs/getting-started/glossary#layouts"},{default:s(()=>[h]),_:1}),m])]),y,_,f,b,j,e("ul",null,[g,w,e("li",null,[v,x,a(o,{to:"/docs/getting-started/glossary#material-icons"},{default:s(()=>[k]),_:1}),A]),T,C,I]),S,V,L,D,E,q,P,O,B,N,U,F,Q,z,M,W,G,H])]),_:1})}}};export{te as default,$ as description,Z as modularExtension,ee as readTime,Y as title};
