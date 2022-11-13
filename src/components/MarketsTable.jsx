import React from 'react'
import MarketTableHeader from './MarketTableHeader'
import MarketTableRow from './MarketTableRow'
import MarketTableFooter from './MarketTableFooter'
import { Link } from 'react-router-dom'

function MarketsTable({marketsData}) {
  return (
    <div id="MarketsTable">
      <Link to="/markets/new">ADD</Link>
      <table className='table table-zebra table-compact'>
          <MarketTableHeader/>
          <tbody>
              {marketsData.map((m,k) => (
                  <MarketTableRow key={m.id?m.id:k} market={m} />
              ))}
          </tbody>
          <MarketTableFooter />
      </table>
    </div>
  )
}

export default MarketsTable