import{a,o as r,b as d,w as t,h as s,e as o,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const p={class:"markdown-body"},h=e("Displays are small inline components that allow you to create new ways of viewing field values throughout the App. "),u=e("Learn more about Displays"),y=e("."),_=s("h2",{id:"extension-entrypoint",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#extension-entrypoint"},"#"),e(" Extension Entrypoint")],-1),f=s("p",null,[e("The entrypoint of your display is the "),s("code",null,"index"),e(" file inside the "),s("code",null,"src/"),e(" folder of your extension package. It exports a configuration object with options to configure the behavior of your display. When loading your display, this object is imported by the Directus host.")],-1),m=s("p",null,"Example of an entrypoint:",-1),j=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),e(),s("span",{class:"hljs-title class_"},"DisplayComponent"),e(),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'./display.vue'"),e(`;

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
	`),s("span",{class:"hljs-attr"},"id"),e(": "),s("span",{class:"hljs-string"},"'custom'"),e(`,
	`),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'Custom'"),e(`,
	`),s("span",{class:"hljs-attr"},"icon"),e(": "),s("span",{class:"hljs-string"},"'box'"),e(`,
	`),s("span",{class:"hljs-attr"},"description"),e(": "),s("span",{class:"hljs-string"},"'This is my custom display!'"),e(`,
	`),s("span",{class:"hljs-attr"},"component"),e(": "),s("span",{class:"hljs-title class_"},"DisplayComponent"),e(`,
	`),s("span",{class:"hljs-attr"},"options"),e(": "),s("span",{class:"hljs-literal"},"null"),e(`,
	`),s("span",{class:"hljs-attr"},"types"),e(": ["),s("span",{class:"hljs-string"},"'string'"),e(`],
};
`)])],-1),g=s("h4",{id:"available-options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#available-options"},"#"),e(" Available Options")],-1),w=s("li",null,[s("code",null,"id"),e(" \u2014 The unique key for this display. It is good practice to scope proprietary displays with an author prefix.")],-1),b=s("li",null,[s("code",null,"name"),e(" \u2014 The human-readable name for this display.")],-1),x=s("code",null,"icon",-1),v=e(" \u2014 An icon name from the "),k=e("material icon set"),A=e(", or the extended list of Directus custom icons."),T=s("li",null,[s("code",null,"description"),e(" \u2014 A short description (<80 characters) of this display shown in the App.")],-1),C=s("li",null,[s("code",null,"component"),e(" \u2014 A reference to your display component.")],-1),D=s("li",null,[s("code",null,"options"),e(" \u2014 The options of your display. Can be either an options object or a dedicated Vue component.")],-1),V=s("code",null,"types",-1),I=e(" \u2014 An array of supported "),S=e("types"),E=e("."),O=s("li",null,[s("code",null,"groups"),e(" \u2014 An array of field-groups. Accepts "),s("code",null,"standard"),e(", "),s("code",null,"file"),e(", "),s("code",null,"files"),e(", "),s("code",null,"M2O"),e(", "),s("code",null,"O2M"),e(", "),s("code",null,"M2A"),e(", "),s("code",null,"translations"),e(". Defaults to "),s("code",null,"standard"),e(".")],-1),P=s("li",null,[s("code",null,"fields"),e(" \u2014 If this option is set, the display will fetch relational fields. Can either be an array of fields or a function that returns an array of fields.")],-1),F=s("h2",{id:"display-component",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#display-component"},"#"),e(" Display Component")],-1),q=s("p",null,"The display component is the part of your extension that will be rendered by the Directus App whenever your display should be used to show the value of a field. This display component has to be Vue component. The most straightforward way to write a Vue component is to use the Vue Single File Component syntax.",-1),B=s("p",null,"Example of a display component using the Vue SFC syntax:",-1),M=s("pre",null,[s("code",{class:"language-vue"},`<template>
	<div>Value: {{ value }}</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
	},
};
<\/script>
`)],-1),N=s("p",null,[e("The current value of the field is provided to the component via the "),s("code",null,"value"),e(" prop. If you use the "),s("code",null,"fields"),e(" option to fetch relational fields, the "),s("code",null,"value"),e(" prop will be an object with the requested fields as keys and their respective values.")],-1),L=s("h4",{id:"available-props",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#available-props"},"#"),e(" Available Props")],-1),W=s("ul",null,[s("li",null,[s("code",null,"value"),e(" \u2014 The value of the field.")]),s("li",null,[s("code",null,"interface"),e(" - The interface of the field.")]),s("li",null,[s("code",null,"interfaceOptions"),e(" - The options for the field\u2019s interface.")]),s("li",null,[s("code",null,"type"),e(" \u2014 The type of the field.")]),s("li",null,[s("code",null,"collection"),e(" \u2014 The collection name of the field.")]),s("li",null,[s("code",null,"field"),e(" \u2014 The key of the field.")])],-1),z=s("p",null,"Other than this simple API to communicate with the Directus App, the display component is a blank canvas, allowing you to create anything you need.",-1),G=s("div",{class:"warning hint"},[s("div",{class:"hint-title"},"Vue Version"),s("p",null,"The Directus App uses Vue 3. There might be 3rd party libraries that aren\u2019t yet compatible with Vue 3.")],-1),H=s("h3",{id:"functional-component",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#functional-component"},"#"),e(" Functional Component")],-1),J=s("p",null,"Instead of defining the component inside a Vue SFC file, you can use a functional component. This allows you to make simple displays that don\u2019t need a full component rendered:",-1),K=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
	`),s("span",{class:"hljs-attr"},"id"),e(": "),s("span",{class:"hljs-string"},"'custom'"),e(`,
	`),s("span",{class:"hljs-attr"},"name"),e(": "),s("span",{class:"hljs-string"},"'Custom'"),e(`,
	`),s("span",{class:"hljs-attr"},"icon"),e(": "),s("span",{class:"hljs-string"},"'box'"),e(`,
	`),s("span",{class:"hljs-attr"},"description"),e(": "),s("span",{class:"hljs-string"},"'This is my custom display!'"),e(`,
	`),s("span",{class:"hljs-attr"},"component"),e(": "),s("span",{class:"hljs-keyword"},"function"),e(" ("),s("span",{class:"hljs-params"},"{ value }"),e(`) {
		`),s("span",{class:"hljs-keyword"},"return"),e(" value."),s("span",{class:"hljs-title function_"},"toLowerCase"),e(`();
	},
	`),s("span",{class:"hljs-attr"},"options"),e(": "),s("span",{class:"hljs-literal"},"null"),e(`,
	`),s("span",{class:"hljs-attr"},"types"),e(": ["),s("span",{class:"hljs-string"},"'string'"),e(`],
};
`)])],-1),Q=s("h2",{id:"accessing-internal-systems",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#accessing-internal-systems"},"#"),e(" Accessing Internal Systems")],-1),R=s("p",null,[e("To access internal systems like the API or the stores, you can use the "),s("code",null,"useApi()"),e(" and "),s("code",null,"useStores()"),e(" composables exported by the "),s("code",null,"@directus/extensions-sdk"),e(" package. They can be used inside a "),s("code",null,"setup()"),e(" function like this:")],-1),U=s("pre",null,[s("code",{class:"language-js"},[s("span",{class:"hljs-keyword"},"import"),e(" { useApi, useStores } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@directus/extensions-sdk'"),e(`;

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
	`),s("span",{class:"hljs-title function_"},"setup"),e("("),s("span",{class:"hljs-params"}),e(`) {
		`),s("span",{class:"hljs-keyword"},"const"),e(" api = "),s("span",{class:"hljs-title function_"},"useApi"),e(`();

		`),s("span",{class:"hljs-keyword"},"const"),e(" { useCollectionsStore } = "),s("span",{class:"hljs-title function_"},"useStores"),e(`();
		`),s("span",{class:"hljs-keyword"},"const"),e(" collectionsStore = "),s("span",{class:"hljs-title function_"},"useCollectionsStore"),e(`();

		`),s("span",{class:"hljs-comment"},"// ..."),e(`
	},
};
`)])],-1),X=s("div",{class:"tip hint"},[s("div",{class:"hint-title"},"Vue Options API"),s("p",null,[e("If you prefer to use the Vue Options API, you can inject the "),s("code",null,"api"),e(" and "),s("code",null,"stores"),e(" properties directly.")])],-1),es="Custom Displays",ts=!0,ns="A guide on how to build custom Display Extensions in Directus.",os="4 min read",ls={name:"displays",setup(Y,{expose:i}){const l={title:"Custom Displays",modularExtension:!0,description:"A guide on how to build custom Display Extensions in Directus.",readTime:"4 min read"};return i({frontmatter:l}),(Z,$)=>{const n=a("router-link"),c=a("docs-wrapper");return r(),d(c,{frontmatter:l},{default:t(()=>[s("div",p,[s("blockquote",null,[s("p",null,[h,o(n,{to:"/docs/getting-started/glossary#displays"},{default:t(()=>[u]),_:1}),y])]),_,f,m,j,g,s("ul",null,[w,b,s("li",null,[x,v,o(n,{to:"/docs/getting-started/glossary#material-icons"},{default:t(()=>[k]),_:1}),A]),T,C,D,s("li",null,[V,I,o(n,{to:"/docs/getting-started/glossary#types"},{default:t(()=>[S]),_:1}),E]),O,P]),F,q,B,M,N,L,W,z,G,H,J,K,Q,R,U,X])]),_:1})}}};export{ls as default,ns as description,ts as modularExtension,os as readTime,es as title};
