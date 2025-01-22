"use strict";(self.webpackChunkawesome_ha_blueprints_website=self.webpackChunkawesome_ha_blueprints_website||[]).push([[642],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var i=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1873:(e,t,n)=>{n.d(t,{_x:()=>h,pd:()=>s,Kg:()=>p});var i=n(6540);const o=function(e){let{variant:t,children:n}=e;return i.createElement("span",{className:"badge badge--"+t},n)},r={action:{type:"Action"},addon:{type:"Add-on"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},a={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};const s=function(e){let{selector:t,required:n,name:s,description:l,deprecated:c}=e;const u=t?r[t]:r.none;return i.createElement("div",null,i.createElement("span",{style:a.inputName},s," ",i.createElement(o,{variant:"primary"},u.type)," ",n?i.createElement(o,{variant:"warning"},n," Required"):i.createElement(o,{variant:"info"},"Optional")," ",c&&i.createElement(o,{variant:"danger"},"Deprecated")),i.createElement("br",null),i.createElement("p",{style:a.inputDescription,className:"margin-top--sm"},l),i.createElement("hr",null))},l={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};const c=function(e){let{name:t,required:n,children:r}=e;return i.createElement("div",{className:"margin-bottom--lg"},i.createElement("div",{style:l.requirementNameContainer},i.createElement("h3",{style:l.requirementName},t," "),n?i.createElement(o,{variant:"warning"},n," Required"):i.createElement(o,{variant:"info"},"Optional")),r)};const u={zigbee2mqtt:function(e){let{required:t,refers:n,children:o}=e;return i.createElement(c,{name:"Zigbee2MQTT Integration",required:t},i.createElement("p",null,"If you plan to integrate the ",n," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),i.createElement("p",null,o),i.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){let{required:t,refers:n,children:o}=e;return i.createElement(c,{name:"ZHA Integration",required:t},i.createElement("p",null,"If you plan to integrate the ",n," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),i.createElement("p",null,o),i.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){let{required:t,refers:n,children:o}=e;return i.createElement(c,{name:"deCONZ Integration",required:t},i.createElement("p",null,"If you plan to integrate the ",n," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),i.createElement("p",null,o),i.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){let{required:t,children:n}=e;return i.createElement(c,{name:"Controller Automation",required:t},i.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",i.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),i.createElement("p",null,n),i.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",i.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};const p=function(e){let{id:t,required:n,name:o,refers:r,children:a}=e;const s=t?u[t]:c;return i.createElement(s,{name:o,required:n,refers:r},a)};var d=n(6447);const m={myHomeAssistantImage:{width:"100%",maxWidth:212}};const h=function(e){let{category:t,id:n}=e;const[o,r]=(0,i.useState)(!1),a="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+t+"/"+n+"/"+n+".yaml";return i.createElement("div",{className:"card item shadow--md"},i.createElement("div",{className:"card__header margin-bottom--md"},i.createElement("h3",null,"Import this blueprint")),i.createElement("div",{className:"card__body"},i.createElement("div",{className:"row row--no-gutters"},i.createElement("div",{className:"col col--6"},i.createElement("h5",null,"My Home Assistant"),i.createElement("p",null,i.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(a),target:"_blank",rel:"noreferrer"},i.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:m.myHomeAssistantImage})),i.createElement("br",null),i.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),i.createElement("div",{className:"col col--6"},i.createElement("h5",null,"Direct Link"),i.createElement("button",{type:"button",className:"button button--"+(o?"success":"primary"),onClick:async()=>{await navigator.clipboard.writeText(a),r(!0)}},i.createElement("span",null,i.createElement(d.A,{size:16}),i.createElement("span",null," ",o?"Link Copied!":"Copy Link")))))))}},6539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(8168),o=(n(6540),n(5680)),r=n(1873);const a={title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."},s=void 0,l={unversionedId:"blueprints/automation/persistent_notification_to_mobile",id:"blueprints/automation/persistent_notification_to_mobile",title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices.",source:"@site/docs/blueprints/automation/persistent_notification_to_mobile.mdx",sourceDirName:"blueprints/automation",slug:"/blueprints/automation/persistent_notification_to_mobile",permalink:"/awesome-ha-blueprints/docs/blueprints/automation/persistent_notification_to_mobile",draft:!1,editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/automation/persistent_notification_to_mobile.mdx",tags:[],version:"current",frontMatter:{title:"Send Web UI persistent notifications to Mobile Devices",description:"Send Web UI persistent notifications with the provided ID to the specified Mobile Devices."}},c={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Additional Notes",id:"additional-notes",level:2},{value:"Changelog",id:"changelog",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r._x,{id:"persistent_notification_to_mobile",category:"automation",mdxType:"ImportCard"}),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"This blueprint enables to send Web UI persistent notifications, (ie. the ones created with the ",(0,o.yg)("inlineCode",{parentName:"p"},"persistent_notification.create")," service) to the specified mobile device or device group. It also provides the option to choose which notifications must be forwarded, based on the provided notification ID."),(0,o.yg)("p",null,"Working both on iOS and Android devices, mobile notifications can then be organized into a specific group. For Android devices, they can also be assigned to a specific channel (for applying custom notification settings such as sound, vibration, etc.)."),(0,o.yg)("p",null,"This blueprint can be useful in all situations when a web interface persistent notification is desired but the event should be reported also on a mobile device."),(0,o.yg)("p",null,"Moreover, it can be handy in scenarios when a notification cannot be sent directly to a mobile device, for example for system generated persistent notifications (invalid login attempts, integration setup required, supervisor alerts, etc.) and for integrations/addons which, instead of providing a custom event for triggering automations, use the ",(0,o.yg)("inlineCode",{parentName:"p"},"persistent_notification.create")," service as an event report mechanism."),(0,o.yg)("p",null,"Once opened on the mobile device, the relative persistent notification in the web UI is not dismissed."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)(r.Kg,{name:"Persistent Notification Integration",required:!0,mdxType:"Requirement"},(0,o.yg)("p",null,"You must have this integration enabled on your system to run the automation, since the notifications on the web interface are generated by this integration. This should be activated by default so unless you tweaked the default configuration you're good to go."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/persistent_notification/"},"Persistent Notification Integration Docs"))),(0,o.yg)(r.Kg,{name:"Mobile App Integration",required:!0,mdxType:"Requirement"},(0,o.yg)("p",null,"This integration provides the service to send notification to mobile devices. This should be activated by default so unless you tweaked the default configuration you're good to go."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/mobile_app/"},"Mobile App Integration Docs"))),(0,o.yg)(r.Kg,{name:"Home Assistant Companion App",required:!0,mdxType:"Requirement"},(0,o.yg)("p",null,"The official mobile app for Home Assistant. Make sure to have the Home Assistant Companion App installed and configured on mobile devices you plan to use for this automation."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices"},"Home Assistant Companion App Docs"))),(0,o.yg)(r.Kg,{name:"Notify Group Integration",required:!0,mdxType:"Requirement"},(0,o.yg)("p",null,"If you want to simultaneously send the notification to multiple devices, you can define a notification group using this integration in your ",(0,o.yg)("inlineCode",{parentName:"p"},"configuration.yaml"),", then provide the service for the notification group in the ",(0,o.yg)("a",{parentName:"p",href:"#mobile-devices-notification-service"},"Mobile devices notification service input"),". This integration should be enabled by default. More on how to setup notification groups in the official docs."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/notify.group/"},"Notify Group Integration Docs"))),(0,o.yg)("h2",{id:"inputs"},"Inputs"),(0,o.yg)(r.pd,{name:"Notification ID",description:"The notification ID of persistent notifications which must be sent to mobile devices. Empty for all notifications. This allows to filter notifications based on their ID before it gets created on the mobile device. For example, if you want to receive notifications on your mobile device for all invalid login attempts, you could set this input to `http-login`, the ID of such persistent notifications.",selector:"text",mdxType:"Input"}),(0,o.yg)(r.pd,{name:"Mobile devices notification service",description:"The notification service for mobile devices (eg. service.mobile_app_<your_device_id_here>). You can provide both a notify group or a single notify device here.",selector:"text",required:!0,mdxType:"Input"}),(0,o.yg)(r.pd,{name:"Replace notifications with same ID",description:"Replace existing notifications with the same notification ID.",selector:"boolean",mdxType:"Input"}),(0,o.yg)(r.pd,{name:"(Android only) Notification channel",description:"Android notification channel. Allows to group notifications to then apply custom settings for sound, vibration, etc. Leave blank if you do not want to use this feature.",selector:"text",mdxType:"Input"}),(0,o.yg)(r.pd,{name:"Notification group",description:"Notification group for the notifications sent with this automation. Use this to group notifications in the notification tray. Leave blank if you do not want to use this feature.",selector:"text",mdxType:"Input"}),(0,o.yg)("h2",{id:"additional-notes"},"Additional Notes"),(0,o.yg)("p",null,"Please be aware that if you use notification groups which include both iOS and Android devices, some features (like Android Channels and notification groups) don't work. More details in the ",(0,o.yg)("a",{parentName:"p",href:"https://companion.home-assistant.io/docs/notifications/notifications-basic#sending-notifications-to-multiple-devices"},"Home Assistant Companion App Docs")),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"2021-02-01"),": first blueprint version \ud83c\udf89"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"2021-10-26"),": Standardize blueprints structure and inputs naming across the whole collection. Improve blueprint documentation. No functionality change.")))}d.isMDXComponent=!0},6447:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(6540),o=n(5556),r=n.n(o),a=["color","size","title"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,i.forwardRef)((function(e,t){var n=e.color,o=e.size,r=e.title,c=l(e,a);return i.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:n},c),r?i.createElement("title",null,r):null,i.createElement("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"}),i.createElement("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),i.createElement("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))}));c.propTypes={color:r().string,size:r().oneOfType([r().string,r().number]),title:r().string},c.defaultProps={color:"currentColor",size:"1em",title:null};const u=c}}]);