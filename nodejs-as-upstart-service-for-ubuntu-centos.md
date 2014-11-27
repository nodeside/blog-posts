Running nodejs as a service is pretty easy and has a lot of benefits. The most obvious being that it will restart on server reboot, restart on error and allow you to cleanly start and stop the application.

Below is a fairly common use case. I have tested it on Ubuntu 12.04+ as well as Centos 6.5

<div class="gist-loader" id="ellman/8581167"></div>

<pre>
The above should be placed in /etc/init. Call the file yourapp.conf
</pre>

You start and stop as follows:

<pre>
Ubuntu: service yourapp start/stop/restart/status
Centos: service start/stop/restart/status yourapp
</pre>
