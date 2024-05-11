import React, { useEffect, useState } from 'react'
import { CCard, CCardBody } from '@coreui/react'
import { AuthUser } from 'src/services/AuthUser';

const Profile = () => {

    const { http } = AuthUser();

    const [taskStatistics, setTaskStatistics] = useState(0);

    useEffect(() => {

        const fetchApiTaskStatistics = async () => {
            const response = await http.get('http://localhost:8080/api/v1/taskStatistics');
            const apiTaskStatistics = response.data;
            setTaskStatistics(apiTaskStatistics);
            console.log('taskStatistics', taskStatistics);
        }

        fetchApiTaskStatistics();

    }, [])
    return (
        <>
            <div className="container">
                <h3>Chi tiết thành viên</h3>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Thông tin thành viên
                                                    </div>
                                                    <div className="member-info" style={{ height: '150px', overflow: 'hidden' }}>
                                                        <img src='https://th.bing.com/th/id/OIP.pH1s8H18YJcCvQUuOzQUqQHaHa?rs=1&pid=ImgDetMain' alt="Member Info" className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div className="text-center">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Chưa bắt đầu
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                    {taskStatistics.notStarted}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Đang thực hiện
                                                    </div>
                                                    {taskStatistics.inProgress}
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                                        Hoàn thành
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                                {taskStatistics.completed}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <div>
                        <h4>Danh sách công việc</h4>
                    </div>
                    <CCard className="mb-4">
                        <CCardBody>
                            <table className="table text-center justify-content-center">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên công việc</th>
                                        <th scope="col">Dự án</th>
                                        <th scope="col">Người thực hiện</th>
                                        <th scope="col">Ngày bắt đầu</th>
                                        <th scope="col">Ngày kết thúc</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Phân tích dự án</td>
                                        <td>Dự án CRM</td>
                                        <td>Nguyễn Văn Tèo</td>
                                        <td>22/05/2019</td>
                                        <td>30/05/2019</td>
                                        <td>Đã hoàn thành</td>
                                        <td>
                                            <button type="button" className="btn btn-success">Cập nhật</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </CCardBody>
                    </CCard>
                </div>
            </div>

        </>
    )
}

export default Profile