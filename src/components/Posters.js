import React from 'react'

export default function Posters({ posters }) {
  return (
    <div>
      {
        posters.map(item => (
          <div key={item.title}>
            <img src={item.fireBaseUrl} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}
