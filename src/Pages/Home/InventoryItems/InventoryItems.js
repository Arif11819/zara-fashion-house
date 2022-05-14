import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    const allItems = items.slice(0, 4);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mx-auto'>Inventory Items</h1>
            <div>
                {
                    allItems.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >

                    </InventoryItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;