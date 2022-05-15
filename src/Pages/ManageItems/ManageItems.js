import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from '../Home/InventoryItem/InventoryItem';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleAddNewInventory = () => {
        navigate('/addInventory');
    }

    return (
        <div>
            <h1 className='text-center text-danger mt-4 mx-auto'>All Inventory Items</h1>
            <div>
                {
                    items.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >

                    </InventoryItem>)
                }
                <button onClick={handleAddNewInventory} className='btn btn-dark manage-inventory-btn'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageItems;