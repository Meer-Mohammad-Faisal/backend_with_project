//const url = "mongodb+srv://faisal:Mdbad12o@@@@@@@@codingadda.najc1k6.mongodb.net/"

const { MongoClient } = require('mongodb');

// connection URL

const url = "mongodb+srv://faisal:Mdbad12o%40%40%40%40%40%40%40@codingadda.najc1k6.mongodb.net/"; // in password
// ther shoul not be @ or use %40 ( @ === %40)

const client = new MongoClient(url);

// database name
const dbName = "CoderFais";

async function main(){
    // use connect method to connect to the server
    await client.connect();
    console.log('Connect successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');


    const findResult = await collection.find({}); // here .toArray make a network call (not collection.find())
    // const ans = await findResult.toArray();

    for await (const doc of findResult){
        console.log(doc);
    }
    //console.log('Found documents =>', ans);


//INSERT ONE:
    // const insertResult = await collection.insertOne({name:"sarbar", age: 28});
    // console.log('Inserted documents => ', insertResult);


// INSERT MANY:
    // const insertResult = await collection.insertMany([{ a: 1}, { a: 2}, { a: 3}]);
    // console.log('Inserted documents => ', insertResult);

// FILETER OUT
    const filteredDocs = await collection.find({ a: 3}).toArray();
    console.log('Found documents filtered by { a: 3} => ', filteredDocs);




    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


    // if database doesn't exist, what will happen, will it create DB for you or throw and error
    // if connection name doesn't exist. .....