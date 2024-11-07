import { ICountry, IGender, ISalutation, IState } from "@config/models";

export const salutation: ISalutation[] = [
  {
    label: "Mr",
    value: "Man",
  },
  {
    label: "Mrs",
    value: "Woman",
  },
];

export const gender: IGender[] = [
  {
    label: "Male",
    value: "Man",
  },
  {
    label: "Female",
    value: "Woman",
  },
];

export const country: ICountry[] = [
  {
    label: "USA",
    value: "USA",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "Mexico",
    value: "Mexico",
  },
  {
    label: "Uk",
    value: "Uk",
  },
  {
    label: "Turkey",
    value: "Turkey",
  },
  {
    label: "France",
    value: "France",
  },
  {
    label: "Italy",
    value: "Italy",
  },
  {
    label: "Azerbaijan",
    value: "Azerbaijan",
  },
];

export const state: IState[] = [
  {
    label: "Arkansas",
    value: "Arkansas",
  },
  {
    label: "Texas",
    value: "Texas",
  },
  {
    label: "California",
    value: "California",
  },
  {
    label: "Florida",
    value: "Florida",
  },
  {
    label: "other",
    value: "other",
  },
];
