To export a collection all we need to specify the type of output file, where to save the file, the database to use, the collection and finally which fields we want to save. 

Example: We want to export the names, telephone numbers and email address from the <i>people</i> collection in our <i>school</i> database to a CSV file that will be called people.csv and saved in our temporary directory /tmp

<pre>mongoexport --csv -o /tmp/people.csv -d school -c people -f firstName,lastName,telephone,email</pre>

I suggested looking up all the other configurable option on the official mongodb site.

