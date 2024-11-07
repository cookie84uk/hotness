import { ISlidesData } from "@config/models";
import { useTranslation } from "react-i18next";

const getSlidesData = (): ISlidesData[] => {
  const { t } = useTranslation("dashboard");
  return [
    {
      title: t("charts.product"),
      conversionRate: t("carousel.conversionRate.product"),
      rating: 37,
      statistics: [
        {
          value: "28.5%",
          label: t("carousel.statistics.daily"),
        },
        {
          value: "21.5%",
          label: t("carousel.statistics.weekly"),
        },
        {
          value: "22%",
          label: t("carousel.statistics.monthly"),
        },
        {
          value: "14.5%",
          label: t("carousel.statistics.yearly"),
        },
      ],
    },
    {
      title: t("charts.refunds"),
      conversionRate: t("carousel.conversionRate.refunds"),
      rating: -9,
      statistics: [
        {
          value: "28.5%",
          label: t("carousel.statistics.daily"),
        },
        {
          value: "61.5%",
          label: t("carousel.statistics.weekly"),
        },
        {
          value: "65.5%",
          label: t("carousel.statistics.monthly"),
        },
        {
          value: "54%",
          label: t("carousel.statistics.yearly"),
        },
      ],
    },
    {
      title: t("charts.total"),
      conversionRate: t("carousel.conversionRate.total"),
      rating: 15,
      statistics: [
        {
          value: "61%",
          label: t("carousel.statistics.daily"),
        },
        {
          value: "44.5%",
          label: t("carousel.statistics.weekly"),
        },
        {
          value: "37.5%",
          label: t("carousel.statistics.monthly"),
        },
        {
          value: "71.5%",
          label: t("carousel.statistics.yearly"),
        },
      ],
    },
    {
      title: t("charts.customers"),
      conversionRate: t("carousel.conversionRate.customers", {
        ns: "dashboard",
      }),
      rating: 12,
      statistics: [
        {
          value: "32.5%",
          label: t("carousel.statistics.daily"),
        },
        {
          value: "18%",
          label: t("carousel.statistics.weekly"),
        },
        {
          value: "8.5%",
          label: t("carousel.statistics.monthly"),
        },
        {
          value: "51%",
          label: t("carousel.statistics.yearly"),
        },
      ],
    },
  ];
};

export default getSlidesData;
