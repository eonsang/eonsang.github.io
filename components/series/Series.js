import Link from 'next/link'
import React from 'react'

const Series = ({ series, index }) => {
  return (
    <div>
      <h2 className="m-0 mb-4">Series</h2>
      <div className="border border-[#444] p-4">
        <ul>
          {series.map((item, idx) => (
            <li key={item.id}>
              {item.link ? (
                <Link href={item.link}>{item.name + (idx === index ? ' ✅' : '')}</Link>
              ) : (
                <span className="text-[#666]">{item.name} (작성 전...)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Series
