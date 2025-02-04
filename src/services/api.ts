import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DatabaseType } from "../types";

const originalMockDatabase: Record<string, DatabaseType> = {
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

// Function to generate dynamic scores based on date range
function generateDynamicScores(startDate: string, endDate: string) {
  const start = parseInt(startDate.split('-')[2] || '14', 10);
  const end = parseInt(endDate.split('-')[2] || '18', 10);
  
  // Base scores with some randomness and trend
  const baseScores = [
    { day: "MON", date: "14", score: 85 },
    { day: "TUE", date: "15", score: 78 },
    { day: "WED", date: "16", score: 92 },
    { day: "THU", date: "17", score: 88 },
    { day: "FRI", date: "18", score: 95 },
  ];

  // Filter and slightly modify scores based on date range
  return baseScores
    .filter(entry => {
      const date = parseInt(entry.date, 10);
      return date >= start && date <= end;
    })
    .map(entry => {
      // Add some dynamic variation
      const variation = Math.random() * 10 - 5; // -5 to +5 points
      const energySavingsImpact = Math.random() * 3; // Additional small impact
      
      return {
        ...entry,
        score: Math.max(0, Math.min(100, entry.score + variation + energySavingsImpact))
      };
    });
}

function generateDynamicEmissions(startDate: string) {
  const start = parseInt(startDate.split('-')[2] || '14', 10);
  
  // Base emissions with potential for more significant variation
  const baseEmissions = [
    { name: "Transport", value: 47 },
    { name: "Energy", value: 75 },
    { name: "Waste", value: 82 },
  ];

  // Apply dynamic variations with more randomness
  return baseEmissions.map(emission => {
    // Increased variation range between -30% to +30%
    const variationFactor = 1 + (Math.random() * 0.6 - 0.3);
    
    // Additional randomness based on date
    const dateRangeFactor = 1 + (Math.sin(start) * 0.2);
    
    // Time of day factor for more dynamic simulation
    const timeOfDayFactor = 1 + (Math.cos(Date.now()) * 0.1);
    
    return {
      ...emission,
      value: Math.max(10, Math.min(100, Math.round(
        emission.value * variationFactor * dateRangeFactor * timeOfDayFactor
      )))
    };
  });
}


// Initialize axios
const api = axios.create({ baseURL: "https://mockapi.com" });

// Use mock adapter only in development
if (process.env.NODE_ENV !== "production") {
  const mock = new MockAdapter(api, { delayResponse: 800 });

  // Mock API response in development with dynamic score generation
  mock.onGet("/dashboard").reply((config) => {
    const url = new URL(`https://mockapi.com${config.url}`);
    const startDate = url.searchParams.get("startDate") || "14";
    const endDate = url.searchParams.get("endDate") || "18";

    // Create a deep copy of the original database
    const data = JSON.parse(JSON.stringify(originalMockDatabase["/dashboard"]));
    
    // Generate dynamic sustainability scores
    data.sustainabilityScore = generateDynamicScores(
      `2024-02-${startDate.padStart(2, '0')}`, 
      `2024-02-${endDate.padStart(2, '0')}`
    );

    // Generate dynamic emissions data
    data.dailyEmissions = generateDynamicEmissions(
      `2024-02-${startDate.padStart(2, '0')}`, 
    );

    return [200, data];
  });
}

export const fetchMockData = async (
  endpoint: string,
  params?: { startDate?: string; endDate?: string }
): Promise<DatabaseType> => {
  if (process.env.NODE_ENV === "production") {
    const data = JSON.parse(JSON.stringify(originalMockDatabase[endpoint]));

    if (params?.startDate && params?.endDate) {
      // Generate dynamic sustainability scores
      data.sustainabilityScore = generateDynamicScores(
        `2024-02-${params.startDate.padStart(2, '0')}`, 
        `2024-02-${params.endDate.padStart(2, '0')}`
      );

      // Generate dynamic emissions data
      data.dailyEmissions = generateDynamicEmissions(
        `2024-02-${params.startDate.padStart(2, '0')}`, 
      );
    }

    return data;
  }

  const response = await api.get(endpoint, { params });
  return response.data;
};