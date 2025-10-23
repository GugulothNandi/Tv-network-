import React from "react";

function TrafficPanel({ traffic, appName }) {
  if (!appName)
    return <p className="text-gray-400">Select an app to see HTTPS traffic</p>;

  return (
    <div>
      <h2 className="text-xl mb-4">{appName} HTTPS Traffic</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">URL</th>
            <th className="p-2">Method</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {traffic.map((t, i) => (
            <tr key={i} className="hover:bg-gray-700">
              <td className="p-2 break-all">{t.url}</td>
              <td className="p-2">{t.method}</td>
              <td className="p-2">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrafficPanel;
