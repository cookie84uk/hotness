import { useSelector, useDispatch } from "react-redux";
import { setPrimaryMode } from "@config/redux/slices/content/modeSlice";
import {
  handleVertical,
  handleRadioChange,
  handleRtl,
} from "@config/redux/slices/paletteSlice";
import { RootState } from "../redux/store";
import { layoutSize } from "@config/constant";
import { setIsLoading } from "@config/redux/slices/content/loaderSlice";

interface LandingActions {
  setVertical: () => void;
  setVerticalCompact: () => void;
  setHorizontalCompact: () => void;
  setVerticalMini: () => void;
  setHorizontalMini: () => void;
  setRtl: () => void;
  setRtlHorizontal: () => void;
  setPrimaryMode: (mode: string) => void;
}

const useLanding = (): LandingActions => {
  // ** redux states
  const { isRtl, vertical, drawerWidth } = useSelector(
    (state: RootState) => state.palette
  );

  // ** dispatch
  const dispatch = useDispatch();

  // ** method
  const setLoadingAndDispatch = (action: Function) => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      action();
      dispatch(setIsLoading(false));
    }, 1000);
  };

  // ** methods
  const setVertical = () => {
    if (!vertical) return;
    setLoadingAndDispatch(() => dispatch(handleVertical(false)));
  };

  const setVerticalCompact = () => {
    if (drawerWidth === layoutSize.DRAWER_WIDTH.COMPACT) return;
    setLoadingAndDispatch(() => dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.COMPACT)));
  };

  const setHorizontalCompact = () => {
    if (!vertical || drawerWidth === layoutSize.DRAWER_WIDTH.COMPACT) return;
    setLoadingAndDispatch(() => {
      dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.COMPACT));
      dispatch(handleVertical(false));
    });
  };

  const setVerticalMini = () => {
    if (drawerWidth === layoutSize.DRAWER_WIDTH.MINI) return;
    setLoadingAndDispatch(() => dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.MINI)));
  };

  const setHorizontalMini = () => {
    if (!vertical || drawerWidth === layoutSize.DRAWER_WIDTH.MINI) return;
    setLoadingAndDispatch(() => {
      dispatch(handleRadioChange(layoutSize.DRAWER_WIDTH.MINI));
      dispatch(handleVertical(false));
    });
  };

  const setRtl = () => {
    if (isRtl) return;
    setLoadingAndDispatch(() => dispatch(handleRtl(true)));
  };

  const setRtlHorizontal = () => {
    if (!vertical || isRtl) return;
    setLoadingAndDispatch(() => {
      dispatch(handleRtl(true));
      dispatch(handleVertical(false));
    });
  };

  const setPrimaryModeHandler = (mode: string) => {
    setLoadingAndDispatch(() => dispatch(setPrimaryMode(mode)));
  };

  return {
    setVertical,
    setVerticalCompact,
    setHorizontalCompact,
    setVerticalMini,
    setHorizontalMini,
    setRtl,
    setRtlHorizontal,
    setPrimaryMode: setPrimaryModeHandler,
  };
};

export default useLanding;
