


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

  user: {
       additionalFields: {
          role: {
              default: "seeker", //job-seeker//
              //input: false
            } 
        }
    },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});