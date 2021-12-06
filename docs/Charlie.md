# CHARLIE NOTIFICATIONS

## Introduction

Provides a simple way of adding locally scheduled notifications to a project.

## How to use

* Import package from Package Manager UI.
* Open `Matchingham > Notifications`
* Make sure enabled field is checked if you want notifications!.
* In code, use `Charlie.Instance.Initialize()` in the appropriate place.
  * It handles authorization and permission request automatically.
* Use the `GameNotification`class to create a notification.
  * Modify properties of `GameNotification` object
* Schedule the notification locally with `Charlie.Instance.ScheduleNotification(GameNotification)`.

## How does it Work?

`Charlie` works as a proxy object to schedule notifications for the current platform.
Platform specific logic and types are merged in unified data structures and are translated
to their platform specific counterparts by the `Charlie` module.

Let's pretend we have a game manager that initializes our game at awake.

```c#
public class GameManager : MonoBehaviour
{
    public static bool IsFirstSession { get; private set; }

    private void Awake()
    {
        CheckFirstSession();
    
        // Remote config module
        Meteor.Instance.Initialize();
        Meteor.Instance.WhenReady(_ => 
        {
            // Now remote config is ready
            
            // Initialize notifications module
            Charlie.Instance.Initialize();
            Charlie.Instance.WhenReady(_ => 
            {
                // On iOS, notifications module will block this call if auth
                // request is necessary and will auto prompt the user.
                // This method will be called after user responds to prompt
                NotifyGameReady();
            });
        });
    }
} 
```

Let's assume we want to implement a notification that is fired 3 hours after first session
and repeats in a daily interval afterwards. Following code would achieve it.

```c#
private void OnFocusStateChanged(bool hasFocus)
{
    if (hasFocus)
    {
        if (GameManager.IsFirstSession)
        {
            Charlie.Instance.CancelScheduledNotification(1);
        }
    }
    else
    {
        if (GameManager.IsFirstSession)
        {
            var notification = new GameNotification();
            
            notification.Id = 1;
            notification.Title = "My Notification";
            notification.Body = "Notification content goes here...";
            notification.SetDeliveryDelay(TimeSpan.FromHours(3));
            notification.SetRepeatInterval(TimeSpan.FromHours(24));
            
            Charlie.Instance.ScheduleNotification(notification);
        }
    }
}
```

If we want to schedule a notification after each session, we could do it as follows:

```c#
private void OnFocusStateChanged(bool hasFocus)
{
    if (hasFocus)
    {
        if (GameManager.IsFirstSession)
        {
            Charlie.Instance.CancelScheduledNotification(2);
        }
    }
    else
    {
        if (GameManager.IsFirstSession)
        {
            var notification = new GameNotification();
            
            notification.Id = 2;
            notification.Title = "After Each Session";
            notification.Body = "Notification content goes here...";
            
            // Using a delay
            notification.SetDeliveryDelay(TimeSpan.FromHours(3));
            
            // Using specific date/time value
            notification.SetDeliveryDate(DateTime.Now + TimeSpan.FromHours(3));
            
            Charlie.Instance.ScheduleNotification(notification);
        }
    }
}
```

If we want to configure a notification from remote, we can do it by using the `Meteor`module.

