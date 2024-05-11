import React, { useState } from 'react';
import { CCard, CCardBody, CForm, CInputGroup, CFormInput, CButton } from '@coreui/react';
import { AuthUser } from 'src/services/AuthUser';
import { sendToast, sendToastError } from 'src/config/configToast';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { http } = AuthUser();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        imgURL: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await http.post('/products', product);
            const { data } = response;
            if (data.success) {
                sendToast('Product added successfully.');
                navigate('/product');
            } else {
                sendToastError('Failed to add product.');
            }
        } catch (error) {
            console.error(error);
            sendToastError('Failed to add product.');
            navigate('/404');
        }
    };

    return (
        <CCard>
            <CCardBody>
                <h3>Add product</h3>
                <Link to="/products">
                    <button type="button" className="btn btn-secondary mb-3">Back to products</button>
                </Link>
                <CForm onSubmit={handleSubmit}>
                    <CInputGroup className='mb-3'>
                        <CFormInput
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className='mb-3'>
                        <CFormInput
                            type="text"
                            placeholder="Category"
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className='mb-3'>
                        <CFormInput
                            type="number"
                            placeholder="Price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className='mb-3'>
                        <CFormInput
                            type="text"
                            placeholder="Image URL"
                            name="imgURL"
                            value={product.imgURL}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CButton type="submit" color="primary">Add</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default AddProduct;
