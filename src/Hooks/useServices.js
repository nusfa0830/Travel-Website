import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const useServices = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    // using fakedata by hosting it
    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);

    // use map for set single data
    useEffect(() => {
        items.map(item => {
            if (item.key === parseInt(Number)) {
                console.log(item)
                setItem(item);
            }
        })
    }, [items])


    return { item, items }

};

export default useServices;