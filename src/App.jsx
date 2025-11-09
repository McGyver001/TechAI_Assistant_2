import React, { useState } from "react";

export default function App() {
  const [resources, setResources] = useState([
    { name: "Ford Login", url: "https://www.fmcdealer.dealerconnection.com/" },
    { name: "Ford Service Manual", url: "https://www.motorcraftservice.com" },
    { name: "Alldata Login", url: "https://my.alldata.com/" },
  ]);

  const [newResourceName, setNewResourceName] = useState("");
  const [newResourceURL, setNewResourceURL] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateResource = () => {
    if (!newResourceName.trim() || !newResourceURL.trim()) return;

    if (editIndex !== null) {
      const updated = [...resources];
      updated[editIndex] = { name: newResourceName, url: newResourceURL };
      setResources(updated);
      setEditIndex(null);
    } else {
      setResources([
        ...resources,
        { name: newResourceName, url: newResourceURL },
      ]);
    }

    setNewResourceName("");
    setNewResourceURL("");
  };

  const editResource = (index) => {
    setNewResourceName(resources[index].name);
    setNewResourceURL(resources[index].url);
    setEditIndex(index);
  };

  const deleteResource = (index) => {
    const filtered = resources.filter((_, i) => i !== index);
    setResources(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Tech AI Assistant</h1>
        <p className="text-gray-400">Smart tools for diagnostic efficiency</p>
      </header>

      <main className="max-w-3xl mx-auto space-y-10">
        {/* Multipoint Section */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Multipoint</h2>
          <p className="text-gray-400 mb-4">
            Access the Ford Professional Diagnostic Login below:
          </p>
          <a
            href="https://app.fordpdl.com/12/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              Ford PDL Login
            </button>
          </a>
        </section>

        {/* Resources Section */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            {resources.map((res, index) => (
              <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {res.name}
                </a>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => editResource(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteResource(index)}
                    className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Add/Edit Resource Inputs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Resource Name"
              value={newResourceName}
              onChange={(e) => setNewResourceName(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg w-full sm:w-1/2"
            />
            <input
              type="text"
              placeholder="Resource URL"
              value={newResourceURL}
              onChange={(e) => setNewResourceURL(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded-lg w-full sm:w-1/2"
            />
            <button
              onClick={addOrUpdateResource}
              className={`${
                editIndex !== null
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : "bg-green-600 hover:bg-green-700"
              } px-4 py-2 rounded-lg w-full sm:w-auto`}
            >
              {editIndex !== null ? "Save Changes" : "+ Add Resource"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
