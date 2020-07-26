(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Text=_interopRequireDefault(__webpack_require__(642)),_Title=_interopRequireDefault(__webpack_require__(645)),_default={Text:_Text.default,Title:_Title.default};exports.default=_default},278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(429),module.exports=__webpack_require__(430)},345:function(module,exports){},430:function(module,exports,__webpack_require__){"use strict";(function(module){var _react=__webpack_require__(431);module._StorybookPreserveDecorators=!0,(0,_react.configure)([__webpack_require__(621)],module)}).call(this,__webpack_require__(85)(module))},50:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeObjectFromArray=makeObjectFromArray,exports.makeModifierClassesFromModifiersName=makeModifierClassesFromModifiersName,exports.makeClassNames=function makeClassNames(blockName){var modifiers=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return _objectSpread((0,_defineProperty2.default)({},blockName,!0),makeObjectFromArray(makeModifierClassesFromModifiersName(modifiers,blockName),(function(value){return!0})))};var _defineProperty2=_interopRequireDefault(__webpack_require__(61));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function makeObjectFromArray(array,func){return array.reduce((function(previousValue,currentValue){return Object.assign(previousValue,(0,_defineProperty2.default)({},currentValue,func(currentValue)))}),{})}function makeModifierClassesFromModifiersName(modifiersName,blockName){return modifiersName.map((function(value){return"".concat(blockName,"_").concat(value)}))}},621:function(module,exports,__webpack_require__){var map={"./avatar.stories.tsx":622,"./button.stories.tsx":627,"./checkbox.stories.tsx":631,"./grid.stories.tsx":648,"./icon.stories.tsx":658,"./typography.stories.tsx":662};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=621},622:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.BasicUsage=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Avatar=__webpack_require__(623),_default={title:"Avatar",component:_Avatar.Avatar};exports.default=_default;exports.BasicUsage=function BasicUsage(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"small"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"medium"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"large"}),_react.default.createElement("br",null),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"small",src:"http://i.pravatar.cc/300?u=1"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"medium",src:"http://i.pravatar.cc/300?u=1"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"large",src:"http://i.pravatar.cc/300?u=1"}),_react.default.createElement("br",null),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"small",src:"http://i.pravatar.cc/300?u=2"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"medium",src:"http://i.pravatar.cc/300?u=2"}),_react.default.createElement(_Avatar.Avatar,{rounded:!0,size:"large",src:"http://i.pravatar.cc/300?u=2"}))}},623:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Avatar=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_defineProperty2=_interopRequireDefault(__webpack_require__(61)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_classnames=_interopRequireDefault(__webpack_require__(49)),_makeObjectFromArray=__webpack_require__(50);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__(625);exports.Avatar=function Avatar(props){var src=props.src,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,className=props.className,_props$rounded=props.rounded,rounded=void 0!==_props$rounded&&_props$rounded,alt=props.alt,rest=(0,_objectWithoutProperties2.default)(props,["src","size","className","rounded","alt"]),classes=(0,_classnames.default)(className,_objectSpread(_objectSpread({},(0,_makeObjectFromArray.makeClassNames)("ux-avatar",[size])),{},(0,_defineProperty2.default)({},"ux-avatar_rounded",rounded)));return _react.default.createElement("img",(0,_extends2.default)({alt:alt,src:src||"https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg",className:classes},rest))}},625:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(626);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},626:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,".ux-avatar_small{width:24px;height:24px}.ux-avatar_medium{width:32px;height:32px}.ux-avatar_large{width:48px;height:48px}.ux-avatar_rounded{border-radius:50%}\n",""]),module.exports=exports},627:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Button=__webpack_require__(628),_default={title:"Button",component:_Button.Button};exports.default=_default;exports.Default=function Default(){return _react.default.createElement(_Button.Button,null,"Нажми на меня")}},628:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_defineProperty2=_interopRequireDefault(__webpack_require__(61)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_classnames=_interopRequireDefault(__webpack_require__(49));__webpack_require__(629);var _makeObjectFromArray=__webpack_require__(50);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}exports.Button=function Button(props){var _props$uxSize=props.uxSize,uxSize=void 0===_props$uxSize?"small":_props$uxSize,_props$buttonType=props.buttonType,buttonType=void 0===_props$buttonType?"default":_props$buttonType,children=props.children,fillAvailable=props.fillAvailable,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,rest=(0,_objectWithoutProperties2.default)(props,["uxSize","buttonType","children","fillAvailable","disabled"]),modifiers=[uxSize,buttonType],classes=(0,_classnames.default)(props.className,_objectSpread(_objectSpread({},(0,_makeObjectFromArray.makeClassNames)("ux-button",modifiers)),{},(0,_defineProperty2.default)({},"ux-button_fill-available",fillAvailable)));return _react.default.createElement("button",(0,_extends2.default)({className:classes,disabled:disabled},rest),children)}},629:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(630);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},630:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,".ux-button{border:1px solid black;border-radius:2px;display:inline-flex;align-items:center;justify-content:center}.ux-button_small{padding:4px 8px}.ux-button_medium{padding:8px 10px}.ux-button_large{padding:12px 20px}.ux-button_default{background-color:#264653;color:#f8f9fa}.ux-button_default:hover:not(:disabled){background-color:#2a9d8f;cursor:pointer}.ux-button_secondary{background-color:#f8f9fa;color:#264653}.ux-button_secondary:hover:not(:disabled){cursor:pointer;background-color:#e9ecef}.ux-button_fill-available{width:100%;height:100%}.ux-button:disabled{opacity:0.5}.ux-button:not(:disabled)>.ux-checkbox:not(:checked)+label::before,.ux-button:not(:disabled)>.ux-checkbox:not(:checked)+label:hover::before{background-color:#f8f9fa}\n",""]),module.exports=exports},631:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Labeled=exports.Default=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Checkbox=__webpack_require__(632),_default={title:"Checkbox",component:_Checkbox.Checkbox};exports.default=_default;exports.Default=function Default(){return _react.default.createElement(_Checkbox.Checkbox,{uxType:"default"})};exports.Labeled=function Labeled(){return _react.default.createElement(_Checkbox.Checkbox,{uxType:"default"},"Подпись")}},632:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Checkbox=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_defineProperty2=_interopRequireDefault(__webpack_require__(61)),_slicedToArray2=_interopRequireDefault(__webpack_require__(633)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_classnames=_interopRequireDefault(__webpack_require__(49)),_makeObjectFromArray=__webpack_require__(50);__webpack_require__(639);var _reactIdGenerator=__webpack_require__(641),_Typography=_interopRequireDefault(__webpack_require__(173));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var Text=_Typography.default.Text;_Typography.default.Title;exports.Checkbox=function Checkbox(props){var _props$uxType=props.uxType,uxType=void 0===_props$uxType?"default":_props$uxType,className=props.className,children=props.children,disabled=props.disabled,rest=(0,_objectWithoutProperties2.default)(props,["uxType","className","children","disabled"]),_useId=(0,_reactIdGenerator.useId)(),htmlId=(0,_slicedToArray2.default)(_useId,1)[0],modifiers=[uxType],classes=(0,_classnames.default)(className,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},(0,_makeObjectFromArray.makeClassNames)("ux-checkbox",modifiers)));return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement("input",(0,_extends2.default)({id:htmlId,type:"checkbox",className:classes},rest,{disabled:disabled})),_react.default.createElement("label",{htmlFor:htmlId},_react.default.createElement(Text,null,children)))}},639:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(640);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},640:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,".ux-checkbox{position:absolute;z-index:-1;opacity:0}.ux-checkbox+label{display:inline-flex;align-items:center;user-select:none}.ux-checkbox+label::before{content:'';display:inline-block;height:1em;width:1em;border:1px solid #264653;flex-shrink:0;flex-grow:0;border-radius:0.1em;margin-right:0.5em;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.ux-checkbox+label:hover::before{background-color:#e9ecef}.ux-checkbox+label:hover::before:not(:disabled){cursor:pointer}.ux-checkbox:checked+label::before{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");background-color:#264653}.ux-checkbox_default+label::before{border-color:#264653;background-color:#f8f9fa}.ux-checkbox_secondary+label::before{border-color:#2a9d8f;background-color:#2a9d8f}\n",""]),module.exports=exports},642:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_makeObjectFromArray=__webpack_require__(50),_classnames=_interopRequireDefault(__webpack_require__(49));__webpack_require__(643);var _default=function Text(props){var className=props.className,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,children=props.children,_props$color=props.color,color=void 0===_props$color?"primary":_props$color,rest=(0,_objectWithoutProperties2.default)(props,["className","size","children","color"]),modifiers=[size,color],classes=(0,_classnames.default)(className,(0,_makeObjectFromArray.makeClassNames)("ux-text",modifiers));return _react.default.createElement("span",(0,_extends2.default)({},rest,{className:classes}),children)};exports.default=_default},643:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(644);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},644:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,'.ux-text{font-family:"Roboto",sans-serif}.ux-text_small{font-size:12px}.ux-text_medium{font-size:14px}.ux-text_large{font-size:18px}.ux-text_primary{color:#495057}.ux-text_light{color:#adb5bd}.ux-text_black{color:#212529}\n',""]),module.exports=exports},645:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(61)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_makeObjectFromArray=__webpack_require__(50),_classnames=_interopRequireDefault(__webpack_require__(49));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__(646);var mapLevelToElementName={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},_default=function Title(props){var _props$color=props.color,color=void 0===_props$color?"black":_props$color,_props$level=props.level,level=void 0===_props$level?2:_props$level,children=props.children,className=props.className,rest=(0,_objectWithoutProperties2.default)(props,["color","level","children","className"]),modifiers=[color],classes=(0,_classnames.default)(className,(0,_makeObjectFromArray.makeClassNames)("ux-title",modifiers));return _react.default.createElement(mapLevelToElementName[level],_objectSpread(_objectSpread({},rest),{},{className:classes}),children)};exports.default=_default},646:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(647);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},647:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,'.ux-title{font-family:"Roboto",sans-serif}.ux-title_primary{color:#495057}.ux-title_light{color:#adb5bd}.ux-title_black{color:#212529}\n',""]),module.exports=exports},648:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(649),_interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.GapedRow=exports.OneRow=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Grid=_interopRequireWildcard(__webpack_require__(651)),_Typography=_interopRequireDefault(__webpack_require__(173)),Text=_Typography.default.Text,_default=(_Typography.default.Title,{title:"Grid",component:_Grid.default});exports.default=_default;exports.OneRow=function OneRow(){return _react.default.createElement(_Grid.Row,null,_react.default.createElement(_Grid.Col,{span:1},_react.default.createElement(Text,null,"1")),_react.default.createElement(_Grid.Col,{span:11},"2"),_react.default.createElement(_Grid.Col,{span:1},"3"),_react.default.createElement(_Grid.Col,{span:11},"4"))};exports.GapedRow=function GapedRow(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_Grid.Row,{gap:90},_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"1")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"2")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"3")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"4"))),_react.default.createElement(_Grid.Row,{gap:8},_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"1")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"2")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"3")),_react.default.createElement(_Grid.Col,{span:6,style:{backgroundColor:"#ddd"}},_react.default.createElement(Text,null,"4"))))}},651:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Col",{enumerable:!0,get:function get(){return _Col.default}}),Object.defineProperty(exports,"Row",{enumerable:!0,get:function get(){return _Row.default}}),exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Col=_interopRequireDefault(__webpack_require__(652)),_Row=_interopRequireDefault(__webpack_require__(655)),_default=function Grid(props){return _react.default.createElement(_react.default.Fragment,null)};exports.default=_default},652:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_classnames=_interopRequireDefault(__webpack_require__(49)),_makeObjectFromArray=__webpack_require__(50);__webpack_require__(653);var _default=function Col(props){var children=props.children,className=(props.span,props.className),rest=(0,_objectWithoutProperties2.default)(props,["children","span","className"]),classes=(0,_classnames.default)(className,(0,_makeObjectFromArray.makeClassNames)("ux-col",[]));return _react.default.createElement("div",(0,_extends2.default)({className:classes},rest),children)};exports.default=_default},653:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(654);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},654:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,".ux-col{display:flex;align-items:center}\n",""]),module.exports=exports},655:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_defineProperty2=_interopRequireDefault(__webpack_require__(61)),_react=_interopRequireDefault(__webpack_require__(9));__webpack_require__(656);var _makeObjectFromArray=__webpack_require__(50),_classnames=_interopRequireDefault(__webpack_require__(49));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var _default=function Row(props){var children=props.children,_props$gap=props.gap,gap=void 0===_props$gap?0:_props$gap,className=props.className,rest=(0,_objectWithoutProperties2.default)(props,["children","gap","className"]),classes=(0,_classnames.default)(className,(0,_makeObjectFromArray.makeClassNames)("ux-row",[]));return _react.default.createElement("div",(0,_extends2.default)({},rest,{className:classes}),_react.default.Children.map(children,(function(child,index){return function makeComponent(child,flexString,gap){return _react.default.cloneElement(child,_objectSpread(_objectSpread({},child.props),{},{style:_objectSpread(_objectSpread({},child.props.style),{},{flex:flexString,marginLeft:"".concat(gap,"px")})}))}(child,"0 0 ".concat(child.props.span/24*100,"%"),index>0?gap:0)})))};exports.default=_default},656:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(657);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},657:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,".ux-row{display:flex}\n",""]),module.exports=exports},658:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sizes=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Icon=__webpack_require__(659),_default={title:"Icon",component:_Icon.Icon};exports.default=_default;exports.Sizes=function Sizes(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_Icon.Icon,{size:"small",iconName:"trash-icon"}),_react.default.createElement(_Icon.Icon,{size:"medium",iconName:"trash-icon"}),_react.default.createElement(_Icon.Icon,{size:"large",iconName:"trash-icon"}))}},659:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Icon=void 0;var _extends2=_interopRequireDefault(__webpack_require__(60)),_defineProperty2=_interopRequireDefault(__webpack_require__(61)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(48)),_react=_interopRequireDefault(__webpack_require__(9)),_classnames=_interopRequireDefault(__webpack_require__(49)),_makeObjectFromArray=__webpack_require__(50);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__(660);var Icon=function Icon(props){var className=props.className,_props$size=props.size,size=void 0===_props$size?"medium":_props$size,iconName=props.iconName,rounded=props.rounded,rest=(0,_objectWithoutProperties2.default)(props,["className","size","iconName","rounded"]),classes=(0,_classnames.default)(className,_objectSpread(_objectSpread({},(0,_makeObjectFromArray.makeClassNames)("ux-".concat(iconName),[size])),{},(0,_defineProperty2.default)({},"ux-".concat(iconName,"_rounded"),rounded)));return _react.default.createElement("div",(0,_extends2.default)({},rest,{className:classes}),_react.default.createElement("span",{className:"ux-".concat(iconName,"__icon")}))};exports.Icon=Icon;var _default=Icon;exports.default=_default},660:function(module,exports,__webpack_require__){var api=__webpack_require__(51),content=__webpack_require__(661);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},661:function(module,exports,__webpack_require__){(exports=__webpack_require__(52)(!1)).push([module.i,'.ux-trash-icon__icon{background:url("/public/icons/icons8-trash.svg") no-repeat;display:inline-block;width:100%;background-size:cover;height:0;padding:0;padding-bottom:92%}.ux-trash-icon_small{width:12px;height:12px}.ux-trash-icon_medium{width:16px;height:16px}.ux-trash-icon_large{width:24px;height:24px}\n',""]),module.exports=exports},662:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextColors=exports.TextLayout=exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(9)),_Typography=_interopRequireDefault(__webpack_require__(173)),Text=_Typography.default.Text,Title=_Typography.default.Title,_default={title:"Typography",component:_Typography.default};exports.default=_default;exports.TextLayout=function TextLayout(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(Text,null,"Medium text"),_react.default.createElement("br",null),_react.default.createElement(Text,{size:"small"},"Small text"),_react.default.createElement("br",null),_react.default.createElement(Text,{size:"large"},"Large text"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:1},"Heading 1"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:2},"Heading 2"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:3},"Heading 3"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:4},"Heading 4"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:5},"Heading 5"),_react.default.createElement("br",null),_react.default.createElement(Title,{level:6},"Heading 6"),_react.default.createElement("br",null))};exports.TextColors=function TextColors(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(Text,{color:"primary"},"Primary color"),_react.default.createElement(Text,{color:"black"},"Black color"),_react.default.createElement(Text,{color:"light"},"Light color"),_react.default.createElement(Title,{color:"primary"},"Primary color"),_react.default.createElement(Title,{color:"black"},"Black color"),_react.default.createElement(Title,{color:"light"},"Light color"))}}},[[278,1,2]]]);
//# sourceMappingURL=main.ec7107afa1acebd896cc.bundle.js.map