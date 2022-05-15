import React, { useEffect, useState } from 'react';
import InventoryItem from '../Home/InventoryItem/InventoryItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1 className='text-center mx-auto'>All Inventory Items</h1>
            <div>
                {
                    items.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >

                    </InventoryItem>)
                }
                <button className='btn btn-dark manage-inventory-btn'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageItems;