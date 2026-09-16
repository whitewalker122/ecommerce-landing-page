import React, { useState } from 'react';

export default function Sidebar({ projects, activeProjectId, setActiveProjectId, onAddProject, taskCount }) {
  const [newProjectName, setNewProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    onAddProject(newProjectName.trim());
    setNewProjectName('');
  };

  return (
    <aside className="w-full md:w-80 bg-black border-r border-neutral-900 p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
            ◼
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-widest text-neutral-200 uppercase">Tracker.io</h1>
            <p className="text-[11px] text-neutral-500">Structured Management</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="New project..."
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            className="w-full bg-[#121212] text-xs text-neutral-200 px-3.5 py-3 rounded-xl border border-neutral-800 focus:outline-none focus:border-neutral-600 transition"
          />
          <button type="submit" className="bg-white hover:bg-neutral-200 text-black px-4 py-3 rounded-xl text-xs font-semibold transition">
            +
          </button>
        </form>

        <div className="space-y-1">
          <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest px-1 mb-2">Projects</p>
          {projects.map(proj => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectId(proj.id)}
              className={`w-full text-left px-3.5 py-3 rounded-xl text-xs transition flex items-center justify-between ${
                activeProjectId === proj.id 
                  ? 'bg-neutral-900 text-white font-medium border border-neutral-800' 
                  : 'text-neutral-400 hover:bg-neutral-900/50 hover:text-neutral-200'
              }`}
            >
              <span className="truncate">{proj.name}</span>
              <span className="text-[10px] text-neutral-600 bg-black px-2 py-0.5 rounded-md border border-neutral-900">
                {taskCount(proj.id)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-neutral-600 pt-4 border-t border-neutral-900">
        System Status: <span className="text-neutral-400">Operational</span>
      </div>
    </aside>
  );
}