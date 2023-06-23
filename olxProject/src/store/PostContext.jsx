import { createContext, useState } from "react";
export const PostContext=createContext(null)

export function Post({children}){
    const [postDetails,setPostDetail]=useState({})
    
    return(
        <div>
          <PostContext.Provider value={{postDetails,setPostDetail}}>
            {children}
          </PostContext.Provider>
        </div>
    )
}

export default Post