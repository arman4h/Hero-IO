import React from "react";

export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
}
