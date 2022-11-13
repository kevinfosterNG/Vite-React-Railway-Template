import React from 'react'

function ClinicTableHeader() {
  return (
    <thead key="clinicTableHeader">
        <tr>
            <th className='px-4 py-2'>Clinic Name</th>
            <th className='px-4 py-2'>Market</th>
            <th className='px-4 py-2'>Brand</th>
            <th className='px-4 py-2'>Address</th>
            <th className='px-4 py-2'>Suite</th>
            <th className='px-4 py-2'>City</th>
            <th className='px-4 py-2'>Zip Code</th>
            <th className='px-4 py-2'>County</th>
        </tr>
    </thead>
  )
}

export default ClinicTableHeader