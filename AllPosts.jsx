import React from "react";
import exampleBlogData from "../data/exampleBlogData";
import PostDetails from "./PostDetails.jsx";
// import OnePost from "./OnePost";


const AllPosts = (props) => exampleBlogData.map( blog => <PostDetails  blog ={blog} changeView= {props.changeView} /> ) ;

export default AllPosts;