import { Pool } from "pg";
import dotenv from "dotenv";

// export async function submitContact(info) {
//   return info;
// }

// Load environment variables
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

interface ContactInfo {
  name: string;
  email: string;
  message: string;
}

export async function submitContact(info: ContactInfo) {
  try {
    // Connect to the database and execute the query
    const result = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [info.name, info.email, info.message]
    );

    console.log("RESULT");

    // Return the inserted contact row
    return result.rows[0];
  } catch (error) {
    console.error("Error inserting contact information:", error);
    throw new Error("Failed to submit contact information");
  }
}
