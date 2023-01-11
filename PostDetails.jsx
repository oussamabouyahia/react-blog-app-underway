import React from "react";
import OnePost from "./OnePost";

const PostDetails = ({blog,changeView}) => (
  
    <div className="blog-list-item" >          
      <div className="blog-list-item-title"
       onClick={()=>{ 
       changeView("onePost")
      }}> {blog.title} </div>
      <div className="blog-list-item-byline" >        
        <span className="blog-list-item-byline-author" > {blog.author}  </span>
        {blog.published_at}                                                                
      </div>                                                                            
      <div className="blog-list-item-lede">                           
       <img src={blog.imageUrl} alt="no content"/>            
      </div>    
    </div> 
);   

export default PostDetails; 