import React from 'react'
import {
  TheContent,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div style={{  display:"flex", flexDirection:"column" }}>
      <TheHeader />
      <div className="c-body" >
        <TheContent />
      </div>
    </div>
  )
}

export default TheLayout
