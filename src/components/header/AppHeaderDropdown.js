import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilFile,
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { AuthUser } from 'src/services/AuthUser'
import { useNavigate } from 'react-router-dom'

const AppHeaderDropdown = () => {

  const { logout } = AuthUser();
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem onClick={() => handleProfile()}>
          <CIcon icon={cilUser} className="me-2" />
          Thông tin cá nhân
        </CDropdownItem>
        <CDropdownItem onClick={() => handleProfile('/jobs')}>
          <CIcon icon={cilSettings} className="me-2" />
          Thống kê công việc
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <button onClick={() => logout()} className="btn btn-primary">
            <CIcon icon={cilLockLocked} className="me-2" />
            Lock Account
          </button>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown >
  )
}

export default AppHeaderDropdown
