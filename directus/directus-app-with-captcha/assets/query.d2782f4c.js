import{a as s,o as r,b as d,w as l,h as e,e as c,E as t}from"./runtime-core.esm-bundler.15edf3c4.js";const h={class:"markdown-body"},u=e("blockquote",null,[e("p",null,"Most Directus API Endpoint operations can be manipulated with the following parameters. It is important to understand them to get the most out of the platform.")],-1),p=e("ul",null,[e("li",null,[e("a",{href:"#fields"},"Fields")]),e("li",null,[e("a",{href:"#filter"},"Filter")]),e("li",null,[e("a",{href:"#search"},"Search")]),e("li",null,[e("a",{href:"#sort"},"Sort")]),e("li",null,[e("a",{href:"#limit"},"Limit")]),e("li",null,[e("a",{href:"#offset"},"Offset"),t(" / "),e("a",{href:"#page"},"Page")]),e("li",null,[e("a",{href:"#aggregation-grouping"},"Aggregation & Grouping")]),e("li",null,[e("a",{href:"#deep"},"Deep")]),e("li",null,[e("a",{href:"#aliases"},"Aliases")]),e("li",null,[e("a",{href:"#export"},"Export"),e("p")]),e("li",null,[e("a",{href:"#functions"},"Functions"),e("p")]),e("li",null,[e("a",{href:"#metadata"},"Metadata"),e("ul",null,[e("li",null,[e("a",{href:"#total-count"},"Total Count")]),e("li",null,[e("a",{href:"#filter-count"},"Filter Count")])])])],-1),_=e("hr",null,null,-1),f=e("h2",{id:"fields",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fields"},"#"),t(" Fields")],-1),m=e("p",null,"Choose the fields that are returned in the current dataset. This parameter supports dot notation to request nested relational fields. You can also use a wildcard (*) to include all fields at a specific depth.",-1),g=e("h3",{id:"examples",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples"},"#"),t(" Examples")],-1),b=e("p",null,[t("Get all top-level fields"),e("br"),e("code",null,"*")],-1),y=e("p",null,[t("Get all top-level fields and all second-level relational fields"),e("br"),e("code",null,"*.*")],-1),j=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Performance & Size"),e("p",null,[t("While the fields wildcard is very useful for debugging purposes, we recommend only requesting "),e("em",null,"specific"),t(" fields for production use. By only requesting the fields you really need, you can speed up the request, and reduce the overall output size.")])],-1),x=e("p",null,[t("Get all top-level fields and second-level relational fields within images"),e("br"),e("code",null,"*,images.*")],-1),v=e("p",null,[t("Get only the first_name and last_name fields"),e("br"),e("code",null,"first_name,last_name")],-1),w=e("p",null,[t("Get all top-level and second-level relational fields, and third-level fields within images.thumbnails"),e("br"),e("code",null,"*.*,images.thumbnails.*")],-1),q=e("h3",{id:"many-to-any-(union-types)",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#many-to-any-(union-types)"},"#"),t(" Many-To-Any (Union Types)")],-1),k=e("p",null,[t("Seeing that Many-to-Any (M2A) fields have nested data from multiple collections, it\u2019s not always safe / wanted to fetch the same field from every related collection. In M2A fields, you can use the following syntax to specify what fields to fetch from which related nested collection type:"),e("br"),e("code",null,"?fields=<m2a-field>:<collection-scope>.<field>"),t(".")],-1),G=e("p",null,[t("Lets say we have a collection "),e("code",null,"pages"),t(" with a many-to-any field called "),e("code",null,"sections"),t(" that points to "),e("code",null,"headings"),t(", "),e("code",null,"paragraphs"),t(", and "),e("code",null,"videos"),t(". We only want to fetch "),e("code",null,"title"),t(" and "),e("code",null,"level"),t(" from "),e("code",null,"headings"),t(", "),e("code",null,"body"),t(" from "),e("code",null,"paragraphs"),t(" and "),e("code",null,"source"),t(" from "),e("code",null,"videos"),t(". We can achieve that by using:")],-1),A=e("pre",null,[e("code",null,`sections.item:headings.title
sections.item:headings.level
sections.item:paragraphs.body
sections.item:videos.source
`)],-1),E=e("p",null,"In GraphQL, this can be achieved using Union Types.",-1),T=e("h3",{id:"rest-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api"},"#"),t(" REST API")],-1),S=e("pre",null,[e("code",null,`?fields=title,body,featured_image.*

// or

?fields[]=title
&fields[]=body
&fields[]=featured_image.*
`)],-1),R=e("h3",{id:"graphql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql"},"#"),t(" GraphQL")],-1),L=e("p",null,[e("em",null,"Natively supported in GraphQL")],-1),I=e("hr",null,null,-1),P=e("h2",{id:"filter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#filter"},"#"),t(" Filter")],-1),Q=t("Used to search items in a collection that matches the filter\u2019s conditions. The filter param follows "),D=t("the Filter Rules spec"),F=t(", which includes additional information on logical operators (AND/OR), nested relational filtering, and dynamic variables."),N=e("h3",{id:"examples-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-1"},"#"),t(" Examples")],-1),C=e("p",null,[t("Retrieve all items where "),e("code",null,"first_name"),t(" equals \u201CRijk\u201D")],-1),B=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"first_name"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"_eq"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-string"},'"Rijk"'),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),M=e("p",null,"Retrieve all items in one of the following categories: \u201Cvegetables\u201D, \u201Cfruit\u201D",-1),z=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"categories"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"_in"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-string"},'"vegetables"'),e("span",{class:"hljs-punctuation"},","),t(),e("span",{class:"hljs-string"},'"fruit"'),e("span",{class:"hljs-punctuation"},"]"),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),O=e("p",null,"Retrieve all items that are published between two dates",-1),U=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"date_published"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"_between"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"["),e("span",{class:"hljs-string"},'"2021-01-24"'),e("span",{class:"hljs-punctuation"},","),t(),e("span",{class:"hljs-string"},'"2021-02-23"'),e("span",{class:"hljs-punctuation"},"]"),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),W=e("p",null,"Retrieve all items where the author\u2019s \u201Cvip\u201D flag is true",-1),V=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"author"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"vip"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
			`),e("span",{class:"hljs-attr"},'"_eq"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-literal"},[e("span",{class:"hljs-keyword"},"true")]),t(`
		`),e("span",{class:"hljs-punctuation"},"}"),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),J=e("div",{class:"tip hint"},[e("div",{class:"hint-title"},"Nested Filters"),e("p",null,[t("The above example will filter the "),e("em",null,"top level"),t(" items based on a condition "),e("em",null,"in"),t(" the related item. If you\u2019re looking to filter the related items themselves, take a look at "),e("a",{href:"#deep"},[t("the "),e("code",null,"deep"),t(" parameter")]),t("!")])],-1),Y=e("h3",{id:"rest-api-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-1"},"#"),t(" REST API")],-1),H=e("pre",null,[e("code",null,`?filter[first_name][_eq]=Rijk

// or

?filter={ "first_name": { "_eq": "Rijk" }}
`)],-1),K=e("h3",{id:"graphql-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-1"},"#"),t(" GraphQL")],-1),X=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	users(filter: { first_name: { _eq: `),e("span",{class:"hljs-string"},'"Rijk"'),t(` } }) {
		id
	}
}
`)])],-1),Z=e("hr",null,null,-1),$=e("h2",{id:"search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#search"},"#"),t(" Search")],-1),ee=e("p",null,"The search parameter allows you to perform a search on all string and text type fields within a collection. It\u2019s an easy way to search for an item without creating complex field filters \u2013 though it is far less optimized. It only searches the root item\u2019s fields, related item fields are not included.",-1),te=e("h3",{id:"example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#example"},"#"),t(" Example")],-1),ne=e("p",null,[t("Find all items that mention Directus"),e("br"),e("code",null,"Directus")],-1),se=e("h3",{id:"rest-api-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-2"},"#"),t(" REST API")],-1),le=e("pre",null,[e("code",null,`?search=Directus
`)],-1),ae=e("h3",{id:"graphql-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-2"},"#"),t(" GraphQL")],-1),oe=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(search: `),e("span",{class:"hljs-string"},'"Directus"'),t(`) {
		id
	}
}
`)])],-1),ie=e("hr",null,null,-1),re=e("h2",{id:"sort",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sort"},"#"),t(" Sort")],-1),de=e("p",null,[t("What field(s) to sort by. Sorting defaults to ascending, but a minus sign ("),e("code",null,"-"),t(") can be used to reverse this to descending order. Fields are prioritized by the order in the parameter.")],-1),ce=e("h3",{id:"examples-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-2"},"#"),t(" Examples")],-1),he=e("p",null,[t("Sort by creation date descending"),e("br"),e("code",null,"-date_created")],-1),ue=e("p",null,[t("Sort by a \u201Csort\u201D field, followed by publish date descending"),e("br"),e("code",null,"sort, -publish_date")],-1),pe=e("h3",{id:"rest-api-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-3"},"#"),t(" REST API")],-1),_e=e("pre",null,[e("code",null,`?sort=sort,-date_created

