# LOGGER MODULE

## Introduction

Provides a logger class and utility methods to customize its behaviour

## How to Use

* Install package from Package Manager UI
* Use: 
  * `this.Debug("Hello World")` to print "Hello World" debug message
  * `this.Info("Hello World")` to print "Hello World" info message
  * `this.Warning("Hello World")` to print "Hello World" warning message
  * `this.Error("Hello World")` to print "Hello World" error message
* Log a caught exception using `ex.Log()` API.

## How does this work?

Logger module a `Logger` class to log various things. You can create a logger object
using the regular object instantiation method of C#.

```c#
`var logger = new Logger();`
```

Once instantiated, you can use the `logger` to print `Debug`, `Info`, `Warning` and
`Error` logs to the console. You can configure which log commands actually work using
the `Flags` field of the logger. For example the following logger will only send
`Warning` and `Error`logs to the console

```c#
`logger.Flags = LogFlags.Warning | LogFlags.Error;`
```

You can also set global flags to restrict logging for all loggers. For example, if
you make the below call, all loggers will be restricted to error logging only even
if they have different flags set themselves.

```c#
`Logging.GlobalFlags = LogFlags.Error;`
```

If you want to be able to discern the logs of a certain logger from others, you can
assign a prefix to that logger.

```c#
logger.Prefix = "Important";
```

The above logger would print logs in the below format.

`[com.mycompany.myapp] [IMPORTANT] Your log message here`

You can use formatting in the logs as well!

```c#
var logger = new Logger();
logger.Prefix = "Important";
logger.Prefix = LogFlags.Warning | LogFlags.Error;
logger.Warning("I have {0} pencils and {1} books", 5, 10);
```

The extension methods above in the **How to Use** section uses the logger class behind
the scenes. They basically make calls to instances of the logger class specifically
created for the object they are being called for. The first time you make a call from 
`MyClass` using `this.Debug("Hello World")` call would create
a custom Logger for `MyClass` and cache it, using the name of the class as prefix.

```c#
class MyClass
{
    public void AmazingFunctionality()
    {
        ...
        // Outputs: [com.mycompany.myapp] [MYCLASS] An important log...
        this.Info("An important log...");
        ...
    }
}
```

