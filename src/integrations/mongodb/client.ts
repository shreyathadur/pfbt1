import { MongoClient } from 'mongodb';

const MONGO_URI = import.meta.env.VITE_MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the VITE_MONGO_URI environment variable');
}

const client = new MongoClient(MONGO_URI);

export default client;
