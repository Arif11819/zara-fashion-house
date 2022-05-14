import React from 'react';
import { useParams } from 'react-router-dom';

const Items = () => {
    const { itemsId } = useParams();
    return (
        <div>
            <h2>This is items: {itemsId}</h2>
        </div>
    );
};

export default Items;