```c#
// GameNotificationsConfig.cs
public class GameNotificationsConfig : ScriptableObject
{
    [RemoteSetting("myNotificationTitle")]
    public string myNotificationTitle;
    
    [RemoteSetting("myNotificationBody")]
    public string myNotificationBody;
    
    [RemoteSetting("myNotificationDelayInHours")]
    public int myNotificationDelayInHours;
}


// GameManager.cs
public class GameManager : SingletonBehaviour<GameManager>
{
    private GameNotificationsConfig notificationsConfig;
    
    public GameNotificationsConfig NotificationsConfig => notificationsConfig;
    
    private void Awake()
    {
        // You need to add config before initialize call
        Meteor.configList.Add(notificationsConfig);
        
        Meteor.Intance.Initialize();
        Meteor.Instance.WhenReady(_ => 
        {
            Charlie.Instance.Initialize();
            Charlie.Instance.WhenReady(_ => 
            {
                // Rest of the initialization logic
            });
        });
    }
}


// GameNotifications.cs
private void OnFocusStateChanged(bool hasFocus)
{
    if (hasFocus)
    {
        Charlie.Instance.CancelScheduledNotification(1);
    }
    else
    {
        var notification = new GameNotification();
        
        notification.Id = 1;
        notification.Title = GameManager.Instance.NotificationsConfig.myNotificationTitle;
        notification.Body = GameManager.Instance.NotificationsConfig.myNotificationBody;
        notification.SetDeliveryDelay(GameManager.Instance.NotificationsConfig.myNotificationDelayInHours);
        
        Charlie.Instance.ScheduleNotification(notification);
    }
}
```

You can find more detailed examples in samples.

**One Important thing to note is, `Charlie` module has a time range configuration in `CharlieConfig`.
This configuration determines which notifications should be scheduled. Range is defined by
`timeRangeStart` and `timeRangeEnd` fields, any notification with a delivery date outside
of the time range defined by these fields will be dropped.**

## API

### Charlie

* **Initialize() : void**: Initializes the module. On iOS, asks for user's permission as well, if 
user was not previously asked to give permission.


* **ScheduleNotification(notification: GameNotification) : void**: Schedules a local notification


* **CancelNotification(id: int) : void**: Cancels a notification. If notifications is shown,
removes it from notification center.


* **CancelScheduledNotification(id: int) : void**: Cancels a scheduled notification. If notification
is already shown, does nothing.


* **CancelScheduledNotifications() : void**: Removes all scheduled notifications.


### GameNotification

* **Id: int?**: Id of the notification. If not set, platform will generate a random id. It is
**highly** recommended that you provide your own ids for notifications as otherwise you would 
need to cache notification ids or save them to player prefs if you want to be able to cancel or
update them at any point after they are scheduled.


* **Title: string**: Title of the notification


* **Subtitle: string**: A second title for further describing the notification. (iOS only)


* **Body: string**: Content of the notification. Notification message should be set to this field.


* **SmallIcon: string**: Small notification icon identifier. See [Unity Mobile Notification Docs](https://docs.unity3d.com/Packages/com.unity.mobile.notifications@1.4/api/Unity.Notifications.Android.AndroidNotification.html)
for details. (Android only)


* **LargeIcon: string**: Small notification icon identifier. See [Unity Mobile Notification Docs](https://docs.unity3d.com/Packages/com.unity.mobile.notifications@1.4/api/Unity.Notifications.Android.AndroidNotification.html)
  for details. (Android only)


* **ShowInForeground: bool**: [Unity Mobile Notification Docs](https://docs.unity3d.com/Packages/com.unity.mobile.notifications@1.4/api/Unity.Notifications.iOS.iOSNotification.html)


* **Repeating: bool**: Automatically set if `SetRepeating` method is used.


* **DeliverWithDelay: bool**: Automatically set if `SetDeliveryDelay` method is used.


* **SetDeliveryDelay(delay: TimeSpan) : void**: Sets a delay that will be used to calculate delivery date.


* **SetDeliveryDate(date: DateTime) : void**: Sets the delivery date directly.


* **SetRepeatInterval(interval: TimeSpan) : void**: Sets repeat interval of the notification.


### CharlieConfig

* **enabled: bool**: Determines whether `Charlie` should initialize. Remote configurable via 
`notificationsEnabled` key.


* **timeRangeStart: float**: Hour of day in a 0-24 hour system. Decimal places determine the 
fraction of an hour. 7:30 AM means 7.5.


* **timeRangeEnd: float**: Notifications can only be scheduled if they are between
`timeRangeStart` and `timeRangeEnd` hours. Hour of day in a 0-24 hour system. 
Decimal places determine the fraction of an hour. 7:30 AM means 7.5.