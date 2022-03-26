import { TestPageRootState } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<TestPageRootState> = useSelector;

export { useAppSelector };
