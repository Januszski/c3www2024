import { type NextRequest, type NextResponse } from "next/server";
import { submitCareers } from "../../services/careersService";

export async function POST(req: NextRequest, res: NextResponse) {
  const careerInfo = await req.json();
  const submittedcareerInfo = await submitCareers(careerInfo);

  return Response.json(submittedcareerInfo);
}
