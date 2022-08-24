import { ReducerWithoutAction } from "react";
import { Action, AppState, InitialState, IState, ITest, Reducers } from "../types/stateInterfaces";
import testReducer, {testState} from "./test/testReducer";



const initialStates: IState = {
    test: testState
}

export const combineReducer = (state: IState, action: Action) => {
    return {
        test: testReducer(state.test, action)
    }
}