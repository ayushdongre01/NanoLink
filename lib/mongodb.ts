import { MongoClient } from "mongodb"

/**
 * Node on Windows often resolves `localhost` to IPv6 (::1) first, while a
 * local mongod may only listen on IPv4 — causing ECONNREFUSED on ::1.
 * Atlas / SRV URIs are left unchanged.
 */
function mongoUriPreferIPv4Loopback(raw: string): string {
  if (/^mongodb\+srv:/i.test(raw)) return raw
  return raw
    .replace(/@localhost(?=:\d|\/|$|\?)/i, "@127.0.0.1")
    .replace(/^mongodb:\/\/localhost(?=:\d|\/|$|\?)/i, "mongodb://127.0.0.1")
}

const uri = mongoUriPreferIPv4Loopback(process.env.MONGODB_URI as string)

/** Faster failure when MongoDB is not reachable; avoids long hangs on page loads. */
const options = {
  serverSelectionTimeoutMS: 5_000,
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }

  clientPromise = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
