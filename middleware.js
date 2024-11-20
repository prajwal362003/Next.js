const { NextResponse } = require("next/server");

const Middlewares = (request) => {
  // If the user wants to access login page then it's ok but...
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next(); // Allow access to `/login`
  }

  //else if the user wants to access any other page other than LoginStudent, then redirect to the login page
  return NextResponse.redirect(new URL("/login", request.url));
};

export const config = {
  // matcher: "/about/:path*",

  // If we do not want user to access multiple routes , then use in the form of array
  matcher: ["/about/:path*", "/studentlist/:path*"],
};

export default Middlewares;
