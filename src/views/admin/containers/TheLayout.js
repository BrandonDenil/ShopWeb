import React from 'react'
import {
  TheContent,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div >
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
      </div>
    </div>
  )
}

export default TheLayout
