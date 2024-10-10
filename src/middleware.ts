import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();

  res.headers.set(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=30"
  );

  return res;
}
