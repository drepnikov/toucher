import { TypedUseSelectorHook, useSelector } from "react-redux";
import { OnlyLocalRootState } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/store";

const useAppSelector: TypedUseSelectorHook<OnlyLocalRootState> = useSelector;

export { useAppSelector };
