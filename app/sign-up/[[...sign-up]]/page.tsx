import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    return <main className="accountWrap"><h1>Crear cuenta</h1><p>Clerk todavía no está configurado en este despliegue.</p><a href="/">Volver al planner</a></main>;
  }
  return (
    <main className="accountWrap">
      <Suspense fallback={<p>Cargando registro…</p>}>
        <SignUp />
      </Suspense>
    </main>
  );
}
