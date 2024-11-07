interface IFormatterData {
  id: string;
  component: string | string[];
}

export const formatterData = (): IFormatterData[] => {
  return [
    {
      id: "Main",
      component: `import { Box, Fab } from "@mui/material";
      import React from "react";
      import { styles } from "./main.styles";
      import {
        useAppDispatch,
        useAppSelector,
        useLayoutSize,
        useScrollToTop,
      } from "@config/hooks";
      import { KeyboardArrowUp } from "@mui/icons-material";
      import { docData } from "@doc/data";
      import { setIsScroll } from "@config/redux";
      
      export default function Main() {
        // ** dispatch
        const dispatch = useAppDispatch();
        // ** data
        const docDataList = docData();
      
        // ** redux
        const { isOpen } = useAppSelector((state) => state.slices.doc);
      
        const { drawerWidth, vertical, isRtl,isScroll } = useAppSelector(
          (state) => state.palette
        );
      
        const { sidebarIsOpen } = useAppSelector(
          (state) => state.generalModels.themeOptions
        );
      
      
        // ** hook
        const { scrollToTop, handleScroll, containerRef } = useScrollToTop(() => {
          dispatch(setIsScroll(true));
        });
      
        const { LAYOUT_SIZE } = useLayoutSize();
      
        const style = styles(
          { isOpen },
          { drawerWidth },
          { isScroll },
          { isRtl },
          { LAYOUT_SIZE }
        );
      
        return (
          <Box
            sx={style.container}
            className={sidebarIsOpen && vertical ? "mainDrawer" : ""}
            ref={containerRef}
            onScroll={handleScroll}
          >
            {docDataList.map((section) => (
              <div key={section.id} className="section" id={section.id}>
                {section.component}
              </div>
            ))}
      
            <Box role="presentation" sx={style.fab}>
              <Fab
                onClick={scrollToTop}
                color="primary"
                size="large"
                aria-label="Scroll back to top"
              >
                <KeyboardArrowUp fontSize="large" />
              </Fab>
            </Box>
          </Box>
        );
      }
      `,
    },
    {
      id: "installation",
      component: "nbwjdcAHBWSJCAH",
    },
  ];
};
