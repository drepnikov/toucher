import { TestPageRootState } from "src/features/state-management/redux-toolkit/TestPage/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<TestPageRootState> = useSelector;

export { useAppSelector };
