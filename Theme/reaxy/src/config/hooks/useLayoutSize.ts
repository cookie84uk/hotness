import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { layoutSize } from "@config/constant";

const useThemeConstants = () => {
  const { vertical } = useSelector((state: RootState) => state.palette);

  // ** CUSTOMIZE
  const LAYOUT_SIZE = React.useMemo(() => {
    if (!vertical) {
      return layoutSize.CONTENT.horizontal;
    } else {
      return layoutSize.CONTENT.vertical;
    }
  }, [vertical, layoutSize]);

  return {
    LAYOUT_SIZE,
  };
};

export default useThemeConstants;
