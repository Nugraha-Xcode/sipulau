import{a as l,o as r,b as h,w as e,h as t,e as o,E as s}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},p=s("Panels are modular units of data visualization that exist within the "),u=s("Insights module"),m=s(". Each panel exists within a Dashboard and can be positioned and resized as needed. "),_=s("Learn more about Panels"),g=s("."),f=t("h2",{id:"extension-entrypoint",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#extension-entrypoint"},"#"),s(" Extension Entrypoint")],-1),y=t("p",null,[s("The entrypoint of your panel is the "),t("code",null,"index"),s(" file inside the "),t("code",null,"src/"),s(" folder of your extension package. It exports a configuration object with options to configure the behavior of your panel. When loading your panel, this object is imported by the Directus host.")],-1),j=t("p",null,"Example of an entrypoint:",-1),b=t("pre",null,[t("code",{class:"language-js"},[t("span",{class:"hljs-keyword"},"import"),s(),t("span",{class:"hljs-title class_"},"PanelComponent"),s(),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'./panel.vue'"),s(`;

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
	`),t("span",{class:"hljs-attr"},"id"),s(": "),t("span",{class:"hljs-string"},"'custom'"),s(`,
	`),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Custom'"),s(`,
	`),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'box'"),s(`,
	`),t("span",{class:"hljs-attr"},"description"),s(": "),t("span",{class:"hljs-string"},"'This is my custom panel!'"),s(`,
	`),t("span",{class:"hljs-attr"},"component"),s(": "),t("span",{class:"hljs-title class_"},"PanelComponent"),s(`,
	`),t("span",{class:"hljs-attr"},"options"),s(`: [
		{
			`),t("span",{class:"hljs-attr"},"field"),s(": "),t("span",{class:"hljs-string"},"'text'"),s(`,
			`),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Text'"),s(`,
			`),t("span",{class:"hljs-attr"},"type"),s(": "),t("span",{class:"hljs-string"},"'string'"),s(`,
			`),t("span",{class:"hljs-attr"},"meta"),s(`: {
				`),t("span",{class:"hljs-attr"},"interface"),s(": "),t("span",{class:"hljs-string"},"'input'"),s(`,
				`),t("span",{class:"hljs-attr"},"width"),s(": "),t("span",{class:"hljs-string"},"'full'"),s(`,
			},
		},
	],
	`),t("span",{class:"hljs-attr"},"minWidth"),s(": "),t("span",{class:"hljs-number"},"12"),s(`,
	`),t("span",{class:"hljs-attr"},"minHeight"),s(": "),t("span",{class:"hljs-number"},"8"),s(`,
};
`)])],-1),x=t("h4",{id:"available-options",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#available-options"},"#"),s(" Available Options")],-1),w=t("li",null,[t("code",null,"id"),s(" \u2014 The unique key for this panel. It is good practice to scope proprietary panels with an author prefix.")],-1),k=t("li",null,[t("code",null,"name"),s(" \u2014 The human-readable name for this panel.")],-1),v=t("code",null,"icon",-1),T=s(" \u2014 An icon name from the "),A=s("material icon set"),V=s(", or the extended list of Directus custom icons."),C=t("li",null,[t("code",null,"description"),s(" \u2014 A short description (<80 characters) of this panel shown in the App.")],-1),P=t("li",null,[t("code",null,"component"),s(" \u2014 A reference to your panel component.")],-1),D=t("li",null,[t("code",null,"options"),s(" \u2014 The options of your panel. Can be either an options object or a dedicated Vue component.")],-1),I=t("li",null,[t("code",null,"minWidth"),s(" - The minimum width in grid units of your panel on a dashboard.")],-1),S=t("li",null,[t("code",null,"minHeight"),s(" - The minimum height in grid units of your panel on a dashboard.")],-1),E=t("h2",{id:"panel-component",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#panel-component"},"#"),s(" Panel Component")],-1),H=t("p",null,"The panel component is the part of your extension that will be rendered by the Directus App whenever your panel should be used for data visualization in a dashboard within the Insights module. This panel component has to be Vue component. The most straightforward way to write a Vue component is to use the Vue Single File Component syntax.",-1),B=t("p",null,"Example of a panel component using the Vue SFC syntax:",-1),W=t("pre",null,[t("code",{class:"language-vue"},`<template>
	<div class="text" :class="{ 'has-header': showHeader }">
		{{ text }}
	</div>
</template>

<script>
export default {
	props: {
		showHeader: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			default: '',
		},
	},
};
<\/script>

