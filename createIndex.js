//createIndex.js

//import packages
import * as fs from 'fs';
import algoliasearch from 'algoliasearch';

// Connect and authenticate with your Algolia app
const client = algoliasearch('S943AQUB0L', '9b52b6da2a5616408e39700afa14874f')

// Create a new index and add a record
const index = client.initIndex('movies')

//Load JSON data (movies)
var obj = JSON.parse(fs.readFileSync('datasets/movies/movies.json', 'utf8'));

//batch records for saving
for (let x = 0; x < (obj.length-remainder); x+=100) {

	var smallobj = obj.slice(x,x+100);
	index.saveObjects(smallobj).then(({ objectIDs }) => {
  console.log(objectIDs);
});
}
