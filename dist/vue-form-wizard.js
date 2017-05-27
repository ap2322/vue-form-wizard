!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueFormWizard=e():t.VueFormWizard=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,n,i){var a,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),i){var c=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),o.computed=c}return{esModule:a,exports:r,options:o}}},function(t,e,n){n(6);var i=n(0)(n(3),n(7),"data-v-146e8f26",null);i.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\FormWizard.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] FormWizard.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){var i=n(0)(n(4),n(8),null,null);i.options.__file="C:\\work\\vue-tab-wizard\\src\\components\\TabContent.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TabContent.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},data:function(){return{activeTabIndex:0,isLastStep:!1,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{tabCount:function(){return this.tabs.length},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},iconActiveStyle:function(){return{backgroundColor:this.color}},stepCheckedStyle:function(){return{borderColor:this.color}},errorStyle:function(){return{borderColor:this.errorColor,backgroundColor:this.errorColor}},stepTitleStyle:function(){return{color:this.tabs[this.activeTabIndex].validationError?this.errorColor:this.color}},isStepSquare:function(){return"square"===this.shape},isTabShape:function(){return"tab"===this.shape},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){var t=0;if(this.activeTabIndex>0){t=this.stepPercentage*(2*this.activeTabIndex+1)}else t=this.stepPercentage;return t}},methods:{isChecked:function(t){return t<=this.maxStep},navigateToTab:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t<=this.maxStep){var i=function(){e.changeTab(e.activeTabIndex,t)};n?this.beforeTabChange(this.activeTabIndex,i):i()}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var n=this;if(this.setValidationError(null),t.then&&"function"==typeof t.then)this.setLoading(!0),t.then(function(t){n.setLoading(!1);var i=!0===t;n.executeBeforeChange(i,e)}).catch(function(t){n.setLoading(!1),n.setValidationError(t)});else{var i=!0===t;this.executeBeforeChange(i,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var n=this.tabs[t];if(n&&void 0!==n.beforeChange){var i=n.beforeChange();this.validateBeforeChange(i,e)}else e()}},changeTab:function(t,e){var n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),this.activeTabIndex=e,this.checkStep(),this.tryChangeRoute(i),this.increaseMaxStep(),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkStep:function(){this.activeTabIndex===this.tabCount-1?this.isLastStep=!0:this.isLastStep=!1},increaseMaxStep:function(){this.activeTabIndex>this.maxStep&&(this.maxStep=this.activeTabIndex)},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?t.changeTab(t.activeTabIndex,t.activeTabIndex+1):(t.isLastStep=!0,t.$emit("finished"))};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.changeTab(t.activeTabIndex,t.activeTabIndex-1),t.isLastStep=!1)};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},finish:function(){var t=this,e=function(){t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},checkRouteChange:function(t){var e=-1,n=this.tabs.find(function(n,i){var a=n.route===t;return a&&(e=i),a});if(n&&!n.active){var i=e>this.activeTabIndex;this.navigateToTab(e,i)}}},mounted:function(){if(this.tabs=this.$children.filter(function(t){return"tab-content"===t.$options.name}),this.tabs.length>0&&0===this.startIndex){var t=this.tabs[this.activeTabIndex];t.active=!0,this.tryChangeRoute(t)}if(this.startIndex<this.tabs.length){var e=this.tabs[this.startIndex];this.activeTabIndex=this.startIndex,e.active=!0,this.maxStep=this.startIndex,this.tryChangeRoute(this.tabs[this.startIndex])}else console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},route:{type:[String,Object]}},data:function(){return{active:!1,validationError:null}}}},function(t,e,n){t.exports={FormWizard:n(1),TabContent:n(2),install:function(e){e.component("form-wizard",t.exports.FormWizard),e.component("tab-content",t.exports.TabContent)}}},function(t,e){},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-form-wizard"},[n("div",{staticClass:"wizard-header"},[t._t("title",[n("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),n("div",{staticClass:"wizard-navigation"},[n("div",{staticClass:"wizard-progress-with-circle"},[n("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),n("ul",{staticClass:"wizard-nav wizard-nav-pills"},t._l(t.tabs,function(e,i){return n("li",{class:{active:e.active}},[n("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.navigateToTab(i)}}},[n("div",{staticClass:"wizard-icon-circle",class:{checked:t.isChecked(i),square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.isChecked(i)?t.stepCheckedStyle:{},e.validationError?t.errorStyle:{}]},[n("transition",{attrs:{name:t.transition,mode:"out-in"}},[e.active?n("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[e.active?t.iconActiveStyle:{},e.validationError?t.errorStyle:{}]},[e.icon?n("i",{staticClass:"wizard-icon",class:e.icon}):n("i",{staticClass:"wizard-icon"},[t._v(t._s(i+1))])]):t._e(),t._v(" "),!e.active&&e.icon?n("i",{staticClass:"wizard-icon",class:e.icon}):t._e(),t._v(" "),e.active||e.icon?t._e():n("i",{staticClass:"wizard-icon"},[t._v(t._s(i+1))])])],1),t._v(" "),n("span",{staticClass:"stepTitle",class:{active:e.active,has_error:e.validationError},style:e.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(e.title)+"\n          ")])])])})),t._v(" "),n("div",{staticClass:"wizard-tab-content"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"wizard-card-footer"},[[t.displayPrevButton?n("span",{staticClass:"wizard-footer-left",on:{click:t.prevTab}},[t._t("prev",[n("button",{staticClass:"wizard-btn btn-default wizard-btn-wd",style:t.fillButtonStyle,attrs:{type:"button",disabled:t.loading}},[t._v("\n            "+t._s(t.backButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?n("span",{staticClass:"wizard-footer-right",on:{click:t.finish}},[t._t("finish",[n("button",{staticClass:"wizard-btn btn-fill wizard-btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button"}},[t._v("\n            "+t._s(t.finishButtonText)+"\n          ")])])],2):t._e()],t._v(" "),[t.isLastStep?t._e():n("span",{staticClass:"wizard-footer-right",on:{click:t.nextTab}},[t._t("next",[n("button",{staticClass:"wizard-btn btn-fill wizard-btn-wd btn-next",style:t.fillButtonStyle,attrs:{type:"button",disabled:t.loading}},[t._v("\n          "+t._s(t.nextButtonText)+"\n         ")])])],2)]],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.active?n("div",{staticClass:"wizard-tab-container"},[t._t("default")],2):t._e()},staticRenderFns:[]},t.exports.render._withStripped=!0}])});