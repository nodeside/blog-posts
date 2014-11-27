
nitoring your mongod server as well as your databases, replica sets and queries is an essential part both in development and in maintaining and diagnosing potential problems.

The good thing is that it is pretty easy. Or at least pretty easy to get a good overview of what is happening.

The easiest place to start is with the <b>http console</b>

<pre>
By default mongod provides a diagnostic interface at http://localhost:28017
</pre>

This is really great and has a lot of useful information. You can also access additional information such as "buildInfo cursorInfo features isMaster listDatabases replSetGetStatus serverStatus top" via the REST service. In order to access them, you need to start the mongod server with --rest

<pre>
mongod --rest
</pre>

I would highly recommend checking out the official mongodb documention. There are many ways to get additional/access information about your db and server.
http://www.mongodb.org/display/DOCS/Monitoring+and+Diagnostics

