const Notification=({message})=>{
  if(message.successmsg===null && message.errormsg===null){
    return null
  }else if(message.successmsg){
    return <p className="success">{message.successmsg}</p>
  }else{
    return <p className="error">{message.errormsg}</p> 
  }

}

export default Notification;