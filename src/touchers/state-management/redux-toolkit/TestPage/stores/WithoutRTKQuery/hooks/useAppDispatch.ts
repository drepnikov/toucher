import { useDispatch } from "react-redux";
import { TestPageDispatch } from "src/touchers/state-management/redux-toolkit/TestPage/stores/WithoutRTKQuery/store";

const useTestPageDispatch = () => useDispatch<TestPageDispatch>();

export { useTestPageDispatch };
