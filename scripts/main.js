function n(c,a,b,d){c.i.fa(c.V,a,b,d)}function r(c,a,b,d){c.i.m?n(c,a,b,d):c.i.Jb()._OnMessageFromDOM({type:"event",component:c.V,handler:a,dispatchOpts:d||null,data:b,responseId:null})}function t(c,a,b){c.i.g(c.V,a,b)}function aa(c,a){for(const [b,d]of a)t(c,b,d)}window.Ta=class{constructor(c,a){this.i=c;this.V=a}Qa(){}};window.sc=class{constructor(){}};"use strict";class ba{constructor(c){this.W=c;this.Aa=!1;this.Da=!0;this.X=this.v=this.Ma=-1}}
function ca(c,a){const b=a.elementId,d=c.Sa(a),e=new ba(d);c.F.set(b,e);d.style.boxSizing="border-box";d.style.display="none";e.Da=!!a.isVisible;d.addEventListener("focus",()=>{u(c,"elem-focused",b)});d.addEventListener("blur",()=>{u(c,"elem-blurred",b)});const f=a.htmlIndex;e.Ma=f;e.X=a.htmlZIndex;c.J&&(a=c.i.ra(f),e.v=a,c.i.ea(a).appendChild(d))}function v(c,a,b){t(c,a,d=>{const e=w(c,d.elementId);return b(e,d)})}
function w(c,a){c=c.F.get(a);if(!c)throw Error(`no element with id ${a}`);return c.W}function u(c,a,b){var d;d||(d={});d.elementId=b;n(c,a,d)}
window.qa=class extends self.Ta{constructor(c){super(c,"iframe");this.F=new Map;this.J=!0;aa(this,[["create",a=>ca(this,a)],["destroy",a=>{a=a.elementId;const b=w(this,a);this.Ua(b);this.J&&b.parentElement.removeChild(b);this.F.delete(a)}],["set-visible",a=>{if(this.J){var b=this.F.get(a.elementId),d=b.W;b.Aa?d.style.display=a.isVisible?"":"none":b.Da=!!a.isVisible}}],["update-position",a=>{if(this.J){var b=this.F.get(a.elementId),d=b.W,e=this.i;d.style.left=a.left+"px";d.style.top=a.top+"px";d.style.width=
a.width+"px";d.style.height=a.height+"px";var f=a.fontSize;null!==f&&(d.style.fontSize=f+"em");f=a.htmlIndex;b.Ma=f;f=e.ra(f);f!==b.v&&(d.remove(),e.ea(f).appendChild(d),b.v=f,e.xa());a=a.htmlZIndex;a!==b.X&&(b.X=a,e.xa());b.Aa||(b.Aa=!0,b.Da&&(d.style.display=""))}}],["update-state",a=>{w(this,a.elementId);this.Xa()}],["focus",a=>{const b=w(this,a.elementId);a.focus?b.focus():b.blur()}],["set-css-style",a=>{const b=w(this,a.elementId),d=a.prop;a=a.val;d.startsWith("--")?b.style.setProperty(d,a):
b.style[d]=a}],["set-attribute",a=>{w(this,a.elementId).setAttribute(a.name,a.val)}],["remove-attribute",a=>{w(this,a.elementId).removeAttribute(a.name)}]]);v(this,"get-element",a=>a)}Sa(){throw Error("required override");}Ua(){}Xa(){throw Error("required override");}};"use strict";const x=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),y=/android/i.test(navigator.userAgent);let z=0;
function A(c){const a=document.createElement("script");a.async=!1;a.type="module";return c.ic?new Promise(b=>{const d="c3_resolve_"+z;++z;self[d]=b;a.textContent=c.mc+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((b,d)=>{a.onload=b;a.onerror=d;a.src=c;document.head.appendChild(a)})}
async function da(){if(!navigator.userActivation||"undefined"===typeof OffscreenCanvas)return!1;try{let c=!1;const a=new Worker(URL.createObjectURL(new Blob(['\n\tself.addEventListener("message", () =>\n\t{\n\t\ttry {\n\t\t\tconst offscreenCanvas = new OffscreenCanvas(32, 32);\n\t\t\tconst gl = offscreenCanvas.getContext("webgl");\n\t\t\tself.postMessage(!!gl);\n\t\t}\n\t\tcatch (err)\n\t\t{\n\t\t\tconsole.warn("Feature detection worker error:", err);\n\t\t\tself.postMessage(false);\n\t\t}\n\t});'],{type:"text/javascript"})),
{get type(){c=!0}}),b=await new Promise(d=>{a.addEventListener("message",e=>{a.terminate();d(e.data)});a.postMessage("")});return c&&b}catch(c){return console.warn("Error feature detecting worker mode: ",c),!1}}let B=new Audio;
const ea={"audio/webm; codecs=opus":!!B.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!B.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!B.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!B.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!B.canPlayType("audio/mp4"),"audio/mpeg":!!B.canPlayType("audio/mpeg")};B=null;async function fa(c){c=await ha(c);return(new TextDecoder("utf-8")).decode(c)}
function ha(c){return new Promise((a,b)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>b(e);d.readAsArrayBuffer(c)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let ia=0;const ja=[];self.runOnStartup=function(c){if("function"!==typeof c)throw Error("runOnStartup called without a function");ja.push(c)};const ka=new Set(["cordova","playable-ad","instant-games"]);let la=!1;
window.sa=class c{constructor(a){this.m=a.oc;this.$=null;this.l="";this.M=a.lc;this.ca={};this.Fa=this.O=null;this.K=[];this.G=null;this.ob=!0;this.j=[];this.Ja=[];this.Ka=!1;this.qb=()=>this.Hb();this.nb=!1;this.Y=null;this.L=-1;this.dc=()=>this.Sb();this.aa=new Set;this.Na=null;this.rb=[];this.h=a.sb;this.Ca="file"===location.protocol.substr(0,4);if("playable-ad"===this.h||"instant-games"===this.h)this.m=!1;if("cordova"===this.h&&this.m&&y){const b=/Chrome\/(\d+)/i.exec(navigator.userAgent);b&&
90<=parseInt(b[1],10)||(this.m=!1)}this.H()?self.chrome.webview.addEventListener("message",b=>this.fb(b.data)):"macos-wkwebview"===this.h&&(self.C3WrapperOnMessage=b=>this.fb(b));this.ja=this.A=null;"html5"!==this.h||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.g("canvas","update-size",b=>this.Wb(b));this.g("canvas","set-html-layer-count",
b=>this._OnSetHTMLLayerCount(b));this.g("canvas","cleanup-html-layers",()=>this.Nb());this.g("runtime","cordova-fetch-local-file",b=>this.Ob(b));this.g("runtime","create-job-worker",()=>this.Pb());this.g("runtime","send-wrapper-extension-message",b=>this.Vb(b));"cordova"===this.h?document.addEventListener("deviceready",()=>this.cb(a)):this.cb(a)}ub(){return this.j[0].canvas}ra(a){return Math.min(a,this.j.length-1)}ea(a){if(0>a||a>=this.j.length)throw new RangeError("invalid canvas layer");return this.j[a].da}yb(){return x&&
"cordova"===this.h}S(){const a=navigator.userAgent;return x&&ka.has(this.h)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}wb(){return y}Va(){return y&&ka.has(this.h)}Wa(){return"windows-webview2"===this.h||!!("preview"===this.h&&window.chrome&&window.chrome.webview&&window.chrome.webview.postMessage)}H(){return this.Wa()||"xbox-uwp-webview2"===this.h}async cb(a){this.m&&!await da()&&(this.m=!1);"macos-wkwebview"===this.h?this.T({type:"ready"}):this.H()&&(this.Zb(),this.rb=(await this.Mb()).registeredComponentIds);
if("playable-ad"===this.h){this.A=self.c3_base64files;this.ja={};await this.Eb();for(let d=0,e=a.P.length;d<e;++d){var b=a.P[d];this.ja.hasOwnProperty(b)?a.P[d]={ic:!0,mc:this.ja[b]}:this.A.hasOwnProperty(b)&&(a.P[d]=URL.createObjectURL(this.A[b]))}a.na=[]}if("nwjs"===this.h&&self.nw&&self.nw.App.manifest["c3-steam-mode"]){let d=0;this.Ya(()=>{d++;document.body.style.opacity=0===d%2?"1":"0.999"})}a.kc?this.l=a.kc:(b=location.origin,this.l=("null"===b?"file:///":b)+location.pathname,b=this.l.lastIndexOf("/"),
-1!==b&&(this.l=this.l.substr(0,b+1)));a.qc&&(this.ca=a.qc);b=new MessageChannel;this.$=b.port1;this.$.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Rb(d));this.Y=new self.zb(this);await ma(this.Y);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",
d)}this.m?await this.Lb(a,b.port2):await this.Kb(a,b.port2)}ua(a){a=this.ca.hasOwnProperty(a)?this.ca[a]:a.endsWith("/workermain.js")&&this.ca.hasOwnProperty("workermain.js")?this.ca["workermain.js"]:"playable-ad"===this.h&&this.A.hasOwnProperty(a)?this.A[a]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async pa(a,b,d){if(a.startsWith("blob:"))return new Worker(a,d);if("cordova"===this.h&&this.Ca)return a=await this.oa(d.hc?a:this.M+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),
d);a=new URL(a,b);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}u(){return Math.max(window.innerWidth,1)}o(){return Math.max(window.innerHeight,1)}bb(a){var b=this.l,d=location.href,e=this.u(),f=this.o(),h=window.devicePixelRatio,g=c.R(),k=a.vc,l=window.cr_previewImageBlobs||this.A,m=window.cr_previewProjectFileBlobs,p=window.cr_previewProjectFiles,q=window.cr_swClientId||
"";a=a.sb;var xa=(new URLSearchParams(self.location.search)).has("debug"),K=this.Y;return{runtimeBaseUrl:b,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:h,isFullscreen:g,projectData:k,previewImageBlobs:l,previewProjectFileBlobs:m,previewProjectFileSWUrls:p,swClientId:q,exportType:a,isDebug:xa,ife:!!self.uc,jobScheduler:{inputPort:K.Ba,outputPort:K.Ia,maxNumWorkers:K.bc},supportedAudioFormats:ea,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.M+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||
this.M+"opus.wasm.wasm",isFileProtocol:this.Ca,isiOSCordova:this.yb(),isiOSWebView:this.S(),isWindowsWebView2:this.Wa(),isAnyWebView2Wrapper:this.H(),wrapperComponentIds:this.rb,isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Lb(a,b){const d=this.ua(a.pc);"preview"===this.h?(this.O=new Worker("previewworker.js",{type:"module",name:"Runtime"}),await new Promise((l,m)=>{const p=q=>{this.O.removeEventListener("message",p);q.data&&"ok"===q.data.type?l():m()};this.O.addEventListener("message",
p);this.O.postMessage({type:"construct-worker-init","import":(new URL(d,this.l)).toString()})})):this.O=await this.pa(d,this.l,{type:"module",name:"Runtime",hc:!0});const e=document.createElement("canvas");e.style.display="none";const f=e.transferControlToOffscreen();document.body.appendChild(e);const h=document.createElement("div");h.className="c3htmlwrap";document.body.appendChild(h);this.j.push({canvas:e,da:h});window.c3canvas=e;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();
let g=a.na||[],k=a.P;g=await Promise.all(g.map(l=>this.I(l)));k=await Promise.all(k.map(l=>this.I(l)));if("cordova"===this.h)for(let l=0,m=a.ma.length;l<m;++l){const p=a.ma[l],q=p[0];if(q===a.Oa||"scriptsInEvents.js"===q||q.endsWith("/scriptsInEvents.js"))p[1]=await this.I(q)}this.O.postMessage(Object.assign(this.bb(a),{type:"init-runtime",isInWorker:!0,messagePort:b,canvas:f,workerDependencyScripts:g,engineScripts:k,projectScripts:a.ma,mainProjectScript:a.Oa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[b,f,...na(this.Y)]);this.K=E.map(l=>new l(this));this.ab();H(e);I(h);oa(this.G);self.c3_callFunction=(l,m)=>{var p=this.G;return p.i.Ab(p.V,{name:l,params:m})};"preview"===this.h&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async Kb(a,b){const d=document.createElement("canvas");d.style.display="none";document.body.appendChild(d);var e=document.createElement("div");e.className="c3htmlwrap";document.body.appendChild(e);this.j.push({canvas:d,da:e});window.c3canvas=d;
self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.K=E.map(g=>new g(this));this.ab();H(d);I(e);e=a.P.map(g=>"string"===typeof g?(new URL(g,this.l)).toString():g);if(Array.isArray(a.na)){var f=[...a.na].map(g=>g instanceof Blob?URL.createObjectURL(g):g);e.unshift(...f)}e=await Promise.all(e.map(g=>this.I(g)));await Promise.all(e.map(g=>A(g)));e=self.C3_ProjectScriptsStatus;f=a.Oa;const h=a.ma;for(let [g,k]of h)if(k||(k=g),g===f)try{k=await this.I(k),await A(k),"preview"!==this.h||
e[g]||this.gb(g,"main script did not run to completion")}catch(l){this.gb(g,l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))k=await this.I(k),await A(k);"preview"===this.h&&"object"!==typeof self.rc.tc?(this.ha(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.bb(a),{isInWorker:!1,
messagePort:b,canvas:d,runOnStartupFunctions:ja}),oa(this.G),this.eb(),this.Fa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Fa,a))}gb(a,b){this.ha();console.error(`[Preview] Failed to load project main script (${a}): `,b);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}eb(){this.ha()}ha(){const a=window.cr_previewLoadingElem;a&&(a.parentElement.removeChild(a),window.cr_previewLoadingElem=
null)}async Pb(){const a=await pa(this.Y);return{outputPort:a,transferables:[a]}}Wb(a){if(!this.nb){var b=a.styleWidth+"px",d=a.styleHeight+"px",e=a.marginLeft+"px",f=a.marginTop+"px";for(const {canvas:h,da:g}of this.j)h.style.width=b,h.style.height=d,h.style.marginLeft=e,h.style.marginTop=f,g.style.width=b,g.style.height=d,g.style.marginLeft=e,g.style.marginTop=f,this.ob&&(h.style.display="",g.style.display="");document.documentElement.style.setProperty("--construct-scale",a.displayScale);this.ob=
!1}}_OnSetHTMLLayerCount(a){var b=a.count,d=a.immediate,e=a.styleWidth+"px",f=a.styleHeight+"px";const h=a.marginLeft+"px",g=a.marginTop+"px";a=[];const k=[];if(b<this.j.length)for(;this.j.length>b;){const {canvas:l,da:m}=this.j.pop();m.remove();this.m&&!d?this.Ja.push(l):l.remove()}else if(b>this.j.length)for(let l=0,m=b-this.j.length;l<m;++l)b=document.createElement("canvas"),b.classList.add("c3overlay"),this.m?(d=b.transferControlToOffscreen(),a.push(d),k.push(d)):a.push(b),document.body.appendChild(b),
d=document.createElement("div"),d.classList.add("c3htmlwrap","c3overlay"),document.body.appendChild(d),b.style.width=e,b.style.height=f,b.style.marginLeft=h,b.style.marginTop=g,d.style.width=e,d.style.height=f,d.style.marginLeft=h,d.style.marginTop=g,H(b),I(d),this.j.push({canvas:b,da:d});for(const l of this.K)if(l instanceof window.qa&&l.J)for(const m of l.F.values())e=l.i.ra(m.Ma),f=m.v,-1!==e&&-1!==f&&e!==f&&(f=m.W,f.remove(),l.i.ea(e).appendChild(f),m.v=e);this.xa();return{addedCanvases:a,transferables:k}}Nb(){for(const a of this.Ja)a.remove();
this.Ja.length=0}xa(){this.Ka||(this.Ka=!0,this.Ya(this.qb))}Hb(){this.Yb(this.qb);this.Ka=!1;let a=[];for(var b of this.K)if(b instanceof window.qa){var d=b.J?[...b.F.values()]:null;d&&a.push(...d)}a.sort((h,g)=>{const k=h.v,l=g.v;return k!==l?k-l:h.X-g.X});let e=d=b=0,f=a.length;for(;e<f;++e){const h=a[e];h.v!==b&&(this.$a(b,a.slice(d,e)),b=h.v,d=e)}d<e&&this.$a(b,a.slice(d,e))}$a(a,b){if(!(1>=b.length||a>=this.j.length)){b=b.map(k=>k.W);var d=new Set(b);a=this.ea(a);for(var e=Array.from(a.children).filter(k=>
d.has(k)),f=0,h=Math.min(b.length,e.length);f<h&&b[f]===e[f];++f);for(var g=f;g<h;++g)e[g].remove();for(g=f;g<h;++g)a.appendChild(b[g])}}Jb(){if(this.m)throw Error("not available in worker mode");return this.Fa}fa(a,b,d,e){this.$.postMessage({type:"event",component:a,handler:b,dispatchOpts:e||null,data:d,responseId:null},void 0)}Ab(a,b){const d=ia++,e=new Promise((f,h)=>{G.set(d,{resolve:f,reject:h})});this.$.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:b,
responseId:d},void 0);return e}_OnMessageFromRuntime(a){const b=a.type;if("event"===b)return this.Qb(a);if("result"===b)this.Tb(a);else if("runtime-ready"===b)this.Ub();else if("alert-error"===b)this.ha(),alert(a.message);else if("creating-runtime"===b)this.eb();else throw Error(`unknown message '${b}'`);}Qb(a){const b=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=F.get(b))if(a=a.get(d)){var h=null;try{h=a(e)}catch(g){console.error(`Exception in '${b}' handler '${d}':`,g);null!==f&&this.ga(f,
!1,""+g);return}if(null===f)return h;h&&h.then?h.then(g=>this.ga(f,!0,g)).catch(g=>{console.error(`Rejection from '${b}' handler '${d}':`,g);this.ga(f,!1,""+g)}):this.ga(f,!0,h)}else console.warn(`[DOM] No handler '${d}' for component '${b}'`);else console.warn(`[DOM] No event handlers for component '${b}'`)}ga(a,b,d){let e;d&&d.transferables&&(e=d.transferables);this.$.postMessage({type:"result",responseId:a,isOk:b,result:d},e)}Tb(a){const b=a.responseId,d=a.isOk;a=a.result;const e=G.get(b);d?e.resolve(a):
e.reject(a);G.delete(b)}g(a,b,d){let e=F.get(a);e||(e=new Map,F.set(a,e));if(e.has(b))throw Error(`[DOM] Component '${a}' already has handler '${b}'`);e.set(b,d)}static Pa(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}ab(){for(const a of this.K)if("runtime"===a.V){this.G=a;return}throw Error("cannot find runtime DOM handler");}Rb(a){this.fa("debugger","message",a)}Ub(){for(const a of this.K)a.Qa()}static R(){return!!(document.fullscreenElement||document.webkitFullscreenElement||
document.mozFullScreenElement||la)}static hb(a){la=!!a}Ya(a){this.aa.add(a);this.wa()}Yb(a){this.aa.delete(a);0===this.aa.size&&this.Za()}wa(){-1===this.L&&0<this.aa.size&&(this.L=requestAnimationFrame(this.dc))}Za(){-1!==this.L&&(cancelAnimationFrame(this.L),this.L=-1)}Sb(){this.L=-1;for(const a of this.aa)a();this.wa()}va(){this.G.va()}Bb(){this.nb=!0}vb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}xb(a){return!this.vb(a)}async I(a){return"cordova"===
this.h&&(a.startsWith("file:")||this.Ca&&this.xb(a))?(a.startsWith(this.l)&&(a=a.substr(this.l.length)),a=await this.oa(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Ob(a){const b=a.filename;switch(a.as){case "text":return await this.tb(b);case "buffer":return await this.oa(b);default:throw Error("unsupported type");}}Ra(a){const b=window.cordova.file.applicationDirectory+"www/"+a;return new Promise((d,e)=>{window.resolveLocalFileSystemURL(b,f=>{f.file(d,e)},e)})}async tb(a){a=
await this.Ra(a);return await fa(a)}ta(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.Fb(a.filename,a.nc,a.fc)}}oa(a){return new Promise((b,d)=>{C.push({filename:a,nc:e=>{D--;this.ta();b(e)},fc:e=>{D--;this.ta();d(e)}});this.ta()})}async Fb(a,b,d){try{const e=await this.Ra(a),f=await ha(e);b(f)}catch(e){d(e)}}fb(a){if("entered-fullscreen"===a)c.hb(!0),J(this.G);else if("exited-fullscreen"===a)c.hb(!1),J(this.G);else if("object"===typeof a){const b=a.type;"wrapper-init-response"===b?(this.Na(a),
this.Na=null):"extension-message"===b?this.fa("runtime","wrapper-extension-message",a):console.warn("Unknown wrapper message: ",a)}else console.warn("Unknown wrapper message: ",a)}Vb(a){this.T({type:"extension-message",componentId:a.componentId,messageId:a.messageId,params:a.params||[],asyncId:a.asyncId})}T(a){this.H()?window.chrome.webview.postMessage(JSON.stringify(a)):"macos-wkwebview"===this.h&&window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a))}Zb(){window.moveTo=(a,b)=>{this.T({type:"set-window-position",
windowX:Math.ceil(a),windowY:Math.ceil(b)})};window.resizeTo=(a,b)=>{this.T({type:"set-window-size",windowWidth:Math.ceil(a),windowHeight:Math.ceil(b)})}}Mb(){return this.H()?new Promise(a=>{this.Na=a;this.T({type:"wrapper-init"})}):Promise.resolve()}async Eb(){const a=[];for(const [b,d]of Object.entries(this.A))a.push(this.Db(b,d));await Promise.all(a)}async Db(a,b){if("object"===typeof b)this.A[a]=new Blob([b.str],{type:b.type}),this.ja[a]=b.str;else{let d=await this.Ib(b);d||(d=this.Gb(b));this.A[a]=
d}}async Ib(a){try{return await (await fetch(a)).blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}Gb(a){a=this.Xb(a);return this.Cb(a.data,a.jc)}Xb(a){var b=a.indexOf(",");if(0>b)throw new URIError("expected comma in data: uri");var d=a.substring(b+1);b=a.substring(5,b).split(";");a=b[0]||"";const e=b[2];d="base64"===
b[1]||"base64"===e?atob(d):decodeURIComponent(d);return{jc:a,data:d}}Cb(a,b){var d=a.length;let e=d>>2,f=new Uint8Array(d),h=new Uint32Array(f.buffer,0,e),g,k;for(k=g=0;g<e;++g)h[g]=a.charCodeAt(k++)|a.charCodeAt(k++)<<8|a.charCodeAt(k++)<<16|a.charCodeAt(k++)<<24;for(d&=3;d--;)f[k]=a.charCodeAt(k),++k;return new Blob([f],{type:b})}};"use strict";
const L=self.sa,ra=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),M={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},N={dispatchUserScriptEvent:!0},O={dispatchRuntimeEvent:!0};function ta(c){return new Promise((a,b)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>b(e);d.rel="stylesheet";d.href=c;document.head.appendChild(d)})}function ua(c){return new Promise((a,b)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>b(e);d.src=c})}
async function P(c){c=URL.createObjectURL(c);try{return await ua(c)}finally{URL.revokeObjectURL(c)}}function va(c){return new Promise((a,b)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>b(e);d.readAsText(c)})}
async function wa(c,a,b){if(!/firefox/i.test(navigator.userAgent))return await P(c);var d=await va(c);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),h=e.getAttribute("height");if(!f.includes("%")&&!h.includes("%"))return await P(c)}e.setAttribute("width",a+"px");e.setAttribute("height",b+"px");d=(new XMLSerializer).serializeToString(d);c=new Blob([d],{type:"image/svg+xml"});return await P(c)}
function Q(c){do{if(c.parentNode&&c.hasAttribute("contenteditable"))return!0;c=c.parentNode}while(c);return!1}const ya=new Set(["input","textarea","datalist","select"]),za=new Set(["canvas","body","html"]);function R(c){c.target.tagName&&za.has(c.target.tagName.toLowerCase())&&c.preventDefault()}function S(c){c.target.tagName&&c.target.classList.contains("c3htmlwrap")&&c.preventDefault()}function Aa(c){(c.metaKey||c.ctrlKey)&&c.preventDefault()}
self.C3_GetSvgImageSize=async function(c){c=await P(c);if(0<c.width&&0<c.height)return[c.width,c.height];c.style.position="absolute";c.style.left="0px";c.style.top="0px";c.style.visibility="hidden";document.body.appendChild(c);const a=c.getBoundingClientRect();document.body.removeChild(c);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(c,a,b,d,e){c=await wa(c,a,b);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(c,0,0,a,b);return f};
let T=!1;document.addEventListener("pause",()=>T=!0);document.addEventListener("resume",()=>T=!1);function H(c){c.addEventListener("selectstart",R);c.addEventListener("gesturehold",R);c.addEventListener("pointerdown",R)}function I(c){c.addEventListener("selectstart",S);c.addEventListener("gesturehold",S);c.addEventListener("touchstart",S)}function oa(c){c.lb=!0;c.Ea=c.i.u();c.Z=c.i.o()}
function J(c){if(!c.s){var a=L.R();a&&"any"!==c.La&&Ba(c);n(c,"fullscreenchange",{isFullscreen:a,innerWidth:c.u(),innerHeight:c.o()})}}async function Ca(c){await Promise.all(c.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function Da(c){var a=c.imageBitmapOpts;c=await self.C3_RasterSvgImageBlob(c.blob,c.imageWidth,c.imageHeight,c.surfaceWidth,c.surfaceHeight);a=a?await createImageBitmap(c,a):await createImageBitmap(c);return{imageBitmap:a,transferables:[a]}}async function Ea(c){return await self.C3_GetSvgImageSize(c.blob)}function Fa(c){window.c3_postToMessagePort&&(c.from="runtime",window.c3_postToMessagePort(c))}
function Ga(c){self.setTimeout(()=>{c.kb=!0},1E3);"cordova"===c.i.h?(document.addEventListener("pause",()=>U(c,!0)),document.addEventListener("resume",()=>U(c,!1))):document.addEventListener("visibilitychange",()=>U(c,"hidden"===document.visibilityState));c.ka=!("hidden"!==document.visibilityState&&!T);return{isSuspended:c.ka}}
function Ha(c){c.jb||(c.jb=!0,window.addEventListener("deviceorientation",a=>{c.s||n(c,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},M)}),window.addEventListener("deviceorientationabsolute",a=>{c.s||n(c,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},M)}))}
function Ia(c){c.ib||(c.ib=!0,window.addEventListener("devicemotion",a=>{if(!c.s){var b=null,d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});n(c,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},M)}}))}async function Ja(c){await ta(c.url)}
function Ka(c,a){c.mb=a.message;-1===c.za&&(c.za=setTimeout(()=>{c.za=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=c.mb)},250))}function V(c,a){console.warn("[Construct] Fullscreen request failed: ",a);n(c,"fullscreenerror",{isFullscreen:L.R(),innerWidth:c.u(),innerHeight:c.o()})}
function U(c,a){c.ka!==a&&((c.ka=a)?c.i.Za():c.i.wa(),n(c,"visibilitychange",{hidden:a}),!a&&c.i.S()&&(c=()=>{document.scrollingElement.scrollTop=0;document.scrollingElement.scrollLeft=0},setTimeout(c,50),setTimeout(c,100),setTimeout(c,250),setTimeout(c,500)))}
function La(c,a,b){"Backspace"===b.key&&R(b);if(c.i.H()){var d=["r","p","f","g","u"];(["F3","F5","F7"].includes(b.key)||b.ctrlKey&&d.includes(b.key))&&b.preventDefault()}c.s||(d=ra.get(b.code)||b.code,r(c,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},M))}
function W(c,a,b,d){c.s||b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents||r(c,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY+c.C,pageX:b.pageX,pageY:b.pageY+c.C,movementX:b.movementX||0,movementY:b.movementY||0,timeStamp:b.timeStamp},d)}
function X(c,a,b){if(!c.s){var d=0;"mouse"===b.pointerType&&(d=c.Ha);r(c,a,{pointerId:b.pointerId,pointerType:b.pointerType,button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY+c.C,pageX:b.pageX,pageY:b.pageY+c.C,movementX:b.movementX||0,movementY:b.movementY||0,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},M);"mouse"===b.pointerType&&(c.Ha=
b.buttons)}}function Y(c,a,b){document.body.style.position="";document.body.style.overflow="";document.body.style.transform="";c.C=0;if(0<b){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-b)/2,a>b&&(a=b),0>a&&(a=0),0<a&&(document.body.style.position="absolute",document.body.style.overflow="visible",document.body.style.transform=`translateY(${-a}px)`,c.C=a))}}
function Ma(c,a,b,d){const e=c.u(),f=c.o();c.N=-1;e!=a||f!=b?n(c,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:L.R()}):10>d&&Na(c,e,f,d+1)}function Na(c,a,b,d){-1!==c.N&&clearTimeout(c.N);c.N=setTimeout(()=>Ma(c,a,b,d),48)}
function Ba(c){c=c.La;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}function Oa(c){return!c||c===document||c===window||c===document.body||"canvas"===c.tagName.toLowerCase()}
L.Pa(class extends self.Ta{constructor(c){super(c,"runtime");this.lb=!1;this.N=-1;this.La="any";this.ka=this.ib=this.jb=!1;this.la=document.createElement("div");this.la.className="c3-screen-reader-text";this.la.setAttribute("aria-live","polite");document.body.appendChild(this.la);this.D=null;this.s=!1;this.mb="";this.za=-1;this.kb=!1;this.Ea=c.u();this.Z=c.o();this.C=this.ba=0;c.g("runtime","invoke-download",b=>{const d=b.url;b=b.filename;const e=document.createElement("a"),f=document.body;e.textContent=
b;e.href=d;e.download=b;f.appendChild(e);e.click();f.removeChild(e)});c.g("runtime","load-webfonts",b=>Ca(b));c.g("runtime","raster-svg-image",b=>Da(b));c.g("runtime","get-svg-image-size",b=>Ea(b));c.g("runtime","set-target-orientation",b=>{this.La=b.targetOrientation});c.g("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});c.g("runtime","post-to-debugger",b=>Fa(b));c.g("runtime","go-to-script",b=>Fa(b));c.g("runtime","before-start-ticking",()=>Ga(this));c.g("runtime","debug-highlight",
b=>{if(b.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var d=this.D;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.D&&(this.D.style.display="none")});c.g("runtime","enable-device-orientation",()=>Ha(this));c.g("runtime","enable-device-motion",()=>Ia(this));c.g("runtime","add-stylesheet",b=>Ja(b));c.g("runtime","script-create-worker",
b=>{const d=b.port2;(new Worker(b.url,b.opts)).postMessage({type:"construct-worker-init",port2:d},[d])});c.g("runtime","alert",b=>{alert(b.message)});c.g("runtime","screen-reader-text",b=>{var d=b.type;"create"===d?(d=document.createElement("p"),d.id="c3-sr-"+b.id,d.textContent=b.text,this.la.appendChild(d)):"update"===d?(d=document.getElementById("c3-sr-"+b.id))?d.textContent=b.text:console.warn(`[Construct] Missing screen reader text with id ${b.id}`):"release"===d?(d=document.getElementById("c3-sr-"+
b.id))?d.remove():console.warn(`[Construct] Missing screen reader text with id ${b.id}`):console.warn(`[Construct] Unknown screen reader text update '${d}'`)});c.g("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});c.g("runtime","set-exporting-to-video",b=>{this.s=!0;const d=document.createElement("h1");d.id="exportToVideoMessage";d.textContent=b.message;document.body.prepend(d);document.body.classList.add("exportingToVideo");
this.i.ub().style.display="";this.i.Bb()});c.g("runtime","export-to-video-progress",b=>Ka(this,b));c.g("runtime","exported-to-video",b=>{window.ec({type:"exported-video",arrayBuffer:b.arrayBuffer,contentType:b.contentType,time:b.time})});c.g("runtime","exported-to-image-sequence",b=>{window.ec({type:"exported-image-sequence",blobArr:b.blobArr,time:b.time,gif:b.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const d=b.target;a.has(d.tagName.toLowerCase())||
Q(d)||b.preventDefault()});window.addEventListener("selectstart",R);window.addEventListener("gesturehold",R);window.addEventListener("touchstart",R,{passive:!1});window.addEventListener("pointerdown",R,{passive:!1});this.Ha=0;window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()});window.addEventListener("mousewheel",Aa,{passive:!1});window.addEventListener("wheel",Aa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.s&&this.lb){var b=this.u();var d=this.o();if(this.i.Va()){if(this.kb){if(this.Ea===
b&&d<this.Z){this.ba=this.Z-d;Y(this,this.Z,this.ba);b=void 0;break a}0<this.ba&&(this.ba=0,Y(this,d,this.ba))}this.Ea=b;this.Z=d}n(this,"window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:L.R()});this.i.S()&&(-1!==this.N&&clearTimeout(this.N),Ma(this,b,d,0))}b=void 0}return b});window.addEventListener("fullscreenchange",()=>J(this));window.addEventListener("webkitfullscreenchange",()=>J(this));window.addEventListener("mozfullscreenchange",()=>J(this));
window.addEventListener("fullscreenerror",b=>V(this,b));window.addEventListener("webkitfullscreenerror",b=>V(this,b));window.addEventListener("mozfullscreenerror",b=>V(this,b));if(c.S()){if(window.visualViewport){let b=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>b&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0);b=d})}else window.addEventListener("focusout",()=>{{const e=document.activeElement;if(e){var b=e.tagName.toLowerCase();
var d=new Set("email number password search tel text url".split(" "));b="textarea"===b?!0:"input"===b?d.has(e.type.toLowerCase()||"text"):Q(e)}else b=!1}b||(document.scrollingElement.scrollTop=0)});document.documentElement.setAttribute("ioswebview","")}this.Ga=new Set;this.cc=new WeakSet;this.ac=!1}Qa(){window.addEventListener("focus",()=>{n(this,"window-focus",null,O)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(b){a=!1}n(this,"window-blur",
{parentHasFocus:a},O);this.Ha=0});window.addEventListener("focusin",a=>{a=a.target;(ya.has(a.tagName.toLowerCase())||Q(a))&&n(this,"keyboard-blur",null,O)});window.addEventListener("keydown",a=>La(this,"keydown",a));window.addEventListener("keyup",a=>La(this,"keyup",a));window.addEventListener("mousedown",a=>W(this,"mousedown",a,N));window.addEventListener("mousemove",a=>W(this,"mousemove",a,N));window.addEventListener("mouseup",a=>W(this,"mouseup",a,N));window.addEventListener("dblclick",a=>W(this,
"dblclick",a,M));window.addEventListener("wheel",a=>{this.s||n(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.C,pageX:a.pageX,pageY:a.pageY+this.C,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},M)});window.addEventListener("pointerdown",a=>{window!==window.top&&window.focus();Oa(a.target)&&document.activeElement&&!Oa(document.activeElement)&&document.activeElement.blur();X(this,"pointerdown",a)});this.i.m&&"undefined"!==typeof window.onpointerrawupdate&&
self===self.top?window.addEventListener("pointerrawupdate",a=>{X(this,"pointermove",a)}):window.addEventListener("pointermove",a=>X(this,"pointermove",a));window.addEventListener("pointerup",a=>X(this,"pointerup",a));window.addEventListener("pointercancel",a=>X(this,"pointercancel",a));const c=()=>this.va();window.addEventListener("pointerup",c,!0);window.addEventListener("touchend",c,!0);window.addEventListener("click",c,!0);window.addEventListener("keydown",c,!0);window.addEventListener("gamepadconnected",
c,!0);this.i.wb()&&!this.i.Va()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Y(this,this.o(),navigator.virtualKeyboard.boundingRect.height)}));this.i.S()&&(document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0)}u(){return this.i.u()}o(){return this.i.o()}va(){var c=[...this.Ga];this.Ga.clear();if(!this.ac)for(const a of c)(c=a.play())&&c.catch(()=>{this.cc.has(a)||this.Ga.add(a)})}});
"use strict";async function ma(c){if(c.$b)throw Error("already initialised");c.$b=!0;var a=c.B.ua(("playable-ad"===c.B.h?c.B.M:"")+"dispatchworker.js");c.ya=await c.B.pa(a,c.U,{name:"DispatchWorker"});a=new MessageChannel;c.Ba=a.port1;c.ya.postMessage({type:"_init","in-port":a.port2},[a.port2]);c.Ia=await pa(c)}function na(c){return[c.Ba,c.Ia]}
async function pa(c){const a=c.pb.length;var b=c.B.ua(("playable-ad"===c.B.h?c.B.M:"")+"jobworker.js");b=await c.B.pa(b,c.U,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;c.ya.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);b.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);c.pb.push(b);return e.port1}
self.zb=class{constructor(c){this.B=c;this.U=c.l;this.U="preview"===c.h?this.U+"workers/":this.U+c.M;this.bc=Math.min(navigator.hardwareConcurrency||2,16);this.ya=null;this.pb=[];this.Ia=this.Ba=null}};"use strict";window.C3_Is_Supported&&(window.c3_runtimeInterface=new self.sa({oc:!0,pc:"workermain.js",P:["scripts/c3runtime.js"],ma:[],Oa:"",lc:"scripts/",na:[],sb:"html5"}));"use strict";function Pa(c,a,b){Z(c,a,URL.createObjectURL(new Blob([b.html],{type:"text/html"})));c.ia=!0}
function Z(c,a,b){a.src&&a.src.startsWith("blob:")&&c.ia&&URL.revokeObjectURL(a.src);a.src=b}
self.sa.Pa(class extends self.qa{constructor(c){super(c);this.ia=!1;v(this,"navigate-url",(a,b)=>{Z(this,a,b.url);this.ia=!1});v(this,"display-html",(a,b)=>Pa(this,a,b))}Sa(c){const a=document.createElement("iframe");a.style.position="absolute";a.style.border="none";var b=navigator.userAgent;/iphone|ipad|ipod/i.test(b)&&(b=/(iphone\s+os|ipad[^)]*os)\s+([0-9_]+)/i.exec(b),b=parseInt(b[b.length-1]),12>=b||isNaN(b))&&(a.setAttribute("noresize","noresize"),a.setAttribute("scrolling","no"));c.isVisible||
(a.style.display="none");c.id&&(a.id=c.id);c.allow&&(a.setAttribute("allow",c.allow),c.allow.includes("fullscreen")&&a.setAttribute("allowfullscreen",""));c.enableSandbox&&a.setAttribute("sandbox",c.sandbox);c.url?a.src=c.url:c.html&&Pa(this,a,c);return a}Xa(){}Ua(c){Z(this,c,"");this.ia=!1}});
