import{a as o,o as c,b as i,w as t,h as s,e as n,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const d={class:"markdown-body"},u=s("blockquote",null,[s("p",null,"Utilities are the various helper endpoints located within the API.")],-1),p=s("hr",null,null,-1),_=s("h2",{id:"generate-a-hash",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#generate-a-hash"},"#"),e(" Generate a Hash")],-1),m=s("p",null,"Generate a hash for a given string.",-1),f=s("h3",{id:"request-body",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body"},"#"),e(" Request Body")],-1),g=s("p",null,[s("code",null,"string"),e(),s("strong",null,"Required"),s("br"),e(" String to hash.")],-1),y=s("h3",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},"#"),e(" Returns")],-1),b=s("p",null,"Hashed string.",-1),j=s("h3",{id:"rest-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api"},"#"),e(" REST API")],-1),x=s("pre",null,[s("code",null,`POST /utils/hash/generate
`)],-1),q=s("h5",{id:"example",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example"},"#"),e(" Example")],-1),A=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /utils/hash/generate"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"string"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Hello World!"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),S=s("h3",{id:"graphql",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql"},"#"),e(" GraphQL")],-1),E=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),R=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	utils_hash_generate(string:`),s("span",{class:"hljs-type"}," String"),e("!):"),s("span",{class:"hljs-type"}," String"),e(`
}
`)])],-1),T=s("h5",{id:"example-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-1"},"#"),e(" Example")],-1),P=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	utils_hash_generate(string: `),s("span",{class:"hljs-string"},'"Hello World!"'),e(`)
}
`)])],-1),v=s("hr",null,null,-1),O=s("h2",{id:"verify-a-hash",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#verify-a-hash"},"#"),e(" Verify a Hash")],-1),C=s("p",null,"Verify a string with a hash.",-1),w=s("h3",{id:"request-body-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-1"},"#"),e(" Request Body")],-1),k=s("p",null,[s("code",null,"string"),e(),s("strong",null,"Required"),s("br"),e(" Source string.")],-1),F=s("p",null,[s("code",null,"hash"),e(),s("strong",null,"Required"),s("br"),e(" Hash you want to verify against.")],-1),I=s("h3",{id:"returns-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-1"},"#"),e(" Returns")],-1),B=s("p",null,"Boolean.",-1),D=s("h3",{id:"rest-api-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-1"},"#"),e(" REST API")],-1),G=s("pre",null,[s("code",null,`POST /utils/hash/verify
`)],-1),L=s("h5",{id:"example-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-2"},"#"),e(" Example")],-1),M=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /utils/hash/verify"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"string"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"Hello World!"'),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"hash"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"$arg...fEfM"'),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),U=s("h3",{id:"graphql-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-1"},"#"),e(" GraphQL")],-1),Q=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),H=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	utils_hash_verify(hash:`),s("span",{class:"hljs-type"}," String"),e("!, string:"),s("span",{class:"hljs-type"}," String"),e("!):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),N=s("hr",null,null,-1),V=s("h2",{id:"manually-sort-items-in-collection",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#manually-sort-items-in-collection"},"#"),e(" Manually Sort Items in Collection")],-1),W=s("p",null,"If a collection has a sort field, this util can be used to move items in that manual order.",-1),J=s("h3",{id:"request-body-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-2"},"#"),e(" Request Body")],-1),X=s("p",null,[s("code",null,"item"),e(),s("strong",null,"Required"),s("br"),e(" Primary key of the item you\u2019re moving in the collection.")],-1),Y=s("p",null,[s("code",null,"to"),e(),s("strong",null,"Required"),s("br"),e(" Primary key of the item you\u2019re moving the source item too.")],-1),$=s("h3",{id:"returns-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-2"},"#"),e(" Returns")],-1),z=s("p",null,"Empty body.",-1),K=s("h3",{id:"rest-api-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-2"},"#"),e(" REST API")],-1),Z=s("pre",null,[s("code",null,`POST /utils/sort/:collection
`)],-1),ss=s("h5",{id:"example-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-3"},"#"),e(" Example")],-1),es=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-comment"},"// POST /utils/sort/articles"),e(`

