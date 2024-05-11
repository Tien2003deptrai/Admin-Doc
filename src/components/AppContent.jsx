import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import Profile from 'src/views/profile/Profile'
import Page403 from 'src/views/pages/page403/Page403'

import AddEmployee from 'src/views/employee/addEmployee/AddEmployee'
import UpdateEmployee from 'src/views/employee/updateEmployee/UpdateEmployee'
import SrceenEmployee from 'src/views/employee/screenEmployee/ScreenMember'

import AddProduct from 'src/views/product/addProduct/AddProduct'
import UpdateProduct from 'src/views/product/updateProduct/UpdateProduct'

import AddUser from 'src/views/user/addUser/AddUser'
import ScreenUser from 'src/views/user/screenUser/ScreenUser'

const AppContent = () => {

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/update/:id" element={<UpdateEmployee />} />
          <Route path="/employee/screen/:id" element={<SrceenEmployee />} />

          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/update/:id" element={<UpdateProduct />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/screen/:id" element={<ScreenUser />} />

          <Route path="/403" element={<Page403 />} />

        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
