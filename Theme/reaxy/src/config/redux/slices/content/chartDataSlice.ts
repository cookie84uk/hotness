import { IChartDataState } from '@config/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: IChartDataState = {
  formatter: '',
}

const chartDataSlice = createSlice({
  name: 'chartData',
  initialState,
  reducers: {
    setFormatter: (state, action: PayloadAction<string>) => {
      state.formatter = action.payload;
    },
  },
});

export const { setFormatter } = chartDataSlice.actions;
export default chartDataSlice.reducer;
