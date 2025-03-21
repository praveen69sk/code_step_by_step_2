import { MongoClient} from "mongodb";

const dbName = 'e-comm'
const url = 'mongodb://localhost:27017';

let client = new MongoClient(url);

const dbConnect = async () => {
    let result = await client.connect();
    let dataBase = result.db(dbName);
    return dataBase.collection('products');
}

export default dbConnect;