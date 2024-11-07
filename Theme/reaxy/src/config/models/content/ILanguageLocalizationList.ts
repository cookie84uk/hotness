export interface ILanguageLocalization {
  name: string;
  shortName: string;
  code: string;
}

export interface ILanguageLocalizationList {
  [key: string]: ILanguageLocalization;
}
