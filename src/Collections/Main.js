import React from 'react'
import Heder from './Heder'
import Footer from './Footer'
import './Style.css'
 function Main() {
    return (
        <div>
        <div >
         <Heder />
        </div>
        <div >
            <center>
         <p style={{fontSize:"20px" ,color:"red"}}> Enter Employee Name into Data Base</p>       
            <input
           className="Main.css"
            type='text'
            id='user' >
            </input><br/>
            <button>Add into Db</button>
            </center>
       </div>
         <div>
             <Footer />
             </div>
        </div>
    )
}
export default Main;
