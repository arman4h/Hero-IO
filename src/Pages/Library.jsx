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
      <div className="max-w-5xl mx-auto bg-base-200 rounded-sm p-4 md:p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-500 mt-2">Explore all trending apps on the market developed by us</p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="font-semibold text-xl">{installedApps.length} Apps Found</p>
          <select
            className="select select-sm select-bordered w-36"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="high-low">Sort: High-Low</option>
            <option value="low-high">Sort: Low-High</option>
          </select>
        </div>

        {installedApps.length === 0 ? (
          <div className="bg-base-100 rounded-sm p-8 text-center">
            <h2 className="text-2xl font-semibold">No Installed Apps</h2>
            <p className="text-gray-500 mt-2">Install apps from app details page to see them here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-base-100 rounded-sm p-3 md:p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover shrink-0"
                  />

                  <div className="min-w-0">
                    <h2 className="font-semibold text-base truncate">{app.title}</h2>
                    <div className="flex items-center gap-3 text-xs mt-1">
                      <span className="text-emerald-500 flex items-center gap-1">
                        <FaDownload size={10} /> {(app.downloads / 1000000).toFixed(1)}M
                      </span>
                      <span className="text-amber-500 flex items-center gap-1">
                        <FaStar size={10} /> {app.ratingAvg}
                      </span>
                      <span className="text-gray-500">{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-success btn-sm text-white"
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
