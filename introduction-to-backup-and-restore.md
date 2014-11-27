We have a database called <i>people</i> that we would like to backup, and then later restore to the original, or import to another database, <i>people-copy</i>.

Step 1: Dump the database. The follwoing command automatically "dumps" your databases to a directory called dump. 
<pre>mongodump</pre>

Step 2: Restore the database. We need to say which database we want to restore and where to restore it. For example: If I want to put the database called <i>people</i> into <i>old-people</i> I would use the following command.
<pre>mongorestore -d old-people dump/people/</pre>

Note: Do not forget to re-create your indexes after you restore a database. 
