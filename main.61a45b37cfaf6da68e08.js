(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/mrJ":function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-avatar_small{width:24px;height:24px}.ux-avatar_medium{width:32px;height:32px}.ux-avatar_large{width:48px;height:48px}.ux-avatar_rounded{border-radius:50%}\n",""]),e.exports=t},"0A+T":function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("lSNA")),o=a(r("QILm")),l=a(r("q1tI")),u=r("xcCu"),i=a(r("TSYQ"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r("yKMW");var d={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},f=function(e){var t=e.color,r=void 0===t?"black":t,a=e.level,n=void 0===a?2:a,c=e.children,f=e.className,p=(0,o.default)(e,["color","level","children","className"]),b=[r],v=(0,i.default)(f,(0,u.makeClassNames)("ux-title",b));return l.default.createElement(d[n],s(s({},p),{},{className:v}),c)};t.default=f},"2iaZ":function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var n=a(r("pVnL")),o=a(r("lSNA")),l=a(r("QILm")),u=a(r("q1tI")),i=a(r("TSYQ"));r("46Ws");var c=r("xcCu");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Button=function(e){var t=e.uxSize,r=void 0===t?"small":t,a=e.buttonType,s=void 0===a?"default":a,f=e.children,p=e.fillAvailable,b=e.disabled,v=void 0!==b&&b,m=(0,l.default)(e,["uxSize","buttonType","children","fillAvailable","disabled"]),x=[r,s],h=(0,i.default)(e.className,d(d({},(0,c.makeClassNames)("ux-button",x)),{},(0,o.default)({},"ux-button_fill-available",p)));return u.default.createElement("button",(0,n.default)({className:h,disabled:v},m),f)}},"3jjD":function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("pVnL")),o=a(r("QILm")),l=a(r("lSNA")),u=a(r("q1tI"));r("IONO");var i=r("xcCu"),c=a(r("TSYQ"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=e.gap,a=void 0===r?0:r,l=e.className,s=(0,o.default)(e,["children","gap","className"]),f=(0,c.default)(l,(0,i.makeClassNames)("ux-row",[]));return u.default.createElement("div",(0,n.default)({},s,{className:f}),u.default.Children.map(t,(function(e,t){return function(e,t,r){return u.default.cloneElement(e,d(d({},e.props),{},{style:d(d({},e.props.style),{},{flex:t,marginLeft:"".concat(r,"px")})}))}(e,"0 0 ".concat(e.props.span/24*100,"%"),t>0?a:0)})))};t.default=f},"46Ws":function(e,t,r){var a=r("LboF"),n=r("tEgv");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},"6ckb":function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-checkbox{position:absolute;z-index:-1;opacity:0}.ux-checkbox+label{display:inline-flex;align-items:center;user-select:none}.ux-checkbox+label::before{content:'';display:inline-block;height:1em;width:1em;border:1px solid #264653;flex-shrink:0;flex-grow:0;border-radius:0.1em;margin-right:0.5em;background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.ux-checkbox+label:hover::before{background-color:#e9ecef}.ux-checkbox+label:hover::before:not(:disabled){cursor:pointer}.ux-checkbox:checked+label::before{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");background-color:#264653}.ux-checkbox_default+label::before{border-color:#264653;background-color:#f8f9fa}.ux-checkbox_secondary+label::before{border-color:#2a9d8f;background-color:#2a9d8f}\n",""]),e.exports=t},DnQK:function(e,t,r){(t=r("JPst")(!1)).push([e.i,'.ux-text{font-family:"Roboto",sans-serif}.ux-text_small{font-size:12px}.ux-text_medium{font-size:14px}.ux-text_large{font-size:18px}.ux-text_primary{color:#495057}.ux-text_light{color:#adb5bd}.ux-text_black{color:#212529}\n',""]),e.exports=t},IONO:function(e,t,r){var a=r("LboF"),n=r("MtmI");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},L8Xe:function(e,t,r){var a=r("LboF"),n=r("f8er");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},M0oq:function(e,t,r){(t=r("JPst")(!1)).push([e.i,'html *{font-family:"Roboto",sans-serif}a{text-decoration:unset}\n',""]),e.exports=t},MSsH:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("J4zp")),o=a(r("q1tI"));r("L8Xe");var l=r("yGKb"),u=r("2iaZ"),i=r("zFHC"),c=r("jOi8"),s=r("pDDG"),d=a(r("ryPi")),f=r("pvrW"),p=d.default.Text,b=d.default.Title,v=function(){var e=(0,c.useArrayData)("http://example.com"),t=(0,n.default)(e,2),r=t[0],a=t[1],d=(0,f.useSet)([]),v=d.set,m=d.add,x=d.remove;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ux-app"},o.default.createElement(l.Row,{gap:8,className:"ux-app__head"},o.default.createElement(l.Col,{span:3},o.default.createElement(u.Button,{buttonType:"secondary",fillAvailable:!0,onClick:function(e){e.preventDefault(),r.every((function(e){return v.has(e.id)}))?r.forEach((function(e){return x(e.id)})):r.forEach((function(e){return m(e.id)}))},disabled:!r.length},o.default.createElement(i.Checkbox,{checked:r.every((function(e){return v.has(e.id)})),readOnly:!0},"Выбрать все"))),o.default.createElement(l.Col,{span:3},o.default.createElement(u.Button,{fillAvailable:!0,onClick:function(e){e.preventDefault(),a(Array.from(v)),v.clear()},disabled:!v.size},"Удалить выбранные"))),o.default.createElement("div",{className:"ux-app__content"},r&&r.length?r.map((function(e){return o.default.createElement(l.Row,{key:e.id},o.default.createElement(l.Col,{span:1},o.default.createElement(i.Checkbox,{checked:v.has(e.id),onChange:function(){return v.has(e.id)?x(e.id):m(e.id)}})),o.default.createElement(l.Col,{span:1},o.default.createElement(s.Avatar,{src:e.avatar,rounded:!0})),o.default.createElement(l.Col,{span:4},o.default.createElement(p,null,e.sender)),o.default.createElement(l.Col,{span:17,style:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},o.default.createElement(p,null,e.theme),"    ",o.default.createElement(p,{color:"light"},e.snippet)))})):o.default.createElement(b,{color:"light"},"Почтовый ящик пуст"))),o.default.createElement("br",null),o.default.createElement(l.Row,null,o.default.createElement(l.Col,{span:24,style:{display:"flex",justifyContent:"center"}},o.default.createElement("a",{href:"storybook-static/index.html"},o.default.createElement(u.Button,{buttonType:"secondary",uxSize:"medium"},o.default.createElement(p,null,"Открыть StoryBook"))))))};t.default=v},MtmI:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-row{display:flex}\n",""]),e.exports=t},RIZ1:function(e,t,r){"use strict";var a=r("TqRt"),n=a(r("q1tI")),o=a(r("i8i4")),l=a(r("MSsH")),u=r("55Ip");r("V74o"),o.default.render(n.default.createElement(u.BrowserRouter,null,n.default.createElement(l.default,null)),document.getElementById("root"))},V74o:function(e,t,r){var a=r("LboF"),n=r("M0oq");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},VVM5:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("pVnL")),o=a(r("QILm")),l=a(r("q1tI")),u=r("xcCu"),i=a(r("TSYQ"));r("di0J");var c=function(e){var t=e.className,r=e.size,a=void 0===r?"medium":r,c=e.children,s=e.color,d=void 0===s?"primary":s,f=(0,o.default)(e,["className","size","children","color"]),p=[a,d],b=(0,i.default)(t,(0,u.makeClassNames)("ux-text",p));return l.default.createElement("span",(0,n.default)({},f,{className:b}),c)};t.default=c},WbUj:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data=void 0;t.data={emails:[{id:1,avatar:"http://i.pravatar.cc/300?u=1",sender:"Бединге",theme:"Carolina Hurricanes",snippet:"Люди всё время меня спрашивают: знаю ли я Тайлера Дёрдена?"},{id:2,avatar:"http://i.pravatar.cc/300?u=2",sender:"Лиаторп",theme:"Columbus Blue Jackets",snippet:"Шесть месяцев я не мог спать. Когда у тебя бессонница — всё нереально; всё очень далеко от тебя, всё это — копия, снятая с копии, которая в свою очередь снята с копии."},{id:3,avatar:"http://i.pravatar.cc/300?u=3",sender:"Хемнэс",theme:"New Jersey Devils",snippet:"Когда-то мы зачитывались порнографией — теперь каталогами IKEA."},{id:4,avatar:"http://i.pravatar.cc/300?u=4",sender:"Стольмен",theme:"New York Islanders",snippet:"Я обрёл свободу. Свобода есть утрата всяческих надежд."},{id:5,avatar:"http://i.pravatar.cc/300?u=5",sender:"Вемб",theme:"Philadelphia Flyers",snippet:"Каждый вечер я умирал и каждый вечер я рождался заново. Воскресал."},{id:6,avatar:"http://i.pravatar.cc/300?u=6",sender:"Бьюрста",theme:"Pittsburgh Penguins",snippet:"После боя шумовой фон жизни становится приглушённым. Тебе всё по силам."},{id:7,avatar:"http://i.pravatar.cc/300?u=7",sender:"Сальми",theme:"Washington Capitals",snippet:"Суть бойцовского клуба не в победах и поражениях. Слова тут пустой звук. Истеричные выкрики на неведомых языках, как в церкви пятидесятников. После боя проблем меньше не становилось, но тебе на них было начхать. Каждый чувствовал, что возродился."},{id:8,avatar:"http://i.pravatar.cc/300?u=8",sender:"Гру​ндталь",theme:"Boston Bruins",snippet:"Преодолеть страх. Отсечь лишнее. Отвергнуть всё, что не имеет подлинной ценности. И скользить."},{id:9,avatar:"http://i.pravatar.cc/300?u=9",sender:"Лиллонген",theme:"Detroit Red Wings",snippet:"Я сплю? Я спал? Тайлер приснился мне? Или я снюсь Тайлеру?"},{id:10,avatar:"http://i.pravatar.cc/300?u=10",sender:"Мюскмальва",theme:"Tampa Bay Lightning",snippet:"Меня повсюду преследовало ощущение дежавю. Куда бы я не приходил, мне казалось, что я там уже бывал. Это было похоже на погоню за невидимкой."}]}},X7Hw:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("pVnL")),o=a(r("QILm")),l=a(r("q1tI")),u=a(r("TSYQ")),i=r("xcCu");r("tEMS");var c=function(e){var t=e.children,r=(e.span,e.className),a=(0,o.default)(e,["children","span","className"]),c=(0,u.default)(r,(0,i.makeClassNames)("ux-col",[]));return l.default.createElement("div",(0,n.default)({className:c},a),t)};t.default=c},cJJU:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-col{display:flex;align-items:center}\n",""]),e.exports=t},di0J:function(e,t,r){var a=r("LboF"),n=r("DnQK");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},f8er:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-app{border:1px solid rgba(38,70,83,0.5);padding:8px}.ux-app__head{margin-bottom:8px}.ux-app__content{padding:0 16px;text-align:center}.ux-app__content .ux-row{align-items:center;border-left:1px solid #e9ecef;border-right:1px solid #e9ecef;border-bottom:1px solid #e9ecef;padding:4px 8px}.ux-app__content .ux-row:nth-child(1){border:1px solid #e9ecef}.ux-app__content .ux-row>.ux-col:nth-child(1){display:flex;justify-content:center}\n",""]),e.exports=t},iDfc:function(e,t,r){var a=r("LboF"),n=r("6ckb");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},jOi8:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.useArrayData=function(e){var t=(0,l.useState)(o.data.emails),r=(0,n.default)(t,2),a=r[0],i=r[1];return[a,function(e){i((0,u.difference)(a,(0,u.intersectionWith)(a,e,(function(e,t){return e.id==t}))))}]};var n=a(r("J4zp")),o=r("WbUj"),l=r("q1tI"),u=r("LvDl")},nUqr:function(e,t,r){(t=r("JPst")(!1)).push([e.i,'.ux-title{font-family:"Roboto",sans-serif}.ux-title_primary{color:#495057}.ux-title_light{color:#adb5bd}.ux-title_black{color:#212529}\n',""]),e.exports=t},pDDG:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var n=a(r("pVnL")),o=a(r("lSNA")),l=a(r("QILm")),u=a(r("q1tI")),i=a(r("TSYQ")),c=r("xcCu");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r("x+Mu");t.Avatar=function(e){var t=e.src,r=e.size,a=void 0===r?"medium":r,s=e.className,f=e.rounded,p=void 0!==f&&f,b=e.alt,v=(0,l.default)(e,["src","size","className","rounded","alt"]),m=(0,i.default)(s,d(d({},(0,c.makeClassNames)("ux-avatar",[a])),{},(0,o.default)({},"ux-avatar_rounded",p)));return u.default.createElement("img",(0,n.default)({alt:b,src:t||"https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg",className:m},v))}},pvrW:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.useSet=function(e){var t=(0,o.useState)(new Set(e)),r=(0,n.default)(t,2),a=r[0],l=r[1];return{set:a,add:function(e){l(new Set(a.add(e)))},remove:function(e){a.delete(e),l(new Set(a))}}};var n=a(r("J4zp")),o=r("q1tI")},ryPi:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("VVM5")),o=a(r("0A+T")),l={Text:n.default,Title:o.default};t.default=l},tEMS:function(e,t,r){var a=r("LboF"),n=r("cJJU");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},tEgv:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".ux-button{border:1px solid black;border-radius:2px;display:inline-flex;align-items:center;justify-content:center}.ux-button_small{padding:4px 8px}.ux-button_medium{padding:8px 10px}.ux-button_large{padding:12px 20px}.ux-button_default{background-color:#264653;color:#f8f9fa}.ux-button_default:hover:not(:disabled){background-color:#2a9d8f;cursor:pointer}.ux-button_secondary{background-color:#f8f9fa;color:#264653}.ux-button_secondary:hover:not(:disabled){cursor:pointer;background-color:#e9ecef}.ux-button_fill-available{width:100%;height:100%}.ux-button:disabled{opacity:0.5}.ux-button:not(:disabled)>.ux-checkbox:not(:checked)+label::before,.ux-button:not(:disabled)>.ux-checkbox:not(:checked)+label:hover::before{background-color:#f8f9fa}\n",""]),e.exports=t},"x+Mu":function(e,t,r){var a=r("LboF"),n=r("/mrJ");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},xcCu:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.makeObjectFromArray=u,t.makeModifierClassesFromModifiersName=i,t.makeClassNames=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return l((0,n.default)({},e,!0),u(i(t,e),(function(e){return!0})))};var n=a(r("lSNA"));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){return e.reduce((function(e,r){return Object.assign(e,(0,n.default)({},r,t(r)))}),{})}function i(e,t){return e.map((function(e){return"".concat(t,"_").concat(e)}))}},yGKb:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=a(r("q1tI")),o=a(r("X7Hw")),l=a(r("3jjD")),u=function(e){return n.default.createElement(n.default.Fragment,null)};t.default=u},yKMW:function(e,t,r){var a=r("LboF"),n=r("nUqr");"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},zFHC:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;var n=a(r("pVnL")),o=a(r("lSNA")),l=a(r("J4zp")),u=a(r("QILm")),i=a(r("q1tI")),c=a(r("TSYQ")),s=r("xcCu");r("iDfc");var d=r("xNgg"),f=a(r("ryPi"));function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var b=f.default.Text;f.default.Title;t.Checkbox=function(e){var t=e.uxType,r=void 0===t?"default":t,a=e.className,f=e.children,v=e.disabled,m=(0,u.default)(e,["uxType","className","children","disabled"]),x=(0,d.useId)(),h=(0,l.default)(x,1)[0],y=[r],g=(0,c.default)(a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,s.makeClassNames)("ux-checkbox",y)));return i.default.createElement(i.default.Fragment,null,i.default.createElement("input",(0,n.default)({id:h,type:"checkbox",className:g},m,{disabled:v})),i.default.createElement("label",{htmlFor:h},i.default.createElement(b,null,f)))}}},[["RIZ1",22,1,9,14,11,13,10,17,21,2,3,4,5,6,7,8,12,15,16,18,19,20]]]);