
You have probably heard a lot of talk about anglular 1.3 performance improvements and have heard stats such as "4.3x faster DOM manipulation with 73% less garbage" etc. Thats all very well and good but lets have a look at one feature you can use today to give your app a performance boost.

<h2>Production mode</h2>

<h3>Disabling Debug Data</h3>
Angular adds classes properties for debugging which are used by testing tools like Protractor and Batarang. However, in production, these classes are not needed.
By removing these classes and properties we can improve the perfomance of the application.

Angular 1.3 has a new configuration property that allows us to easily remove these classes and properties.
Simply add to your app's configuration this simple line: $compileProvider.debugInfoEnabled(false);

If you want to see the debugging information, you can just type "angular.reloadWithDebugInfo();" in your browser's console.

<div class='git-loader' id='rafaelb/01c9003495f8ad91ed00'/> 

<h3>Disabling Logs</h3>

In production, we do not want the users to see any error messages or messages that were logged for development/debugging purposes.

Instead of using console.log, which can't be disabled by angular, angular supplies a module called $log
Anything that is logged using $log, can be disabled by adding this simple line to you app's config: 
$logProvider.debugEnabled(false);

<div class='git-loader' id='rafaelb/23b078ab489944d5a5e0'/>

We suggest having a look at the official angular docs version 1.3 for additional informaiton on performance improvemtns
