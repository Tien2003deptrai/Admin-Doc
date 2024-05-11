import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Footer</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Footer</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
