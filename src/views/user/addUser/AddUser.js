import React, { useState } from 'react';
import { CCard, CCardBody, CForm, CFormInput, CInputGroup, CInputGroupText, CButton } from '@coreui/react';
import { AuthUser } from 'src/services/AuthUser';
import { sendToast, sendToastError } from 'src/config/configToast';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
    const { http } = AuthUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        roles: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await http.post('/users', formData);
            navigate('/user');
            sendToast('User added successfully.');
        } catch (error) {
            sendToastError('Failed to add user.');
            console.error(error);
        }
    };

    return (
        <CCard>
            <CCardBody>
                <h4 className="card-title mb-4">Add User</h4>
                <Link to="/user">
                    <button type="button" className="btn btn-secondary mb-3">Back to Users</button>
                </Link>
                <CForm onSubmit={handleSubmit}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Username</CInputGroupText>
                        <CFormInput
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Email</CInputGroupText>
                        <CFormInput
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Password</CInputGroupText>
                        <CFormInput
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Roles</CInputGroupText>
                        <CFormInput
                            type="text"
                            placeholder="Enter roles"
                            name="roles"
                            value={Array.isArray(formData.roles) ? formData.roles.join(',') : formData.roles}
                            onChange={handleChange}
                        />
                    </CInputGroup>
                    <CButton type="submit" color="primary">Add User</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default AddUser;
