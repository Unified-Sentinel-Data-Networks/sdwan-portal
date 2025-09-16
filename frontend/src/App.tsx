import React, { useEffect, useState } from "react";
import { fetchDevices } from "./api";
import DeviceTable from "./components/DeviceTable";

function App() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDevices()
      .then(setDevices)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading devices...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">SD-WAN Devices</h1>
      <DeviceTable devices={devices} />
    </div>
  );
}

export default App;
