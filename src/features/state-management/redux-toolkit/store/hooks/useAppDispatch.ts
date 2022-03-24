import { useDispatch } from "react-redux";
import { AppDispatch } from "src/features/state-management/redux-toolkit/store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
