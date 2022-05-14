import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Items.css';

const Items = () => {
    const { itemsId } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='inventory-items'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='text-center'>Id</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Picture</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Description</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Supplier</th>
                        <th className='text-center'>Delivered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'>{items._id}</td>
                        <td className='text-center'>{items.name}</td>
                        <td className='text-center'><img className='picture' src={items.picture} alt="" /></td>
                        <td className='text-center'>${items.price}</td>
                        <td className='text-center'>{items.description}</td>
                        <td className='text-center'>{items.quantity}</td>
                        <td className='text-center'>{items.supplier}</td>
                        <td className='text-center'><button className='delivered-btn'>Delivered</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Items;