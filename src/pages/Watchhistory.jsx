import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

function Watchhistory() {
const[history,setHistory]=useState([])

const getHistory=async()=>{
  const result=await getHistoryAPI()
  // console.log(result);
  if(result.status==200){
    setHistory(result.data)
  }else{
    console.log('API failed');
    setHistory([])
    
  }
  
}

const removeHistory=async(id)=>{
  await deleteHistoryAPI(id)
  getHistory()
}


useEffect(()=>{
  getHistory()
},[])


  return (
    <div>
     <div className='container d-flex justify-content-between'>
      <h1>Watch history</h1>
      <Link to={'/home'} style={{textDecoration:'none',color:'blueviolet', fontSize:'30px'}}>Back to Home <i class="fa-solid fa-backward-fast fa-shake fa-xl"></i> </Link>
     </div>
<table className='container shadow '>
  <thead>
    <tr>
      <th>#</th>
      <th>Video Title</th>
      <th>URL</th>
      <th>TimeStamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   { 
   history?.length>0?history.map((video,index)=>(
    <tr>
    <td className='text-warning'>{index+1}</td>
    <td className='fw-bolder'>{video.title}</td>
    <td ><a href='{video.link}'>{video.link}</a></td>
    <td>{video.timeStamp}</td>
    <td> <button className='btn  ' onClick={e=>removeHistory(video?.id)} > <i class="fa-solid fa-trash fa-bounce fa-xl text-danger"></i></button> </td>
    </tr>
   )):<p className='text-danger fw-bolder'>Nothing to Display</p>
    
   
    }
  </tbody>

</table>


    </div>
  )
}

export default Watchhistory
