import GlobalReducer, { setMenu, addCartItem, removeCartItem, changeCartItemAmount } from '../store/reducers/cart';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const INITIAL_STATE = {
    showMenu: false,
    cartList: [],
    price: 0,
};

// Testes para o reducer
describe('GlobalReducer', () => {
    it('deve definir o menu corretamente', () => {
        const nextState = GlobalReducer(undefined, setMenu(true));
        expect(nextState.showMenu).toBe(true);
    });

    it('deve adicionar um item ao carrinho corretamente', () => {
        const initialState = {
            showMenu: false,
            cartList: [],
            price: 0,
        };

        const action = {
            payload: { id: 1, price: '10.00' },
        };

        const nextState = GlobalReducer(initialState, addCartItem(action.payload));
        expect(nextState.cartList.length).toBe(1);
        expect(nextState.cartList[0].id).toBe(1);
        expect(nextState.price).toBe(10);
    });

    it('deve remover um item do carrinho corretamente', () => {
        const initialState = {
            showMenu: false,
            cartList: [{ id: 1, amount: 1, price: '10.00' }],
            price: 10,
        };

        const action = {
            payload: { id: 1, price: '10.00', amount: 1 },
        };

        const nextState = GlobalReducer(initialState, removeCartItem(action.payload));
        expect(nextState.cartList.length).toBe(0);
        expect(nextState.price).toBe(0);
    });

    it('deve alterar a quantidade do item no carrinho corretamente', () => {
        const initialState = {
            showMenu: false,
            cartList: [{ id: 1, amount: 2, price: '10.00' }],
            price: 20,
        };

        const action = {
            payload: { id: 1, type: 'subtract', price: '10.00' },
        };

        const nextState = GlobalReducer(initialState, changeCartItemAmount(action.payload));
        expect(nextState.cartList[0].amount).toBe(1);
        expect(nextState.price).toBe(10);
    });

    it('deve lidar com o cenário complexo 1', () => {
        const store = mockStore({
          global: { ...INITIAL_STATE, cartList: [{ id: 1, price: 10, amount: 2 }] },
        });
        const sequenciaAcoesComplexas = [
          addCartItem({ id: 2, price: 20 }),
          setMenu(true),
          changeCartItemAmount({ id: 1, type: 'subtract', price: 10 }),
          addCartItem({ id: 3, price: 15 }),
        ];
        sequenciaAcoesComplexas.forEach(action => store.dispatch(action));
        const actions = store.getActions();
        expect(actions).toEqual([
          { type: 'global/addCartItem', payload: { id: 2, price: 20 } },
          { type: 'global/setMenu', payload: true },
          { type: 'global/changeCartItemAmount', payload: { id: 1, type: 'subtract', price: 10 } },
          { type: 'global/addCartItem', payload: { id: 3, price: 15 } },
        ]);
    });

    it('deve lidar com o cenário complexo 2', () => {
        const store = mockStore({
            global: { ...INITIAL_STATE, cartList: [{ id: 1, price: 10, amount: 2 }] },
        });
        const sequenciaAcoesComplexas = [
            addCartItem({ id: 2, price: 15 }),
            setMenu(false),
            changeCartItemAmount({ id: 1, type: 'add', price: 10 }),
            removeCartItem({ id: 2, price: 15, amount: 1 }),
        ];

        // Despacha a sequência de ações complexas
        sequenciaAcoesComplexas.forEach(action => store.dispatch(action));

        // Obtém as ações despachadas durante o teste
        const actions = store.getActions();

        // Assert que as ações corretas foram despachadas
        expect(actions).toEqual([
            { type: 'global/addCartItem', payload: { id: 2, price: 15 } },
            { type: 'global/setMenu', payload: false },
            { type: 'global/changeCartItemAmount', payload: { id: 1, type: 'add', price: 10 } },
            { type: 'global/removeCartItem', payload: { id: 2, price: 15, amount: 1 } },
        ]);
    });
});
