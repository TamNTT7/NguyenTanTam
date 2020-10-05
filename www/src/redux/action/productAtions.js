import * as types from "./../constants/actionType"

export const addCart = (sanPham)=>{
    return{
        type: types.CART_ADD_ITEM,
        payload: sanPham
    }
}

export const removeCart = (sanPham)=>{
    return{
        type: types.CART_REMOVE_ITEM,
        payload: sanPham
    }
}



