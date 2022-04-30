import React from 'react'
import Header from '../../../compoents/headerManagement/TheHeader'
import Content from './Content'

const AdminLayout = () => {

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="c-body" >
        <Content />
      </div>
    </div>
  )
}

export default AdminLayout
