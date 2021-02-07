import React from 'react'

export default function Patterns({ patterns }) {
  return (
    <div>
      {
        patterns.map(item => (
          <div key={item.title}>
            <img src={item.fireBaseUrl} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}
