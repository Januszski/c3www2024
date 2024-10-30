import { type NextRequest, type NextResponse } from "next/server";
import { submitContact } from "../../../services/contactService";

export async function POST(req: NextRequest, res: NextResponse) {
  const contactInfo = await req.json();
  console.log("CONTACT INFO 1 ", contactInfo);
  const submittedContactInfo = await submitContact(contactInfo);
  console.log("SBUMITTED CONTACT INFO 2 ", submittedContactInfo);

  return Response.json(submittedContactInfo);
}
