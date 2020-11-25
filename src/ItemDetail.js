import React, { useState, useEffect } from 'react';

function Item(match) {
    //console.log('match.params: ', match.match.params.id);

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState({});

    const fetchItems = async () => {
        const fetchItems = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`);
        const item = await fetchItems.json();
        //console.log(item);
        setItems(item);
        //console.log(items);
    }

    return (
        <div className="ItemDetail">
            {/* <h1>{items.data.item.name}</h1> */}
        </div>
    );
}

export default Item;
