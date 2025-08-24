const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function dbConnect(collectionName) {
  const connectedClient = await clientPromise;
  return connectedClient.db("glowPure").collection(collectionName);
}
