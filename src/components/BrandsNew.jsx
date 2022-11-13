import React from 'react'

function BrandsNew() {
  return (
    <div id="addBrand">
    <form onSubmit={(e) => {console.log("submitting..."); }} action="/api/brands" method="post" >
        <textarea type="text" name="newJSON"></textarea>
        <input type="submit"></input>
    </form>
    </div>
  )
}

export default BrandsNew