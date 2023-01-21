
import React from "react";

const Blog = () => {
    return(
        <>
        <h1 style={{color:"white",textAlign:"center"}} className="brand-desc text-responsive" >Blogs</h1>

        <ol className="text-left">
            <p className="brand-desc" style={{color:"white",textAlign:"left"}}>Posts:</p>
            <br/>
            <li className="brand-desc mx-5"><a style={{color:'white'}} href='https://youtube.com' target={'blank'}>How I made a sudoku puzzle solver</a></li>
        
        </ol>
        </>
        );
};

export default Blog;