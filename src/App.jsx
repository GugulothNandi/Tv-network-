import { useState } from "react";
import TopBar from "./components/TopBar";
import AppList from "./components/AppList";
import TrafficPanel from "./components/TrafficPanel";
import HomeHandle from "./components/HomeHandle";

function App() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [panelOpen, setPanelOpen] = useState(true);

  const apps = [
    {
      name: "YouTube",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      name: "Netflix",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      name: "Chrome",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732209.png",
    },
    {
      name: "Spotify",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
    },
  ];

  const mockTraffic = {
    YouTube: [
      { url: "https://youtube.com/api/videos", method: "GET", status: 200 },
      { url: "https://youtube.com/api/comments", method: "POST", status: 201 },
    ],
    Netflix: [
      { url: "https://netflix.com/api/shows", method: "GET", status: 200 },
      { url: "https://netflix.com/api/playback", method: "POST", status: 200 },
    ],
    Chrome: [{ url: "https://google.com/search", method: "GET", status: 200 }],
    Spotify: [
      { url: "https://spotify.com/api/playlist", method: "GET", status: 200 },
    ],
  };

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      <div
        className={`w-1/4 bg-gray-800 p-4 relative transition-all duration-300 ${
          panelOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <TopBar />
        <AppList apps={apps} onSelect={setSelectedApp} />
        <HomeHandle onOpen={() => setPanelOpen((prev) => !prev)} />
      </div>
      <div className="w-3/4 p-6 overflow-auto">
        <TrafficPanel
          traffic={selectedApp ? mockTraffic[selectedApp] : []}
          appName={selectedApp}
        />
      </div>
    </div>
  );
}

export default App;
