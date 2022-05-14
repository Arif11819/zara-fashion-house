import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ item }) => {
    const { _id, name, picture, description, price, quantity, supplier } = item;
    const navigate = useNavigate();

    const handleNavigateToItems = () => {
        navigate('/items');
    }

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
                        <th className='text-center'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center'>{_id}</td>
                        <td className='text-center'>{name}</td>
                        <td className='text-center'><img className='picture' src={picture} alt="" /></td>
                        <td className='text-center'>${price}</td>
                        <td className='text-center'>{description}</td>
                        <td className='text-center'>{quantity}</td>
                        <td className='text-center'>{supplier}</td>
                        <td className='text-center'><button onClick={handleNavigateToItems} className='update-btn'>Update</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default InventoryItem;