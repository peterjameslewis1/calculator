(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_Components_CalcButtons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),_Components_CalcResult__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_Component){Object(_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:""},_this.calculate=function(){try{_this.setState({result:eval(_this.state.result)})}catch(e){_this.setState({result:"Error"})}},_this.reset=function(){_this.setState({result:""})},_this.clickHandler=function(e){"="===e?_this.calculate():"AC"===e?_this.reset():_this.setState({result:_this.state.result+e})},_this}return Object(_Users_peterlewis_Downloads_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"app-container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_CalcResult__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_CalcButtons__WEBPACK_IMPORTED_MODULE_6__.a,{clicked:this.clickHandler}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},,,function(e,_,t){"use strict";var n=t(0),a=t.n(n);_.a=function(e){return a.a.createElement("div",{className:"button-container"},a.a.createElement("button",{name:"(",onClick:function(_){return e.clicked(_.target.name)}},"("),a.a.createElement("button",{name:")",onClick:function(_){return e.clicked(_.target.name)}},")"),a.a.createElement("button",{name:"%",onClick:function(_){return e.clicked(_.target.name)}},"%"),a.a.createElement("button",{name:"AC",onClick:function(_){return e.clicked(_.target.name)}},"AC"),a.a.createElement("button",{name:"7",onClick:function(_){return e.clicked(_.target.name)}},"7"),a.a.createElement("button",{name:"8",onClick:function(_){return e.clicked(_.target.name)}},"8"),a.a.createElement("button",{name:"9",onClick:function(_){return e.clicked(_.target.name)}},"9"),a.a.createElement("button",{name:"\xf7",onClick:function(_){return e.clicked(_.target.name)}},"\xf7"),a.a.createElement("button",{name:"4",onClick:function(_){return e.clicked(_.target.name)}},"4"),a.a.createElement("button",{name:"5",onClick:function(_){return e.clicked(_.target.name)}},"5"),a.a.createElement("button",{name:"6",onClick:function(_){return e.clicked(_.target.name)}},"6"),a.a.createElement("button",{name:"*",onClick:function(_){return e.clicked(_.target.name)}},"x"),a.a.createElement("button",{name:"1",onClick:function(_){return e.clicked(_.target.name)}},"1"),a.a.createElement("button",{name:"2",onClick:function(_){return e.clicked(_.target.name)}},"2"),a.a.createElement("button",{name:"3",onClick:function(_){return e.clicked(_.target.name)}},"3"),a.a.createElement("button",{name:"-",onClick:function(_){return e.clicked(_.target.name)}},"-"),a.a.createElement("button",{name:"0",onClick:function(_){return e.clicked(_.target.name)}},"0"),a.a.createElement("button",{name:".",onClick:function(_){return e.clicked(_.target.name)}},"."),a.a.createElement("button",{name:"=",onClick:function(_){return e.clicked(_.target.name)}},"="),a.a.createElement("button",{name:"+",onClick:function(_){return e.clicked(_.target.name)}},"+"))}},function(e,_,t){"use strict";var n=t(0),a=t.n(n);_.a=function(e){return a.a.createElement("div",{className:"result-container"},e.result)}},,,function(e,_,t){e.exports=t(17)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var n=t(0),a=t.n(n),r=t(2),c=t.n(r),l=(t(15),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.af02c6a5.chunk.js.map