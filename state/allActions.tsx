import React from "react";
import { Action, AllActions, SetAllActions } from "../types/stateInterfaces";
import testActions from "./test/testActions";



export const allActions: AllActions = {
    test: testActions
}

export const callAction =  (dispatch: React.Dispatch<Action>) => {
    const actions: SetAllActions = {};
    for(let type in allActions){
        actions[type] = allActions[type];
        const acts = Object.entries(allActions[type])
        const newActions = acts.map(a=>{
            const func = typeof a[1] !== 'function' ? a[1] : a[1](dispatch)
            actions[type][a[0]]= func
        })
    }
    return actions
}