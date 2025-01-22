"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[495],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1873:(e,t,n)=>{n.d(t,{_x:()=>h,pd:()=>l,Kg:()=>c});var r=n(6540);const o=function(e){let{variant:t,children:n}=e;return r.createElement("span",{className:"badge badge--"+t},n)},i={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},a={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};const l=function(e){let{selector:t,required:n,name:l,description:s,deprecated:p}=e;const u=t?i[t]:i.none;return r.createElement("div",null,r.createElement("span",{style:a.inputName},l," ",r.createElement(o,{variant:"primary"},u.type)," ",n?r.createElement(o,{variant:"warning"},n," Required"):r.createElement(o,{variant:"info"},"Optional")," ",p&&r.createElement(o,{variant:"danger"},"Deprecated")),r.createElement("br",null),r.createElement("p",{style:a.inputDescription,className:"margin-top--sm"},s),r.createElement("hr",null))},s={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};const p=function(e){let{name:t,required:n,children:i}=e;return r.createElement("div",{className:"margin-bottom--lg"},r.createElement("div",{style:s.requirementNameContainer},r.createElement("h3",{style:s.requirementName},t," "),n?r.createElement(o,{variant:"warning"},n," Required"):r.createElement(o,{variant:"info"},"Optional")),i)};const u={zigbee2mqtt:function(e){let{required:t,refers:n,children:o}=e;return r.createElement(p,{name:"Zigbee2MQTT Integration",required:t},r.createElement("p",null,"If you plan to integrate the ",n," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),r.createElement("p",null,o),r.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){let{required:t,refers:n,children:o}=e;return r.createElement(p,{name:"ZHA Integration",required:t},r.createElement("p",null,"If you plan to integrate the ",n," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),r.createElement("p",null,o),r.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){let{required:t,refers:n,children:o}=e;return r.createElement(p,{name:"deCONZ Integration",required:t},r.createElement("p",null,"If you plan to integrate the ",n," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),r.createElement("p",null,o),r.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){let{required:t,children:n}=e;return r.createElement(p,{name:"Controller Automation",required:t},r.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",r.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),r.createElement("p",null,n),r.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",r.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};const c=function(e){let{id:t,required:n,name:o,refers:i,children:a}=e;const l=t?u[t]:p;return r.createElement(l,{name:o,required:n,refers:i},a)};var d=n(6447);const m={myHomeAssistantImage:{width:"100%",maxWidth:212}};const h=function(e){let{category:t,id:n}=e;const[o,i]=(0,r.useState)(!1),a="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+t+"/"+n+"/"+n+".yaml";return r.createElement("div",{className:"card item shadow--md"},r.createElement("div",{className:"card__header margin-bottom--md"},r.createElement("h3",null,"Import this blueprint")),r.createElement("div",{className:"card__body"},r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col col--6"},r.createElement("h5",null,"My Home Assistant"),r.createElement("p",null,r.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(a),target:"_blank",rel:"noreferrer"},r.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:m.myHomeAssistantImage})),r.createElement("br",null),r.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),r.createElement("div",{className:"col col--6"},r.createElement("h5",null,"Direct Link"),r.createElement("button",{type:"button",className:"button button--"+(o?"success":"primary"),onClick:async()=>{await navigator.clipboard.writeText(a),i(!0)}},r.createElement("span",null,r.createElement(d.A,{size:16}),r.createElement("span",null," ",o?"Link Copied!":"Copy Link")))))))}},8499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(8168),o=(n(6540),n(5680)),i=n(1873);const a={title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."},l=void 0,s={unversionedId:"blueprints/controllers/ikea_ictc_g_1",id:"blueprints/controllers/ikea_ictc_g_1",title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT.",source:"@site/docs/blueprints/controllers/ikea_ictc_g_1.mdx",sourceDirName:"blueprints/controllers",slug:"/blueprints/controllers/ikea_ictc_g_1",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_ictc_g_1",draft:!1,editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_ictc_g_1.mdx",tags:[],version:"current",frontMatter:{title:"Controller - IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer",description:"Controller automation for executing any kind of action triggered by the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports deCONZ, ZHA, Zigbee2MQTT."}},p={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Available Hooks",id:"available-hooks",level:2},{value:"Light",id:"light",level:3},{value:"Default Mapping",id:"default-mapping",level:4},{value:"Media Player",id:"media-player",level:3},{value:"Default Mapping",id:"default-mapping-1",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Helper - Last Controller Event",id:"helper---last-controller-event",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i._x,{id:"ikea_ictc_g_1",category:"controllers",mdxType:"ImportCard"}),(0,o.yg)("br",null),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This blueprint is part of the ",(0,o.yg)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,o.yg)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),".")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"This blueprint provides universal support for running any custom action when a button is pressed on the provided IKEA ICTC-G-1 TR\xc5DFRI wireless dimmer. Supports controllers integrated with deCONZ, ZHA, Zigbee2MQTT. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),(0,o.yg)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to optionally loop the rotate actions while the remote is rotating either left or right. Once the remote stops rotating, the loop stops as well. This is useful when rotating the controller should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness)."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Automations created with this blueprint can be connected with one or more ",(0,o.yg)("a",{parentName:"p",href:"/docs/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",(0,o.yg)("a",{parentName:"p",href:"/docs/blueprints/controllers/ikea_ictc_g_1#available-hooks"},"Hooks available for this controller")," for additional details.")),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)(i.Kg,{id:"deconz",mdxType:"Requirement"}),(0,o.yg)(i.Kg,{id:"zha",mdxType:"Requirement"}),(0,o.yg)(i.Kg,{id:"zigbee2mqtt",mdxType:"Requirement"},(0,o.yg)("p",null,"When configuring the remote with Zigbee2MQTT make sure to disable the legacy integration for it, as reported ",(0,o.yg)("a",{parentName:"p",href:"https://www.zigbee2mqtt.io/devices/ICTC-G-1.html#legacy-integration"},"here"),". This blueprint won't work with controllers with a legacy integration due to their instability and fundamental problems.")),(0,o.yg)(i.Kg,{name:"Input Text Integration",required:!0,mdxType:"Requirement"},(0,o.yg)("p",null,"This integration provides the entity which must be provided to the blueprint in the ",(0,o.yg)("strong",{parentName:"p"},"Helper - Last Controller Event")," input. Learn more about this helper by reading the dedicated section in the ",(0,o.yg)("a",{parentName:"p",href:"#helper---last-controller-event"},"Additional Notes"),"."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),(0,o.yg)("h2",{id:"inputs"},"Inputs"),(0,o.yg)(i.pd,{name:"Integration",description:"Integration used for connecting the remote with Home Assistant. Select one of the available values.",selector:"select",required:!0,mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Controller Device",description:"The controller device to use for the automation. Choose a value only if the remote is integrated with deCONZ, ZHA.",selector:"device",required:"deCONZ, ZHA",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Controller Entity",description:"The action sensor of the controller to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Helper - Last Controller Event",description:"Input Text used to store the last event fired by the controller. You will need to manually create a text input entity for this, please read the blueprint Additional Notes for more info.",selector:"entity",required:!0,mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate left",description:"Action to run on rotate left.",selector:"action",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate left stop",description:"Action to run when stopping to rotate left the remote.",selector:"action",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate right",description:"Action to run on rotate right.",selector:"action",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate right stop",description:"Action to run when stopping to rotate right the remote.",selector:"action",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate left - loop until stop",description:"Loop the rotate left action until the rotation is stopped.",selector:"boolean",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate left - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate right - loop until stop",description:"Loop the rotate right action until the rotation is stopped.",selector:"boolean",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Rotate right - Maximum loop repeats",description:"Maximum number of repeats for the custom action, when looping is enabled. Use it as a safety limit to prevent an endless loop in case the corresponding stop event is not received.",selector:"number",mdxType:"Input"}),(0,o.yg)(i.pd,{name:"Helper - Debounce delay",description:"Delay used for debouncing RAW controller events, by default set to 0. A value of 0 disables the debouncing feature. Increase this value if you notice custom actions or linked Hooks running multiple times when interacting with the device. When the controller needs to be debounced, usually a value of 100 is enough to remove all duplicate events.",selector:"number",mdxType:"Input"}),(0,o.yg)("h2",{id:"available-hooks"},"Available Hooks"),(0,o.yg)("h3",{id:"light"},"Light"),(0,o.yg)("p",null,"This Hook blueprint allows to build a controller-based automation to control a light. Supports brightness and color control both for white temperature and rgb lights."),(0,o.yg)("h4",{id:"default-mapping"},"Default Mapping"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Rotate left -> Brightness down (continuous, until stop)"),(0,o.yg)("li",{parentName:"ul"},"Rotate right -> Brightness up (continuous, until stop)")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/blueprints/hooks/light"},"Light Hook docs")),(0,o.yg)("h3",{id:"media-player"},"Media Player"),(0,o.yg)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),(0,o.yg)("h4",{id:"default-mapping-1"},"Default Mapping"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Rotate left -> Volume down (continuous, until stop)"),(0,o.yg)("li",{parentName:"ul"},"Rotate right -> Volume up (continuous, until stop)")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player"},"Media Player Hook docs")),(0,o.yg)("h2",{id:"additional-notes"},"Additional Notes"),(0,o.yg)("h3",{id:"helper---last-controller-event"},"Helper - Last Controller Event"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"helper_last_controller_event")," (Helper - Last Controller Event) input serves as a permanent storage area for the automation. The stored info is used to implement the blueprint's core functionality. To learn more about the helper, how it's used and why it's required, you can read the dedicated section in the ",(0,o.yg)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem#helper---last-controller-event-input"},"Controllers-Hooks Ecosystem documentation"),"."),(0,o.yg)("p",null,"The helper is used to determine stop rotation events when the controller is integrated with ZHA, Zigbee2MQTT, because of the actions mapping for the controller with these integrations. Natively, the controller doesn't allow to distinguish between different rotation events, so the blueprint must store the previous rotation."),(0,o.yg)("p",null,"This blueprint provides beta support for controllers integrated with deCONZ, since not all the supported events are mapped for this integration. If you are using the IKEA ICTC-G-1 with deCONZ and would like to help, you can reach out ",(0,o.yg)("a",{parentName:"p",href:"https://community.home-assistant.io/t/awesome-ha-blueprints-a-curated-list-of-blueprints-easily-create-controller-based-automations-remotes-switches-for-controlling-lights-media-players-and-more/256687"},"here"),"."),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-03-26"),": first blueprint version \ud83c\udf89")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-04-19"),": Fix stop rotation events not being detected with deCONZ")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-04-23"),": Fix deCONZ events not being recognized")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-05-26"),":"),(0,o.yg)("p",{parentName:"li"},"\u26a0\ufe0f ",(0,o.yg)("strong",{parentName:"p"},"Breaking Change"),":"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"helper_last_controller_event")," is now a mandatory input. It also simplifies the blueprint setup (reducing issues due to improper configuration missing the helper, which was required only in certain conditions as was stated in the docs), and provides support for advanced features which might be developed in the future."),(0,o.yg)("p",{parentName:"li"},"If you plan to update this blueprint, please make sure to provide a valid ",(0,o.yg)("inlineCode",{parentName:"p"},"input_text")," entity for the ",(0,o.yg)("inlineCode",{parentName:"p"},"helper_last_controller_event")," input. You should create a separate ",(0,o.yg)("inlineCode",{parentName:"p"},"input_text")," for each Controller blueprint you're configuring, since using the same for multiple automation could lead to inconsistencies and undefined behaviour."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Other changes:")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"\ud83c\udf89 Add Debouncing support. Debouncing avoids duplicate action runs which might occur with certain controllers and integrations. The feature is disabled by default, check the documentation to find out how to enable it"),(0,o.yg)("li",{parentName:"ul"},"Prevent undesired endless loops, which might occur in rare cases when the corresponding stop event is not received, by running loop actions a finite number of times, customizable with two new blueprint inputs"),(0,o.yg)("li",{parentName:"ul"},"Use any RAW stop event (left/right) to identify the stop event corresponding to the current remote rotation"),(0,o.yg)("li",{parentName:"ul"},"Fix inputs wrongly marked as required"),(0,o.yg)("li",{parentName:"ul"},"Fix for Zigbee2MQTT reporting null state changes"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-07-04"),": Fix deCONZ rotation stop events not being properly recognized")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-08-02"),": Improve inputs documentation and organization")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2021-10-26"),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"2022-08-08"),": Optimize characters usage for the ",(0,o.yg)("inlineCode",{parentName:"p"},"helper_last_controller_event")," text input."))))}d.isMDXComponent=!0},6447:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(6540),o=n(5556),i=n.n(o),a=["color","size","title"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=(0,r.forwardRef)((function(e,t){var n=e.color,o=e.size,i=e.title,p=s(e,a);return r.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},p),i?r.createElement("title",null,i):null,r.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"}),r.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),r.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))}));p.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),title:i().string},p.defaultProps={color:"currentColor",size:"1em",title:null};const u=p}}]);