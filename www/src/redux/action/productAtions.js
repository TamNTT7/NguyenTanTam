import * as types from "./../constants/actionType"

export const addCart = (sanPham, soLuong)=>{
    return{
        type: types.CART_ADD_ITEM,
        payload: sanPham, soLuong
    }
}

export const removeCart = (sanPham, soLuong)=>{
    return{
        type: types.CART_REMOVE_ITEM,
        payload: sanPham,soLuong
    }
}

export const updateCart = (sanPham, soLuong)=>{
    return{
        type: types.CART_UPDATE_ITEM,
        payload: sanPham,soLuong
    }
}



