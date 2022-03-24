import { RootState } from "src/features/state-management/redux-toolkit/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
