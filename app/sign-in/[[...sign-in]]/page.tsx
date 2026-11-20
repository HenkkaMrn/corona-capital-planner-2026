import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    return <main className="accountWrap"><h1>Inicio de sesión</h1><p>Clerk todavía no está configurado en este despliegue.</p><a href="/">Volver al planner</a></main>;
  }
  return (
    <main className="accountWrap">
      <Suspense fallback={<p>Cargando inicio de sesión…</p>}>
        <SignIn />
      </Suspense>
    </main>
  );
}
