const ContactForm=({name,number,handleSubmit,handleName,handleNumber})=>
  <form onSubmit={handleSubmit}>
    <div>
      Name:<input type="text" onChange={handleName} value={name} />
    </div>
    <div>
      Phone:<input type="number" onChange={handleNumber} value={number} />
    </div>
    
    <button type='submit'>Add</button>
   

  </form>

  export default ContactForm