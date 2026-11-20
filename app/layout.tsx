import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corona Capital 2026 · Mi festival",
  description: "Organiza conciertos y recorridos del viernes 20 de noviembre de 2026."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const clerkConfigured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
  );

  return (
    <html lang="es">
      <body>
        {clerkConfigured ? <ClerkProvider>{children}</ClerkProvider> : children}
      </body>
    </html>
  );
}
