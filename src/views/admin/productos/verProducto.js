import React from 'react'
import { useParams } from 'react-router'

const VerProducto = () => {

    const {id}= useParams()

    return (
        <div>
            ver producto {id}
        </div>
    )
}

export default VerProducto