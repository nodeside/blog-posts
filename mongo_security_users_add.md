Adding users to a specific database is a fairly trivial task understanding the role of user is a little more complex that requires a word or two of explanation.

Mongodb has fairly limited variety when it comes to users. You either have an all powerful admin user that can do just about anything they please, a user with read and write access to a specific database or a user with read access to a specific database. 

As mongodb expects the application itself to control permissions there is no real need for much more granularity than read/write. 

1. To create a user we need to access the mongodb shell. 

<pre>./mongo</pre>

2. Use the correct database eg 'mydb'

<pre>use mydb</pre>

3.1 . Add the user

This will add a user with read and write access to the 'mydb' database
<pre> db.addUser("username", "password") </pre>

3.2 . Add the user

This will add a user with readonly access to the 'mydb' database

<pre> db.addUser("username", "password", true) </pre>

4. Enable user authentication. By default authentication is disabled. To do this open your db configuration file. For linux users it is typically found at /etc/mongodb.conf 

<pre>vim /etc/mongodb.conf</pre>

5. Uncomment the line "auth = true"

6. Restart the mongodb server

Note: You can also enable authentication by starting mongod with --auth



