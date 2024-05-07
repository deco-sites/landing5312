/* esm.sh - esbuild bundle(preact-render-to-string@6.3.1) denonext production */
import{options as u,h as K,Fragment as b}from"preact";var q=/[\s\n\\/='"\0<>]/,z=/^(xlink|xmlns|xml)([A-Z])/,W=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,G=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,J=/["&<]/;function S(e){if(e.length===0||J.test(e)===!1)return e;for(var r=0,t=0,o="",l="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 60:l="&lt;";break;default:continue}t!==r&&(o+=e.slice(r,t)),o+=l,r=t+1}return t!==r&&(o+=e.slice(r,t)),o}var B={},Q=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),X=/[A-Z]/g;function Y(e){var r="";for(var t in e){var o=e[t];if(o!=null&&o!==""){var l=t[0]=="-"?t:B[t]||(B[t]=t.replace(X,"-$&").toLowerCase()),y=";";typeof o!="number"||l.startsWith("--")||Q.has(l)||(y="px;"),r=r+l+":"+o+y}}return r||void 0}var E,_,k,h,F=[],M=Array.isArray,Z=Object.assign;function j(e,r){var t=u.__s;u.__s=!0,E=u.__b,_=u.diffed,k=u.__r,h=u.unmount;var o=K(b,null);o.__k=[e];try{return m(e,r||R,!1,void 0,o)}finally{u.__c&&u.__c(e,F),u.__s=t,F.length=0}}function O(){this.__d=!0}var R={};function P(e,r){var t,o=e.type,l=!0;return e.__c?(l=!1,(t=e.__c).state=t.__s):t=new o(e.props,r),e.__c=t,t.__v=e,t.props=e.props,t.context=r,t.__d=!0,t.state==null&&(t.state=R),t.__s==null&&(t.__s=t.state),o.getDerivedStateFromProps?t.state=Z({},t.state,o.getDerivedStateFromProps(t.props,t.state)):l&&t.componentWillMount?(t.componentWillMount(),t.state=t.__s!==t.state?t.__s:t.state):!l&&t.componentWillUpdate&&t.componentWillUpdate(),k&&k(e),t.render(t.props,t.state,r)}function m(e,r,t,o,l){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":S(e+"");if(M(e)){var y="";l.__k=e;for(var A=0;A<e.length;A++){var L=e[A];L!=null&&typeof L!="boolean"&&(y+=m(L,r,t,o,l))}return y}if(e.constructor!==void 0)return"";e.__=l,E&&E(e);var T,n,p,i=e.type,c=e.props,w=r;if(typeof i=="function"){if(i===b){if(c.tpl){for(var C="",x=0;x<c.tpl.length;x++)if(C+=c.tpl[x],c.exprs&&x<c.exprs.length){var v=c.exprs[x];if(v==null)continue;typeof v!="object"||v.constructor!==void 0&&!M(v)?C+=v:C+=m(v,r,t,o,e)}return C}if(c.UNSTABLE_comment)return"<!--"+S(c.UNSTABLE_comment||"")+"-->";n=c.children}else{if((T=i.contextType)!=null){var H=r[T.__c];w=H?H.props.value:T.__}if(i.prototype&&typeof i.prototype.render=="function")n=P(e,w),p=e.__c;else{e.__c=p={__v:e,props:c,context:w,setState:O,forceUpdate:O,__d:!0,__h:[]};for(var U=0;p.__d&&U++<25;)p.__d=!1,k&&k(e),n=i.call(p,c,w);p.__d=!0}if(p.getChildContext!=null&&(r=Z({},r,p.getChildContext())),(i.getDerivedStateFromError||p.componentDidCatch)&&u.errorBoundaries){var D="";n=n!=null&&n.type===b&&n.key==null?n.props.children:n;try{return D=m(n,r,t,o,e)}catch($){return i.getDerivedStateFromError&&(p.__s=i.getDerivedStateFromError($)),p.componentDidCatch&&p.componentDidCatch($,{}),p.__d&&(n=P(e,r),(p=e.__c).getChildContext!=null&&(r=Z({},r,p.getChildContext())),D=m(n=n!=null&&n.type===b&&n.key==null?n.props.children:n,r,t,o,e)),D}finally{_&&_(e),e.__=void 0,h&&h(e)}}}var V=m(n=n!=null&&n.type===b&&n.key==null?n.props.children:n,r,t,o,e);return _&&_(e),e.__=void 0,h&&h(e),V}var f,d="<"+i,g="";for(var a in c){var s=c[a];switch(a){case"children":f=s;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in c)continue;a="for";break;case"className":if("class"in c)continue;a="class";break;case"defaultChecked":a="checked";break;case"defaultSelected":a="selected";break;case"defaultValue":case"value":switch(a="value",i){case"textarea":f=s;continue;case"select":o=s;continue;case"option":o!=s||"selected"in c||(d+=" selected")}break;case"dangerouslySetInnerHTML":g=s&&s.__html;continue;case"style":typeof s=="object"&&(s=Y(s));break;case"acceptCharset":a="accept-charset";break;case"httpEquiv":a="http-equiv";break;default:if(z.test(a))a=a.replace(z,"$1:$2").toLowerCase();else{if(q.test(a))continue;a[4]!=="-"&&a!=="draggable"||s==null?t?G.test(a)&&(a=a==="panose1"?"panose-1":a.replace(/([A-Z])/g,"-$1").toLowerCase()):W.test(a)&&(a=a.toLowerCase()):s+=""}}s!=null&&s!==!1&&typeof s!="function"&&(d=s===!0||s===""?d+" "+a:d+" "+a+'="'+S(s+"")+'"')}if(q.test(i))throw new Error(i+" is not a valid HTML tag name in "+d+">");return g||(typeof f=="string"?g=S(f):f!=null&&f!==!1&&f!==!0&&(g=m(f,r,i==="svg"||i!=="foreignObject"&&t,o,e))),_&&_(e),e.__=void 0,h&&h(e),!g&&N.has(i)?d+"/>":d+">"+g+"</"+i+">"}var N=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),ee=j,te=j,re=j;export{re as default,ee as render,te as renderToStaticMarkup,j as renderToString};
//# sourceMappingURL=preact-render-to-string.mjs.map