<style scoped>
.text {
	padding: 12px;
}

.text.has-header {
	padding: 0 12px;
}
</style>
`)],-1),z=t("h4",{id:"available-props",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#available-props"},"#"),s(" Available Props")],-1),N=t("ul",null,[t("li",null,[t("code",null,"showHeader"),s(),t("strong",null,"boolean"),s(" \u2014 Whether the header is shown. Useful for alternative styling based on the extra/reduced space.")]),t("li",null,[t("code",null,"dashboard"),s(),t("strong",null,"uuid"),s(" - The UUID string of the dashboard containing the panel.")]),t("li",null,[t("code",null,"height"),s(),t("strong",null,"number"),s(" - The current configured height of the panel.")]),t("li",null,[t("code",null,"width"),s(),t("strong",null,"number"),s(" - The current configured width of the panel.")]),t("li",null,[t("code",null,"now"),s(),t("strong",null,"Date"),s(" - The Date object as of the moment of viewing the dashboard containing the panel.")])],-1),O=t("div",{class:"warning hint"},[t("div",{class:"hint-title"},"Vue Version"),t("p",null,"The Directus App uses Vue 3. There might be 3rd party libraries that aren\u2019t yet compatible with Vue 3.")],-1),U=t("h2",{id:"accessing-internal-systems",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessing-internal-systems"},"#"),s(" Accessing Internal Systems")],-1),q=t("p",null,[s("To access internal systems like the API or the stores, you can use the "),t("code",null,"useApi()"),s(" and "),t("code",null,"useStores()"),s(" composables exported by the "),t("code",null,"@directus/extensions-sdk"),s(" package. They can be used inside a "),t("code",null,"setup()"),s(" function like this:")],-1),F=t("pre",null,[t("code",{class:"language-js"},[t("span",{class:"hljs-keyword"},"import"),s(" { useApi, useStores } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@directus/extensions-sdk'"),s(`;

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
	`),t("span",{class:"hljs-title function_"},"setup"),s("("),t("span",{class:"hljs-params"}),s(`) {
		`),t("span",{class:"hljs-keyword"},"const"),s(" api = "),t("span",{class:"hljs-title function_"},"useApi"),s(`();

		`),t("span",{class:"hljs-keyword"},"const"),s(" { useCollectionsStore } = "),t("span",{class:"hljs-title function_"},"useStores"),s(`();
		`),t("span",{class:"hljs-keyword"},"const"),s(" collectionsStore = "),t("span",{class:"hljs-title function_"},"useCollectionsStore"),s(`();

		`),t("span",{class:"hljs-comment"},"// ..."),s(`
	},
};
`)])],-1),L=t("div",{class:"tip hint"},[t("div",{class:"hint-title"},"Vue Options API"),t("p",null,[s("If you prefer to use the Vue Options API, you can inject the "),t("code",null,"api"),s(" and "),t("code",null,"stores"),s(" properties directly.")])],-1),Q="Custom Panels",R=!0,X="A guide on how to build custom Panels in Directus.",Y="3 min read",Z={name:"panels",setup(G,{expose:i}){const a={title:"Custom Panels",modularExtension:!0,description:"A guide on how to build custom Panels in Directus.",readTime:"3 min read"};return i({frontmatter:a}),(J,K)=>{const n=l("router-link"),c=l("docs-wrapper");return r(),h(c,{frontmatter:a},{default:e(()=>[t("div",d,[t("blockquote",null,[t("p",null,[p,o(n,{to:"/docs/app/insights"},{default:e(()=>[u]),_:1}),m,o(n,{to:"/docs/getting-started/glossary#panels"},{default:e(()=>[_]),_:1}),g])]),f,y,j,b,x,t("ul",null,[w,k,t("li",null,[v,T,o(n,{to:"/docs/getting-started/glossary#material-icons"},{default:e(()=>[A]),_:1}),V]),C,P,D,I,S]),E,H,B,W,z,N,O,U,q,F,L])]),_:1})}}};export{Z as default,X as description,R as modularExtension,Y as readTime,Q as title};
