import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      setError("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createTask = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title) {
      setError("Title is required");
      return;
    }

    try {
      await api.post("/tasks", formData);

      setFormData({
        title: "",
        description: ""
      });

      fetchTasks();
    } catch (err) {
      setError("Failed to create task");
    }
  };

  const markCompleted = async (id) => {
    try {
      await api.put(`/tasks/${id}`, {
        status: "Completed"
      });

      fetchTasks();
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-6">My Tasks</h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {error}
          </p>
        )}

        <form
          onSubmit={createTask}
          className="bg-white p-6 rounded shadow mb-8"
        >
          <input
            type="text"
            name="title"
            placeholder="Task title"
            className="w-full border p-2 mb-4 rounded"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Task description"
            className="w-full border p-2 mb-4 rounded"
            value={formData.description}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </form>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-5 rounded shadow flex justify-between items-start"
              >
                <div>
                  <h3 className="text-xl font-bold">{task.title}</h3>

                  <p className="text-gray-600 mt-1">
                    {task.description}
                  </p>

                  <span
                    className={`inline-block mt-3 px-3 py-1 rounded text-sm ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                <div className="flex gap-2">
                  {task.status === "Pending" && (
                    <button
                      onClick={() => markCompleted(task.id)}
                      className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                    >
                      Complete
                    </button>
                  )}

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;