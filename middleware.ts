import { NextResponse, type NextRequest } from "next/server";

// Exposes the current pathname as a request header so server components
// (e.g. root layout) can set <html lang> per-route without dynamic params.
export function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.set("x-pathname", req.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
