import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold">Oops! Page not found</h2>
        <p className="text-gray-500">
          {error?.statusText || error?.message || "The page you requested does not exist."}
        </p>
        <Link to="/" className="btn btn-primary mt-2">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
