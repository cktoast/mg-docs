# PRIVACY POLICY POPUP

## Introduction

Privacy Policy Popup provides a simple way to display privacy policy information to the user in-game.

## How to use

* Import this package using Unity's Package Manger UI
* Click `Matchingham > Privacy Policy` to open settings
* Enter the local copy of your privacy policy text, in markdown format, to `Privacy Policy Text` field
* Enter the local copy of your terms and conditions text, in markdown format, to `Terms And Conditions` field
* If you want, you can host the privacy policy on a web endpoint as well. If you do so, you can enter its 
URL to `Privacy Policy URL` field.
* If you want, you can host the terms and conditions on a web endpoint as well. If you do so, you can enter its
  URL to `Terms And Conditions URL` field.
* Make the `PrivacyPolicy.Instance.Initialize()` call to begin module initialization.
* Use `PrivacyPolicy.Instance.ShowPrivacyPopup()` method to display privacy policy.
* Use `PrivacyPolicy.Instance.ShowTermsAndConditions()` method to display terms and conditions.

## What does this do?

This provides a unified way to manage in game privacy policy. It provides a default locally hosted privacy
policy solution, with support to fetch a remote privacy policy text to overwrite the local version on runtime.
This module also provides an API to get the privacy policy string to be used in other parts of your app, or in
other Matchingham SDK packages such as `Data Usage Consent`.

This module also provides 2 default UI views (popups) to display privacy policy in game with just a simple API
call. If you want, you can create your own prefabs with `PrivacyPolicyView` script attached. Create your custom
prefab, attach the script and set references, then assign the prefabs in module settings accessed from
`Matchingham > Privacy Policy`.

## Customizing the In-Game Prompt

Privacy policy package comes bundled with 2 popup prefabs, one for widescreen layout, one for portrait layout.
You can modify these by:
* Creating a variant of these objects in `Assets` folder and replacing prefab references in package settings.
* Creating a fully custom prefab and saving it to `Assets` folder, attaching them the `PrivacyPolicyView` script
and replacing prefab references in package settings.
  
## API & Details

### Privacy Policy


* **Initialize()**: Starts module initialization. You need to call this at the appropriate place.


* **ShowPrivacyPopup()**: Shows the privacy policy popup, using the layout best suited for current screen
orientation (widescreen/portrait).


* **ShowTermsAndConditions()**: Shows the terms and conditions popup, using the layout best suited for current screen
  orientation (widescreen/portrait).
  

* **GetPrivacyPolicy()**: Returns current privacy policy text. If a remote endpoint is provided and fetch was 
successful, this method will return the fetched privacy policy text, instead of the one provided locally at build
time.


* **GetTermsAndConditions()**: Returns current terms and conditions text. If a remote endpoint is provided and fetch was
  successful, this method will return the fetched privacy terms and conditions text, instead of the one provided locally at build
  time.



* **WhenInitialized(Action)**: Allows you to register a callback that will be fired only
  after the module is successfully initialized. Use this to execute logic that requires
  this module to be initialized first. If the module has already initialized, immediately
  invokes the callback.



* **WhenFailedToInitialize(Action)**: Allows you to register a callback that will be fired only after
  the module fails to initialize for any reason. Use this to handle what should happen
  in case this module fails to initialize. If the module has already failed to initialize, immediately
  invokes the callback.



* **WhenReady(Action)**: Combined version of `WhenInitialized` and `WhenFailedToInitialize`.
  Delays execution of callback till module is first initialized or failed to initialize, immediately invoke
  the callback if it is already initialized or failed to initialize.