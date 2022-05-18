import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const handleAddNewInventory = () => {
        navigate('/addInventory');
    }

    const handleNavigateToItems = (id) => {
        navigate(`/items/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this?');
        if (proceed) {
            const url = `https://sleepy-everglades-51277.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = items.filter(item => item._id !== id);
                    setItems(remainingItems);
                })
        }
    }
    return (
        <div className='inventory-items'>
            <h1 className='text-center text-danger mb-4'>All Inventory Items</h1>
            {
                items.map(item => <div key={item._id}>
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
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>{item._id}</td>
                                <td className='text-center'>{item.name}</td>
                                <td className='text-center'><img className='picture' src={item.picture} alt="" /></td>
                                <td className='text-center'>${item.price}</td>
                                <td className='text-center'>{item.description}</td>
                                <td className='text-center'>{item.quantity}</td>
                                <td className='text-center'>{item.supplier}</td>
                                <td className='text-center'><button onClick={() => handleNavigateToItems(item._id)} className='update-btn'>Update</button></td>
                                <td className='text-center mx-auto'><button onClick={() => handleDelete(item._id)} className='delete-btn'>Detete</button></td>
                            </tr>
                        </tbody>
                    </Table>

                </div>)
            }
            <button onClick={handleAddNewInventory} className='btn btn-dark mx-auto d-block manage-inventory-btn'>Add New Item</button>
        </div>
    );
};

export default ManageItems;