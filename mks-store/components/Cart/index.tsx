import React from "react";
import {
    CartWrapper,
    CloseWrapper,
    ContentWrapper,
    CustomInputWrapper,
    FinishPurchase,
    HeaderWrapper,
    ItemWrapper,
    TotalWrapper
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeCartItemAmount, removeCartItem, setMenu, useGlobal } from "../../store/reducers/cart";

const Cart = () => {
    const {price } = useSelector(useGlobal);

    // Configurações da animação
    return (
        <CartWrapper>
            <Header />
            <Content />
            <TotalWrapper>
                <p>Total</p>
                <p>R$ {price || 0}</p>
            </TotalWrapper>
            <FinishPurchase>
                <p>Finalizar compra</p>
            </FinishPurchase>
        </CartWrapper>
    );
};


const Content = () => {
    const { cartList } = useSelector(useGlobal)
    return (
        <ContentWrapper>
            {cartList.map((item: any) => (
                <Item key={item.id} {...item} />
            ))}
        </ContentWrapper>
    )
}

interface Product {
    id: number;
    name: string;
    brand?: string;
    description: string;
    photo: string;
    price: string;
    amount: number;
    createdAt?: string;
    updatedAt?: string;
}

const Item = (props: Product) => {
    const { id, name, brand, description, photo, price, createdAt, updatedAt, amount } = props;
    const dispatch = useDispatch();
    const removeItem = () => {
        dispatch(removeCartItem({ id, name, brand, description, photo, price: parseInt(price).toFixed(0), createdAt, updatedAt }))
    }

    const changeItemAmount = (type: string) => {
        if (!type) return;
        dispatch(changeCartItemAmount({ id, name, brand, description, photo, price : parseInt(price).toFixed(0), createdAt, updatedAt, type: type }))
    }

    return (
        <ItemWrapper>
            <img src={photo} alt="item_carrinho" style={{ maxWidth: "3.125em", maxHeight: "3.75em" }} />
            <div className="name">
                <p>{name}</p>
            </div>
            <CustomInput callback={changeItemAmount} />
            <div className="price">
                R$ {amount * Number(price) }
            </div>
            <div>

            </div>
            <Close small={true} callback={removeItem} />

        </ItemWrapper>
    )
}

const CustomInput = ({ callback }: { callback: (arg: string) => void }) => {
    const [amount, setAmount] = React.useState(1);

    const handleDecrease = () => {
        callback("rem");
        setAmount(Math.max(1, amount - 1));
    };

    const handleIncrease = () => {
        callback("add");
        setAmount(amount + 1);
    };

    return (
        <CustomInputWrapper>
            <button onClick={handleDecrease} disabled={amount === 1}>-</button>
            <div className={"value"}>
                <p>{amount}</p>
            </div>
            <button onClick={handleIncrease}>+</button>
            <div className={"tooltip"}>
                <p>Qtd:</p>
            </div>
        </CustomInputWrapper>
    );
};

const Header = () => {
    const dispatch = useDispatch();
    const closeCart = () => {
        dispatch(setMenu(false))
    }

    return (
        <HeaderWrapper>
            <p>
                Carrinho <br /> de compras
            </p>
            <Close callback={closeCart} />
        </HeaderWrapper>
    )
}

interface CloseProps {
    small?: boolean;
    callback?: () => void;
}

const Close = (props: CloseProps) => {
    const { small, callback } = props;
    return (
        <CloseWrapper smaller={small} onClick={callback}>
            <button>
                X
            </button>
        </CloseWrapper>
    )
}

export default Cart;
