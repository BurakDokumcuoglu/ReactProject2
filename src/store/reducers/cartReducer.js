import { cartItems } from "../initialValues/cartItems";
import {ADD_TO_CART} from "../actions/cartActions "


const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state = initialState, {type, payload} ) {
    switch (type) {
        case ADD_TO_CART: 
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity ++;
                return { ...state }  // ürünün quantity'si 1 arttığında sepetin refi değişmez.sepetin refini değiştirmek için ... ile döndürürüz
                                     // yeni bir cartItems objesi geri dönüyoruz ve render işlemi de bu sayede yapılmış oluyor
            } else {
                return {  
                    ...state,
                    cartItems: {...state.cartItems,payload} // ...kullanarak ref yine değişmiş oluyor. cartitems'a payload ekleniyor
                }
            }    


            
    
        default:
            return;
    }
}