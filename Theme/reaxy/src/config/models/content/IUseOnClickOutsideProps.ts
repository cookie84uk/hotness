import { RefObject } from "react";

export interface IUseOnClickOutsideProps {
  ref: RefObject<HTMLElement> | null;
  handler: (event: Event) => void;
}
