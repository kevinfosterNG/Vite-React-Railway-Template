import React from 'react'

function MarketTableHeader({market}) {
  return (//  {market} ? 
    <tr>
      <td>{market.id}</td>
      <td>{market.name}</td>
      <td>{market.active ? "✔️" : "❌"}</td>
      <td>{market.editors}</td>
    </tr>
    // : <div>Loading...</div>
  )
}

export default MarketTableHeader