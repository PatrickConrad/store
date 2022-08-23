import React from "react";
import test from "./test/testActions";

type Action = (dispatch: React.Dispatch<any>)=> void
interface ActionCategory {
    [key: string]: Actions
}
interface Actions {
    [key: string]: Action | ActionCategory
}

interface AllActions {
    [key: string]: Actions 
}

export const actionTypes: AllActions = {
    test
}

export const callAction = (dispatch: React.Dispatch<any>,  allActions: AllActions) => {
    const types = {};
    for(let type in allActions){
        const actions: Actions = {};
        Object.entries(allActions[type]).map(([prop, val]) => {
            if(typeof val !== 'function') { 
                actions[prop] = val;
                for(let a in allActions[type]){
                    const apps: Actions = {};
                    Object.entries(allActions[type][a]).map(([p, v])=>{
                        apps[p] = v(dispatch)
                    })
                    actions[a] = {...apps}
                }
            }
            else{
                actions[prop] = val(dispatch);
            }
        })
        types[type] = actions
    }
    return types
    
}
