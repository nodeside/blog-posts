Simply add <b>.pretty()</b> and the results will be displayed in the same nice JSON format like in the findOne() command

Example displaying the first 10 results from the "cars" collection

<pre>
db.cars.find().sort({_id:-1}).limit(10)<b>.pretty()</b>;
</pre>
