(function(){"use strict";var e={959:function(e,n,a){var t=a(751),o=a(641);const r=e=>((0,o.Qi)("data-v-6a7d2396"),e=e(),(0,o.jt)(),e),s={id:"desktop"},c={id:"main"},i=r((()=>(0,o.Lk)("button",null,"123123",-1)));function l(e,n,a,t,r,l){const u=(0,o.g2)("WidgetClock"),d=(0,o.g2)("WidgetSearch"),g=(0,o.g2)("MusicPlayer"),p=(0,o.g2)("AppList"),v=(0,o.g2)("SettingsPage"),h=(0,o.g2)("NavBar"),m=(0,o.g2)("WallPaper");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",s,[(0,o.Lk)("div",c,[(0,o.bF)(u),(0,o.bF)(d),(0,o.bF)(g),(0,o.bF)(p),(0,o.bF)(v),i])]),(0,o.bF)(h),(0,o.bF)(m)],64)}var u=a(33);const d={id:"background-container"};function g(e,n,a,t,r,s){return(0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("div",{id:"image-background",style:(0,u.Tr)({backgroundImage:`url(${r.backgroundImage})`})},null,4)])}var p=a.p+"img/windows-11-stock-grey-abstract-dark-background-3840x2160-8957.f9d5f1fb.jpg",v={data(){return{backgroundImage:p}},mounted(){this.loadImage()},methods:{loadImage(){const e=new Image;e.src=this.backgroundImage,e.onload=()=>{document.getElementById("image-background").classList.add("loaded")},e.onerror=()=>{console.error("Image failed to load.")}}}},h=a(262);const m=(0,h.A)(v,[["render",g],["__scopeId","data-v-b8c7f1c2"]]);var k=m;const f={id:"apps"},b=["onClick"],w=["src","alt"],C={class:"app-name"};function L(e,n,a,t,r,s){return(0,o.uX)(),(0,o.CE)("div",f,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.filteredApps,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"app-item",onClick:n=>s.openLink(e.link)},[(0,o.Lk)("img",{src:s.getAppLogo(e.id),alt:e.name,class:"app-logo",onError:n[0]||(n[0]=(...e)=>s.handleImageError&&s.handleImageError(...e))},null,40,w),(0,o.Lk)("span",C,(0,u.v_)(e.name),1)],8,b)))),128))])}var y={data(){return{apps:[]}},computed:{filteredApps(){return this.apps.filter((e=>e.status))}},created(){this.loadApps()},methods:{loadApps(){fetch("/script/apps-data.json").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log("Loaded app data:",e),this.apps=e})).catch((e=>{console.error("Error loading app data:",e)}))},getAppLogo(e){return`assets/theme/smartisan/${e}.png`},handleImageError(e){e.target.src="assets/theme/smartisan/default.png"},openLink(e){window.open(e,"_blank")}}};const E=(0,h.A)(y,[["render",L],["__scopeId","data-v-b15444fc"]]);var I=E;const S={class:"clock"},_={class:"time"},A={class:"date"};function F(e,n,a,t,r,s){return(0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("div",_,(0,u.v_)(r.currentTime),1),(0,o.Lk)("div",A,(0,u.v_)(r.currentDate),1)])}var X={data(){return{currentTime:"",currentDate:"",intervalId:null}},mounted(){this.updateClock(),this.intervalId=setInterval(this.updateClock,1e3)},beforeUnmount(){clearInterval(this.intervalId)},methods:{updateClock(){const e=new Date;this.currentTime=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});const n={year:"numeric",month:"numeric",day:"numeric"},a={weekday:"long"},t=new Intl.DateTimeFormat("zh-CN",n),o=t.format(e),r=new Intl.DateTimeFormat("zh-CN",a),s=r.format(e),[c,i,l]=o.split("/");this.currentDate=`${c}年${i}月${l}日 ${s}`}}};const x=(0,h.A)(X,[["render",F],["__scopeId","data-v-696e28ac"]]);var M=x;const T={class:"search-wrap"},j={class:"search-box bg-blur"},$={class:"search-bar"},O={key:0,class:"suggestions-list"},P=["onMousedown"];function K(e,n,a,r,s,c){return(0,o.uX)(),(0,o.CE)("div",T,[(0,o.Lk)("div",j,[(0,o.Lk)("div",$,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.query=e),type:"text",placeholder:"Search...",onInput:n[1]||(n[1]=(...e)=>r.debouncedFetchSuggestions&&r.debouncedFetchSuggestions(...e)),onKeyup:n[2]||(n[2]=(0,t.jR)(((...e)=>r.performSearch&&r.performSearch(...e)),["enter"])),onFocus:n[3]||(n[3]=e=>r.showSuggestions=!0),onBlur:n[4]||(n[4]=(...e)=>r.handleBlur&&r.handleBlur(...e))},null,544),[[t.Jo,r.query]]),(0,o.Lk)("button",{onClick:n[5]||(n[5]=(...e)=>r.performSearch&&r.performSearch(...e))},"Search")]),r.showSuggestions&&r.suggestions.length?((0,o.uX)(),(0,o.CE)("ul",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.suggestions,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e,onMousedown:n=>r.handleSuggestionClick(e)},(0,u.v_)(e),41,P)))),128))])):(0,o.Q3)("",!0)])])}var B=a(953),R=a(221),D=a.n(R),W={setup(){const e=(0,B.KR)(""),n=(0,B.KR)([]),a=(0,B.KR)(!1),t="https://www.bing.com/search?q=",r=e=>`${t}${encodeURIComponent(e)}`,s=()=>{const n=e.value.trim();if(n){const e=r(n);window.open(e,"_blank")}else alert("请输入搜索内容")},c=()=>{if(e.value.length<2)return void(n.value=[]);const a=document.createElement("script"),t=`suggestionCallback_${Date.now()}`;window[t]=e=>{e&&e.s?n.value=e.s:console.error("Unexpected data format:",e),delete window[t],document.body.removeChild(a)},a.src=`https://suggestion.baidu.com/su?wd=${encodeURIComponent(e.value)}&p=3&cb=${t}`,document.body.appendChild(a)},i=D()(c,300),l=n=>{e.value=n,s()},u=()=>{setTimeout((()=>{a.value=!1}),200)};return(0,o.xo)((()=>{const e=document.querySelectorAll('script[src^="https://suggestion.baidu.com/su"]');e.forEach((e=>{document.body.removeChild(e)}))})),{query:e,suggestions:n,showSuggestions:a,performSearch:s,debouncedFetchSuggestions:i,handleSuggestionClick:l,handleBlur:u}}};const q=(0,h.A)(W,[["render",K],["__scopeId","data-v-3633b9de"]]);var U=q;const N=e=>((0,o.Qi)("data-v-c6348838"),e=e(),(0,o.jt)(),e),Q={id:"nav-wrap"},z={class:"nav-bar"},G=N((()=>(0,o.Lk)("img",{src:"assets/icons/navbar/menu.svg",alt:"Menu",class:"nav-icon"},null,-1))),J=[G],V=N((()=>(0,o.Lk)("img",{src:"assets/icons/navbar/code.svg",alt:"Code",class:"nav-icon"},null,-1))),H=[V],Y=N((()=>(0,o.Lk)("img",{src:"assets/icons/navbar/fusion.svg",alt:"Fusion",class:"nav-icon"},null,-1))),Z=[Y],ee=N((()=>(0,o.Lk)("img",{src:"assets/icons/navbar/library.svg",alt:"Library",class:"nav-icon"},null,-1))),ne=[ee];function ae(e,n,a,t,r,s){const c=(0,o.g2)("FeedingContent"),i=(0,o.g2)("AppModal");return(0,o.uX)(),(0,o.CE)("div",Q,[(0,o.Lk)("div",z,[(0,o.Lk)("div",{class:"icon-box",onClick:n[0]||(n[0]=e=>s.handleClick("icon1"))},J),(0,o.Lk)("div",{class:"icon-box",onClick:n[1]||(n[1]=e=>s.handleClick("icon2"))},H),(0,o.Lk)("div",{class:"icon-box",onClick:n[2]||(n[2]=e=>s.handleClick("icon3"))},Z),(0,o.Lk)("div",{class:"icon-box",onClick:n[3]||(n[3]=e=>s.handleClick("icon4"))},ne)]),r.showModal?((0,o.uX)(),(0,o.Wv)(i,{key:0,onClose:n[4]||(n[4]=e=>r.showModal=!1)},{default:(0,o.k6)((()=>[(0,o.bF)(c)])),_:1})):(0,o.Q3)("",!0)])}const te={class:"modal-content"};function oe(e,n,a,r,s,c){return(0,o.uX)(),(0,o.CE)("div",{class:"modal-overlay",onClick:n[1]||(n[1]=(0,t.D$)(((...e)=>c.close&&c.close(...e)),["self"]))},[(0,o.Lk)("div",te,[(0,o.Lk)("button",{class:"modal-close",onClick:n[0]||(n[0]=(...e)=>c.close&&c.close(...e))},"X"),(0,o.RG)(e.$slots,"default",{},void 0,!0)])])}var re={name:"AppModal",methods:{close(){this.$emit("close")}}};const se=(0,h.A)(re,[["render",oe],["__scopeId","data-v-bd0a42fa"]]);var ce=se;const ie=(0,o.Lk)("h1",null,"感谢投喂",-1),le=(0,o.Lk)("p",null,"投喂",-1),ue=[ie,le];function de(e,n,a,t,r,s){return(0,o.uX)(),(0,o.CE)("div",null,ue)}var ge={name:"FeedingContent"};const pe=(0,h.A)(ge,[["render",de]]);var ve=pe,he={components:{AppModal:ce,FeedingContent:ve},data(){return{showModal:!1}},methods:{handleClick(e){"icon1"===e&&(this.showModal=!0)}}};const me=(0,h.A)(he,[["render",ae],["__scopeId","data-v-c6348838"]]);var ke=me;const fe=e=>((0,o.Qi)("data-v-68bfbb62"),e=e(),(0,o.jt)(),e),be={class:"music-player"},we=["src"],Ce=fe((()=>(0,o.Lk)("img",{src:"horizontal.png",alt:""},null,-1))),Le=fe((()=>(0,o.Lk)("div",{class:"widget-name"},"MUSIC",-1))),ye=fe((()=>(0,o.Lk)("div",{class:"song"},null,-1))),Ee=fe((()=>(0,o.Lk)("div",{class:"form"},"AIOS",-1))),Ie={class:"controls"},Se=fe((()=>(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 512 512"},[(0,o.Lk)("path",{d:"M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z",fill:"white"})],-1))),_e=fe((()=>(0,o.Lk)("div",{class:"icon-box"},null,-1)));function Ae(e,n,a,t,r,s){return(0,o.uX)(),(0,o.CE)("div",be,[(0,o.Lk)("audio",{ref:"audio",src:t.currentTrack,onEnded:n[0]||(n[0]=(...e)=>t.handleTrackEnded&&t.handleTrackEnded(...e))},null,40,we),Ce,Le,ye,Ee,(0,o.Lk)("div",Ie,[(0,o.Lk)("button",{onClick:n[1]||(n[1]=(...e)=>t.playPause&&t.playPause(...e))},[(0,o.eW)((0,u.v_)(t.isPlaying?"离开":"加入")+" ",1),Se])]),_e])}var Fe={setup(){const e=(0,B.KR)(null),n=(0,B.KR)("assets/music/testmusic.mp3"),a=(0,B.KR)(!1),t=()=>{a.value?(e.value.pause(),a.value=!1):(e.value.play(),a.value=!0)},r=()=>{a.value=!1};return(0,o.wB)(n,(n=>{e.value&&(e.value.src=n,a.value&&e.value.play())})),{audio:e,currentTrack:n,isPlaying:a,playPause:t,handleTrackEnded:r}}};const Xe=(0,h.A)(Fe,[["render",Ae],["__scopeId","data-v-68bfbb62"]]);var xe=Xe;const Me=e=>((0,o.Qi)("data-v-d66a5e62"),e=e(),(0,o.jt)(),e),Te={class:"settings",style:{display:"none"}},je=Me((()=>(0,o.Lk)("h1",null,"设置",-1))),$e={class:"setting-item"},Oe=Me((()=>(0,o.Lk)("label",{for:"search-engine"},"默认搜索引擎：",-1))),Pe=["value"];function Ke(e,n,a,r,s,c){return(0,o.uX)(),(0,o.CE)("div",Te,[je,(0,o.Lk)("div",$e,[Oe,(0,o.bo)((0,o.Lk)("select",{id:"search-engine","onUpdate:modelValue":n[0]||(n[0]=e=>r.selectedSearchEngine=e),onChange:n[1]||(n[1]=(...e)=>r.updateSearchEngine&&r.updateSearchEngine(...e))},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.searchEngines,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.id,value:e.id},(0,u.v_)(e.name),9,Pe)))),128))],544),[[t.u1,r.selectedSearchEngine]])])])}var Be=JSON.parse('[{"id":"bing","name":"Bing","url":"https://www.bing.com/search?q="},{"id":"google","name":"Google","url":"https://www.google.com/search?q="},{"id":"baidu","name":"Baidu","url":"https://www.baidu.com/s?wd="}]'),Re={setup(){const e=Be,n=(0,B.KR)(localStorage.getItem("searchEngine")||"bing"),a=()=>{localStorage.setItem("searchEngine",n.value)};return{searchEngines:e,selectedSearchEngine:n,updateSearchEngine:a}}};const De=(0,h.A)(Re,[["render",Ke],["__scopeId","data-v-d66a5e62"]]);var We=De,qe={name:"App",components:{WallPaper:k,WidgetClock:M,WidgetSearch:U,AppList:I,NavBar:ke,MusicPlayer:xe,SettingsPage:We}};const Ue=(0,h.A)(qe,[["render",l],["__scopeId","data-v-6a7d2396"]]);var Ne=Ue;(0,t.Ef)(Ne).mount("#app")}},n={};function a(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(n,t,o,r){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],r=e[u][2];for(var c=!0,i=0;i<t.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](t[i])}))?t.splice(i--,1):(c=!1,r<s&&(s=r));if(c){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.p=""}(),function(){var e={524:0};a.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,s=t[0],c=t[1],i=t[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(i)var u=i(a)}for(n&&n(t);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},t=self["webpackChunknew_os"]=self["webpackChunknew_os"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=a.O(void 0,[504],(function(){return a(959)}));t=a.O(t)})();
//# sourceMappingURL=app.d49844be.js.map