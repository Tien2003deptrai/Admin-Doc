import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from 'src/services/AuthUser';
import { sendToastError } from 'src/config/configToast';

const Employee = () => {
  const { http } = AuthUser();
  const [employees, setEmployee] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  const fetchApiEmployee = async () => {
    try {
      const response = await http.get('/employee');
      return response.data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 500 && error.response.data.message === "Access Denied") {
        sendToastError('Failed to fetch role. Server error occurred.');
        navigate('/403');
        setFetchError(true);
      } else {
        sendToastError('Failed to fetch role.');
      }
      return [];
    }
  };

  useEffect(() => {
    fetchApiEmployee()
      .then(ApiEmployee => {
        setEmployee(ApiEmployee);
        console.log(ApiEmployee);
      })
      .catch(err => {
        console.error(err)
        setFetchError(true);
      });
  }, []);

  return (
    <div className="container">
      <h2>Danh sách thành viên</h2>
      <Link to={'/employee/add'}>
        <button type="button" className="btn btn-warning mb-3">Thêm</button>
      </Link>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">vacationDays</th>
              <th scope="col">paidToDate</th>
              <th scope="col">paidLastYear</th>
              <th scope="col">payRate</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={`employee${index}`}>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.vacationDays}</td>
                <td>{employee.paidToDate}</td>
                <td>{employee.paidLastYear}</td>
                <td>{employee.payRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
