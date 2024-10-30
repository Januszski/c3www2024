//postgres code here

import { Pool } from "pg";
import dotenv from "dotenv";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// export async function submitEmail(email) {
//   return email;
// }

export async function submitEmail(email) {
  try {
    // Connect to the database and execute the query
    const result = await pool.query(
      "INSERT INTO email (email) VALUES ($1) RETURNING *",
      [email]
    );

    // Return the inserted email row
    return result.rows[0];
  } catch (error) {
    console.error("Error inserting email:", error);
    throw new Error("Failed to insert email");
  }
}
