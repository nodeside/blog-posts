Aliases can be a huge time saver. For those of you who do not know what aliases are. Think of them as shortcuts to a folder, to run a program or perform a command.

We are going to setup some aliases to make our lives much easier when using mongodb. The first alias we will create is to start mongod ("the core database process") and the second will be to launch mongo ("the mongo shell"). 

<b>Lets begin</b>

Before we create alias lets look at how we would run mongod from the terminal. In my case I stored mongo in my home folder /home/yonatan/mongo-2.1.0.We need to run the mongod from the bin directory. To "run" mongod we use ./mongod. so we would do the following.

<pre>/home/yonatan/mongo-2.0.1/bin/./mongod</pre> 

Once it is running, kill the process by typing "Ctrl c"

Now lets go to our home folder. In my case.
<pre>cd /home/yonatan</pre>

Next we open the .bash_aliases file. If it does not exist then create it. You can use any editor. Personally I prefer vim. To install vim: sudo apt-get update then sudo apt-get install vim
<pre>vim .bash_aliases</pre>

Now it is time to create the alias. The format is as follows 

<pre> alias [alias name]='[the instruction]'</pre>

There are NO spaces between the alias name, the equals sign and the instruction. From the above we can see that our alias should look as follows

<pre>alias mongod='/home/yonatan/mongo-2.0.1/bin/./mongod'</pre>

Save the file.

Before we test it out we need to check that our file .bash_aliases is being used. To do this we open the .bashrc file also in our home directory

<pre>vim /home/yonatan/.bachrc</pre>

Search for the following code. If it is commented out, uncomment it. If it doers not exists, add it. In most cases the code should already be there.
<pre>if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
</pre>

Ok, testing time. Open a new terminal and type mongod. All being well the process should start. To add the alias for the mongo shell simply copy the alias you added for mongod and change the word mongod to mongo.

For interesting information about the mongodb architecture check this out. http://www.mongodb.org/display/DOCS/Architecture+and+Components for info on the architecture


