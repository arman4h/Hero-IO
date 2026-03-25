import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="card bg-base-100 border border-base-300"
    >
      <figure className="h-48">
        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg">{app.title}</h3>
        <p className="text-sm text-gray-500">{app.companyName}</p>
        <div className="flex justify-between text-sm pt-2">
          <span className="flex items-center gap-2">
            <FaDownload /> {app.downloads.toLocaleString()}
          </span>
          <span className="flex items-center gap-1 text-amber-500">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
}
