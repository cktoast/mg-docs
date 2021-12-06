# DATA USAGE CONSENT

## Introduction

`Data Usage Consent` package is used for enforcing privacy policy compliance and ATT/GDPR/CCPA consent acquisition.

## How to use

* Import this package using Unity's Package Manager UI.
* Click `Matchingham > Data Usage Consent` from the menu bar.
* Enter privacy policy URLs of ad networks used in project to `Advertising Partner Links` list
* Enter privacy policy URLs of analytics services used in project to `Analytics Partner Links` list
* On iOS section, fill the `Usage Description` text area. Describe why you want to track user data.
    * Optionally, you can turn off iOS ATT Followup option. Turning this option off will prevent the package 
      from enforcing Privacy Policy compliance with a followup popup (in game) 
      if the user clicks no on ATT prompt.
* In code, call `RequestUserConsent()` method in app's initialization stage to block 
  initialization till user's response is received.    
    ```
    DataUsageConsentManager.Instance.WhenReady(initResult =>
    {
        if (initResult == InitializationResult.Initialized)
        {
            DataUsageConsentManager.Instance.RequestUserConsent(() =>
            {
                // Initialize/disable content according to user consent here
                // Initialize game
            });
        }
        else
        {
            // Disable content that requires user consent
            // Initialize game
        }
    });
    ```

For more details on available API and its details, see the `API & Details` section 
at the end of the documentations.
      
## What does this do?

On Android:
* Checks if user is in GDPR or CCPA region.
    * If they are, enforces privacy policy compliance and asks for data collection consent for 
      personalized ads
    * If they are not, simply skips
    
On iOS:
* Asks for ATT permission
    * If user allows ATT, skips
    * If user doesn't allow ATT, shows a privacy policy enforcement prompt (if not disabled).
        * This prevents user from playing the game if they don't accept the privacy policy

## Customizing the In-Game Prompt

In game prompt is a prefab that is loaded on Android and iOS (if ATT reponse is 'NO') when the 
`RequestUserConsent` method is called.
You can modify how this popup behaves by doing the following:
* You can create a variant of the same prefab in `Assets` folder and set that prefab as the prompt prefab
    * You can replace the script on the view to change/extend behaviour (New script must inherit from 
      `ConsentPromptViewBase` class or it will not work)
    * If your new prompt requires extra configuration that is not available on the settings object 
      of the package, you will need to create your own way of adding those configuration options. For this,
      you can simply create another `ScriptableObject` that holds your custom configuration options.
* Create a completely new prefab in `Assets` folder and set that as the prompt prefab in settings
    * You can attach either one of the existing prompt scripts that comes with the package, or create
    your own script, just make sure it inherits `ConsentPromptViewBase` class and correctly implements
    the API
    * If your new prompt requires extra configuration that is not available on the settings object
    of the package, you will need to create your own way of adding those configuration options. For this,
    you can simply create another `ScriptableObject` that holds your custom configuration options.
      
## API & Details

### Data Usage Consent Manager
* **IsGDPRRequired (get)**: If user is in Europe Economic Area, this will be true, otherwise false
  

* **IsCCPARequired (get)**: If user is in California, this will be true, otherwise false
  

* **UserGDPRConsent (get)**: If user is/was in GDPR region, and responded to consent prompt, returns
user's response (`Ok` or `Nok`). Otherwise returns `Unknown`.
  

* **UserCCPAConsent (get)**: If user is/was in CCPA region, and responded to consent prompt, returns
  user's response (`Ok` or `Nok`). Otherwise returns `Unknown`.
  

* **UserConsent** (get): Possible values: `Unknown`, `Nok`, `Ok`
    * If user has not responded to any consent prompt yet, this will return `Unknown`
    * If user has given tracking consent (GDPR, CCPA, ATT), this will return `Ok`
    * If user has NOT given tracking consent (GDPR, CCPA, ATT), this will return `Nok`
    


* **UserAdTracking**: Possible values: `Unknown`, `NotAllowed`, `Allowed`
    * On Android
        * If user has not given any response to ad tracking consent request, this will return `Unknown`
        * If user doesn't check the ad option on in-game prompt, this will return `NotAllowed`
        * If user checks the ad option on in-game prompt, this will return `Allowed`
    * On iOS
        * This is directly mapped to user's ATT response
        * If user never gave any response to ATT prompt, this will return `Unknown`
        * If user has NOT given ATT consent, or given restricted consent, this will return `NotAllowed`
        * If user has given ATT consent, this will return `Allowed`
    


* **WhenInitialized(Action)**: Allows you to register a callback that will be fired only 
    after the module is successfully initialized. Use this to execute logic that requires
    this module to be initialized first. If the module has already initialized, immediately
    invokes the callback
 

 
* **WhenFailedToInitialize(Action)**: Allows you to register a callback that will be fired only after
    the module fails to initialize for any reason. Use this to handle what should happen 
    in case this module fails to initialize. If the module has already failed to initialize, immediately
    invokes the callback.
  


* **WhenReady(Action)**: Combined version of `WhenInitialized` and `WhenFailedToInitialize`. 
    Delays execution of callback till module is first initialized or failed to initialize, immediately invoke
    the callback if it is already initialized or failed to initialize.
    

* **RequestUserConsent(Action)**: If user consent state is unknown, asks for user consent. Once user 
  is done with consent prompts, invokes the callback. Use this callback to turn on/off consent dependent
  features and block game initialization till consent response is received if necessary.
    * On Android
        * User needs to separately give consent to GDPR and CCPA. If user is in GDPR region and
        GDPR consent is unknown, user will be prompted to give consent. This will happen for CCPA as well.
        * Once user is done with in-game prompt (after it closes), invokes the callback.
    * On iOS
        * If user's ATT consent status is unknown, opens native ATT prompt. If user selects no
            * Opens in-game prompt and invokes the callback after it is closed if `iOS ATT Followup` option
            is turned on in settings.
            * Invokes the callback if `iOS ATT Followup` option is turned off in settings.
        * If user allows tracking on ATT prompt, invokes the callback.
    


* **SetAdTracking(UserResponse)**: Use this method to set user response from a prompt script. Only call this
method from scripts that inherit from `ConsentPromptViewBase` class, and pass in user's response in the prompt
as a parameter. You don't need to call this method anywhere if you are not using a custom prompt script, built
in prompts and logic already sets ad tracking response internally.
  
### Consent Prompt View Base

Inherit from this to create a custom consent prompt behaviour.

* **OnPromptDismissed**: Callback field. This callback is set by the manager internally and is used to notify
module that prompt is closed and logic can continue. **Do not overwrite its value!**
  

* **Set(DataUsageConsentConfig)**: Called when prompt is opened. Allows initializing prompt according to the
config.
  

* **NotifyPromptDismissed()**: When user interaction with prompt is done and prompt is closed, invoke this to
notify module that prompt is closed and logic can continue. This internally invokes the `OnPromptDismissed` 
callback