# COURT RATING/REVIEW MODULE

## Introduction

Provides a simple API to ask user to review the app.

## How to use

* Import package from Package Manager UI.
* Open module settings from `Matchingham > App Review`.
* If you want, you can check `Use Biased Request` to first show an in-game ui to conditionally direct users
  to native review flow.
    * If you are using biased request with default ui you can choose a minimum star rating to allow user
    to review app via native review flow.
* Call `Court.Instance.Initialize()` to initialize module.
* Call `RequestJudgement(Action)` anywhere after initialization to ask user to review the app.

## Custom In-App Review UI

In-app review ui is a prefab with a script an attached script inheriting from `RatingPromptBase` class.
You can either create a variant of the prefab to make simple adjustments or create a completely new prefab
with a script inheriting from `RatingPromptBase` class attached. You can write your own script to implement
custom behaviour, just make sure it inherits from `RatingPromptBase`. Using a prefab that doesn't have an 
appropriate script attached will crash the app.

## API & Details


* **Initialize()**: Starts module initialization. You need to call this at the
  appropriate place. Since this module can use remote configuration, you should
  make sure this call is made after remote config is ready.
  

* **RequestJudgement(Action)**: Opens either a native review prompt, or first an in-game prompt provided in 
  settings. This behaviour is configured from the module settings. The in-game prompt can be replaced from
  the settings as well.


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