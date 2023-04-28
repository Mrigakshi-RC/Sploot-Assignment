import React from "react";

const BlogContext=React.createContext({
    categories:[],
    updateCategory:()=>{},
    slug:[],
    updateSlug:()=>{}
});

export default BlogContext;