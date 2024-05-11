import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CButton } from '@coreui/react';
import { AuthUser } from 'src/services/AuthUser';
import { Link, useParams } from 'react-router-dom';

const ScreenUser = () => {
    const [screenUser, setScreenUser] = useState(null);
    const { http } = AuthUser();
    const { id } = useParams();
    console.log('userId ', id);

    const fetchApiScreenUser = async () => {
        try {
            const response = await http.get(`/users/${id}`);
            return response.data.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        fetchApiScreenUser()
            .then(apiScreenUser => {
                setScreenUser(apiScreenUser);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <>
            <div className="container">
                <h2>User</h2>
                <Link to={'/user'}>
                    <button type="button" className="btn btn-secondary mb-3">Back to user</button>
                </Link>
            </div>
            <div className="row">
                {screenUser ? (
                    <div className="col-md-4 mb-4">
                        <CCard>
                            <CCardBody>
                                <h5 className="card-title">{screenUser.username}</h5>
                                <p className="card-text">Email: {screenUser.email}</p>
                            </CCardBody>
                        </CCard>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default ScreenUser;
