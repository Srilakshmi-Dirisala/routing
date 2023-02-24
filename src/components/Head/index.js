import React from 'react'
import { Link } from 'react-router-dom'


const Head = () => {
    return (
       <div>
        
        
       <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link  className="navbar-brand">Quantum</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link active">Contact</Link>
        </li>
       
        
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

   
   </div>
    );
}

export default Head