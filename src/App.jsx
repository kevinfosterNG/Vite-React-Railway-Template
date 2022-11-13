import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ClinicsTable from './components/ClinicsTable';
import ClinicsNew from './components/ClinicsNew';
import MarketsNew from './components/MarketsNew';
import BrandsNew from './components/BrandsNew';
import Navbar from './components/Navbar';
import CallRoutesNew from './components/CallRoutesNew';
import UsersNew from './components/UsersNew';
import DataTable from './components/DataTable';

function App() {
  const [clinicsData, setClinicsData] = useState([{}]);
  useEffect(() => {
    var uri = "/api/clinics";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setClinicsData(data)})
  }, [])

  const [marketsData, setMarketsData] = useState([{}]);
  useEffect(() => {
    var uri = "/api/markets";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setMarketsData(data)})
  }, [])

  const [callRoutesData, setCallRoutesData] = useState([{}]);
  useEffect(() => {
    var uri = "/api/call_routes";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setCallRoutesData(data)})
  }, [])

  const [brandsData, setBrandsData] = useState([{}]);
  useEffect(() => {
    var uri = "/api/brands";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setBrandsData(data)})
  }, [])

  const [usersData, setUsersData] = useState([{}]);
  useEffect(() => {
    var uri = "/api/users";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setUsersData(data)})
  }, [])

  const [schemasData, setSchemasData] = useState([]);
  useEffect(() => {
    var uri = "/api/schemas";
    fetch(uri)
      .then(response => response.json())
      // .then(console.log(`${uri} called`))
      .then(data => {setSchemasData(data)})
  }, [])

  return (
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path='/' element={<ClinicsTable clinicsData={clinicsData} />} />
              <Route path='/clinics' element={<ClinicsTable clinicsData={clinicsData} />} />
              <Route path="/clinics/new" element={<ClinicsNew schemas={schemasData} schema="clinics.json"/>} />

              <Route path='/markets' element={<DataTable data={marketsData} schemas={schemasData} schema="markets.json" />} />
              <Route path="/markets/new" element={<MarketsNew schemas={schemasData} schema="markets.json" />} />

              <Route path='/brands' element={<DataTable data={brandsData} schemas={schemasData} schema="brands.json" />} />
              <Route path="/brands/new" element={<BrandsNew schemas={schemasData} schema="brands.json" />} />

              <Route path='/call_routes' element={<DataTable data={callRoutesData} schemas={schemasData} schema="call_routes.json" />} />
              <Route path="/call_routes/new" element={<CallRoutesNew schemas={schemasData} schema="call_routes.json" />} />

              <Route path='/users' element={<DataTable data={usersData} schemas={schemasData} schema="users.json" />} />
              <Route path="/users/new" element={<UsersNew schemas={schemasData} schema="users.json" />} />

          </Routes> 
        </div>
      </Router>
  )
}

export default App