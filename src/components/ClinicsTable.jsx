import React from 'react'
import ClinicTableHeader from './ClinicTableHeader';
import ClinicTableRow from './ClinicTableRow';
import ClinicTableFooter from './ClinicTableFooter';
import { Link } from 'react-router-dom';

function ClinicsTable({clinicsData}) {
  return (
    <div id="clinicTable">
      <h1>Clinics</h1>
      <Link to="/clinics/new">ADD</Link>
        <table className='table table-zebra table-compact'>
          <ClinicTableHeader key={"cth"} />
          <tbody>
            {clinicsData.map((c,k) => (
                <ClinicTableRow key={c.id?c.id:k} clinic={c} />
            ))}
          </tbody>
          <ClinicTableFooter key={"ctf"} />
        </table>
    </div>
  )
}

export default ClinicsTable