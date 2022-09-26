import{a,o as r,b as d,w as n,h as e,e as o,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const u={class:"markdown-body"},h=t("Custom Interfaces allow you to create new ways of viewing or interacting with field data on the Item Detail page. "),p=t("Learn more about Interfaces"),f=t("."),_=e("h2",{id:"extension-entrypoint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extension-entrypoint"},"#"),t(" Extension Entrypoint")],-1),m=e("p",null,[t("The entrypoint of your interface is the "),e("code",null,"index"),t(" file inside the "),e("code",null,"src/"),t(" folder of your extension package. It exports a configuration object with options to configure the behavior of your interface. When loading your interface, this object is imported by the Directus host.")],-1),y=e("p",null,"Example of an entrypoint:",-1),g=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(),e("span",{class:"hljs-title class_"},"InterfaceComponent"),t(),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'./interface.vue'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-attr"},"id"),t(": "),e("span",{class:"hljs-string"},"'custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"name"),t(": "),e("span",{class:"hljs-string"},"'Custom'"),t(`,
	`),e("span",{class:"hljs-attr"},"icon"),t(": "),e("span",{class:"hljs-string"},"'box'"),t(`,
	`),e("span",{class:"hljs-attr"},"description"),t(": "),e("span",{class:"hljs-string"},"'This is my custom interface!'"),t(`,
	`),e("span",{class:"hljs-attr"},"component"),t(": "),e("span",{class:"hljs-title class_"},"InterfaceComponent"),t(`,
	`),e("span",{class:"hljs-attr"},"options"),t(": "),e("span",{class:"hljs-literal"},"null"),t(`,
	`),e("span",{class:"hljs-attr"},"types"),t(": ["),e("span",{class:"hljs-string"},"'string'"),t(`],
};
`)])],-1),b=e("h4",{id:"available-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-options"},"#"),t(" Available Options")],-1),j=e("li",null,[e("code",null,"id"),t(" \u2014 The unique key for this interface. It is good practice to scope proprietary interfaces with an author prefix.")],-1),w=e("li",null,[e("code",null,"name"),t(" \u2014 The human-readable name for this interface.")],-1),v=e("code",null,"icon",-1),x=t(" \u2014 An icon name from the "),k=t("material icon set"),A=t(", or the extended list of Directus custom icons."),T=e("li",null,[e("code",null,"description"),t(" \u2014 A short description (<80 characters) of this interface shown in the App.")],-1),I=e("li",null,[e("code",null,"component"),t(" \u2014 A reference to your interface component.")],-1),C=e("li",null,[e("code",null,"options"),t(" \u2014 The options of your interface. Can be either an options object or a dedicated Vue component.")],-1),V=e("code",null,"types",-1),D=t(" \u2014 An array of supported "),S=t("types"),E=t("."),O=e("li",null,[e("code",null,"groups"),t(" \u2014 An array of field-groups. Accepts "),e("code",null,"standard"),t(", "),e("code",null,"file"),t(", "),e("code",null,"files"),t(", "),e("code",null,"M2O"),t(", "),e("code",null,"O2M"),t(", "),e("code",null,"M2A"),t(", "),e("code",null,"translations"),t(". Defaults to "),e("code",null,"standard"),t(".")],-1),P=e("li",null,[e("code",null,"relational"),t(" \u2014 A boolean that indicates if this interface is a relational interface.")],-1),B=e("li",null,[e("code",null,"recommendedDisplays"),t(" \u2014 An array of display names which are recommended to be used with this interface.")],-1),M=e("h2",{id:"interface-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#interface-component"},"#"),t(" Interface Component")],-1),N=e("p",null,"The interface component is the part of your extension that will be rendered by the Directus App whenever your interface should be used to input some value into a field. This interface component has to be Vue component. The most straightforward way to write a Vue component is to use the Vue Single File Component syntax.",-1),q=e("p",null,"Example of an interface component using the Vue SFC syntax:",-1),F=e("pre",null,[e("code",{class:"language-vue"},`<template>
	<input :value="value" @input="handleChange($event.target.value)" />
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		return { handleChange };

		function handleChange(value) {
			emit('input', value);
		}
	},
};
<\/script>
`)],-1),K=e("p",null,[t("The current value of the field is provided to the component via the "),e("code",null,"value"),t(" prop. If the value was changed inside your component, it should be emitted to the Directus App by using the "),e("code",null,"input"),t(" emit.")],-1),L=e("h4",{id:"available-props",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-props"},"#"),t(" Available Props")],-1),U=e("ul",null,[e("li",null,[e("code",null,"value"),t(" \u2014 The value of the field.")]),e("li",null,[e("code",null,"width"),t(" \u2014 The layout width of the field. Either "),e("code",null,"half"),t(", "),e("code",null,"half-right"),t(", "),e("code",null,"full"),t(", or "),e("code",null,"fill"),t(".")]),e("li",null,[e("code",null,"type"),t(" \u2014 The type of the field.")]),e("li",null,[e("code",null,"collection"),t(" \u2014 The collection name of the field.")]),e("li",null,[e("code",null,"field"),t(" \u2014 The key of the field.")]),e("li",null,[e("code",null,"primaryKey"),t(" \u2014 The current item\u2019s primary key.")])],-1),W=e("h4",{id:"available-emits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#available-emits"},"#"),t(" Available Emits")],-1),$=e("ul",null,[e("li",null,[e("code",null,"input"),t(" \u2014 Update the value of the field.")])],-1),z=e("p",null,"Other than this simple API to communicate with the Directus App, the interface component is a blank canvas, allowing you to create anything you need.",-1),G=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"Vue Version"),e("p",null,"The Directus App uses Vue 3. There might be 3rd party libraries that aren\u2019t yet compatible with Vue 3.")],-1),H=e("h2",{id:"accessing-internal-systems",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessing-internal-systems"},"#"),t(" Accessing Internal Systems")],-1),J=e("p",null,[t("To access internal systems like the API or the stores, you can use the "),e("code",null,"useApi()"),t(" and "),e("code",null,"useStores()"),t(" composables exported by the "),e("code",null,"@directus/extensions-sdk"),t(" package. They can be used inside a "),e("code",null,"setup()"),t(" function like this:")],-1),Q=e("pre",null,[e("code",{class:"language-js"},[e("span",{class:"hljs-keyword"},"import"),t(" { useApi, useStores } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@directus/extensions-sdk'"),t(`;

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
	`),e("span",{class:"hljs-title function_"},"setup"),t("("),e("span",{class:"hljs-params"}),t(`) {
		`),e("span",{class:"hljs-keyword"},"const"),t(" api = "),e("span",{class:"hljs-title function_"},"useApi"),t(`();

		`),e("span",{class:"hljs-keyword"},"const"),t(" { useCollectionsStore } = "),e("span",{class:"hljs-title function_"},"useStores"),t(`();
		`),e("span",{class:"hljs-keyword"},"const"),t(" collectionsStore = "),e("span",{class:"hljs-title function_"},"useCollectionsStore"),t(`();

		`),e("span",{class:"hljs-comment"},"// ..."),t(`
	},
};
`)])],-1),R=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Vue Options API"),e("p",null,[t("If you prefer to use the Vue Options API, you can inject the "),e("code",null,"api"),t(" and "),e("code",null,"stores"),t(" properties directly.")])],-1),te="Custom Interfaces",ne=!0,se="A guide on how to build custom Interfaces in Directus.",oe="4 min read",le={name:"interfaces",setup(X,{expose:i}){const l={title:"Custom Interfaces",modularExtension:!0,description:"A guide on how to build custom Interfaces in Directus.",readTime:"4 min read"};return i({frontmatter:l}),(Y,Z)=>{const s=a("router-link"),c=a("docs-wrapper");return r(),d(c,{frontmatter:l},{default:n(()=>[e("div",u,[e("blockquote",null,[e("p",null,[h,o(s,{to:"/docs/getting-started/glossary#interfaces"},{default:n(()=>[p]),_:1}),f])]),_,m,y,g,b,e("ul",null,[j,w,e("li",null,[v,x,o(s,{to:"/docs/getting-started/glossary#material-icons"},{default:n(()=>[k]),_:1}),A]),T,I,C,e("li",null,[V,D,o(s,{to:"/docs/getting-started/glossary#types"},{default:n(()=>[S]),_:1}),E]),O,P,B]),M,N,q,F,K,L,U,W,$,z,G,H,J,Q,R])]),_:1})}}};export{le as default,se as description,ne as modularExtension,oe as readTime,te as title};
