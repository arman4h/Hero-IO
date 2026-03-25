import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaDownload, FaRegCommentDots, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppContext } from "../context/AppContext";

export default function AppDetails() {
  const { id } = useParams();
  const { apps, installById, isInstalled } = useAppContext();
  const app = useMemo(() => apps.find((item) => item.id === Number(id)), [apps, id]);
  const [isClickingInstall, setIsClickingInstall] = useState(false);
  const installed = isInstalled(id);

  if (!app) {
    return (
      <section className="w-11/12 mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold">App Not Found</h1>
        <p className="text-gray-500 mt-3">The app details you are looking for are unavailable.</p>
        <Link to="/apps" className="btn btn-primary mt-6">
          Back to Apps
        </Link>
      </section>
    );
  }

  const handleInstall = () => {
    setIsClickingInstall(true);
    const didInstall = installById(app.id);
    if (didInstall) {
      toast.success(`${app.title} installed successfully`);
    } else {
      toast("Already installed");
    }
    setIsClickingInstall(false);
  };

  return (
    <section className="w-11/12 mx-auto py-12 space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-2">
          <img src={app.image} alt={app.title} className="rounded-md w-full h-72 object-cover" />
        </div>

        <div className="lg:col-span-3 space-y-4">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-base text-gray-600">{app.companyName}</p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="badge badge-outline p-3 gap-2">
              <FaStar className="text-amber-500" /> {app.ratingAvg}
            </span>
            <span className="badge badge-outline p-3 gap-2">
              <FaDownload /> {app.downloads.toLocaleString()} Downloads
            </span>
            <span className="badge badge-outline p-3 gap-2">
              <FaRegCommentDots /> {app.reviews.toLocaleString()} Reviews
            </span>
            <span className="badge badge-outline p-3">Size: {app.size} MB</span>
          </div>

          <button className="btn btn-primary" disabled={installed || isClickingInstall} onClick={handleInstall}>
            {installed ? "Installed" : isClickingInstall ? "Installing..." : "Install"}
          </button>
        </div>
      </div>

      <div className="bg-base-100 p-5 rounded-md border border-base-300">
        <h2 className="text-2xl font-bold mb-4">App Review Chart</h2>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#7c3aed" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-base-100 p-5 rounded-md border border-base-300">
        <h2 className="text-2xl font-bold mb-4">App Description</h2>
        <p className="text-gray-600">{app.description}</p>
      </div>
    </section>
  );
}
