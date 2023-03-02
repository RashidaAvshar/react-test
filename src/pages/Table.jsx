import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BASE_URL } from '../utilis/constans';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'surname', headerName: 'Surname', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'password', headerName: 'Password', width: 130 },

];



const Table = () => {

  const [userData, setUserData] = useState([]);
    useEffect(()=>{
        axios.get(`${BASE_URL}/get-data`).then((res)=>{
        setUserData(res.userData);
    })
    },[]);

  return (
    <div className='container'>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>      
    </div>
  )
}

export default Table;