`),s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"item"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"16"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"to"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-number"},"51"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),ts=s("h3",{id:"graphql-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-2"},"#"),e(" GraphQL")],-1),as=s("pre",null,[s("code",null,`POST /graphql/system
`)],-1),ns=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"type"),s("span",{class:"hljs-type"}," Mutation"),e(` {
	utils_sort(collection:`),s("span",{class:"hljs-type"}," String"),e("!, item:"),s("span",{class:"hljs-literal"}," ID"),e("!, to:"),s("span",{class:"hljs-literal"}," ID"),e("!):"),s("span",{class:"hljs-type"}," Boolean"),e(`
}
`)])],-1),ls=s("h5",{id:"example-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-4"},"#"),e(" Example")],-1),os=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	utils_sort(collection: `),s("span",{class:"hljs-string"},'"articles"'),e(", item: "),s("span",{class:"hljs-number"},"16"),e(", to: "),s("span",{class:"hljs-number"},"51"),e(`)
}
`)])],-1),rs=s("hr",null,null,-1),hs=s("h2",{id:"import-data-from-file",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-data-from-file"},"#"),e(" Import Data from File")],-1),cs=e("Import multiple records from a JSON or CSV file into a collection. Relies on a "),is=s("code",null,"multipart/form-data",-1),ds=e(" encoded request, just like regular file uploads. Check "),us=e("Upload a File"),ps=e(" for more information."),_s=e("The import endpoint expects the file structure to match "),ms=e("the export query parameter"),fs=e(". For JSON, this is an array of objects, where every object is an item. For CSV, the first line has to be the columns header."),gs=s("h3",{id:"request-body-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-3"},"#"),e(" Request Body")],-1),ys=e("Send the file in a "),bs=s("code",null,"multipart/form-data",-1),js=e(" request. See "),xs=e("Upload a File"),qs=e(" for more information."),As=s("h3",{id:"returns-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-3"},"#"),e(" Returns")],-1),Ss=s("p",null,"Empty body.",-1),Es=s("h3",{id:"rest-api-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-3"},"#"),e(" REST API")],-1),Rs=s("pre",null,[s("code",null,`POST /utils/import/:collection
`)],-1),Ts=s("h5",{id:"example-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-5"},"#"),e(" Example")],-1),Ps=s("pre",null,[s("code",null,`POST /utils/import/articles

Content-Type: multipart/form-data; charset=utf-8; boundary=__X_BOUNDARY__
Content-Length: 3442422

--__X_BOUNDARY__
Content-Disposition: form-data; name="file"; filename="articles.csv"
Content-Type: text/csv

"id","title","another","created_by"
1,"My First Articled","abc","506385A2-E444-4AE2-A860-F00957A62C8A"
2,"My Second Article","abc","506385A2-E444-4AE2-A860-F00957A62C8A"
3,"My Updated Third Article","abc","506385A2-E444-4AE2-A860-F00957A62C8A"
4,"My Fourth Article","abc","506385A2-E444-4AE2-A860-F00957A62C8A"
5,"My Fifth Article","abc","506385A2-E444-4AE2-A860-F00957A62C8A"
...
`)],-1),vs=s("h3",{id:"graphql-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-3"},"#"),e(" GraphQL")],-1),Os=s("p",null,"n/a",-1),Cs=s("hr",null,null,-1),ws=s("h2",{id:"export-data-to-a-file",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#export-data-to-a-file"},"#"),e(" Export Data to a File")],-1),ks=s("p",null,"Export a larger data set to a file in the File Library",-1),Fs=s("h3",{id:"query-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#query-parameters"},"#"),e(" Query Parameters")],-1),Is=s("p",null,"Doesn\u2019t use any query parameters.",-1),Bs=s("h3",{id:"request-body-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-4"},"#"),e(" Request Body")],-1),Ds=s("p",null,[s("code",null,"format"),e(),s("strong",null,"Required"),s("br"),e(" What file format to save the export to. One of "),s("code",null,"csv"),e(", "),s("code",null,"xml"),e(", "),s("code",null,"json"),e(".")],-1),Gs=s("code",null,"query",-1),Ls=e(),Ms=s("strong",null,"Required",-1),Us=s("br",null,null,-1),Qs=e(" The query object to use for the export. Supports the "),Hs=e("global query parameters"),Ns=e("."),Vs=s("p",null,[s("code",null,"file"),e(),s("strong",null,"File Object"),s("br"),e(" Partial file object to tweak where / how the export file is saved.")],-1),Ws=s("h3",{id:"returns-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-4"},"#"),e(" Returns")],-1),Js=s("p",null,"Empty body",-1),Xs=s("h3",{id:"rest-api-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-4"},"#"),e(" REST API")],-1),Ys=s("pre",null,[s("code",null,`POST /utils/export/:collection
`)],-1),$s=s("h5",{id:"example-6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#example-6"},"#"),e(" Example")],-1),zs=s("pre",null,[s("code",null,`POST /utils/export/articles
`)],-1),Ks=s("pre",null,[s("code",{class:"language-json"},[s("span",{class:"hljs-punctuation"},"{"),e(`
	`),s("span",{class:"hljs-attr"},'"query"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"filter"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
			`),s("span",{class:"hljs-attr"},'"status"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
				`),s("span",{class:"hljs-attr"},'"_eq"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"published"'),e(`
			`),s("span",{class:"hljs-punctuation"},"}"),e(`
		`),s("span",{class:"hljs-punctuation"},"}"),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),s("span",{class:"hljs-punctuation"},","),e(`
	`),s("span",{class:"hljs-attr"},'"file"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-punctuation"},"{"),e(`
		`),s("span",{class:"hljs-attr"},'"folder"'),s("span",{class:"hljs-punctuation"},":"),e(),s("span",{class:"hljs-string"},'"34e95c19-cc50-42f2-83c8-b97616ac2390"'),e(`
	`),s("span",{class:"hljs-punctuation"},"}"),e(`
`),s("span",{class:"hljs-punctuation"},"}"),e(`
`)])],-1),Zs=s("h3",{id:"graphql-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-4"},"#"),e(" GraphQL")],-1),se=s("p",null,"n/a",-1),ee=s("hr",null,null,-1),te=s("h2",{id:"clear-the-internal-cache",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#clear-the-internal-cache"},"#"),e(" Clear the Internal Cache")],-1),ae=s("p",null,"Resets both the data and schema cache of Directus. This endpoint is only available to admin users.",-1),ne=s("h3",{id:"request-body-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-body-5"},"#"),e(" Request Body")],-1),le=s("p",null,"n/a",-1),oe=s("h3",{id:"returns-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns-5"},"#"),e(" Returns")],-1),re=s("p",null,"Empty body",-1),he=s("h3",{id:"rest-api-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api-5"},"#"),e(" REST API")],-1),ce=s("pre",null,[s("code",null,`POST /utils/cache/clear
`)],-1),ie=s("h3",{id:"graphql-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#graphql-5"},"#"),e(" GraphQL")],-1),de=s("pre",null,[s("code",{class:"language-graphql"},[s("span",{class:"hljs-keyword"},"mutation"),e(` {
	utils_cache_clear
}
`)])],-1),fe="Utilities",ge=!1,ye="REST and GraphQL API documentation on the Utilities collection in Directus.",be="3 min read",je="page-reference",xe={name:"utilities",setup(ue,{expose:r}){const l={title:"Utilities",modularExtension:!1,description:"REST and GraphQL API documentation on the Utilities collection in Directus.",readTime:"3 min read",pageClass:"page-reference"};return r({frontmatter:l}),(pe,_e)=>{const a=o("router-link"),h=o("docs-wrapper");return c(),i(h,{frontmatter:l},{default:t(()=>[s("div",d,[u,p,_,m,f,g,y,b,j,x,q,A,S,E,R,T,P,v,O,C,w,k,F,I,B,D,G,L,M,U,Q,H,N,V,W,J,X,Y,$,z,K,Z,ss,es,ts,as,ns,ls,os,rs,hs,s("p",null,[cs,is,ds,n(a,{to:"/docs/reference/files#upload-a-file"},{default:t(()=>[us]),_:1}),ps]),s("p",null,[_s,n(a,{to:"/docs/reference/query#export"},{default:t(()=>[ms]),_:1}),fs]),gs,s("p",null,[ys,bs,js,n(a,{to:"/docs/reference/files#upload-a-file"},{default:t(()=>[xs]),_:1}),qs]),As,Ss,Es,Rs,Ts,Ps,vs,Os,Cs,ws,ks,Fs,Is,Bs,Ds,s("p",null,[Gs,Ls,Ms,Us,Qs,n(a,{to:"/docs/reference/query"},{default:t(()=>[Hs]),_:1}),Ns]),Vs,Ws,Js,Xs,Ys,$s,zs,Ks,Zs,se,ee,te,ae,ne,le,oe,re,he,ce,ie,de])]),_:1})}}};export{xe as default,ye as description,ge as modularExtension,je as pageClass,be as readTime,fe as title};
