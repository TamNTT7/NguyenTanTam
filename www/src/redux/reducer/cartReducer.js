import * as types from "../constants/actionType"


const initialState = {
    items: [],
  };
export const CartReducer = (state=initialState,action)=>{
    let newState = undefined;
    switch (action.type) {
        case types.CART_ADD_ITEM:
            newState = { ...state };
            newState.items[`${action.payload.id}_${action.payload.ten}`] =
            action.payload;
        return newState;
        
        default:
            return{...state};
    }
}