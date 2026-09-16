import React, { useState } from 'react';

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDueDate, setEditDueDate] = useState(task.dueDate || '');

  const handleSave = () => {
    onEdit(task.id, { title: editTitle, priority: editPriority, dueDate: editDueDate });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#121212] p-4 rounded-2xl border border-neutral-900 hover:border-neutral-800 transition gap-4">
      {isEditing ? (
        <div className="flex-1 flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="flex-1 bg-black px-3 py-2 rounded-xl text-xs border border-neutral-700 focus:outline-none text-neutral-200"
          />
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            className="bg-black px-3 py-2 rounded-xl text-xs border border-neutral-700 focus:outline-none text-neutral-400"
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="bg-black px-3 py-2 rounded-xl text-xs border border-neutral-700 focus:outline-none text-neutral-400"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={handleSave} className="bg-white text-black px-3 py-2 rounded-xl text-xs font-semibold">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-neutral-800 text-neutral-300 px-3 py-2 rounded-xl text-xs">Cancel</button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3.5">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-4 h-4 accent-white rounded cursor-pointer"
            />
            <div>
              <span className={`text-xs font-medium block ${task.completed ? 'line-through text-neutral-600' : 'text-neutral-200'}`}>
                {task.title}
              </span>
              <span className="text-[10px] text-neutral-500 mt-0.5 block">
                Due: {task.dueDate || 'None'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className={`text-[10px] px-2.5 py-1 rounded-md font-medium tracking-wide border ${
              task.priority === 'High' ? 'bg-red-950/20 text-red-400 border-red-900/30' :
              task.priority === 'Medium' ? 'bg-amber-950/20 text-amber-400 border-amber-900/30' :
              'bg-neutral-900 text-neutral-400 border-neutral-800'
            }`}>
              {task.priority}
            </span>

            <button onClick={() => setIsEditing(true)} className="text-neutral-500 hover:text-white p-1 text-xs">✏️</button>
            <button onClick={() => onDelete(task.id)} className="text-neutral-500 hover:text-red-400 p-1 text-xs">🗑️</button>
          </div>
        </>
      )}
    </div>
  );
}