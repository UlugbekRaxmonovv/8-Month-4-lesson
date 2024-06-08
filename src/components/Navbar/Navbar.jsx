
import React,{useState} from 'react';
import './Navbar.css'
// import rasm1 from '../../assets/img/log1.jpg'
const Navbar = () => {

    const [fix,setFix] =useState(false);


    function setFixd(){
      if(window.scrollY >= 10){
        setFix(true)
      }
      else{
        setFix(false)
      }
    }
    window.addEventListener('scroll', setFixd)


    return (
        <div className={ fix ? 'header fixed ' : 'navbar'}>

<div className="n-wrapper container">
       <div className="n-lift">
        <div className="n-name">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4UQK-9Z_UF4QEMsrzvFhBtj83LIex95q_Q&s" alt="" />
        </div>
       </div>
       <div className="n-rigth">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
          <a href="" className="">Home</a>
           <a href="" className="">User</a>
          <a href="" className="">Service</a>
          <a href="" className="">Exsprese</a>
          <a href="" className="">Testimonials</a>
            </ul>
        </div>
        <button className="button">
          <a href="" className="">Admin</a>
        </button>
       </div>
     </div>
            
        </div>
    );
}

export default Navbar;
