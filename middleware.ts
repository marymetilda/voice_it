import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sing-in", "/sign-up", "/"]);

export default clerkMiddleware(async (auth, req) => {
  // Restrict admin route to users with specific role
  if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
