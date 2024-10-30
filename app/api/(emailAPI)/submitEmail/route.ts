import { type NextRequest, type NextResponse } from "next/server";
import { submitEmail } from "../../../services/emailService";

export async function POST(req: NextRequest, res: NextResponse) {
  const email = await req.json();
  const submittedEmail = await submitEmail(email);

  return Response.json(submittedEmail);
}
