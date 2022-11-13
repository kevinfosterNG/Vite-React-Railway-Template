import React from 'react'
import CallRouteTableRow from './CallRouteTableRow'
import { Link } from 'react-router-dom'

function CallRoutesTable({callRoutesData}) {
  return (
    <div id="CallRoutesTable">
      <Link to="/call_routes/new">ADD</Link>
      <table className='table table-zebra table-compact'>
        <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Enabled?</th>
            </tr>
          </thead>
          <tbody>
              {callRoutesData.map((c,k) => (
                  <CallRouteTableRow key={c.id?c.id:k} call_route={c} />
              ))}
          </tbody>
      </table>
    </div>
  )
}

export default CallRoutesTable