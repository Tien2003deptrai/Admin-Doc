import React, { useState, useEffect } from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { AuthUser } from 'src/services/AuthUser';
import { useParams } from 'react-router-dom';

const SrceenEmployee = () => {
    const [SrceenEmployee, setSrceenEmployee] = useState([]);
    const { http } = AuthUser();
    const { id } = useParams();

    const fetchApiSrceenEmployee = async () => {
        try {
            const response = await http.get(`/v1/users/${id}`);
            return response.data.tasks;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    useEffect(() => {
        fetchApiSrceenEmployee()
            .then(apiSrceenEmployee => {
                setSrceenEmployee(apiSrceenEmployee);
                console.log('apiSrceenEmployee', SrceenEmployee);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div className="container">
                <h2>Danh sách công việc</h2>
            </div>
            <CCard className="mb-4">
                <CCardBody>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên công việc</th>
                                    <th scope="col">Ngày bắt đầu</th>
                                    <th scope="col">Ngày kết thúc</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SrceenEmployee.map((member, index) => (
                                    <tr key={`member${index}`}>
                                        <td>{member.id}</td>
                                        <td>{member.name}</td>
                                        <td>{member.startDate}</td>
                                        <td>{member.endDate}</td>
                                        <td>{member.status}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-block">
                                                <button type="button" className="btn btn-primary mb-2">Sửa</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CCardBody>
            </CCard>
        </>
    );
};

export default SrceenEmployee;
