import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth"

export default async function proxy(request: NextRequest) {
    const session = await getSession()

    const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up");
    const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");

    if (session?.user && (isSignUpPage || isSignInPage)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Run all the checks above
    // If everything is good, then let the request through
    return NextResponse.next();
}