import { Box } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { nameSpaces } from "@config/libs/i18n";
import { useEffect, useRef } from "react";
import { MuiCard } from "@config/components";
import { CustomClock } from "@config/components";
import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from "@config/assets";

export const Calendar = () => {
  // ** prev next
  const prev = useRef<HTMLSpanElement>(null);
  const next = useRef<HTMLSpanElement>(null);

  // ** date
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

  // ** language
  const { t } = useTranslation(nameSpaces);

  const months = Array.from({ length: 12 }, (_, index) =>
    t(`calendar.month.${index + 1}`, { ns: "dashboard" })
  );

  // ** render
  const renderCalendar = () => {
    const daysTag = document.querySelector(".days") as HTMLUListElement,
      currentDate = document.querySelector(
        ".current-date"
      ) as HTMLParagraphElement;
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  };

  // ** useEffect
  useEffect(() => {
    renderCalendar();
    prev.current?.addEventListener("click", changeMonth);
    next.current?.addEventListener("click", changeMonth);

    return () => {
      prev.current?.removeEventListener("click", changeMonth);
      next.current?.removeEventListener("click", changeMonth);
    };
  }, [currMonth, t]);

  // ** change method
  const changeMonth = (e: Event) => {
    const target = e.target as HTMLSpanElement;
    // .log(target.id);
    currMonth = target.id === "prev" ? currMonth - 1 : currMonth + 1;
    // console.log("prev", currMonth);
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  };

  return (
    <MuiCard title={t("calendar.title", { ns: "dashboard" })}>
      <CustomClock />
      <Box className="calender_wrap">
        <header>
          <Box component={"p"} className="current-date"></Box>
          <Box className="icons">
            <Box
              component={"span"}
              id="prev"
              ref={prev}
              className="material-symbols-rounded"
            >
              <ArrowBackIosNewIcon />
            </Box>
            <Box
              component={"span"}
              id="next"
              ref={next}
              className="material-symbols-rounded"
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </header>
        <Box className="calendar">
          <ul className="weeks">
            <li>{t("calendar.week.sun", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.mon", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.tue", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.wed", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.thu", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.fri", { ns: "dashboard" })}</li>
            <li>{t("calendar.week.sat", { ns: "dashboard" })}</li>
          </ul>
          <ul className="days"></ul>
        </Box>
      </Box>
    </MuiCard>
  );
};
