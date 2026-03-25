import React from "react";
import Hero from "../Components/Hero";
import AppCard from "../Components/AppCard";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { apps } = useAppContext();
  const topApps = apps.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      <Hero />

      <section className="w-11/12 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Top Apps</h2>
          <p className="text-gray-500 mt-2">
            Explore our most downloaded and highly rated applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/apps" className="btn btn-primary">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}
