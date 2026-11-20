# Corona Capital 2026 — Clerk + Next.js

Migración del planner HTML estático a Next.js 16 con autenticación Clerk **sin perder la experiencia pública del festival**.

## Estado

- Planner público y funcional en `public/planner.html` (mapa y datos embebidos).
- Navegación con **Iniciar sesión / Crear cuenta / Mi perfil / Cerrar sesión** mediante Clerk.
- Ruta de perfil protegida `/cuenta` y API autenticada `/api/me`.
- Si Clerk aún no tiene claves configuradas, funciona en **modo local** y no afirma que el usuario esté conectado.
- **No hay sincronización de selecciones entre personas todavía**. Las bandas se guardan en localStorage; conectar Convex es un paso independiente.

## Clerk existente — no crear otra aplicación

Aplicación ya elegida: `app_3MMGmQkuzWYrhGiKCnCqvAUXpST`.

Configura las variables en **Vercel > Project > Settings > Environment Variables**, o desde la integración con la aplicación Clerk existente:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

La clave secreta es **solo de servidor**; no la cometas a GitHub ni la pegues en el chat. Si usas el CLI de Clerk, autentícate en tu terminal y selecciona la app existente; no ejecutes `clerk init` si ya está vinculada. Los dominios autorizados deben incluir la URL de producción en Vercel.

## Activación

1. `npm install` con Node.js 20.9 o superior.
2. Configura las variables de Clerk y `npm run dev` para probar el registro.
3. `npm run check` y `npm run build`.
4. Ajusta el proyecto Vercel existente para **Next.js**, conserva su URL y añade las mismas variables en Production y Preview.
5. Fusiona esta rama en `main` solamente cuando la compilación y el login estén verificados.

## Nota sobre las selecciones

Clerk identifica personas y protege sesiones. Para compartir y sincronizar itinerarios entre dispositivos hace falta una base de datos compartida (por ejemplo Convex), no basta Clerk.
