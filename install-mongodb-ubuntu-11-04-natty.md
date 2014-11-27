n this tutorial we will look at a BOTH manual install and via ubuntu package manager (recommended). There are pros and cons to each method, but discussing them wont get mongodb installed any faster.

<b>Installation via ubuntu package manager</b>
1) add the 10gen GPG key
<pre>
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
</pre>
2) update the source list
<pre>
<i>Add </i>
deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
<i>to</i>
/etc/apt/sources.list
</pre>
3) Update source list and install package
<pre>
 sudo apt-get update 
 sudo apt-get install mongodb-10gen
</pre>
The above is taken from the official documentation http://www.mongodb.org/display/DOCS/Ubuntu+and+Debian+packages

<hr>

<b>Manual Installation</b>
First step is to download the version you want. http://www.mongodb.org/downloads Remember to pick the correct OS and correct version 32/64 Bit. As explained on the mongodb website the 32 bit is a great limiting factor in the maximum size of the database. (2 GB)

<strong> Lets Begin</strong>

Download to your download folder. I used the Linux 64-bit 2.0.1.
<pre>wget http://fastdl.mongodb.org/linux/mongodb-linux-x86_64-2.0.1.tgz</pre>

Extract using the following command
<pre>tar xzf mongodb-linux-x86_64-2.0.1.tgz</pre>

Move the mongo folder to wherever you want it to be "run". For example:
<pre>sudo mv mongodb-linux-x86_64-2.0.1 ~</pre>
<small>You could also change the name to something more readable using the "mv" command.</small>

Create the data directory. By default mongo expects it to be at /data/db. To create a folder you can use the command(s).
<pre>sudo mkdir /data
sudo mkdir /data/db</pre>

Ensure the directory is readable to mongo. For testing purpose (not in practice/production) you can do the following
<pre>sudo chmod 777 /data/*</pre>
This will make it accessible to anyone.

Next step is to start the mongo server. We must start it from the "bin" directory within the mongo folder we downloaded. In my case.
<pre>cd ~/mongodb-linux-x86_64-2.0.1/bin</pre>
<pre>./mongod</pre>

it is time to start mongo. Open a new terminal.
<pre>./mongo</pre>

You should see the following
<pre>MongoDB shell version: 2.0.1
connecting to: test
> 
</pre>

And thats it for now :) I highly recommend <a href = "/node/7">creating aliases</a> and a startup script that will start the mongo server when the computer turns on. There are many other ways/versions etc etc. Find what works best for you, most importantly let me know any valuable tips or tricks. I am here to learn too.

<iframe width="640" height="360" src="http://www.youtube.com/embed/6v5EOlwqM7M?hd=1" frameborder="0" allowfullscreen></iframe>


