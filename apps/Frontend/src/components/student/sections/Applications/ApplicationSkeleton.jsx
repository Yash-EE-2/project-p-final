import React from "react";

const ApplicationSkeleton = ({ count }) => {
  return [...Array(count)].map((_, i) => (
    <div key={i} className="animate-pulse flex space-x-4 mb-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  ));
};

export default ApplicationSkeleton;
