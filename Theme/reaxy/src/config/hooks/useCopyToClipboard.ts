import React, { useRef, useCallback } from "react";

type UseCopyToClipboardHook = {
  copyText: string;
  copySuccess: boolean;
  copyToClipboard: () => void;
  textRef: React.RefObject<HTMLDivElement>; // textRef'i RefObject kimi təyin et
};

export const useCopyToClipboard = (
  textToCopy: string
): UseCopyToClipboardHook => {
  const textRef = useRef<HTMLDivElement>(null);
  const copySuccessRef = useRef<boolean>(false);

  const copyToClipboard = useCallback(() => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);

      try {
        document.execCommand("copy");
        copySuccessRef.current = true;
      } catch (err) {
        console.error("Unable to copy text to clipboard:", err);
        copySuccessRef.current = false;
      }

      window.getSelection()?.removeAllRanges();
    }
  }, []);

  return {
    textRef, // textRef'i RefObject kimi təyin et
    copyText: textToCopy,
    copySuccess: copySuccessRef.current,
    copyToClipboard,
  };
};
