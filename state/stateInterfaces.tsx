import { types } from "./types";

export interface Action {
    type: string;
    payload: Payload;
}

export interface Payload {
    data: ITest
}

export interface IState {
    [key: string]: ITest
}
export interface InitailState {
    loading: boolean;
    data: {} | ITest;
    errorMessage: string;
    success: boolean;
}

export interface ITest{
    tester: boolean;
}

export type TestActions = Action;
export type StateActions = TestActions