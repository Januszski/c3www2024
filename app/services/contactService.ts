import { Pool } from "pg";
import dotenv from "dotenv";

// export async function submitContact(info) {
//   return info;
// }

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
    //q = "INSERT INTO Students VALUES ('" + FNMName.Text + "', '" + LName.Text + "')";

    // const result = await pool.query(
    //   "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
    //   [info.name, info.email, info.message]
    // );

    const sqlQuery =
      "INSERT INTO contacts (name, email, message) VALUES ('" +
      info.name +
      "', '" +
      info.email +
      "', '" +
      info.message +
      "') RETURNING *";

    console.log(sqlQuery);

    console.log("HERE");

    const result = await pool.query(sqlQuery);

    console.log("RESULT");

    // Return the inserted contact row
    return { Succesful: "true" };
  } catch (error) {
    console.error("Error inserting contact information:", error);
    throw new Error("Failed to submit contact information");
  }
}
