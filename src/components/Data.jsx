import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Data = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const url = import.meta.env.VITE_EXPESS_API_URL; 
    const url2 = url + '/data'
    console.log(url2);

    useEffect(() => {
        axios
          .get(url2)
          .then((res) => {
            setData(res.data);
            console.log(res.data);
       
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])
         console.log(data);
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
          <h1>Data</h1>
          <h2>{data.name}</h2>
          <h2>{data.address}</h2>
          <h2>{data.city}</h2>

      </div>
  )
}

export default Data