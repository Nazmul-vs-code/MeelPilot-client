import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {

    console.log("🔥 Proxy Running:", request.nextUrl.pathname);

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    console.log("Session:", session);

    const { pathname } = request.nextUrl;


    // Redirect logged users away from auth pages
    if (
        session &&
        (
            pathname === "/signin" ||
            pathname === "/signup" ||
            pathname === "/auth/login"
        )
    ) {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }


    // Protected routes

    const protectedRoutes = [
        "/dashboard",
        "/profile",
        "/checkout",
        "/orders",
    ];


    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );


    if (isProtected && !session) {
        return NextResponse.redirect(
            new URL("/auth/login", request.url)
        );
    }


    // Admin
    if (
        pathname.startsWith("/dashboard/admin") &&
        session?.user?.role !== "admin"
    ) {
        return NextResponse.redirect(
            new URL("/unauthorized", request.url)
        );
    }


    // Seller
    if (
        pathname.startsWith("/dashboard/seller") &&
        session?.user?.role !== "seller"
    ) {
        return NextResponse.redirect(
            new URL("/unauthorized", request.url)
        );
    }


    // Customer
    if (
        pathname.startsWith("/dashboard/customer") &&
        session?.user?.role !== "customer"
    ) {
        return NextResponse.redirect(
            new URL("/unauthorized", request.url)
        );
    }


    return NextResponse.next();
}


export const config = {
    matcher: [
        "/signin",
        "/signup",
        "/auth/login",
        "/dashboard/:path*",
        "/profile/:path*",
        "/checkout/:path*",
        "/orders/:path*",
    ],
};