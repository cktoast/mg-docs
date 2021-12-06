"use strict";(self.webpackChunkmg_documentation=self.webpackChunkmg_documentation||[]).push([[774],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),p=a,h=c["".concat(m,".").concat(p)]||c[p]||u[p]||l;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2435:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],o={},m="BACKPACK INVENTORY MODULE",s={unversionedId:"Backpack",id:"Backpack",isDocsHomePage:!1,title:"BACKPACK INVENTORY MODULE",description:"Introduction",source:"@site/docs/Backpack.md",sourceDirName:".",slug:"/Backpack",permalink:"/mg-docs/docs/Backpack",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Backpack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/mg-docs/docs/intro"},next:{title:"CHARLIE NOTIFICATIONS",permalink:"/mg-docs/docs/Charlie"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How to use",id:"how-to-use",children:[],level:2},{value:"How does this work?",id:"how-does-this-work",children:[],level:2},{value:"API &amp; Details",id:"api--details",children:[],level:2}],u={toc:d};function c(e){var t=e.components,o=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"backpack-inventory-module"},"BACKPACK INVENTORY MODULE"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Inventory management and item database"),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Import package from Package Manager UI"),(0,l.kt)("li",{parentName:"ul"},"Open item database from ",(0,l.kt)("inlineCode",{parentName:"li"},"Matchingham > Items > Item Database"),". You can manage your items from here.\n",(0,l.kt)("img",{alt:"Add Item Menu",src:n(322).Z}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Either click ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Item")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"Item Database")," editor window, or click ",(0,l.kt)("inlineCode",{parentName:"li"},"Matchingham > Items > Add Item"),(0,l.kt)("img",{alt:"Add Item Menu",src:n(463).Z}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the type of item you want to add from the dropdown"),(0,l.kt)("li",{parentName:"ul"},"Enter item details and hit ",(0,l.kt)("inlineCode",{parentName:"li"},"Create")),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"AddItem(itemId: string, quantity: int (1))")," method to add an item to player's inventory, with\noptional quantity. If you don't provide the quantity parameter, it will be 1 by default"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"RemoveItem(itemId: string, quantity: int (1))")," to remove given quantity of given item from player's\ninventory"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"GetOwnedQuantity(itemId: string)")," to get owned item quantity in player's inventory for provided item id"),(0,l.kt)("li",{parentName:"ul"},"You can check if player has an item using the ",(0,l.kt)("inlineCode",{parentName:"li"},"HasItem(itemId: string)")," method"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"IsMaxCapacity(itemId: string)")," to check if the owned quantity of an item has reached max value in player\ninventory. If so, ",(0,l.kt)("inlineCode",{parentName:"li"},"AddItem")," calls will not add additional items..."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"GetEntries()")," method to enumerate all item entries in the player's inventory")),(0,l.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,l.kt)("p",null,"By default, backpack provides you with a basic item data class that has no in game representation. These kind\nof items can be used for in game resource management, like player money, hard currency etc. If you want, you\ncan create new item types with custom fields, like in-game prefab, ui representation, just make sure that\nclass inherits from ",(0,l.kt)("inlineCode",{parentName:"p"},"Item")," class."),(0,l.kt)("p",null,"For example, creating a custom item that can be placed in game world with player input, which will also\nhave a ui representation (for user to select which item will be placed) can be defined like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},"public class GameWorldItem : Item\n{\n    public Sprite thumbnail;\n    public GameObject gameWorldPrefab;\n}\n")),(0,l.kt)("p",null,"You can then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Matchingham > Items > Add Item")," menu to define items using the new ",(0,l.kt)("inlineCode",{parentName:"p"},"GameWorldItem")," class.\nAfter defining some items of this type, you can use Backpack API methods to add, remove, check and query owned\nquantity of each one like other items."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Custom Item",src:n(6422).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NOTE: The ",(0,l.kt)("inlineCode",{parentName:"li"},"Max Quantity")," field defines how many of that item the inventory can hold. Leave it ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"for no limit.")),(0,l.kt)("p",null,"If you have an item that you don't want in the project anymore, you can remove it using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"Matchingham > Items > Item Database")," menu. From here, find the item you want to remove from the project,\nthen hit the small 'x' button on the right side of the entry to delete the item. Please note that doing this\non a live project might cause problems as the item might be referenced in player's inventory. If the item\nmust be removed, write a simple script to check player inventory and remove invalid items from\nit."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Custom Item",src:n(6453).Z})),(0,l.kt)("h2",{id:"api--details"},"API & Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Initialize()"),": Starts module initialization. You don't need to call this method, it is called automatically\nat app startup.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GetEntries()"),": Returns an ",(0,l.kt)("inlineCode",{parentName:"li"},"IEnumerable<ItemEntry>"),". This object represents the items inside the player's\ninventory.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GetSlots(itemId: string)"),": Returns all slot instances for the same item. You can use\nthis to implement an item that has modifiable data fields. So each instance of the same item\ncan have different data, which means you need to be able to manage them individually, instead\nof managing them as a stack of the same item.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GetSlot(itemId: string, slotIndex: int)"),": Returns the data of a specific slot in the stack. For example if you have 5 items of 'Iron Sword', calling this method as\n",(0,l.kt)("inlineCode",{parentName:"li"},'GetSlots("it-ironsword", 2)')," will return the data of the third 'Iron Sword' in the stack.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HasItem(itemId: string)"),": Checks if the user has a certain item.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"GetOwnedQuantity(itemId: string)"),": Returns a value indicating how many of the given item player owns.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"IsMaxCapacity(itemId: string)"),": Returns a value indicating whether the player owns maximum allowed\nnumber of a certain item type.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AddItem(itemId: string, quantity: int (1))"),": Adds given item to player inventory, with provided quantity.\nIf no quantity is provided, only adds 1.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"AddItem(itemId: string, slotIndex: int)"),": Used to add a single item to inventory with custom data. Use this with items that has customizable data fields.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RemoveItem(itemId: string, quantity: int (1))"),": Removes given item from player inventory, with provided quantity.\nIf no quantity is provided, only removes 1.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RemoveItem(slot: int, itemId: string)"),": Removes the item in the specific slot in the stack. Use this with items that has customizable data fields.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WhenInitialized(Action)"),": Allows you to register a callback that will be fired only\nafter the module is successfully initialized. Use this to execute logic that requires\nthis module to be initialized first. If the module has already initialized, immediately\ninvokes the callback.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WhenFailedToInitialize(Action)"),": Allows you to register a callback that will be fired only after\nthe module fails to initialize for any reason. Use this to handle what should happen\nin case this module fails to initialize. If the module has already failed to initialize, immediately\ninvokes the callback.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"WhenReady(callback)"),": Combined version of ",(0,l.kt)("inlineCode",{parentName:"li"},"WhenInitialized")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"WhenFailedToInitialize"),".\nDelays execution of callback till module is first initialized or failed to initialize, immediately invoke\nthe callback if it is already initialized or failed to initialize.")))}c.isMDXComponent=!0},6422:function(e,t,n){t.Z=n.p+"assets/images/add-item-editor-custom-type-18c3402ba8fa199f0b87a14c867cc233.png"},463:function(e,t,n){t.Z=n.p+"assets/images/add-item-937d24643275874664c75906eb567f82.png"},6453:function(e,t,n){t.Z=n.p+"assets/images/item-database-remove-87efafa678292ad0bbafa77d6e79b131.png"},322:function(e,t,n){t.Z=n.p+"assets/images/item-database-1a992e0b2cda7c7b53477fb653fb661c.png"}}]);