import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE: any = {
    showMenu: false,

    cartList: [],

    price: 0,
};



const GlobalReducer = createSlice({
    name: "global",
    initialState: INITIAL_STATE,
    reducers: {
        setMenu(state, action) {
            state.showMenu = action.payload;
        },

        addCartItem(state, action) {
            const { id, price } = action.payload;

            const existingItem = state.cartList.find((item: any) => item.id === id);

            if (!existingItem) {
                state.cartList.push({...action.payload, amount: 1, price: Number(price).toFixed(0)});
                state.price += parseInt(price);
            }

        },



        removeCartItem(state, action) {
            try {
                const { id, price, amount = 1 } = action.payload;
                const indexToRemove = state.cartList.findIndex((item: any) => item.id === id);

                if (indexToRemove !== -1) {
                    state.price -= price * state.cartList[indexToRemove].amount;
                    state.cartList.splice(indexToRemove, 1);

                    // Atualizar o carrinho no lado do servidor após a remoção do item
                }
            } catch (error) {
                console.error("Erro ao remover item do carrinho:", error);
            }
        },


        changeCartItemAmount(state, action) {
            const { id, type } = action.payload;

            const updatedCartList = state.cartList.map((item : any) => {
                if (item.id === id) {
                    const updatedItem = { ...item };

                    if (type === "add") {
                        updatedItem.amount += 1;
                        state.price += parseFloat(updatedItem.price);
                    } else if (updatedItem.amount > 1) {
                        updatedItem.amount -= 1;
                        state.price -= parseFloat(action.payload.price);
                    } else {
                        state.price -= parseFloat(action.payload.price);
                        return null;
                    }

                    return updatedItem;
                }

                return item;
            });

            state.cartList = updatedCartList.filter((item: any) => item !== null);
        },

    },
});


export default GlobalReducer.reducer;
export const {
    setMenu,
    addCartItem,
    removeCartItem,
    changeCartItemAmount
} = GlobalReducer.actions;
export const useGlobal = (state: any) => state.global;
