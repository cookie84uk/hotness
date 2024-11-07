import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

interface ICopyText {
  copyText: string;
}

export const useCopyText = ({ copyText }: ICopyText) => {
  // ** language
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleCopyClick = () => {
    setIsClicked(true);
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = copyText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);

    toast.success(t("copyText", { ns: "general" }), {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { isClicked, handleCopyClick };
};
