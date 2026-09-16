import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title: title.trim(), priority, dueDate });
    setTitle('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#121212] p-4 rounded-3xl border border-neutral-900 mb-6 grid grid-cols-1 sm:grid-cols-12 gap-2.5">
      <input
        type="text"
        placeholder="Task description..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="sm:col-span-5 bg-black px-4 py-3 rounded-2xl text-xs border border-neutral-900 focus:outline-none focus:border-neutral-700 text-neutral-200 placeholder-neutral-600"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="sm:col-span-3 bg-black px-4 py-3 rounded-2xl text-xs border border-neutral-900 focus:outline-none focus:border-neutral-700 text-neutral-400"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="sm:col-span-2 bg-black px-3 py-3 rounded-2xl text-xs border border-neutral-900 focus:outline-none focus:border-neutral-700 text-neutral-400"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="sm:col-span-2 bg-white hover:bg-neutral-200 text-black py-3 rounded-2xl text-xs font-semibold transition">
        Add Task
      </button>
    </form>
  );
}