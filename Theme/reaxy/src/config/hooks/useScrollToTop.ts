import { useLayoutEffect, useRef } from "react";
import { useAppDispatch } from ".";
import { setIsScroll } from "@config/redux";
import { useLocation } from "react-router-dom";

interface ScrollToElementHook {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollToTop: () => void;
  handleScroll: () => void;
}

const useScrollToTop = (
  setState: (state: boolean) => void
): ScrollToElementHook => {
  // ** redux
  const dispatch = useAppDispatch();

  // ** refs
  const containerRef = useRef<HTMLDivElement>(null);

  // ** location
  const location = useLocation();

  // ** scroll to top
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setState(false);
      dispatch(setIsScroll(false));
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setState(containerRef.current.scrollTop > 20);
      dispatch(setIsScroll(containerRef.current.scrollTop > 20));
    }
  };

  // ** scroll to the top when reading the page
  useLayoutEffect(() => {
    if (location && containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location.pathname]);

  return {
    scrollToTop,
    handleScroll,
    containerRef,
  };
};

export default useScrollToTop;
