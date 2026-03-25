import React, { useMemo, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

export default function Library() {
  const { apps, installedIds, uninstallById } = useAppContext();
  const [sortOrder, setSortOrder] = useState("high-low");

  const installedApps = useMemo(() => {
    const selected = apps.filter((app) => installedIds.includes(app.id));
    const sorted = [...selected].sort((a, b) => a.downloads - b.downloads);
    return sortOrder === "high-low" ? sorted.reverse() : sorted;
  }, [apps, installedIds, sortOrder]);

  const handleUninstall = (appId, appTitle) => {
    uninstallById(appId);
    toast.success(`${appTitle} uninstalled successfully`);
  };

  return (
    <section className="w-11/12 mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold">My Installation</h1>
          <p className="text-gray-500 mt-2">Manage installed apps and sort by download count.</p>
        </div>

        <select
          className="select select-bordered w-full md:w-56"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-16 bg-base-200 rounded-md">
          <h2 className="text-2xl font-semibold">No Installed Apps</h2>
          <p className="text-gray-500 mt-2">Install apps from details page to see them here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installedApps.map((app) => (
            <div key={app.id} className="card bg-base-100 border border-base-300">
              <figure className="h-48">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <p className="text-gray-500 text-sm">{app.companyName}</p>

                <div className="flex justify-between text-sm py-2">
                  <span className="flex items-center gap-2">
                    <FaDownload /> {app.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500">
                    <FaStar /> {app.ratingAvg}
                  </span>
                </div>

                <button
                  className="btn btn-error btn-outline"
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
