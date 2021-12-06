"use strict";(self.webpackChunkmg_documentation=self.webpackChunkmg_documentation||[]).push([[362],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(k,r(r({ref:t},u),{},{components:n})):i.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="DATA USAGE CONSENT",p={unversionedId:"Data Usage Consent",id:"Data Usage Consent",isDocsHomePage:!1,title:"DATA USAGE CONSENT",description:"Introduction",source:"@site/docs/Data Usage Consent.md",sourceDirName:".",slug:"/Data Usage Consent",permalink:"/documentation/docs/Data Usage Consent",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Data Usage Consent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"COURT RATING/REVIEW MODULE",permalink:"/documentation/docs/Court"},next:{title:"DEALER IN APP PURCHASE MODULE",permalink:"/documentation/docs/Dealer"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to use",id:"how-to-use",children:[],level:2},{value:"What does this do?",id:"what-does-this-do",children:[],level:2},{value:"Customizing the In-Game Prompt",id:"customizing-the-in-game-prompt",children:[],level:2},{value:"API &amp; Details",id:"api--details",children:[{value:"Data Usage Consent Manager",id:"data-usage-consent-manager",children:[],level:3},{value:"Consent Prompt View Base",id:"consent-prompt-view-base",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-usage-consent"},"DATA USAGE CONSENT"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Data Usage Consent")," package is used for enforcing privacy policy compliance and ATT/GDPR/CCPA consent acquisition."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Import this package using Unity's Package Manager UI."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Matchingham > Data Usage Consent")," from the menu bar."),(0,o.kt)("li",{parentName:"ul"},"Enter privacy policy URLs of ad networks used in project to ",(0,o.kt)("inlineCode",{parentName:"li"},"Advertising Partner Links")," list"),(0,o.kt)("li",{parentName:"ul"},"Enter privacy policy URLs of analytics services used in project to ",(0,o.kt)("inlineCode",{parentName:"li"},"Analytics Partner Links")," list"),(0,o.kt)("li",{parentName:"ul"},"On iOS section, fill the ",(0,o.kt)("inlineCode",{parentName:"li"},"Usage Description")," text area. Describe why you want to track user data.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optionally, you can turn off iOS ATT Followup option. Turning this option off will prevent the package\nfrom enforcing Privacy Policy compliance with a followup popup (in game)\nif the user clicks no on ATT prompt."))),(0,o.kt)("li",{parentName:"ul"},"In code, call ",(0,o.kt)("inlineCode",{parentName:"li"},"RequestUserConsent()")," method in app's initialization stage to block\ninitialization till user's response is received.    ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"DataUsageConsentManager.Instance.WhenReady(initResult =>\n{\n    if (initResult == InitializationResult.Initialized)\n    {\n        DataUsageConsentManager.Instance.RequestUserConsent(() =>\n        {\n            // Initialize/disable content according to user consent here\n            // Initialize game\n        });\n    }\n    else\n    {\n        // Disable content that requires user consent\n        // Initialize game\n    }\n});\n")))),(0,o.kt)("p",null,"For more details on available API and its details, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"API & Details")," section\nat the end of the documentations."),(0,o.kt)("h2",{id:"what-does-this-do"},"What does this do?"),(0,o.kt)("p",null,"On Android:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checks if user is in GDPR or CCPA region.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If they are, enforces privacy policy compliance and asks for data collection consent for\npersonalized ads"),(0,o.kt)("li",{parentName:"ul"},"If they are not, simply skips")))),(0,o.kt)("p",null,"On iOS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Asks for ATT permission",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If user allows ATT, skips"),(0,o.kt)("li",{parentName:"ul"},"If user doesn't allow ATT, shows a privacy policy enforcement prompt (if not disabled).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This prevents user from playing the game if they don't accept the privacy policy")))))),(0,o.kt)("h2",{id:"customizing-the-in-game-prompt"},"Customizing the In-Game Prompt"),(0,o.kt)("p",null,"In game prompt is a prefab that is loaded on Android and iOS (if ATT reponse is 'NO') when the\n",(0,o.kt)("inlineCode",{parentName:"p"},"RequestUserConsent")," method is called.\nYou can modify how this popup behaves by doing the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create a variant of the same prefab in ",(0,o.kt)("inlineCode",{parentName:"li"},"Assets")," folder and set that prefab as the prompt prefab",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can replace the script on the view to change/extend behaviour (New script must inherit from\n",(0,o.kt)("inlineCode",{parentName:"li"},"ConsentPromptViewBase")," class or it will not work)"),(0,o.kt)("li",{parentName:"ul"},"If your new prompt requires extra configuration that is not available on the settings object\nof the package, you will need to create your own way of adding those configuration options. For this,\nyou can simply create another ",(0,o.kt)("inlineCode",{parentName:"li"},"ScriptableObject")," that holds your custom configuration options."))),(0,o.kt)("li",{parentName:"ul"},"Create a completely new prefab in ",(0,o.kt)("inlineCode",{parentName:"li"},"Assets")," folder and set that as the prompt prefab in settings",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can attach either one of the existing prompt scripts that comes with the package, or create\nyour own script, just make sure it inherits ",(0,o.kt)("inlineCode",{parentName:"li"},"ConsentPromptViewBase")," class and correctly implements\nthe API"),(0,o.kt)("li",{parentName:"ul"},"If your new prompt requires extra configuration that is not available on the settings object\nof the package, you will need to create your own way of adding those configuration options. For this,\nyou can simply create another ",(0,o.kt)("inlineCode",{parentName:"li"},"ScriptableObject")," that holds your custom configuration options.\n")))),(0,o.kt)("h2",{id:"api--details"},"API & Details"),(0,o.kt)("h3",{id:"data-usage-consent-manager"},"Data Usage Consent Manager"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IsGDPRRequired (get)"),": If user is in Europe Economic Area, this will be true, otherwise false")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IsCCPARequired (get)"),": If user is in California, this will be true, otherwise false")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UserGDPRConsent (get)"),": If user is/was in GDPR region, and responded to consent prompt, returns\nuser's response (",(0,o.kt)("inlineCode",{parentName:"li"},"Ok")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Nok"),"). Otherwise returns ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown"),".\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UserCCPAConsent (get)"),": If user is/was in CCPA region, and responded to consent prompt, returns\nuser's response (",(0,o.kt)("inlineCode",{parentName:"li"},"Ok")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Nok"),"). Otherwise returns ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UserConsent")," (get): Possible values: ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Nok"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Ok"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If user has not responded to any consent prompt yet, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown")),(0,o.kt)("li",{parentName:"ul"},"If user has given tracking consent (GDPR, CCPA, ATT), this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Ok")),(0,o.kt)("li",{parentName:"ul"},"If user has NOT given tracking consent (GDPR, CCPA, ATT), this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Nok"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UserAdTracking"),": Possible values: ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NotAllowed"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Allowed"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Android",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If user has not given any response to ad tracking consent request, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown")),(0,o.kt)("li",{parentName:"ul"},"If user doesn't check the ad option on in-game prompt, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"NotAllowed")),(0,o.kt)("li",{parentName:"ul"},"If user checks the ad option on in-game prompt, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Allowed")))),(0,o.kt)("li",{parentName:"ul"},"On iOS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is directly mapped to user's ATT response"),(0,o.kt)("li",{parentName:"ul"},"If user never gave any response to ATT prompt, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Unknown")),(0,o.kt)("li",{parentName:"ul"},"If user has NOT given ATT consent, or given restricted consent, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"NotAllowed")),(0,o.kt)("li",{parentName:"ul"},"If user has given ATT consent, this will return ",(0,o.kt)("inlineCode",{parentName:"li"},"Allowed"))))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WhenInitialized(Action)"),": Allows you to register a callback that will be fired only\nafter the module is successfully initialized. Use this to execute logic that requires\nthis module to be initialized first. If the module has already initialized, immediately\ninvokes the callback")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WhenFailedToInitialize(Action)"),": Allows you to register a callback that will be fired only after\nthe module fails to initialize for any reason. Use this to handle what should happen\nin case this module fails to initialize. If the module has already failed to initialize, immediately\ninvokes the callback.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WhenReady(Action)"),": Combined version of ",(0,o.kt)("inlineCode",{parentName:"li"},"WhenInitialized")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"WhenFailedToInitialize"),".\nDelays execution of callback till module is first initialized or failed to initialize, immediately invoke\nthe callback if it is already initialized or failed to initialize.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RequestUserConsent(Action)"),": If user consent state is unknown, asks for user consent. Once user\nis done with consent prompts, invokes the callback. Use this callback to turn on/off consent dependent\nfeatures and block game initialization till consent response is received if necessary.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On Android",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"User needs to separately give consent to GDPR and CCPA. If user is in GDPR region and\nGDPR consent is unknown, user will be prompted to give consent. This will happen for CCPA as well."),(0,o.kt)("li",{parentName:"ul"},"Once user is done with in-game prompt (after it closes), invokes the callback."))),(0,o.kt)("li",{parentName:"ul"},"On iOS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If user's ATT consent status is unknown, opens native ATT prompt. If user selects no",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Opens in-game prompt and invokes the callback after it is closed if ",(0,o.kt)("inlineCode",{parentName:"li"},"iOS ATT Followup")," option\nis turned on in settings."),(0,o.kt)("li",{parentName:"ul"},"Invokes the callback if ",(0,o.kt)("inlineCode",{parentName:"li"},"iOS ATT Followup")," option is turned off in settings."))),(0,o.kt)("li",{parentName:"ul"},"If user allows tracking on ATT prompt, invokes the callback.")))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SetAdTracking(UserResponse)"),": Use this method to set user response from a prompt script. Only call this\nmethod from scripts that inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"ConsentPromptViewBase")," class, and pass in user's response in the prompt\nas a parameter. You don't need to call this method anywhere if you are not using a custom prompt script, built\nin prompts and logic already sets ad tracking response internally.\n")),(0,o.kt)("h3",{id:"consent-prompt-view-base"},"Consent Prompt View Base"),(0,o.kt)("p",null,"Inherit from this to create a custom consent prompt behaviour."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OnPromptDismissed"),": Callback field. This callback is set by the manager internally and is used to notify\nmodule that prompt is closed and logic can continue. ",(0,o.kt)("strong",{parentName:"li"},"Do not overwrite its value!"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set(DataUsageConsentConfig)"),": Called when prompt is opened. Allows initializing prompt according to the\nconfig.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NotifyPromptDismissed()"),": When user interaction with prompt is done and prompt is closed, invoke this to\nnotify module that prompt is closed and logic can continue. This internally invokes the ",(0,o.kt)("inlineCode",{parentName:"li"},"OnPromptDismissed"),"\ncallback")))}m.isMDXComponent=!0}}]);