import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@config/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
