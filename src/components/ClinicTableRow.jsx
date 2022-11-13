import React from 'react'
import Spinner from './Spinner';

function ClinicTableRow({clinic}) {
    return (typeof {clinic}.clinic.id === 'undefined') ? <Spinner/> : 
    <tr>
        <td>{clinic.location_name}</td>
        <td>{clinic.market}</td>
        <td>{clinic.brand}</td>
        <td>{clinic.address.address_line_1}</td>
        <td>{clinic.address.suite}</td>
        <td>{clinic.address.city}</td>
        <td>{clinic.address.zip}</td>
        <td></td>
    </tr>
}

export default ClinicTableRow



/*
{(typeof clinicsData === 'undefined') ? (
        <p>Loading...</p>
      ) : (
         clinicsData.map((clinic) => (
           <div key={clinic.id}>
            {clinic.location_name}
            {clinic.practice.name}
            <a href={`https://solvhealth.com/book-online/${clinic.solv}`}>Solv</a>
          </div>
      ))
    )
  } 
*/