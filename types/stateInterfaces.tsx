import {types} from '../state/allTypes';

export interface ITest {
    testing: boolean
}

export interface IAuth {
    isAuth: boolean
}

export interface IUser {
    id: string,
    username: string
}

export interface IProductImages {
    mainImage: string,
    productImage1?: string,
    productImage2?: string,
    productImage3?: string,
    productImage4?: string,
    productImage5?: string,
    productImage6?: string,
    productImage7?: string,
    productImage8?: string,
    productImage9?: string,
    productImage10?: string
}

export interface IDimensions {
    height: number,
    weight: number,
    width: number
}

export interface IDetails {
    wattage?: number,
    weight: number,
    dimensions: IDimensions
}

export interface IProduct {
    id: string,
    brand: string,
    name: string,
    price: number,
    images: IProductImages,
    description: string,
    details?: IDetails

}

export interface IStore {
    products?: IProduct[],
    product?: IProduct
}

export interface ICart {
    products: IProduct[]
}

export interface IAddress {
    streetAdress: string,
    city: string,
    state: string,
    zipCode: number,
    apartment: string
}

export interface IShipping {
    shippingAddress: IAddress,
    shippingSpeed: 'standard' | 'expedited'
}

export interface IOrder {
    products: IProduct[],
    shipping: IShipping,
    address: IAddress
}

export type IState = {
    // user: IUser,
    // auth: IAuth,
    test: InitialState,
    // store: IStore,
    // product: IProduct,
    // products: IProduct[],
    // cart: ICart,
    // order: IOrder,
    // orders: IOrder[]
}

export interface InitialState {
    loading: boolean,
    success: boolean,
    data: IUser | IAuth | ITest | IStore | IProduct | IProduct[] | ICart | IShipping | IAddress | IOrder | IOrder[],
    message: string
}

export interface IPayload {
    data: IUser | IAuth | ITest | IStore | IProduct | IProduct[] | ICart | IShipping | IAddress | IOrder | IOrder[],
}

export interface Action {
    type: string,
    payload: IPayload
}


export interface AllActions {
    [key: string]: Actions
}

export interface Actions {
        [key: string]: (dispatch: React.Dispatch<Action>)=>()=>Promise<void>
}

export interface SetAllActions {
    [key: string]: {
        [key: string]: SetAction
    } | Actions
}

export type SetAction = ()=>Promise<void>

export interface StateActions {
    [key: string]: {
        [key: string]: SetAction 
    } | Actions
}

export type Reducer = (state: InitialState, action?: Action ) => InitialState

export interface Reducers {
    [key: string]: Reducer
}

export interface AppState {
    [key: string]: InitialState
}