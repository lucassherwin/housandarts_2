import React from 'react'

export default function Apparel({ apparel }) {
  return (
    <div>
      {
        apparel.map(item => (
          <div>
            <img src={item.fireBaseUrl} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}
