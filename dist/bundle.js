(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([e.id,"body{\n    background: whitesmoke;\n    font-family: sans-serif;\n}\n\n.tool_tip{\n    color: red;\n    visibility: hidden;\n    display: none;\n}\n\n.word:hover + .tool_tip{\n    display: inline;\n    visibility: visible;\n}\n\n.hidden{\n    visibility: hidden;\n    display: none;\n}\n\n.displayed{\n    visibility: visible;\n    display: block;\n}\n\n.navbar, .footer{\n    margin: 1vw; \n    border: double black 0.5vw; \n    background: green;\n    border-radius: 6vw;\n    color: black;\n    padding: 1vw; \n}\n\n\n.navbar{\n    float: top; \n    margin-bottom: 5vh; \n}\n\n\n.footer{\n    float: bottom; \n    margin-top: 50vh; \n    margin-bottom: 0;\n    text-align: center;\n}\n\n\n.textbox{\n    width: 50vw;\n    border-radius: 6vw;\n    margin: 1vw;\n    font-size: large;\n    padding: 1vw;\n}\n\n\n.centered{\n    width: 80%;\n    margin: 0 auto;\n}\n\n\n.normal_button{\n    border-radius: 6vw;\n    border: solid 0.2vw black;\n    color: black;\n    background: yellow;\n    padding: 0.5vw;\n    margin-right: 1vw;\n    margin-left: 1vw;\n}\n\n.normal_button:hover{\n    transform: scale(1.1,1.1);\n}\n\n\n.normal_button:active{\n    transform: scale(0.9,0.9);\n}\n\n\n.checkbox{\n    width: 2vw;\n    height: 2vw;\n}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&s[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],u=r[l]||0,c="".concat(l," ").concat(u);r[l]=u+1;var p=n(c),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=i(m,o);o.byIndex=a,t.splice(a,0,{identifier:c,updater:g,references:1})}s.push(c)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var d=o(e,i),l=0;l<r.length;l++){var u=n(r[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e){var t=document.createElement("span");return t.innerHTML=e.trim(),t}function t(e){e.classList.add("hidden"),e.classList.remove("displayed")}function o(e){e.classList.add("displayed"),e.classList.remove("hidden")}class i{constructor(){this.recording=null,this.recorder=null,this.base64=null}record=async()=>{this.recorder=await new Promise((async e=>{const t=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new MediaRecorder(t),o=[];n.addEventListener("dataavailable",(e=>{o.push(e.data)})),e({start:()=>n.start(),stop:()=>new Promise((e=>{n.addEventListener("stop",(()=>{const t=new Blob(o,{type:"audio/mpeg"}),n=URL.createObjectURL(t),i=new Audio(n);e({audioBlob:t,audioUrl:n,play:()=>i.play()})})),n.stop()}))})})),this.recorder.start()};stop=async()=>{this.recording=await this.recorder.stop(),this.base64=await async function(e){return new Promise(((t,n)=>{let o=new FileReader;o.onerror=n,o.onload=e=>t(e.target.result),o.readAsDataURL(e)}))}(this.recording.audioBlob)};play=async()=>{this.recording.play()}}function r(e){let t=document.createElement("audio");t.src=e,t.play()}class s{constructor(){this.wordDict={},this.recorder=new i,this.targetToNative=!0}static fromExistingJson(e){let t=new s;return t.sentenceOne=e.sentence_one,t.sentenceTwo=e.sentence_two,t.wordDict=e.word_dict,t.recorder.base64=e.audio_base64,t.targetToNative=e.target_to_native??!0,t}setSentenceOne(e){return this.sentenceOne=e,this}setSentenceTwo(e){return this.sentenceTwo=e,this}setDefinition(e,t){return this.wordDict[e]=t,this}record(){return this.recorder.record(),this}stopRecording(){return this.recorder.stop(),this}isEmpty(){return!(this.sentenceOne&&this.sentenceTwo)}playAudio(){r(this.recorder.base64)}invertTranslationDirection(){this.targetToNative=!this.targetToNative}toJson(){return{sentence_one:this.sentenceOne,sentence_two:this.sentenceTwo,word_dict:this.wordDict,audio_base64:this.recorder.base64,target_to_native:this.targetToNative}}}class a{constructor(){this.propositions=[new s],this.current=0}static fromExistingJson(e){let t=new a;return t.propositions=e.propositions.map((e=>s.fromExistingJson(e))),t.targetLanguage=e.target_language??"",t.sourceLanguage=e.source_language??"",t.author=e.author??"",t}getCurrent(){return this.propositions[this.current]}next(){this.propositions[this.current].sentenceOne&&this.propositions[this.current].sentenceTwo&&(this.current++,this.propositions[this.current]=this.propositions[this.current]??new s)}prev(){this.current=null==this.propositions[this.current-1]?this.current:this.current-1}toJson(){return{target_language:this.targetLanguage??"",source_language:this.sourceLanguage??"",author:this.author??"",last_modified:(new Date).getTime(),propositions:this.propositions.filter((e=>!e.isEmpty())).map((e=>e.toJson()))}}}function d(){let e=document.getElementById("input_sentence_one").value,t=document.getElementById("input_sentence_two").value;window.lessonBuilder.getCurrent().setSentenceOne(e).setSentenceTwo(t),window.lessonBuilder.getCurrent().wordDict=m()}function l(e){document.getElementById("input_sentence_one").value=e.sentenceOne??"",document.getElementById("input_sentence_two").value=e.sentenceTwo??"",function(e){p();for(let t of Object.entries(e))c(t[0],t[1])}(e.wordDict),document.getElementById("invert_translation_direction").checked=e.targetToNative}function u(e){d(),e?window.lessonBuilder.next():window.lessonBuilder.prev(),l(window.lessonBuilder.getCurrent())}function c(e,t){var n=document.getElementById("table_definitions").insertRow(),o=n.insertCell(0),i=n.insertCell(1);e=e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),t=t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),o.innerHTML=`<input  type='text' value="${e}">`,i.innerHTML=`<input  type='text' value="${t}">`}function p(){document.getElementById("table_definitions").innerHTML=""}function m(){var e={};for(let t of document.getElementById("table_definitions").rows)try{let n=t.cells[0].children[0].value,o=t.cells[1].children[0].value;e[n]=o}catch{}return e}window.lessonBuilder=new a,l(window.lessonBuilder.getCurrent()),document.getElementById("craft_lesson_input_existing_lesson").addEventListener("change",(function(){let e=new FileReader;e.onload=function(){window.lessonBuilder=a.fromExistingJson(JSON.parse(e.result)),l(window.lessonBuilder.getCurrent()),document.getElementById("button_play_audio").classList.add("displayed"),document.getElementById("input_metadata_target_lang").value=window.lessonBuilder.targetLanguage,document.getElementById("input_metadata_source_lang").value=window.lessonBuilder.sourceLanguage,document.getElementById("input_metadata_author").value=window.lessonBuilder.author},e.readAsText(this.files[0])})),document.getElementById("button_next").addEventListener("click",(function(){u(!0),console.log(window.lessonBuilder)})),document.getElementById("button_previous").addEventListener("click",(function(){u(!1)})),document.getElementById("button_audio").addEventListener("click",new function(){let e=!1;return function(){e?(window.lessonBuilder.getCurrent().stopRecording(),e=!1,document.getElementById("button_audio").value="Record Audio🎙️",document.getElementById("button_play_audio").classList.add("displayed")):(window.lessonBuilder.getCurrent().record(),e=!0,document.getElementById("button_audio").value="Stop Recording 🔴")}}),document.getElementById("input_sentence_one").addEventListener("input",(function(){window.lessonBuilder.getCurrent().wordDict=m(),p();for(let e of document.getElementById("input_sentence_one").value.split(/\s+/))c(e,window.lessonBuilder.getCurrent().wordDict[e]??"")})),document.getElementById("button_play_audio").addEventListener("click",(function(){window.lessonBuilder.getCurrent().playAudio()})),document.getElementById("button_save_to_computer").addEventListener("click",(function(){d(),console.log(window.lessonBuilder.toJson()),saveToComp(JSON.stringify(window.lessonBuilder.toJson()),"lesson","text/plain")})),document.getElementById("invert_translation_direction").addEventListener("change",(function(){window.lessonBuilder.getCurrent().invertTranslationDirection()})),document.getElementById("input_metadata_target_lang").addEventListener("input",(function(){window.lessonBuilder.targetLanguage=document.getElementById("input_metadata_target_lang").value})),document.getElementById("input_metadata_source_lang").addEventListener("input",(function(){window.lessonBuilder.sourceLanguage=document.getElementById("input_metadata_source_lang").value})),document.getElementById("input_metadata_author").addEventListener("input",(function(){window.lessonBuilder.author=document.getElementById("input_metadata_author").value}));class g{constructor(e){this.sentenceOne=e.sentence_one,this.sentenceTwo=e.sentence_two,this.audioBase64=e.audio_base64,this.wordDict=e.word_dict,this.targetToNative=e.target_to_native??!0}play(){r(this.audioBase64)}check(e){let t=this.targetToNative?this.sentenceTwo:this.sentenceOne,n=0;for(let o of e.split(/\s+/))t.split(/\s+/).includes(o)&&n++;return parseInt(100*n/this.sentenceTwo.split(/\s+/).length)}}class v{constructor(e){this.propositions=e.propositions.map((e=>new g(e))),this.targetLanguage=e.target_language??"",this.sourceLanguage=e.source_language??"",this.author=e.author??"",this.iterator=this.propositions.values(),this.next()}next(){this.current=this.iterator.next().value}getCurrent(){return this.current}}function h(n){let i=e(`<p> ${n.sentenceTwo} </p>`),r=document.createElement("div");for(let t of n.sentenceOne.split(/\s+/)){let o=e(`<span class="word">${t}</span> <span class="tool_tip">${n.wordDict[t]??""} </span>`);r.appendChild(o)}document.getElementById("div_problem").innerHTML="",document.getElementById("div_solution").innerHTML="",n.targetToNative?(document.getElementById("div_problem").appendChild(r),document.getElementById("div_solution").appendChild(i),o(document.getElementById("take_lesson_button_play_audio")),n.play()):(document.getElementById("div_problem").appendChild(i),document.getElementById("div_solution").appendChild(r),t(document.getElementById("take_lesson_button_play_audio")))}document.getElementById("input_lesson_file").addEventListener("change",(function(){let e=new FileReader;this.onclick=()=>{this.value=null},e.onload=function(){let t=new v(JSON.parse(e.result));console.log(t),function(e){o(document.getElementById("take_lesson_div_root")),window.lesson=e,h(e.getCurrent())}(t)},e.readAsText(this.files[0])})),document.getElementById("take_lesson_button_play_audio").addEventListener("click",(function(){window.lesson.getCurrent().play()})),document.getElementById("take_lesson_button_next").addEventListener("click",new function(){let e=!1;return function(){if(e)t(document.getElementById("div_solution")),document.getElementById("input_translation_answer").value="",document.getElementById("p_grading").innerHTML="",window.lesson.next(),h(window.lesson.getCurrent()),document.getElementById("take_lesson_button_next").value="See Solution";else{o(document.getElementById("div_solution"));let e=window.lesson.getCurrent().check(document.getElementById("input_translation_answer").value);document.getElementById("p_grading").innerHTML=`${e}%`,document.getElementById("take_lesson_button_next").value="Next",window.lesson.getCurrent().targetToNative||(o(document.getElementById("take_lesson_button_play_audio")),window.lesson.getCurrent().play())}e=!e}});var _=n(379),w=n.n(_),f=n(795),y=n.n(f),E=n(569),B=n.n(E),b=n(565),I=n.n(b),L=n(216),T=n.n(L),x=n(589),k=n.n(x),C=n(402),A={};function O(){t(document.getElementById("div_take_lesson")),t(document.getElementById("div_craft_lesson")),t(document.getElementById("div_welcome"))}A.styleTagTransform=k(),A.setAttributes=I(),A.insert=B().bind(null,"head"),A.domAPI=y(),A.insertStyleElement=T(),w()(C.Z,A),C.Z&&C.Z.locals&&C.Z.locals,document.getElementById("button_craft_lesson").addEventListener("click",(function(){O(),o(document.getElementById("div_craft_lesson"))})),document.getElementById("button_take_lesson").addEventListener("click",(function(){O(),o(document.getElementById("div_take_lesson"))})),document.getElementById("button_welcome").addEventListener("click",(function(){O(),o(document.getElementById("div_welcome"))}))})()})();