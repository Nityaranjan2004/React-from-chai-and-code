import React from "react";
import UserContext from "./UserContext";

const UserContextprovider=({children})=>{

    //here if i want to get the valuse i call user and set the value i call setUser
    const [user,setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {/* //Wrap all child components and give them access to context */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextprovider;