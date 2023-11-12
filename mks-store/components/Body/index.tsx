import React from "react";
import { BodyWrapper, ContentWrapper, ItemWrapper } from "./styled";
import {useQuery} from "react-query";
import {useDispatch} from "react-redux";
import {addCartItem} from "../../store/reducers/cart";

const fetchData = async () => {
    const res = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=40&sortBy=name&orderBy=ASC");
    return res.json();
}

const Body = () => {
    return (
    <BodyWrapper>
        <Content/>
    </BodyWrapper>
    )
}

const Content = () => {
    const { data, isLoading, isError } = useQuery("products", fetchData);

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>Error</p>


    return (
        <ContentWrapper>
            {data.products.map((item: Product) => (
                <Item key={item.id} {...item}/>
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
    createdAt?: string;
    updatedAt?: string;
}
const Item = (props: Product) => {
    const { id, name, brand, description, photo, price, createdAt, updatedAt } = props;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch((addCartItem({id, name, brand, description, photo, price: parseInt(price).toFixed(0), createdAt, updatedAt})));
    }




    return (
        <ItemWrapper>
            <img style={{marginTop: "0.8em"}} src={photo} alt="Logo" />
            <section className="itemDetails">
                <div className="title">
                    <p>{name}</p>
                </div>
                <div className="price">
                    <p>
                        R${Number(price).toFixed(0)}
                    </p>
                </div>
            </section>
            <section className="itemDescription">
                <p>
                    {description}
                </p>
            </section>
            <div className="buy" onClick={handleAddToCart}>
            <svg style={{width: "0.875em", height: "1em", marginRight: "1em"}} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>
                Comprar
            </p>

            </div>
        </ItemWrapper>
    )
}

export default Body;
