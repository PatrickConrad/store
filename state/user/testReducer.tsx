import testTypes from "./testTypes";
import { initState } from "../../constants";
import { Action, InitialState, ITest, Reducer } from "../../types/stateInterfaces";

const testData: ITest = {
    testing: false
}

export const testState: InitialState = {
    ...initState,
    data: testData
}

const testReducer = (state:InitialState=testState, action: Action) => {
    switch(action.type){
        case testTypes.REQUEST_TEST: {
            return {
                loading: true,
                message: '',
                success: true,
                data: {
                    testing: false
                },
            }
        }
        case testTypes.TEST_FAILURE: {
            return {
                loading: true,
                message: '',
                success: true,
                data: {
                    testing: false
                }
            }
        }
        case testTypes.TEST_SUCCESS: {
            return {
                loading: true,
                message: '',
                success: true,
                data: {
                    testing: false
                }
            }
        }
        default: {
            return state
        }
    }
}

export default testReducer