import React from 'react'

export default function Packaging({ packaging }) {
  return (
    <div>
      {
        packaging.map(item => (
          <div key={item.title}>
            <img src={item.fireBaseUrl} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}