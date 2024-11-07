import { useEffect, useState } from "react";

export const useScrollSpy = (targetIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isFirstId, setIsFirstId] = useState<number>(0);

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
      setActiveId(id);
      window.location.hash = `#${id}`;
    }
  };

  const handleScrollToFirstId = () => {
    const firstId = targetIds[isFirstId];
    handleScrollToId(firstId);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          window.location.hash = `#${entry.target.id}`;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    targetIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      targetIds.forEach((id) => {
        const target = document.getElementById(id);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [targetIds]);

  const scrollToNextId = () => {
    const nextIndex = (isFirstId + 1) % targetIds.length;
    setIsFirstId(nextIndex);
    handleScrollToId(targetIds[nextIndex]);
  };

  const scrollToPrevId = () => {
    const prevIndex = (isFirstId - 1 + targetIds.length) % targetIds.length;
    setIsFirstId(prevIndex);
    handleScrollToId(targetIds[prevIndex]);
  };

  // Əlavə edilmiş kod
  const handleScroll = () => {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    const sectionHeights = targetIds.map((id) => {
      const element = document.getElementById(id);
      return element ? element.clientHeight : 0;
    });

    let cumulativeHeight = 0;
    for (let i = 0; i < sectionHeights.length; i++) {
      cumulativeHeight += sectionHeights[i];
      if (yOffset < cumulativeHeight) {
        setActiveId(targetIds[i]);
        window.location.hash = `#${targetIds[i]}`;
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds]);

  return {
    activeId,
    isFirstId,
    handleScrollToId,
    handleScrollToFirstId,
    scrollToNextId,
    scrollToPrevId,
  };
};
