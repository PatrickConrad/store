import { InitailState, IState, ITest } from "./stateInterfaces";
import testReducer, {TestReducer} from "./test/testReducer";

interface Reducers {
    test: TestReducer,
}

const testData: ITest = {
    tester: false
}

const initialStates = {
    test: testData
}

export const allReducers = {
    test: testReducer
}

const initailState: InitailState = {
    loading: false,
    data: {},
    errorMessage: '',
    success: true
}

export const combineReducer = (reducers: IState) => {
    const initialState: IState = initialStates;
    for(const [key, value] of Object.entries(reducers)){
        if(typeof value === 'function'){
            initialState[key] = value(undefined, {type: 'PLACEHOLDER_ACTION'});
        }
        else{
            console.log("Not a function")
        }
    }
    const mainReducer = (state: any, action: ()=>void) => {
        let hasStateChanged = false;
        const updatedStateByReducers = {};
        for(const reducer in reducers){
            if(reducers.hasOwnProperty(reducer)){
                const currentStateByKey = state[reducer];
                const currentReducer = reducers[reducer];
                const returnedStateByReducer = currentReducer(currentStateByKey, action);
                const areStateByKeyEqual = returnedStateByReducer !== currentStateByKey;
                hasStateChanged = areStateByKeyEqual ? areStateByKeyEqual : hasStateChanged;
                updatedStateByReducers[reducer] = returnedStateByReducer;
            }
        }
        const change = hasStateChanged ? updatedStateByReducers : state;
        return change
    };
    return [mainReducer, initialState]
}