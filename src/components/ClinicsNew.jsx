import React from 'react'

function ClinicsNew() {
  return (
    <div id="addClinic">
    <form onSubmit={(e) => {console.log("submitting..."); }} action="/api/clinics" method="post" >
        <textarea type="text" name="newClinic"></textarea>
        <input type="submit"></input>
    </form>
    </div>
  )
}

export default ClinicsNew