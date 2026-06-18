import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = request.nextUrl.pathname;

  // Logged-in user cannot visit login/register
  if (
    session &&
    (pathname === "/login" || pathname === "/register")
  ) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  // Protected Routes
  const protectedRoutes = [
    "/jobs",
    "/companies",
    "/pricing",
    "/profile",
    "/dashboard",
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!session && isProtected) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",

    "/jobs/:path*",

    "/companies/:path*", // ✅ /companies and /companies/[id]

    "/pricing",

    "/profile/:path*",

    "/dashboard/:path*",
  ],
};