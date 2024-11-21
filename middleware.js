const { NextResponse } = require("next/server");

const Middlewares = (request) => {
  // If the user wants to access login page then it's ok but...
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next(); // Allow access to `/login`
  }

  //else if the user wants to access any other page other than LoginStudent, then redirect to the login page
  return NextResponse.redirect(new URL("/login", request.url));
};

// The config.matcher in Next.js middleware is used to define the specific routes or patterns where the middleware should run.
// By default, middleware applies to all routes, but the matcher allows you to limit it to specific paths, making it more efficient and targeted.
export const config = {
  matcher: "/about/:path*",
  // If we do not want user to access multiple routes , then use in the form of array
  // matcher: ["/about/:path*", "/studentlist/:path*"],
};

export default Middlewares;
