import { WithReduxThunkRootState } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithReduxThunk/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<WithReduxThunkRootState> =
    useSelector;

export { useAppSelector };
