import React from "react";

type Device = {
  id: number;
  name: string;
  ip_address: string;
  site: string;
  status: "online" | "offline";
};

interface Props {
  devices: Device[];
}

const DeviceTable: React.FC<Props> = ({ devices }) => {
  return (
    <table className="min-w-full border">
      <thead>
        <tr>
          <th className="border px-2">Name</th>
          <th className="border px-2">IP Address</th>
          <th className="border px-2">Site</th>
          <th className="border px-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((d) => (
          <tr key={d.id}>
            <td className="border px-2">{d.name}</td>
            <td className="border px-2">{d.ip_address}</td>
            <td className="border px-2">{d.site}</td>
            <td className="border px-2">
              <span
                className={`px-2 py-1 rounded ${
                  d.status === "online" ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {d.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeviceTable;
