import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from 'src/services/AuthUser';
import { sendToastError, sendToast } from 'src/config/configToast';

const user = () => {
  const { http } = AuthUser();
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  const fetchApiUser = async () => {
    try {
      const response = await http.get('/users');
      return response.data.data;
    } catch (error) {
      console.error(error);
      sendToastError('Failed to fetch user. Server error occurred.');
      navigate('/403');
      setFetchError(true);
      return [];
    }
  };

  useEffect(() => {
    fetchApiUser()
      .then(apiuser => {
        setUsers(apiuser);
      })
      .catch(err => {
        console.error(err);
        setFetchError(true);
      });
  }, []);

  return (
    <div className="container">
      <h2>Danh sách dự án</h2>
      <Link to={'/user/add'}>
        <button type="button" className="btn btn-warning mb-3">Thêm mới</button>
      </Link>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Roles</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={`user${index}`}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(', ')}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center">
                    <Link to={`/user/screen/${user._id}`} className="btn btn-primary mx-1">Xem</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default user;
