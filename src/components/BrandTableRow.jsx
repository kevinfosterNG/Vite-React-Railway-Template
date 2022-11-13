import React from 'react'
import Spinner from './Spinner';

//contenteditable='true'
function BrandTableRow({brand}) {
  return (typeof {brand}.brand.id === 'undefined') ? <Spinner/> : 
    <tr id={`brand+${brand.id}`}>
      <td>{brand.id}</td>
      <td>{brand.name}</td>
      <td>{brand.abbr}</td>
      <td>{brand.active ? "✔️" : "❌"}</td>
      <td><button className='btn btn-sm'>✏️</button></td>
    </tr>
}

export default BrandTableRow