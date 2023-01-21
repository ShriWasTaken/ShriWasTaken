    import React from "react";
    import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
    import './index.css';
 import Typewriter from 'typewriter-effect';
  const typeWriterText = 'typeWriterText';
  
    function Home(){

        return(
            <>
            <div className="brand-desc">            
                <p className="text-left mx-3 my-1 text-responsive" style={{color:"white"}}>Shriharsh Acharya,
                </p><br/>
                <p><div className='row'>
                <div className='col-md-4 ' ><p className="text-responsive" style={{fontSize:"3.125rem",textDecoration:"none" ,color:"white",textAlign:'center'}}  >A</p></div>
                  <div  className='col-md-4' style={{fontSize:"3.125rem",textDecoration:"none" ,color:"white",textAlign:"left",marginTop:'0px',paddingTop:'0px'}} >
                  <Typewriter options={{strings: ['developer','physics enthusiast','bibliophile','passionate engineer'],autoStart: true,loop: true,wrapperClassName: typeWriterText}}/>
                    </div> 
                    </div>
                </p><p>
                    <a href=''className="text-responsive my-1 mx-1" style={{fontSize:"1.875rem",color:"white",textDecoration:"none"}}>to learn more.</a></p>
            </div>

       </> );
    };

    export default Home;