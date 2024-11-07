// CustomComponent.js
import { motion } from "framer-motion";
import React from "react";
import { PageProps } from "../models/model";

interface AnimatePresenceProps extends PageProps {
  direction: "top" | "right" | "bottom" | "left" | "center";
  duration?: number;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({
  children,
  direction,
  duration = 0.5,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { opacity: 0, y: "-100%" };
      case "right":
        return { opacity: 0, x: "100%" };
      case "bottom":
        return { opacity: 0, y: "100%" };
      case "left":
        return { opacity: 0, x: "-100%" };
      case "center":
        return { opacity: 0, scale: 0 };
      default:
        return { opacity: 0, y: "-100%" };
    }
  };

  const pageVariants = {
    initial: getInitialPosition(),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
    exit: getInitialPosition(),
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};
