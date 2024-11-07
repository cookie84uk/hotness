export interface IChartDataProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export type OmitNameAndUv = Pick<IChartDataProps, "name" | "uv">;

export interface IChartDataState {
  formatter: string;
}
