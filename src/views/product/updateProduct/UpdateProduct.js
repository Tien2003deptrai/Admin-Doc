import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CForm, CInputGroup, CFormInput, CButton } from '@coreui/react';
import { AuthUser } from 'src/services/AuthUser';
import { sendToast, sendToastError } from 'src/config/configToast';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateProduct = () => {
    const { http } = AuthUser();
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        imgURL: '',
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await http.get(`products/${id}`);
                const { data } = response;
                if (data.success) {
                    setProduct(data.data);
                } else {
                    sendToastError('Product not found.');
                    navigate('/404');
                }
            } catch (error) {
                console.error(error);
                sendToastError('Failed to fetch product.');
                navigate('/404');
            }
        };

        fetchProduct();
    }, [http, id, navigate]);

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
            const response = await http.put(`/products/${id}`, product);
            const { data } = response;
            if (data) {
                sendToast('Product updated successfully.');
                navigate('/product');
            } else {
                sendToastError('Failed to update product.');
            }
        } catch (error) {
            console.error(error);
            sendToastError('Failed to update product.');
            navigate('/404');
        }
    };

    return (
        <CCard>
            <CCardBody>
                <h3>Update product</h3>
                <Link to="/product">
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
                    <CButton type="submit" color="primary">Update</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default UpdateProduct;
