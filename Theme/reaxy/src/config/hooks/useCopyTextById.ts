import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type UseCopyTextByIdHook = {
  copySuccess: boolean;
  copyTextById: (id: string) => void;
};

export const useCopyTextById = (): UseCopyTextByIdHook => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleCopySuccess = () => {
      if (toast.isActive("copyToast")) {
        return;
      }

      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 500);
    };

    document.addEventListener("copy", handleCopySuccess);

    return () => {
      document.removeEventListener("copy", handleCopySuccess);
    };
  }, []);

  const copyTextById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const range = document.createRange();
      range.selectNode(element);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
      }
    }
  };

  return {
    copySuccess,
    copyTextById,
  };
};
