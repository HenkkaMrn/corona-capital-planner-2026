"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function AuthNavigation({ enabled }: { enabled: boolean }) {
  if (!enabled) {
    return (
      <span className="setupHint" aria-live="polite">
        Modo local · iniciar sesión pendiente de configurar
      </span>
    );
  }

  return (
    <nav aria-label="Cuenta y acceso" className="authNav">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="action actionOutline">Iniciar sesión</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="action actionPrimary">Crear cuenta</button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <a className="action actionOutline" href="/cuenta">Mi perfil</a>
        <UserButton />
      </Show>
    </nav>
  );
}
