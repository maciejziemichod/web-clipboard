(function(e){function t(t){for(var n,r,i=t[0],a=t[1],d=t[2],u=0,b=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var a=o[i];0!==c[a]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},c={app:0},s=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/web-clipboard/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=a;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"01a8":function(e,t,o){},"032f":function(e,t,o){},"0703":function(e,t,o){},"17f3":function(e,t,o){"use strict";o("e70d")},2855:function(e,t,o){"use strict";o("0703")},"2c7a":function(e,t,o){"use strict";o("f937")},"479a":function(e,t,o){},"556b":function(e,t,o){"use strict";o("01a8")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={class:"container"},s={class:"mt-4 is-left ml-4"},r={class:"buttons is-right mr-4"},i={class:"section"},a={class:"section"},d={class:"section"},l=Object(n["g"])("Reset"),u=Object(n["g"])("Are you sure you want to reset? Clearing local storage will erase the data as well. ");function b(e,t,o,b,m,f){var h=Object(n["r"])("MyLogo"),p=Object(n["r"])("InputItem"),O=Object(n["r"])("CopyItem"),j=Object(n["r"])("draggable"),g=Object(n["r"])("ConfirmBox"),v=Object(n["r"])("MessageItem"),k=Object(n["r"])("AppFooter");return Object(n["l"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("main",c,[Object(n["h"])("div",s,[Object(n["h"])(h)]),Object(n["h"])("div",r,[Object(n["h"])("button",{onClick:t[1]||(t[1]=function(e){return f.toggleDarkmode(!f.darkmode)}),class:"button is-rounded is-dark"},[Object(n["h"])("span",{class:"icon",innerHTML:f.darkmodeIcon},null,8,["innerHTML"])])]),Object(n["h"])("section",i,[Object(n["h"])(p)]),Object(n["h"])("section",a,[Object(n["h"])(j,{list:f.items},{default:Object(n["v"])((function(){return[(Object(n["l"])(!0),Object(n["e"])(n["a"],null,Object(n["p"])(f.items,(function(e){return Object(n["l"])(),Object(n["e"])(O,{key:e,item:e},null,8,["item"])})),128))]})),_:1},8,["list"])]),Object(n["h"])("section",d,[Object(n["h"])("button",{onClick:t[2]||(t[2]=function(e){return m.showConfirmReset=!0}),class:["button is-danger is-pulled-right",{darkmode:f.darkmode}]}," Reset ",2),m.showConfirmReset?(Object(n["l"])(),Object(n["e"])(g,{key:0,onConfirmTrue:f.reset,onConfirmFalse:t[3]||(t[3]=function(e){return m.showConfirmReset=!1})},{title:Object(n["v"])((function(){return[l]})),message:Object(n["v"])((function(){return[u]})),_:1},8,["onConfirmTrue"])):Object(n["f"])("",!0)]),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["v"])((function(){return[f.isMessageShown?(Object(n["l"])(),Object(n["e"])(v,{key:0})):Object(n["f"])("",!0)]})),_:1})]),Object(n["h"])(k)],64)}var m=o("5530"),f=o("9b19"),h=o.n(f),p={href:"https://maciejziemichod.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer",class:"hvr-grow"};function O(e,t,o,c,s,r){return Object(n["l"])(),Object(n["e"])("a",p,[Object(n["h"])("img",{src:h.a,alt:"logo",width:o.width},null,8,["width"])])}o("a9e3");var j={name:"MyLogo",props:{width:{type:Number,default:60}}};o("5c50");j.render=O;var g=j,v=Object(n["y"])("data-v-e9f6f450");Object(n["n"])("data-v-e9f6f450");var k={class:"level has-background-light"},w={class:"level-left"},y={class:"ml-4 level-item"},C={class:"level-right"},I={class:"level-item"},x=Object(n["g"])("Delete item"),M=Object(n["g"])("Are you sure you want to delete this item?");Object(n["m"])();var S=v((function(e,t,o,c,s,r){var i=Object(n["r"])("ConfirmBox");return Object(n["l"])(),Object(n["e"])("div",k,[Object(n["h"])("div",w,[Object(n["h"])("span",y,Object(n["s"])(o.item),1)]),Object(n["h"])("div",C,[Object(n["h"])("div",I,[Object(n["h"])("button",{onClick:t[1]||(t[1]=function(e){return r.copyToClipboard(o.item)}),class:["button is-primary mr-4",{darkmode:r.darkmode}]}," Copy ",2),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(e){return s.showConfirmDelete=!0}),class:["button is-danger",{darkmode:r.darkmode}]}," Delete ",2)])]),s.showConfirmDelete?(Object(n["l"])(),Object(n["e"])(i,{key:0,onConfirmTrue:t[3]||(t[3]=function(e){return r.deleteItem(o.item)}),onConfirmFalse:t[4]||(t[4]=function(e){return s.showConfirmDelete=!1})},{title:v((function(){return[x]})),message:v((function(){return[M]})),_:1})):Object(n["f"])("",!0)])})),A=(o("c975"),Object(n["y"])("data-v-37601dde"));Object(n["n"])("data-v-37601dde");var _={class:"message is-danger"},T={class:"message-header"},$={class:"message-body"},z={class:"level"},F={class:"level"},L={class:"level-item"},D={class:"level-item"};Object(n["m"])();var P=A((function(e,t,o,c,s,r){return Object(n["l"])(),Object(n["e"])("div",{class:["box",{darkmode:r.darkmode}]},[Object(n["h"])("div",_,[Object(n["h"])("div",T,[Object(n["h"])("p",null,[Object(n["q"])(e.$slots,"title")])]),Object(n["h"])("div",$,[Object(n["h"])("div",z,[Object(n["q"])(e.$slots,"message")]),Object(n["h"])("div",F,[Object(n["h"])("div",L,[Object(n["h"])("button",{class:"button is-danger is-light",onClick:t[1]||(t[1]=function(){return r.confirmTrue.apply(r,arguments)})}," Yes ")]),Object(n["h"])("div",D,[Object(n["h"])("button",{class:"button is-danger is-light",onClick:t[2]||(t[2]=function(){return r.confirmFalse.apply(r,arguments)})}," No ")])])])])],2)})),B={name:"ConfirmBox",computed:{darkmode:function(){return this.$store.state.darkmode}},emits:["confirm-true","confirm-false"],methods:{confirmTrue:function(){this.$emit("confirm-true")},confirmFalse:function(){this.$emit("confirm-false")}}};o("2c7a");B.render=P,B.__scopeId="data-v-37601dde";var R=B,E=o("5502"),q={name:"CopyItem",props:{item:{required:!0,type:String}},components:{ConfirmBox:R},data:function(){return{showConfirmDelete:!1}},methods:Object(m["a"])(Object(m["a"])({},Object(E["b"])(["removeItem","toggleMessage","setMessageType"])),{},{showMessage:function(e){var t=this;-1!==["success","error"].indexOf(e)&&(this.setMessageType({type:e}),this.toggleMessage({show:!0}),setTimeout((function(){t.toggleMessage({show:!1})}),1e3))},deleteItem:function(e){this.showConfirmDelete=!1,this.removeItem({item:e}),console.log('"'.concat(e,'" deleted.'))},fallbackCopyToClipboard:function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy"),n=o?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n),this.showMessage("success")}catch(c){console.error("Fallback: Oops, unable to copy",c),this.showMessage("error")}document.body.removeChild(t)},copyToClipboard:function(e){var t=this;navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!"),t.showMessage("success")})).catch((function(e){console.error("Async: Could not copy text: ",e),t.showMessage("error")})):this.fallbackCopyToClipboard(e)}}),computed:{darkmode:function(){return this.$store.state.darkmode}}};o("17f3");q.render=S,q.__scopeId="data-v-e9f6f450";var J=q,N=Object(n["y"])("data-v-30a4d7fb");Object(n["n"])("data-v-30a4d7fb");var H={class:"field has-addons"},V={class:"control full-width"},W={class:"control"};Object(n["m"])();var G=N((function(e,t,o,c,s,r){return Object(n["l"])(),Object(n["e"])("form",{onSubmit:t[2]||(t[2]=Object(n["x"])((function(){return r.addItem.apply(r,arguments)}),["prevent"]))},[Object(n["h"])("div",H,[Object(n["h"])("div",V,[Object(n["w"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.input=e}),type:"text",class:"input"},null,512),[[n["t"],s.input]])]),Object(n["h"])("div",W,[Object(n["h"])("button",{class:["button is-primary",{darkmode:r.darkmode}]},"Add",2)])])],32)})),U={name:"InputItem",data:function(){return{input:""}},methods:{addItem:function(){this.input&&-1===this.$store.state.items.indexOf(this.input)?(this.$store.commit("addItem",{item:this.input}),console.log('"'.concat(this.input,'" added.')),this.input=""):this.input=""}},computed:{darkmode:function(){return this.$store.state.darkmode}}};o("7f95");U.render=G,U.__scopeId="data-v-30a4d7fb";var Y=U,Z=Object(n["y"])("data-v-fc787f00"),K=Z((function(e,t,o,c,s,r){return Object(n["l"])(),Object(n["e"])("div",{class:[r.classObject,"notification has-text-centered"]},Object(n["s"])(r.text),3)})),Q=o("ade3"),X={success:{class:"is-success",text:"Copied to clipboard."},error:{class:"is-danger",text:"Something went wrong."}},ee={name:"MessageItem",computed:{type:function(){return this.$store.state.message.type},text:function(){return X[this.type].text},messageClass:function(){return X[this.type].class},darkmode:function(){return this.$store.state.darkmode},classObject:function(){return Object(Q["a"])({darkmode:this.darkmode},this.messageClass,!0)}}};o("2855");ee.render=K,ee.__scopeId="data-v-fc787f00";var te=ee,oe=Object(n["y"])("data-v-300d38b6");Object(n["n"])("data-v-300d38b6");var ne={class:"footer mt-6"},ce={class:"content has-text-centered"},se=Object(n["h"])("b",null," About ",-1),re=Object(n["h"])("p",null,"Built by Maciej Ziemichód.",-1),ie={class:"icons"};Object(n["m"])();var ae=oe((function(e,t,o,c,s,r){var i=Object(n["r"])("AboutModal"),a=Object(n["r"])("FontAwesome");return Object(n["l"])(),Object(n["e"])("footer",ne,[Object(n["h"])("div",ce,[Object(n["h"])(i,{class:["is-activex",{darkmode:r.darkmode,"is-active":r.showAbout}]},null,8,["class"]),Object(n["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.setShowAbout({show:!0})}),class:"button is-white"},[se]),re,Object(n["h"])("div",ie,[Object(n["h"])(a,{icon:"github",link:"https://github.com/maciejziemichod"}),Object(n["h"])(a,{icon:"codepen",link:"https://codepen.io/maciejziemichod"}),Object(n["h"])(a,{icon:"twitter",link:"https://twitter.com/Maciej84900684"}),Object(n["h"])(a,{icon:"linkedin",link:"https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"})])])])})),de=Object(n["y"])("data-v-dfecd32c");Object(n["n"])("data-v-dfecd32c");var le={class:"modal"},ue={class:"box"},be={class:"content"},me=Object(n["h"])("h3",null,"Web clipboard",-1),fe=Object(n["h"])("p",null,[Object(n["g"])(" Web app made for personal use. It is built with Vue 3, Vuex and Bulma. Data is stored in local storage. This project can be found on "),Object(n["h"])("a",{href:"https://github.com/maciejziemichod/web-clipboard",target:"_blank",rel:"noopener noreferrer"},"GitHub"),Object(n["g"])(". ")],-1);Object(n["m"])();var he=de((function(e,t,o,c,s,r){var i=Object(n["r"])("MyLogo");return Object(n["l"])(),Object(n["e"])("div",le,[Object(n["h"])("div",{onClick:t[1]||(t[1]=function(t){return e.setShowAbout({show:!1})}),class:"modal-background"}),Object(n["h"])("div",{class:["modal-content",{darkmode:r.darkmode}]},[Object(n["h"])("div",ue,[Object(n["h"])("div",be,[me,fe,Object(n["h"])("div",null,[Object(n["h"])(i,{width:50})])])])],2),Object(n["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.setShowAbout({show:!1})}),class:"modal-close is-large","aria-label":"close"})])})),pe={name:"AboutModal",components:{MyLogo:g},methods:Object(m["a"])({},Object(E["b"])(["setShowAbout"])),computed:{darkmode:function(){return this.$store.state.darkmode}}};o("556b");pe.render=he,pe.__scopeId="data-v-dfecd32c";var Oe=pe,je=(o("9911"),{key:1,class:"icon is-mediów"});function ge(e,t,o,c,s,r){return""!==o.link?(Object(n["l"])(),Object(n["e"])("a",{key:0,href:o.link,target:"_blank",rel:"noopener noreferrer",class:"icon is-medium"},[Object(n["h"])("i",{class:["fa-lg",r.iconClass]},null,2)],8,["href"])):(Object(n["l"])(),Object(n["e"])("span",je,[Object(n["h"])("i",{class:["fa-lg",r.iconClass]},null,2)]))}var ve={name:"FontAwesome",props:{icon:{required:!0,validator:function(e){return-1!==["github","twitter","codepen","linkedin","link"].indexOf(e)}},link:{default:"",type:String}},computed:{iconClass:function(){var e={github:"fab fa-github",twitter:"fab fa-twitter",codepen:"fab fa-codepen",linkedin:"fab fa-linkedin-in",link:"fas fa-external-link-alt"};return e[this.icon]}}};ve.render=ge;var ke=ve,we={name:"AppFooter",components:{AboutModal:Oe,FontAwesome:ke},computed:{darkmode:function(){return this.$store.state.darkmode},showAbout:function(){return this.$store.state.showAbout}},watch:{showAbout:function(e){e?document.documentElement.classList.add("is-clipped"):document.documentElement.classList.remove("is-clipped")}},methods:Object(m["a"])({},Object(E["b"])(["setShowAbout"]))};o("eb94");we.render=ae,we.__scopeId="data-v-300d38b6";var ye=we,Ce=o("826f"),Ie={name:"App",components:{MyLogo:g,CopyItem:J,InputItem:Y,MessageItem:te,draggable:Ce["a"],ConfirmBox:R,AppFooter:ye},data:function(){return{showConfirmReset:!1}},computed:{items:{get:function(){return this.$store.state.items},set:function(e){this.$store.commit("setItems",{items:e})}},isMessageShown:function(){return this.$store.state.message.show},darkmode:function(){return this.$store.state.darkmode},darkmodeIcon:function(){return this.darkmode?"<i class='fas fa-sun'></i>":"<i class='fas fa-moon'></i>"}},methods:Object(m["a"])(Object(m["a"])({},Object(E["b"])(["resetItems","setItems"])),{},{saveToStorage:function(){localStorage.setItem("web-clipboard",JSON.stringify(this.items)),localStorage.setItem("web-clipboard-darkmode",this.darkmode),console.log("Saved to storage.")},reset:function(){this.resetItems();try{localStorage.removeItem("web-clipboard"),localStorage.removeItem("web-clipboard-darkmode")}catch(e){console.warn("It is already resetted")}console.log("Resetted."),location.reload()},toggleDarkmode:function(e){e?this.$store.commit("darkmodeOn"):this.$store.commit("darkmodeOff"),e?document.documentElement.classList.add("darkmode"):document.documentElement.classList.remove("darkmode")}}),mounted:function(){var e=this;localStorage.getItem("web-clipboard")&&this.setItems({items:JSON.parse(localStorage.getItem("web-clipboard"))}),"true"===localStorage.getItem("web-clipboard-darkmode")&&this.toggleDarkmode(!0),window.addEventListener("beforeunload",(function(){e.saveToStorage()}))}};o("9cdc");Ie.render=b;var xe=Ie,Me=(o("a434"),["niezrozumiałe","Sytuacja epidemiczna w Polsce.","Powiązanie unijnych funduszy z praworządnością.","Rozgrywki piłkarskiej Ekstraklasy."]),Se=Object(E["a"])({state:function(){return{items:Me,message:{show:!1,type:"success"},darkmode:!1,showAbout:!1}},mutations:{resetItems:function(e){e.items=Me},addItem:function(e,t){e.items.push(t.item)},removeItem:function(e,t){var o=e.items.indexOf(t.item);e.items.splice(o,1)},setItems:function(e,t){e.items=t.items},toggleMessage:function(e,t){e.message.show=t.show},setMessageType:function(e,t){e.message.type=t.type},darkmodeOn:function(e){e.darkmode=!0},darkmodeOff:function(e){e.darkmode=!1},setShowAbout:function(e,t){e.showAbout=t.show}}});o("6597");Object(n["d"])(xe).use(Se).mount("#app")},"5c50":function(e,t,o){"use strict";o("d1ac")},"7f95":function(e,t,o){"use strict";o("032f")},"9b19":function(e,t,o){e.exports=o.p+"img/logo.4ccaa81c.svg"},"9cdc":function(e,t,o){"use strict";o("d673")},d1ac:function(e,t,o){},d673:function(e,t,o){},e70d:function(e,t,o){},eb94:function(e,t,o){"use strict";o("479a")},f937:function(e,t,o){}});
//# sourceMappingURL=app.497bded3.js.map