import { useDispatch } from "react-redux";
import { WithReduxThunkDispatch } from "src/touchers/state-management/redux-toolkit/stores/WithReduxThunk/store";

const useAppDispatch = () => useDispatch<WithReduxThunkDispatch>();

export { useAppDispatch };
