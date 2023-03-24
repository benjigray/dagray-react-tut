import React from 'react'

const Footer = ({ length }) => {

  return (
    <div>
        <p>{ length } List { length === 1 ? 'Item' : 'Items'}</p>
    </div>
  )
}

export default Footer