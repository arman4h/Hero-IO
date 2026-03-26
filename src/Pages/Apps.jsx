import React, { useEffect, useMemo, useState } from "react";
import AppCard from "../Components/AppCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useAppContext } from "../context/AppContext";

export default function Apps() {
  const { apps } = useAppContext();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
      setIsSearching(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredApps = useMemo(() => {
    const text = debouncedSearch.trim().toLowerCase();
    if (!text) return apps;
    return apps.filter((app) => app.title.toLowerCase().includes(text));
  }, [apps, debouncedSearch]);

  return (
    <section className="w-11/12 mx-auto py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <p className="font-semibold">Total Apps: {apps.length}</p>
        <input
          type="text"
          className="input input-bordered w-full md:w-80"
          placeholder="Search app by title..."
          value={searchText}
          onChange={(event) => {
            setIsSearching(true);
            setSearchText(event.target.value);
          }}
        />
      </div>

      {isSearching ? (
        <LoadingSpinner text="Searching apps..." />
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">No App Found</h2>
          <p className="text-gray-500 mt-2">Try another app title.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
}
