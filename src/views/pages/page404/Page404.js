import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    // navigate('/')
    // navigate.goBack();
    window.history.back();
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center text-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="">404</h1>
            </div>
            <div>
              <h5 className="">Bạn không có quyền truy cập</h5>
            </div>
            <div>
              <p className="">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
            </div>
            <div>
              <CButton onClick={handleClick} color="info">Về trang chủ</CButton>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
