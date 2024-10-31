//postgres code here

import { Pool } from "pg";
import dotenv from "dotenv";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// export async function submitEmail(email) {
//   return email;
// }

export async function submitEmail(emailObj) {
  try {
    const result = await pool.query(
      "INSERT INTO email (email) VALUES ('" + emailObj.email + "') RETURNING *"
    );

    console.log("This is the result", result);

    return { successful: "true" };
  } catch (error) {
    console.error("Error inserting email:", error);
    throw new Error("Failed to insert email");
  }
}
