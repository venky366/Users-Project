import React from 'react'
import { Link } from 'react-router-dom';
import "./Style.css";


export default function Heder() {
    return (
        <div>
        <div className="Heder-Css">
        <h1>Employee List</h1>
        <div  className=".Link" >
         <Link to='/Users'>Users List</Link>
         </div>
        </div>
        
         </div>
    )
}
