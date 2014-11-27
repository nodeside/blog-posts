Security is a big issue especially when it comes to sensitive data. One area that really helps cut down your risk is restricting which ip addresses are allowed to connect to your database server.

This is just one of many important first steps into security and it also just so happens to be one of the simplest.

1. Edit your configuration (by default in many linux systems such as ubuntu)
<pre>vim /etc/mongodb.conf</pre>

2. Add the bind_ip configuration. Here I added localhost so I can still access the mongo console and a random ip address that popped into my head
<pre>bind_ip 127.0.0.1, 155.224.434.344</pre>

3. Restart the mongo server

I highly recomment checking out the link below for more information about security.http://docs.mongodb.org/manual/administration/security/
