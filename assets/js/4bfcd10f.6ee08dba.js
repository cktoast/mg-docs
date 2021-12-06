"use strict";(self.webpackChunkmg_documentation=self.webpackChunkmg_documentation||[]).push([[858],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},981:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="METEOR REMOTE CONFIG MODULE",c={unversionedId:"Meteor",id:"Meteor",isDocsHomePage:!1,title:"METEOR REMOTE CONFIG MODULE",description:"Introduction",source:"@site/docs/Meteor.md",sourceDirName:".",slug:"/Meteor",permalink:"/documentation/docs/Meteor",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Meteor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LOGGER MODULE",permalink:"/documentation/docs/Logger"},next:{title:"PRIVACY POLICY POPUP",permalink:"/documentation/docs/Privacy Policy Popup"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to Use",id:"how-to-use",children:[],level:2},{value:"How does this work?",id:"how-does-this-work",children:[],level:2},{value:"API &amp; Details",id:"api--details",children:[],level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meteor-remote-config-module"},"METEOR REMOTE CONFIG MODULE"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Provides a unified methodology for receiving remote configuration from different sources, or even multiple\nsources at the same time."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install package from Package Manager UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install one or more Meteor Service Packages from Package Manager UI. These services are what actually handle\nfetching and loading remote settings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open settings from ",(0,r.kt)("inlineCode",{parentName:"p"},"Matchingham > Remote Settings > Configure"),". You can also configure services individually\nfrom the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Matchingham > Remote Settings")," menu.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Meteor.Instance.Initialize()")," method in the appropriate place.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Group settings you want to be remote configurable into ",(0,r.kt)("inlineCode",{parentName:"p"},"Scriptable Object"),"s. Meteor requires config\nobjects to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Scriptable Object"),"s or they cannot be tracked!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mark fields with ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote Setting")," attribute to make them remote compatible. By default, the field name is used\nas the remote key, however, you can provide a custom one as a constructor parameter."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'[RemoteSetting("myModuleEnabled")]\npublic bool enabled;\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want multiple different fields to be managed by the same remote config field, you need to mark\none of them the default value. So in case remote fetch fails, the system will have a default value. This\nis achieved by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"Use As Default Value")," attribute to one of these fields."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'public class MyConfig : ScriptableObject\n{\n    [UseAsDefaultValue]\n    [RemoteSetting("myConfigEnabled")]\n    public bool enabled;\n}\n\npublic class TheirConfig : ScriptableObject\n{\n    [RemoteSetting("myConfigEnabled")]\n    public bool isMyConfigEnabled;\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Just read values from the scriptable objects like you normally do, the values will be the remote values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"// Reading value without remote settings\nmySettingObject.myValue;\n\n// Reading value with remote settings (With Meteor initialized and myValue marked as remote setting)\nmySettingObject.myValue;\n")))),(0,r.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,r.kt)("p",null,"Meteor collects fields marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote Setting")," attribute in scriptable objects registered to Meteor.\nIt then maps them to a default remote provider if there are any imported. These mapping data can be changed\nfrom the module settings from ",(0,r.kt)("inlineCode",{parentName:"p"},"Matchingham > Remote Settings > Configure")," menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Meteor Config",src:n(3872).Z})),(0,r.kt)("p",null,"When initialized, meteor first crates a dictionary holding the default values for each remote setting.\nThen it attempts to initialize all imported remote provider services with the collected default values\npassed in as fall back. When a service is initialized, it notifies Meteor that its values are ready, so\nmeteor syncs remote settings that are mapped to the initialized service. When all services are initialized,\nmeteor initialization is complete."),(0,r.kt)("p",null,"Because meteor is a proxy module, you can easily integrate new remote providers by implementing the\n",(0,r.kt)("inlineCode",{parentName:"p"},"IRemoteSettingsService")," interface. This interface defines the API which Meteor proxy uses to initialize the\nservice, get notified when it is done and get remote values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},"public interface IRemoteSettingsService\n{\n    void Initialize(Dictionary<string, object> defaultRemoteSettings, Action<RemoteInitializationResult> initialized);\n    object GetValue(Type type, string key);\n}\n")),(0,r.kt)("p",null,"Create a service provider for the remote settings provider you want to integrate and make sure it implements\nthe above interface. Then register an instance of the service you coded with ",(0,r.kt)("inlineCode",{parentName:"p"},"Meteor.services.Add(serviceInstance)"),"\ncall. Make sure this registration is done before Meteor is initialized!"),(0,r.kt)("p",null,"The only thing you need to do at this point is, mapping some remote settings to the new provider service you coded.\nJust like with other services, you can do this from Meteor settings from ",(0,r.kt)("inlineCode",{parentName:"p"},"Matchingham > Remote Settings > Configure"),"\nmenu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Meteor Config",src:n(7006).Z})),(0,r.kt)("h2",{id:"api--details"},"API & Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Initialize()"),": Starts module initialization. You need to call this at the\nappropriate place.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dispose()"),": Call this method when game is closing. In editor, this also resets remote fields back to their\noriginal values, so the default values are not corrupted.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WhenInitialized(Action)"),": Allows you to register a callback that will be fired only\nafter the module is successfully initialized. Use this to execute logic that requires\nthis module to be initialized first. If the module has already initialized, immediately\ninvokes the callback.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WhenFailedToInitialize(Action)"),": Allows you to register a callback that will be fired only after\nthe module fails to initialize for any reason. Use this to handle what should happen\nin case this module fails to initialize. If the module has already failed to initialize, immediately\ninvokes the callback.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WhenReady(Action)"),": Combined version of ",(0,r.kt)("inlineCode",{parentName:"li"},"WhenInitialized")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"WhenFailedToInitialize"),".\nDelays execution of callback till module is first initialized or failed to initialize, immediately invoke\nthe callback if it is already initialized or failed to initialize.")))}d.isMDXComponent=!0},3872:function(e,t,n){t.Z=n.p+"assets/images/meteor-config-menu-bd8b97dc103a917e568bd85a86fa853c.png"},7006:function(e,t,n){t.Z=n.p+"assets/images/meteor-settings-ee1bc8d738560f2dfd6eb09a411ac09d.png"}}]);