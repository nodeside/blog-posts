Most people familiar with ajax requests or jQuery typically understand the callbacks of nodejs pretty well. The programmers that generally get caught out are the C++, Java or PHP programmers. Startng out as one of the latter I will explain simply the general idea.

<b>See explanation below</b>

<div class="gist-loader" id="ellman/8576959"></div>

To test clone or copy the code and run

<pre>
node nodejs-callback-example.js
</pre>

You have probably heard the phrase "non-blocking" being used a lot when it comes to nodejs. The idea is simply that nodejs doesnt wait for I/O (input/output) to finish. Instead it relies on an event to be triggered once the I/O is finished. This alows us to continue with other tasks.

Before we start the "blocking" task we tell it what function to call on the "event" that it finishes. This function is typically called the "callback" functions and in our example is called "doThisWhenFinished"

