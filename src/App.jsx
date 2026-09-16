import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Sidebar from './components/SideBar';
import ProgressBar from './components/ProgressBar';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

export default function App() {
  const [projects, setProjects] = useLocalStorage('tracker_projects', [
    { id: 1, name: 'Core Architecture' },
    { id: 2, name: 'Frontend Design' }
  ]);
  
  const [tasks, setTasks] = useLocalStorage('tracker_tasks', [
    { id: 1, projectId: 1, title: 'Initialize container setup', priority: 'High', dueDate: '2026-03-25', completed: true },
    { id: 2, projectId: 2, title: 'Refactor UI color palette', priority: 'Medium', dueDate: '2026-03-28', completed: false }
  ]);

  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddProject = (name) => {
    const newProj = { id: Date.now(), name };
    setProjects([...projects, newProj]);
    setActiveProjectId(newProj.id);
  };

  const handleAddTask = ({ title, priority, dueDate }) => {
    const newTask = {
      id: Date.now(),
      projectId: activeProjectId,
      title,
      priority,
      dueDate: dueDate || new Date().toISOString().split('T')[0],
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleEditTask = (taskId, updatedData) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, ...updatedData } : t));
  };

  const activeProject = projects.find(p => p.id === activeProjectId);
  const projectTasks = tasks.filter(t => t.projectId === activeProjectId);
  const completedCount = projectTasks.filter(t => t.completed).length;
  const totalCount = projectTasks.length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredTasks = projectTasks.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === 'Active') return !t.completed;
    if (filter === 'Completed') return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col md:flex-row font-sans">
      <Sidebar 
        projects={projects}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        onAddProject={handleAddProject}
        taskCount={(projId) => tasks.filter(t => t.projectId === projId).length}
      />

      <main className="flex-1 p-6 md:p-10 max-w-4xl overflow-y-auto">
        {activeProject ? (
          <div>
            {/* Header and Progress Section */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6 bg-[#121212] border border-neutral-900 p-6 rounded-3xl">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-neutral-100 mb-1">{activeProject.name}</h2>
                  <p className="text-xs text-neutral-500">Monitor tasks, milestones, and daily execution metrics.</p>
                </div>
                <div className="w-full md:w-56">
                  <ProgressBar 
                    completedCount={completedCount}
                    totalCount={totalCount}
                    progressPercentage={progressPercentage}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#121212] border border-neutral-900 text-xs px-4 py-3 rounded-2xl focus:outline-none focus:border-neutral-700 transition text-neutral-200 placeholder-neutral-600"
                  />
                </div>

                <div className="flex bg-[#121212] p-1 rounded-2xl border border-neutral-900 text-xs">
                  {['All', 'Active', 'Completed'].map(f => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-xl transition font-medium text-xs ${filter === f ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <TaskForm onAddTask={handleAddTask} />

            <div className="space-y-2.5">
              {filteredTasks.length === 0 ? (
                <div className="text-center py-16 text-neutral-600 border border-dashed border-neutral-900 rounded-3xl bg-[#121212]/30 text-xs">
                  No records match the current parameters.
                </div>
              ) : (
                filteredTasks.map(task => (
                  <TaskItem 
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                    onEdit={handleEditTask}
                  />
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-600 text-xs">Select or establish a project structure.</div>
        )}
      </main>
    </div>
  );
}