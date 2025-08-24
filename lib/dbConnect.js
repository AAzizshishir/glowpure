const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;

export default function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("glowPure").collection(collectionName);
}
