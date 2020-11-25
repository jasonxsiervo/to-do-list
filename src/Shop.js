import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const fortniteItems = await (await fetch('https://fortnite-api.theapinetwork.com/store/get')).json();
        //const data = await fortniteItems.json();
        //console.log(items);
        setItems(fortniteItems.data);
        //console.log(fortniteItems.data);
    };

    return (
        <div className="Shop">
            <p>Shop Page</p>
            {
                items.map(item => (
                    <h1 key={item.itemId}>
                        <Link to={`shop/${item.itemId}`}>
                            {item.item.name}
                        </Link>
                    </h1>
                ))
            }
        </div>
    );
}

export default Shop;
