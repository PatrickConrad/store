import React from "react";
import testTypes from "./testTypes";

const testActions = {
    getApiData: (dispatch: React.Dispatch<any>) => async () => {
        try {

        }
        catch(err: any){
            dispatch({
                type: testTypes.API_TEST_FAILURE,
                payload: {
                    success: false,
                    error: true,
                    message: err.message?err.message:"There was a problem with your request"
                }
            })
        }
    }
}

