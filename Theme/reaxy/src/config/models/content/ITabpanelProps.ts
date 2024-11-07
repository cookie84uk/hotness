export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  export interface StyledTabProps {
    label: string;
  }

  export interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  