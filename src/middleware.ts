import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./app/_lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.SESSION_COOKIE_NAME || "authjs.session-token",
  );
  const pathName = request.nextUrl.pathname;

  if (pathName === "/login" && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathName.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getUrl("/login")));
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
