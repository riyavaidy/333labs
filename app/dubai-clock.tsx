"use client";

import { useState, useEffect } from "react";

function getWeatherIcon(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? "sun.max.fill" : "moon.stars.fill";
  if (code <= 2) return isDay ? "cloud.sun.fill" : "cloud.moon.fill";
  if (code === 3) return "cloud.fill";
  if (code === 45 || code === 48) return "cloud.fog.fill";
  if (code >= 51 && code <= 55) return "cloud.drizzle.fill";
  if (code === 56 || code === 57) return "cloud.sleet.fill";
  if (code >= 61 && code <= 63) return "cloud.rain.fill";
  if (code === 65) return "cloud.heavyrain.fill";
  if (code === 66 || code === 67) return "cloud.sleet.fill";
  if (code >= 71 && code <= 77) return "cloud.snow.fill";
  if (code >= 80 && code <= 82) return "cloud.rain.fill";
  if (code >= 85 && code <= 86) return "cloud.snow.fill";
  if (code === 95) return "cloud.bolt.fill";
  if (code === 96 || code === 99) return "cloud.bolt.rain.fill";
  return "cloud.fill";
}

export function DubaiClock() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<{
    temp: number;
    icon: string;
  } | null>(null);

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=25.276987&longitude=55.296249&current=temperature_2m,weather_code,is_day"
    )
      .then((r) => r.json())
      .then((data) => {
        const { temperature_2m, weather_code, is_day } = data.current;
        setWeather({
          temp: Math.round(temperature_2m),
          icon: getWeatherIcon(weather_code, is_day === 1),
        });
      })
      .catch(() => {});
  }, []);

  if (!time) return null;

  return (
    <p
      className="text-tertiary"
      style={{
        marginTop: 48,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {weather && (
        <>
          <img
            src={`/weather/${weather.icon}.svg`}
            alt=""
            width={16}
            height={16}
          />
          {weather.temp}°C ·{" "}
        </>
      )}
      {time} Dubai
    </p>
  );
}
