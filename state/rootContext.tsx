import React, {createContext, ReactNode, useCallback, useMemo, useReducer} from 'react';
import {combineReducer, allReducers} from './reducers';
import {callAction, actionTypes} from './actions';
import { InitailState, IState, ITest, StateActions } from './stateInterfaces';

const testData: ITest = {
    tester: false
}

const initialStates = {
    test: testData
}

const GlobalState = createContext<{
    state: IState,
    actions: React.Dispatch<StateActions>
}>({state: initialStates, actions: ()=> null});

interface Props {
    children: ReactNode
}

const ContextProvider = (props: Props) => {
    const {children} = props;
    const combined = combineReducer
    const reducer = useCallback(()=>{
        return combined(allReducers)
    }, [combined]);

    const [mainReducer, initialState] = reducer();

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const actions = callAction(dispatch, actionTypes);

    const contextValue = useMemo(()=>{
        console.log("global state", {state, actions})
        return {state, actions}
    }, [state, actions]);

    return (
        <GlobalState.Provider value={contextValue}>
            {children}
        </GlobalState.Provider>
    )
}

export {ContextProvider, GlobalState as ContextConsumer};