// or

?sort[]=sort
&sort[]=-date_created
`)],-1),fe=e("h3",{id:"graphql-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-3"},"#"),t(" GraphQL")],-1),me=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(sort: [`),e("span",{class:"hljs-string"},'"sort"'),t(", "),e("span",{class:"hljs-string"},'"-date_created"'),t(`]) {
		id
	}
}
`)])],-1),ge=e("hr",null,null,-1),be=e("h2",{id:"limit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#limit"},"#"),t(" Limit")],-1),ye=e("p",null,[t("Set the maximum number of items that will be returned. The default limit is set to "),e("code",null,"100"),t(".")],-1),je=e("h3",{id:"examples-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-3"},"#"),t(" Examples")],-1),xe=e("p",null,[t("Get the first 200 items"),e("br"),e("code",null,"200")],-1),ve=e("p",null,[t("Get all items"),e("br"),e("code",null,"-1")],-1),we=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"All Items"),e("p",null,"Depending on the size of your collection, fetching unlimited data may result in degraded performance or timeouts, use with caution.")],-1),qe=e("h3",{id:"rest-api-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-4"},"#"),t(" REST API")],-1),ke=e("pre",null,[e("code",null,`?limit=200
`)],-1),Ge=e("h3",{id:"graphql-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-4"},"#"),t(" GraphQL")],-1),Ae=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(limit: `),e("span",{class:"hljs-number"},"200"),t(`) {
		id
	}
}
`)])],-1),Ee=e("hr",null,null,-1),Te=e("h2",{id:"offset",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#offset"},"#"),t(" Offset")],-1),Se=e("p",null,[t("Skip the first "),e("code",null,"n"),t(" items in the response. Can be used for pagination.")],-1),Re=e("h3",{id:"examples-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-4"},"#"),t(" Examples")],-1),Le=e("p",null,[t("Get items 101\u2014200"),e("br"),e("code",null,"100")],-1),Ie=e("h3",{id:"rest-api-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-5"},"#"),t(" REST API")],-1),Pe=e("pre",null,[e("code",null,`?offset=100
`)],-1),Qe=e("h3",{id:"graphql-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-5"},"#"),t(" GraphQL")],-1),De=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(offset: `),e("span",{class:"hljs-number"},"100"),t(`) {
		id
	}
}
`)])],-1),Fe=e("hr",null,null,-1),Ne=e("h2",{id:"page",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#page"},"#"),t(" Page")],-1),Ce=e("p",null,[t("An alternative to "),e("code",null,"offset"),t(". Page is a way to set "),e("code",null,"offset"),t(" under the hood by calculating "),e("code",null,"limit * page"),t(". Page is 1-indexed.")],-1),Be=e("h3",{id:"examples-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-5"},"#"),t(" Examples")],-1),Me=e("p",null,[t("Get items 1-100"),e("br"),e("code",null,"1")],-1),ze=e("p",null,[t("Get items 101-200"),e("br"),e("code",null,"2")],-1),Oe=e("h3",{id:"rest-api-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-6"},"#"),t(" REST API")],-1),Ue=e("pre",null,[e("code",null,`?page=2
`)],-1),We=e("h3",{id:"graphql-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-6"},"#"),t(" GraphQL")],-1),Ve=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(page: `),e("span",{class:"hljs-number"},"2"),t(`) {
		id
	}
}
`)])],-1),Je=e("hr",null,null,-1),Ye=e("h2",{id:"aggregation-%26-grouping",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aggregation-%26-grouping"},"#"),t(" Aggregation & Grouping")],-1),He=e("p",null,"Aggregate functions allow you to perform calculations on a set of values, returning a single result.",-1),Ke=e("p",null,"The following aggregation functions are available in Directus:",-1),Xe=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"count")]),e("td",null,"Counts how many items there are")]),e("tr",null,[e("td",null,[e("code",null,"countDistinct")]),e("td",null,"Counts how many unique items there are")]),e("tr",null,[e("td",null,[e("code",null,"sum")]),e("td",null,"Adds together the values in the given field")]),e("tr",null,[e("td",null,[e("code",null,"sumDistinct")]),e("td",null,"Adds together the unique values in the given field")]),e("tr",null,[e("td",null,[e("code",null,"avg")]),e("td",null,"Get the average value of the given field")]),e("tr",null,[e("td",null,[e("code",null,"avgDistinct")]),e("td",null,"Get the average value of the unique values in the given field")]),e("tr",null,[e("td",null,[e("code",null,"min")]),e("td",null,"Return the lowest value in the field")]),e("tr",null,[e("td",null,[e("code",null,"max")]),e("td",null,"Return the highest value in the field")]),e("tr",null,[e("td",null,[e("code",null,"countAll")]),e("td",null,[t("Equivalent to "),e("code",null,"?aggregate[count]=*"),t(" (GraphQL only)")])])])],-1),Ze=e("h3",{id:"grouping",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grouping"},"#"),t(" Grouping")],-1),$e=e("p",null,[t("By default, the above aggregation functions run on the whole dataset. To allow for more flexible reporting, you can combine the above aggregation with grouping. Grouping allows for running the aggregation functions based on a shared value. This allows for things like "),e("em",null,"\u201CAverage rating per month\u201D"),t(" or "),e("em",null,"\u201CTotal sales of items in the jeans category\u201D"),t(".")],-1),et=e("p",null,[t("The "),e("code",null,"groupBy"),t(" query allows for grouping on multiple fields simultaneously. Combined with the "),e("a",{href:"#functions"},"Functions"),t(", this allows for aggregate reporting per year-month-date.")],-1),tt=e("h3",{id:"rest-api-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-7"},"#"),t(" REST API")],-1),nt=e("pre",null,[e("code",null,`?aggregate[avg]=cost
&groupBy[]=author
&groupBy[]=year(publish_date)
`)],-1),st=e("h3",{id:"graphql-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-7"},"#"),t(" GraphQL")],-1),lt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles_aggregated(groupBy: [`),e("span",{class:"hljs-string"},'"author"'),t(", "),e("span",{class:"hljs-string"},'"year(publish_date)"'),t(`]) {
		group
		sum {
			revenue
		}
	}
}
`)])],-1),at=e("hr",null,null,-1),ot=e("h2",{id:"deep",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deep"},"#"),t(" Deep")],-1),it=e("p",null,"Deep allows you to set any of the other query parameters on a nested relational dataset.",-1),rt=e("h3",{id:"examples-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#examples-6"},"#"),t(" Examples")],-1),dt=e("p",null,"Limit the nested related articles to 3",-1),ct=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"related_articles"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"_limit"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-number"},"3"),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),ht=e("p",null,"Only get 3 related articles, with only the top rated comment nested",-1),ut=e("pre",null,[e("code",{class:"language-json"},[e("span",{class:"hljs-punctuation"},"{"),t(`
	`),e("span",{class:"hljs-attr"},'"related_articles"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
		`),e("span",{class:"hljs-attr"},'"_limit"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-number"},"3"),e("span",{class:"hljs-punctuation"},","),t(`
		`),e("span",{class:"hljs-attr"},'"comments"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-punctuation"},"{"),t(`
			`),e("span",{class:"hljs-attr"},'"_sort"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-string"},'"rating"'),e("span",{class:"hljs-punctuation"},","),t(`
			`),e("span",{class:"hljs-attr"},'"_limit"'),e("span",{class:"hljs-punctuation"},":"),t(),e("span",{class:"hljs-number"},"1"),t(`
		`),e("span",{class:"hljs-punctuation"},"}"),t(`
	`),e("span",{class:"hljs-punctuation"},"}"),t(`
`),e("span",{class:"hljs-punctuation"},"}"),t(`
`)])],-1),pt=e("h3",{id:"rest-api-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-8"},"#"),t(" REST API")],-1),_t=e("pre",null,[e("code",null,`?deep[translations][_filter][languages_code][_eq]=en-US

// or

?deep={ "translations": { "_filter": { "languages_code": { "_eq": "en-US" }}}}
`)],-1),ft=e("h3",{id:"graphql-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-8"},"#"),t(" GraphQL")],-1),mt=e("p",null,[e("em",null,"Natively supported in GraphQL:")],-1),gt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	members {
		favorite_games(filter: { name: { _eq: `),e("span",{class:"hljs-string"},'"Mariokart 8"'),t(` } }) {
			id
			featured_image {
				filename_disk
			}
		}
	}
}
`)])],-1),bt=e("hr",null,null,-1),yt=e("h2",{id:"aliases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aliases"},"#"),t(" Aliases")],-1),jt=e("p",null,"Aliases allow you rename fields on the fly, and request the same nested data set multiple times using different filters.",-1),xt=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"Nested fields"),e("p",null,[t("It is only possible to alias same level fields."),e("br"),t(" Alias for nested fields, f.e. "),e("code",null,"field.nested"),t(", will not work.")])],-1),vt=e("h3",{id:"rest-api-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-9"},"#"),t(" REST API")],-1),wt=e("pre",null,[e("code",null,`?alias[all_translations]=translations
&alias[dutch_translations]=translations
&deep[dutch_translations][_filter][code][_eq]=nl-NL
`)],-1),qt=e("h3",{id:"graphql-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-9"},"#"),t(" GraphQL")],-1),kt=e("p",null,[e("em",null,"Natively supported in GraphQL:")],-1),Gt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles {
		dutch_translations: translations(filter: { code: { _eq: `),e("span",{class:"hljs-string"},'"nl-NL"'),t(` } }) {
			id
		}

		all_translations: translations {
			id
		}
	}
}
`)])],-1),At=e("hr",null,null,-1),Et=e("h2",{id:"export",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#export"},"#"),t(" Export")],-1),Tt=e("p",null,"Save the current API response to a file.",-1),St=e("p",null,[t("Saves the API response to a file. Accepts one of "),e("code",null,"json"),t(", "),e("code",null,"csv"),t(", "),e("code",null,"xml"),t(".")],-1),Rt=e("h3",{id:"rest-api-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-10"},"#"),t(" REST API")],-1),Lt=e("pre",null,[e("code",null,`?export=json
?export=csv
?export=xml
`)],-1),It=e("h3",{id:"graphql-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-10"},"#"),t(" GraphQL")],-1),Pt=e("p",null,"n/a",-1),Qt=e("hr",null,null,-1),Dt=e("h2",{id:"functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#functions"},"#"),t(" Functions")],-1),Ft=e("p",null,"Functions allow for \u201Clive\u201D modification of values stored in a field. Functions can be used in any query parameter you\u2019d normally supply a field key, including fields, aggregation, and filter.",-1),Nt=e("p",null,"Functions can be used by wrapping the field key in a JavaScript like syntax, for example:",-1),Ct=e("p",null,[e("code",null,"timestamp"),t(" -> "),e("code",null,"year(timestamp)")],-1),Bt=e("h3",{id:"datetime-functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#datetime-functions"},"#"),t(" DateTime Functions")],-1),Mt=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Filter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"year")]),e("td",null,"Extract the year from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"month")]),e("td",null,"Extract the month from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"week")]),e("td",null,"Extract the week from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"day")]),e("td",null,"Extract the day from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"weekday")]),e("td",null,"Extract the weekday from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"hour")]),e("td",null,"Extract the hour from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"minute")]),e("td",null,"Extract the minute from a datetime/date/timestamp field")]),e("tr",null,[e("td",null,[e("code",null,"second")]),e("td",null,"Extract the second from a datetime/date/timestamp field")])])],-1),zt=e("h3",{id:"array-functions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#array-functions"},"#"),t(" Array Functions")],-1),Ot=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Filter"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"count")]),e("td",null,"Extract the number of items from a JSON array or relational field")])])],-1),Ut=e("div",{class:"warning hint"},[e("div",{class:"hint-title"},"GraphQL"),e("p",null,[t("Names aren\u2019t allowed to include any special characters in GraphQL, preventing the "),e("code",null,"()"),t(" syntax from being used.")]),e("p",null,[t("As an alternative, the above functions can be used by appending "),e("code",null,"_func"),t(" at the end of the field name, and using the function name as the nested field (see the example that follows).")])],-1),Wt=e("h3",{id:"rest-api-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-11"},"#"),t(" REST API")],-1),Vt=e("pre",null,[e("code",null,`?fields=id,title,weekday(date_published)
&filter[year(date_published)][_eq]=2021
`)],-1),Jt=e("h3",{id:"graphql-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-11"},"#"),t(" GraphQL")],-1),Yt=e("pre",null,[e("code",{class:"language-graphql"},[e("span",{class:"hljs-keyword"},"query"),t(` {
	articles(filter: { date_published_func: { year: { _eq: `),e("span",{class:"hljs-number"},"2021"),t(` } } }) {
		id
		title
		date_published_func {
			weekday
		}
	}
}
`)])],-1),Ht=e("hr",null,null,-1),Kt=e("h2",{id:"metadata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metadata"},"#"),t(" Metadata")],-1),Xt=e("p",null,[t("Metadata allows you to retrieve some additional information about the items in the collection you\u2019re fetching. "),e("code",null,"*"),t(" can be used as a wildcard to retrieve all metadata.")],-1),Zt=e("h3",{id:"total-count",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#total-count"},"#"),t(" Total Count")],-1),$t=e("p",null,"Returns the total item count of the collection you\u2019re querying.",-1),en=e("h3",{id:"filter-count",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#filter-count"},"#"),t(" Filter Count")],-1),tn=e("p",null,"Returns the item count of the collection you\u2019re querying, taking the current filter/search parameters into account.",-1),nn=e("h3",{id:"rest-api-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rest-api-12"},"#"),t(" REST API")],-1),sn=e("pre",null,[e("code",null,`?meta=total_count

