import React from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
    const picture = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhzJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
    return (
        <div className='product-management-section'>
            <div className='product-management-pic'>
                <img src={picture} alt="" />
            </div>
            <div className='product-management-list'>
                <h1><span>P</span>roduct Management</h1>
                <ul>
                    <li><h4>List Product</h4></li>
                    <li><h4>Add a New Product</h4></li>
                    <li><h4>Product Variations</h4></li>
                    <li><h4>Selling Price Group</h4></li>
                    <li><h4>Product Units</h4></li>
                    <li><h4>Product Brand List</h4></li>
                    <li><h4>Add Product Brands</h4></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductManagement;