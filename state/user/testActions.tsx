import React from "react";
import { Action } from "../../types/stateInterfaces";
import testTypes from "./testTypes";

const testActions = {
    getApiData: (dispatch: React.Dispatch<Action>) => async () => {
        try {

        }
        catch(err: any){
            dispatch({
                type: testTypes.TEST_FAILURE,
                payload: {
                    data: {
                        testing: false
                    }
                }
            })
        }
    }
}

export default testActions
