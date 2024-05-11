import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sendToast, sendToastError } from 'src/config/configToast';
import { AuthUser } from 'src/services/AuthUser';

const UpdateEmployee = () => {
    const { http } = AuthUser();
    const { id } = useParams();

    const [employee, setEmployee] = useState({
        username: '',
        email: '',
        phoneNum: '',
        role: ''
    });
    const [roles, setRoles] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const fetchEmployee = async () => {
        try {
            const response = await http.get(`/v1/users/${id}`);
            setEmployee(response.data);
        } catch (error) {
            console.error(error);
            sendToastError('Failed to fetch employee.');
        }
    };



    useEffect(() => {
        fetchEmployee();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('employee', employee);
        if (employee.name !== '' && employee.email !== '' && employee.phone !== '' && employee.role !== '') {
            try {
                await http.put(`/v1/users/${id}`, employee);
                sendToast('Successfully updated employee.');
            } catch (error) {
                console.error('Error updating employee:', error.message);
                sendToastError('Failed to update employee.');
                navigate('/404');
            }
        } else {
            sendToastError('Please input employee.');
        }
    };

    return (
        <div className="container">
            <h2>Cập nhật thành viên</h2>
            <Link to="/employees">
                <button type="button" className="btn btn-secondary mb-3">Back to employees</button>
            </Link>
            <div className='ms-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" name="name" placeholder="Enter full name"
                            value={employee.username}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email"
                            value={employee.email}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNo" className="form-label">Phone No</label>
                        <input type="text" className="form-control" id="phoneNo" name="phone" placeholder="Enter phone number"
                            value={employee.phoneNum}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Select Role</label>
                        <select className="form-select" id="country" name="role"
                            value={employee.role}
                            onChange={handleInputChange}>
                            <option value="">Select Role</option>
                            {
                                roles.map((role, roleIndex) => (
                                    <option key={`${role}_${roleIndex}`} value={role.name}>{role.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mb-3'>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEmployee;
