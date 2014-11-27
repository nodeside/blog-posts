Lets start with an example:  We have a collection called <i>people</i>.  <i>people</i> has a field <i>email</i> and we want to index our collection based on the <i>email</i>.

<b>An index may, or may not be unique. </b>

1. We want to index the "people" collection based on email.
<pre>db.people.ensureIndex({email:1});</pre>

2. We want index the "people" collection based on email AND be <b>UNIQUE</b>
<pre>db.people.ensureIndex({email:1} , {unique : true});</pre>
It is important to know that trying to insert multiple identical keys will fail.

<b>What happens if we want to create a unique index from an existing collection with duplicate indexes? <b>

The command below keeps the first document and automatically removes duplicates.
<pre>db.people.ensureIndex({email:1} , {unique : true, dropDups : true});</pre>

<b>How do we index by two different keys. For example: email and telephone?<b>
<pre>db.people.ensureIndex({email:1, telephone:-1});</pre>

Note: {email:1} is ascending while {email:-1} is descending.

Don't forget to read http://www.mongodb.org/display/DOCS/Indexes#Indexes-UniqueIndexes for more detail re: indexing.

