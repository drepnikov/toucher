import { useDispatch } from "react-redux";
import { OnlyLocalDispatch } from "src/touchers/state-management/redux-toolkit/stores/OnlyLocal/store";

const useAppDispatch = () => useDispatch<OnlyLocalDispatch>();

export { useAppDispatch };
