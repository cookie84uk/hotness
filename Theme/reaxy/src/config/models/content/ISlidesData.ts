export interface ISlidesData {
  title: string;
  conversionRate: string;
  rating: number;
  statistics: IStatistics[];
}

interface IStatistics {
  value: string;
  label: string;
}

