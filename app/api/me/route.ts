import { auth } from "@clerk/nextjs/server";

export async function GET() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    return Response.json({ error: "Clerk no configurado" }, { status: 503 });
  }
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Inicia sesión" }, { status: 401 });
  }
  return Response.json({ userId });
}
