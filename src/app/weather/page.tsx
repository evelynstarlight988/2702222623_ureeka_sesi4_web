"use client";

import { useState } from "react";
import Navbar from "@/component/ui/navbar";

export default function WeatherPage() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(`/api/weather?location=${location}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <Navbar />

      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-white-400">
            Weather App
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 w-full">
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-auto px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 text-white"
            />
            <button
              onClick={fetchWeather}
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Search
            </button>
          </div>

          {loading && <p className="text-gray-300">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {weather?.location && weather?.current && (
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mt-6 text-left">
              <h2 className="text-2xl font-semibold text-purple-300">
                {weather.location.name}, {weather.location.country}
              </h2>
              <p className="mt-2 text-gray-300">
                <strong>Temperature:</strong> {weather.current.temperature}°C
              </p>
              <p className="text-gray-300">
                <strong>Condition:</strong>{" "}
                {weather.current.weather_descriptions[0]}
              </p>
              <img
                src={weather.current.weather_icons[0]}
                alt="weather icon"
                className="mt-4 inline-block"
              />
            </div>
          )}
        </div>
      </section>

      <footer className="w-full py-8 bg-black text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Weather App by Michelle.
          </p>
        </div>
      </footer>
    </main>
  );
}
