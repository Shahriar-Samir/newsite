import React from "react";


export default function Header(){
  
  
  const [show_si, shown] = React.useState("") 
  
  function show(){
     shown("show")
  }
   
   function hide(){
       shown("")
   }

    return(
     <>
     <div className={"sign_in position-fixed align-items-center justify-content-center "+show_si}>
       <div className="bg-dark">
        
       <p className="cut" onClick={hide}>cut</p>


       <label>Email:</label>
          <input type="email"/><br/>
          <label>Password:</label>
          <input type="password"/>
       </div>
     </div>
     
     <header className="d-flex flex-column flex-md-row justify-content-around align-items-center bg-black pt-2 pb-2 w-100">
          <h1 className="m-0 p-0 mb-2 mb-md-0">Shahriar Samir</h1>
          <ul className="d-flex list-unstyled m-0 p-0 mb-2 mb-md-0">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button onClick={show}>Sign In</button>
        </header>
     
     </>
    )
}