import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/error-404.png";

export default function ErrorPage() {
  return (
    <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl w-full">
        <img
          src={errorImage}
          alt="404 error"
          className="w-full max-w-md mx-auto mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 text-lg mb-6">
          The page you are looking for is not available.
        </p>
        <Link to="/" className="btn btn-primary px-10">
          Go Back!
        </Link>
      </div>
    </section>
  );
}
