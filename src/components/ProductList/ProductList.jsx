import { useCallback, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./productList.css";

const tg = window.Telegram.WebApp;

const products = [
    {id: 1, title: "Jeans", price: 1400, description: "Blue, skinny"},
    {id: 2, title: "Anorak", price: 5000, description: "Yellow, long, warm"},
    {id: 3, title: "Jacket", price: 2800, description: "Green, short, warm"},
    {id: 4, title: "Blazer", price: 3200, description: "Red, fashion"},
    {id: 5, title: "Trousers", price: 1200, description: "Black, straight"},
    {id: 6, title: "Shirt", price: 800, description: "Orange, funny"},
    {id: 7, title: "Cap", price: 600, description: "Dark Blue, with diamonds"},
    {id: 8, title: "Socks", price: 300, description: "Multicolor, woolen"},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([]);

    const queryId = tg.initDataUnsafe?.query_id;

    const onSendData = useCallback(() => {
        const data = {
            queryId,
            products: addedItems,
            totalPrice: getTotalPrice(addedItems)
        };
        fetch("http://localhost:8000/web-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
    }, [addedItems, queryId])

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData)
        return () => {
            tg.offEvent("mainButtonClicked", onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setText(`Buy ${getTotalPrice(newItems)}`)
        }
    }

    return (
        <div>
            <div className={"list"}>
                {products.map((item) => (
                    <ProductItem product={item}
                                onAdd={onAdd}
                                className={"item"}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

