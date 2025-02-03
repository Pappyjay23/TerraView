import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DatabaseType } from "../types";

const mockDatabase: Record<string, DatabaseType> = {
  "/dashboard": {
    dailyEmissions: [
      { name: "Transport", value: 47 },
      { name: "Energy", value: 75 },
      { name: "Waste", value: 82 },
    ],
    energySavings: [
      { name: "00:00", value: 30 },
      { name: "04:00", value: 45 },
      { name: "08:00", value: 75 },
      { name: "12:00", value: 65 },
      { name: "16:00", value: 85 },
      { name: "20:00", value: 55 },
      { name: "23:59", value: 45 },
    ],
    airQuality: [
      { day: "Mon", value: 4.5 },
      { day: "Tue", value: 3.8 },
      { day: "Wed", value: 4.2 },
      { day: "Thu", value: 3.9 },
      { day: "Fri", value: 4.1 },
    ],
    weeklyTrends: [
      { day: "Mon", emissions: 120, energy: 150 },
      { day: "Tue", emissions: 110, energy: 145 },
      { day: "Wed", emissions: 105, energy: 140 },
      { day: "Thu", emissions: 115, energy: 155 },
      { day: "Fri", emissions: 108, energy: 148 },
      { day: "Sat", emissions: 100, energy: 135 },
      { day: "Sun", emissions: 95, energy: 130 },
    ],
    sustainabilityScore: [
      { day: "MON", date: "14", score: 85 },
      { day: "TUE", date: "15", score: 78 },
      { day: "WED", date: "16", score: 92 },
      { day: "THU", date: "17", score: 88 },
      { day: "FRI", date: "18", score: 95 },
    ],
    resourceUsage: [
      { name: "Water Usage", icon: "MdWaterDrop", color: "blue", value: 75 },
      { name: "Energy Usage", icon: "MdBolt", color: "yellow", value: 62 },
      { name: "Waste Recycled", icon: "MdRecycling", color: "green", value: 89 },
    ],
  },
};

// Initialize axios
const api = axios.create({ baseURL: "https://mockapi.com" });

// Use mock adapter only in development
if (process.env.NODE_ENV !== "production") {
  const mock = new MockAdapter(api, { delayResponse: 800 });

  // Mock API response in development
  mock.onGet("/dashboard").reply(200, mockDatabase["/dashboard"]);
}

export const fetchMockData = async (endpoint: string): Promise<DatabaseType> => {
  if (process.env.NODE_ENV === "production") {
    return mockDatabase[endpoint];
  }

  const response = await api.get(endpoint);
  return response.data;
};
