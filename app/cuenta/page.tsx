import { auth } from "@clerk/nextjs/server";
import { UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function PrivateProfile() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return <UserProfile />;
}

export default function AccountPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    return <main className="accountWrap"><h1>Perfil</h1><p>Clerk todavía no está configurado.</p><a href="/">Volver al planner</a></main>;
  }
  return (
    <main className="accountWrap">
      <a href="/">← Volver a mi festival</a>
      <h1>Mi cuenta</h1>
      <Suspense fallback={<p>Cargando perfil…</p>}>
        <PrivateProfile />
      </Suspense>
    </main>
  );
}
