import React, { useState, useEffect } from "react";
import Chat from "./components/Chat";
import Admin from "./components/Admin";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

// === Efficiency Widget (Live Updating Graph) ===
function EfficiencyWidget() {
  const [efficiencyData, setEfficiencyData] = useState([80, 82, 79, 85, 90, 88, 92]);
  const [labels, setLabels] = useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEfficiencyData((prev) => {
        const nextValue = prev[prev.length - 1] + (Math.random() * 4 - 2);
        const newData = [...prev.slice(1), Math.max(70, Math.min(100, nextValue))];
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Efficiency %",
        data: efficiencyData,
        borderColor: "#00b4d8",
        backgroundColor: "rgba(0,180,216,0.2)",
        borderWidth: 2,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: { min: 70, max: 100, ticks: { stepSize: 5 } },
    },
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card">
      <h3>Efficiency</h3>
      <div style={{ height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

// === Resources Section ===
function Resources() {
  const [resources, setResources] = useState([
    { name: "Ford Service Info", url: "https://www.motorcraftservice.com/" },
    { name: "ALLDATA Repair", url: "https://www.alldata.com/" },
    { name: "Identifix", url: "https://www.identifix.com/" },
    { name: "YouTube Auto Repair", url: "https://www.youtube.com/results?search_query=auto+repair" },
  ]);

  const addResource = () => {
    const name = prompt("Enter resource name:");
    const url = prompt("Enter resource URL (include https://):");
    if (name && url) setResources([...resources, { name, url }]);
  };

  return (
    <div className="card">
      <h3>Resources</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {resources.map((r, i) => (
          <li key={i} style={{ marginBottom: "6px" }}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00b4d8",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              {r.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addResource} style={{ marginTop: "8px" }}>
        + Add Resource
      </button>
    </div>
  );
}

// === Main App ===
export default function App() {
  const [active, setActive] = useState("performance");

  return (
    <div className="container">
      <header className="header">
        <h1>TechAI Assistant</h1>
        <nav className="tabs">
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>
            Performance
          </button>
          <button className={active === "repair" ? "active" : ""} onClick={() => setActive("repair")}>
            Repair Videos
          </button>
          <button className={active === "chat" ? "active" : ""} onClick={() => setActive("chat")}>
            Chat
          </button>
          <button className={active === "admin" ? "active" : ""} onClick={() => setActive("admin")}>
            Admin
          </button>
          <button className={active === "resources" ? "active" : ""} onClick={() => setActive("resources")}>
            Resources
          </button>
        </nav>
      </header>

      <main>
        {active === "performance" && <EfficiencyWidget />}
        {active === "repair" && (
          <div className="card">
            <h3>Repair Videos</h3>
            <p>Coming soon: curated repair tutorials and guides.</p>
          </div>
        )}
        {active === "chat" && <Chat />}
        {active === "admin" && <Admin />}
        {active === "resources" && <Resources />}
      </main>
    </div>
  );
}
