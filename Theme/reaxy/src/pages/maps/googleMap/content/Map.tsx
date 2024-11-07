import { useLayoutSize } from "@config/hooks";
import { IMapProps } from "@config/models";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import React from "react";

export function Map({ apiKey, options }: IMapProps) {
  // ** useRef
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  // ** useEffect
  useEffect(() => {
    const loadMap = () => {
      if (mapRef.current) {
        map.current = new google.maps.Map(mapRef.current, options);
      }
    };

    // ** javaScript
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", loadMap);

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey, options]);

  const { LAYOUT_SIZE } = useLayoutSize();
  const style = { width: "100%", height: LAYOUT_SIZE, borderRadius: "16px" };

  return <Box ref={mapRef} sx={style} />;
}