?meta=filter_count

?meta=*
`)],-1),ln=e("h3",{id:"graphql-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graphql-12"},"#"),t(" GraphQL")],-1),an=e("p",null,"n/a",-1),hn="Global Query Parameters",un=!1,pn="REST and GraphQL API documentation to run queries in Directus.",_n="9 min read",fn="page-reference",mn={name:"query",setup(on,{expose:a}){const n={title:"Global Query Parameters",modularExtension:!1,description:"REST and GraphQL API documentation to run queries in Directus.",readTime:"9 min read",pageClass:"page-reference"};return a({frontmatter:n}),(rn,dn)=>{const o=s("router-link"),i=s("docs-wrapper");return r(),d(i,{frontmatter:n},{default:l(()=>[e("div",h,[u,p,_,f,m,g,b,y,j,x,v,w,q,k,G,A,E,T,S,R,L,I,P,e("p",null,[Q,c(o,{to:"/docs/reference/filter-rules"},{default:l(()=>[D]),_:1}),F]),N,C,B,M,z,O,U,W,V,J,Y,H,K,X,Z,$,ee,te,ne,se,le,ae,oe,ie,re,de,ce,he,ue,pe,_e,fe,me,ge,be,ye,je,xe,ve,we,qe,ke,Ge,Ae,Ee,Te,Se,Re,Le,Ie,Pe,Qe,De,Fe,Ne,Ce,Be,Me,ze,Oe,Ue,We,Ve,Je,Ye,He,Ke,Xe,Ze,$e,et,tt,nt,st,lt,at,ot,it,rt,dt,ct,ht,ut,pt,_t,ft,mt,gt,bt,yt,jt,xt,vt,wt,qt,kt,Gt,At,Et,Tt,St,Rt,Lt,It,Pt,Qt,Dt,Ft,Nt,Ct,Bt,Mt,zt,Ot,Ut,Wt,Vt,Jt,Yt,Ht,Kt,Xt,Zt,$t,en,tn,nn,sn,ln,an])]),_:1})}}};export{mn as default,pn as description,un as modularExtension,fn as pageClass,_n as readTime,hn as title};
