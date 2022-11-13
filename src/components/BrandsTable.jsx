import React from 'react'
import BrandTableRow from './BrandTableRow'
import { Link } from 'react-router-dom'

function BrandsTable({brandsData}) {
  return (
    <div id="BrandsTable">
      <Link to="/brands/new">ADD</Link>
      <table className='table table-zebra table-compact'>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>abbr</th>
              <th colSpan={2}>ACTION(s)</th>
            </tr>
          </thead>
          <tbody>
            {brandsData.map((b,k) => (
                <BrandTableRow key={b.id?b.id:k} brand={b} />
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default BrandsTable