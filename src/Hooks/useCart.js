import { useState, useEffect } from 'react';
import { getStoredCart } from '../FakeData/fakeData';
import useServices from './useServices';

const useCart = () => {
    const [cart, setCart] = useState([]);
    const { item } = useServices();

    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        fetch(`/data.json`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(keys)
            })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })


    }, []);

    return [cart, setCart];
}

export default useCart;