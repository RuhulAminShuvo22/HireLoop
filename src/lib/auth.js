// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGO_DB_URI);

// // ✅ connect once
// await client.connect();

// const db = client.db("hireloop");

// export const auth = betterAuth({
//   database: mongodbAdapter(db),

//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//         google: { 
//             clientId: process.env.GOOGLE_CLIENT_ID, 
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
//         }, 
//     },
    
  
// });


import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_DB_URI);

export const auth = betterAuth({
  database: mongodbAdapter(client.db("hireloop")),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});