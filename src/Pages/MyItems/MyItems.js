import React from 'react';
import { useParams } from 'react-router-dom';
import useAddItemsDetail from '../../hooks/useAddItemsDetail';

const MyItems = () => {
    const { itemsId } = useParams();
    const [items] = useAddItemsDetail(itemsId);
    return (
        <div>
            <h2>My Items: {items.name}</h2>
        </div>
    );
};

export default MyItems;