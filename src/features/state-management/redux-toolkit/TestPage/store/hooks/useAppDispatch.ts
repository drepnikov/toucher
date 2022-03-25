import { useDispatch } from "react-redux";
import { TestPageDispatch } from "src/features/state-management/redux-toolkit/TestPage/store/store";

const useTestPageDispatch = () => useDispatch<TestPageDispatch>();

export { useTestPageDispatch };
