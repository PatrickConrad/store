import testTypes from "./testTypes";

const testReducer = (state=initailState, action: Action) => {
    switch(action.type){
        case testTypes.REQUEST_API_TEST: {
            return {
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                tested: false
            }
        }
        case testTypes.REQUEST_API_TEST: {
            return {
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                tested: false
            }
        }
        case testTypes.API_TEST_SUCCESS: {
            return {
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                tested: false
            }
        }
        case testTypes.API_TEST_FAILURE: {
            return {
                loading: true,
                errorMessage: '',
                success: true,
                data: {},
                tested: false
            }
        }
        default: {
            return state
        }
    }
}

export default testReducer