export async function fetchDevices() {
  const res = await fetch("http://localhost:8000/api/devices/");
  if (!res.ok) throw new Error("Failed to fetch devices");
  return res.json();
}
