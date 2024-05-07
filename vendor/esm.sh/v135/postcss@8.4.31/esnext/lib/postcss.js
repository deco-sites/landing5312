/* esm.sh - esbuild bundle(postcss@8.4.31/lib/postcss) esnext production */
import __Process$ from "/v135/node_process.js";
import * as __0$ from "/v135/postcss@8.4.31/esnext/lib/css-syntax-error.js";
import * as __1$ from "/v135/postcss@8.4.31/esnext/lib/declaration.js";
import * as __2$ from "/v135/postcss@8.4.31/esnext/lib/lazy-result.js";
import * as __3$ from "/v135/postcss@8.4.31/esnext/lib/container.js";
import * as __4$ from "/v135/postcss@8.4.31/esnext/lib/processor.js";
import * as __5$ from "/v135/postcss@8.4.31/esnext/lib/stringify.js";
import * as __6$ from "/v135/postcss@8.4.31/esnext/lib/fromJSON.js";
import * as __7$ from "/v135/postcss@8.4.31/esnext/lib/warning.js";
import * as __8$ from "/v135/postcss@8.4.31/esnext/lib/comment.js";
import * as __9$ from "/v135/postcss@8.4.31/esnext/lib/at-rule.js";
import * as __a$ from "/v135/postcss@8.4.31/esnext/lib/result.js";
import * as __b$ from "/v135/postcss@8.4.31/esnext/lib/input.js";
import * as __c$ from "/v135/postcss@8.4.31/esnext/lib/parse.js";
import * as __d$ from "/v135/postcss@8.4.31/esnext/lib/list.js";
import * as __e$ from "/v135/postcss@8.4.31/esnext/lib/rule.js";
import * as __f$ from "/v135/postcss@8.4.31/esnext/lib/root.js";
import * as __10$ from "/v135/postcss@8.4.31/esnext/lib/node.js";
import * as __11$ from "/v135/postcss@8.4.31/esnext/lib/container.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"postcss/lib/css-syntax-error":return e(__0$);case"postcss/lib/declaration":return e(__1$);case"postcss/lib/lazy-result":return e(__2$);case"postcss/lib/container":return e(__3$);case"postcss/lib/processor":return e(__4$);case"postcss/lib/stringify":return e(__5$);case"postcss/lib/fromJSON":return e(__6$);case"postcss/lib/warning":return e(__7$);case"postcss/lib/comment":return e(__8$);case"postcss/lib/at-rule":return e(__9$);case"postcss/lib/result":return e(__a$);case"postcss/lib/input":return e(__b$);case"postcss/lib/parse":return e(__c$);case"postcss/lib/list":return e(__d$);case"postcss/lib/rule":return e(__e$);case"postcss/lib/root":return e(__f$);case"postcss/lib/node":return e(__10$);default:throw new Error("module \""+n+"\" not found");}};
var z=Object.create;var m=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var s=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(o,c)=>(typeof require<"u"?require:o)[c]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var f=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var E=(e,o,c,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of O(o))!v.call(e,n)&&n!==c&&m(e,n,{get:()=>o[n],enumerable:!(l=L(o,n))||l.enumerable});return e};var I=(e,o,c)=>(c=e!=null?z(W(e)):{},E(o||!e||!e.__esModule?m(c,"default",{value:e,enumerable:!0}):c,e));var q=f((U,g)=>{"use strict";var J=s("postcss/lib/container"),R,d,i=class extends J{constructor(o){super({type:"document",...o}),this.nodes||(this.nodes=[])}toResult(o={}){return new R(new d,this,o).stringify()}};i.registerLazyResult=e=>{R=e};i.registerProcessor=e=>{d=e};g.exports=i;i.default=i});var S=f((X,A)=>{"use strict";var G=s("postcss/lib/css-syntax-error"),w=s("postcss/lib/declaration"),b=s("postcss/lib/lazy-result"),j=s("postcss/lib/container"),x=s("postcss/lib/processor"),M=s("postcss/lib/stringify"),V=s("postcss/lib/fromJSON"),y=q(),k=s("postcss/lib/warning"),C=s("postcss/lib/comment"),h=s("postcss/lib/at-rule"),B=s("postcss/lib/result"),F=s("postcss/lib/input"),H=s("postcss/lib/parse"),K=s("postcss/lib/list"),N=s("postcss/lib/rule"),P=s("postcss/lib/root"),Q=s("postcss/lib/node");function t(...e){return e.length===1&&Array.isArray(e[0])&&(e=e[0]),new x(e)}t.plugin=function(o,c){let l=!1;function n(...a){console&&console.warn&&!l&&(l=!0,console.warn(o+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),__Process$.env.LANG&&__Process$.env.LANG.startsWith("cn")&&console.warn(o+`: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));let u=c(...a);return u.postcssPlugin=o,u.postcssVersion=new x().version,u}let p;return Object.defineProperty(n,"postcss",{get(){return p||(p=n()),p}}),n.process=function(a,u,D){return t([n(D)]).process(a,u)},n};t.stringify=M;t.parse=H;t.fromJSON=V;t.list=K;t.comment=e=>new C(e);t.atRule=e=>new h(e);t.decl=e=>new w(e);t.rule=e=>new N(e);t.root=e=>new P(e);t.document=e=>new y(e);t.CssSyntaxError=G;t.Declaration=w;t.Container=j;t.Processor=x;t.Document=y;t.Comment=C;t.Warning=k;t.AtRule=h;t.Result=B;t.Input=F;t.Rule=N;t.Root=P;t.Node=Q;b.registerPostcss(t);A.exports=t;t.default=t});var r=I(S(),1),Y=r.default,Z=r.default.stringify,_=r.default.fromJSON,$=r.default.plugin,ee=r.default.parse,te=r.default.list,re=r.default.document,oe=r.default.comment,se=r.default.atRule,ne=r.default.rule,ce=r.default.decl,ie=r.default.root,le=r.default.CssSyntaxError,ue=r.default.Declaration,pe=r.default.Container,ae=r.default.Processor,xe=r.default.Document,me=r.default.Comment,fe=r.default.Warning,Re=r.default.AtRule,de=r.default.Result,ge=r.default.Input,qe=r.default.Rule,we=r.default.Root,ye=r.default.Node;export{Re as AtRule,me as Comment,pe as Container,le as CssSyntaxError,ue as Declaration,xe as Document,ge as Input,ye as Node,ae as Processor,de as Result,we as Root,qe as Rule,fe as Warning,se as atRule,oe as comment,ce as decl,Y as default,re as document,_ as fromJSON,te as list,ee as parse,$ as plugin,ie as root,ne as rule,Z as stringify};
//# sourceMappingURL=postcss.js.map