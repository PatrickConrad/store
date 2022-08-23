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

export interface IOrders {
    orders: IOrder[]
}

export type IState = IUser | IAuth | ITest | IStore | IProduct | IProduct[] | ICart | IShipping | IAddress | IOrder | IOrders

export interface InitialState {
    loading: boolean,
    success: boolean,
    data: IState
}

export interface IPayload {
    data: IState
}

export interface Action {
    type: typeof types.testTypes.REQUEST_TEST | typeof types.testTypes.TEST_FAILURE | typeof types.testTypes.TEST_SUCCESS,
    payload: IPayload
}

export type StateActions = Action