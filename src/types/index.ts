
export interface DailyEmissionsData {
    name: string;
    value: number;
  }
  
  export interface EnergySavingsData {
    name: string;
    value: number;
  }
  
  export interface AirQualityData {
    day: string;
    value: number;
  }
  
  export interface WeeklyTrendsData {
    day: string;
    emissions: number;
    energy: number;
  }
  
  export interface SustainabilityScoreData {
    day: string;
    date: string;
    score: number;
  }
  
  export interface ResourceData {
    name: string;
    color: string;
    value: number;
    icon: string;
  }

  export interface DatabaseType {
    dailyEmissions: DailyEmissionsData[],
    energySavings: EnergySavingsData[],
    airQuality: AirQualityData[],
    weeklyTrends: WeeklyTrendsData[],
    sustainabilityScore: SustainabilityScoreData[],
    resourceUsage: ResourceData[],
  }