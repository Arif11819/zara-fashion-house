import React from 'react';
import { useForm } from "react-hook-form";

const AddNewInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-4 text-center mb-4 text-danger'>Add New Inventory</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quanatity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier")} />
                <input className='btn btn-danger' type="submit" value="Add Inventory" />
            </form>
        </div>
    );
};

export default AddNewInventory;