import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendToast, sendToastError } from 'src/config/configToast';
import { AuthUser } from 'src/services/AuthUser';

const AddEmployee = () => {
    const { http } = AuthUser();

    const [employee, setEmployee] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        vacationDays: '',
        paidToDate: '',
        paidLastYear: '',
        payRate: '',
        payRateId: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await http.post(`/employee`);
            console.log('Response:', response);
            sendToast('Employee added successfully.');
            navigate('/employee');
            setEmployee({
                employeeId: '',
                firstName: '',
                lastName: '',
                vacationDays: '',
                paidToDate: '',
                paidLastYear: '',
                payRate: '',
                payRateId: ''
            });
        } catch (error) {
            console.error(error);
            sendToastError('Failed to add employee.');
            navigate('/404');
        }
    };


    return (
        <div className="container">
            <h2>Add New Employee</h2>
            <Link to="/employee">
                <button type="button" className="btn btn-secondary mb-3">Back to Employee List</button>
            </Link>
            <div className='ms-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="employeeId" className="form-label">Employee Id</label>
                        <input type="text" className="form-control" id="employeeId" name="employeeId" placeholder="Enter employee Id"
                            value={employee.employeeId}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter first name"
                            value={employee.firstName}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter last name"
                            value={employee.lastName}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="vacationDays" className="form-label">Vacation Days</label>
                        <input type="number" className="form-control" id="vacationDays" name="vacationDays" placeholder="Enter vacation days"
                            value={employee.vacationDays}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="paidToDate" className="form-label">Paid to Date</label>
                        <input type="text" className="form-control" id="paidToDate" name="paidToDate" placeholder="Enter paid to date"
                            value={employee.paidToDate}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="paidLastYear" className="form-label">Paid Last Year</label>
                        <input type="text" className="form-control" id="paidLastYear" name="paidLastYear" placeholder="Enter paid last year"
                            value={employee.paidLastYear}
                            onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="payRate" className="form-label">Paid Rate</label>
                        <input type="text" className="form-control" id="payRate" name="payRate" placeholder="Enter paid pay rate"
                            value={employee.payRate}
                            onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="payRateId" className="form-label">Pay Rate Id</label>
                        <input type="text" className="form-control" id="payRateId" name="payRateId" placeholder="Enter paid pay rate id"
                            value={employee.payRateId}
                            onChange={handleInputChange} />
                    </div>
                    <div className='mb-3'>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="reset" className="btn btn-secondary ms-2">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;
