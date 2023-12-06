//createIndex.js



import * as fs from 'fs';
// hello_algolia.js
import algoliasearch from 'algoliasearch';

// Connect and authenticate with your Algolia app
const client = algoliasearch('S943AQUB0L', '9b52b6da2a5616408e39700afa14874f')

// Create a new index and add a record
const index = client.initIndex('movies')

//Load JSON data (movies)
var obj = JSON.parse(fs.readFileSync('datasets/movies/movies.json', 'utf8'));
console.log('tpe: ' + typeof(obj))
//var otherobj = JSON.parse(obj)
//console.log('tpe2: ' + typeof(otherobj));
console.log(obj[0]);
console.log("lenght: " + obj.length)

var remainder = obj.length%100

console.log(remainder)
console.log(obj.length-remainder-1)


for (let x = 0; x < (obj.length-remainder); x+=100) {

	var smallobj = obj.slice(x,x+100);
	index.saveObjects(smallobj).then(({ objectIDs }) => {
  console.log(objectIDs);
});
}

var finalobj = obj.slice(obj.length-remainder,obj.length )

console.log('last: ' + finalobj.length)



/*

for (let x in obj) {
	index.saveObject(obj[x])
}

*/

console.log('loadded');

/*

*/


// Search the index and print the results
/*index
  .search('test_record')
  .then(({ hits }) => console.log(hits[0]))
*/


//console.log(obj[0]);