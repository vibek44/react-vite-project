import axios from "axios";
const baseurl=`http://localhost:3001/persons`

const getAll=()=>{
  const request= axios.get(baseurl)
  return request.then(res=>res.data)
}

const create=(createdPerson)=>{
  const request= axios.post(baseurl,createdPerson)
  return request.then(res=>res.data)
}

const update=(id,updatedPerson)=>{
  const request= axios.put(`${baseurl}/${id}`,updatedPerson)
  return request.then(res=>res.data)
}

const remove=(id)=>{
  const request= axios.delete(`${baseurl}/${id}`)
  return request.then(res=>res.data)
}

export default { 
  getAll,
  create,
  update,
  remove
}