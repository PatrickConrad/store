import React, {createContext, ReactNode, useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import {combineReducer} from './reducers';
import {callAction, allActions} from './allActions';
import {testState} from './test/testReducer'
import { IState, SetAllActions, StateActions } from '../types/stateInterfaces';

const initialState: IState = {
    // user: IUser,
    // auth: IAuth,
    test: testState,
    // store: IStore,
    // product: IProduct,
    // products: IProduct[],
    // cart: ICart,
    // order: IOrder,
    // orders: IOrder[]
}

const GlobalState = createContext<{
    state: IState,
    actions: StateActions
}>({state: initialState, actions: allActions});

interface Props {
    children: ReactNode
}

const ContextProvider = (props: Props) => {
    const {children} = props;
    
    const [appState, setAppState] = useState<IState>(initialState)

    const [state, dispatch] = useReducer(combineReducer, initialState);

    const actions = callAction(dispatch);

    useEffect(()=>{
        state !== appState ? setAppState(state):state;
    }, [state]);

    return (
        <GlobalState.Provider value={{state: appState, actions}}>
            {children}
        </GlobalState.Provider>
    )
}

export {ContextProvider, GlobalState as ContextConsumer};