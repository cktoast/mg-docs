# PROMOTER CROSS PROMOTION MODULE

## Introduction

Promoter provides a simple way of displaying basic cross promotion in game.

## How to use

* Install package from Package Manager UI
* Open settings from `Matchingham Games > Cross Promotion` and set local promo data. This can also be
  configured from the remote using `crossPromoJson` remote setting. Sample json format:
  ```
  {
    "pinnedPromo": 1,
    "promos": [
      {
        "title": "Github",
        "clickUrl": "https://github.com/lolerji",
        "impressionUrl": "https://github.com/lolerji",
        "hrImages": [
          "https://avatars.githubusercontent.com/u/13393096?v=4"
        ],
        "mrImages": [
          "https://avatars.githubusercontent.com/u/13393096?s=88&v=4"
        ],
        "lrImages": [
          "https://avatars.githubusercontent.com/u/13393096?s=60&v=4"
        ]
      },
      {
        "title": "Gitlab",
        "clickUrl": "https://gitlab.com/ckucukha",
        "impressionUrl": "https://gitlab.com/ckucukha",
        "hrImages": [
          "https://en.gravatar.com/userimage/209733791/5b0d7bd713531324547bc2660199adef.png?size=200"
        ],
        "mrImages": [
          "https://gitlab.com/uploads/-/system/user/avatar/8862550/avatar.png?width=96"
        ],
        "lrImages": [
          "https://gitlab.com/uploads/-/system/user/avatar/8862550/avatar.png?width=23"
        ]
      }
    ],
    "mappedPromotions": [
      {
        "id": "github",
        "promoIndex": 0
      },
      {
        "id": "gitlab",
        "promoIndex": 1
      }
    ]
  }
  ```
* Make sure `Enabled` checkbox is checked (or the module will be disabled)
* Call `Promoter.Instance.Initialize()` at the appropriate place.
* Right click any canvas and use `UI > Matchingham > Cross Promo Card` to create a cross promotion card.
* Click card and configure how it should work
    * If you want to manually load and show promotions, toggle of `Load On Enable` option.
    * Check `Show Pinned Promo` to display a certain promotion pinned in the promo data.
    * Uncheck `Show Pinned Promo` and provide a `Promo Map` to fetch a certain promotion from `mappedPromotions`.
    * All of these options can also be set from code, so you can bind `Promo Map` value to game logic, 
      like finished level. Please note if you are setting these values in code, either set them before the
      card becomes enabled, or toggle of `Load On Enable` and manually load the card.
      

## API & Details

### Promoter


* **Initialize()**: Starts module initialization. You need to call this at the
  appropriate place. Since this module can use remote configuration, you should
  make sure this call is made after remote config is ready.
  


* **GetPinnedPromo()**: Returns pinned promo info from the provided promotion data.



* **GetMappedPromo(string)**: Try to get a promotion info with a string key. If no promotion info is mapped for 
  provided key, a random promotion will be returned.
  


* **GetRandomPromo()**: Returns a random promotion info from the promotion data.



* **LoadRandomImage(CrossPromo, Resolution)**: Given a promotion info and resolution type, loads one 
  of the images associated with it.



* **LoadImages(CrossPromo promo, Resolution resolution)**: Loads all images of given resolution 
  type for provided promotion info
  


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


### Cross Promo Card


* **Resolution**: Image quality of the card. Possible values:
  * LowResolution,
  * MediumResolution
  * HighResolution


* **ShowPinnedPromo**: Should the card load the pinned promo from the config the next time it loads a promotion?


* **PromoMap**: Provide a string id for the promotion to be loaded here. These ids are defined inside the mapped
  promotions data in the config.


* **Load()**: Manually load a promotion. If you want to configure how the card works, you can turn `Load on Enable`
  off from the inspector, and use this method according to your needs.