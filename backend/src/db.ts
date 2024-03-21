import { MongoClient, ServerApiVersion }  from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri!, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


try {
    client.connect()
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
} finally {
    client.close();
}