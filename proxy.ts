import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const isProtected = createRouteMatcher(["/cuenta(.*)", "/api/me(.*)"]);

const withClerk = clerkMiddleware(async (auth, request) => {
  if (isProtected(request)) {
    await auth.protect();
  }
});

// Keep the planner public if Clerk credentials have not yet been configured.
// This is an installation fallback, not an authentication bypass for protected user data.
export default function proxy(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !process.env.CLERK_SECRET_KEY) {
    if (isProtected(request)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  return withClerk(request, {} as never);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|webmanifest)).*)",
    "/(api|trpc)(.*)"
  ]
};
