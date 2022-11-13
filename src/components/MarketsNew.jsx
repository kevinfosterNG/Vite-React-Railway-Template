import React from 'react'

function MarketsNew() {
  return (
    <div id="addMarket">
    <form onSubmit={(e) => {console.log("submitting..."); }} action="/api/markets" method="post" >
        <textarea type="text" name="newMarket"></textarea>
        <input type="submit"></input>
    </form>
    </div>
  )
}

export default MarketsNew