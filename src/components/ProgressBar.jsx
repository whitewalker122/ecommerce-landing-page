import React from 'react';

export default function ProgressBar({ completedCount, totalCount, progressPercentage }) {
  return (
    <div className="w-full bg-black p-4 rounded-2xl border border-neutral-900">
      <div className="flex justify-between text-[11px] font-medium mb-1.5">
        <span className="text-neutral-500">Completion Progress</span>
        <span className="text-neutral-300">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-white h-full transition-all duration-500 rounded-full" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="text-[10px] text-neutral-600 mt-1.5 text-right">
        {completedCount} / {totalCount} completed
      </div>
    </div>
  );
}